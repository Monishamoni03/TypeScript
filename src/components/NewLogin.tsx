import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Login.css";
import * as regex from "../constants/regex";
// import Validation from "./Validation";

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

interface InputFieldErr {
    usernameErr?: ErrorType,
    emailErr?: ErrorType,
    passwordErr?: ErrorType
}

const NewLogin: React.FC = () => {

    const [values, setValues] = useState<InputField>({  
        username: '', 
        email: '',
        password: ''
    })

    // const error: InputFieldErr = {
    //     usernameErr: {},
    //     emailErr: {},
    //     passwordErr: {}
    // }

    // const [usernameErr, setUsernameErr] = useState<ErrorType>({  });
    // const [emailErr, setEmailErr] = useState<ErrorType>({ });
    // const [passwordErr, setPasswordErr] = useState<ErrorType>({ });
    // const [passwordErr, setPasswordErr] = useState({});

    const navigate = useNavigate();

    const handleSubmit = (e: { preventDefault: () => void; }) => {

        e.preventDefault();
        console.log("In handle submit");
        const isValid = ValidateForm();
        console.log("IsValid Value is ", isValid)
       // console.log("Error message : ", error)
        if (isValid) {
            const { username, email, password } = values;
            const user = { username, email, password };
            setValues({ username: '', email: '', password: '' });
            navigate('/layout');
        }
    };

    const ValidateForm = () => {                              // function component
        // const usernameErr = {};    //object
        // const emailErr = {};
        // const passwordErr = {};

        const [usernameErr, setUsernameErr] = useState<ErrorType>({});
        const [emailErr, setEmailErr] = useState<ErrorType>({});
        const [passwordErr, setPasswordErr] = useState<ErrorType>({});
        let isValid = true;

        if (values.username === "") {
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

    return (
        <div className='wrapper'>
            <div className='form-wrapper'>
                <h2>Login</h2>
                <form>
                    <div className='username'>
                        <label htmlFor="username">User Name</label>
                        <input onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} type='text' name='username' value={values.username} />
                        {/* {error.usernameErr} */}
                    </div>
                    <div className='email'>
                        <label htmlFor="email">Email</label>
                        <input onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} type='email' name='email' value={values.email} />
                        
                    </div>
                    <div className='password'>
                        <label htmlFor="password">Password</label>
                        <input onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} type='password' name='password' value={values.password} />
                       
                    </div>
                    <div className='submit'>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewLogin;