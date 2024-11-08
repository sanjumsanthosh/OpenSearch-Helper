import React, { useState, useEffect } from 'react';

const MappingEditor = ({ selectedIndex }) => {
  const [mappings, setMappings] = useState({});
  const [newField, setNewField] = useState({ name: '', type: '' });
  const [jsonView, setJsonView] = useState(false);

  useEffect(() => {
    // Placeholder for fetching mappings logic
    const fetchedMappings = {
      properties: {
        field1: { type: 'text' },
        field2: { type: 'keyword' },
      },
    };
    setMappings(fetchedMappings);
  }, [selectedIndex]);

  const addField = () => {
    setMappings({
      ...mappings,
      properties: {
        ...mappings.properties,
        [newField.name]: { type: newField.type },
      },
    });
    setNewField({ name: '', type: '' });
  };

  const editField = (fieldName, fieldType) => {
    setMappings({
      ...mappings,
      properties: {
        ...mappings.properties,
        [fieldName]: { type: fieldType },
      },
    });
  };

  const viewJson = () => {
    const json = JSON.stringify(mappings, null, 2);
    navigator.clipboard.writeText(json);
    alert("Mappings copied to clipboard:\n" + json);
  };

  return (
    <div>
      <h2>Mapping Editor for {selectedIndex}</h2>
      <button onClick={() => setJsonView(!jsonView)} className="bg-gray-500 text-white p-2 rounded">
        {jsonView ? 'Switch to UI View' : 'Switch to JSON View'}
      </button>
      {jsonView ? (
        <textarea
          value={JSON.stringify(mappings, null, 2)}
          onChange={(e) => setMappings(JSON.parse(e.target.value))}
          className="w-full h-64 border p-2 rounded"
        />
      ) : (
        <div>
          <ul>
            {Object.keys(mappings.properties || {}).map((field) => (
              <li key={field}>
                <span>{field}</span>
                <input
                  type="text"
                  value={mappings.properties[field].type}
                  onChange={(e) => editField(field, e.target.value)}
                  className="border p-2 rounded"
                />
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Field Name"
            value={newField.name}
            onChange={(e) => setNewField({ ...newField, name: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Field Type"
            value={newField.type}
            onChange={(e) => setNewField({ ...newField, type: e.target.value })}
            className="border p-2 rounded"
          />
          <button onClick={addField} className="bg-blue-500 text-white p-2 rounded">
            Add Field
          </button>
        </div>
      )}
      <button onClick={viewJson} className="bg-gray-500 text-white p-2 rounded">
        View JSON
      </button>
    </div>
  );
};

export default MappingEditor;
