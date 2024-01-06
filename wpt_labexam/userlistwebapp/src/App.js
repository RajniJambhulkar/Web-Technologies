// src/App.js
import React, { useState, useEffect } from 'react';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = async (newUser) => {
    try {
      const response = await axios.post('http://localhost:5000/new', newUser);
      setUsers([...users, response.data.user]);
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/list');
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mt-4">
      <AddUser onAddUser={handleAddUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
