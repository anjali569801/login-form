import React ,{useState} from 'react';
import LoginForm from './LoginForm';
import A from './A'

export const Context = React.createContext({});

function App() {

  const [count,setCount]=useState(0)
 
  return(
    <Context.Provider value={{count,setCount}}>
    <div className="bg-indigo-600 h-screen flex items-center justify-center">
      <A></A>
     <LoginForm></LoginForm>
    </div>
    </Context.Provider>
  );
}

export default App;