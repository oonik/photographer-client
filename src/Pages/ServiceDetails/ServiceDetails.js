import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewAdd from './ReviewAdd';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { _id, name, picture, balance, about } = service;

    return (
        <div>
            <h1 className='text-5xl font-semibold'>Service section</h1>
            <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}!</h2>
                <p className='font-semibold'>{balance}</p>
                <p>{about}</p>
            </div>
        </div>
         <ReviewAdd service={service}></ReviewAdd>
        </div>
    );
};

export default ServiceDetails;