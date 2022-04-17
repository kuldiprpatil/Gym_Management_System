import React, { useState } from "react"


const Addmember = () => {

  
  //const checkBtn = useRef();

    const [memberID,setMemberID] = useState('')
    const [age,setAge] = useState('')
    const [height,setHeight] = useState('')
    const [weight,setWeight] = useState('')
    const [gender,setGender] = useState('')
    const [joindate,setJoinDate] = useState('')
    const [validedate,setValidDate] = useState('')
    //const [successful, setSuccessful] = useState(false);

    

    const onChangeMemberID = (e) => {
        const memberID = e.target.value;
        setMemberID(memberID);
      };
    const onChangeAge = (e) => {
        const age = e.target.value;
        setAge(age);
      };
    const onChangeHeight = (e) => {
        const height = e.target.value;
        setHeight(height);
      };
    const onChangeWeight = (e) => {
        const weight = e.target.value;
        setWeight(weight);
      };
    const onChangeGender = (e) => {
        const gender = e.target.value;
        setGender(gender);
      };
    const onChangeJoinDate = (e) => {
        const joindate = e.target.value;
        setJoinDate(joindate);
      };
    const onChangeValidDate = (e) => {
        const validedate = e.target.value;
        setValidDate(validedate);
      };

    
    const cleareAll = (e) => {
      setMemberID("")
      setAge("")
      setGender("")
      setHeight("")
      setWeight("")
      setJoinDate("")
      setValidDate("")
    }

      const handleMemberINFO = () => {
        
      };

      

    const inputstyle = {
        color:'black',
        background: 'transparent',
    }


    return(
    <div className='addmembersform'>
        <form onSubmit={handleMemberINFO}>
            <div className='row'>
                <div className='col-md-4'>
                    <label htmlFor='memberID'>Mamber ID</label>
                    <input 
                    style = {inputstyle} 
                    type='text' 
                    className='form-control form-control-sm'
                    name='memberID'
                    value={memberID}
                    onChange={onChangeMemberID}></input>
                </div>
                <div className='col-md-2'>
                    <label htmlFor='age'>Age</label>
                    <input 
                    style = {inputstyle} 
                    type='number' 
                    className='form-control form-control-sm'
                    name='age'
                    value={age}
                    onChange={onChangeAge}></input>
                </div>
                <div className='col-md-2'>
                    <label htmlFor='height'>Height</label>
                    <input 
                    style = {inputstyle} 
                    type='number' 
                    className='form-control form-control-sm'
                    name='height'
                    value={height}
                    onChange={onChangeHeight}></input>
                </div>
                <div className='col-md-2'>
                    <label htmlFor='weight'>Weight</label>
                    <input 
                    style = {inputstyle} 
                    type='number' 
                    className='form-control form-control-sm'
                    name='weight'
                    value={weight}
                    onChange={onChangeWeight}></input>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <label htmlFor='gender'>Gender</label>
                    <select 
                    id='gender' 
                    style = {inputstyle} 
                    type='text' 
                    className='form-control form-control-sm'
                    onChange={onChangeGender}>
                        <option selected value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='other'>Other</option>
                    </select>
                </div>
                <div className='col-md-2'>
                    <label htmlFor='joindate'>Join Date</label>
                    <input 
                    style = {inputstyle} 
                    type='date' 
                    className='form-control form-control-sm'
                    name='joindate'
                    value={joindate}
                    onChange={onChangeJoinDate}></input>
                </div>
                <div className='col-md-2'>
                    <label htmlFor='validedate'>Valide Date</label>
                    <input 
                    style = {inputstyle} 
                    type='date' 
                    className='form-control form-control-sm'
                    name='validedate'
                    value={validedate}
                    onChange={onChangeValidDate}></input>
                </div>
            </div>
                <button className='btn btn-success'>Submit</button>
        </form>
    </div>
    )
}

export default Addmember;