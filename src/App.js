import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SplashScreen from './components/pages/SplashScreen';
import { auth } from './components/features/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { login, logout, selectUser } from './redux/userSlice';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux'
import ProfileScreen from './components/pages/ProfileScreen';


function App() {
const user = useSelector(selectUser);

  const dispatch = useDispatch()

  useEffect(() => {
     onAuthStateChanged( auth, (userAuth)=>{
      if(userAuth){
        dispatch(login({
          uid : userAuth.uid,
          email: userAuth.email,
        }
        ))
      }
      else{
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="App">
      <Router>



          {

            !user?<SplashScreen></SplashScreen>:  
            <>
                        <Navbar></Navbar>
                        <Routes>
            <Route exact path = '/profile' element={<ProfileScreen></ProfileScreen>}> </Route>


               <Route exact path = '/' element={<Home></Home>}></Route>
               </Routes>
               </>
          }


      </Router>
    </div>
  );
}

export default App;
