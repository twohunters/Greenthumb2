export default function validate(values) {
    let errors = {};
    if (!values.email) {
      errors.email = "Please enter an eamil";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Please enter a valid email";
    }
  
    if (!values.password) {
      errors.password = "Please enter your password ";
    }
  
    return errors;
  }