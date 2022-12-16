import React from 'react';

export default function OneCard({ questions }) {


  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label"><h2/>{questions.question}</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <button type="submit" className="btn btn-primary">Ответить</button>
      
    </form>
  );
}
