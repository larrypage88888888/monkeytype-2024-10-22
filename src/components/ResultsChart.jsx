import React from 'react';
import './ResultsChart.css';

function ResultsChart({ results }) {
  return (
    <div className="results-chart">
      <h2>Test Results</h2>
      <div className="chart-container">
        <div className="chart-bar" style={{ height: `${results.wpm}%` }}>
          <span className="chart-label">WPM</span>
          <span className="chart-value">{results.wpm}</span>
        </div>
        <div className="chart-bar" style={{ height: `${results.accuracy}%` }}>
          <span className="chart-label">Accuracy</span>
          <span className="chart-value">{results.accuracy}%</span>
        </div>
      </div>
    </div>
  );
}

export default ResultsChart;