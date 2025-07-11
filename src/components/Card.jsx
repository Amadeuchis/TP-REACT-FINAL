// src/components/Card.jsx
import React from 'react';

export default function Card({ title, image, vote }) {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '10px',
        width: '220px',
        padding: '12px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        backgroundColor: '#fff'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.04)';
        e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: '100%',
          height: '330px',
          objectFit: 'cover',
          borderRadius: '6px'
        }}
      />
      <h3
        style={{
          fontSize: '1.1rem',
          marginTop: '12px',
          marginBottom: '6px',
          textAlign: 'center'
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: '0.95rem', textAlign: 'center', color: '#444' }}>
        ⭐ {vote}
      </p>
    </div>
  );
}
