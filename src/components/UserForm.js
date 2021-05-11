import React, { useState } from 'react';

const UserForm = (props) => {
    const {inputs, setInputs} = props;
    const [errors, setErrors] = useState ({})

    const err = {}
    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
        switch (name){
        case 'firstName':
            if(!value.trim()) {
                err.firstName = 'First Name is required.';
            } 
            else if(value.trim().length < 2) {
                err.firstName = 'First Name must be at least 2 characters.';
            } 
            else {
                err.firstName = '';
            }
            break;
        case 'lastName':
            if(!value.trim()) {
                err.lastName = 'Last Name is required.';
            } 
            else if(value.trim().length < 2) {
                err.lastName = 'Last Name must be at least 2 characters.';
            } 
            else {
                err.lastName = '';
            }
            break;
        case 'email':
            if(!value.trim()){
                err.email = "Email is required."
            }
            else if(value.trim().length < 5){
                err.email = "Email should be at least 5 characters."
            }
            break;
        case 'password':
            if(!value.trim()) {
                err.password = 'Password is required!';
            } 
            else if(value.trim().length < 8) {
                err.password = 'Password must be at least 8 characters.';
            } 
            else {
                err.password = '';
            }
            break;
        case 'confirmPassword':
            if(value !== inputs.password) {
                err.confirmPassword = 'Password does not match!';
            } 
            else if (value === inputs.password){
                err.confirmPassword = '';
            }
            break;
        default:
            break;
        }
        if (Object.keys(err).length) {
            setErrors({
                ...errors,
                ...err
            });
        }

    }

    return(
        <div className="container mt-5 p-3 w-50">
            <div className="form-group p-3 mx-auto">
            <h1 class="text-center">Create User</h1>
                <form>
                    <input onChange={onChange} type="text" name="firstName" placeholder="First Name" className="form-control"/>
                    <p className="text-danger">{ errors.firstName }</p>
                    <input onChange={onChange} type="text" name="lastName" placeholder="Last Name" className="form-control mt-3"/>
                    <p className="text-danger">{ errors.lastName }</p>
                    <input onChange={onChange} type="text" name="email" placeholder="Email Address" className="form-control mt-3"/>
                    <p className="text-danger">{ errors.email }</p>
                    <input onChange={onChange} type="password" name="password" placeholder="Password" className="form-control mt-3"/>
                    <p className="text-danger">{ errors.password }</p>
                    <input onChange={onChange} type="password" name="confirmPassword" placeholder="Confirm Password" className="form-control mt-3"/>
                    <p className="text-danger">{ errors.confirmPassword }</p>
                    <input onChange={onChange} type="submit" value="Create User" class="btn btn-primary input-group mt-3"/>
                </form>
            </div>
        </div>
    );
};


export default UserForm;