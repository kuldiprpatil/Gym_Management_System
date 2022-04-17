import React, { useState, useRef, useEffect } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom';

import { API_URL } from './common/URL';

// const API_URL = "http://localhost:8080/";

const ResetPassword = () => {

    const history = useHistory();

    const [isemail,setIsEmail] = useState('')

  useEffect(() => {
    setIsEmail(sessionStorage.getItem("forgetemail")) 
    console.log(isemail)
}, [])

console.log(isemail);

    const inputstyle = {
        color:'black',
        background: 'transparent',
    }
    
    
   
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");


    
      const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
      };
      const onChangePassword1 = (e) => {
        const password = e.target.value;
        setPassword1(password);
      };

      const handleRegister = () => {
          if(password===password1)
          {

        Axios.post(API_URL + 'changepassword',{
            email:isemail,
            password:password
        })
        .then((response) => {

            console.log(response.data.data);
            
            if(response.data.status === 'success'){
                alert("Password changed successfully.")
                history.push("/signin")
            }
            else{
                alert(response.data.data)
            }
            
        })
    }
    else{
        alert('password does not match')
    }
      };


    return(
        <div className='container'>
            <form>
                <div className='form-group'>
                    <div className='col'><h1>Reset Password</h1></div>
                </div>
                <div className='form-group col-md-4'>
                    
                        <label htmlFor='password'>New Password</label>
                        <input 
                        className='form-control' 
                        type='password' 
                        placeholder='Enter Password'
                        value={password}
                        onChange={onChangePassword}></input>
                    
                </div>
                <div className='form-group col-md-4'>
                    
                    <label htmlFor='password'>Confirm Password</label>
                    <input 
                    className='form-control' 
                    type='password' 
                    placeholder='Enter Password'
                    value={password1}
                    onChange={onChangePassword1}></input>
                
            </div>
                <div className='form-group col-md-4'>
                    <div className='col'>
                        <button
                        onClick={handleRegister}
                        className='btn btn-success' 
                        type='button'>Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ResetPassword;
