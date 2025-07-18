import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../KvizPage.css';
import '../index.css';

import maleIcon from '../assets/male.png';
import femaleIcon from '../assets/female.png';
import safetyIcon from '../assets/safety.png';
import adventureIcon from '../assets/adventure.png';
import partyIcon from '../assets/party.png';
import trophyIcon from '../assets/trophy.png';
import freshIcon from '../assets/fresh.png';
import fireIcon from '../assets/fire.png';

import { noteCategories } from '../data/noteData';
import { IntensityBar, CountUpTimer } from '../components/designComponents/noteComponents';

const KvizPage = () => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({
        age: 25,
        gender: null,
        priority: null,
        aspiration: null,
        scentType: null,
        strength: null,
    });
    const [recommendedNotes, setRecommendedNotes] = useState([]);
    const navigate = useNavigate();

    const ageRef = useRef(null);
    const genderRef = useRef(null);
    const priorityRef = useRef(null);
    const aspirationRef = useRef(null);
    const scentTypeRef = useRef(null);
    const strengthRef = useRef(null);
    const resultsRef = useRef(null);

    const handleAnswer = (key, value) => {
        setAnswers(prev => ({ ...prev, [key]: value }));
    };

    const nextStep = () => setStep(prev => prev + 1);

    const finishQuiz = () => {
        const allNotes = noteCategories.flatMap(cat => cat.notes);
        const shuffled = allNotes.sort(() => 0.5 - Math.random());
        setRecommendedNotes(shuffled.slice(0, 3));
        nextStep();
    };
    
    useEffect(() => {
        const refs = [null, ageRef, genderRef, priorityRef, aspirationRef, scentTypeRef, strengthRef, resultsRef];
        if (step > 0 && refs[step]?.current) {
            refs[step].current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [step]);
    
    return (
        <div className={`quiz-page-container ${step > 0 ? 'quiz-started' : ''}`}>
            <div className={`quiz-section intro-section ${step >= 0 ? 'visible' : ''}`}>
                <h1 className="intro-title">Prije svega, <br /> trebamo saznati nešto više <br /> o Vama</h1>
                <button className="quiz-btn start-btn intro-button" onClick={nextStep}>ZAPOČNI</button>
            </div>

            <div ref={ageRef} className={`quiz-section ${step >= 1 ? 'visible' : ''}`}>
                <h2>Koliko imate godina?</h2>
                <div className="age-slider-container">
                    <span className="age-tooltip" style={{left: `calc(${((answers.age - 1) / 99) * 100}% - 15px)`}}>
                        {answers.age}
                    </span>
                    <input type="range" min="1" max="100" value={answers.age} onChange={(e) => handleAnswer('age', e.target.value)} className="age-slider"/>
                    <div className="age-labels"><span>1</span><span>10</span><span>20</span><span>30</span><span>40</span><span>50</span><span>60</span><span>70</span><span>80</span><span>90</span><span>100</span></div>
                </div>
                <button className="quiz-btn" onClick={nextStep}>NASTAVI</button>
            </div>

            <div ref={genderRef} className={`quiz-section ${step >= 2 ? 'visible' : ''}`}>
                <h2>Kojeg ste spola?</h2>
                <div className="card-container">
                    <div className={`quiz-card male ${answers.gender === 'muški' ? 'selected' : ''}`} onClick={() => handleAnswer('gender', 'muški')}>
                        <img src={maleIcon} alt="Muški" /><span>Muški</span>
                    </div>
                    <div className={`quiz-card female ${answers.gender === 'ženski' ? 'selected' : ''}`} onClick={() => handleAnswer('gender', 'ženski')}>
                        <img src={femaleIcon} alt="Ženski" /><span>Ženski</span>
                    </div>
                </div>
                <button className="quiz-btn" onClick={nextStep} disabled={!answers.gender}>NASTAVI</button>
            </div>

            <div ref={priorityRef} className={`quiz-section ${step >= 3 ? 'visible' : ''}`}>
                <h2>Šta Vam je važnije?</h2>
                <div className="card-container">
                    <div className={`quiz-card safety ${answers.priority === 'sigurnost' ? 'selected' : ''}`} onClick={() => handleAnswer('priority', 'sigurnost')}>
                        <img src={safetyIcon} alt="Sigurnost" /><span>Osjećati se sigurno</span>
                    </div>
                    <div className={`quiz-card adventure ${answers.priority === 'avantura' ? 'selected' : ''}`} onClick={() => handleAnswer('priority', 'avantura')}>
                        <img src={adventureIcon} alt="Avantura" /><span>Istraživati avanturu</span>
                    </div>
                </div>
                <button className="quiz-btn" onClick={nextStep} disabled={!answers.priority}>NASTAVI</button>
            </div>
            
            <div ref={aspirationRef} className={`quiz-section ${step >= 4 ? 'visible' : ''}`}>
                <h2>Čemu težite?</h2>
                <div className="card-container">
                    <div className={`quiz-card party ${answers.aspiration === 'provod' ? 'selected' : ''}`} onClick={() => handleAnswer('aspiration', 'provod')}>
                        <img src={partyIcon} alt="Dobar provod" /><span>Dobar provod</span>
                    </div>
                    <div className={`quiz-card trophy ${answers.aspiration === 'uspjeh' ? 'selected' : ''}`} onClick={() => handleAnswer('aspiration', 'uspjeh')}>
                        <img src={trophyIcon} alt="Uspjeh" /><span>Uspjeh</span>
                    </div>
                </div>
                <button className="quiz-btn" onClick={nextStep} disabled={!answers.aspiration}>NASTAVI</button>
            </div>

            <div ref={scentTypeRef} className={`quiz-section ${step >= 5 ? 'visible' : ''}`}>
                <h2>Kakav tip mirisa volite?</h2>
                <div className="card-container">
                    <div className={`quiz-card fresh ${answers.scentType === 'svjez' ? 'selected' : ''}`} onClick={() => handleAnswer('scentType', 'svjez')}>
                        <img src={freshIcon} alt="Svjež i elegantan" /><span>Svjež i elegantan</span>
                    </div>
                    <div className={`quiz-card fire ${answers.scentType === 'hrabar' ? 'selected' : ''}`} onClick={() => handleAnswer('scentType', 'hrabar')}>
                        <img src={fireIcon} alt="Zavodljiv i hrabar" /><span>Zavodljiv i hrabar</span>
                    </div>
                </div>
                <button className="quiz-btn" onClick={nextStep} disabled={!answers.scentType}>NASTAVI</button>
            </div>
            
<div ref={strengthRef} className={`quiz-section ${step >= 6 ? 'visible' : ''}`}>
    <h2>Koliko jak parfem preferirate?</h2>
    <div className="strength-container">
        <div 
            className={`strength-bar-wrapper ${answers.strength === 'suptilan' ? 'selected' : ''}`} 
            onClick={() => handleAnswer('strength', 'suptilan')}
        >
            <div className="strength-bar suptilan"></div>
            <span>Suptilan</span>
        </div>
        <div 
            className={`strength-bar-wrapper ${answers.strength === 'balansiran' ? 'selected' : ''}`} 
            onClick={() => handleAnswer('strength', 'balansiran')}
        >
            <div className="strength-bar balansiran"></div>
            <span>Balansiran</span>
        </div>
        <div 
            className={`strength-bar-wrapper ${answers.strength === 'snažan' ? 'selected' : ''}`} 
            onClick={() => handleAnswer('strength', 'snažan')}
        >
            <div className="strength-bar snažan"></div>
            <span>Snažan</span>
        </div>
    </div>
    <button className="quiz-btn" onClick={finishQuiz} disabled={!answers.strength}>ZAVRŠI</button>
</div>
            <div ref={resultsRef} className={`quiz-section results-section ${step >= 7 ? 'visible' : ''}`}>
                <h2>Mirisne note koje Vas najbolje opisuju:</h2>
                <div className="note-category-card results-card">
                    {recommendedNotes.map(note => (
                        <div key={note.name} className="note-item">
                            <div className="note-image-container">
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
                <button className="quiz-btn design-btn" onClick={() => navigate('/dizajn')}>
                    Dizajniraj parfem
                </button>
            </div>
        </div>
    );
};

export default KvizPage;