import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const MyReview = () => {
    const {user, logOut} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    

    useEffect(()=>{
        fetch(`http://localhost:5000/review?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user?.email, logOut])

   const handleDelete = (id) =>{
      const proceed = window.confirm('Are you sure, you want to cancel your order');
      if(proceed){
        fetch(`http://localhost:5000/review/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type':'application/json',
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                alert('your order delete successfully');
            const remaining = reviews.filter(review => review._id !== id);
            setReviews(remaining)
            }
        })
      }
   }
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
            handleDelete={handleDelete}
            ></ReviewRow>)
        }
    </tbody>
  </table>
</div>
    );
};

export default MyReview;