import { Grid, LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Service.css'

const Services = () => {

    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://blooming-meadow-89430.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    return (
        <div>
            <Typography className="service-name" sx={{ textAlign: "center", pt: 3, fontWeight: 800, marginTop: 2, marginBottom: 5 ,color: "#03e12", fontSize: "60px",fontFamily:"cursive"}} variant="h3">Our Services</Typography>


            <Box className="container" sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 6 }} columns={{ xs: 3, sm: 8, md: 12 }}>
                    {/* using spinner */}
                    {service.length === 0 ? <Box sx={{ width: '100%' }}><LinearProgress color="secondary" /></Box>
                        :
                        service.map(ser => <Grid 
                        className="grid-responsive" item xs={12} sm={4} md={4} >
                            <Service service={ser} key={ser._id}></Service>
                        </Grid>)

                    }
                </Grid>
            </Box>

        </div>
    );
};

export default Services;