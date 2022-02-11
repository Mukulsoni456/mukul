import React from 'react'

import './signupScreen.css'

function SignupScreen() {
    return (
        <div className='container'>

            <div className='signup_tab'>
                <h1>Unlimited movies, TV shows and more.</h1>
                <p>Watch anywhere. Cancel anytime.</p>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <form className='signup_form'>
                    <input type='email' name='email' id='email' placeholder='Email address'></input>
                    <button type=' submit'>Get Started</button>
                </form>
            </div>
        </div>
    )
}

export default SignupScreen
