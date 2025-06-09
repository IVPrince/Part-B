'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p style={{ fontSize: '18px', color: '#333' }}>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          backgroundColor: '#ff66a3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          padding: '8px 16px',
          cursor: 'pointer'
        }}
      >
        Increase
      </button>
    </div>
  );
}
