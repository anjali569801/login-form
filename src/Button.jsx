import React from 'react';

function Button(props){
  
  return(
    <div>
    <button onClick={props.onClick} class={"disabled:bg-indigo-300 text-indigo-700 bg-white px-auto py-1 border rounded-md  font-bold w-48"}  disabled={props.disabled} >
      {props.children}</button>
    </div>
  );
}
export default Button;