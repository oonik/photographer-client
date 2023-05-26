import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

        
const ReviewAdd = ({service}) => {
    const {user} = useContext(AuthContext);
    const {_id, name, balance} = service;
        
      const handleAddService = event =>{
        event.preventDefault();
        const form = event.target;
        const reviewName = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.yourPhone.value;
        const email = user?.email || 'unsubscribe';
        const message = form.message.value;

        const review = {
            service : _id,
            serviceName : name,
            balance,
            customerName : reviewName,
            phone,
            email,
            message
        };

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
      })
         .then(res => res.json())
         .then(data => {
            if(data.acknowledged === true){
                alert('review add successfully');
                form.reset();
            }
            console.log(data)
         })
         .catch(err => console.error(err))
      }
    return (
        <div className='m-20 bg-slate-100 p-10 rounded'>
            <form onSubmit={handleAddService}>
                <div className='mb-4'>
                <h2 className="text-4xl">Add review this product: {name}</h2>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="First name" className="input input-ghost w-full input-bordered" />
                    <input name='lastName' type="text" placeholder="Last name" className="input input-ghost w-full input-bordered" />
                    <input name='yourPhone' type="number" placeholder="Your phone" className="input input-ghost w-full input-bordered" required />
                    <input name='email' type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full input-bordered" readOnly />
                </div>
                <textarea name='message' placeholder="Your message" className="textarea textarea-bordered textarea-lg w-full my-5" ></textarea>
                <input type="submit" value="Order Confirm" className="btn btn-warning w-full" />
            </form>
        </div>
    );
};

export default ReviewAdd;