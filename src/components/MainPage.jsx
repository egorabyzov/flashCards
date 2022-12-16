import React from 'react';

export default function MainPage({ ques }) {
  return (
    <div className="container">
      {ques.map((el) => (
        <a href={`/theme/${el.id}`}>{el.them}</a>
      ))}
    </div>
  );
}
