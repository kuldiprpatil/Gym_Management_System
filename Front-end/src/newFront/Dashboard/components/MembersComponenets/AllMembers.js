import React, { useEffect, useState } from "react"
import Axios from 'axios'
import { useRef } from "react"
import Userplans from "./Userplans";
import { API_URL } from "../../../common/URL";
import { NEW_URL } from "../../../common/URL";

import './Css/allMembers.css'

const AllMeembers = () => {

  //const form = useRef();

  const inputstyle = {
    color: 'black',
    background: 'transparent',
  }
  const linkstyle = {
    color: 'black',
    background: 'green',
  }

  const [allmembersList, setAllMemebersList] = useState([])

  useEffect(() => {
    Axios.get(API_URL + "getallusers")
      .then((response) => {
        console.log(response.data.data)
        setAllMemebersList(response.data.data)

      })
  }, [])

  const deletemember = (deleteMemberID) => {

    if (window.confirm("Delete the item?")) {
      Axios.post(API_URL + 'deleteuser', {
        id: deleteMemberID
      })
        .then((response) => {
          alert("Deleted Member Successfully")

          Axios.get(API_URL + "getallusers")
            .then((response) => {
              console.log(response.data.data)
              setAllMemebersList(response.data.data)
            })
        })
    }
  }

  const Updaterolemember = (updateMemberID) => {

    if (window.confirm(`Are you Shure to Update User role with Userid ${updateMemberID} ?`)) {
      Axios.post(API_URL + "updateUserRole/", { id: updateMemberID })
        .then((response) => {
          alert("Role Updated Successully")

          Axios.get(API_URL + "getallusers")
            .then((response) => {
              console.log(response.data.data)
              setAllMemebersList(response.data.data)
            })
        })
    }
  }


  return (
    <div >
      <div className="header">
        <h1 >Members Management</h1>
      </div>
      <div className="counter">Total Memberber : {allmembersList.length} </div>
      <hr />
      <div>
        {allmembersList.map((member) => {
          return (

            <div className="col" >
              <div className="row">
                <div> {member.avatar ? <img src={NEW_URL + member.avatar} className="rounded-circle" alt="Profile Photo" /> : <img src={"https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?b=1&k=20&m=1300845620&s=612x612&w=0&h=AGv0X8A5n8D_2iETctrUbpJqonP-Mvb3RrWkWJqKZfE="} className="rounded-circle" alt="Deault Image" />}</div>
                <div className="row">
                  <div className="col">
                    <div>  <strong>UserId :</strong><label>{member.id}   </label>  </div>
                    <div >  <strong>UserName : </strong><label>{member.completeName}</label> </div>
                    <div >  <strong>Email : </strong><label>{member.email}</label> </div>
                    <div >  <strong>Contact : </strong><label>{member.contact ? member.contact : <p>Not Available</p>}</label> </div>
                    <div >  <strong>Role : </strong><label>{member.role === "admin" ? <label className='text-danger'>{member.role}</label> : <label>{member.role}</label>}</label> </div>
                  </div>
                  <div className="col">
                    <div>  <strong>Registration Date </strong><label>{member.joiningDate}   </label>  </div>
                    <div>  <strong>Age :</strong><label>{member.age}   </label>  </div>
                    <div >  <strong>Height : </strong><label>{member.height}</label> </div>
                    <div >  <strong>Weight : </strong><label>{member.weight}</label> </div>
                  </div>
                  <div className="col">
                    {
                      member.planList.length === 0 ? <div><strong>Plans Subscribed</strong><h6>No Plan Subscribed</h6></div> : <div><strong>Plans Subscribed</strong><Userplans planList={member.planList}></Userplans></div>
                    }
                  </div>
                  <div className="col">
                    <div>  <button className="btn btn-danger" onClick={() => { deletemember(member.id) }}>Delete</button></div>

                    <div ><br></br> </div>
                    <div > <button className=" btn btn-primary" onClick={() => { Updaterolemember(member.id) }}>Pramot As Admin</button>  </div>
                  </div>
                </div>

              </div>
              <hr></hr>
            </div>
          )

        })}
      </div>

    </div>
  )

}

export default AllMeembers;