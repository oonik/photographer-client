import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    //    console.log(services)
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='mt-10'>
            <h1 className='text-5xl font-semibold text-center'>My services</h1>
            <p className='text-center mt-3'>Lorem ipsum dolor,<br /> sit amet consectetur adipisicing elit. Sunt doloremque cum voluptatibus aliquid dicta? <br /> Iusto, corrupti incidunt. Ratione labore autem distinctio dolorum molestias, minus dolore inventore quos ad dignissimos ex?</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
            {
                services.map(service => <ServiceCard
                key={service.service_id}
                service={service}
                ></ServiceCard>)
            }
        </div>
        </div>
    );
};

export default Services;