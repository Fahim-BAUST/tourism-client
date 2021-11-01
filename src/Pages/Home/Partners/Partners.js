import { Typography } from '@mui/material';
import React from 'react';

const Partners = () => {
    return (
        <div className="mb-5">
            <div className="container">
                <Typography sx={{ pt: 3, fontWeight: 500, color: "#2b2b2b", marginTop: 2, marginBottom: 5, fontFamily: "initial", fontSize: "3em" }} ><span style={{ borderLeft: "5px solid #c29d59", borderRadius: "5px" }}>Partners</span> </Typography>
            </div>

            <div className="container ">
                <div className="row mx-5">
                    <div className="col-lg-3 col-xs-6 col-sm-6 col-12 col-md-4 col-xl-3 text-center ">
                        <h3 style={{boxShadow: "3px 3px 12px 7px rgba(0, 0, 0, 0.6)", paddingTop:20,paddingBottom:20, borderLeft: "4px solid #c29d59", borderRight: "4px solid #c29d59",borderRadius:"10px" }} >Booking.com</h3>
                    </div>
                    <div  className="col-lg-3 col-xs-6 col-sm-6 col-12 col-md-4 col-xl-3  text-center">
                    <h3 style={{boxShadow: "3px 3px 12px 7px rgba(0, 0, 0, 0.6)", paddingTop:20,paddingBottom:20, borderLeft: "4px solid #c29d59", borderRight: "4px solid #c29d59",borderRadius:"10px" }} >Travelport</h3>
                        
                    </div>
                    <div className="col-lg-3 col-xs-6 col-sm-6 col-12 col-md-4 col-xl-3  text-center">
                    <h3 style={{boxShadow: "3px 3px 12px 7px rgba(0, 0, 0, 0.6)", paddingTop:20,paddingBottom:20, borderLeft: "4px solid #c29d59", borderRight: "4px solid #c29d59",borderRadius:"10px" }} >amadeus</h3>
                        
                    </div>
                    <div  className="col-lg-3 col-xs-6 col-sm-6 col-12 col-md-4 col-xl-3  text-center">
                    <h3 style={{boxShadow: "3px 3px 12px 7px rgba(0, 0, 0, 0.6)", paddingTop:20,paddingBottom:20, borderLeft: "4px solid #c29d59", borderRight: "4px solid #c29d59",borderRadius:"10px" }}>themeforest</h3>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Partners;