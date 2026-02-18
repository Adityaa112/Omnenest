function Filter({ selectedCategory, setSelectedCategory, categories }) {
  return (
    <div style={{
      marginTop: '20px',
      marginBottom: '20px',
      padding: '15px',
      background: 'black',
      borderRadius: '4px'
    }}>
   
      <label style={{
        display: 'block',
        marginBottom: '15px',
        fontWeight: 'bold',
        color: '#eae1e1' // Dark text so it's readable on white
      }}>
        Filter by Category:
      </label>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: '8px 16px',
              border: '2px solid #0b0b0b',
              borderRadius: '20px',
              background: selectedCategory === category
                ? '#0b0c0c'
                : 'white',
              color: selectedCategory === category
                ? 'white'
                : '#0d0d0e',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filter;