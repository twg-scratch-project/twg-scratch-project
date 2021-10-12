import React, {createContext, useState} from 'react'

const AuthContext = createContext();

function AuthProvider({children}) {
    // Could do a request to auth/isAuth or something and store the result in state
    const [isAuth, setIsAuth] = useState(false)

    const globalData = {
        isAuth,
        toggleIsAuth: function(){
            setIsAuth(prevState => !prevState)
        }
    }

    return (
        <AuthContext.Provider value={globalData}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }