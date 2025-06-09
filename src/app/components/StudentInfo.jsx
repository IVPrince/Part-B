'use client';
import { useState } from 'react';

export default function StudentInfo() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Student Name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          marginRight: '10px'
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: '#ff66a3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          padding: '8px 16px',
          cursor: 'pointer'
        }}
      >
        Submit
      </button>
    </form>
  );
}
