import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { name, img, description, offer, country, duration, price, groupSize,_id } = props.service;
    return (
        <div >
            <Card className="service-card" style={{ borderLeft: "3px solid #c29d59" }}>
                {offer && <Typography style={{ position: "absolute", padding: "2px 30px 2px 0 ", marginTop: 15, color: "white", backgroundColor: "#c29d59" }} gutterBottom variant="h5" component="div">
                    {offer}% OFF
                </Typography>}

                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography color="text.secondary" gutterBottom variant="body2" component="div">
                        <span className="fw-bold">Country : </span>{country}
                    </Typography>

                    <Typography className="mt-2 mb-3" variant="body2" color="text.secondary">
                        {description.slice(0, 80)} <span className="fw-bold">...read more</span>
                    </Typography>

                    <Typography style={{ borderTop: "1px solid rgb(43 43 43 / 0.1)", borderBottom: "1px solid rgb(43 43 43 / 0.1)" }} className="mt-3" gutterBottom variant="body2" component="div">

                        <div className="container mt-3">
                            <div className="row">
                                <div className="col-6 col-lg-6 col-xs-6 col-sm-6 col-md-6 col-xl-6">
                                    <h5 className="fw-bold fs-5"><i style={{ color: "#c29d59" }} className="fas fa-clock "></i> Duration:</h5>
                                    <p className="ms-4">{duration} days</p>
                                </div>
                                <div className=" col-6 col-lg-6 col-xs-6 col-sm-6 col-md-6 col-xl-6">
                                    <h5 className="fw-bold fs-5"><i style={{ color: "#c29d59" }} className="fas fa-users "></i> Group:</h5>
                                    <p className="ms-4">{groupSize} people</p>
                                </div>
                            </div>
                        </div>

                        {/* <span className="fw-bold">Duration :</span>  {duration} days */}
                    </Typography>
                </CardContent>

                <div className="d-flex justify-content-between container">
                    <Typography 
                    style={{fontFamily:"cursive"}}
                    className="fw-bold " variant="h5" >
                        <span className="fw-bold mt-3">${price} </span>
                    </Typography>
                    <NavLink className="text-decoration-none" to={`/placeOrder/${_id}`}>
                        <Button style={{ color: "white", backgroundColor: "#c29d59" }} sx={{ paddingX: 2, marginLeft: 2, marginBottom: 2,fontWeight:"bold" }} variant="contained" size="small"><i className="fas fa-luggage-cart me-2"></i> Book Now </Button>
                    </NavLink>
                </div>


            </Card>

        </div>
    );
};

export default Service;