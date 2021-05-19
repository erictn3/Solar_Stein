export default function validateInfo(values) {
  let errors = {}

  if(!values.companyName.trim()) {
    errors.companyName = "Company Name required"
  }

  if(!values.salary.trim()) {
    errors.salary = "Salary required"
  }

  if(!values.jobSkills.trim()) {
    errors.jobSkills = "Skills required"
  } 

  // if(!values.appliedFrom.trim()) {
  //   errors.appliedFrom = "Site is required"
  // } 




  return errors;
}