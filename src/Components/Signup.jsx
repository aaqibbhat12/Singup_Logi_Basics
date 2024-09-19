import React, { useState } from 'react';
import axios from 'axios';
import URI from '../Config/Uri';

const Signup = () => {
  const [formdata, setformdata] = useState({
    firstname: '',
    lastname: '',
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
    // console.log(formdata,"myform"  )
      
  
    try {
      const response = await axios.post("https://raybit-tasks.onrender.com/signup", formdata);
      console.log(response)  
     if(response.message=="User Created Successfully!!!"){
      console.log("User created ")
     }
    


      setformdata({
        firstname:'',
        lastname:'',
        email:'',
        password:''


      })
    } 
    catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className='container d-flex justify-content-center align-items-center min-vh-100'>
      <form className='p-3 rounded shadow-sm bg-secondary' onSubmit={handleSubmit} style={{ width: '300px', padding: '20px' }}>
        <h2 className='text-center mb-3'>Sign Up</h2>
        <div className='mb-2'>
          <label className='form-label'>First Name</label>
          <input 
            type='text' 
            name='firstname' 
            value={formdata.firstname} 
            onChange={handleInputChange}  
            className='form-control' 
            placeholder='First name' 
            required 
          />
        </div>
        <div className='mb-2'>
          <label className='form-label'>Last Name</label>
          <input 
            type='text' 
            name='lastname' 
            value={formdata.lastname} 
            onChange={handleInputChange}  
            className='form-control' 
            placeholder='Last name' 
            required 
          />
        </div>
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
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
