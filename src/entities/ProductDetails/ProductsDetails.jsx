import { useState } from 'react';
import classes from './ProductsDetails.module.css';

export const ProductDetails = ({ product }) => {
  const [inBasket, setInBasket] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.imageWrapper}>
        <img 
          src={product.image} 
          alt={product.title} 
          className={classes.image} 
        />
      </div>

      <div className={classes.info}>
        <h2 className={classes.title}>{product.title}</h2>
        <span className={classes.category}>{product.category}</span>
     
        <p className={classes.description}>{product.description}</p>
        <p className={classes.price}>{product.price} ₽</p>

        <button
          className={!inBasket ? classes.addBtn : classes.removeBtn}
          onClick={() => setInBasket((prev) => !prev)}
        >
          {!inBasket ? 'Добавить в корзину' : 'Удалить из корзины'}
        </button>
      </div>
    </div>
  );
};
