import { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ card, isFlipped, setIsFlipped }) => {
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        <div className={`Flashcard ${card.difficulty} ${isFlipped ? 'is-flipped' : ''}`} onClick={handleClick}>
            <div className="front">
                <div className="content">
                    <p>{!isFlipped && card.question}</p>
                    {!isFlipped && card.frontImage && <img src={card.frontImage} alt="front of card" />}
                </div>
            </div>
            <div className="back">
                <div className="content">
                    <p>{isFlipped && card.answer}</p>
                    {isFlipped && card.backImage && <img src={card.backImage} alt="back of card" />}
                </div>
            </div>
        </div>
    )
  }

export default Flashcard;