import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const MyReview = () => {
    const {user, logOut} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    // console.log(reviews)
    useEffect(()=>{
        fetch(`http://localhost:5000/review?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user?.email, logOut])
    return (
        <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Balance</th>
        <th>Phone</th>
        <th>Service Id</th>
      </tr>
    </thead>
    <tbody>
        {
            reviews.map(review => <ReviewRow
            key={review._id}
            review={review}
            ></ReviewRow>)
        }
    </tbody>
  </table>
</div>
    );
};

export default MyReview;