
import React, {createContext, useState} from 'react'

//Tester
const AuthContext = createContext();

function AuthProvider({children}) {
    // Could do a request to auth/isAuth or something and store the result in state
    const [isAuth, setIsAuth] = useState(false);
    const [userID, setUserID] = useState('');


    const globalData = {
        isAuth,
        toggleIsAuth: function(){
            setIsAuth(prevState => !prevState)
        },
        userID, 
        setUserID: function(arg){
            setUserID(arg)
        },
    }


    return (
        <AuthContext.Provider value={globalData}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }