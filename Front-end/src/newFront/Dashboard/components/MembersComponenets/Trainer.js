import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../../common/URL';
import './Css/trainer.css'

const Trainer = () => {
    const [trainerID, setTrainerID] = useState('')
    const [trainername, setTrainerName] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState('')
    const [salary, setSalary] = useState('')
    const [joindate, setJoinDate] = useState('')
    const [thumbnail, setThumbnail] = useState(undefined)

    const onChangeIMG = (event) => {
        const file = event.target.files[0]
        setThumbnail(file)
    }

    const onChangeSetID = (TrainerID) => {
        const ID = TrainerID
        console.log("Trainer ID For UPLOAD" + ID);
        setTrainerID(ID)
    }

    const onChangeName = (e) => {
        const trainername = e.target.value;
        setTrainerName(trainername);
    };
    const onChangeConatact = (e) => {
        const contact = e.target.value;
        setContact(contact);
    };
    const onChangeAddress = (e) => {
        const address = e.target.value;
        setAddress(address);
    };
    const onChangeSalary = (e) => {
        const salary = e.target.value;
        setSalary(salary);
    };
    const onChangeJoinDate = (e) => {
        const joindate = e.target.value;
        setJoinDate(joindate);
    };

    const cleareAll = (e) => {
        setTrainerID("")
        setTrainerName("")
        setContact("")
        setAddress("")
        setSalary("")
        setJoinDate("")
    }

    const inputstyle = {
        color: 'black',
        background: 'transparent',
    }
    const linkstyle = {
        color: 'black',
        background: 'green',
    }


    const [alltrainerlist, setAllTrainerList] = useState([])


    useEffect(() => {
        axios.get(API_URL + "getAllTrainers")
            .then((response) => {
                console.log(response.data.data)
                setAllTrainerList(response.data.data)
            })
    }, [])


    const deletemember = (deleteMemberID) => {
        const DeleteID = deleteMemberID
        axios.post(API_URL + 'deleteTrainer', {
            id: DeleteID
        })
            .then((response) => {
                alert("Trainer Deleted")
                axios.get(API_URL + "getAllTrainers")
                    .then((response) => {
                        console.log(response.data.data)
                        setAllTrainerList(response.data.data)
                    })

            })
    }

    const handleMemberINFO = () => {

        axios.post(API_URL + 'addTrainer', {
            trainerName: trainername,
            contact: contact,
            address: address,
            salary: salary,
            joinDate: joindate
        })
            .then(
                cleareAll
            )
            .then((response) => {
                alert("Trainer Added")
                axios.get(API_URL + "getAllTrainers")
                    .then((response) => {
                        console.log(response.data.data)
                        setAllTrainerList(response.data.data)
                    })

            })
    };

    const UploadTrainerImage = () => {
        const body = new FormData()
        body.append('thumbnail', thumbnail)
        body.append('id', trainerID)

        console.log(body);

        axios.post(API_URL + 'addTrainerImage', body)
            .then((response) => {
                alert("Image Added")
                axios.get(API_URL + "getAllTrainers")
                    .then((response) => {
                        console.log(response.data.data)
                        setAllTrainerList(response.data.data)
                    })

            })
    };



    return (
        <div>
            <div className='header'>
                <h1 >Trainer's</h1>
            </div>
            <hr />
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Add Trainer
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        {/* <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">ADD TRAINER</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div> */}
                        <div class="modal-body">
                            <div className='addmembersform'>
                                <form >
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <label htmlFor='trainername'>Trainer Name</label>
                                            <input
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='Trainer_Name'
                                                value={trainername}
                                                onChange={onChangeName}></input>
                                        </div>
                                        <div className='col-md-4'>
                                            <label htmlFor='contact'>Contact</label>
                                            <input
                                                style={inputstyle}
                                                type='number'
                                                className='form-control form-control-sm'
                                                name='contact'
                                                value={contact}
                                                onChange={onChangeConatact}></input>
                                        </div>
                                        <div className='col-md-4'>
                                            <label htmlFor='address'>Address</label>
                                            <textarea
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='address'
                                                value={address}
                                                onChange={onChangeAddress}></textarea>
                                        </div>
                                        <div className='col-md-4'>
                                            <label htmlFor='salary'>Salary</label>
                                            <input
                                                style={inputstyle}
                                                type='number'
                                                className='form-control form-control-sm'
                                                name='salary'
                                                value={salary}
                                                onChange={onChangeSalary}></input>
                                        </div>
                                    </div>
                                    <div className='row'>

                                        <div className='col-md-4'>
                                            <label htmlFor='joindate'>Join Date</label>
                                            <input
                                                style={inputstyle}
                                                type='date'
                                                className='form-control form-control-sm'
                                                name='joindate'
                                                value={joindate}
                                                onChange={onChangeJoinDate}></input>
                                        </div>


                                    </div>

                                </form>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={handleMemberINFO}>Submit </button>
                        </div>
                    </div>
                </div>
            </div>


            <div class="modal fade" id="exampleModalUpload" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        {/* <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">UPLOAD TRAINER PHOTO</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div> */}
                        <div class="modal-body">
                            <div className='addmembersform'>
                                <form >
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <label htmlFor='thumbnail'>Profile Image</label>
                                            <input
                                                style={inputstyle}
                                                type='file'
                                                accept='image/*'
                                                className='form-control form-control-sm'
                                                name='thumbnail'
                                                onChange={onChangeIMG}></input>
                                        </div>

                                    </div>

                                </form>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={UploadTrainerImage}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>


            <table className='table'>
                <thead className='thead-dark'>
                    <tr>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Address</th>
                        <th>Salary</th>
                        <th>Join Date</th>
                        <th>Upload Photo</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <React.Fragment>
                        {alltrainerlist ? alltrainerlist.map((val) => {

                            return (<tr key={val.tid}>
                                <td>{val.trainerName}</td>
                                <td>{val.contact}</td>
                                <td>{val.address}</td>
                                <td>{val.salary}</td>
                                <td>{val.joinDate}</td>
                                <td>{val.avatar ? <button className='btn btn-outline-success'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                                    </svg>
                                </button> :
                                    <button
                                        onClick={() => onChangeSetID(val.id)} className='btn btn-outline-info'
                                        data-toggle="modal" data-target="#exampleModalUpload">Upload IMG
                                    </button>}</td>
                                <td>

                                    {/* <Link className='btn btn-success' to={{pathname:"/dashboard/dashboard/updatemember",id:val.member_id}}>Update</Link> */}

                                    <button onClick={() => deletemember(val.id)} className='btn btn-danger'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>)
                        }) : <h5> No Data Found-*</h5>}
                    </React.Fragment>
                </tbody>
            </table>
        </div>
    )
}

export default Trainer;