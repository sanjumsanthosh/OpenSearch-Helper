import React, { useState } from 'react';

const LoadingIndicators = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState(null);
  const [tooltip, setTooltip] = useState(null);
  const [helpText, setHelpText] = useState(null);

  const viewJson = () => {
    const json = JSON.stringify({ loading, error, notification, tooltip, helpText }, null, 2);
    navigator.clipboard.writeText(json);
    alert("Data copied to clipboard:\n" + json);
  };

  return (
    <div>
      <h2>Loading Indicators</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {notification && <p style={{ color: 'green' }}>{notification}</p>}
      {tooltip && <p style={{ color: 'blue' }}>{tooltip}</p>}
      {helpText && <p style={{ color: 'gray' }}>{helpText}</p>}
      <button onClick={viewJson} className="bg-gray-500 text-white p-2 rounded">
        View JSON
      </button>
    </div>
  );
};

export default LoadingIndicators;
