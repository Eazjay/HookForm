import React from 'react';
// import './App.css';
import UserForm from './components/UserForm';
import DisplayInputs from './components/DisplayInputs';

function App() {
  // const [state, setState ] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  return (
    <div className="App">
      <UserForm />
      {/* <DisplayInputs data={state}/> */}
    </div>
  );
}

export default App;
