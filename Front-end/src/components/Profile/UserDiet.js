import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../common/URL'

const UserDiet = () => {

    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')

    const [allDietPlan, setAllDietPlan] = useState([])

    var id = localStorage.getItem("id");

    useEffect(() => {

        CalBMI();

        axios.get(`${API_URL}getAllInfo/${id}`)
            .then((response) => {
                console.log(response.data.data)

                setHeight(response.data.data.height)
                setWeight(response.data.data.weight)
            })

        axios.get(API_URL + "getAllDietItems")
            .then((response) => {
                setAllDietPlan(response.data.data)
            })
    })

    const [BMIPLAN, setBMIPLAN] = useState('')
    const [dietname, setdietname] = useState('')

    var m = height / 100;

    var BMI = weight / (m * m)

    const CalBMI = () => {
        if (m <= 0) {
            setBMIPLAN('Fill Profile Details')
            setdietname('')
        }
        else if (BMI.toPrecision(3) < 18.5) {
            setBMIPLAN('UNDERWEIGHT')
            setdietname('Underweight')
        }
        else if (BMI.toPrecision(3) > 18.5 && BMI.toPrecision(3) < 24.9) {
            setBMIPLAN('NORMAL')
            setdietname('Fit')
        }
        else if (BMI.toPrecision(3) > 25 && BMI.toPrecision(3) < 29.9) {
            setBMIPLAN('OVERWEIGHT')
            setdietname('Overweight')
        }
        else {
            setBMIPLAN('OBESE')
            setdietname('Overweight')
        }
    }

    return (
        <div>

            <div className='text-center'>
                {
                    <span>
                        <h3>Your Body Mass Index is {BMI.toPrecision(3)}</h3>
                        <h5>According To your BMI You are
                            <b className='text-success'> {BMIPLAN} </b></h5>
                        <h6>According To Expert Trainer Follow This Diet</h6>
                    </span>
                }
            </div>

            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Day</th>
                        <th scope="col">Morning</th>
                        <th scope="col">Afternoon</th>
                        <th scope="col">Evening</th>
                        <th scope="col">Night</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allDietPlan.map((val) => {
                            if (val.diet_name == dietname) {
                                return <tr key={val.diet_id}>
                                    <td>{val.day}</td>
                                    <td>{val.morning}</td>
                                    <td>{val.afternoon}</td>
                                    <td>{val.evening}</td>
                                    <td>{val.night}</td>
                                </tr>
                            }
                            else {
                                <h1>No Plan</h1>
                            }

                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default UserDiet