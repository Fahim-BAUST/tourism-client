import { LinearProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const MyOrder = () => {
  const { user } = useAuth();

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`https://blooming-meadow-89430.herokuapp.com/allOrders/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  const handleDeleteclick = (id) => {
    const proceed = window.confirm("Are you sure, You want to delete?");
    if (proceed) {
      const url = `https://blooming-meadow-89430.herokuapp.com/allOrders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            alert("Successfully deleted ");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          } else {
            alert("No documents matched the query. Deleted 0 documents.");
          }
        });
    }
  };
  return (
    <div className="table-responsive">
      <Typography
        sx={{
          textAlign: "center",
          pt: 3,
          fontWeight: 800,
          marginTop: 2,
          marginBottom: 5,
          color: "#03e12",
          fontSize: "50px",
          fontFamily: "cursive",
        }}
        variant="h3"
      >
        My Orders
      </Typography>
      {user.emailVerified === true ? <table className="table container table-warning  table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name:</th>
            <th scope="col">Booked:</th>
            <th scope="col">Price:</th>
            <th scope="col">Phone:</th>
            <th scope="col">Date:</th>
            <th scope="col">Status:</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <Box sx={{ width: "100%" }}>
              <LinearProgress color="secondary" />
            </Box>
          ) : (
            orders.map((order) => (
              <tr>
                <th scope="row">*</th>
                <td>{order.name}</td>
                <td>{order.orderName}</td>
                <td>{order.price}$</td>
                <td>{order.phone}</td>
                <td>{order?.date?.slice(0, 10)}</td>
                <td>
                  {order.orderStatus === "Pending" && (
                    <i className="me-1 fas fa-spinner text-warning fw-bolder fs-6"></i>
                  )}
                  {order.orderStatus === "Shipped" && (
                    <i className="me-1 fas fa-truck text-info fs-6"></i>
                  )}
                  {order.orderStatus === "Delivered" && (
                    <i class="me-1 fas fa-smile-wink fs-5 text-warning"></i>
                  )}
                  {order.orderStatus === "Approved" && (
                    <i class="me-1 fas fa-check-circle fs-5 text-success"></i>
                  )}
                  {order.orderStatus}{" "}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteclick(order._id)}
                    className="ms-1 border-0"
                  >
                    <i className="fas fa-trash text-danger"></i>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table> : <div className="table-responsive">
        <Typography
          sx={{
            textAlign: "center",
            pt: 3,
            fontWeight: 800,
            marginTop: 2,
            marginBottom: 5,
            color: "red",
            fontSize: "40px",
            fontFamily: "cursive",
          }}
          variant="h3"
        >
          please verify your email
        </Typography>
      </div>}
    </div>
  );
};

export default MyOrder;
