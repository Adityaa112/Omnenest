import React, { useState } from 'react';
function SortAndFilter({ sortBy, setSortBy }) {
    return (
        <div style={{ padding: '20px' }}>
            <h1>E-commerce Product Catalog</h1>

            {/* Sort Controls */}
            <div style={{
                marginTop: '20px',
                marginBottom: '20px',
                padding: '15px',
                background: '#000000',
                borderRadius: '4px'
            }}>
                <label style={{
                    marginRight: '10px',
                    fontWeight: 'bold'
                }}>
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
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                    <option value="name-az">Name: A to Z</option>
                    <option value="rating">Rating: High to Low</option>
                </select>
            </div>
        </div>

    );
}

export default SortAndFilter;