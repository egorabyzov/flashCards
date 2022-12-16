import React, { useState } from 'react';
import OneCard from './OneCard';

export default function AllCards({ questions }) {
  return (
    <div>
      {questions?.map((el) => <OneCard key={el.id} questions={el} />)}
    </div>
  );
}
