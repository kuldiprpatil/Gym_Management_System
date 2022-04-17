import React  from 'react';
import axios from "axios"
import { useEffect, useState } from "react"
import './style.css'
import { API_URL } from "../../../components/common/URL"

    
function Feedback(){

    let i = 0;

    const [allfeedbacklist, setAllFeedbackList] = useState([])
    const [feedbacklist, setFeedbackList] = useState([])

    useEffect(() => {
        axios.get(API_URL+"getAllfeedbacks")
        .then((response) => {
            console.log(response.data.data)
            setAllFeedbackList(response.data.data)
        })
    }, [])

    const firstFiveFeedback = [];
    const firstFiveFeedbackName = [];
    
    allfeedbacklist.map((val,index) => {
        
            firstFiveFeedback.push(val.feedback)
            firstFiveFeedbackName.push(val.complete_name)
        
    })


    const NewfirstFiveFeedback = [];
    const NewfirstFiveFeedbackName = [];
    
    allfeedbacklist.map((val,index) => {
        if(index <= 5){
            NewfirstFiveFeedback.push(firstFiveFeedback[allfeedbacklist.length - index])
            NewfirstFiveFeedbackName.push(firstFiveFeedbackName[allfeedbacklist.length - index])
        }
    })

    


    const introStyle = {
        height : '100%',
      }
    const introStyle2 = {
        height : '100%',
        background : 'rgb(24, 24, 24)'
      }
    const spanStyle = {
        color : 'rgb(255, 115, 0)'
      }

    return(

        <div style={introStyle} class="card">
            <div class="footercard">
            <div className='card text-center footercardbody' style={introStyle}>
                <div style={introStyle} className='card footercardbody'>
                <div style= {introStyle} class="card-body footercardbody">
                    <h1>Members Feedback</h1>
                    {allfeedbacklist.map((val,index) => {
                        return<div className='row' key={val.feed_id}>
                                <div className='col'>
                                    <b>{NewfirstFiveFeedbackName[index]}</b>
                                    <p>{NewfirstFiveFeedback[index]}</p>
                                </div>
                            </div>
                    })}
                </div>
            </div>
            </div>
            </div>
            </div>


    )
}

export default Feedback;