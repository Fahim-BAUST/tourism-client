import { Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit=data=>{

        fetch('https://possessed-hollow-97879.herokuapp.com/addService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Successfully Added");
                    reset();
                }else{
                    alert("Failed");
                }
            })

    }
    return (
        <div>
            <Typography sx={{textAlign:"center", fontWeight: 500, color: "#2b2b2b", marginBottom: 5, fontFamily: "initial", fontSize: "3em" }} ><span style={{ borderRight: "5px solid #c29d59",borderLeft: "5px solid #c29d59", borderRadius: "5px" }}>Add Service</span> </Typography>
                        <form className=" container w-50" onSubmit={handleSubmit(onSubmit)}>

                            <input  className="form-control"aria-label="Username" placeholder="Place Name" aria-describedby="basic-addon1" required  {...register("name")} />
                            <br />

                            <input className="form-control"aria-label="Username" placeholder="Image url" aria-describedby="basic-addon1" {...register("img", { required: true })} />
                            <br />
                            <input className="form-control"aria-label="Username" placeholder="Description" aria-describedby="basic-addon1" {...register("description", { required: true })} />
                            <br />
                            {errors.email && <span className="error">This field is required</span>}
                            
                            <input className="form-control"aria-label="Username" aria-describedby="basic-addon1" placeholder="Country" defaultValue="" {...register("country", { required: true })} />
                            <br />
                            <input className="form-control"aria-label="Username" aria-describedby="basic-addon1" placeholder="Group Size" defaultValue="" {...register("groupSize", { required: true })} />
                            <br />
                            <input className="form-control"aria-label="Username" aria-describedby="basic-addon1" placeholder="Offer" defaultValue="" {...register("offer")} /> <br />
                            <input className="form-control"aria-label="Username" aria-describedby="basic-addon1" placeholder="Duration" defaultValue="" {...register("duration", { required: true })} /> <br />
                            <input className="form-control"aria-label="Username" aria-describedby="basic-addon1" placeholder="Price" defaultValue="" {...register("price", { required: true })} /> <br />

                            <input  style={{borderRadius:"20px", padding:"10px 50px",border:"none", color: "white", backgroundColor: "#c29d59"}} type="submit" />
                        </form>
        </div>
    );
};

export default AddService;