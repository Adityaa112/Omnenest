export function getSortedStocks(stocks, sortBy) {
  const sortedStocks = [...stocks];

  if (sortBy === 'date-latest') {
    return sortedStocks.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  }

  if (sortBy === 'date-oldest') {
    return sortedStocks.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
  }

  if (sortBy === 'close-high-low') {
    return sortedStocks.sort((a, b) => b.close - a.close);
  }

  if (sortBy === 'close-low-high') {
    return sortedStocks.sort((a, b) => a.close - b.close);
  }

  if (sortBy === 'volume-high-low') {
    return sortedStocks.sort((a, b) => b.volume - a.volume);
  }

  if (sortBy === 'open-high-low') {
    return sortedStocks.sort((a, b) => b.open - a.open);
  }

  return sortedStocks;
}
