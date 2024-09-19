import React from 'react'
import Signup from './Components/Signup'
import axios from 'axios'
import Login from './Components/Login'

const App = () => {
  axios.defaults.withCredentials=true
  axios.defaults.baseURL="http://127.0.0.1:4000"
  return (
   <>
   <Signup/>
   <Login/>
  </>
  )
}

export default App

