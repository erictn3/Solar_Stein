let mongoose = require('mongoose');
let db = require('../models');

require("dotenv").config();
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
    currentStatus: 'Technical Phone Screen Scheduled',
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
        name: 'Application Submitted',
        notes: 'Attached resume and cover letter'
      },
      {
        name: 'HR Phone Interview',
        notes: 'Talked to Lisa, very friendly'
      }
    ],
    submittedFrom: 'Company Website',
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
    for (job of jobOpportunitySeed)
    {
      let count = 0;
      let newJobOp = await db.JobOpportunity.create(job);
      jobId = newJobOp._id;
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

    let updatedUser = await db.User.findOneAndUpdate({ email: 'eric@solarstein.io' }, { $addToSet: { jobOpportunities: jobId } }, { new: true })
    console.log(`Updated User: ${updatedUser}`);

    process.exit(0);
  
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
