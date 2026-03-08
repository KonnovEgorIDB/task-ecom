import { useEffect, useState } from 'react';
import { getProducts } from '../../entities/mockService';
import { ProductList } from '../../widgets/ProductList/ProductList';
import classes from './CatalogPage.module.css'; 

export const CatalogPage = () => {
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
    setActualCards(
      allCards.filter((card) => card.title.toLowerCase().includes(value))
    );
  };
  return(
    <div className={classes.pageContainer}>
      <h1 className={classes.pageTitle}>Каталог товаров</h1>
      <input 
        type="text" 
        className={classes.searchInput} 
        onChange={changeInput} 
        value={search} 
        placeholder='Введите название товара..' 
      />
      <ProductList cards={actualCards} />
    </div>
  );
  
}