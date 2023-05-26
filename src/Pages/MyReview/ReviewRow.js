import React from 'react';

const ReviewRow = ({review}) => {
    const {service, serviceName, balance, customerName,phone} = review;
    return (
        <>
          <tr>
        <th>1</th>
        <td>{serviceName}</td>
        <td>{balance}</td>
        <td>{phone}</td>
        <td>{service}</td>
      </tr>
        </>
    );
};

export default ReviewRow;