import React, { useState} from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios'
import './SignUpLogin.css'
import { API_URL } from '../../components/common/URL';
import { useHistory } from 'react-router';
import Navbar from "./Navbar"
// const API_URL = "http://localhost:8080/";

const Login = (props) => {


    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


      const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
      };
    
      const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
      };


      
      const handleRegister = () => {


        Axios.post(API_URL + 'signin',{
            email:email,
            password:password
        })
        .then((response) => {
            console.log(response.data.data);
            localStorage.setItem("user", JSON.stringify(response.data.data));
            localStorage.setItem("id",(response.data.data.id));
            localStorage.setItem("name",(response.data.data.completeName));
            localStorage.setItem("role",(response.data.data.role));
            
            

            
            if(response.data.data.role == "user")
            {
                history.push("/profile")
                window.location.reload();
            }
            else
            {
                history.push("/dashboard")
                window.location.reload();
            }
            
            
        }).catch(() => {
            alert('Please Enter Correct Password or Email')
          });
      };

    //   if (isLoggedIn) {
    //     return <Redirect to="/dashboard" />;
    //   }


    return(
        <>
            <Navbar />
        <div className='container '>
            <form className='formCenter'>
                <div className='form-group'>
                    <div className='col'><h1>Login</h1></div>
                </div>
                
                <div className='form-group col-md-4'>
                    
                        <label htmlFor='email'>Email</label>
                        <input
                        required
                        className='form-control' 
                        type='email' 
                        placeholder='Enter Email'
                        value={email}
                        onChange={onChangeEmail}></input>
                    
                </div>
                <div className='form-group col-md-4'>
                    
                        <label htmlFor='password'>Password</label>
                        <input
                        required
                        className='form-control' 
                        type='password' 
                        placeholder='Enter Password'
                        value={password}
                        onChange={onChangePassword}></input>
                    
                </div>
                <div className='form-row'>
                <div className='row form-group col-md-4'>
                    
                       <div className='col'> <button
                        onClick={handleRegister}
                        className='btn btn-success' 
                        type='button'>Login</button>
                        </div>
                    
                    <div className='col'>
                        <Link to='/forgotpassword'>Forgot Password?</Link>
                    </div>
                </div>
                </div>
                
            </form>
        </div>
        </>
    )
}

export default Login;