
export const checkValidateData = (email, password, userName, signUp)=>{

    const isUserNameValid = /^([a-zA-Z]*\s?[a-zA-Z]*)?$/.test(userName)

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)

    // password = uppercase, lowercase, number, symbol, 8char
    const isPasswordValid = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(signUp){ 
        if(!isUserNameValid) return "User name is not valid."
    }
    
    if(!isEmailValid) return "Email id is not valid."

    if(!isPasswordValid) return "Password is not valid."

    return null
}