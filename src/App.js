import React, { useState } from 'react';
// import './App.css';
import UserForm from './components/UserForm';
import DisplayInputs from './components/DisplayInputs';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  return (
    <div className="App">
      <UserForm inputs={state} setInputs={setState}/>
      <DisplayInputs data={state}/>
    </div>
  );
}

export default App;
