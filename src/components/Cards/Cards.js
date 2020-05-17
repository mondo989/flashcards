import React from 'react';
import { db } from '../../firebase'; 
import '../Cards/Cards.css';


const Cards = ({ cards, loading }) => {
	if(loading) {
		return <h2>Loading...</h2>
	}

	const deleteCard = id => {
    db.collection('cards')
      .doc(id)
      .delete();
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
				<div className='button' onClick={showAnswer} style={{display: 'background: green; color: white; margin: 0 auto; padding: 30px 0'}}>
					<p>Show Answer</p>
				</div>
				
				<ul>
					{cards.map(card => (
						<li key={card.id}>
							<div
								onClick={() => deleteCard(card.id)}
								className='card-delete'
							>
								Delete Card
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
  );
};

var showAnswer = function() {
  document.querySelector(".Flash-card__container").classList.toggle("flipped");
}

export default Cards;