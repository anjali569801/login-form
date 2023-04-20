import React,{memo,useContext} from 'react';
import Button from "./Button";
import PopContext from './PopContext';



function Popup({onClick}){
  
  const {message}=useContext(PopContext)
 
  return(
    <div className="bg-yellow-500 flex items-center justify-between">
      <div className="text-indigo-700 font-bold">{message}</div>
      <Button className="bg-yellow-500 border-none w-5 mr-4" onClick={onClick}>X</Button>
    </div>
  );
}
export default memo(Popup)