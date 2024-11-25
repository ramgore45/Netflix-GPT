import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../utilis/firbase'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../../utilis/redux/slices/userSlice'
import { LOGO } from '../../utilis/constants'
import { toggleGptSearchView } from '../../utilis/redux/slices/gptSlice'
import { SUPPORTED_LANG } from '../../utilis/langConstants'
import { changeLang } from '../../utilis/redux/slices/configSlice'

const Header = () => {

  const user = useSelector((store)=>store.user)
  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch)

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

  const handleGptSearchClick = ()=>{
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e)=>{
    console.log(e.target.value)
    dispatch(changeLang(e.target.value))
  }

  useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth, (user) => {
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

    // unMount when  there is no header or need
    return ()=> unsubcribe();
  },[])

  return (
    <div className='absolute z-20 flex justify-between w-full bg-gradient-to-b from-black px-10 shadow-lg py-2'>
        <img className='w-44' 
            src={LOGO} alt='netflix-logo'
        />

        {user !== null &&
          <div className='space-x-5 mr-12'>
            <button className='text-red-500 bg-white font-bold rounded-lg px-3 p-2'
            onClick={handleGptSearchClick}
            >
              {showGptSearch ? 'Home' : 'GPT'}
            </button>
            <button className='text-white'
              onClick={handleSignOut}
            >
              Sign Out
            </button>
            {showGptSearch &&
              <select
                onClick={handleLanguageChange}
              >
                {
                  SUPPORTED_LANG.map((lang)=>
                    <option key={lang.identifier} value={lang.identifier}>{lang.title}</option>
                  )
                }
              </select>
            }
          </div>
        }

    </div>
  )
}

export default Header