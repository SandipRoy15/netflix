import React, {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom";

import './NavBar.css'


function NavBar() {
    const[show, setShow]=useState(false);
    const navigate=useNavigate();

    const transitionNavBar=()=>{
        if(window.scrollY>100){
            setShow(true)
        } else{
            setShow(false)
        }
    };

    useEffect(()=>{
        window.addEventListener("scroll", transitionNavBar);
        return () =>window.removeEventListener("scroll", transitionNavBar)
    }, [])
  return (
    <div className={`navbar ${show && "navbar_black"}`}>
        <div className='navbar_contents'>
            <img 
             onClick={()=>navigate("/")}
            className='navbar_logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='' />

             <img 
             onClick={()=>navigate("/profile")}
             className='avatar_logo' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='' />
        </div>
        <div>

        </div>
        </div>
  )
}

export default NavBar