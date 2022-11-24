import React, { useState } from "react";
import { toast } from "react-toastify";
import "../assets/Login.css";
import * as regex from "../constants/regex";

interface InputField {
    username: string,
    email: string,
    password: string,
    age: string
}

interface InputFieldError {
    usernameError?: string,
    emailError?: string,
    passwordError?: string,
    ageError?: string
}

const Login: React.FC = () => {

    const [values, setValues] = useState<InputField>({
        username: '',
        email: '',
        password: '',
        age: ''
    })

    const [error, setError] = useState<InputFieldError>({
        usernameError: '',
        emailError: '',
        passwordError: '',
        ageError: ''
    })

    const notify = () => toast("Success!");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values, 
            [e.target.name]: e.target.value 
        })
    }

    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        const isValid = validateForm();
        console.log("Error message: ", error);             //printing error message  - isValid = false
        setError({ usernameError: '', emailError: '', passwordError: '', ageError: ''});

        if (isValid) {
            notify()
            console.log("O/P data",values);                 //printing result 
            // alert("Successfully logged in");

            setValues({ username: '', email: '', password: '', age: '' });
        }
    };

    const validateForm = () => {

        let isValid = true;

        if (values.username === "" || values.email === "" || values.password === "" || values.age === "") {
            alert("Please fill all the required fields");
            isValid = false;
        } else {
            if ((values.username !== "") && (!regex.NAME_REGEX.test(values.username))) {
                error.usernameError = "Invalid Name - Should not contain numbers or special characters";
                isValid = false;
            }

            if ((values.email !== "") && (!regex.EMAIL_REGEX.test(values.email))) {
                error.emailError = "Invalid email address";
                isValid = false;
            }

            if ((values.password !== "") && (!regex.PASSWORD_REGEX.test(values.password))) {
                error.passwordError = "Should contain minimum of 6 characters with special character and numbers";
                isValid = false;
            }

            if ((values.age !== "") && (!regex.AGE_REGEX.test(values.age))) {
                error.ageError = "Age limit should be 18 and above";
                isValid = false;
            }

            if (error.usernameError || error.emailError || error.passwordError || error.ageError) {
                console.log("in if condition - isvalid", isValid);
                isValid = false;
                return isValid; 
            }
        }
        console.log("outer if - isvalid", isValid);           //if success
        return isValid;
    }

    return (
        <div className='wrapper'>
            <div className='form-wrapper'>
                <h2>Login</h2>
                <form>
                    <div className='login-form'>
                        <label htmlFor="username">User Name</label>
                        <input onChange={handleChange} name='username' value={values.username} required />
                        {/* <span style={{ color: 'red' }}>{error.usernameError}</span> */}
                        {error && <span style={{ color: 'red'}}>{error.usernameError}</span>}
                    </div>
                    <div className='login-form'>
                        <label htmlFor="email">Email</label>
                        <input onChange={handleChange} name='email' value={values.email} required />
                    </div>
                    <div className='login-form'>
                        <label htmlFor="password">Password</label>
                        <input onChange={handleChange} type='password' name='password' value={values.password} required />
                    </div>
                    <div className='login-form'>
                        <label htmlFor="age">Age</label>
                        <input onChange={handleChange} type='number' name='age' value={values.age} required />
                        <br /><br />
                    </div>
                    <div className='submit'>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;