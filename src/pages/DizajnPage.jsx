import React, { useState, useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import '../DizajnPage.css';

import smolaImg from '../assets/smola.png';
import tamjanImg from '../assets/tamjan.png';
import ruzaImg from '../assets/ruza.png';
import jasminImg from '../assets/jasmin.png';
import malinaImg from '../assets/malina.png';
import kruskaImg from '../assets/kruska.png';
import kedarImg from '../assets/kedrovina.png';
import oudImg from '../assets/oud.png';

const noteCategories = [
    {
        title: "Amber & Začinjeno",
        color: "#4a2e1d",
        notes: [
            { name: "Mirisna smola", img: smolaImg, desc: "Mirisna smola, privlačan miris. Ovaj jantarna, smolasta aroma s blagim notama anisa donosi dubinu i samopouzdanje u vaš život. Zagrijava kožu i ostavlja nezaboravan utisak svojom jedinstvenom privlačnošću za onoga ko je nosi.", intensity: 8, longevity: 8 },
            { name: "Tamjan", img: tamjanImg, desc: "Tamjan, misteriozan miris. Dubok i topao, ovaj miris ispunjava vas osjećajem smirenosti i mudrosti. Otkriva vašu mističnu i privlačnu stranu, te plijeni pažnju drugih svojom bogatom privlačnošću.", intensity: 9, longevity: 9 }
        ]
    },
    {
        title: "Cvjetno & Nježno",
        color: "#9d224e",
        notes: [
            { name: "Ruža", img: ruzaImg, desc: "Ruža, romantičan miris. Vječan, svjež i nježan, ovaj miris pruža savršen balans svjetlosti i elegancije. Zrači samopouzdanjem i čini ga savršenim za sofisticirane prilike.", intensity: 10, longevity: 10 },
            { name: "Jasmin", img: jasminImg, desc: "Jasmin, svijetli miris. Sadrži delikatne i svijetle bijele cvjetne note, savršeno pomiješane s mošusnim podtonovima. Ovaj miris je pravi primjer privlačnih cvjetnih aroma.", intensity: 8, longevity: 8 }
        ]
    },
    {
        title: "Slatkasti & Ukusni",
        color: "#68141E",
        notes: [
            { name: "Malina", img: malinaImg, desc: "Malina, neodoljiv miris. Svjež, voćni i sladak, s nježnim puderastim podtonovima, ovaj miris je pravi nektar mladosti. Donosi radost u vaš život uz pozitivnu i osvježavajuću energiju.", intensity: 8, longevity: 8 },
            { name: "Kruška", img: kruskaImg, desc: "Kruška, osvježavajući miris. Voćne, zelene i slatke note stvaraju ugodan i osvježavajući miris koji zrači srećom i energijom. Otvorite vrata svojoj radosnoj strani i proslavite svoju jedinstvenu harizmu.", intensity: 7, longevity: 7 }
        ]
    },
    {
        title: "Drvenasto & Temeljno",
        color: "#3d342e",
        notes: [
            { name: "Kedar", img: kedarImg, desc: "Kedar, privlačan miris. Ovaj živahan i drvenast miris ostavlja jedinstven dojam koji traje zauvijek. Njegova bezvremenska privlačnost savršen je dodatak vašem osobnom stilu.", intensity: 9, longevity: 9 },
            { name: "Oud", img: oudImg, desc: "Oud, veličanstven miris. Sa svojim dubokim, animalnim i drvenastim notama, ovaj miris donosi snažnu auru u vaš život i nudi beskrajnu fascinaciju. Usudite se prigrliti svoju izvanrednu stranu, budite hrabri i neukrotivi.", intensity: 10, longevity: 10 }
        ]
    }
];

const allNotes = noteCategories.flatMap(category => category.notes);

const IntensityBar = ({ value }) => {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setTimeout(() => setWidth(value * 10), 200);
    }, [value]);

    return (
        <div className="intensity-bar-container">
            <div className="intensity-bar-fill" style={{ width: `${width}%` }}></div>
        </div>
    );
};

const CountUpTimer = ({ endValue, text }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count < endValue) {
            const timer = setTimeout(() => setCount(count + 1), 70);
            return () => clearTimeout(timer);
        }
    }, [count, endValue]);

    return <span>{text}: {count} sati</span>;
}

const PriceCounter = ({ endValue }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const increment = endValue / 100;
        if (count < endValue) {
            const timer = setTimeout(() => setCount(Math.min(count + increment, endValue)), 15);
            return () => clearTimeout(timer);
        }
    }, [count, endValue]);

    return <span>{Math.round(count)} KM</span>;
}


