import React from 'react';

const ReviewRow = ({review, handleDelete}) => {
    const {_id, service, serviceName, balance, customerName,phone} = review;
    return (
        <>
          <tr>
        <th>
        <label>
            <button onClick={()=>handleDelete(_id)} className='btn btn-ghost'>X</button>
          </label>
        </th>
        <td>{serviceName}</td>
        <td>{balance}</td>
        <td>{phone}</td>
        <td>{service}</td>
      </tr>
        </>
    );
};

export default ReviewRow;