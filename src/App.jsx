import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TypingTest from './components/TypingTest';
import TestOptions from './components/TestOptions';
import ResultsChart from './components/ResultsChart';
import './App.css';

function App() {
  const [testType, setTestType] = useState('time');
  const [testDuration, setTestDuration] = useState(30);
  const [testStarted, setTestStarted] = useState(false);
  const [testFinished, setTestFinished] = useState(false);
  const [results, setResults] = useState(null);

  const startTest = () => {
    setTestStarted(true);
    setTestFinished(false);
  };

  const finishTest = (testResults) => {
    setTestFinished(true);
    setResults(testResults);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <TestOptions
          testType={testType}
          setTestType={setTestType}
          testDuration={testDuration}
          setTestDuration={setTestDuration}
        />
        <TypingTest
          testType={testType}
          testDuration={testDuration}
          testStarted={testStarted}
          startTest={startTest}
          finishTest={finishTest}
        />
        {testFinished && results && <ResultsChart results={results} />}
      </main>
    </div>
  );
}

export default App;