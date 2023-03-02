import React from 'react';
import FormikHoc from './FormikHoc'

function Input({id,type,name,label,touched,className,error,...rest}) {

  return(
    <div className='flex flex-col'>
      <label htmlFor={id} className="sr-only">{label}</label>
      <input id={id} 
        name={name}
        {...rest}
        required  
        type={type || "text"}  
        {...rest}
        className={'p-1 px-4 w-48 bg-transparent border border-white placeholder-white rounded-sm border-1 focus:ring-indigo-500 ' +className }></input>
      { touched && error && <span className="text-red-700">{error}</span>}
    
   </div>
  );
}
export const FormikInput=FormikHoc(Input)
export default Input;
