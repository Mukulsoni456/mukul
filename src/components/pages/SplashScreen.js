import React from 'react'
import SignupScreen from './SignupScreen'
import splashImage from '../netflix-assets/netflixbg.png'
import { useState } from 'react'
import mainlogo from '../netflix-assets/mainlogo.png'
import './splashScreen.css'
import SigninScreen from './SigninScreen'

function SplashScreen() {
    const [click, setclick] = useState(false);
    const handleClick = ()=>{
        setclick(!click)
    }
    return (
        <>
        <div>
            <div className='container'>
            <nav className='splash_navbar'>
                <img src={mainlogo}></img>
                {
                    click?<button onClick={handleClick}>Sign up</button>:<button onClick={handleClick}>Sign in</button>
                }
                
            </nav>
            {
                click?<SigninScreen></SigninScreen>:<SignupScreen></SignupScreen>
            }
                
            </div>
        </div>
        </>
    )
}

export default SplashScreen
