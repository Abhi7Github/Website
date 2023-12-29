import React from "react";
import Home1 from "../Images/home9.jpg";
import Home2 from "../Images/bg1.jpg";
import Home3 from "../Images/bg5.jpg";

const Home =()=>{
    return(
        <>         
            <main className="home" id="home">
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" id="corousel">
                <div className="img">
                <img src={Home1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-caption" id="content">
                    <h1 className="">WE <span>DESIGN</span> IT... WE <span>BUILD</span> IT... YOU <span>LOVE</span> IT...</h1>
                </div>
                </div>
                <div class="carousel-item" id="corousel">
                <div className="img">
                <img src={Home2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-caption d-md-block" id="content2">
                    <h1 className="">WE CREATE <br></br><span>BEAUTIFUL<br></br> SURROUNDINGS</span></h1>
                </div>
                </div>
                <div class="carousel-item" id="corousel">
                <div className="img">
                <img src={Home3} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-caption  d-md-block" id="content3">
                    <h1><span>WE ARE CREATORS</span><br></br> WE ARE PASSIONATE<br></br> ABOUT WHAT WE BUILD</h1>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
            </main>
        </>
    )
}

export default Home;