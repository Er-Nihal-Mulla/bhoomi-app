import React from 'react';

function Slider() {
  return (
    <div className="slider mb-5">
                <div className="swiper-container mainslider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="slideimage" style={{ backgroundImage: "url(./img/slider/slide2.jpg)" }}></div>
                            {/* <div className="slideimage res" style="background-image:url(<?php echo $DOC_ROOT;?>img/slider/bankslide-res.jpg);"></div> */}
                            <div className="slidercont center green">
                                <div className="container-fluid cmpad">
                                    <p>Fresh and Organic veggies,<br />for happier and<br />healthier life</p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="slideimage" style={{ backgroundImage: "url(./img/slider/slide1.jpg)" }}></div>
                            {/* <div className="slideimage res" style="background-image:url(<?php echo $DOC_ROOT;?>img/slider/bankslide-res.jpg);"></div> */}
                            <div className="slidercont brown">
                                <div className="container-fluid cmpad">
                                    <p>We have everything you need for happier and healthier life</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination main-pagination"></div>
                </div>
            </div>
  )
}

export default Slider;