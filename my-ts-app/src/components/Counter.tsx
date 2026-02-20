import { useState } from 'react';

function Counter() {
  // 1. State Definitions
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>('Hello');
  const [inputValue, setInputValue] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(true);

  // 2. Logic Handlers
  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const updateText = () => {
    setText(inputValue);
    setInputValue('');
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // 3. Render
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>React State Lab</h1>
      {isVisible && (
        <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <p><strong>Message:</strong> {text}</p>
          <p><strong>Current Count:</strong> {count}</p>
        </div>
      )}
      <button onClick={increment} style={{ marginRight: '10px' }}>
        Increment
      </button>
      <button onClick={decrement} style={{ marginRight: '10px' }}>
        Decrement
      </button>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Enter new text"
        style={{ marginRight: '10px' }}
      />
      <button onClick={updateText} style={{ marginRight: '10px' }}>
        Update Text
      </button>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Details
      </button>
    </div>
  );
}

export default Counter;