import React,{useState}  from 'react';
import {Routes,Route} from 'react-router-dom'
import Login from './LoginForm';
import SignUpPage from './SignUpPage';
//import Popup from './Popup'
import PopContext from './PopContext';

function App() {
  //const [message,setMessage] =useState('login successfully');
   //const [showPopup,setShowPopup] = useState(false)
 
  return(
   // <PopContext.Provider value={{message:message,setShowPopup:setShowPopup,showPopup:showPopup}}>
          <Routes>
      <Route path="/" element={<Login></Login>}/>
      <Route path="/signUpPage" element={<SignUpPage></SignUpPage>}></Route>
</Routes>
    
   // </PopContext.Provider>

    
  );
}

export default App;