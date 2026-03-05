import { useEffect, useState } from 'react';
import './App.css'
import { getMockCards } from './utils/mockService';
import { Card } from './components/card/card';

function App() {
  const [actualCards, setActualCards] = useState([]);
  useEffect(() => {
    const fullCards = getMockCards();

    setActualCards(fullCards);
  },[])

  const changeInput = (event) => {
    const fullCards = getMockCards();

    setActualCards(fullCards.filter(card => card.title.toLowerCase().includes(event.target.value.toLowerCase())));
  }


  return (
    <>
      <input type='text' onChange={changeInput}/>
      {
        actualCards.map((card)=> <Card card={card} key={card.id} /> )
      }
    </>
  )
}

export default App
