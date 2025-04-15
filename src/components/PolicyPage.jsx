import React from 'react';

function PolicyPage({ title, content }) {
  return (
    <div className="policy-page">
      <h2>{title}</h2>
      <ul className="policy-list">
        {content.map((item, index) => (
          <li key={index}>
            <strong>{index + 1}.</strong> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PolicyPage;
