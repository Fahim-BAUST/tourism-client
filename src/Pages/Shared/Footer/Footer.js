import { Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <div style={{backgroundColor:"#2B1B17"}} className="mt-5 pb-4 sticky-bottom">
            <div className="container ">
                <div className="row">
                    <div className="col" >
                        <Typography className="text-light" sx={{ borderBottom: "1px solid gray", pt: 3, pb: 2, mb: 3, fontWeight: 500 }} variant="h4">Caring Crossings</Typography>
                        <Typography className="text-white text-justify " sx={{
                            pt: 3
                        }} variant="caption">Choosing the right spot are important factors to consider that significantly influence our mind. The preferred choice for many people is choosing caring crossing.</Typography>

                        <div className="mt-4 mb-3">
                            <input placeholder="Enter your email" style={{ padding: "8px 25px", border: "2px solid white", backgroundColor: "#2B1B17", borderRadius: "10px", color: "white" }} type="text" name="" id="" />
                            <button style={{ padding: "8px 20px", color: "white", backgroundColor: "#c29d59", fontWeight: "bold", borderRadius: "10px" }}>SUBMIT</button>
                        </div>

                        <div>
                            <img className="img-fluid w-50" src="https://html.geekcodelab.com/holiday-planners/assets/images/payment-companies-logo.png" alt="" />
                        </div>

                    </div>
                    <div className="col">
                        <div className="">

                        </div>

                    </div>
                    <div className="col">
                        <Typography className="text-light" sx={{ borderBottom: "1px solid gray", pt: 3, pb: 2, mb: 3, fontWeight: 500 }} variant="h4">Need Help??</Typography>

                        <div className="text-light mb-3"
                            style={{ padding: "10px", borderLeft: "5px solid #c29d59", borderRadius: "5px" }}>+123 456 7890</div>
                        <div className="text-light mb-3"
                            style={{ padding: "10px", borderLeft: "5px solid #c29d59", borderRadius: "5px" }}>planners@gmail.com</div>
                        <div className="text-light mb-3"
                            style={{ padding: "10px", borderLeft: "5px solid #c29d59", borderRadius: "5px" }}>Main Street, Victoria 8007.</div>
                        <div className="text-light mb-3"
                            style={{ padding: "8px", borderLeft: "5px solid #c29d59", borderRadius: "5px" }}>
                            <i style={{ color: "#4267B2" }} className="fab fa-facebook me-3 fs-4 "></i>
                            <i style={{ color: "red" }} className="fab fa-instagram me-3 fs-4"></i>
                            <i style={{ color: "#00acee" }} className="fab fa-twitter-square me-3 fs-4"></i>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Footer;