import React, { useState } from 'react';

const AnalyzerTestingTool = () => {
  const [testText, setTestText] = useState('');
  const [selectedAnalyzer, setSelectedAnalyzer] = useState('');
  const [results, setResults] = useState([]);

  const analyzers = [
    { name: 'analyzer1', type: 'custom' },
    { name: 'analyzer2', type: 'standard' },
  ];

  const testAnalyzer = () => {
    // Placeholder for testing analyzer logic
    const tokens = testText.split(' ').map((word, index) => ({
      token: word,
      position: index,
    }));
    setResults(tokens);
  };

  const viewJson = () => {
    const json = JSON.stringify({ testText, selectedAnalyzer, results }, null, 2);
    navigator.clipboard.writeText(json);
    alert("Test results copied to clipboard:\n" + json);
  };

  return (
    <div>
      <h2>Analyzer Testing Tool</h2>
      <input
        type="text"
        placeholder="Test Text"
        value={testText}
        onChange={(e) => setTestText(e.target.value)}
        className="border p-2 rounded"
      />
      <select
        value={selectedAnalyzer}
        onChange={(e) => setSelectedAnalyzer(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">Select Analyzer</option>
        {analyzers.map((analyzer) => (
          <option key={analyzer.name} value={analyzer.name}>
            {analyzer.name}
          </option>
        ))}
      </select>
      <button onClick={testAnalyzer} className="bg-blue-500 text-white p-2 rounded">
        Test Analyzer
      </button>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            Token: {result.token}, Position: {result.position}
          </li>
        ))}
      </ul>
      <button onClick={viewJson} className="bg-gray-500 text-white p-2 rounded">
        View JSON
      </button>
    </div>
  );
};

export default AnalyzerTestingTool;
