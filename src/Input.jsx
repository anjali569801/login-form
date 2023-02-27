import React from 'react';

function Input(props) {

 
  return(
    
      <input id={props.id} name={props.name} placeholder={props.placeholder} type={props.type}  value={props.value} onChange={props.onChange} className={'p-1 px-4 w-48 bg-transparent border border-white placeholder-white rounded-sm border-1' + (props.className)}></input>
   
  );
}

export default Input;