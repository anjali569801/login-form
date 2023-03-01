import React, { useContext } from 'react';

import {Context} from './App'

function D(){
  const {count,setCount}=useContext(Context)
  return(
    <div className="bg-white">
      count is {count}
      <button className="bg-yellow-500 p-2 m-2" onClick={()=>setCount(count+1)}>increase</button>
    </div>
  );
}
export default D