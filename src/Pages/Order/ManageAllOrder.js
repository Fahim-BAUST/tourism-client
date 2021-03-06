import { LinearProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const ManageAllOrder = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://blooming-meadow-89430.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  const handleUpdateclick = (id, status) => {
    const data = { status: status };
    const proceed = window.confirm("Are you sure, You want to Approve?");
    if (proceed) {
      const url = `https://blooming-meadow-89430.herokuapp.com/updateStatus/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount === 1) {
            alert("Successfully Updated ");
            setOrders(orders);
          } else {
            alert("Update Failed.");
          }
        });
    }
  };

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
    <div>
      {user?.email === 'admin@gmail.com' ? <div className="table-responsive">
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
          All Orders
        </Typography>
        <table className="table container table-warning  table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name:</th>
              <th scope="col">Booked:</th>
              <th scope="col">Price:</th>
              <th scope="col">Email:</th>
              <th scope="col">Phone:</th>
              <th scope="col">Date:</th>
              <th scope="col">Status:</th>
              <th scope="col">Change Status</th>
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
                  <td>{order.email}</td>
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

                  <td className="text-center">
                    <div className="dropdown">
                      <button
                        className="btn btn-outline-dark dropdown-toggle btn-sm"
                        type="button"
                        id="dropdownMenu2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fas fa-tasks"></i> manage
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                      >
                        <li>
                          <button
                            onClick={() =>
                              handleUpdateclick(order._id, "Approved")
                            }
                            className="dropdown-item"
                            type="button"
                          >
                            Approved
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() =>
                              handleUpdateclick(order._id, "Pending")
                            }
                            className="dropdown-item"
                            type="button"
                          >
                            Pending
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() =>
                              handleUpdateclick(order._id, "Shipped")
                            }
                            className="dropdown-item"
                            type="button"
                          >
                            Shipped
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() =>
                              handleUpdateclick(order._id, "Delivered")
                            }
                            className="dropdown-item"
                            type="button"
                          >
                            Delivered
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td className="text-center">
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
        </table>
      </div> : <div className="table-responsive">
        <Typography
          sx={{
            textAlign: "center",
            pt: 3,
            fontWeight: 800,
            marginTop: 2,
            marginBottom: 5,
            color: "red",
            fontSize: "50px",
            fontFamily: "cursive",
          }}
          variant="h3"
        >
          Only Admin Access
        </Typography>
      </div>}

    </div>

  );
};

export default ManageAllOrder;
