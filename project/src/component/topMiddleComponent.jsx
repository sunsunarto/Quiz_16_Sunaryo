import React, { useState } from 'react';
import logoK from './assets/Screenshot_2024-11-15_124027-removebg-preview.png';
import './styleTopMiddleComponent.css'
import iconImage from './assets/image-icon-free-png.png'
import iconMic from './assets/mic-removebg-preview.png'
import iconSmile from './assets/emoji-icon-04-512-removebg-preview.png'

const TopMiddleComponent = () => {
    const [text, setText] = useState('');
    const [limit, setLimit] = useState(150);
    const [history, setHistory] = useState([]);

    const handleChange = (event) => {
        if (event.target.value.split(' ').length <= limit) {
            setText(event.target.value);
        } else {
            alert('Word limit exceeded!');
        }
    }

    const handleShare = () => {
        const currentDate = new Date().toLocaleDateString();
        const newHistoryEntry = { text: text, date: currentDate };
        setHistory([...history, newHistoryEntry]);
        setText('');
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleShare();
        }
    }
    return (
        <div className="topMiddlecontainer">
            <div className="logoAndtextarea">
                <div className="logo">
                    <img src={logoK} alt="" />
                </div>
                <div className="textArea">
                    <textarea value={text} onChange={handleChange} cols={50} rows={2} placeholder={`You can input up to ${limit} words`} />
                    <p>{text.length}/150</p>
                </div>
            </div>
            <div className="iconGroup">
                <div className="icons">
                    <img src={iconImage} alt="" />
                    <img src={iconMic} alt="" />
                    <img src={iconSmile} alt="" />
                </div>
                <div className="buttonShare">
                    <button onClick={handleShare}>Share</button>
                </div>
            </div>
            <div className="whatHappenAndContent">
                <p>What's happening</p>
                <ul>
                    {history.map((entry, index) => (
                        <li key={index}>{entry.text} - {entry.date} (Account: {entry.account})</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TopMiddleComponent;