import React from "react";
import msd from "../Images/msd.jpg";
import Mission from "../Images/mission.jpg";
import Vision from "../Images/bg2.webp";
import Shubham from '../Images/Shubham_Nalwade.jpeg';

const About =()=>{
    return(
        <>
            <section className="about" id="about">
                <div id='about-data'>   
                    <h1>ABOUT</h1>
                    <div className='container' id='data'>
                        <div className='col md-3 p-1' id='box'>
                            <span>3+</span>
                            <h4>Years Of Experience</h4>
                        </div>
                        <div className='col md-3 p-1' id='box'>
                            <span>11</span>
                            <h4>Project Completed</h4>
                        </div>
                        <div className='col md-3 p-1' id='box'>
                            <span>4</span>
                            <h4>Project In Progress</h4>
                        </div>
                        <div className='col md-3 p-1' id='box'>
                            <span>30+</span>
                            <h4>Active Workers</h4>
                        </div>
                    </div>
                    <div className='container my-4' id='founder'>
                        <div id='p-info'>
                            <div id='img'><img src={Shubham}></img></div>
                            <h3>Mr. SHUBHAM NALWADE</h3>
                        </div>
                        <div id='info'>
                            <h2>FOUNDER</h2>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mr. Shubham Nalwade is the Founder and Chairman of Dream Build 
                                Construction Company. He founded the firm in 2019 with a mission to better 
                                serve his clients and the construction industry as a whole through the 
                                endorsement and implementation of an integrated design-build construction 
                                delivery approach. From the outset, he concentrated the efforts of the
                                organization toward design-build markets, and in the process established 
                                Dream Build Construction as one of the earliest firms to be recognized as 
                                a true design-builder and a current respected leader in those market.
                            </p>
                        </div>
                    </div>
                    <div className='container py-4' id='mission-vision'>
                        <div className='card my-4' id='mission'>
                            <div id='img'>
                                <img src={Mission} className="card-img-top"></img>
                            </div><br />
                            <div id='info'>
                                <h2 className="card-title">MISSION</h2><hr/>
                                    <p className="card-text px-5">
                                        <span>WE AIM TO INSPIRE THE WORLD</span><br></br>
                                        With every project, we push the front edge of what is 
                                        possible in construction. Our vision is to evolve the construction
                                        industry and inspire the world through buildings that elevate.
                                    </p>
                            </div>
                        </div>
                        <div className='card my-4' id='vision'>
                            <div id='p-info'>
                                <div id='img'><img src={Vision} className="card-img-top"></img></div><br />
                            </div>
                            <div id='info'>
                                <h2 className="card-title">VISION</h2><hr />
                                    <p className="card-text px-5">
                                        <span> WE BELIEVE BUILDINGS ARE THE<br></br>
                                            SIGNATURE OF A CIVILIZATION</span><br></br>
                                        Buildings tell our history and our purpose. 
                                        They are symbols of our highest-reaching achievement
                                        and tangibly articulate who we are and what we stand for.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default About;