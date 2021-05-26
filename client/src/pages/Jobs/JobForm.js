import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import API from '../../utils/API';
// import useForm from "./useForm";

import "./JobForm.css";
// TODO
// import validate from "./validateInfo";


//class JobForms extends Component {
const JobForms = () => {
  const history = useHistory();
  const [job, setJob] = useState({});  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    //const data = this.state;
    const data = job;

    console.log('form data is', data);

    const newJobDto = {
      jobTitle: data.jobTitle,
      companyName: data.companyName,
      currentStatus: 'Applied',
      applicationStages: [{name: 'Applied', notes: ''}],
      keySkills: [{skill: data.skills}],
      salaryRangeMax: data.maxSalaryRange,
      salaryRangeMin: data.minSalaryRange,
      appliedFrom: data.jobSite
    };

    console.log('NEW JOB DTO:');
    console.log(newJobDto);

    
    const result = await API.createJob(newJobDto);
    console.log('API RESULT:');
    console.log(result);

    //const history = useHistory();
    history.push('/home');

  }

  //handleInputChange = (event) => {
  const handleInputChange = async (event) => {
    event.preventDefault();
    
    job[event.target.name] = event.target.value;
    setJob(job);

    // this.setJob({
    //   [event.target.name]: event.target.value
    // })
  }


//render() {
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        {/* <h1>
          Create your job board by filling out the
        information below!
        </h1> */}
        <div className="form-inputs">
          <label htmlFor="companyName" className="form-label">
            Company
          </label>
          <input
            id="companyName"
            type="text"
            name="companyName"
            className="form-input"
            placeholder="Enter company"
            // value={companyName}
            // values={values.companyName}
            // onChange={this.handleInputChange}
            onChange={handleInputChange}
          />
          {/* {errors.companyName && <p>{errors.companyName}</p>} */}
        </div>

        <div className="form-inputs">
          <label htmlFor="jobTitle" className="form-label">
            Job Title
          </label>
          <input
            id="jobTitle"
            type="text"
            name="jobTitle"
            className="form-input"
            placeholder="Enter Job Title"
            // value={jobTitle}
            // values={values.jobTitle}
            onChange={handleInputChange}
          />
          {/* {errors.jobTitle && <p>{errors.jobTitle}</p>} */}
        </div>

        {/* TODO: split min and max into one line */}

        <div className="form-inputs salary">
          <div>
            <label htmlFor="minRange" className="form-label">
              Min Salary
            </label>
            <input
              id="minSalaryRange"
              type="number"
              step="1000"
              name="minSalaryRange"
              className="form-input"
              placeholder="Enter Min Salary Range"
              // value={minSalaryRange}
              // values={values.salaryRange}
              onChange={handleInputChange}
            />            
          </div>
          <div>
            <label htmlFor="maxSalaryRange salary" className="form-label">
              Max Salary
            </label>
            <input
              id="maxSalaryRange"
              type="number"
              step="1000"
              name="maxSalaryRange"
              className="form-input"
              placeholder="Enter Max Salary Range"
              // value={maxSalaryRange}
              // values={values.salaryRange}
              onChange={handleInputChange}
            />
          {/* {errors.minSalaryRange && <p>{errors.minSalaryRange}</p>} */}            
          </div>

        </div>

        {/* <div className="form-inputs">
  
          {/* {errors.maxRange && <p>{errors.maxRange}</p>} *
        </div> */}

        <div className="form-inputs">
          <label htmlFor="skills" className="form-label">
            Skills (comma separated)
          </label>
          <input
            id="skills"
            type="text"
            name="skills"
            className="form-input"
            placeholder="Enter Skills"
            // value={jobSkills}
            // values={values.jobSkills}
            onChange={handleInputChange}
          />
          {/* {errors.jobSkills && <p>{errors.jobSkills}</p>} */}
        </div>

        <div className="form-inputs">
          <label htmlFor="jobSite" className="form-label">
            Site
          </label>
          <select 
            id="jobSite"
            type="text"
            name="jobSite"
            className="form-input"
            placeholder="Enter Job Application Site"
            // value={jobSite}
            // values={values.jobSite}
            onChange={handleInputChange}
          >
            <option values="default">-</option>
            <option values="indeed">Indeed</option>
            <option values="linkedin">LinkedIn</option>
            <option values="monster">Monster</option>
            <option values="ladders">Ladders</option>
            <option values="ziprecruiter">Zip Recruiter</option>
            <option values="roberthalf">Robert Half</option>
            <option values="other">Other</option>
          </select>
          {/* {errors.appliedFrom && <p>{errors.appliedFrom}</p>} */}
        </div>

        <div className="form-inputs">
          <label htmlFor="jobNotes" className="form-label">
            Notes
          </label>
          <input
            id="jobNotes"
            type="text"
            name="jobNotes"
            className="form-input"
            placeholder="Additional Notes"
            // value={jobNotes}
            // values={values.jobNotes}
            onChange={handleInputChange}
          />
          {/* {errors.jobNotes && <p>{errors.jobNotes}</p>} */}
        </div>

        <button className="form-input-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );  
//}

  // const { handleSubmit } = useForm(
  //   console.log(submitForm)
  // );    


};

export default JobForms;
