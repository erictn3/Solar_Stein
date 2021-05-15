const router = require('express').Router();
const mongoose = require('mongoose');
const { User, JobOpportunity } = require('../../models');

//const prettyJson = JSON.stringify(workout, null, 2);
//console.log(prettyJson);

router.post('/', async ({ body }, res) => {
  try {
    body.jobOpportunities = [];
    const newUser = await User.create(body);
    const newUserDto = createUserDto(newUser);

    res.status(200).json(newUserDto);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/', async ({ body }, res) => {
  try {

    let result = null;
    let isGetOne = false;
    let errorSuffix = null;

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
