import React from 'react';
import './TestOptions.css';

function TestOptions({ testType, setTestType, testDuration, setTestDuration }) {
  return (
    <div className="test-options">
      <button className={testType === 'punctuation' ? 'active' : ''} onClick={() => setTestType('punctuation')}>@ punctuation</button>
      <button className={testType === 'numbers' ? 'active' : ''} onClick={() => setTestType('numbers')}># numbers</button>
      <button className={testType === 'time' ? 'active' : ''} onClick={() => setTestType('time')}>🕒 time</button>
      <button className={testType === 'words' ? 'active' : ''} onClick={() => setTestType('words')}>A words</button>
      <button className={testType === 'quote' ? 'active' : ''} onClick={() => setTestType('quote')}>❝ quote</button>
      <button className={testType === 'zen' ? 'active' : ''} onClick={() => setTestType('zen')}>▲ zen</button>
      <button className={testType === 'custom' ? 'active' : ''} onClick={() => setTestType('custom')}>✎ custom</button>
      {testType === 'time' && (
        <div className="time-options">
          <button className={testDuration === 15 ? 'active' : ''} onClick={() => setTestDuration(15)}>15</button>
          <button className={testDuration === 30 ? 'active' : ''} onClick={() => setTestDuration(30)}>30</button>
          <button className={testDuration === 60 ? 'active' : ''} onClick={() => setTestDuration(60)}>60</button>
          <button className={testDuration === 120 ? 'active' : ''} onClick={() => setTestDuration(120)}>120</button>
        </div>
      )}
    </div>
  );
}

export default TestOptions;