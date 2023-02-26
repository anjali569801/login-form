import React from 'react';

function Input(props) {

 
  return(
    <div className="border border-black">
      <input placeholder={props.placeholder} type={props.type}  value={props.value} onChange={props.onChange} className={'p-1 ' + (props.className)}></input>
    </div>
  );
}

export default Input;