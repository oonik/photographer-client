import React from 'react';
import img1 from '../../../assets/banner/shutterstock_407011618.webp';
import img2 from '../../../assets/banner/thumbnail-2.webp';
import img3 from '../../../assets/banner/GettyImages-3.jpeg';
import img4 from '../../../assets/banner/P8wbbM32jXy4V3j-4.jpg';

const Banner = () => {
    return (
        <div className=''>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={img1} alt='' className="w-full h-80 rounded-xl" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={img2} alt='' className="w-full h-80 rounded-xl" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={img3} alt='' className="w-full h-80 rounded-xl" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={img4} alt='' className="w-full h-80 rounded-xl" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;