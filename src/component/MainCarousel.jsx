import React from 'react';
import {Carousel} from "react-bootstrap";
import {options} from "../models/carousel";

const MainCarousel = () => {
    return (
        <Carousel className="mx-lg-5 my-5 mx-1 rounded-5 shadow" style={{height: "600px"}} fade data-bs-theme="dark">
            {options.map((opt, index) => (
                    <Carousel.Item style={{height: "100%"}} key={index}>
                        <img height={600} className="w-100  rounded-5" src={opt.img} alt=""/>
                        <Carousel.Caption>
                            <div className="bg-body p-1 rounded-5 text-body">
                                <h5>{opt.title}</h5>
                                <p>{opt.text}</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            )}
        </Carousel>
    );
};

export default MainCarousel;
