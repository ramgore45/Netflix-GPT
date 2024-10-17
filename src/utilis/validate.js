
export const checkValidateData = (email, password)=>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)

    // password = uppercase, lowercase, number, symbol, 8char
    const isPasswordValid = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isEmailValid) return "Email id is not valid."

    if(!isPasswordValid) return "Password is not valid."

    return null
}