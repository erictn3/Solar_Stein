const router = require('express').Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//const { body, validationResult } = require('express-validator');
const { User, JobOpportunity } = require('../../models');

//const prettyJson = JSON.stringify(workout, null, 2);
//console.log(prettyJson);

router.post('/login', async ({ body }, res) => {
  //router.post('/login', async (req, res) => {
    try {
      console.log(body);
      // const userData = await User.findOne({ where: { email: req.body.email } });
      // console.log(userData)
  
      // if (!userData) {
      //   console.log('reached here!!')
      //   res
      //     .status(400)
      //     .json({ message: 'Incorrect email or password, please try again' });
      //   return;
      // }
  
      // const validPassword = await userData.checkPassword(req.body.password);
  
      // if (!validPassword) {
      //   res
      //     .status(400)
      //     .json({ message: 'Incorrect email or password, please try again' });
      //   return;
      // }
  
      // req.session.save(() => {
      //   req.session.user_id = userData.id;
      //   req.session.logged_in = true;
        
        res.json({ user: body.email, message: 'You are now logged in!' });
      // });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.post('/logout', (req, res) => {
  // if (req.session.logged_in) {
  //   req.session.destroy(() => {
  //     res.status(204).end();
  //   });
  // } else {
  //   res.status(404).end();
  // }
  res.json({ message: 'Successfully logged out!' });
});

router.post('/get', async (req, res) => {
  try {

    let body = req.body;

    console.log('API GET USER:');
    console.log(body);

    let result = null;
    let isGetOne = false;
    let errorSuffix = null;

    // let cookieHeader = req.header('Cookie');
    // let cookies = cookieHeader.split(';');
    // let xAuthToken = null;

    // for (let cookie of cookies) {
    //   if (cookie.trim().startsWith('x-auth-token')) {
    //     let components = cookie.split('=');
    //     xAuthToken = components[1].trim();
    //     break;
    //   }
    // }

    // console.log('XAUTHTOKEN:');
    // console.log(xAuthToken);

    // find user by Id
    if (body.id != null) {
      result = await User.findById(body.id).populate('jobOpportunities');
      isGetOne = true;
      errorSuffix = `id: ${body.id}`;
    
    // find by email
    } else if (body.email != null) {
      result = await User.findOne({ email: body.email }).populate('jobOpportunities');
      isGetOne = true;
      errorSuffix = `email: ${body.email}`;
    }

    if (isGetOne) {
      if (result != null) {
        const userDto = createUserDto(result);
        res.status(200).json(userDto);

      } else {
        res.status(404).json({ message: `No user found with ${errorSuffix}` });
      } 
    
    // find all users
    } else {
      result = await User.find({}).populate('jobOpportunities');
      const users = result.map((user) => (createUserDto(user)));

      res.status(200).json(users);
    }

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async ({ body }, res) => {
  try {
    body.jobOpportunities = [];
    // const newUser = await User.create(body);
    // const newUserDto = createUserDto(newUser);

    // CREATE INSTANCE OF USER
    const reqUser = new User({
      email: body.email
    });

    // ADD SALT ENCRYPTION WITH BCRYPTJS
    const salt = await bcrypt.genSalt(10);
    reqUser.password = await bcrypt.hash(body.password, salt);

    // INSERT NEW USER INTO DB
    const newUser = await User.create(reqUser);
    const newUserDto = createUserDto(newUser);

    // GENERATE JSON WEB TOKEN
    let jsonToken;

    const payload = {
      user: {
        id: newUserDto.id
      }
    }

    console.log('FIRST JSONTOKEN:');
    console.log(jsonToken);

    await jwt.sign(
      payload,
      'jwtSecret1234',
      { expiresIn: '2 days'},
      async (err, token) => {
        console.log('TOKEN:');
        if (err) throw err;
        jsonToken = `x-auth-token=${token}; HttpOnly`;
        console.log(jsonToken);

        res.header('Set-Cookie', jsonToken);
        res.status(200).json(newUserDto);
      }
    )

    console.log('JSONTOKEN AGAIN:');
    console.log(jsonToken);

    // NEED TO INSERT TOKEN AS A HEADER
    // Set-Cookie
    // x-auth-token
    // connect.sid=s%3Ad1lgtZ3rdYG04zcIxiync4GETa6lbcdQ.30AwdVEmnRYmdB1evzpJ2ctd7NCVkj%2BJZL7TKAE2nTk; Path=/; HttpOnly

    // res.header('Set-Cookie', jsonToken);
    // res.status(200).json(newUserDto);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get('/id', async ({ body }, res) => {
//   try {
//     const user = await User.findById(body._id).populate('jobOpportunities');
//     res.json(user);

//   } catch (err) {
//     console.log(err);
//     res.json(err);
//   }
// });


// router.get('/email', async ({ body }, res) => {
//   try {

//     const user = await User.findOne({ email: body.email }).populate('jobOpportunities');
//     res.json(user);

//   } catch (err) {
//     console.log(err);
//     res.json(err);
//   }
// });

router.put('/', async ({ body }, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(body.id, { $set: { email: body.email, password: body.password }}, { new: true });
    const updatedUserDto = createUserDto(updatedUser);

    res.status(200).json(updatedUserDto);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/', async ({ body }, res) => {
  try {
    const user = await User.findById(body.id);
    let deletedJobOpsCount = 0;

    if (user) {
      //deletedJobOpsResult = await JobOpportunity.deleteMany({ _id: { $in: user.jobOpportunities }});
      deletedJobOpsResult = await JobOpportunity.deleteMany({ _id: user.jobOpportunities });
      deletedJobOpsCount = deletedJobOpsResult.deletedCount;
    }
    
    const { deletedCount } = await User.deleteOne({ _id: mongoose.Types.ObjectId(body.id) });

    if (deletedCount != null && deletedCount > 0) {
      let messageSuffix = deletedJobOpsCount == 1 ? 'opportunity' : 'opportunities';
      res.status(200).json({ message: `Deleted user with id ${body.id} and ${deletedJobOpsCount} job ${messageSuffix}` });
    } else {
      res.status(404).json({ message: `No user found with id: ${body.id}` });
    }

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

function createUserDto(user) {
  let result = null;

  if (user != null) {
    const { email, createdDate, _id, jobOpportunities, ...rest } = user;
    result = { id: _id, email, jobOpportunities, createdDate };
  }

  return result;
}

module.exports = router;
