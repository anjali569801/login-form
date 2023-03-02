import React  from 'react';
import LoginForm from './LoginForm';
import FancyInput from './FancyInput';

function App() {
 
  return(
    <div className="bg-indigo-600 h-screen flex flex-col space-y-2 items-center justify-center">
      <FancyInput placeholder="search"></FancyInput>
     <LoginForm></LoginForm>
    </div>
    
  );
}

export default App;