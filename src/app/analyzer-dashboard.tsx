import React, { useState, useEffect } from 'react';

const AnalyzerDashboard = () => {
  const [analyzers, setAnalyzers] = useState([]);
  const [newAnalyzer, setNewAnalyzer] = useState({ name: '', type: '' });
  const [selectedAnalyzer, setSelectedAnalyzer] = useState(null);

  useEffect(() => {
    // Placeholder for fetching analyzers logic
    const fetchedAnalyzers = [
      { name: 'analyzer1', type: 'custom' },
      { name: 'analyzer2', type: 'standard' },
    ];
    setAnalyzers(fetchedAnalyzers);
  }, []);

  const addAnalyzer = () => {
    setAnalyzers([...analyzers, newAnalyzer]);
    setNewAnalyzer({ name: '', type: '' });
  };

  const editAnalyzer = (analyzerName, analyzerType) => {
    setAnalyzers(analyzers.map(analyzer => 
      analyzer.name === analyzerName ? { ...analyzer, type: analyzerType } : analyzer
    ));
  };

  const viewJson = () => {
    const json = JSON.stringify(analyzers, null, 2);
    navigator.clipboard.writeText(json);
    alert("Analyzers copied to clipboard:\n" + json);
  };

  return (
    <div>
      <h2>Analyzer Dashboard</h2>
      <input
        type="text"
        placeholder="Analyzer Name"
        value={newAnalyzer.name}
        onChange={(e) => setNewAnalyzer({ ...newAnalyzer, name: e.target.value })}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Analyzer Type"
        value={newAnalyzer.type}
        onChange={(e) => setNewAnalyzer({ ...newAnalyzer, type: e.target.value })}
        className="border p-2 rounded"
      />
      <button onClick={addAnalyzer} className="bg-blue-500 text-white p-2 rounded">
        Add Analyzer
      </button>
      <ul>
        {analyzers.map((analyzer) => (
          <li key={analyzer.name}>
            <span style={{ cursor: 'pointer', color: 'blue' }}>
              {analyzer.name}
            </span>
            <p>Type: {analyzer.type}</p>
            <input
              type="text"
              value={analyzer.type}
              onChange={(e) => editAnalyzer(analyzer.name, e.target.value)}
              className="border p-2 rounded"
            />
          </li>
        ))}
      </ul>
      <button onClick={viewJson} className="bg-gray-500 text-white p-2 rounded">
        View JSON
      </button>
      {selectedAnalyzer && <p>Selected Analyzer: {selectedAnalyzer}</p>}
    </div>
  );
};

export default AnalyzerDashboard;
