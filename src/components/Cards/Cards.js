import React, { useState } from 'react';
import { db } from '../../firebase'; 
import '../Cards/Cards.css';
import deleteButton from '../Cards/delete.svg';
import editButton from '../Cards/edit.svg';


const Cards = ({ cards, loading }) => {
	const [card, setCard] = useState({
    question: '',
    answer: ''
	});

	if(loading) {
		return <h2>Loading...</h2>
	}

	const deleteCard = id => {
    db.collection('cards')
      .doc(id)
      .delete();
	};

	const editCard = id => {

	};

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
		<div>
			<div className="Flash-card Flash-card__container">      
				<nav>
					<div className="nav-question">Question</div>
					<div className="nav-answer">Answer</div>
					<div className="Flash-card__tags">Tags: 
						<a href="#!">#HTML</a>
						<a href="#!">#CSS</a>
					</div>
				</nav>
				<div className="Flash-card__content">
					<div className="Flash-card__question">
						{cards.map(card => (
							<div key={card.id}>
								{card.question}
							</div>
						))}
					</div>
					<div className="Flash-card__answer">
						{cards.map(card => (
							<div key={card.id}>
								{card.answer}
							</div>
						))}
					</div>
				</div>
				<div className="Flash-card__date-added">
					<p>Date Added: <span>05/04/2020</span></p>
				</div>
			</div>
			<div className='FooterActions'>
				{cards.map(card => (
					<div key={card.id} className='card-edit'>
						<form onSubmit={handleSubmit}>
							<div className='input-field'>
								<input
									type='text'
									id='question'
									name='question'
									// value={card.question}
									onChange={handleChange}
									placeholder={card.question}
									className='validate'
									required
								/>
							</div>
							<div className='input-field'>
								<input
									type='text'
									id='answer'
									name='answer'
									// value={card.answer}
									onChange={handleChange}
									placeholder={card.answer}
									className='validate'
									required
								/>
							</div>
							<div>
								<button type='submit'>
									Edit Card
								</button>
							</div>
						</form>

								{/* <img src={editButton}/> */}
					</div>
				))}

				<div className='button' onClick={showAnswer} style={{display: 'background: green; color: white; margin: 0 auto; padding: 30px 0'}}>
					<p>Show Answer</p>
				</div>

				{cards.map(card => (
					<div key={card.id} className='card-delete'>
						<div
							onClick={() => deleteCard(card.id)}
							>
								<img src={deleteButton}/>
						</div>
					</div>
				))}
			</div>
		</div>
  );
};

var showAnswer = function() {
  document.querySelector(".Flash-card__container").classList.toggle("flipped");
}

export default Cards;