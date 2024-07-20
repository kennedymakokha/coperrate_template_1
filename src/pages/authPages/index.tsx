import { useState } from 'react'
import { DarkLogo } from '../../components/atomic/images'
import AuthInputBox from '../../components/atomic/AuthInputBox'

function index() {

    const [userInfo, setUserInfo] = useState({
        username: "", password: ""
    })
    setUserInfo({ username: "", password: ""})
    console.log(userInfo)
    const handleChange = (e: any) => {
        const { name, value } = e.target
        setUserInfo(prev => ({
            ...prev, [name]: value
        }))
    }
    const [showPass, setShowPass] = useState(false)
    return (
        <div className="sm:absolute w-full h-auto flex inset-0 sm:px-40   items-center justify-center  z-20">
            <div className="flex flex-col py-4  h-auto sm:py-20 px-4 sm:w-1/3 w-full bg-white shadow-2xl ">
                <div className="flex items-center flex-col justify-center ">
                    <img src={DarkLogo} className='h-28 w-28 ' alt="" />
                    <h2 className="font-bold text-3xl">Welcome to AppInApp</h2>
                    <h2 className="text-slate-500">sign in to your account below </h2>
                </div>

                <AuthInputBox label='Email,Phone or Username' onChange={handleChange} type='text' placeholder='Enter your email name or username' />
                <AuthInputBox showPass={showPass} setShowPass={setShowPass} label='Password' onChange={handleChange} type='password' placeholder='Enter your email name or username' />
                <AuthInputBox showPass={showPass} setShowPass={setShowPass} label='Password' onChange={handleChange} type='password' placeholder='Enter your email name or username' />
                <AuthInputBox showPass={showPass} setShowPass={setShowPass} label='Password' onChange={handleChange} type='password' placeholder='Enter your email name or username' />
                {/*  <AuthInputBox label='Email,Phone or Username' onChange={handleChange} type='text' placeholder='Enter your email name or username' />
                    <AuthInputBox showPass={showPass} setShowPass={setShowPass} label='Password' onChange={handleChange} type='password' placeholder='Enter your email name or username' />
                    <AuthInputBox showPass={showPass} setShowPass={setShowPass} label='Password' onChange={handleChange} type='password' placeholder='Enter your email name or username' />
                    <AuthInputBox showPass={showPass} setShowPass={setShowPass} label='Password' onChange={handleChange} type='password' placeholder='Enter your email name or username' /> */}

                <div className="flex h-10 px-4 items-center justify-between ">
                    <div className="flex items-center ">
                        <input type="checkbox" /> <span className='text-gray-700 font-semibold px-2 '> Remember me</span>
                    </div>
                    <div className="flex"><span className='font-bold text-primary-600'>Forgot Password</span></div>
                </div>
                <div className="flex px-2">
                    <div className="flex h-12 rounded-md items-center justify-center my-2 shadow-3xl bg-primary-600 w-full">
                        <h2 className="font-bold text-[20px] text-white">
                            Login
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index