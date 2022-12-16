import React, { useState } from 'react';
import OneCard from './OneCard';

export default function AllCards({ questions }) {
const [answer, setAnswer] = useState('')
  const handler = (e) => {
    e.preventDefault();
    fetch(`/theme/${id}`)
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json;charSet=utf-8',
    //   },
    //   body: JSON.stringify({ number }),
    // })
      .then((res) => res.json())
      .then((data) => {
        // setNumber(data)
        setAnswer(data);
        // console.log(data);
      });
  };

  return (
    <div>
      {questions?.map((el) => <OneCard key={el.id} questions={el} />)}
      <button onClick={handler} type="submit" className="btn">Ответить</button>
    </div>
  );
}
