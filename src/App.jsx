import React  from 'react';
import {Routes,Route} from 'react-router-dom'
import Login from './LoginForm';
//import SignUpPage from './SignUpPage';

function App() {
 
  return(
    <Routes>
      <Route path="/" element={<Login></Login>}/>
{/*       //<SignUpPage></SignUpPage> */}
    
     
     </Routes>
    
  );
}

export default App;