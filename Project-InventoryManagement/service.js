import React from 'react';
import './service.css';
import Side from './side';


const servicesData = [
    {
        id: 1,
        title: 'Inventory Management',
        description: 'Manage your inventory efficiently with real-time tracking and reporting.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuvQg5Ec0qevavQBrWq09vwEINzQarrAP6mg&s'
    },
    {
        id: 2,
        title: 'Sales Analytics',
        description: 'Analyze your sales data for better decision-making and strategy development.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-GkxwLPpgv7R-0jZMux_xCbTGg51anM_s8zT8-Hu0ImIx6LDhjVKwJK4Ycg7ximVFQ3g&usqp=CAU'
    },
    {
        id: 3,
        title: 'Customer Management',
        description: 'Keep track of customer interactions and improve relationships with powerful tools.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDhH7UsU0IcKdwtqC9flMo7TO5569XH7ArWQ&s'
    },
    {
        id: 4,
        title: 'Reporting Tools',
        description: 'Generate comprehensive reports to get insights into your business performance.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdDT0nZzLJ6tUcqfpV4kUPf2XgEM60Fv294g&s'
    },
];

const Services = () => {
    return (
        <div className='ser'>
        <div className="services-container">
            <Side/>
            <h1 className="services-title">Our Services</h1>
            <div className="services-grid">
                {servicesData.map(service => (
                    <div key={service.id} className="service-card">
                        <img src={service.image} alt={service.title} className="service-image" />
                        <h2 className="service-title">{service.title}</h2>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Services;
