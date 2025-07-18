import React from 'react';
import { useInView } from 'react-intersection-observer';

import userIcon from '../assets/user.png';

const testimonialsData = [
  {
    quote: "\"Parfemistika me oduševila! Jednostavnost korištenja i izbor nota za kombinovanje su ključni, a dodatne informacije o mirisnim notama čine je još privlačnijom.\"",
    author: "Anonimni korisnik"
  },
  {
    quote: "\"Aplikacija bi mi omogućila da na jedinstven način izrazim svoj stil, a kviz koji bi usmjerio prema idealnom parfemu bio bi savršen način da bolje upoznam svoje preferencije.\"",
    author: "Anonimni korisnik"
  }
];

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className={`testimonials-section ${inView ? 'is-visible' : ''}`}>
      <h2>Šta naši korisnici imaju reći o nama</h2>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-content">
              <blockquote>{testimonial.quote}</blockquote>
              <cite>{testimonial.author}</cite>
            </div>
            <div className="testimonial-icon">
              <img src={userIcon} alt="Korisnik" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;