export default function Validate(values) {
    let errors = {};
    if (!values.username) {
        errors.username = "Username is required";
    } else if (values.username.length < 6) {
        errors.username = "Username needs to be more than 6 characters"
    }
    if (!values.email) {
    } else if (!/\S+@\S+\.\S+/.test(values.email)) { // This is a simple regex that validates the email by checking if it has something@something.something in the input
        errors.email = "Email address is invalid";
    }
    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 6) {
        errors.password = "Password needs to be more than 6 characters"
    }
    return errors;
}