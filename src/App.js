import React, { useState } from 'react';
// import './App.css';
import UserForm from './components/UserForm';
import DisplayForm from './components/DisplayForm';

function App() {
  const [state, setState ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div className="App">
      <UserForm inputs={state} setInputs={setState}/>
      <DisplayForm data={state}/>
    </div>
  );
}

export default App;
