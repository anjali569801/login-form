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

  const {handleChange,handleBlur,values,touched,handleSubmit,errors,isValid,dirty,resetForm} = useFormik({
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
      <Input onBlur={handleBlur}   placeholder="email" value={values.email} touched={touched.email}
        error={errors.email} name="email" onChange={handleChange}/>
        
        
      <Input onBlur={handleBlur} error={errors.password} name="password" placeholder="password" value={values.password} touched={touched.password} onChange={handleChange}/>
        
        </div>
      <div className="space-y-2 mt-2 ">
     <Button disabled={!dirty || !isValid } type="submit">login</Button>
      <Button type="button" onClick={resetForm}>reset</Button>
         <Link className="text-white ml-16">forget password?</Link>
        </div>
     
    </form>
  );
}

export default LoginForm;