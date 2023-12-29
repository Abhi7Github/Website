import React from "react";
import Logo2 from "../Images/logo2.jpg";
import FootGif from "../Images/Footer.gif";

const Footer=()=>{
    return(
        <>
            <div className="footer" id="footer">
                <div className="container py-5">
                    <div className="row">
                        <div className="col md-4" id="box1">
                            <h1>Quick Links</h1><br></br>
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#services">Services</a>
                            <a href="#project">Projects</a>
                            <a href="#review">Review</a>
                            <a href="#contact">Contact</a>
                        </div>
                        <div className="col md-4" id="box2">
                            <h1>Get In Touch</h1><br></br>
                            <a href="#" className="fab fa-facebook"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                        <div className="col md-4" id="box3">
                            <img src={FootGif} className="my-3"/>
                            <h2>DREAM BUILD CONSTRUCTIONS</h2>
                        </div>
                    </div>
                    <hr></hr>
                    <h4 >All the rights reserved to Dream Build Construction & Designed by Abhi's Technologies</h4>
                </div>
            </div>
        </>
    )
}

export default Footer;