import React, { useState } from 'react';

const IndexManagement = () => {
  const [indexes, setIndexes] = useState([
    { name: 'index1', documentCount: 100, size: '1GB', status: 'open' },
    { name: 'index2', documentCount: 200, size: '2GB', status: 'closed' },
  ]);
  const [newIndexName, setNewIndexName] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const addIndex = () => {
    setIndexes([...indexes, { name: newIndexName, documentCount: 0, size: '0GB', status: 'open' }]);
    setNewIndexName('');
  };

  const duplicateIndex = (indexName) => {
    const indexToDuplicate = indexes.find(index => index.name === indexName);
    if (indexToDuplicate) {
      setIndexes([...indexes, { ...indexToDuplicate, name: `${indexToDuplicate.name}_copy` }]);
    }
  };

  const reindex = (indexName) => {
    // Placeholder for reindex logic
    alert(`Reindexing ${indexName}`);
  };

  const toggleIndexStatus = (indexName) => {
    setIndexes(indexes.map(index => 
      index.name === indexName ? { ...index, status: index.status === 'open' ? 'closed' : 'open' } : index
    ));
  };

  const deleteIndex = (indexName) => {
    if (window.confirm(`Are you sure you want to delete ${indexName}?`)) {
      setIndexes(indexes.filter(index => index.name !== indexName));
    }
  };

  const viewJson = () => {
    const json = JSON.stringify(indexes, null, 2);
    navigator.clipboard.writeText(json);
    alert("Indexes copied to clipboard:\n" + json);
  };

  return (
    <div>
      <h2>Index Management</h2>
      <input
        type="text"
        placeholder="New Index Name"
        value={newIndexName}
        onChange={(e) => setNewIndexName(e.target.value)}
        className="border p-2 rounded"
      />
      <button onClick={addIndex} className="bg-blue-500 text-white p-2 rounded">
        Add Index
      </button>
      <ul>
        {indexes.map((index) => (
          <li key={index.name}>
            <span style={{ cursor: 'pointer', color: 'blue' }}>
              {index.name}
            </span>
            <p>Document Count: {index.documentCount}</p>
            <p>Size: {index.size}</p>
            <p>Status: {index.status}</p>
            <button onClick={() => duplicateIndex(index.name)} className="bg-green-500 text-white p-2 rounded">
              Duplicate
            </button>
            <button onClick={() => reindex(index.name)} className="bg-yellow-500 text-white p-2 rounded">
              Reindex
            </button>
            <button onClick={() => toggleIndexStatus(index.name)} className="bg-gray-500 text-white p-2 rounded">
              {index.status === 'open' ? 'Close' : 'Open'}
            </button>
            <button onClick={() => deleteIndex(index.name)} className="bg-red-500 text-white p-2 rounded">
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button onClick={viewJson} className="bg-gray-500 text-white p-2 rounded">
        View JSON
      </button>
      {selectedIndex && <p>Selected Index: {selectedIndex}</p>}
    </div>
  );
};

export default IndexManagement;
