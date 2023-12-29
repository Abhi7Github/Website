import React, { useRef, useState } from 'react';
import Mission from "../Images/mission.jpg";
import Vision from "../Images/bg2.webp";
import msd from "../Images/msd.jpg"

const Servises =()=>{
    return(
        <>
            <section className="service" id="service">
            <div id='service-data'> 
                <h1>SERVICE</h1>  
                <div className='container'>
                    <div className='area my-4'>
                        <div className='card' id='card_1'>
                            <span id='cov'><h2>PLANNING</h2></span>                    
                        </div>
                    </div>
                    <div className='area my-4'>
                        <div className='card' id='card_2'>
                            <span id='cov'><h2>STRUCTURAL DESIGN</h2></span>                    
                        </div>
                    </div>
                    <div className='area my-4'>
                        <div className='card' id='card_3'>
                            <span id='cov'><h2>ESTIMATION</h2></span>                    
                        </div>
                    </div>
                    <div className='area my-4'>
                        <div className='card' id='card_4'>
                            <span id='cov'><h2>INTERIOR DESIGN</h2></span>                    
                        </div>
                    </div>
                    <div className='area my-4'>
                        <div className='card' id='card_5'>
                            <span id='cov'><h2>REPAIR & RENOVATION</h2></span>                    
                        </div>
                    </div>
                    <div className='area my-4'>
                        <div className='card' id='card_6'>
                            <span id='cov'><h2>3D VISUALIZAION</h2></span>                    
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Servises;