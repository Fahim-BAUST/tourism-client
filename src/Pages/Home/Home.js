import { Grid, LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Service from '../Services/Service/Service';
import Accord from './Accord/Accord';
import Banner from './Banner/Banner';
import Partners from './Partners/Partners';
import Coverflow from 'react-coverflow';

const Home = () => {


    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://blooming-meadow-89430.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data.slice(0, 6)))
    }, []);
    return (
        <div>

            <Banner></Banner>

            <Coverflow
                width={900}
                height={480}
                displayQuantityOfSide={2}
                navigation={false}
                enableHeading={false}
                media={{
                    '@media (max-width: 900px)': {
                        width: '600px',
                        height: '300px'
                    },
                    '@media (min-width: 900px)': {
                        width: '960px',
                        height: '600px'
                    }
                }}
            >
                <div
                    role="menuitem"
                    tabIndex="0"
                >
                    <img
                        src={service[0]?.img}
                        alt='title or description'
                        style={{ display: 'block', width: '100%' }}
                    />

                </div>

                {service.map(service => <img src={service.img} alt="" />)}


            </Coverflow>

            <div className="container">
                <Typography className="heading-size" sx={{ fontWeight: 500, color: "#2b2b2b", marginTop: 5, marginBottom: 5, fontFamily: "initial", fontSize: "3em" }} style={{ borderLeft: "5px solid #c29d59", borderRadius: "5px" }}>Trending, <span className="fw-bold">Best Selling Tours</span></Typography>
            </div>

            <Box className="container" sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {/* using spinner */}
                    {service.length === 0 ? <Box sx={{ width: '100%' }}><LinearProgress color="secondary" /></Box>
                        :
                        service.map(ser => <Grid className="grid-responsive" item xs={12} sm={4} md={4} >
                            <Service service={ser} key={ser._id}></Service>
                        </Grid>)

                    }
                </Grid>
            </Box>

            <Accord></Accord>

            <Partners></Partners>

        </div>
    );
};

export default Home;