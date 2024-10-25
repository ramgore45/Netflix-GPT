import React, { useRef, useState } from 'react'
import { checkValidateData } from '../utilis/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../utilis/firbase'
import { useDispatch } from 'react-redux'
import { addUser } from '../utilis/redux/userSlice'
import Header from './Header'
import { BackgroundImgUrl, USER_AVATAR } from '../utilis/constants'

const Login = () => {

    const [signUp, setSignUp] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    const dispatch = useDispatch()

    // referce the HTML tag, element
    const email = useRef(null)
    const password = useRef(null)
    const userName = useRef(null)

    const handleButtonClick = (e)=>{
        // email= give a object of ref object => current => value
        // // console.log("email", email)
        // console.log("userName", userName.current.value)
        // console.log("email", email.current.value)
        // console.log("password", password.current.value)
        if(signUp){
            if(userName.current.value !== '' && email.current.value !== '' && password.current.value !== ''){
                const message = checkValidateData(email.current.value, password.current.value, userName.current.name, signUp)
                setErrorMessage(message)
                if(message===null){
                    return createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                        .then((userCredential) => {
                            // Signed up 
                            const user = userCredential.user;
                            // console.log(user)
                            updateProfile(user,{
                                displayName:userName.current.value,
                                photoURL: USER_AVATAR
                            })
                                .then(()=>{
                                    // taking value from current user login or signup
                                    const {uid, email, displayName, photoURL} = auth.currentUser
                                    dispatch(
                                        addUser({
                                            uid:uid,
                                            email:email,
                                            displayName:displayName,
                                            photoURL:photoURL
                                        })
                                    )
                                })
                                .catch((error)=>
                                    setErrorMessage(error.message)
                                )
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            setErrorMessage(errorCode+"-"+errorMessage)
                        });
                }
            }else{
                return setErrorMessage("Please fill all the deatails.")
            }
        }else{
            if(email.current.value !== '' && password.current.value !== ''){
                const message = checkValidateData(email.current.value, password.current.value)
                setErrorMessage(message)
                if(message===null){
                    return signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                        .then((userCredential) => {
                            // Signed in 
                            const user = userCredential.user;
                            // console.log(user)
                            // taking value from current user login or signup
                            const {uid, email, displayName, photoURL} = user
                            dispatch(
                                addUser({
                                    uid:uid,
                                    email:email,
                                    displayName:displayName,
                                    photoURL:photoURL
                                })
                            )
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            setErrorMessage(errorCode+'-'+errorMessage)
                        });
                }
            }else{
                return setErrorMessage("Please fill the deatails.")
            }
        }
    }

  return (
    <div className='text-white'>
        <Header/>
        <img className='w-screen min-h-screen h-fit'
            src={BackgroundImgUrl} alt='bg-img'
        />

        <form className='p-14 px-16 space-y-10 bg-black bg-opacity-70 absolute w-[35%] mx-auto top-[20%] left-0 right-0 z-0 rounded-3xl'
            onSubmit={(e)=> e.preventDefault()}
        >
            <h1 className='text-4xl font-bold'>Sign In</h1>
            {signUp &&
                <input className='w-full rounded-md p-3 py-4 outline-none bg-gray-600 border border-white bg-opacity-50'
                    type='text' placeholder='Full Name' ref={userName}
                />
            }
            <input className='w-full rounded-md p-3 py-4 outline-none bg-gray-600 border border-white bg-opacity-50'
                type='email' placeholder='Email' ref={email}
            />
            <input className='w-full rounded-md p-3 py-4 outline-none bg-gray-600 border border-white  bg-opacity-50'
                type='password' placeholder={signUp ? 'Create Password' : 'Password'} ref={password}
            />
        
            {errorMessage!==null && <p className='text-red-600 text'>{errorMessage}</p>}

            <button className='bg-red-600 rounded-md w-full text-xl font-semibold py-3'
                onClick={()=> handleButtonClick()}
            >
                { signUp ? 'Sign Up' : 'Sign In' }
            </button>

            {
                signUp ? 
                <p>Already User ?{" "} 
                    <span className='text-lg font-semibold cursor-pointer' onClick={()=>setSignUp(false)}>
                        Sign In
                    </span>
                </p> 
                    : 
                <p>New to Netflix ?{" "} 
                    <span className='text-lg font-semibold cursor-pointer' onClick={()=>setSignUp(true)}>
                        Sign Up
                    </span>
                </p>
            }
        </form>
    </div>
  )
}

export default Login