import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { API_URL } from '../common/URL';

const EndDate = ({planID,duration}) => {
    var validation = duration
    var PlanID =  planID
    var UserID = localStorage.getItem("id")

    const [userplansGET, setUserPlansGET] = useState([])
    const [newDate,setNewDate]=useState('')

    console.log("User ID = " + UserID);
    console.log("Plan ID = " + PlanID);
    useEffect(() => {

        axios.post(API_URL+"endDate",{
            userId:UserID,
            planId:PlanID
        })
            .then((response) => {
                console.log(response.data.data)
                setUserPlansGET(response.data.data)
                //setNewDate(response.data.data)
            })
    }, [])
       
    return(
        <span>{userplansGET.subscriptionDate}</span>
    )
}
export default EndDate