import React from 'react';

function SortAndFilter({ sortBy, setSortBy }) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Stock Market Dashboard</h1>

      {/* Sort Controls */}
      <div
        style={{
          marginTop: '20px',
          marginBottom: '20px',
          padding: '15px',
          background: '#000000',
          borderRadius: '4px'
        }}
      >
        <label
          style={{
            marginRight: '10px',
            fontWeight: 'bold',
            color: 'white'
          }}
        >
          Sort By:
        </label>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #171616'
          }}
        >
          <option value="default">Default</option>
          <option value="date-latest">Date: Latest First</option>
          <option value="date-oldest">Date: Oldest First</option>
          <option value="close-high-low">Close: High to Low</option>
          <option value="close-low-high">Close: Low to High</option>
          <option value="volume-high-low">Volume: High to Low</option>
          <option value="open-high-low">Open: High to Low</option>
        </select>
      </div>
    </div>
  );
}

export default SortAndFilter;
