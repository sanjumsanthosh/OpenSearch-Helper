import React, { useState } from 'react';

const MultiIndexSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTargets, setSearchTargets] = useState([]);
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Placeholder for search logic
    const mockResults = searchTargets.map(target => ({
      target,
      results: [{ _score: Math.random(), _source: { title: `Result from ${target}` } }]
    }));
    setResults(mockResults);
  };

  const viewJson = () => {
    const json = JSON.stringify({ searchQuery, searchTargets, results }, null, 2);
    navigator.clipboard.writeText(json);
    alert("Search configuration and results copied to clipboard:\n" + json);
  };

  return (
    <div>
      <h2>Multi-Index/Multi-Config Search</h2>
      <input
        type="text"
        placeholder="Search Query"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Search Targets (comma separated)"
        value={searchTargets.join(', ')}
        onChange={(e) => setSearchTargets(e.target.value.split(',').map(target => target.trim()))}
        className="border p-2 rounded"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">
        Search
      </button>
      <button onClick={viewJson} className="bg-gray-500 text-white p-2 rounded">
        View JSON
      </button>
      <div>
        {results.map((result, index) => (
          <div key={index} className="border p-2 rounded mb-2">
            <h3>Results for {result.target}</h3>
            <ul>
              {result.results.map((res, idx) => (
                <li key={idx}>
                  <p>Relevance Score: {res._score}</p>
                  <p>Document: {JSON.stringify(res._source)}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiIndexSearch;
