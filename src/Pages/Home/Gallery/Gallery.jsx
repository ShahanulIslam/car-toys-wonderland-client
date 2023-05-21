import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from "../../../assets/img/pic1.jpg";
import img2 from "../../../assets/img/pic2.jpeg";
import img3 from "../../../assets/img/pic3.jpeg";
import img4 from "../../../assets/img/pic4.webp";
import img5 from "../../../assets/img/pic5.jpeg";
import img6 from "../../../assets/img/pic6.jpg";
import img7 from "../../../assets/img/pic-7.jpeg";
import img8 from '../../../assets/img/pic-8.jpeg';

const Gallery = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8];

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true,
        });
    }, []);

    return (
        <div className="container mx-auto py-10">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">Gallery</h2>
                <p className="text-lg text-gray-500 mb-6">
                    Explore some of our amazing pictures.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-md"
                        data-aos="zoom-in"
                    >
                        <img
                            src={image}
                            alt={`Picture ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
