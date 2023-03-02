import React ,{useState} from 'react';
import LoginForm from './LoginForm';
import A from './useContext/A'
import AlertContext from './useContext/Context';


function App() {

  const [count,setCount]=useState(0)
 
  return(
    <AlertContext.Provider value={{count,setCount}}>
    <div className="bg-indigo-600 h-screen flex items-center justify-center">
      <A></A>
     <LoginForm></LoginForm>
    </div>
    </AlertContext.Provider>
  );
}

export default App;