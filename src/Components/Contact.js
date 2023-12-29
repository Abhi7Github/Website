import React from "react";
import contact_bg from "../Images/contact.jpg";

const Contact =()=>{
    return(
       <>
            <section className="contact" id="contact">
                <h1>CONTACT</h1>
                <div className="contact-data">
                    <div className="contact-tag mx-5">
                        <h2>Please feel free to call us to discuss your upcoming project! 
                            For inquiries about employment, subcontracting for us, or information 
                            about our current project, please use the below details, so you can 
                            connect with us.</h2>
                    </div>
                    <div className="contact-map mx-5">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d238.57403919146398!2d74.6103423221552!3d16.91618260847638!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1695980724781!5m2!1sen!2sin" alt="Connect Internet" id="map">
                        </iframe>  
                    </div>
                    <div className="contact-info mx-3">
                         <div className="address my-5" id="info">
                            <i className="fas fa-map-marker-alt px-5"></i>
                            <h4>
                                Dream Build Construction,<br></br>
                                Ashirwad Bunglow,Geetanagar,<br></br>
                                SAngli 410-306.
                            </h4>
                        </div>
                        <div className="phone my-5" id="info">
                            <i className="fa-solid fa-phone px-5" ></i>
                            <h4>
                                +91-7066831601<br></br>
                                +91-7066831601
                            </h4>
                        </div>
                        <div className="mail my-5" id="info">
                            <i className="fa-solid fa-envelope px-5" ></i>
                            <h4>
                                shubhamnalavadece@gmail.com
                            </h4>
                        </div>
                        <div className="time my-5" id="info">
                            <i className="fa-solid fa-clock px-5" ></i>
                            <h4>
                                09:00 am - 07:00 pm
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
       </>
    )
}

export default Contact;