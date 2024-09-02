import React from 'react';
import FeatureCard from './FeatureCard';
import F1 from '../../assets/F1.jpg'
import Star from '../../assets/Star.webp'
const FeatureCardDetails = () => {
    const cards = [
        {
            heading: "Event",
            image: F1,
            title: 'Forbes Asia Best Under a Billion 2024',
            description: 'Systems Limited wins Forbes Asia’s Best Under a Billion 2024.',
        },
        {
            heading: "Event",
            image: Star,
            title: 'Shaping New Frontiers',
            description: 'Shaping new frontiers in banking at TCF 2024.',
        },
        {
            heading: "Event",
            image: F1,
            title: 'Forbes Asia Best Under a Billion 2024',
            description: 'Systems Limited wins Forbes Asia’s Best Under a Billion 2024.',
        },
        {
            heading: "Event",
            image: Star,
            title: 'Shaping New Frontiers',
            description: 'Shaping new frontiers in banking at TCF 2024.',
        },
        {
            heading: "Event",
            image: F1,
            title: 'Forbes Asia Best Under a Billion 2024',
            description: 'Systems Limited wins Forbes Asia’s Best Under a Billion 2024.',
        },
        {
            heading: "Case Study",
            image: Star,
            title: 'Shaping New Frontiers',
            description: 'Shaping new frontiers in banking at TCF 2024.',
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10" >
            {cards.map((card, index) => (
                <FeatureCard
                    key={index}
                    heading={card.heading}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </div>
    );
};

export default FeatureCardDetails;
