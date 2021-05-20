import React, {useState, useEffect} from "react";
import useForm from "./useForm";

import "./JobForm.css";
// TODO
// import validate from "./validateInfo";


const JobForm = ({ submitForm }) => {

  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [minSalaryRange, setMinSalaryRange] = useState(0);
  const [maxSalaryRange, setMaxSalaryRange] = useState(0);
  const [jobSkills, setJobSkills] = useState([]);
  const [jobSite, setJobSite] = useState('');
  const [jobNotes, setNotes] = useState('');

  // const { handleChange, values, handleSubmit, errors } = useForm(
  //   submitForm,
  //   validate

  // );



  const handleChange = (event) => {
    let jobForm = event.currentTarget.parentElement.parentElement;

    setCompanyName(jobForm.companyName);
    setJobTitle(jobForm.jobTitle);
    setMinSalaryRange(jobForm.minSalaryRange);
    setMaxSalaryRange(jobForm.maxSalaryRange);
    setJobSkills(jobForm.skills);
    setJobSite(jobForm.jobSite);
    setNotes(jobForm.jobNotes);



    // console.log(company); 
    // console.log(event.currentTarget.parentElement.parentElement); 
    console.log(event.currentTarget.parentElement.parentElement.jobTitle); 
    console.log(event.currentTarget.parentElement.parentElement.companyName); 
    console.log(event.currentTarget.parentElement.parentElement.minSalaryRange); 
    console.log(event.currentTarget.parentElement.parentElement.maxSalaryRange); 
    console.log(event.currentTarget.parentElement.parentElement.skills); 
    console.log(event.currentTarget.parentElement.parentElement.jobSite); 
    console.log(event.currentTarget.parentElement.parentElement.jobNotes); 

  }

  // console.log(submitForm);

  const submitHandler = (event) => {
    // event.preventDefault();
    const job = {
      companyName, jobTitle, minSalaryRange, maxSalaryRange, jobSkills, jobSite, jobNotes
    };
  console.log("HERE==============================================")

  console.log(job);
  }

  // handleSubmit = (event) => {

  // }

  // const { handleSubmit } = useForm(
  //   console.log(submitForm)
  // );    

  return (
    <div className="form-content-right">
      {/* <form className="form" onSubmit={this.handleSubmit}> */}
      <form className="form">
        <h1>
          Create your job board by filling out the
          information below!
        </h1>
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
          {/* {errors.jobTitle && <p>{errors.jobTitle}</p>} */}
        </div>

        {/* TODO: split min and max into one line */}

        <div className="form-inputs">
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
            onChange={handleChange}
          />
          {/* {errors.minSalaryRange && <p>{errors.minSalaryRange}</p>} */}
        </div>

        <div className="form-inputs">
          <label htmlFor="maxSalaryRange" className="form-label">
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
            onChange={handleChange}
          />
          {/* {errors.maxRange && <p>{errors.maxRange}</p>} */}
        </div>

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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
          {/* {errors.jobNotes && <p>{errors.jobNotes}</p>} */}
        </div>

        <button className="form-input-btn" type="submit"
        onClick={submitHandler()}>
        {/* <button className="form-input-btn" type="submit"> */}
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobForm;
