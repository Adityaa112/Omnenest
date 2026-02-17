import { useState } from 'react';
import SortAndFilter from './SortAndFilter';
import { stockData } from './data/stockData';
import { getSortedStocks } from './utils/sortStocks';

function App() {
  const [sortBy, setSortBy] = useState('default');

  const sortedStocks = getSortedStocks(stockData, sortBy);

  return (
    <div>
      <SortAndFilter sortBy={sortBy} setSortBy={setSortBy} />

      {/* FLEX CONTAINER */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '15px',
          padding: '10px'
        }}
      >
        {sortedStocks.map(stock => (
          <div
            key={stock.id}
            style={{
              border: '1px solid black',
              padding: '10px',
              width: '250px'
            }}
          >
            <img src={stock.image} width="70" alt="stock" />

            <div>Date: {stock.date}</div>
            <div>Open: {stock.open}</div>
            <div>High: {stock.high}</div>
            <div>Low: {stock.low}</div>
            <div>Close: {stock.close}</div>
            <div>Volume: {stock.volume.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
