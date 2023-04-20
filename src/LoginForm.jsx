import React,{useContext} from 'react';
//import { Formik, Form } from 'formik';
import Button from './Button';
import Input from './Input';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { withFormik } from 'formik';
//import Popup from './Popup';
//import PopContext from './PopContext';

  const onFormSubmit = (values) => {
    console.log("email", values);
    setShowPopup(true)
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(8).max(12)
  })



  const initialValues = {
    email: "",
    password: "",
  }

export function LoginForm({handleChange,handleBlur,values,touched,handleSubmit,errors,isValid,dirty}) {

 
  //const {showPopup,setShowPopup} = useContext(PopContext)
 // console.log("show popup",showPopup);
  //   const {handleChange,handleBlur,values,touched,handleSubmit,errors,isValid,dirty,resetForm} = useFormik({

  // initialValues  ,onSubmit:onFormSubmit,
  //     validationSchema,
  //   })

  return (
    <div className="bg-indigo-600 h-screen flex flex-col space-y-2 items-center justify-center">
     <form onSubmit={handleSubmit} className=" space-y-8 w-64 h-64">
      
        <div className="flex flex-col space-y-2">
          <Input onChange={handleChange}
            onBlur={handleBlur}
            values={values.email}
            touched={touched.email}
            error={errors.email}
            name="email"
            placeholder="email address"
            id="email"
            type="email"
            auto-complete="email address" />


          <Input onChange={handleChange}
            onBlur={handleBlur}
            values={values.password}
            touched={touched.password}
            error={errors.password}
            name="password"
            placeholder="password"
            id="password"
            type="password"
            auto-complete="current-password" />

        </div>
        <div className="space-y-2 mt-2 ">
          <Button disabled={!dirty || !isValid } type="submit" >login</Button>
          
          <Button type="button" >reset</Button>
          <div className="flex flex-col pl-16 text-white">
          <Link to="/signUpPage">create an account</Link>
          
          <Link>forget password?</Link>
            </div>
        </div>
      </form>
    </div>
  );
}

const myHOC = withFormik({validationSchema:validationSchema,initialValues:initialValues, onSubmit:onFormSubmit})
const Login = myHOC(LoginForm)

export default Login;                                                                                                                                                                                                                                                           