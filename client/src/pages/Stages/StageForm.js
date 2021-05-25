import React, { Component } from "react";

import "./StageForm.css";
// TODO
// import validate from "./validateInfo";


class StageForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    const data = this.state
    console.log('final data is', data)
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }

render() {
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={this.handleSubmit}>
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
            onChange={this.handleInputChange}
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
            onChange={this.handleInputChange}
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
              onChange={this.handleInputChange}
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
              onChange={this.handleInputChange}
            />
          {/* {errors.minSalaryRange && <p>{errors.minSalaryRange}</p>} */}            
          </div>

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
            onChange={this.handleInputChange}
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
            onChange={this.handleInputChange}
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
            onChange={this.handleInputChange}
          />
          {/* {errors.jobNotes && <p>{errors.jobNotes}</p>} */}
        </div>

        <button className="form-input-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );  
}

  // const { handleSubmit } = useForm(
  //   console.log(submitForm)
  // );    


};

export default StageForm;
