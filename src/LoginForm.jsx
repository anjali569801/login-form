import React from 'react';
import { Formik,Form } from 'formik';
import Button from './Button';
import Input from './Input';
import {Link} from 'react-router-dom';
import * as Yup from 'yup';

function LoginForm() {


  const onFormSubmit=(data)=>{
   console.log("email",data);
    
    
 }

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(8).max(12)
  })

 const initialValues ={
      email:"",
      password:"",
    }
//   const {handleChange,handleBlur,values,touched,handleSubmit,errors,isValid,dirty,resetForm} = useFormik({

// initialValues  ,onSubmit:onFormSubmit,
//     validationSchema,
//   })
  
  return(
    <Formik initialValues={initialValues} validationSchema={validationSchema}
      onSubmit={onFormSubmit}
      className=" space-y-8 w-64 h-64">
      <Form>
      <div className="flex flex-col space-y-2">
      <Input name="email"
        placeholder="email address"
        id="email"
        type="email"
        auto-complete="email address"/>
        
        
      <Input  name="password" 
        placeholder="password"
        id="password"
        type="password"
        auto-complete="current-password"/>
        
        </div>
      <div className="space-y-2 mt-2 ">
     <Button  type="submit">login</Button>
      <Button type="button" >reset</Button>
         <Link className="text-white ml-16">forget password?</Link>
        </div>
    </Form>
    </Formik>
  );
}

export default LoginForm;