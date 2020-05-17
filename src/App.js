import React, {useState, useEffect} from 'react';
import Cards from './components/Cards/Cards';
import CardForm from './components/CardForm/CardForm';
import Pagination from './components/Pagination/Pagination';
import { db } from './firebase';


const App = () => {
  const [cards, setCards] = useState([]);
  const [loading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(1);

  useEffect(() => {
    const unsub = db.collection('cards').onSnapshot(snapshot => {
      const allCards = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setCards(allCards);
      console.log("These are ubsub" + allCards); // Delete
    });
    return () => {
      console.log('cleanup');
      unsub();
    };
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  var testing = function() {
    db.collection("cards").doc('Y8e1VcsZ6f8cmUf9WDxx').update({
      question: "Howdy dide?",
      answer: "It was me.",
      // timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
  }
  
  testing()

  return (
    <div>
      <h1>=Flashcards=</h1>
      <Cards cards={currentCards} loading={loading} />
      <Pagination 
        cardsPerPage={cardsPerPage} 
        totalCards={cards.length}
        paginate={paginate}
      />
      <hr />
      <CardForm />

    </div>
  );
};

export default App;
