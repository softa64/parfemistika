import React, { useState, useEffect } from 'react';

export const IntensityBar = ({ value }) => {
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
export const CountUpTimer = ({ endValue, text }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count < endValue) {
            const timer = setTimeout(() => setCount(count + 1), 70);
            return () => clearTimeout(timer);
        }
    }, [count, endValue]);

    return <span>{text}: {count} sati</span>;
};