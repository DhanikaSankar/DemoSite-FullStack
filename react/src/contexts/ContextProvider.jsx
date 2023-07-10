import React, { createContext, useState } from 'react'


const newContext = createContext({
    user:null,
    token:null,
    setUser:()=>{},
    setToken:()=>{},
    notification:null,
    setNotification:()=>{}

});

function ContextProvider({children}){
    const [user,setUser] = useState({});
    const [notification, _setNotification] = useState('')
    const [token,_setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [banner, setBanner] = useState(true)

    const setNotification =(message)=>{
        _setNotification(message);
        setTimeout(()=>{
            _setNotification('')
        },5000)
    }

    const setToken=(token)=>{
        _setToken(token)
        if(token){
            localStorage.setItem('ACCESS_TOKEN',token);
        }else{
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }


  return (
    <newContext.Provider value={{user,token,setUser,setToken,notification,setNotification,banner, setBanner}}>
        {children}
    </newContext.Provider>
  )
}

export default ContextProvider;
export {newContext};

