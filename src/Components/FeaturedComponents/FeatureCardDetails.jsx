import React from "react";
import FeatureCard from "./FeatureCard";
import cards from "../../assets/FeatureCardData";
const FeatureCardDetails = () => {
 

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
      {cards.map((card, index) => (
        <FeatureCard
          key={index}
          heading={card.heading}
          video={card.video}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default FeatureCardDetails;
