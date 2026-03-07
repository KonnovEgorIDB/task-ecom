import { useEffect, useState } from 'react';
import './App.css'
import { getProducts } from './utils/mockService';
import { Card } from './components/card/card';

function App() {
  const [allCards, setAllCards] = useState([]);
  const [actualCards, setActualCards] = useState([]);
  const [search, setSearch] = useState('');
  

  useEffect(() => {
    const loadCards = async () => {
      const cards = await getProducts();

      setAllCards(cards);
      setActualCards(cards);
    };

    loadCards();
    }, []);

  const changeInput = (event) => {
    const value = event.target.value.toLowerCase();
    setSearch(value);
    setActualCards(allCards.filter(card => card.title.toLowerCase().includes(value)));
  }


  return (
    <>
      <input type='text' onChange={changeInput} value={search}/>
      <div className='catalog'>
        {
          actualCards.map((card)=> <Card card={card} key={card.id} /> )
        }
      </div>
    </>
  )
}

export default App
