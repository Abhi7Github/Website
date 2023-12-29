import React,{useRef} from "react";
import Logo from "../Images/logo.jpg";

const Navbar =()=>{
    
    // show navbar on menu-btn
    const navbarRef=useRef();
    const showNavbar=()=>{
        navbarRef.current.classList.toggle("active"); 
        infoRef.current.classList.remove("active"); 
    }

    //show info on info-btn
    const infoRef=useRef();
    const showInfo=()=>{
        infoRef.current.classList.toggle("active"); 
        navbarRef.current.classList.remove("active"); 
    }

    //close info on close-info-btn
    const colseInfo =()=>{      
        infoRef.current.classList.remove('active');
    }                       

    const removeSideBar=()=>{
        navbarRef.current.classList.remove("active"); 
    }
    return(
        <>
            <header className="header">
                <a href="#" className="logo">
                    <img src={Logo} alt="" />
                </a>
                <nav className="navbar" ref={navbarRef}> 
                    <a href="#home" onClick={removeSideBar}>Home</a>
                    <a href="#about" onClick={removeSideBar}>About</a>
                    <a href="#service" onClick={removeSideBar}>Services</a>
                    <a href="#project" onClick={removeSideBar}>Projects</a>
                    <a href="#review" onClick={removeSideBar}>Review</a>
                    <a href="#contact" onClick={removeSideBar}>Contact</a>
                </nav>
                <div className="icons">
                    <div className="fa-solid fa-circle-info" id="info" onClick={showInfo}></div>
                    <div className="fas fa-bars" id="menu-btn" onClick={showNavbar}></div>
                </div>
                <div className="contact-info" ref={infoRef}>
                    <div className="fas fa-times" id="close-info" onClick={colseInfo}></div>
                    <div className="info">
                        <i className="fas fa-phone"></i>
                        <h3>Phone Number</h3>
                        <p>+91-7066831601</p>
                        <p>+91-7066831601</p>
                    </div>
                    <div className="info">
                        <i className="fas fa-envelope"></i>
                        <h3>Email Address</h3>
                        <p>shubhamnalavadece@gmail.com</p>
                    </div>
                    <div className="info">
                        <i className="fas fa-map-marker-alt"></i>
                        <h3>Office Address</h3>
                        <p>Ashirwad Bunglow,</p>
                        <p>Geetanagar,kavlapur</p>
                        <p>Sangli - 410 306</p>
                    </div>
                    <div className="share">
                        <a href="#" className="fab fa-facebook"></a>
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-instagram"></a>
                        <a href="#" className="fab fa-linkedin"></a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar;