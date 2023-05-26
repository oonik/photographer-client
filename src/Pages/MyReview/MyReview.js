import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyReview = () => {
    const {user, logOut} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/review?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user?.email, logOut])
    return (
        <div>
            
        </div>
    );
};

export default MyReview;