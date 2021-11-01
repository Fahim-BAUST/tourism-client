import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const PlaceOrder = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const { id } = useParams();


    const [service, setService] = useState([]);
    useEffect(() => {
        fetch(`https://possessed-hollow-97879.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);


    const onSubmit = data => {
        data.orderStatus = "Pending";
        data.orderId = service._id;
        data.orderName = service.name;
        data.price = service.price;
        data.date = startDate;
        fetch('https://possessed-hollow-97879.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                }
            })
    };
    const [startDate, setStartDate] = useState(new Date())
    return (
        <div>

            <div className="container mt-3">
                <div className="row">
                    <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-8 col-xl-8">
                        <img className="img-fluid" src={service.img} alt="" />
                        <h3 className="mt-3">{service.name} </h3>
                        <Typography sx={{ fontWeight: 500, color: "#2b2b2b", marginBottom: 5, fontFamily: "initial", fontSize: "20px" }} >{service.description} </Typography>
                    </div>
                    <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <Typography sx={{ fontWeight: 500, color: "#2b2b2b", marginBottom: 5, fontFamily: "initial", fontSize: "3em" }} ><span style={{ borderLeft: "5px solid #c29d59", borderRadius: "5px" }}>Book this tour</span> </Typography>
                        <form className="" onSubmit={handleSubmit(onSubmit)}>

                            <input className="form-control" aria-label="Username" aria-describedby="basic-addon1" defaultValue={user.displayName} {...register("name")} />
                            <br />

                            <input className="form-control" aria-label="Username" aria-describedby="basic-addon1" defaultValue={user.email} {...register("email", { required: true })} />
                            <br />
                            {errors.email && <span className="error">This field is required</span>}

                            <input className="form-control" aria-label="Username" aria-describedby="basic-addon1" placeholder="Address" defaultValue="" {...register("address", { required: true })} />
                            <br />
                            <input className="form-control" aria-label="Username" aria-describedby="basic-addon1" placeholder="City" defaultValue="" {...register("city", { required: true })} />
                            <br />
                            <input className="form-control" aria-label="Username" aria-describedby="basic-addon1" placeholder="phone number" defaultValue="" {...register("phone", { required: true })} /> <br />

                            <DatePicker 
                            className="form-control mb-4"
                            selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                timeInputLabel="Time:"
                                dateFormat="MM/dd/yyyy h:mm aa"
                                showTimeInput 
                                />


                            <input style={{ borderRadius: "20px", padding: "10px 50px", border: "none", color: "white", backgroundColor: "#c29d59" }} type="submit" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;