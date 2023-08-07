import React, { useState, useEffect } from 'react'; // Import useEffect as well
import './App.css';
import UserForm from './components/UserForm';

function App() {
  const [userDetails, setUserDetails] = useState([]);

  const addUserDetails = (details) => {
    setUserDetails([...userDetails, details]);
  };

  useEffect(() => {
    const storedDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (storedDetails) {
      setUserDetails(storedDetails);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
  }, [userDetails]);

  return (
    <div className="app">
      <h1>User Details</h1>
      <UserForm addUserDetails={addUserDetails} />
      <div className="user-details">
        {userDetails.map((user, index) => (
          <div className="user" key={index}>
            <p>{`${user.name} is ${user.age} years old and studies at ${user.college}.`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
