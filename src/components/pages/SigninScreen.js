import React from 'react'
import { auth } from '../features/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './signinScreen.css'
import { useRef } from 'react';

function SigninScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);



    const  register = async (e)=>{
        e.preventDefault();
        
        try {
            const authUser = await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
            console.log(authUser)
        } catch (error) {
            console.log(error)
        }


    }
    const signin = async (e)=>{
        e.preventDefault()

        try {
            const authUser = await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            authUser? console.log(authUser): console.log('no user not signed in')
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className='container'>
            <form className='signin_form'>
                <h1>Sign In</h1>
                <input ref={emailRef} type='email' id='email' name='email' placeholder='Email address'></input>
                <input ref={passwordRef} type='password' id='password' name='password' placeholder='Password'></input>
                <button onClick={signin}>Signin</button>
                <span>New to Netflix?<span onClick={register}> Signup Now</span></span>
                <span>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span>Learn more.</span></span>

            </form>
            
        </div>
    )
}

export default SigninScreen
