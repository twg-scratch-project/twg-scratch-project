import React, {useContext} from 'react'
import GoogleButton from 'react-google-button'

import { AuthContext } from '../context/authContext.jsx'

import AddTripForm from './AddTripForm/index.jsx'

const Playground = () => {
    const context = useContext(AuthContext)
    return (<>
        <GoogleButton onClick={()=> {
            console.log('Google button clicked. Is authenticated?', context.isAuth)
            context.toggleIsAuth()    
        }} />
        {context.isAuth ? <h2>Welcome, user</h2> : <h2>Please sign in.</h2>}
        <AddTripForm></AddTripForm>
    </>)
}

export default Playground;