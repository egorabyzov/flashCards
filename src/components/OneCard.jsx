import React, { useEffect, useState } from 'react';

export default function OneCard({ questions }) {
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState(null);

  const submitHa = (e) => {
    e.preventDefault();
    if (input.toLowerCase() === questions.answer.toLowerCase()) {
      setAnswer('Верный ответ');
    } else {
      setAnswer('Неверный ответ');
    }
    setInput('');
  };

  return (
    <div>
      <form onSubmit={submitHa}>
        <div
          className="mb-3"
          style={{
            display: 'flex',
            width: '35rem',
            margin: 'auto',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '50px',
          }}
        >
          <label htmlFor="exampleInputEmail1" className="form-label">
            <h2 />
            {questions.question}
          </label>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <br />
          <button type="submit" className="btn btn-info">Ответить</button>
          <br />
          {answer}
        </div>
      </form>
    </div>
  );
}
