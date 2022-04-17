import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { history } from '../../../helpers/history';
import { API_URL } from '../../common/URL';
import { NEW_URL } from '../../common/URL';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import './Style.css'

// const API_URL = "http://localhost:8080/";
// const NEW_URL="http://cdac-project-folder-1.s3-website.us-east-2.amazonaws.com/";

const AdminProfile = () => {

    const [user_id, setIsUser] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [img, setIMG] = useState(undefined)
    const [updateinfobox, setUpdateInfoBox] = useState('')

    const [profiledetail, setProfileDetails] = useState([])

    const [thumbnail, setThumbnail] = useState(undefined)

    //const [successful, setSuccessful] = useState(false);

    const onChangeIMG = (event) => {
        const file = event.target.files[0]
        console.log(file);
        setThumbnail(file)
    }

    var id = localStorage.getItem("id");
    useEffect(() => {
        //setIsUser(localStorage.getItem("id"))
        //var id = localStorage.getItem("id");
        axios.get(`${API_URL}getAllInfo/${id}`)
            .then((response) => {
                console.log(response.data.data)

                setProfileDetails(response.data.data)

                setIsUser(response.data.data.id)
                setThumbnail(response.data.data.avatar)
                setAddress(response.data.data.address)
                setAge(response.data.data.age)
                setContact(response.data.data.contact)
                setGender(response.data.data.gender)
                setHeight(response.data.data.height)
                setWeight(response.data.data.weight)
            })
    }, [])

    const onChangecomplete_address = (e) => {
        const address = e.target.value;
        setAddress(address);
    };

    const onChangecomplete_contact = (e) => {
        const contact = e.target.value;
        setContact(contact);
    };

    const onChangecomplete_age = (e) => {
        const age = e.target.value;
        setAge(age);
    };

    const onChangecomplete_gender = (e) => {
        const gender = e.target.value;
        setGender(gender);
    };

    const onChangecomplete_height = (e) => {
        const height = e.target.value;
        setHeight(height);
    };

    const onChangecomplete_weight = (e) => {
        const weight = e.target.value;
        setWeight(weight);
    };


    const Edit = () => {
        axios.post(API_URL + 'updateBasicInfo', {
            id: id,
            address: address,
            age: age,
            height: height,
            weight: weight,
            contact: contact,
            gender: gender
        })
            .then((response) => {

                if (response.data.status == 'success') {
                    alert("Data Updated")
                    setUpdateInfoBox('')
                    //window.location.reload();
                    axios.get(`${API_URL}getAllInfo/${id}`)
                        .then((response) => {
                            console.log(response.data.data)

                            setProfileDetails(response.data.data)

                            setIsUser(response.data.data.id)
                            setThumbnail(response.data.data.avatar)
                            setAddress(response.data.data.address)
                            setAge(response.data.data.age)
                            setContact(response.data.data.contact)
                            setGender(response.data.data.gender)
                            setHeight(response.data.data.height)
                            setWeight(response.data.data.weight)
                        })
                }
                else {
                    alert(response.data.status)
                }

            })

    }
    const UploadMemberImage = () => {
        const body = new FormData()
        body.append('thumbnail', thumbnail)
        body.append('id', user_id)

        console.log(body);

        axios.post(API_URL + 'addUserImage', body)
            .then((response) => {
                alert("Image Added")
                setIMG(thumbnail)
                axios.get(`${API_URL}getAllInfo/${id}`)
                    .then((response) => {
                        console.log(response.data.data)

                        setProfileDetails(response.data.data)

                        setIMG(response.data.data.avatar)
                        setAddress(response.data.data.address)
                        setAge(response.data.data.age)
                        setContact(response.data.data.contact)
                        setGender(response.data.data.gender)
                        setHeight(response.data.data.height)
                        setWeight(response.data.data.weight)
                        setThumbnail(response.data.data.avatar)
                    })

            })
    };


    const updateInfo = () => {
        setUpdateInfoBox('true')
    }


    const inputstyle = {
        color: 'black',
        background: 'transparent',
    }




    return (
        <React.Fragment>
            <div className='profilecard'>
                <div class="modal fade" id="exampleModalUpload" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">UPLOAD MEMBER PHOTO</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
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
                                <button type="button" class="btn btn-primary" onClick={UploadMemberImage}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    {profiledetail.avatar ? <img src={NEW_URL + profiledetail.avatar} className="rounded-circle" alt="Profile Photo" /> : <img src={"https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?b=1&k=20&m=1300845620&s=612x612&w=0&h=AGv0X8A5n8D_2iETctrUbpJqonP-Mvb3RrWkWJqKZfE="} className="rounded-circle" alt="Deault Image" />}
                    <br />

                    <br />
                    <button
                        className='btn btn-success'
                        data-toggle="modal" data-target="#exampleModalUpload">Upload Image</button>
                </div>
                <div className='profilecardcontainer'>
                    <div className="card profilecard1">
                        <div className="card-header">
                            <h4>Basic Info</h4>
                        </div>
                        <div className="card-body">
                            <div className='row'>
                                <div className='col'>
                                    <label><b>Name</b></label>
                                    <p>{profiledetail.completeName}</p>
                                </div>

                                <div className='col'>
                                    <label><b>Email</b></label>
                                    <p>{profiledetail.email}</p>
                                </div>

                                <div className='col'>
                                    <label><b>Joinig Date</b></label>
                                    <p>{profiledetail.joiningDate}</p>
                                </div>

                                {/* <div className='col'>
                                    <label>End Date</label>
                                    <p>{profiledetail.end_of_membership_date}</p>
                                </div> */}
                            </div>
                        </div>
                        <div className="card-footer text-muted">
                        <b>Designation</b> : {profiledetail.role}
                        </div>
                    </div>
                    <div className='card profilecard2'>
                        <div className='card-header'>
                            <h4>Additional Info</h4>
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                {updateinfobox ? <div className='row'>
                                    <div className='col'>
                                        <label><b>Address</b></label>
                                        <textarea
                                            type='text'
                                            value={address}
                                            onChange={onChangecomplete_address}
                                        ></textarea>
                                    </div>

                                    <div className='col'>
                                        <label><b>Age</b></label>
                                        <input
                                            type='number'
                                            value={age}
                                            onChange={onChangecomplete_age}
                                        ></input>
                                    </div>

                                    <div className='col'>
                                        <label><b>Contact</b></label>
                                        <input
                                            type='number'
                                            value={contact}
                                            onChange={onChangecomplete_contact}
                                        ></input>
                                    </div>

                                    <div className='col'>
                                        <label htmlFor='gender'><b>Gender</b></label>
                                        <select
                                            id='gender'
                                            type='text'
                                            className='form-control form-control-sm'
                                            onChange={onChangecomplete_gender}>
                                            <option selected value='0'>Male</option>
                                            <option value='1'>Female</option>
                                        </select>
                                    </div>

                                    <div className='col'>
                                        <label><b>Height</b></label>
                                        <input
                                            type='number'
                                            value={height}
                                            onChange={onChangecomplete_height}
                                        ></input>
                                    </div>

                                    <div className='col'>
                                        <label><b>Weight</b></label>
                                        <input
                                            type='number'
                                            value={weight}
                                            onChange={onChangecomplete_weight}
                                        ></input>
                                    </div>
                                </div> : <div className='row'>
                                    <div className='col'>
                                        <label><b>Address</b></label>
                                        <p>{profiledetail.address}</p>
                                    </div>

                                    <div className='col'>
                                        <label><b>Age</b></label>
                                        <p>{profiledetail.age}</p>
                                    </div>

                                    <div className='col'>
                                        <label><b>Height</b></label>
                                        <p>{profiledetail.height}</p>
                                    </div>

                                    <div className='col'>
                                        <label><b>Weight</b></label>
                                        <p>{profiledetail.weight}</p>
                                    </div>

                                    <div className='col'>
                                        <label><b>Gender</b></label>
                                        <p>{profiledetail.gender == 1 ? "Female" : "Male"}</p>
                                    </div>
                                </div>}
                            </div>
                        </div>
                        <div className="card-footer text-muted">
                            {updateinfobox ? <button className='btn btn-success' onClick={Edit}>Submit</button>
                                : <button className='btn btn-success' onClick={updateInfo}>UpdateInfo</button>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AdminProfile;