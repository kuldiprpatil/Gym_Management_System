import React, { useState, useRef } from 'react'
import Axios from 'axios'
import { Link, Redirect, useHistory } from 'react-router-dom';

import { API_URL } from '../../common/URL';

// const API_URL = "http://localhost:8080/";

const ForgotPassword = () => {

    const history = useHistory();

    const inputstyle = {
        color:'black',
        background: 'transparent',
    }
    
    
    const [email, setEmail] = useState("");
    const [question, setQuestion] = useState("");
    const [questionans, setQuestionAns] = useState("");


    
      const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
      };
    

      const onChangequestion = (e) => {
        const question = e.target.value;
        setQuestion(question);
      };

      const onChangequestionans = (e) => {
        const questionans = e.target.value;
        setQuestionAns(questionans);
      };

      const handleRegister = () => {

        Axios.post(API_URL + 'forgotpassword',{
            email:email,
            question:question,
            answer:questionans
        })
        .then((response) => {

            console.log(response.data.data);
            
            if(response.data.data === 'success'){
                alert("User Verification Successful")
                sessionStorage.setItem("forgetemail",(email))
                history.push("/resetpassword")
            }
            else{
                alert(response.data.data)
            }
            
        })
      };


    return(
        <div className='container'>
            <form>
                <div className='form-group'>
                    <div className='col'><h1>Forgot Password</h1></div>
                </div>
                <div className='form-group col-md-4'>
                    
                        <label htmlFor='email'>Email</label>
                        <input 
                        className='form-control' 
                        type='email' 
                        placeholder='Enter Email'
                        value={email}
                        onChange={onChangeEmail}></input>
                    
                </div>
                <div className='form-group col-md-4'>
                    
                <label htmlFor='question'>Question</label>
                    <select 
                    id='question' 
                    style = {inputstyle} 
                    type='text' 
                    className='form-control form-control-sm'
                    onChange={onChangequestion}>
                        <option selected value='1'>What is your Nickname ?</option>
                        <option value='2'>What is your favourite Sport ?</option>
                        <option value='3'>What is your favourite City ?</option>
                        <option value='4'>Who is your Best Friend ?</option>
                    </select>
                    
                </div>
                <div className='form-group col-md-4'>
                    
                        <label htmlFor='questionans'>Answer</label>
                        <input 
                        className='form-control ' 
                        type='text' 
                        placeholder='Enter your Ans'
                        value={questionans}
                        onChange={onChangequestionans}></input>
                    
                </div>
                <div className='form-group col-md-4'>
                    <div className='col'>
                        <button
                        onClick={handleRegister}
                        className='btn btn-success' 
                        type='button'>Verify</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ForgotPassword;