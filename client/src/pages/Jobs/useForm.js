import {useState, useEffect} from 'react';

const useForm = (callback) => {
  const[values, setValues] = useState({
    companyName: '', 
    minSalary: '',
    maxSalary: '',
    jobSkills: '',
    appliedFrom: ''
  })
  // const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = e => {
    const {name, value} = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = e => {
    // e.preventDefault();
    console.log(e);
    // setErrors(validate(values));
    setIsSubmitting(true);
  }

  useEffect(
    () => {
      if (Object.keys().length === 0 &&
      isSubmitting) {
        callback();
      }
    });

  return {handleChange, values, handleSubmit};
};

export default useForm;