import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utilis/firbase'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utilis/redux/userSlice'

const Header = () => {

  const user = useSelector((store)=>store.user)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser)
      navigate("/")
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName} = user.uid;
        dispatch(
          addUser({
            uid:uid,
            email:email, 
            displayNam:displayName
          })
        )
        navigate('/browse')
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate('/')
      }
    });
  },[])

  return (
    <div className='absolute z-10 flex justify-between w-full bg-gradient-to-b from-black px-10 shadow-lg py-2'>
        <img className='w-44' 
            src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='netflix-logo'
        />

        {user !== null &&
          <button 
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        }

    </div>
  )
}

export default Header