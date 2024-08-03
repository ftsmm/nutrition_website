import React from 'react';
import './ServiceCard.css'; // Özel stil dosyanız

const ServiceCard = ({ title, description, image, price }) => {
    return (
        <div className="service-card">
            <img src={image} alt={title} className="service-image" />
            <h3 className="service-title">{title}</h3>
            <p className="service-description">{description}</p>
            {price && <p className="service-price">{price}</p>}
            <button className="service-button">Daha Fazla Bilgi</button>
        </div>
    );
}

export default ServiceCard;
