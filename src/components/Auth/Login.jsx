import React, { useState } from 'react'

const Login = () => {

     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')

    const submitHandler = (e)=>{   
        e.preventDefault()
        console.log("email is",email)
        console.log("password is",password)

        setEmail("")
        setPassword("")
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className=' border-2 border-emerald-600 rounded-xl p-20'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            action="" className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value);
                }}
                required className='border-2 border-emerald-600 py-3 px-5 text-xl outline-none bg-transparent rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value);                    
                }}
                required className='border-2 border-emerald-600 py-3 px-5 text-xl outline-none bg-transparent rounded-full placeholder:text-gray-400 mt-3' type="password" placeholder='Enter password' />
                <button className='border-2 border-none bg-emerald-600 py-3 px-5 text-xl text-white outline-none rounded-full placeholder:text-white mt-5'>Log in </button>
            </form>

        </div>
      
    </div>
  )
}

export default Login
