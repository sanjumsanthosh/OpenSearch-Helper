import React, { useState } from 'react';

const SearchResults = ({ results }) => {
  const [viewJson, setViewJson] = useState(false);

  const handleViewJson = () => {
    const json = JSON.stringify(results, null, 2);
    navigator.clipboard.writeText(json);
    alert("Search results copied to clipboard:\n" + json);
  };

  return (
    <div>
      <h2>Search Results</h2>
      <button onClick={() => setViewJson(!viewJson)} className="bg-gray-500 text-white p-2 rounded">
        {viewJson ? 'Switch to List View' : 'View JSON'}
      </button>
      {viewJson ? (
        <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(results, null, 2)}</pre>
      ) : (
        <ul>
          {results.map((result, index) => (
            <li key={index} className="border p-2 rounded mb-2">
              <p>Relevance Score: {result._score}</p>
              <p>Document: {JSON.stringify(result._source)}</p>
              <button onClick={() => alert(JSON.stringify(result._source, null, 2))} className="bg-blue-500 text-white p-2 rounded">
                View Full Document
              </button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleViewJson} className="bg-gray-500 text-white p-2 rounded">
        Copy JSON
      </button>
    </div>
  );
};

export default SearchResults;
