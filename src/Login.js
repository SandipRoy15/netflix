import React,{useState} from 'react';
import './Login.css';
import SignUp from './SignUp'

function Login() {
    const[signIn, setSignIn]=useState(false)

  return (
    <div className='login'>
        <div className='login_background'>
            <img className='login_logo' 
            src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' 
            alt='' />
            <button onClick={()=>setSignIn(true)} className='login_button'>
                Sign In
            </button>
            <div className='login_gradient' />
        </div>

        <div className='login_body'>
 
           {signIn ? (
            <SignUp />

           ) :(
            <>
            <h1>Unlimited films, Tv Programs and more.</h1>
            <h2>Wtach anywhere, Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create to restart your membership</h3>

            <div className='login_inputField'>
                <form>
                <input type="email" placeholder='Email Address'  />
                <button  onClick={()=>setSignIn(true)} className='login_getStarted'>GET STARTED</button>
                </form>

            </div>
            </>

        )}

          


        </div>
    </div>
  )
}

export default Login