import React, { useState } from 'react'
import UserService from '../service/UserService';
import { useNavigate } from 'react-router-dom';

export default function ResgisterationForm() {
  const navigate=useNavigate();
  const [formDetail,setformDetail]=useState({FirstName:"",lastName:"",address:"",pincode:""})
  const handleChange=(event)=>{
    let {name,value}=event.target;
    setformDetail({...formDetail,[name]: value })
  }
  const addUser=(event)=>{
    event.preventDefault();
    UserService.insertuser(formDetail);
    console.log(UserService.getallusers());
    setformDetail({FirstName:"",lastName:"",address:"",pincode:""})
    navigate("/list")
  }
  return (
   
    <div>
    <body className="antialiased bg-gray-200 text-gray-900 ">
        <div className="flex items-center h-screen w-full">
          <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <span className="block w-full text-xl uppercase font-bold mb-4">Login Form</span>      
            <form className="mb-4"  >
              <div className="mb-4 md:w-full">
                <label for="FirstName" className="block text-xs mb-1">FirstName</label>
                <input className="w-full border rounded p-2 outline-none focus:shadow-outline" type="text" name="FirstName" id="FirstName" placeholder="" onChange={handleChange}/>
              </div>
              <div className="mb-6 md:w-full">
                <label for="LastName" className="block text-xs mb-1">LastName</label>
                <input className="w-full border rounded p-2 outline-none focus:shadow-outline" type="text" name="lastName" id="lastName" placeholder="" onChange={handleChange}/>
              </div>
    
              <div className="mb-6 md:w-full">
                <label for="address" className="block text-xs mb-1">Address</label>
                <input className="w-full border rounded p-2 outline-none focus:shadow-outline" type="text" name="address" id="address" placeholder="" onChange={handleChange}/>
              </div>
    
              <div className="mb-6 md:w-full">
                <label for="pincode" className="block text-xs mb-1">PinCode</label>
                <input className="w-full border rounded p-2 outline-none focus:shadow-outline" type="text" name="pincode" id="pincode" placeholder="" onChange={handleChange}/>
              </div>
    
              <button className="bg-blue-500 hover:bg-green-700 text-white uppercase text-sm font-semibold" onClick={addUser}>Submit</button>
            </form>
          
        </div>
      </div>
    </body>
    
        </div>
  )
}
