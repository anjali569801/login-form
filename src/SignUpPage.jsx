import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import { Link } from 'react-router-dom';

function signUpPage() {
  const [data, setData] = useState({
    name: 'anjali',
    email: "a.gmail.com",
    create_password: "",
    password: "",

  })


  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })

  }
  const onButtonClick = () => {
    console.log("name", data.name)
    console.log("email", data.email)
    console.log("password", data.create_password)
    console.log("password", data.password)
    console.log("dis", (data.create_password === data.password))


  }



  return (
    <div className="bg-orange-600 h-screen flex flex-col space-y-2 items-center justify-center">
      <form className=" space-y-8 w-64 h-64">

        <div className="flex flex-col space-y-2">
          <Input onChange={handleChange} value={data.name}
            name="name"
            placeholder="username"
            id="email"
            type="text"
            auto-complete="email address" />

          <Input onChange={handleChange} value={data.email}
            name="email"
            placeholder="email address"
            id="email"
            type="email"
            auto-complete="email address" />

          <Input onChange={handleChange} value={data.create_password}
            name="create_password"
            placeholder="Create password"
            id="email"
            type="password"
            auto-complete="email address" />
          <Input onChange={handleChange} value={data.password}
            name="password"
            placeholder="confirm password"
            id="password"
            type="password"
            auto-complete="current-password" />

        </div>
        <div className="space-y-2 mt-2 ">
          <Button type="submit" onClick={onButtonClick} disabled={data.create_password === data.password}>Signup</Button>
          <Button type="button" >reset</Button>
          <Link to="/" className="text-white ml-16">already have an account?</Link>
        </div>
      </form>
    </div>
  );
}
export default signUpPage