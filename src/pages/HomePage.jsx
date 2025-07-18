import React, { useRef } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
    const testimonialsGridRef = useRef(null);

    const scrollTestimonials = (direction) => {
        if (testimonialsGridRef.current) {
            const scrollAmount = 350;
            testimonialsGridRef.current.scrollBy({
                left: direction === 'next' ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        }
    };
    
    return (
        <>
            <div className="app-container">
                <Hero />
            </div>
            <Features />
            <Testimonials 
                gridRef={testimonialsGridRef} 
                scrollHandler={scrollTestimonials} 
            />
        </>
    );
};

export default HomePage;