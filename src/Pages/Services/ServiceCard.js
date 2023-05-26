import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ServiceCard = ({ service }) => {
    const { user } = useContext(AuthContext);
    const { _id, name, picture, balance, about } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" className='h-80 w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}!</h2>
                <p>{balance}</p>
                <p>{
                    about.length > 100 ? about.slice(0, 100) + '...' : about
                }</p>
                <div className="card-actions justify-end">
                    <Link to={`/serviceDetails/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;