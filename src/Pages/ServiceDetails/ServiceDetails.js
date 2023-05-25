import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { _id, name, picture, balance, about } = useLoaderData();

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}!</h2>
                <p className='font-semibold'>{balance}</p>
                <p>{about}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;