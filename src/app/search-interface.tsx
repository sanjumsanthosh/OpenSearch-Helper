import React, { useState } from 'react';

const SearchInterface = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [searchOptions, setSearchOptions] = useState({ matchType: 'all', fields: '' });

  const handleSearch = () => {
    // Placeholder for search logic
    alert(`Searching for "${searchQuery}" in indexes: ${selectedIndexes.join(', ')} with options: ${JSON.stringify(searchOptions)}`);
  };

  const viewJson = () => {
    const json = JSON.stringify({ searchQuery, selectedIndexes, searchOptions }, null, 2);
    navigator.clipboard.writeText(json);
    alert("Search configuration copied to clipboard:\n" + json);
  };

  return (
    <div>
      <h2>Basic Search Interface</h2>
      <input
        type="text"
        placeholder="Search Query"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Indexes (comma separated)"
        value={selectedIndexes.join(', ')}
        onChange={(e) => setSelectedIndexes(e.target.value.split(',').map(index => index.trim()))}
        className="border p-2 rounded"
      />
      <select
        value={searchOptions.matchType}
        onChange={(e) => setSearchOptions({ ...searchOptions, matchType: e.target.value })}
        className="border p-2 rounded"
      >
        <option value="all">Match All</option>
        <option value="any">Match Any</option>
      </select>
      <input
        type="text"
        placeholder="Fields to search (comma separated)"
        value={searchOptions.fields}
        onChange={(e) => setSearchOptions({ ...searchOptions, fields: e.target.value })}
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

export default SearchInterface;
