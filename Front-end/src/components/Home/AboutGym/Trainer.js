import React, { useEffect, useState } from 'react'
import Line from '../../Image/lines.png'
import TrainerOne from '../../Image/trainerOne.jpg'
import TrainerTwo from '../../Image/trainerTwo.jpg'
import TrainerThree from '../../Image/trainerThree.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { API_URL } from '../../common/URL'
import { NEW_URL } from '../../common/URL'
const Trainer = () => {
    
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
                    <p className='headingtrainer'>EXPERT <span>TRAINERS</span></p>
                </div>
                <div>
                    <img src={Line}></img>
                </div>
                <div>
                    <p>Don't Disturb me. When I am busy in a workout.</p>
                </div>
            </div>
            
            <div className='row trainercard'>
            {alltrainerlist.map((val) => {
                return(<div key={val.trainer_id} className='trainercardinner'>
                
                            <div className="cardIMGwraper">
                                <img className="card-img-top cardIMG" 
                                src={NEW_URL+val.avatar} 
                                alt="Card image cap" />
                            </div>
                            <div className="card-body">
                                <div><b>Strength Trainer</b></div>
                                <div><h3>{val.trainer_name}</h3></div>
                                <div><h5>{val.contact}</h5></div>
                                <div>
                                    <p> Bitters cliche tattooed 8-bit distillery mustache. 
                                        Keytar succulents gluten-free vegan church-key 
                                        pour-over seitan flannel.
                                    </p>
                                </div>
                                <div className='trainersciallinks'>
                                    <img src="https://img.icons8.com/ios-filled/50/000000/facebook-f.png"/>
                                    <img src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"/>
                                    <img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin-2--v1.png"/>
                                    <img src="https://img.icons8.com/windows/32/000000/behance.png"/>
                                </div>
                            </div>
                        </div>
                )
            })}
            </div>
        </div>
    )
}

export default Trainer;