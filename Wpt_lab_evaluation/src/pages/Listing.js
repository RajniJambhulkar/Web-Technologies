import React, { useEffect, useState } from 'react'
import UserService from '../service/UserService';
import TableRow from '../components/TableRow';

function Listing() {
  const [usersList,setUserList]= useState([]);
  useEffect(() => {
    const arr=UserService.getallusers();
    setUserList([...arr])
  }, []);
  const deleteUser=(firstName)=>{
     UserService.deleteuser(firstName);
     setUserList(UserService.getallusers())
  }
  return (
    <div>
      <table class="table-auto">
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Address</th>
            <th>Pincode</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
        usersList.map( (user)=>{
          console.log("See HERE ", user.FirstName);
          return(
            <tr>
            <td>{user.FirstName}</td>
            <td>{user["lastName"]}</td>
            <td>{user["address"]}</td>
            <td>{user["pincode"]}</td>
            <td> <button type="button" name="btn" id="delete" className="btn btn-danger" onClick={()=>{deleteUser(user["FirstName"])}}>Delete</button>&nbsp;&nbsp;&nbsp;</td>
         </tr>
          )
        
        }
        )
        }
        </tbody>
      </table>

    </div>
  )
}

export default Listing