const DizajnPage = () => {
    const [selectedNote, setSelectedNote] = useState(null);
    const [selectedSecondaryNote, setSelectedSecondaryNote] = useState(null);
    const [recommendedNotes, setRecommendedNotes] = useState([]);
    const [showRecommendations, setShowRecommendations] = useState(false);
    const [showSummary, setShowSummary] = useState(false);
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const recommendationsRef = useRef(null);
    const summaryRef = useRef(null);

    const handleNoteSelect = (note) => {
        setSelectedNote(note);
        setSelectedSecondaryNote(null);
        setShowSummary(false);
        generateRecommendations(note);
        setShowRecommendations(true);
    };

    const handleSecondaryNoteSelect = (note) => {
        setSelectedSecondaryNote(note);
        setShowSummary(true);
    }

    const generateRecommendations = (selected) => {
        const otherNotes = allNotes.filter(n => n.name !== selected.name);
        const shuffled = otherNotes.sort(() => 0.5 - Math.random());
        setRecommendedNotes(shuffled.slice(0, 3));
    };

    useEffect(() => {
        if (showRecommendations && recommendationsRef.current) {
            recommendationsRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, [showRecommendations]);

    useEffect(() => {
        if (showSummary && summaryRef.current) {
            summaryRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [showSummary]);

    const handleAddToCart = () => {
        if (!selectedNote || !selectedSecondaryNote) return;

        const newItem = {
            id: `${selectedNote.name}-${selectedSecondaryNote.name}`,
            name: `Parfem ${selectedNote.name} & ${selectedSecondaryNote.name}`,
            price: 110,
            quantity: 1,
        };
        
        addToCart(newItem);
        navigate('/korpa');
    };

    return (
        <div className="design-page-container">
            <h1 className="design-page-title">Odaberite glavnu notu</h1>
            <div className="design-grid">
                {noteCategories.map(category => (
                    <div 
                        key={category.title} 
                        className="note-category-card"
                        style={{ background: `linear-gradient(to top, #0d0d0d 5%, ${category.color} 60%)` }}
                    >
                        <h2>{category.title}</h2>
                        <div className="notes-container">
                            {category.notes.map(note => (
                                <div key={note.name} className="note-item">
                            <div
                                className={`note-image-container ${selectedNote?.name === note.name ? 'selected' : ''}`} // Dodao sam '?' za sigurnost
                                onClick={() => handleNoteSelect(note)}
                            >
                                <img src={note.img} alt={note.name} />
                            </div>
                                    <div className="note-details">
                                        <h3>{note.name}</h3>
                                        <p>{note.desc}</p>
                                        <div className="note-stats">
                                            <span>Intenzitet:</span>
                                            <IntensityBar value={note.intensity} />
                                        </div>
                                        <div className="note-stats">
                                            <CountUpTimer endValue={note.longevity} text="Trajnost" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        {selectedNote && (
                <div 
                    ref={recommendationsRef} 
                    className={`recommendations-section ${showRecommendations ? 'visible' : ''}`}
                >
                    <div className="selected-note-display">
                        <h2>Odabrali ste:</h2>
                        <img src={selectedNote.img} alt={selectedNote.name} />
                        <p>{selectedNote.name}</p>
                    </div>

                    <div className="recommended-notes-display">
                        <h2>Preporučene sporedne note:</h2>
                        <p className="subtitle">Odaberite jednu notu</p>
                        <div className="recommended-notes-grid">
                            {recommendedNotes.map(note => (
                                <div 
                                    key={note.name} 
                                    className={`recommended-note-item ${selectedSecondaryNote?.name === note.name ? 'secondary-selected' : ''}`}
                                    onClick={() => handleSecondaryNoteSelect(note)}
                                >
                                    <img src={note.img} alt={note.name} />
                                    <p>{note.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            
            {selectedSecondaryNote && (
                <div 
                    ref={summaryRef} 
                    className={`summary-section ${showSummary ? 'visible' : ''}`}
                >
                    <h2>Vaš izbor mirisnih nota:</h2>
                    <div className="summary-cards-container">
                        <div className="summary-card">
                            <img src={selectedNote.img} alt={selectedNote.name} className="summary-card-image" />
                            <div className="summary-card-details">
                                <p>Eau de Parfum 30 ML</p>
                                <h4>{selectedNote.name}</h4>
                            </div>
                        </div>
                        <div className="summary-card">
                            <img src={selectedSecondaryNote.img} alt={selectedSecondaryNote.name} className="summary-card-image" />
                            <div className="summary-card-details">
                                <p>Pojačivač mirisa 3 ML</p>
                                <h4>{selectedSecondaryNote.name}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="summary-price">
                        Cijena: <PriceCounter endValue={110} />
                    </div>
                    <button className="add-to-cart-btn" onClick={handleAddToCart}>Dodaj u korpu</button>
                </div>
            )}
        </div>
    );
};

export default DizajnPage;