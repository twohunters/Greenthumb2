import React from 'react'

const GlobalContext = React.createContext({
    isLoggedIn: false,
    email:'',
    id:'',
    
})
export default GlobalContext