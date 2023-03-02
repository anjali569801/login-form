import React from 'react';

function FancyInput({id,type,name,label,className,...rest}) {

  return(
    <div className='flex flex-col'>
      <label htmlFor={id} className="sr-only">{label}</label>
      <input id={id} 
        name={name}
        {...rest}
        required  
        type={type || "text"}  
        className={'p-1 px-4 w-48 bg-white  border-pink-700  placeholder-green-900  rounded-md border-b-2 border-t-2 ' +className }></input>
   </div>
  );
}

export default FancyInput;
