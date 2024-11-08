import React, { useState } from 'react';

const AdvancedSearch = () => {
  const [highlighting, setHighlighting] = useState(false);
  const [scoring, setScoring] = useState('');
  const [pagination, setPagination] = useState({ page: 1, size: 10 });
  const [sortOptions, setSortOptions] = useState('');

  const handleSearch = () => {
    // Placeholder for search logic
    alert(`Advanced search with options: ${JSON.stringify({ highlighting, scoring, pagination, sortOptions })}`);
  };

  const viewJson = () => {
    const json = JSON.stringify({ highlighting, scoring, pagination, sortOptions }, null, 2);
    navigator.clipboard.writeText(json);
    alert("Advanced search configuration copied to clipboard:\n" + json);
  };

  return (
    <div>
      <h2>Advanced Search Configuration</h2>
      <label>
        <input
          type="checkbox"
          checked={highlighting}
          onChange={(e) => setHighlighting(e.target.checked)}
        />
        Highlighting
      </label>
      <input
        type="text"
        placeholder="Scoring and Boosting"
        value={scoring}
        onChange={(e) => setScoring(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Page"
        value={pagination.page}
        onChange={(e) => setPagination({ ...pagination, page: parseInt(e.target.value) })}
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Page Size"
        value={pagination.size}
        onChange={(e) => setPagination({ ...pagination, size: parseInt(e.target.value) })}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Sort Options"
        value={sortOptions}
        onChange={(e) => setSortOptions(e.target.value)}
        className="border p-2 rounded"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">
        Search
      </button>
      <button onClick={viewJson} className="bg-gray-500 text-white p-2 rounded">
        View JSON
      </button>
    </div>
  );
};

export default AdvancedSearch;
