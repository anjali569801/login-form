import React from 'react';
import { useFormik } from 'formik'
import Button from './Button';
import Input from './Input';
import {Link} from 'react-router-dom';
import * as Yup from 'yup';

function LoginForm() {


  const onFormSubmit=(values)=>{
   console.log("email",values.email,"password is",values.password);
    
 }

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(8).max(12)
  })

  const {handleChange,handleBlur,values,touched,handleSubmit,errors,resetForm} = useFormik({
    initialValues:{
      email:"",
      password:"",
    }
  ,onSubmit:onFormSubmit,
    validationSchema,
  })
  
  return(
    <form onSubmit={handleSubmit} className=" space-y-8 w-64 h-64">
      <div className="flex flex-col space-y-2">
      <Input onBlur={handleBlur}  placeholder="email" value={values.email} name="email" onChange={handleChange}/>
        {touched.email && errors.email && <span className="text-red-700">{errors.email}</span>}
      <Input onBlur={handleBlur}  name="password" placeholder="password" value={values.password} onChange={handleChange}/>
        {touched.password && errors.password && <span className="text-red-700">{errors.password}</span>}
        </div>
      <div className="space-y-2 mt-2 ">
     <Button type="submit">login</Button>
      <Button type="button" onClick={resetForm}>reset</Button>
         <Link className="text-white ml-16">forget password?</Link>
        </div>
     
    </form>
  );
}

export default LoginForm;