
import React from 'react';

const UserList = ({ users }) => {
  return (
    <div>
      <h2>Event List</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">UserName</th>
            <th scope="col">Gender</th>
            <th scope="col">Date Of Birth</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.gender}</td>
              <td>{user.dateofbirth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
