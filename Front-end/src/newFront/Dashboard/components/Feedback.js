import React, { useEffect, useState } from "react"
import Axios from 'axios'
import axios from "axios"
import { API_URL } from "../../common/URL"

import FeedbackResponse from "./FeedbackResponse"


const GetFeedback = () => {
    const inputstyle = {
        color: 'black',
        background: 'transparent',
    }
    const linkstyle = {
        color: 'black',
        background: 'green',
    }


    const [allfeedbacklist, setAllFeedbackList] = useState([])

    useEffect(() => {
        Axios.get(API_URL + "getAllfeedbacks")
            .then((response) => {
                console.log(response.data.data)
                setAllFeedbackList(response.data.data)
            })
    }, [])


    const deletefeedback = (feed_id) => {

        axios.post(API_URL + 'deletefeedback', {
            id: feed_id
        })
            .then((response) => {
                alert("Delete Item Successfully")
                axios.get(API_URL + "getAllfeedbacks")
                    .then((response) => {
                        console.log(response.data.data)
                        setAllFeedbackList(response.data.data)
                    })
            })


    }


    return (
        <div>
            <div className="header">
                <h1>Feedback</h1>
            </div>
            <hr />

            <table className='table'>
                <thead className='thead-dark'>
                    <tr>
                        <th>FeedID</th>
                        <th>Name</th>
                        <th>Feedback</th>
                        <th>Time</th>
                        <th>Respond</th>
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
                                <td>{val.response == "Thank you for your feedback,admin will responed you soon !!!" ? <FeedbackResponse feedID={val.id}></FeedbackResponse> : val.response}</td>
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



export default GetFeedback;