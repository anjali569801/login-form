import React from 'react';

function Input({id,type,name,touched,error,...rest}) {

  
 
  return(
    <div className='flex flex-col'>
      <label htmlFor={name} className="sr-only">{name}</label>
      <input id={id} 
        name={name}
        required  
        type={type || "text"}  
        {...rest}
        className={'p-1 px-4 w-48 bg-transparent border border-white placeholder-white rounded-sm border-1' }></input>
      { touched && error && <span className="text-red-700">{error}</span>}
    
   </div>
  );
}

export default Input;
