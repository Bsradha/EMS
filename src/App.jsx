import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email,password) => {
    if (email == 'admin@me.com' && password == '1234') {
      setUser('admin') 
      console.log(user);
      
      
    }else if(email == 'user@me.com' && password == '1234'){
      setUser('employee')
      console.log(user);

    }
    else{
      alert("Invalid Credentials")
    }
  }

 

  return (
    <>
      {!user ? <Login  handleLogin={handleLogin} />: ''}
      {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/> }
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
      
    </>
  )
}

export default App
