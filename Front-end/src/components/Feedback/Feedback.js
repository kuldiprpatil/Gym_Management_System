import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { API_URL } from '../common/URL'

const UserFeedback = () => {

    const [isUser,setIsUser] = useState('')
    const [isUserID,setIsUserID] = useState('')

    useEffect(() => {
        setIsUser(localStorage.getItem("name"))
        setIsUserID(localStorage.getItem("id"))
    }, [])

    
    const [userfeedback, setUserFeedback] = useState('')


    const onChangeFeedback = (e) => {
        const userfeedback = e.target.value;
        setUserFeedback(userfeedback);
      };

      const cleareFeilds = () => {
          setUserFeedback('')
      }

      
    const submitFeedback = () => {

        if(isUser)
      {
        Axios.post(API_URL + 'postfeedback',{
            user_id:isUserID,
            feedback:userfeedback
        })
        .then((response) => {
            alert("Feedback Successfully Inserted")
            cleareFeilds();
            console.log(response.data.data);
        }).catch((err) => {
            console.log(err);
            alert('Please Enter Correct Password or Email')
          });
      }
      else
      {
          alert("Please SignIn")
      }
        
      };
    

    return(
        <div className="card">
            <h5 className="card-header">Feedback</h5>
            <div className="card-body">
            <form>
                        <div className='form-group col-md-4'>
                          
                            
                                <label htmlFor='feedback'>Feedback</label>
                                <textarea 
                                className='form-control' 
                                type='feedback' 
                                placeholder='Enter Feedback'
                                onChange={onChangeFeedback}
                                ></textarea>
                            
                        </div>
                        <div className='form-group col-md-4'>
                            <div className='col'>
                                <button
                                onClick={submitFeedback}
                                className='btn btn-success' 
                                type='button'>Submit</button>
                            </div>
                        </div>
                    </form>
            </div>
    </div>
    )
}

export default UserFeedback;