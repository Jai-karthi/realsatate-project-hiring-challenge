import React from 'react';

import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link }  from 'react-router-dom';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const history = useNavigate()
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('https://realsatate-project-hiring-challenge.onrender.com/', loginData)
      .then(res=>{
        if (res.data === 'exists'){
          history('/PropertyPostingForm')
        }
        else if(res.data === 'notexists'){
  
          alert('user not sign up')
        }
      }).catch(e=>{
        alert('wrong details')
        console.log(e)
      })
      }
      // Store token in local storage or cookies
    catch (e){
      console.error(e.response.data.message);
}
}
  return (
    <div className="flex min-h-screen items-center justify-center   bg-gray-100  px-4 dark:bg-zinc-50">
      <div className="mx-auto max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome to Property Listing</h1>
          <p className="text-gray-500 dark:text-gray-400">Sign in to your account to continue</p>
        </div>
        
          {/* <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="email" className="space-y-2">Email</label>
              <Input>
              <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleChange} required />
              </Input>
              
            </div>
            <div className="space-y-2">
              <label htmlFor="password">Password</label>
              <Input>
              <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleChange} required />
              </Input>
            </div>
            <Button>
             <button type="submit">Login</button>
            </Button>
            <div className="mt-4 text-center text-sm">
            Don't have an account?
            <Link to ='/' className="underline"> Sign up</Link>
        </div>
          </form> */}
          <form className="space-y-4"onSubmit={handleSubmit}>
          <div className="space-y-2">
          <label htmlFor="email" className="space-y-2">Email</label>

           <Input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleChange} required />
          
           </div>
           <div className="space-y-2">
           
           <label htmlFor="password">Password</label>
          
           <Input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleChange} required />
          </div>
           <Button>
          <button type="submit">Login</button>
          </Button>
          <div className="mt-4 text-center text-sm">
            Don't have an account?
            <Link to ='/' className="underline"> Sign up</Link>
        </div>
          </form>

      </div>
    </div>
  );
}

export default Login;
