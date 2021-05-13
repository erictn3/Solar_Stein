const router = require('express').Router();
const mongoose = require('mongoose');
const { User } = require('../../models');

//const prettyJson = JSON.stringify(workout, null, 2);
//console.log(prettyJson);

router.post('/', async ({ body }, res) => {
  try {
    body.jobOpportunities = [];
    const newUser = await User.create(body);
    const newUserDto = getUserDto(newUser);

    res.status(200).json(newUserDto);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async ({ body }, res) => {
  try {

    let result = null;
    let isGetOne = false;
    let errorSuffix = null;

    console.log('FIRST');

    // find user by Id
    if (body.id != null) {
      console.log(`ID is NOT NULL: '${body.id}'`);
      result = await User.findById(body.id).populate('jobOpportunities');
      isGetOne = true;
      errorSuffix = `id: ${body.id}`;

      console.log('ID is NULL');
    
    // find by email
    } else if (body.email != null) {
      console.log(`EMAIL is NOT NULL: '${body.email}'`);
      result = await User.findOne({ email: body.email }).populate('jobOpportunities');
      isGetOne = true;
      errorSuffix = `email: ${body.email}`;
    }

    console.log(`isGetOne: ${isGetOne}`);

    if (isGetOne) {
      if (result != null) {
        const userDto = getUserDto(result);
        res.status(200).json(userDto);

      } else {
        res.status(404).json({ message: `No user found with ${errorSuffix}` });
      } 
    
    // find all users
    } else {
      result = await User.find({}).populate('jobOpportunities');
      const users = result.map((user) => (getUserDto(user)));

      res.status(200).json(users);
    }

  } catch (err) {
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

// router.put('/', async ({ body, params }, res) => {
//   try {
//     const workout = await Workout.findByIdAndUpdate(params.id,
//       { $push: { exercises: body } },
//       {
//         // "new" will return object after update is applied
//         new: true,
        
//         // "runValidators" ensures schema validators are applied
//         runValidators: true
//       }
//     );
//     res.json(workout);

//   } catch (err) {
//     res.json(err);
//   }
// });

// router.delete('/workouts/:id', async ({ params }, res) => {
//   try {
//     const result = await Workout.deleteOne({ _id: mongoose.Types.ObjectId(params.id) });
//     res.json(result);

//   } catch (err) {
//     res.json(err);
//   }
// });

function getUserDto(user) {
  let result = null;

  if (user != null) {
    const { email, createdDate, _id, jobOpportunities, ...rest } = user;
    result = { id: _id, email, jobOpportunities, createdDate };
  }

  return result;
}

module.exports = router;
