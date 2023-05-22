const validation = (userData) => {
    let errors = {};
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
      errors.username = 'The username must be an email';
    }
    if (!userData.username) {
      errors.username = 'Username cannot be empty';
    } 
    if (!userData.username.length > 35) {
      errors.username = 'User name cannot be longer than 35 characters';
    }
    if(!userData.password.match(/\d/)) {
        errors.password = "The password must have at least one number";
    }
    if(!userData.password.length < 6 && !userData.password.length > 10) {
        errors.password = "The password must be between 6 and 10 characters long";
    }
    return errors;
    }


export default validation;