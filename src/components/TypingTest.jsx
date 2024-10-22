import React, { useState, useEffect, useRef } from 'react';
import './TypingTest.css';

const sampleText = "take some through person not increase up word what fact world a move real go about who in place other there could word line through few real work no nation by child the life face small who";

function TypingTest({ testType, testDuration, testStarted, startTest, finishTest }) {
  const [text, setText] = useState(sampleText);
  const [input, setInput] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(testDuration);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const inputRef = useRef(null);

  useEffect(() => {
    if (testStarted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      finishTest({ wpm, accuracy });
    }
  }, [testStarted, timeLeft]);

  useEffect(() => {
    if (testStarted) {
      inputRef.current.focus();
    }
  }, [testStarted]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.endsWith(' ')) {
      const words = text.split(' ');
      const typedWord = value.trim();
      
      if (typedWord === words[currentWordIndex]) {
        setCurrentWordIndex(currentWordIndex + 1);
        setInput('');
        
        const typedWords = currentWordIndex + 1;
        const newWpm = Math.round((typedWords / (testDuration - timeLeft)) * 60);
        setWpm(newWpm);
        
        const correctChars = words.slice(0, currentWordIndex + 1).join(' ').length;
        const totalChars = value.length * (currentWordIndex + 1);
        const newAccuracy = Math.round((correctChars / totalChars) * 100);
        setAccuracy(newAccuracy);
      }
    }
  };

  const renderText = () => {
    const words = text.split(' ');
    return words.map((word, index) => (
      <span
        key={index}
        className={
          index === currentWordIndex
            ? 'current'
            : index < currentWordIndex
            ? 'completed'
            : ''
        }
      >
        {word}{' '}
      </span>
    ));
  };

  return (
    <div className="typing-test">
      <div className="stats">
        <div>WPM: {wpm}</div>
        <div>Accuracy: {accuracy}%</div>
        <div>Time: {timeLeft}s</div>
      </div>
      <div className="text-display">{renderText()}</div>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={handleInputChange}
        disabled={!testStarted || timeLeft === 0}
        placeholder={testStarted ? '' : 'Click here to start typing...'}
        onFocus={() => !testStarted && startTest()}
      />
    </div>
  );
}

export default TypingTest;