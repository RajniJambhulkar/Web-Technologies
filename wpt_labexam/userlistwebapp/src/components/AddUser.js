// src/components/AddEvent.js
import React, { useState } from 'react';

const AddUser = ({ onAddUser }) => {
  const [username, setusername] = useState('');
  const [gender, setgender] = useState('');
  const [dateofbirth, setdateofbirth] = useState('');

  const handleAddUser = () => {
    const newUser = {
      username,
      gender,
      dateofbirth,
    };
    onAddUser(newUser);
    // Reset form fields after adding the event
    setusername('');
    setgender('');
    setdateofbirth('');
  };

  return (
    <div>
      <h2>Add Event</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">UserName</label>
          <input type="text" className="form-control" id="username" value={username} onChange={(e) => setusername(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender</label>
          <input className="form-control" id="gender" value={gender} onChange={(e) => setgender(e.target.value)}></input>
        </div>
        <div className="mb-3">
          <label htmlFor="dateofbirth" className="form-label">Date Of Birth</label>
          <input type="date" className="form-control" id="dateofbirth" value={dateofbirth} onChange={(e) => setdateofbirth(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleAddUser}>Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
