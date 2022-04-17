import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { API_URL } from '../common/URL';

const EndDate = ({planID,duration}) => {
    var validation = duration
    var PlanID =  planID
    var UserID = localStorage.getItem("id")

    const [userplansGET, setUserPlansGET] = useState([])
    const [newDate,setNewDate]=useState('')
    useEffect(() => {
        axios.post(API_URL+"endDate",{
            user_id:UserID,
            plan_id:PlanID
        })
            .then((response) => {
                console.log(response.data.data)
                setUserPlansGET(response.data.data)
            })
    }, [])
       
    return(
        <span>{userplansGET.end_date}</span>
    )
}
export default EndDate