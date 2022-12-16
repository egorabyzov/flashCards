import React from 'react';

export default function MainPage({ ques }) {
  return (
    <div className="container" style={{ display: 'flex', marginTop: '60px', flexDirection: 'row' }}>
      {ques.map((el) => (
        <div className="card text-bg-primary mb-3" style={{ width: '24rem', marginLeft: '30px' }}>
          <div className="card-header">
            Flash card
            {' '}
            {el.id}
          </div>
          <div className="card-body" style={{ background: '#0dcaf0' }}>
            <a href={`/theme/${el.id}`} style={{ color: 'black', fontSize: '18px' }}>{el.them}</a>
            <p className="card-text" style={{ color: 'black' }}>
              Проверьте свои знания в теме
              {' '}
              {el.them}
              .
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
