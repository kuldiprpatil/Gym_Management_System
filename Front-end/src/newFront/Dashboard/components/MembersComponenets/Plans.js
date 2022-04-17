import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../../common/URL';

const Plans = () => {
    const [planID, setPlanID] = useState('')
    const [membershipPlanName, setMembershipPlanName] = useState('')
    const [duration, setDuration] = useState('')
    const [starthour, setStartHour] = useState('')
    const [endhour, setEndHour] = useState('')
    const [price, setPrice] = useState('')
    const [trainername, setTrainerName] = useState('')

    const [onbuttonclick, setOnButtonClick] = useState('')

    const onChangeMembershipPlanName = (e) => {
        const membershipPlanName = e.target.value;
        setMembershipPlanName(membershipPlanName);
    };
    const onChangeDuration = (e) => {
        const duration = e.target.value;
        setDuration(duration);
    };
    const onChangeStartHour = (e) => {
        const starthour = e.target.value;
        setStartHour(starthour);
    };
    const onChangeEndHour = (e) => {
        const endhour = e.target.value;
        setEndHour(endhour);
    };
    const onChangePrice = (e) => {
        const price = e.target.value;
        setPrice(price);
    };
    const onChangeTrainerName = (e) => {
        const trainername = e.target.value;
        setTrainerName(trainername);
    };

    const cleareAll = (e) => {
        setMembershipPlanName("")
        setDuration("")
        setStartHour("")
        setEndHour("")
        setPrice("")
        setTrainerName("")
    }

    const inputstyle = {
        color: 'black',
        background: 'transparent',
    }
    const linkstyle = {
        color: 'black',
        background: 'green',
    }


    const [allplanlist, setAllPlanList] = useState([])
    const [alltrainerlist, setAllTrainerList] = useState([])


    useEffect(() => {
        axios.get(API_URL + "getAllPlans")
            .then((response) => {
                console.log(response.data.data)
                setAllPlanList(response.data.data)
                axios.get(API_URL + "getAllTrainers")
                    .then((response) => {
                        console.log(response.data.data)
                        setAllTrainerList(response.data.data)
                    })
            })
    }, [])

    const handleMemberINFO = () => {
        axios.post(API_URL + 'createPlan', {
            membershipPlanName: membershipPlanName,
            duration: duration,
            startHour: starthour,
            endHour: endhour,
            price: price,
            trainerName: trainername
        }).then(
            cleareAll
        )
            .then((response) => {
                alert("Plan Added")
                axios.get(API_URL + "getAllPlans")
                    .then((response) => {
                        console.log(response.data.data)
                        setAllPlanList(response.data.data)
                    })

            })
    };

    const deleteDietPlan = (planID) => {
        axios.post(API_URL + 'deletePlan', {
            id: planID
        })
            .then((response) => {
                alert("Subcription Plan Deleted")
                axios.get(API_URL + "getAllPlans")
                    .then((response) => {
                        console.log(response.data.data)
                        setAllPlanList(response.data.data)
                    })

            })
    }

    const setplanupdateID = (planID) => {
        setPlanID(planID)
    }
    const handleUpdatePlan = () => {
        axios.post(API_URL + 'updatePlan', {
            id: planID,
            membershipPlanName: membershipPlanName,
            duration: duration,
            startHour: starthour,
            endHour: endhour,
            price: price,
            trainerName: trainername
        })
            .then((response) => {
                alert("Plan Updated")
                axios.get(API_URL + "getAllPlans")
                    .then((response) => {
                        console.log(response.data.data)
                        setAllPlanList(response.data.data)
                    })

            })


    };



    return (
        <div >
            <div className='header'>
                <h1>Subscription Plans</h1>
            </div>
            <hr />
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Add Plans
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div className='addmembersform'>
                                <form >
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <label htmlFor='membershipPlanName'>Plan Name</label>
                                            <input
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='membershipPlanName'
                                                value={membershipPlanName}
                                                onChange={onChangeMembershipPlanName}></input>
                                        </div>
                                        <div className='col-md-4'>
                                            <label htmlFor='duration'>Duration</label>
                                            <input
                                                style={inputstyle}
                                                type='number'
                                                className='form-control form-control-sm'
                                                name='duration'
                                                value={duration}
                                                onChange={onChangeDuration}></input>
                                        </div>
                                        <div className='col-md-4'>
                                            <label htmlFor='starthour'>Start Hour</label>
                                            <input
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='starthour'
                                                placeholder=' 11 AM '
                                                value={starthour}
                                                onChange={onChangeStartHour}></input>
                                        </div>
                                        <div className='col-md-4'>
                                            <label htmlFor='endhour'>End Hour</label>
                                            <input
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='endhour'
                                                value={endhour}
                                                onChange={onChangeEndHour}></input>
                                        </div>
                                    </div>
                                    <div className='row'>

                                        <div className='col-md-4'>
                                            <label htmlFor='price'>Price</label>
                                            <input
                                                style={inputstyle}
                                                type='number'
                                                className='form-control form-control-sm'
                                                name='picer'
                                                value={price}
                                                onChange={onChangePrice}></input>
                                        </div>
                                        <div className='col-md-4'>
                                            <label htmlFor='trainername'>Trainer Name</label>
                                            <select
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='trainername'
                                                onClick={onChangeTrainerName}>
                                                {alltrainerlist.map((val) => {
                                                    return (<option value={val.trainerName}>{val.trainerName}</option>)
                                                })}
                                            </select>
                                        </div>

                                    </div>

                                </form>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={handleMemberINFO}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------------Plan Update----------------- */}

            <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div className='addmembersform'>
                                <form >
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <label htmlFor='membershipPlanName'>Plan Name</label>
                                            <input
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='membershipPlanName'
                                                value={membershipPlanName}
                                                onChange={onChangeMembershipPlanName}></input>
                                        </div>
                                        <div className='col-md-4'>
                                            <label htmlFor='duration'>Duration</label>
                                            <input
                                                style={inputstyle}
                                                type='number'
                                                className='form-control form-control-sm'
                                                name='duration'
                                                value={duration}
                                                onChange={onChangeDuration}></input>
                                        </div>
                                        <div className='col-md-4'>
                                            <label htmlFor='starthour'>Start Hour</label>
                                            <input
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='starthour'
                                                placeholder=' 11 AM '
                                                value={starthour}
                                                onChange={onChangeStartHour}></input>
                                        </div>
                                        <div className='col-md-4'>
                                            <label htmlFor='endhour'>End Hour</label>
                                            <input
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='endhour'
                                                value={endhour}
                                                onChange={onChangeEndHour}></input>
                                        </div>
                                    </div>
                                    <div className='row'>

                                        <div className='col-md-4'>
                                            <label htmlFor='price'>Price</label>
                                            <input
                                                style={inputstyle}
                                                type='number'
                                                className='form-control form-control-sm'
                                                name='picer'
                                                value={price}
                                                onChange={onChangePrice}></input>
                                        </div>
                                        <div className='col-md-4'>
                                            <label htmlFor='trainername'>Trainer Name</label>
                                            <select
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='trainername'
                                                onClick={onChangeTrainerName}>
                                                {alltrainerlist.map((val) => {
                                                    return (<option value={val.trainerName}>{val.trainerName}</option>)
                                                })}
                                            </select>
                                        </div>

                                    </div>

                                </form>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={handleUpdatePlan}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>




            <table className='table'>
                <thead className='thead-dark'>
                    <tr>
                        <th>Plan Name</th>
                        <th>Duration</th>
                        <th>Start Hour</th>
                        <th>End Hour</th>
                        <th>Price</th>
                        <th>Trainer Name</th>
                        <th>Update</th>
                        <th>Delete Plan</th>
                    </tr>
                </thead>
                <tbody>
                    <React.Fragment>
                        {allplanlist ? allplanlist.map((val) => {

                            return (<tr key={val.id}>
                                <td>{val.membershipPlanName}</td>
                                <td>{val.duration}</td>
                                <td>{val.startHour}</td>
                                <td>{val.endHour}</td>
                                <td>{val.price}</td>
                                <td>{val.trainerName}</td>
                                <td>
                                    <button onClick={() => setplanupdateID(val.id)} type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#exampleModal1">
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => deleteDietPlan(val.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg></button>
                                </td>

                            </tr>)
                        }) : <h5> No Data Found-*</h5>}
                    </React.Fragment>
                </tbody>
            </table>
        </div >
    )
}

export default Plans;