import React from 'react';
import { Label } from '../ui/Label';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link }  from 'react-router-dom';

export default function Register() {

    const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: ''
  });
  const history = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://post-apis.onrender.comapp.post/signup', user)
      .then(res=>{
        // http://localhost:4000/signup
        if (res.data === 'exists'){
          alert('User  already exit please login ')
        
        }
        else if(res.data === 'created'){
          alert('Regestred please log in')
        }
      }).catch(e=>{
        alert('wrong details')
      })
      // Redirect to login page after successful registration
     
    } catch (e) {
      // console.error(e.response.data.message);
      history.push('/Login');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[500px] space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Register for Property Listing</h1>
          <p className="text-gray-500 dark:text-gray-400">Create your account to get started</p>
        </div>
        <div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstname">First Name</Label>
                
                <Input type="text" name="firstName" placeholder="First Name" value={user.firstName} onChange={handleChange} required />
                
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastname" >Last Name</Label>
                
                <Input type="text" name="lastName" placeholder="Last Name" value={user.lastName} onChange={handleChange} required />
    
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" >Email</Label>
              
              <Input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required />
              
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone"  >Phone Number</Label>
              <Input type="tel" name="phoneNumber" placeholder="Phone Number" value={user.phoneNumber} onChange={handleChange} required />
  
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} required/>
            </div>
            
              <Button className="w-full items-center" >
              <button type="submit">
               Register
               </button>
              </Button>
            
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?
            <Link to ='/login' className="underline" >Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

