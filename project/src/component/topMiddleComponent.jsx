import React, { useState } from 'react';
import logoK from './assets/Screenshot_2024-11-15_124027-removebg-preview.png';
import './styleTopMiddleComponent.css'

const TopMiddleComponent = () => {
    const [text, setText] = useState('');
    const [limit, setLimit] = useState(150); // Set the word limit here

    const handleChange = (event) => {
        if (event.target.value.split(' ').length <= limit) {
            setText(event.target.value);
        }else {
            alert('Word limit exceeded!');
        };
    }

    return (
        <div className="logo">
            <img src={logoK} alt="" /> 
            <div className="textArea">
                <textarea value={text} onChange={handleChange} cols={50} rows={2} placeholder={`You can input up to ${limit} words`} />
                <p>{text.length}/150</p>
            </div>
        </div>
    );
};

export default TopMiddleComponent;