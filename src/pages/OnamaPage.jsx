import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import '../OnamaPage.css';

import placeholderImg from '../assets/placeholder.png';

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`}>
            <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                <span>{question}</span>
                <svg className="faq-icon" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z"/>
                </svg>
            </div>
            <div className="faq-answer-container">
                <div className="faq-answer">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};

const AnimatedCounter = ({ endValue, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const stepTime = Math.abs(Math.floor(duration / endValue));
            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === endValue) {
                    clearInterval(timer);
                }
            }, stepTime);
            return () => clearInterval(timer);
        }
    }, [inView, endValue, duration]);

    return <h2 ref={ref}>{count.toLocaleString()}+</h2>;
};


const OnamaPage = () => {
    const { ref: teamRef, inView: teamInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: faqRef, inView: faqInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const teamGridRef = useRef(null);

    const scrollTeam = (direction) => {
        if (teamGridRef.current) {
            const scrollAmount = 300; 
            teamGridRef.current.scrollBy({
                left: direction === 'next' ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const statsData = [
        { value: 125, label: "Dizajniranih parfema" },
        { value: 90, label: "Zadovoljnih korisnika" },
        { value: 8, label: "Dostupnih mirisnih nota" }
    ];

    const teamData = [
        { name: "Ahmed Softić", title: "Front-end Web Developer", img: placeholderImg },
        { name: "Abdullah Dlakić", title: "Front-end Web Developer", img: placeholderImg }
    ];

    const faqData = [
        {
            question: "Kako funkcioniše proces dizajniranja parfema?",
            answer: "Proces je jednostavan! Kroz naš interaktivni kviz ili direktnim odabirom na stranici 'Dizajn', birate glavne i sporedne mirisne note. Naš algoritam zatim kreira jedinstvenu formulu koja se savršeno slaže sa vašim preferencijama."
        },
        {
            question: "Koliko dugo traje izrada i dostava parfema?",
            answer: "Nakon što završite dizajn, naš tim parfimera kreće u izradu vaše personalizovane formule. Cijeli proces, od izrade do dostave na vašu adresu, obično traje između 2 i 4 radna dana."
        },
        {
            question: "Da li su sastojci prirodni i sigurni za kožu?",
            answer: "Apsolutno. Koristimo isključivo visokokvalitetne, dermatološki testirane sastojke. Većina naših esencija je prirodnog porijekla, i svi naši proizvodi su veganski i cruelty-free."
        },
        {
            question: "Šta ako nisam zadovoljan/na kreiranim mirisom?",
            answer: "Vaše zadovoljstvo je naš prioritet. Nudimo garanciju zadovoljstva. Ako niste u potpunosti zadovoljni svojim personalizovanim parfemom, kontaktirajte našu podršku u roku od 30 dana i pronaći ćemo rješenje."
        }
    ];


    return (
        <div className="onama-page-container">
            <section className="about-intro-section">
                <h1>Priča o Parfemistici</h1>
                <p>
                    Rođeni iz strasti prema jedinstvenim mirisima, u Parfemistici vjerujemo da je parfem više od mirisa – to je lični potpis. Naša misija je da Vam omogućimo da kroz personalizovano iskustvo kreirate miris koji autentično odražava Vašu ličnost i stil.
                </p>
            </section>

            <section className="about-stats-section">
                {statsData.map((stat, index) => (
                    <div key={index} className="stat-item">
                        <AnimatedCounter endValue={stat.value} />
                        <p>{stat.label}</p>
                    </div>
                ))}
            </section>

            <section ref={faqRef} className={`about-faq-section ${faqInView ? 'visible' : ''}`}>
                <h2>Često postavljana pitanja</h2>
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <FaqItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </section>

            <section ref={teamRef} className={`about-team-section ${teamInView ? 'visible' : ''}`}>
                <h2>Naš tim</h2>
                <div className="team-carousel-wrapper">
                    <button className="scroll-btn prev" onClick={() => scrollTeam('prev')}>
                        ‹
                    </button>
                    <div ref={teamGridRef} className="team-grid">
                        {teamData.map((member, index) => (
                            <div key={index} className="team-card">
                                <img src={member.img} alt={member.name} className="team-member-img" />
                                <h3>{member.name}</h3>
                                <p>{member.title}</p>
                            </div>
                        ))}
                    </div>
                    <button className="scroll-btn next" onClick={() => scrollTeam('next')}>
                        ›
                    </button>
                </div>
            </section>
        </div>
    );
};

export default OnamaPage;