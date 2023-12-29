import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import men from '../Images/men.jpg'


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Review =()=>{
    return(
        <>
            <section className="review" id="review">
            <div id='review-data'>   
                <h1>REVIEW</h1>

                <Swiper
                    pagination={{
                    type: 'progressbar',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    id='swiper'
                >
                    <SwiperSlide>
                        <div id='swiper-slide'>
                            <img src={men} alt='img'/><br />
                            <h3>Abhijeet Mali</h3>
                            <h4>Kavalapur</h4>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div id='swiper-slide'>
                            <img src={men} alt='img'/><br />
                            <h3>Abhijeet Mali</h3>
                            <h4>Kavalapur</h4>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div id='swiper-slide'>
                            <img src={men} alt='img'/><br />
                            <h3>Abhijeet Mali</h3>
                            <h4>Kavalapur</h4>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div id='swiper-slide'>
                            <img src={men} alt='img'/><br />
                            <h3>Abhijeet Mali</h3>
                            <h4>Kavalapur</h4>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div id='swiper-slide'>
                            <img src={men} alt='img'/><br />
                            <h3>Abhijeet Mali</h3>
                            <h4>Kavalapur</h4>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                        </div>
                    </SwiperSlide>
                  </Swiper>
            </div>
            </section>
        </>
    )
}

export default Review;