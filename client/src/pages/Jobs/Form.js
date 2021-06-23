import React, {useState} from 'react';

import JobForm from './JobForm';
import SuccessForm from './SuccessForm';
import './JobForm.css';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="form-container">
        <span className="close-btn" href='/'>x</span>
        <div className="form-content-left">
          <img src="images/solarstein-logo-final.png" alt="spaceship"
          className="form-img"/>
        </div>
      {!isSubmitted ? <JobForm submitForm={submitForm} /> : <SuccessForm />}      
      </div>      
    </>
  );
}

export default Form
