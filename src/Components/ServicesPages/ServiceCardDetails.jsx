import React from 'react';
import ServiceCard from './ServiceCard';

import Data from '../../assets/data';

// Sample data


const ServiceCardDetails = () => {
  return (
    <div className="grid grid-cols-1 my-10 mb-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Data.map((service, index) => (
          <ServiceCard
          key={index}
          image={service.image}
          title={service.Service}
        //   oldPrice={service.oldPrice}
          newPrice={service.Price}
        />
    ))}
    {/* <ServiceCard title="hello"/> */}
    </div>
  );
};

export default ServiceCardDetails;
