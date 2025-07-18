import React from 'react';
import { useInView } from 'react-intersection-observer';

import korpaIcon from '../assets/korpa.png';
import headphonesIcon from '../assets/headphones.png';
import dostavaIcon from '../assets/dostava.png';

const featuresData = [
  {
    icon: korpaIcon,
    title: "Online narudžbe, Brzo i sigurno",
    description: "Koristimo najsigurnije sisteme za online naručivanje sa zaštitom podataka."
  },
  {
    icon: headphonesIcon,
    title: "Tu samo da Vam pomognemo",
    description: "Naš tim Vam je uvijek dostupan kako bi Vam olakšali izbor i kupovinu pri vašem personalizovanom parfemu."
  },
  {
    icon: dostavaIcon,
    title: "Dostava na kućnu adresu",
    description: "Dostava proizvoda posredstvom brze pošte na kućnu adresu u roku od 24h nakon izrade Vašeg parfema."
  }
];

const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className={`features-section ${inView ? 'is-visible' : ''}`}>
      <h2>
        Za Vas, <br /> uvijek na usluzi
      </h2>
      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div key={index} className="feature-card">
            <img src={feature.icon} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;