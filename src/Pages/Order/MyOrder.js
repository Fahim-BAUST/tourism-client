import { LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://possessed-hollow-97879.herokuapp.com/allOrders/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, []);

    const handleDeleteclick = (id) => {

        const proceed = window.confirm('Are you sure, You want to delete?');
        if (proceed) {
            const url = `https://possessed-hollow-97879.herokuapp.com/allOrders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        alert("Successfully deleted ");
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    } else {
                        alert("No documents matched the query. Deleted 0 documents.");
                    }

                })
        }


    }
    return (
        <div className=" d-flex flex-column align-items-center">
            <Typography sx={{ textAlign: "center", pt: 3, fontWeight: 800, marginTop: 2, marginBottom: 5, color: "#03e12", fontSize: "50px", fontFamily: "cursive" }} variant="h3">My Orders</Typography>
            {orders.length === 0 ? <Box sx={{ width: '100%' }}><LinearProgress color="secondary" /></Box>
                :
                orders.map(order => <div
                    key={order._id}
                    style={{ border: "3px solid", marginTop: "10px", padding: "10px 20px", borderRadius: "25px", backgroundColor: "#FFE4C4" }}
                >
                    <span className="fw-bold">Name: </span>{order.name} <span className="fw-bold">Order: </span> {order.orderName} <span className="fw-bold">Status: </span>{order.orderStatus}

                    <button onClick={() => handleDeleteclick(order._id)} className="ms-1 border-0"><i className="fas fa-trash text-danger"></i></button>
                </div>)
            }


        </div>
    );
};

export default MyOrder;