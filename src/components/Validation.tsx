import React, { useState } from "react";
import * as regex from "../constants/regex";

interface InputField {
    username: string,
    email: string,
    password: string
}

interface ErrorType {
    emptyErr?: string,
    nameInvalidErr?: string,
    emailInvalidErr?: string,
    passwordInvalidErr?: string
}

const Validation: React.FC <InputField> = (values): any => {

        console.log("Entered validation");
        const [usernameErr, setUsernameErr] = useState<ErrorType>({});
        const [emailErr, setEmailErr] = useState<ErrorType>({});
        const [passwordErr, setPasswordErr] = useState<ErrorType>({});
        let isValid = true;

        if (values.username === "") {
            console.log("Inside if");
            
            usernameErr.emptyErr = "Name field cannot be blank"
            //error.usernameErr = "Name field cannot be blank";
            setUsernameErr(usernameErr);
            isValid = false;
        } else if (!regex.NAME_REGEX.test(values.username)) {
            usernameErr.nameInvalidErr = "Invalid Name"
            //error.usernameErr = "Invalid Name";
            setUsernameErr(usernameErr);
            isValid = false;
        }

        if (values.email === "") {
            emailErr.emptyErr = "Email field cannot be blank"
           // error.emailErr = "Email field cannot be blank";
            setEmailErr(emailErr);
            isValid = false;
        } else if (!regex.EMAIL_REGEX.test(values.email)) {
            emailErr.emailInvalidErr = "Invalida email address";
            //error.emailErr = "Invalid email address";
            setEmailErr(emailErr);
            isValid = false;
        }

        if (values.password === "") {
            passwordErr.emptyErr = "Password field cannot be blank";
            // error.passwordErr = "Password field cannot be blank";
            setPasswordErr(passwordErr);
            isValid = false;
        } else if (!regex.PASSWORD_REGEX.test(values.password)) {
            passwordErr.passwordInvalidErr = "Minimum 6 characters required";
            // error.passwordErr = "Minimum 6 characters required";
        }
        // console.log("Is valid in validating", isValid, error.usernameErr, error.emailErr, error.passwordErr);

        // if (error.usernameErr || error.emailErr || error.passwordErr) {
        if (usernameErr.emptyErr || emailErr.emptyErr || passwordErr.emptyErr || usernameErr.nameInvalidErr || emailErr.emailInvalidErr || passwordErr.passwordInvalidErr) {
            console.log("in if isvalid", isValid);
            isValid = false;
            console.log('if condition');
            return isValid;
        }
        console.log("outer if isvalid", isValid);
        return isValid;
        //return error;
}

export default Validation;