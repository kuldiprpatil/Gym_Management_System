import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { API_URL } from '../../../common/URL';

const DietPlan = () => {
    const [planID, setPlanID] = useState('')
    const [diet_name, setdiet_name] = useState('')
    const [morning, setmorning] = useState('')
    const [afternoon, setafternoon] = useState('')
    const [evening, setevening] = useState('')
    const [night, setnight] = useState('')
    const [day, setDay] = useState('')

    const [allplanlist, setAllPlanList] = useState([])
    const [dietdetail, setDietDetails] = useState([])




    const onChangediet_name = (e) => {
        const diet_name = e.target.value;
        setdiet_name(diet_name);
    };

    const onChangeDay = (e) => {
        const day = e.target.value;
        setDay(day);
    };
    const onChangeMorning = (e) => {
        const morning = e.target.value;
        setmorning(morning);
    };
    const onChangeAfternoon = (e) => {
        const afternoon = e.target.value;
        setafternoon(afternoon);
    };
    const onChangeEvening = (e) => {
        const evening = e.target.value;
        setevening(evening);
    };
    const onChangeNight = (e) => {
        const night = e.target.value;
        setnight(night);
    };


    const inputstyle = {
        color: 'black',
        background: 'transparent',
    }
    const linkstyle = {
        color: 'black',
        background: 'green',
    }

    useEffect(() => {
        axios.get(API_URL + "getAllDietItems")
            .then((response) => {
                console.log(response.data.data)
                setAllPlanList(response.data.data)

            })
    }, [])


    const cleareAll = (e) => {
        setPlanID("")
        setdiet_name("")
        setmorning("")
        setafternoon("")
        setevening("")
        setnight("")
    }

    const handleMemberINFO = () => {
        axios.post(API_URL + 'addDiet', {
            dietName: diet_name,
            day: day,
            morning: morning,
            afternoon: afternoon,
            evening: evening,
            night: night,
        })
            .then(
                cleareAll
            )
            .then((response) => {
                alert("Diet Plan Added")
                axios.get(API_URL + "getAllDietItems")
                    .then((response) => {
                        console.log(response.data.data)
                        setAllPlanList(response.data.data)
                    })

            })
    };

    const deleteDietPlan = (planID) => {
        axios.post(API_URL + 'deleteDiet', {
            id: planID
        })
            .then((response) => {
                alert("Diet Plan Deleted")
                axios.get(API_URL + "getAllDietItems")
                    .then((response) => {
                        console.log(response.data.data)
                        setAllPlanList(response.data.data)
                    })

            })
    }

    const setUpdateDietPlanID = (DietID) => {
        const ID = DietID
        setPlanID(ID)
    }

    const UpdateDietPlan = (UpdateplanID) => {
        const ID = UpdateplanID
        axios.post(API_URL + 'updateDiet', {
            id: ID,
            dietName: diet_name,
            day: day,
            morning: morning,
            afternoon: afternoon,
            evening: evening,
            night: night
        })
            .then((response) => {
                alert("Diet Plan Updated")
                axios.get(API_URL + "getAllDietItems")
                    .then((response) => {
                        console.log(response.data.data)
                        setAllPlanList(response.data.data)
                    })

            })
    }

    return (
        <div>
            <div className='header'>
                <h1>Diet Plans</h1>
            </div>
            <hr />
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Add Diet Plan
            </button>
            {/* <button type="button" class="btn btn-success" onClick={GetTrainers}>
            Show Trainer   
            </button> */}


            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            {/* <h5 class="modal-title" id="exampleModalLabel">ADD Diet</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button> */}
                        </div>
                        <div class="modal-body">
                            <div className='addmembersform'>
                                <form >
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <label htmlFor='membershipPlanName'>Diet Name</label>
                                            <select
                                                style={inputstyle}
                                                className='form-control form-control-sm'
                                                name='membershipPlanName'
                                                onChange={onChangediet_name}>
                                                <option value="null">--Select--</option>
                                                <option value='Overweight'>Overweight</option>
                                                <option value='Fit'>Fit</option>
                                                <option value='Underweight'>Underweight</option>
                                            </select>
                                        </div>
                                        <div className='col-md-4'>
                                            <label htmlFor='DietDay'>Day</label>
                                            <select
                                                id='DietDay'
                                                style={inputstyle}
                                                className='form-control form-control-sm'
                                                onChange={onChangeDay}>
                                                <option value="null">--Select--</option>
                                                <option value="Monday">Monday</option>
                                                <option value="Tuesday">Tuesday</option>
                                                <option value="Wednesday">Wednesday</option>
                                                <option value="Thursday">Thursday</option>
                                                <option value="Friday">Friday</option>
                                                <option value="Saturday">Saturday</option>
                                            </select>
                                        </div>
                                        <div className='col-md-4'>
                                            <label htmlFor='Morning'>Morning</label>
                                            <input
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='Morning'
                                                value={morning}
                                                onChange={onChangeMorning}></input>
                                        </div>
                                        <div className='col-md-4'>
                                            <label htmlFor='starthour'>Afternoon</label>
                                            <input
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='starthour'
                                                value={afternoon}
                                                onChange={onChangeAfternoon}></input>
                                        </div>
                                        <div className='col-md-4'>
                                            <label htmlFor='endhour'>Evening</label>
                                            <input
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='endhour'
                                                value={evening}
                                                onChange={onChangeEvening}></input>
                                        </div>
                                    </div>
                                    <div className='row'>

                                        <div className='col-md-4'>
                                            <label htmlFor='night'>Night</label>
                                            <input
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='night'
                                                value={night}
                                                onChange={onChangeNight}></input>
                                        </div>

                                    </div>

                                </form>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={handleMemberINFO}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>


            <div class="modal fade" id="exampleModalUpdate" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        {/* <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Update Diet</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div> */}
                        <div class="modal-body">
                            <div className='addmembersform'>
                                <form >
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <label htmlFor='membershipPlanName'>Diet Name</label>
                                            <select
                                                style={inputstyle}
                                                className='form-control form-control-sm'
                                                name='membershipPlanName'
                                                onChange={onChangediet_name}
                                                value={diet_name}>
                                                <option value="null">--Select--</option>
                                                <option value='Shrink'>Overweight</option>
                                                <option value='Fit'>Fit</option>
                                                <option value='bulk'>Underweight</option>
                                            </select>
                                        </div>

                                        <div className='col-md-4'>
                                            <label htmlFor='DietDay'>Day</label>
                                            <select
                                                id='DietDay'
                                                style={inputstyle}
                                                value={day}
                                                className='form-control form-control-sm'
                                                onChange={onChangeDay}>
                                                <option value="null">--Select--</option>
                                                <option value="Monday">Monday</option>
                                                <option value="Tuesday">Tuesday</option>
                                                <option value="Wednesday">Wednesday</option>
                                                <option value="Thursday">Thursday</option>
                                                <option value="Friday">Friday</option>
                                                <option value="Saturday">Saturday</option>
                                            </select>
                                        </div>
                                        <div className='col-md-4'>
                                            <label htmlFor='duration'>Morning</label>
                                            <input
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='duration'
                                                value={morning}
                                                onChange={onChangeMorning}></input>
                                        </div>
                                        <div className='col-md-4'>
                                            <label htmlFor='starthour'>Afternoon</label>
                                            <input
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='starthour'
                                                value={afternoon}
                                                onChange={onChangeAfternoon}></input>
                                        </div>
                                        <div className='col-md-4'>
                                            <label htmlFor='endhour'>Evening</label>
                                            <input
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='endhour'
                                                value={evening}
                                                onChange={onChangeEvening}></input>
                                        </div>
                                    </div>
                                    <div className='row'>

                                        <div className='col-md-4'>
                                            <label htmlFor='price'>Night</label>
                                            <input
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='picer'
                                                value={night}
                                                onChange={onChangeNight}></input>
                                        </div>

                                    </div>

                                </form>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={() => UpdateDietPlan(planID)}>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>


            <table className='table'>
                <thead className='thead-dark'>
                    <tr>
                        <th>Diet Name</th>
                        <th>Day</th>
                        <th>Morning</th>
                        <th>Afternoon</th>
                        <th>Evening</th>
                        <th>Nigth</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <React.Fragment>
                        {allplanlist ? allplanlist.map((val) => {

                            return (<tr key={val.id}>
                                <td>{val.dietName}</td>
                                <td>{val.day}</td>
                                <td>{val.morning}</td>
                                <td>{val.afternoon}</td>
                                <td>{val.evening}</td>
                                <td>{val.night}</td>
                                <td><button

                                    className='btn btn-outline-info'
                                    onClick={() => setUpdateDietPlanID(val.id)}
                                    data-toggle="modal" data-target="#exampleModalUpdate">Update</button></td>
                                <td><button
                                    className='btn btn-danger'
                                    onClick={() => deleteDietPlan(val.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg></button></td>
                            </tr>)
                        }) : <h5> No Data Found-*</h5>}
                    </React.Fragment>
                </tbody>
            </table>
        </div>
    )
}

export default DietPlan;