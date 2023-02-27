import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import {Link} from 'react-router-dom';

function LoginForm() {

  const[email,SetEmail]=useState('')

  const[password,SetPAssword]=useState('')

  const onEmailChange=(event)=>{
    SetEmail(event.target.value);
  }
  const onPasswordChange=(event)=>{
    SetPAssword(event.target.value);
  }
 
  return(
    <div className=" space-y-8 w-64 h-64">
      <div className="flex flex-col space-y-2">
      <Input placeholder="email" value={email} name="email" onChange={onEmailChange}></Input>
      <Input name="myPassowrd" placeholder="password" value={password} onChange={onPasswordChange}></Input>
        </div>
      <div className="space-y-2 mt-2 ">
     <Button>login</Button>
      <Button>reset</Button>
         <Link className="text-white ml-16">forget password?</Link>
        </div>
     
    </div>
  );
}

export default LoginForm;