import React, { useState } from 'react'
import { useTheme } from '../Themeprovider'

const Formvalidation = () => {
  const {theme, toggleTheme} = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: ""
  })

  const validateForm = () => {
    let valid = true;
    const newErrors = {...errors};

    if(!formData.name.trim()){
        newErrors.name = "Name is required";
        valid=false;
    } else if(formData.name.trim().length < 2){
        newErrors.name = "Name must be atleast 2 characters";
        valid=false;
    } else {
        newErrors.name = ""
    }

    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!formData.email){
        newErrors.email = "Email is required";
        valid = false;
    } else if(!emailregex.test(formData.email)){
        newErrors.email = "Please enter valid email id";
        valid =false;
    } else {
        newErrors.email = ""
    }

    const phoneregex = /^\d{10}$/;
    if(!formData.phone){
        newErrors.phone = "Phone Number is required";
        valid = false;
    } else if(!phoneregex.test(formData.phone)){
        newErrors.phone = "Enter valid phone number";
        valid=false;
    } else {
        newErrors.phone = ""
    }
    setErrors(newErrors);
    return valid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm()){
        console.log("Form Submitted :", formData);
        alert("Form submitted Sucessfully!!!")
        setFormData({
            name: "",
            email: "",
            phone: ""
        })
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData,[name]:value})
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <button className='button' onClick={toggleTheme} type='button'>Toggle Theme</button>
        <h1 >Form Validation</h1> 
        <div className='form-group'>
            <label>Name: </label>
            <input type='text' placeholder='name' value={formData.name} onChange={handleChange} name='name' />
            {errors.name && <span className='error' style={{color:"red"}}>{errors.name}</span>}
        </div>
        
         
        <div className='form-group'>
            <label className='form-group'>E-mail: </label>
            <input type='email' placeholder='Email'value={formData.email} onChange={handleChange} name='email' />
            {errors.email && <span className='error' style={{color:'red'}}>{errors.email}</span>}
        </div>
         
        <div className='form-group'>
            <label className='form-group'>Phone: </label>
            <input type='tel' placeholder='Mobile No.' value={formData.phone} onChange={handleChange} maxLength={10} name='phone' /> 
            {errors.phone && <span className='error' style={{color:'red'}}>{errors.phone}</span>}
        </div>

        <button type='submit' className='button'>Submit</button>
        
      </form>
    </div>
  )
}

export default Formvalidation
