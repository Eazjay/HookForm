import React from 'react';

const DisplayForm = (props) =>{
    const { firstName, lastName, email, password, confirmPassword } = props.data;
    return(
        <div className="container mt-5 border border-success">
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email Address: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    )
}

export default DisplayForm;