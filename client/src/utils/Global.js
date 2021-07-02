import React from 'react'

const GlobalContext = React.createContext({
    isLoggedIn: false,
    email:'',
    id:'',
    onUpdate: ()=> undefined
})
export default GlobalContext