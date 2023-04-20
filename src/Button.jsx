import React from 'react';
import cn from 'classnames'

function Button(props){
  
  return(
    <div>
    <button onClick={props.onClick} type={props.type} className={cn("disabled:bg-indigo-300 text-indigo-700 bg-white px-auto py-1 border rounded-md  font-bold w-48",props.className)}  disabled={props.disabled} >
      {props.children}</button>
    </div>
  );
}
export default Button;