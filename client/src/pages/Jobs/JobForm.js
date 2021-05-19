import React from "react";
import useForm from "./useForm";

import "./JobForm.css";
import validate from "./validateInfo";
// import Dropdown from 'react-dropdown';

const JobForm = ({ submitForm }) => {

  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
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
            values={values.companyName}
            onchange={handleChange}
          />
          {errors.companyName && <p>{errors.companyName}</p>}
        </div>
        
        <div className="form-inputs">
          <label htmlFor="minRange" className="form-label">
            Min Salary
          </label>
          <input
            id="minSalaryRange"
            type="number"
            name="minSalaryRange"
            className="form-input"
            placeholder="Enter Min Salary Range"
            values={values.salaryRange}
            onchange={handleChange}
          />
          {errors.minSalaryRange && <p>{errors.minSalaryRange}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="maxRange" className="form-label">
            Max Salary
          </label>
          <input
            id="maxRange"
            type="number"
            name="maxRange"
            className="form-input"
            placeholder="Enter Max Salary Range"
            values={values.salaryRange}
            onchange={handleChange}
          />
          {errors.maxRange && <p>{errors.maxRange}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="skills" className="form-label">
            Skills
          </label>
          <input
            id="skills"
            type="text"
            name="skills"
            className="form-input"
            placeholder="Enter Skills"
            values={values.jobSkills}
            onchange={handleChange}
          />
          {errors.jobSkills && <p>{errors.jobSkills}</p>}
        </div>

        {/* <div className="form-inputs">
          <label htmlFor="jobSite" className="form-label">
            Site
          </label>
          <input
            id="jobSite"
            type="text"
            name="jobSite"
            className="form-input"
            placeholder="Enter Job Application Site"
            values={values.jobSite}
            onchange={handleChange}
          />
          {errors.jobSite && <p>{errors.jobSite}</p>}
        </div> */}

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
            values={values.appliedFrom}
            onchange={handleChange}
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
          {errors.appliedFrom && <p>{errors.appliedFrom}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="jobSite" className="form-label">
            Notes
          </label>
          <input
            id="jobSite"
            type="text"
            name="jobSite"
            className="form-input"
            placeholder="Additional Notes"
            values={values.jobSite}
            onchange={handleChange}
          />
          {errors.jobSite && <p>{errors.jobSite}</p>}
        </div>

        {/* <div>
          <Dropdown jobsiteOptions={jobsiteOptions}/>
        </div> */}

        <button className="form-input-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobForm;
