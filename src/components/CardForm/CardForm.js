import React, { useState } from 'react';
import { db } from '../../firebase';

const CardForm = () => {

  const [card, setCard] = useState({
    question: '',
    answer: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    db.collection('cards').add(card);
    setCard({
      question: '',
      answer: ''
    });
  };

  const handleChange = e => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  return (
    <div className='section'>
      <div className='container'>
        <h6>New Card</h6>
        <form onSubmit={handleSubmit}>
          <div className='input-field'>
            <input
              type='text'
              id='question'
              name='question'
              value={card.question}
              onChange={handleChange}
              placeholder='e.g. What is a level 3 Selector'
              className='validate'
              required
            />
            <label className='active' htmlFor='question'>
              Question
            </label>
          </div>
          <div className='input-field'>
            <input
              type='text'
              id='answer'
              name='answer'
              value={card.answer}
              onChange={handleChange}
              placeholder='e.g. A good one'
              className='validate'
              required
            />
            <label className='active' htmlFor='answer'>
              Answer
            </label>
          </div>
          <div>
            <button type='submit'>
              Add Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardForm;
