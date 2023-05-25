import React from 'react';
import img from '../../../assets/about/© Tri Nguyen, Vietnam, Monthly Winner, Youth competition, 2022 Youth competition - Portraiture, 2022 Sony World Photography Awards.jpg';

const About = () => {
    return (
        <div className="hero mt-10 bg-base-200 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} alt='' className=" rounded-lg shadow-2xl" />
                <div className=''>
                    <h1 className="text-5xl font-bold">Filters & Fotography!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. <br /> Quaerat fugiat ut assumenda excepturi exercitationem quasi. <br /> In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;