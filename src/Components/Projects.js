import React from "react";
import {Grid} from "@mui/material";
import img1 from "../Images/project_01.webp"
import img2 from "../Images/project_02.jpg"
import img3 from "../Images/project_03.webp"
import img4 from "../Images/project_04.jpg"
import img5 from "../Images/project_5.jpg"
import img6 from "../Images/project_06.jpg"


const Project=()=>{
    const images=[
        {img:img1, owner:"Client Name", location:"Kavalapur"},
        {img:img2, owner:"Client Name", location:"Budhgaon"},
        {img:img3, owner:"Client Name", location:"Bisur"},
        {img:img4, owner:"Client Name", location:"Kumathe"},
        {img:img5, owner:"Client Name", location:"Tasgaon"},
        {img:img6, owner:"Client Name", location:"Kavlapur"}
    ]
    return(
        <>
            <section className="project" id="project">
                <h1>PROJECT</h1>
                <div className="container project-data">
                    {
                        images.map((item,index)=>{
                            return(
                                <div class="card m-4" id="project-card">
                                    <a href={item.img}><img src={item.img} class="card-img-top" alt="..." /></a>
                                    <div class="card-body">
                                        <h3 class="card-title"><i className="fa-solid fa-house-user" /> {item.owner}</h3>
                                        <h3 class="card-title"><i class="fa-solid fa-location-dot"/> {item.location}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
        

                    {/* <div class="card m-5" id="project-card">
                        <img src={img1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Client Name, Location</h3>
                        </div>
                    </div>
                    <div class="card m-5" id="project-card">
                        <img src={img1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Client Name, Location</h3>
                        </div>
                    </div>
                    <div class="card m-5" id="project-card">
                        <img src={img1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Client Name, Location</h3>
                        </div>
                    </div>
                    <div class="card m-5" id="project-card">
                        <img src={img1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Client Name, Location</h3>
                        </div>
                    </div>
                    <div class="card m-5" id="project-card">
                        <img src={img1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Client Name, Location</h3>
                        </div>
                    </div>
                    <div class="card m-5" id="project-card">
                        <img src={img1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Client Name, Location</h3>
                        </div>
                    </div> */}

                </div>
            </section>
            
        </>
    )    
}

export default Project;