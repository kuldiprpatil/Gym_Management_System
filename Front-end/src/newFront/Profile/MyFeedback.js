import React, { useEffect, useState } from "react"
import Axios from 'axios'
import axios from "axios"

import { API_URL } from "../common/URL"


const MyFeedback = () => {

    let i = 1


    const [feedback, setFeedback] = useState('')

    const [isUser, setIsUser] = useState('')
    const [isUserID, setIsUserID] = useState('')


    const onChangeFeedback = (e) => {
        const feedback = e.target.value;
        setFeedback(feedback);
    };

    const inputstyle = {
        color: 'black',
        background: 'transparent',
    }
    const linkstyle = {
        color: 'black',
        background: 'green',
    }


    const [allfeedbacklist, setAllFeedbackList] = useState([])

    var ID = localStorage.getItem('id')

    useEffect(() => {
        setIsUser(localStorage.getItem("name"))
        setIsUserID(localStorage.getItem("id"))
        Axios.get(`${API_URL}getUserFeedbacks/${ID}`)
            .then((response) => {
                console.log(response.data.data)
                setAllFeedbackList(response.data.data)
            })
    }, [])

    // const submitFeedback = () => {

    //     if (isUser) {
    //         Axios.post(API_URL + 'postfeedback', {
    //             userId: isUserID,
    //             feedback: feedback
    //         })
    //         Axios.get(`${API_URL}getUserFeedbacks/${ID}`)
    //             .then((response) => {
    //                 alert('Feedback Submited')
    //                 console.log(response.data.data)
    //                 setAllFeedbackList(response.data.data)
    //             })
    //     }
    //     else {
    //         alert("Please SignIn")
    //     }

    // };
    const submitFeedback = () => {

        if (isUser) {
            Axios.post(API_URL + 'postfeedback', {
                userId: isUserID,
                feedback: feedback
            }).then((response) => {
                if (response.data.status == 'success') {
                    alert('Feedback Submited')
                    Axios.get(`${API_URL}getUserFeedbacks/${ID}`)
                        .then((response) => {
                            console.log(response.data.data)
                            setAllFeedbackList(response.data.data)
                        })
                }
            })

        }
        else {
            alert("Please SignIn")
        }

    };

    const deletefeedback = (feed_id) => {

        axios.post(API_URL + 'deletefeedback', {
            id: feed_id
        })
            .then((response) => {
                alert("Delete Item Successfully")
                axios.get(`${API_URL}getUserFeedbacks/${ID}`)
                    .then((response) => {
                        console.log(response.data.data)
                        setAllFeedbackList(response.data.data)
                    })
            })


    }


    return (
        <div>
            <h1>Your All Feedback</h1>
            <hr />

            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Add New Feedback
            </button>
            {/* <button type="button" class="btn btn-success" onClick={GetTrainers}>
            Show Trainer   
            </button> */}


            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">ADD Feedback</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className='addmembersform'>
                                <form >
                                    <div className='row'>



                                        <div className='col-md-4'>
                                            <label htmlFor='feedback'>Feedback</label>
                                            <textarea
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='feedback'
                                                value={feedback}
                                                onChange={onChangeFeedback}></textarea>
                                        </div>


                                    </div>


                                </form>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={submitFeedback}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <table className='table'>
                <thead>
                    <tr className='thead-dark'>
                        <th>FeedID</th>
                        <th>Name</th>
                        <th>Feedback</th>
                        <th>Time</th>
                        <th>Response</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <React.Fragment>
                        {allfeedbacklist ? allfeedbacklist.map((val) => {
                            return <tr key={val.id}>
                                <td>{val.id}</td>
                                <td>{val.completeName}</td>
                                <td>{val.feedback}</td>
                                <td>{val.createdTimestamp}</td>
                                <td>{val.response}</td>
                                <td>
                                    <button onClick={() => deletefeedback(val.id)} className='btn btn-danger'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        }) : <h5> No Data Found-*</h5>}
                    </React.Fragment>
                </tbody>
            </table>
        </div>
    )
}



export default MyFeedback;