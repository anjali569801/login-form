import React from 'react';

function Button(props){
  
  return(
    <div>
    <button onClick={props.onClick} class={"disabled:bg-indigo-300 text-indigo-700 bg-white px-20 py-1 border rounded-md  font-bold "}  disabled={props.disabled} >
      {props.children}</button>
    </div>
  );
}
export default Button;