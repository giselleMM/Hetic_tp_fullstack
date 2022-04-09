import React, {useEffect, useState} from "react";
import {Buffer} from "buffer";



const Form = ({setUserName, setPassword}) => {
    const [newUserName, setNewUserName] = useState()
    const [newPassword, setNewPassword] = useState()


    const handleChangeUserName = (e)=>{
        setNewUserName(e.currentTarget.value)
    }

    const handleChangePassword =(e) =>{
        setNewPassword(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setUserName(newUserName)
        setPassword(newPassword)

    }

    return (
         <div className='py-5 bg-dark' style={{height: '100vh'}}>
            <h1 className='text-center text-light'>Formulaire de login</h1>
            <form className='border rounded border-light p-5 col-md-4' onSubmit={handleSubmit}>
                <label htmlFor="userName" className='form-label text-light'> UserName </label>
                <input type="text" className='form-control' id='userName' onChange={handleChangeUserName}/>
                <label htmlFor="password" className='form-label text-light'> Password </label>
                <input type="password"  className='form-label text-light' id='password' onChange={handleChangePassword}/>
                <button type='submit' className='btn btn-primary mt-3 w-100'>Search</button>
            </form>
        </div>

    )
}

export default Form