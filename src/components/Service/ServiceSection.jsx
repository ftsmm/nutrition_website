import React from 'react';
import ServiceCard from './Service_Card';
import './ServiceSection.css'; // Özel stil dosyanız

const services = [
    {
        title: 'Bireysel Danışmanlık',
        description: 'Kişisel ihtiyaçlarınıza göre özelleştirilmiş diyet programları.',
        image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '500₺'
    },
    {
        title: 'Grup Danışmanlık',
        description: 'Bir grup olarak sağlıklı beslenme ve yaşam tarzı değişiklikleri.',
        image: 'https://images.pexels.com/photos/864078/pexels-photo-864078.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '300₺'
    },
    {
        title: 'Online Danışmanlık',
        description: 'Online platformlar üzerinden kişisel danışmanlık hizmetleri.',
        image: 'https://images.pexels.com/photos/4050078/pexels-photo-4050078.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '400₺'
    },
    {
        title: 'Özel Diyet Programları',
        description: 'Belirli sağlık hedeflerinize uygun özel diyet planları.',
        image: 'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '600₺'
    }
];

const ServiceSection = () => {
    return (
        <section className="service-section">
            <h2>Hizmetlerimiz</h2>
            <p>Sağlıklı yaşam hedeflerinize ulaşmanız için sunduğumuz çeşitli hizmetler.</p>
            <div className="service-list">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        image={service.image}
                        price={service.price}
                    />
                ))}
            </div>
        </section>
    );
}

export default ServiceSection;
