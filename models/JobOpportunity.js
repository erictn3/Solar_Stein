const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobOpportunitySchema = new Schema({
  jobTitle: {
    type: String,
    trim: true,
    required: 'Job title is required',
    minLength: [1, 'Job title must be at least 1 character']
  },
  
  companyName: {
    type: String,
    trim: true,
    required: 'Company name is required',
    minLength: [1, 'company must be at least 1 character']
  },

  // Potentially leave this out
  currentStatus: {
    type: String,
    trim: true
  },

  salaryRangeMin: {
    type: Number
  },

  salaryRangeMax: {
    type: Number
  },

  keySkills: [
    {
      skill: {
        type: String
      }
    }
  ],

  applicationStages: [ // phone screen, interview, offer
    {
      name: {
        type: String,
        required: 'Name of application stage is required',
      },
      notes: {
        type: String
      }
    }
  ],
  
  submittedFrom: {
    type: String, // make an enum here, like Indeed, LinkedIn, Company website, Recruiter, etc.
    trim: true
  },

  jobApplicationDate: {
    type: Date,
    default: Date.now
  }

});

const JobOpportunity = mongoose.model('JobOpportunity', JobOpportunitySchema, 'jobOpportunities'); // 3rd argument is the name of collection to be created in the DB

module.exports = JobOpportunity;
