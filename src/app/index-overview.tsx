import React, { useState, useEffect } from 'react';

const IndexOverview = () => {
  const [indexes, setIndexes] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    // Placeholder for fetching indexes logic
    const fetchedIndexes = [
      { name: 'index1', documentCount: 100, size: '1GB', status: 'open' },
      { name: 'index2', documentCount: 200, size: '2GB', status: 'closed' },
    ];
    setIndexes(fetchedIndexes);
  }, []);

  const viewMappings = (indexName) => {
    // Placeholder for viewing mappings logic
    setSelectedIndex(indexName);
  };

  const viewJson = () => {
    const json = JSON.stringify(indexes, null, 2);
    navigator.clipboard.writeText(json);
    alert("Indexes copied to clipboard:\n" + json);
  };

  return (
    <div>
      <h2>Index Overview</h2>
      <ul>
        {indexes.map((index) => (
          <li key={index.name}>
            <span onClick={() => viewMappings(index.name)} style={{ cursor: 'pointer', color: 'blue' }}>
              {index.name}
            </span>
            <p>Document Count: {index.documentCount}</p>
            <p>Size: {index.size}</p>
            <p>Status: {index.status}</p>
          </li>
        ))}
      </ul>
      <button onClick={viewJson} className="bg-gray-500 text-white p-2 rounded">
        View JSON
      </button>
      {selectedIndex && <p>Viewing mappings for: {selectedIndex}</p>}
    </div>
  );
};

export default IndexOverview;
