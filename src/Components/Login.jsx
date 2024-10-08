import React, { useState } from 'react';
import axios from 'axios';
import URI from '../Config/Uri';

const Login = () => {
  const [formdata, setformdata] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformdata({
      ...formdata,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  

    try {
      const response = await axios.post("https://raybit-tasks.onrender.com/login", formdata);
      console.log(response)
      if(response.data.message ==="Your are Logged in Successfully! Now Enjoy unlimited access....."){
        console.log('Login successful', response.data);
        
      }
      
      else{
        console.log(response.data,"message")
      }
      setformdata({
        email:'',
        password:''
      })
     

    } 
    catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className='container d-flex justify-content-center align-items-center min-vh-100'>
      <form className='p-3 rounded shadow-sm bg-secondary' onSubmit={handleSubmit} style={{ width: '300px', padding: '20px' }}>
        <h2 className='text-center mb-3'>Login</h2>
        <div className='mb-2'>
          <label className='form-label'>Email</label>
          <input 
            type='email' 
            name='email' 
            value={formdata.email} 
            onChange={handleInputChange}  
            className='form-control' 
            placeholder='Email' 
            required 
          />
        </div>
        <div className='mb-2'>
          <label className='form-label'>Password</label>
          <input 
            type='password' 
            name='password' 
            value={formdata.password} 
            onChange={handleInputChange}  
            className='form-control' 
            placeholder='Password' 
            required 
          />
        </div>
        <div className='d-grid'>
          <button className='btn btn-primary btn-sl my-3' type='submit'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
