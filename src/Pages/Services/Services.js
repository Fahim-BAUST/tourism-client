import { Grid, LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {

    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://possessed-hollow-97879.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    return (
        <div>
            <Typography sx={{ textAlign: "center", pt: 3, fontWeight: 800, marginTop: 2, marginBottom: 5 ,color: "#03e12", fontSize: "60px",fontFamily:"cursive"}} variant="h3">Our Services</Typography>


            <Box className="container" sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {/* using spinner */}
                    {service.length === 0 ? <Box sx={{ width: '100%' }}><LinearProgress color="secondary" /></Box>
                        :
                        service.map(ser => <Grid  item xs={12} sm={4} md={4} >
                            <Service service={ser} key={ser._id}></Service>
                        </Grid>)

                    }
                </Grid>
            </Box>

        </div>
    );
};

export default Services;