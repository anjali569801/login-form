import React from 'react';
import {useField} from 'formik';

function Input({id,type,name,...rest}) {

  const [field,meta]=useField(name);
  const {onChange,onBlur,value}=field;
  const{touched,error}=meta
 
  return(
    <div className='flex flex-col'>
      <label htmlFor={id} className="sr-only">{name}</label>
      <input id={id} 
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        required  
        type={type || "text"}  
        {...rest}
        className={'p-1 px-4 w-48 bg-transparent border border-white placeholder-white rounded-sm border-1' }></input>
      { touched && error && <span className="text-red-700">{error}</span>}
    
   </div>
  );
}

export default Input;
