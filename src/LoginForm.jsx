import React from 'react';
import { useFormik } from 'formik'
import Button from './Button';
import Input from './Input';
import {Link} from 'react-router-dom';

function LoginForm() {


  const onFormSubmit=(values)=>{
   console.log("email",values.email,"password is",values.password);
  
 }

  const {handleChange,handleBlur,values,handleSubmit,errors,resetForm} = useFormik({
    initialValues:{
      email:"",
      password:"",
    }
  ,onSubmit:onFormSubmit,
  })
  
  return(
    <form onSubmit={handleSubmit} className=" space-y-8 w-64 h-64">
      <div className="flex flex-col space-y-2">
      <Input onBlur={handleBlur}  placeholder="email" value={values.email} name="email" onChange={handleChange}/>
      <Input onBlur={handleBlur}  name="password" placeholder="password" value={values.password} onChange={handleChange}/>
        </div>
      <div className="space-y-2 mt-2 ">
     <Button>login</Button>
      <Button onClick={resetForm}>reset</Button>
         <Link className="text-white ml-16">forget password?</Link>
        </div>
     
    </form>
  );
}

export default LoginForm;