const router = require('express').Router();
const mongoose = require('mongoose');
const { JobOpportunity, User } = require('../../models');

//const prettyJson = JSON.stringify(workout, null, 2);
//console.log(prettyJson);

router.post('/', async ({ body }, res) => {
  try {
    const newJobOpportunity = await JobOpportunity.create(body);
    const newJobOpDto = createJobOpportunityDto(newJobOpportunity);
    
    res.status(200).json(newJobOpDto);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/', async ({ body }, res) => {
  try {
    let result = null;

    // find jobOpportunity by Id
    if (body.id != null) {
      result = await JobOpportunity.findById(body.id);

      if (result != null) {
        const jobOpDto = createJobOpportunityDto(result);
        res.status(200).json(jobOpDto);

      } else {
        res.status(404).json({ message: `No jobOpportunity found with id: ${body.id}` });
      }
    
    // find all jobOpportunities
    } else {
      result = await JobOpportunity.find({});
      const jobOps = result.map((jobOp) => (createJobOpportunityDto(jobOp)));
      
      //https://medium.com/@drevets/get-that-post-request-working-by-enabling-cors-on-an-express-backend-to-chat-w-ur-react-frontend-6d3405c65f65
      //res.header('Access-Control-Allow-Origin', '*');
      //res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      //res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      //res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');

      //res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // the URI you will make the request from
      res.status(200).json(jobOps);
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
    const updatedJobOp = await JobOpportunity.findByIdAndUpdate(body.id, body, { new: true });
    const updatedJobOpDto = createJobOpportunityDto(updatedJobOp);

    res.status(200).json(updatedJobOpDto);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/', async ({ body }, res) => {
  try {
    const { deletedCount } = await JobOpportunity.deleteOne({ _id: mongoose.Types.ObjectId(body.id) });

    if (deletedCount != null && deletedCount > 0) {
      res.status(200).json({ message: `Deleted Job Opportunity: ${body.id}` });
    } else {
      res.status(404).json({ message: `No Job Opportunity found with id: ${body.id}` });
    }

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

function createJobOpportunityDto(jobOpportunity) {
  // let result = null;

  // if (jobOpportunity != null) {
  //   const { _id, __v, ...rest } = jobOpportunity;
  //   result = { id: _id, ...rest };
  // }

  // TEMPORARY
  result = jobOpportunity;
  // ##########

  return result;
}

module.exports = router;
