import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import parfemImage from '../assets/parfem.png';

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>
          <TypeAnimation
            sequence={[
              'Dizajniraj\nsvoj parfem',
            ]}
            wrapper="span" 
            speed={45}
            cursor={true}
            repeat={0}
          />
        </h1>
        <p>
          Dizajniranje sopstvenog parfema nikad nije bilo jednostavnije. 
          Spoji zajedno svoje omiljene mirisne note i dizajniraj neviđenu kreaciju do sada!
        </p>
        <div className="hero-buttons">
        <Link to="/dizajn" className="btn btn-primary">Dizajniraj parfem</Link>
        <Link to="/kviz" className="btn btn-secondary">Personalni kviz</Link>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-image-wrapper">
          <img src={parfemImage} alt="Crna boca parfema" />
        </div>
      </div>
    </main>
  );
};

export default Hero;