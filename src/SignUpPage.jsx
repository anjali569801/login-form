import React, { useState } from 'react';
import {useFormik} from 'formik'
import Button from './Button';
import Input from './Input';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

function signUpPage() {
  //if we use useState in place of useFormik
  // const [data, setData] = useState({
  //   name: '',
  //   email: "",
  //   create_password: "",
  //   password: "",

  // })


  // const handleChange = (event) => {
  //   setData({ ...data, [event.target.name]: event.target.value })

  // }
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    email:Yup.string().required().email(),
    password: Yup.string().required().min(8).max(12),
    
  })
  const onSubmit = () => {
    console.log("name", values.name)
    console.log("email", values.email)
    console.log("password", values.create_password)
    console.log("password", values.password)
    console.log("dis", (values.create_password === values.password))
    console.log("errors",errors)
   
  }

  const {values,errors,handleChange,handleBlur,touched,handleSubmit}=useFormik({
    initialValues:{name: '',
    email: "",
    create_password: "",
    password: ""
  },
    validationSchema,
    onSubmit
  })
  
  return (
    <div className="bg-green-600 h-screen flex flex-col space-y-2 items-center justify-center">
      <form onSubmit={handleSubmit} className="space-y-8 w-max h-64">

        <div className="flex flex-col space-y-2">
          <Input onChange={handleChange} value={values.name}
            touched={touched.name}
            error={errors.name}
            onBlur={handleBlur}
            name="name"
            placeholder="username"
            id="email"
            type="text"
            auto-complete="email address" />

          <Input onChange={handleChange} value={values.email}
            error={errors.email}
            touched={touched.email}
            onBlur={handleBlur}
            name="email"
            placeholder="email address"
            id="email"
            type="email"
            auto-complete="email address" />

          <Input onChange={handleChange} value={values.create_password}
            error={errors.password}
            touched={touched.create_password}
            onBlur={handleBlur}
            name="create_password"
            placeholder="Create password"
            id="email"
            type="password"
            auto-complete="email address" />
          
          <Input onChange={handleChange} value={values.password}
            error={errors.password}
            touched={touched.password}
            onBlur={handleBlur}
            name="password"
            placeholder="confirm password"
            id="password"
            type="password"
            auto-complete="current-password" />

        </div>
        <div className="space-y-2 mt-2 ">
          <Button type="submit" disabled={values.create_password !== values.password}>Signup</Button>
          <Button type="button" >reset</Button>
          <Link to="/" className="text-white ml-16">already have an account?</Link>
        </div>
      </form>
    </div>
  );
}
export default signUpPage