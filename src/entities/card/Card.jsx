import { useState } from 'react';
import classes from './card.module.css';
import { Modal } from '../modal/Modal';
import { ProductDetails } from '../ProductDetails/ProductsDetails';

export const Card = ({ card }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = (e) => {
    if(e) {
      e.stopPropagation();
    }
    setIsOpenModal(false);
  };

  return (
    <>
      <div className={classes.card} onClick={openModal}>
        <img className={classes.image} src={card.image} alt={card.title} />
        <div className={classes.info}>
          <p className={classes.title}>{card.title}</p>
          <p className={classes.price}>{card.price} ₽</p>
        </div>
      </div>

      <Modal isOpen={isOpenModal} onClose={closeModal}>
        <ProductDetails product={card} />
      </Modal>
    </>
  );
};
