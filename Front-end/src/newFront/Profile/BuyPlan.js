import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../common/URL'

const BuyPlan = () => {
    const [user_id, setIsUser] = useState('')
    const [userplans, setUserPlans] = useState([])
    useEffect(() => {
        setIsUser(localStorage.getItem("id"))
        const CurrentID = localStorage.getItem("id")
        console.log(CurrentID);
        axios.get(API_URL + "getAllPlans")
            .then((response) => {
                console.log(response.data.data)
                setUserPlans(response.data.data)
            })
    }, [])

    const BuyGymPlan = (BuyPlanID) => {
        const ID = BuyPlanID
        console.log("Plan Id:" + ID + " User ID:" + user_id)
        if (window.confirm("Are You Sure, Want To BUY This Plan")) {
            axios.post(API_URL + "addUserPlan", {
                planId: ID,
                userId: user_id
            })
                .then((response) => {
                    alert(response.data.data)
                    console.log(response.data.data)
                })
        }

    }

    return (
        <React.Fragment>
            {/* <div className='profilecard'>
                {userplans.map((val) => {
                    return <div key={val.plan_id} className="card profilecard1">
                    <div className="card-header">
                    <h4>Plan Info</h4>
                    </div>
                    <div className="card-body">
                        <div className='row'>
                            <div className='col'>
                                <label>Plan Name</label>
                                <p>{val.membershipPlanName}</p>
                                </div>

                                <div className='col'>
                                    <label>Duration</label>
                                    <p>{val.duration} days</p>
                                </div>

                                <div className='col'>
                                    <label>Price</label>
                                    <p>{val.price} ₹</p>
                                </div>

                                <div className='col'>
                                    <label>Trainer name</label>
                                    <p>{val.trainer_name}</p>
                                </div>
                        </div>
                    </div>
                    <div className="card-footer text-muted">
                        <button className='btn btn-outline-danger'
                        onClick={() => BuyGymPlan(val.plan_id)}>
                            BUY NOW <br/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                        </button>
                    </div>
                </div>
                })}
        </div> */}

            <h1>Browse Plans</h1>
            <hr />
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Plan Name</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Start</th>
                        <th scope="col">End</th>
                        <th scope="col">Price</th>
                        <th scope="col">Trainer Name</th>
                        <th scope="col">Buy Plan</th>
                    </tr>
                </thead>
                <tbody>
                    {userplans.map((val) => {
                        return <tr key={val.id}>
                            <td>{val.membershipPlanName}</td>
                            <td>{val.duration}</td>
                            <td>{val.startHour}</td>
                            <td>{val.endHour}</td>
                            <td>{val.price}</td>
                            <td>{val.trainerName}</td>
                            <td>
                                <button className='btn btn-outline-success'
                                    onClick={() => BuyGymPlan(val.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default BuyPlan;