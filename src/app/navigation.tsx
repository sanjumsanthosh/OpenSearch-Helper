import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  const viewJson = () => {
    const json = JSON.stringify({ message: "Navigation JSON" }, null, 2);
    navigator.clipboard.writeText(json);
    alert("Navigation JSON copied to clipboard:\n" + json);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/index-overview">
            <a>Index Overview</a>
          </Link>
        </li>
        <li>
          <Link href="/index-management">
            <a>Index Management</a>
          </Link>
        </li>
        <li>
          <Link href="/mapping-editor">
            <a>Mapping Editor</a>
          </Link>
        </li>
        <li>
          <Link href="/analyzer-dashboard">
            <a>Analyzer Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/analyzer-editor">
            <a>Analyzer Editor</a>
          </Link>
        </li>
        <li>
          <Link href="/analyzer-testing-tool">
            <a>Analyzer Testing Tool</a>
          </Link>
        </li>
        <li>
          <Link href="/search-interface">
            <a>Search Interface</a>
          </Link>
        </li>
        <li>
          <Link href="/advanced-search">
            <a>Advanced Search</a>
          </Link>
        </li>
        <li>
          <Link href="/search-results">
            <a>Search Results</a>
          </Link>
        </li>
        <li>
          <Link href="/multi-index-search">
            <a>Multi-Index Search</a>
          </Link>
        </li>
        <li>
          <Link href="/loading-indicators">
            <a>Loading Indicators</a>
          </Link>
        </li>
        <li>
          <Link href="/theming">
            <a>Theming</a>
          </Link>
        </li>
      </ul>
      <button onClick={viewJson} className="bg-gray-500 text-white p-2 rounded mt-4">
        View JSON
      </button>
    </nav>
  );
};

export default Navigation;
