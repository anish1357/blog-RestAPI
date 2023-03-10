//!error message if regex fails
const errMessage =
  "A password should have the following criteria: Minimum length of 8 characters ,At least one uppercase letter,At least one lowercase letter,At least one digit between 0-9,At least one special character ";

  /**
  * Function to test the following regex  
  * A password should have the following criteria: Minimum length of 8 characters ,At least one uppercase letter,At least one lowercase letter,At least one digit between 0-9,At least one special character
  * @param password username for the user 
  * @return true or false
  */  
const test = (pass) => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
  if (typeof pass !== "string" || !regex.test(pass)) {
    return false;
  }
  return true;
};

module.exports.errMessage = errMessage;
module.exports.validator = test;
