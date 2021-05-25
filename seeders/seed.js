let mongoose = require('mongoose');
let db = require('../models');

require('dotenv').config();
const MONGODB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

//mongoose.connect('mongodb://localhost/workoutdb', {
mongoose.connect(MONGODB_URI, {  
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

//https://stackoverflow.com/questions/6743849/mongodb-unique-index-on-array-elements-property
//db.getCollection('users').ensureIndex({'jobOpportunities': 1}, {unique:true})

let userSeed = [
  {
    email: 'john@solarstein.io',
    password: '1234',
    jobOpportunities: [],
    createdDate: new Date(new Date())
  },
  {
    email: 'eric@solarstein.io',
    password: '1234',
    jobOpportunities: [],
    createdDate: new Date(new Date())
  },
  {
    email: 'brett@solarstein.io',
    password: '1234',
    jobOpportunities: [],
    createdDate: new Date(new Date())
  }
];

let jobOpportunitySeed = [
  {
    jobTitle: 'Engineer',
    companyName: 'Trilogy',
    currentStatus: 'Offer',
    salaryRangeMin: 100000,
    salaryRangeMax: 130000,
    keySkills: [
      {
        skill: 'React'
      },
      {
        skill: 'Node.js'
      },
      {
        skill: 'Express.js'
      }
    ],
    applicationStages: [
      {
        name: 'Applied',
        notes: 'Attached resume and cover letter'
      },
      {
        name: 'Phone Screening',
        notes: 'Talked to Lisa, very friendly'
      },
      {
        name: 'Technical Interview',
        notes: 'Fo Sho'
      },
      {
        name: 'Coding Challenge',
        notes: 'Fo Sho'
      },
      {
        name: 'Onsite',
        notes: 'Fo Sho'
      },
      {
        name: 'Offer',
        notes: 'Fo Sho'
      }
    ],
    appliedFrom: 'LinkedIn',
    applicationSubmittedDate: new Date(new Date().setDate(new Date().getDate()-10))
  },
  {
    jobTitle: 'Senior Engineer',
    companyName: 'Google',
    currentStatus: 'Coding Challenge',
    salaryRangeMin: 200000,
    salaryRangeMax: 230000,
    keySkills: [
      {
        'skill': 'High Creativity'
      },
      {
        'skill': 'Problem Solving'
      },
      {
        'skill': 'Data Structures'
      }
    ],
    applicationStages: [
      {
        name: 'Applied',
        notes: 'Attached resume and cover letter'
      },
      {
        name: 'Phone Screening',
        notes: 'Talked to Lisa, very friendly'
      },
      {
        name: 'Coding Challenge',
        notes: 'Yeeaah'
      }
    ],
    appliedFrom: 'Other',
    applicationSubmittedDate: new Date(new Date().setDate(new Date().getDate()-10))
  },
  {
    jobTitle: 'Engineer',
    companyName: 'Intellect',
    currentStatus: 'Technical Interview',
    salaryRangeMin: 70000,
    salaryRangeMax: 10000,
    keySkills: [
      {
        'skill': 'Graphic Design'
      }
    ],
    applicationStages: [
      {
        name: 'Applied',
        notes: 'Attached resume and cover letter'
      },
      {
        name: 'Phone Screening',
        notes: 'Talked to Lisa, very friendly'
      },
      {
        name: 'Coding Challenge',
        notes: 'Yeeaah'
      },
      {
        name: 'Technical Interview',
        notes: 'Fo Sho'
      },
    ],
    appliedFrom: 'Other',
    applicationSubmittedDate: new Date(new Date().setDate(new Date().getDate()-10))
  },
  {
    jobTitle: 'Engineer',
    companyName: 'Amazon',
    currentStatus: 'Offer',
    salaryRangeMin: 150000,
    salaryRangeMax: 160000,
    keySkills: [
      {
        'skill': 'Sleepless nights'
      }
    ],
    applicationStages: [
      {
        name: 'Applied',
        notes: 'Attached resume and cover letter'
      },
      {
        name: 'Phone Screening',
        notes: 'Talked to Lisa, very friendly'
      },
      {
        name: 'Coding Challenge',
        notes: 'Yeeaah'
      },
      {
        name: 'Technical Interview',
        notes: 'Fo Sho'
      },
      {
        name: 'Offer',
        notes: 'Fo Sho'
      }
    ],
    appliedFrom: 'Other',
    applicationSubmittedDate: new Date(new Date().setDate(new Date().getDate()-10))
  }
];

async function run() {
  try {
    //var indexName = await db.User.collection.createIndex({'jobOpportunities': 1}, { unique: true, partialFilterExpression: { 'jobOpportunities.length': { $gt : 0 } }});
    //var indexName = await db.User.collection.createIndex({'jobOpportunities': 1}, { unique: true, sparse : true });
    //var indexName = await db.User.collection.createIndex({'jobOpportunities': 1}, { unique: true, sparse : true });
    //console.log(`Index '${indexName}' created.`);

    var { deletedCount } = await db.User.deleteMany({});
    console.log(`Deleted ${deletedCount} User record(s)!`);

    deletedCount = (await db.JobOpportunity.deleteMany({})).deletedCount;
    console.log(`Deleted ${deletedCount} JobOpportunity record(s)!`);

    // seems to be void, does not return a value
    await db.User.createIndexes();

    let { insertedCount } = await db.User.collection.insertMany(userSeed);
    console.log(`Inserted ${insertedCount} User record(s)!`);

    let jobId = null;
    let jobIds = [];
    for (job of jobOpportunitySeed)
    {
      let count = 0;
      let newJobOp = await db.JobOpportunity.create(job);
      jobId = newJobOp._id;
      jobIds.push(newJobOp._id);
      count++;
      console.log(`${count} jobs inserted`);
      console.log(newJobOp);
    }
    

    //insertedCount = (await db.User.collection.insertMany(jobOpportunitySeed)).insertedCount;
    // console.log(`Inserted ${insertedCount} JobOpportunity record(s)!`);

    // let user = await db.User.findOne({
    //   email: 'eric@solarstein.io'
    // });

    //console.log(user);

    // db.notes.findOne(
    //   {
    //     _id: mongojs.ObjectId(req.params.id)
    //   },

    //let jobOpportunity = await db.JobOpportunity.findOne({});
    //console.log(jobOpportunity);

    let updatedUser = await db.User.findOneAndUpdate({ email: 'eric@solarstein.io' }, { $addToSet: { jobOpportunities: jobIds } }, { new: true })
    console.log(`Updated User: ${updatedUser}`);

    process.exit(0);
  
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
