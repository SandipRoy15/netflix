import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Login.js';
import {auth} from "./firebase";
import { useDispatch ,useSelector} from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from'./ProfileScreen';



function App() {
  const user=useSelector(selectUser);

  const dispatch=useDispatch();


  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        // logeed in

        console.log(userAuth);
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,

        })
        );
         

      } else{
        // loged out
        dispatch(logout());

      }
    });
    // return unsubscribe;

  },[dispatch])

  return (
    <div className="app">
      
      <BrowserRouter>
      {!user ?(
        <Login />
      ):(
        <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      
      </Routes>
      )}
    </BrowserRouter>
    

  
    
    </div>
  );
}

export default App;
