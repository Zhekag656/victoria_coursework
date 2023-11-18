import React from 'react';
import {gallery} from "../models/gallery";

const Gallery = () => {
    return (
        <div className="mx-lg-5 mx-1 my-5">
            <div className="h1 text-center">Галерея картинок</div>
            <div className="text-center">
                {gallery.map(item => (
                    <img className="m-3" width={400} height={400} src={item.image} alt=""/>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
