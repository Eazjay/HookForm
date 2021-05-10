import React from 'react';

const UserForm = (props) => {
    const{inputs, setInputs} = props;

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    return(
        <div className="container mt-5 p-3 w-50">
            <div className="form-group p-3 mx-auto">
            <h1 class="text-center">Create User</h1>
                <form>
                    <input onChange={onChange} type="text" name="firstName" placeholder="First Name" className="form-control"/>
                    <input onChange={onChange} type="text" name="lastName" placeholder="Last Name" className="form-control mt-3"/>
                    <input onChange={onChange} type="text" name="email" placeholder="Email Address" className="form-control mt-3"/>
                    <input onChange={onChange} type="password" name="password" placeholder="Password" className="form-control mt-3"/>
                    <input onChange={onChange} type="password" name="confirmPassword" placeholder="Confirm Password" className="form-control mt-3"/>
                    <input onChange={onChange} type="submit" value="Create User" class="btn btn-primary input-group mt-3"/>
                </form>
            </div>
        </div>
    );
};


export default UserForm;