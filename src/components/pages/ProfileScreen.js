import React from 'react'
import Navbar from '../Navbar'
import './profileScreen.css'
import Netflixavatar from '../netflix-assets/Netflixavatar.png'
import { auth } from '../features/firebase'
import {signOut} from 'firebase/auth'



function ProfileScreen() {
    return (
        <div className='profileScreen'>
            <Navbar className='nav'></Navbar>
            <div className='profileScreen_body'>
                <div className='profileScreen_info'>
                    <h1>Edit Profile</h1>
                    <div className='profile_info_container'>
                        <img src={Netflixavatar}></img>
                        <div className='profile_info'>
                            <p className='profile_email'>brideloop@gmail.com</p>
                            <p>Plans (Current Plan : premium)</p>
                            <p>Renewal date</p>

                            <div className='subscription'>
                                <div className='plan_info'>
                                    <p>Netflix Standard</p>
                                    <p>1080p</p>
                                </div>
                                <button>Subscribe</button>
                            </div>
                            <div className='subscription'>
                                <div className='plan_info'>
                                    <p>Netflix Basic</p>
                                    <p>1080p</p>
                                </div>
                                <button>Subscribe</button>
                            </div>
                            <div className='subscription'>
                                <div className='plan_info'>
                                    <p>Netflix Premium</p>
                                    <p>1080p</p>
                                </div>
                                <button>Subscribe</button>
                            </div>

                            <button onClick={()=>{signOut(auth)}}>Sign out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
