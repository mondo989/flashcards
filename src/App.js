import React from 'react';
import './App.css';

// const firebase = require('firebase/app');
const buttons = ['facebook', 'twitter', 'youtube'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Flashcard></Flashcard>
        <ActionsContainer></ActionsContainer>
        <LoggingButton></LoggingButton>
      </header>
    </div>
  );
}

function Flashcard() {
  return (
    <div className="Flash-card">      
      <div className="Flsh-card__contaainer">
        <div className="Flash-card__question">
          "What is the difference between an owl and a bunjee coard?"
        </div>
      </div>
    </div>
  );
} 

function ActionsContainer() {
  return (
    <div className="Actions-container">
      <div className="Actions-container__button-row">
      {/* TODO: Iterate through buttons as opposed to calling them in static */}
        <ActionButtonShowAnswer></ActionButtonShowAnswer>
      </div>
    </div>
  );
}

// These buttons shouldn't be hardcoded chief
function ActionButtonShowAnswer() {
  // document.querySelector("")
  
  return (
    <div className="Button" onClick={showAnswer}>
      <div className="Button__icon">X</div>
      <p>Show Answer</p>
    </div>
  )
}


class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

var showAnswer = function() {
  document.querySelector(".Flash-card").toggle();
  console.log("Click ayeee");
}

// firebase.initializeApp();

export default App;
