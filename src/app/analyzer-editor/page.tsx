import React, { useState } from 'react';

const AnalyzerEditor = () => {
  const [analyzerConfig, setAnalyzerConfig] = useState({});
  const [jsonView, setJsonView] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnalyzerConfig({
      ...analyzerConfig,
      [name]: value,
    });
  };

  const viewJson = () => {
    const json = JSON.stringify(analyzerConfig, null, 2);
    navigator.clipboard.writeText(json);
    alert("Analyzer configuration copied to clipboard:\n" + json);
  };

  return (
    <div>
      <h2>Analyzer Editor</h2>
      <button onClick={() => setJsonView(!jsonView)} className="bg-gray-500 text-white p-2 rounded">
        {jsonView ? 'Switch to UI View' : 'Switch to JSON View'}
      </button>
      {jsonView ? (
        <textarea
          value={JSON.stringify(analyzerConfig, null, 2)}
          onChange={(e) => setAnalyzerConfig(JSON.parse(e.target.value))}
          className="w-full h-64 border p-2 rounded"
        />
      ) : (
        <div>
          <input
            type="text"
            name="name"
            placeholder="Analyzer Name"
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="type"
            placeholder="Analyzer Type"
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="tokenizer"
            placeholder="Tokenizer"
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="filter"
            placeholder="Filter"
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
        </div>
      )}
      <button onClick={viewJson} className="bg-gray-500 text-white p-2 rounded">
        View JSON
      </button>
    </div>
  );
};

export default AnalyzerEditor;
