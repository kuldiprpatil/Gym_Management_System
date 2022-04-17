import React, { useState, useRef } from 'react'
import Axios from 'axios'
import { history } from '../helpers/history';
import { Redirect } from 'react-router-dom';
import { API_URL } from './common/URL';

// const API_URL = "http://localhost:8080/";

const SignUp = (props) => {

    const inputstyle = {
        color:'black',
        background: 'transparent',
    }
    
    const [complete_name, setcomplete_name] = useState("");
    const [contact, setcontact] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [question, setQuestion] = useState("");
    const [questionans, setQuestionAns] = useState("");


    const onChangecomplete_name = (e) => {
        const complete_name = e.target.value;
        setcomplete_name(complete_name);
      };
      
    const onChangeconatct = (e) => {
        const contact = e.target.value;
        setcontact(contact);
      };
    
      const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
      };
    
      const onChangePassword = (e) => {
        const password = e.target.value;
        const pslength = password.length
        console.log(pslength);
        if(password != null){
            setPassword(password);
        }
        
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

        if(password == null || password < password.length){
            alert("pleas set password")
        }

        console.log(complete_name,contact,email,password,question,questionans)

        Axios.post(API_URL + 'signup',{
            complete_name:complete_name,
            contact:contact,
            email:email,
            password:password,
            question:question,
            answer:questionans
        })
        .then((response) => {

            console.log();
            
            if(response.data.message === 'success'){
                alert("SignUp Successfull")
                console.log(response.data.data);
                history.push("/signin")
                window.location.reload();
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
                    <div className='col'><h1>SignUp</h1></div>
                </div>
                <div className='form-group col-md-4'>
                    
                        <label htmlFor='username'>User Name</label>
                        <input 
                        className='form-control ' 
                        type='text' 
                        placeholder='Enter User Name'
                        value={complete_name}
                        onChange={onChangecomplete_name}></input>
                    
                </div>
                <div className='form-group col-md-4'>
                    
                        <label htmlFor='contact'>Conatct No.</label>
                        <input 
                        className='form-control ' 
                        type='number' 
                        placeholder='Enter your Contact'
                        value={contact}
                        onChange={onChangeconatct}></input>
                    
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
                    
                        <label htmlFor='password'>Password</label>
                        <input 
                        className='form-control' 
                        type='password'
                        required={'required'} 
                        placeholder="strong password like P@ssw0rd"
                        value={password}
                        onChange={onChangePassword}></input>
                    
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
                        type='button'>SignUp</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp;