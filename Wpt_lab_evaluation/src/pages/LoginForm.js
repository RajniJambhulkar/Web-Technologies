import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
export default function LoginForm() {
const navigate=useNavigate();
const [userName,setUserName] = useState();
const [password,setPassword] = useState();
//const [userDetails,set]=useState([userName:"",pas:""])

const handleUserName = (event)=>{
  const {name , value} = event.target;
   setUserName(value);
}

const handlePassword = (event)=>{
  const {name , value} = event.target;
   setPassword(value);
}

const registerdUsers= [{userName:"Yatin",password:"1234"},{userName:"Rahul",password:"1234"},{userName:"Somesh",password:"1234"}]

const submitHandler =()=>{
    const validate = registerdUsers.find((user)=>{
     return (user.userName===userName && user.password===password)
    });
    if (validate)
    {
      console.log(userName,password);
      navigate("/form");
    }

}

  return (
    <div>

<body className="antialiased bg-gray-200 text-gray-900 font-sans">
    <div className="flex items-center h-screen w-full">
      <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
      <span className="block w-full text-xl uppercase font-bold mb-4">Login Form</span>      
        <form className="mb-4" action="/" method="post">
          <div className="mb-4 md:w-full">
            <label for="userName" className="block text-xs mb-1">Username </label>
            <input className="w-full border rounded p-2 outline-none focus:shadow-outline" type="text" name="userName" id="email" placeholder="Username " onChange={handleUserName}/>
          </div>
          <div className="mb-6 md:w-full">
            <label for="password" className="block text-xs mb-1">Password</label>
            <input className="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="password" id="password" placeholder="Password" onChange={handlePassword}/>
          </div>

          
          <button className="bg-blue-500 hover:bg-green-700 text-white uppercase text-sm" onClick={submitHandler}>Login</button>
        </form>
      
    </div>
  </div>
</body>


    </div>
  )
}
