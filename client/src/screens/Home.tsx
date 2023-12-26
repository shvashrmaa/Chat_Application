import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
    const [isUserLoggedIn, setisUserLoggedIn] = useState<boolean | unknown>(false)
    const navigate = useNavigate()
    useEffect(() => {
        if(!isUserLoggedIn){
            navigate('/authentication')
        }
    }, [])
    
  return (
    <div>Home</div>
  )
}

export default Home