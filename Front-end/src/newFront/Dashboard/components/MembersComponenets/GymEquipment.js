import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { API_URL } from '../../../common/URL';

const GymEuipments = () => {
    const [planID, setPlanID] = useState('')
    const [equip_name, setequip_name] = useState('')
    const [units, setunits] = useState('')
    const [model, setmodel] = useState('')
    const [item_price, setitem_price] = useState('')
    const [purchase_date, setpurchase_date] = useState('')

    const [onbuttonclick, setOnButtonClick] = useState('')



    const onChangeequip_name = (e) => {
        const equip_name = e.target.value;
        setequip_name(equip_name);
    };
    const onChangeunits = (e) => {
        const units = e.target.value;
        setunits(units);
    };
    const onChangemodel = (e) => {
        const model = e.target.value;
        setmodel(model);
    };
    const onChangeitem_price = (e) => {
        const item_price = e.target.value;
        setitem_price(item_price);
    };
    const onChangepurchase_date = (e) => {
        const purchase_date = e.target.value;
        setpurchase_date(purchase_date);
    };


    const inputstyle = {
        color: 'black',
        background: 'transparent',
    }
    const linkstyle = {
        color: 'black',
        background: 'green',
    }


    const [allplanlist, setAllPlanList] = useState([])





    useEffect(() => {
        axios.get(API_URL + "getAllInventoryItems")
            .then((response) => {
                console.log(response.data.data)
                setAllPlanList(response.data.data)

            })
    }, [])

    const handleMemberINFO = () => {
        axios.post(API_URL + 'addItemInfo', {
            equipName: equip_name,
            units: units,
            model: model,
            itemPrice: item_price,
            purchaseDate: purchase_date,
        })
            .then((response) => {
                alert("Equipment Added")
                axios.get(API_URL + "getAllInventoryItems")
                    .then((response) => {
                        console.log(response.data.data)
                        setAllPlanList(response.data.data)
                    })

            })
    };

    return (
        <div>
            <div className='header'>
                <h1>Gym Equipments</h1>
            </div>
            <hr />
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Add Equipment
            </button>



            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">ADD Equipment</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className='addmembersform'>
                                <form >
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <label htmlFor='membershipPlanName'>Equipment Name</label>
                                            <input
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='membershipPlanName'
                                                value={equip_name}
                                                onChange={onChangeequip_name}></input>
                                        </div>
                                        <div className='col-md-4'>
                                            <label htmlFor='duration'>Units</label>
                                            <input
                                                style={inputstyle}
                                                type='number'
                                                className='form-control form-control-sm'
                                                name='duration'
                                                value={units}
                                                onChange={onChangeunits}></input>
                                        </div>
                                        <div className='col-md-4'>
                                            <label htmlFor='starthour'>Model</label>
                                            <input
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='starthour'
                                                value={model}
                                                onChange={onChangemodel}></input>
                                        </div>
                                        <div className='col-md-4'>
                                            <label htmlFor='endhour'>Price</label>
                                            <input
                                                style={inputstyle}
                                                type='text'
                                                className='form-control form-control-sm'
                                                name='endhour'
                                                value={item_price}
                                                onChange={onChangeitem_price}></input>
                                        </div>
                                    </div>
                                    <div className='row'>

                                        <div className='col-md-4'>
                                            <label htmlFor='price'>Purchase Date</label>
                                            <input
                                                style={inputstyle}
                                                type='date'
                                                className='form-control form-control-sm'
                                                name='picer'
                                                value={purchase_date}
                                                onChange={onChangepurchase_date}></input>
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


            <table className='table'>
                <thead className='thead-dark'>
                    <tr>
                        <th>Equipment Name</th>
                        <th>Units</th>
                        <th>Model</th>
                        <th>Price</th>
                        <th>Purchase Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <React.Fragment>
                        {allplanlist ? allplanlist.map((val) => {

                            return (<tr key={val.id}>
                                <td>{val.equipName}</td>
                                <td>{val.units}</td>
                                <td>{val.model}</td>
                                <td>{val.itemPrice}</td>
                                <td>{val.purchaseDate}</td>
                            </tr>)
                        }) : <h5> No Data Found-*</h5>}
                    </React.Fragment>
                </tbody>
            </table>
        </div>
    )
}

export default GymEuipments;