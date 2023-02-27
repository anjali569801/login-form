import React from 'react';
import Button from './Button';
import Input from './Input';
import {Link} from 'react-router-dom';

function LoginForm() {

 
  return(
    <div className=" space-y-8 w-64 h-64">
      <div className="flex flex-col space-y-2">
      <Input placeholder="email" value={""} onChange={event}></Input>
      <Input placeholder="email" value={""} onChange={event}></Input>
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