import React, { useEffect, useState } from 'react'
import Line from '../../Image/lines.png'
import dumbbell from '../../Image/dumbbell.png'
import TrainerOne from '../../Image/trainerOne.jpg'
import TrainerTwo from '../../Image/trainerTwo.jpg'
import TrainerThree from '../../Image/trainerThree.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { API_URL } from '../../common/URL'

const ChooseProgram = () => {
    
    const [alltrainerlist, setAllTrainerList] = useState([])

    useEffect(() => {
        axios.get(API_URL+"getAllTrainers")
        .then((response) => {
            console.log(response.data.data)
            setAllTrainerList(response.data.data)
            // setMemAge(response.data.data.tblmem.age)
        })
    }, [])

    return(
        <div className='trainercontainer'>
            <div className='trainercontainerheader'>
                <div>
                    <p className='headingtrainer'>CHOOSE <span>PROGRAMS</span></p>
                </div>
                <div>
                    <img src={Line}></img>
                </div>
                <div>
                    <p>Pain is weakness leaving the body.Some people like going to the public.
                    Believe you can do it and your body will find a way to make it happen.</p>
                </div>
            </div>
            
            <div className='row trainercard'>
            <div class="row text-center">
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <img src={dumbbell}/>
                        <h5 class="card-title">Basic Fitness</h5>
                        <p class="card-text">Challenges are what make life interesting. Overcoming them is what makes life meaningful.</p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                    <img src={dumbbell}/>
                        <h5 class="card-title">Advanced Muscle Course</h5>
                        <p class="card-text">Everybody wanna be a bodybuilder, but don’t nobody wanna lift no heavy-ass weights!!</p>
                        
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className='row trainercard'>
            <div class="row text-center">
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                    <img src={dumbbell}/>
                        <h5 class="card-title">New Gym Training</h5>
                        <p class="card-text">The best day to start exercising is today. Tomorrow can turn into weeks, months or years.</p>
                        
                    </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                    <img src={dumbbell}/>
                        <h5 class="card-title">Yoga Training</h5>
                        <p class="card-text">Yoga is essentially a spiritual discipline based on an extremely subtle science, which focuses on bringing harmony between mind and body.</p>
                        
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className='row trainercard'>
            <div class="row text-center">
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                    <img src={dumbbell}/>
                        <h5 class="card-title">Basic Muscle Course</h5>
                        <p class="card-text">You are born weak and die weak, what you are in between those two periods of time is up to you.</p>
                        
                    </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                    <img src={dumbbell}/>
                        <h5 class="card-title">Body Building Course</h5>
                        <p class="card-text">Being defeated is often a temporary condition. Giving up is what makes it permanent.</p>
                        
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseProgram;