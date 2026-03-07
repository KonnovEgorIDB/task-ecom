import { useState } from "react";
import classes from './card.module.css';
import { Modal } from "../modal/Modal";

export const Card = ({ card }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [inBasket, setInBasket] = useState(false);

    const openModal = () => setIsOpenModal(true);
    const closeModal = () => setIsOpenModal(false);

    return (
        <div className={classes.card} onClick={openModal}>
            <img src={card.image} alt='Фотография карточки' />
            <p>{card.title}</p>
            <p>{card.price} ₽</p>

            <Modal isOpen={isOpenModal} onClose={closeModal}>
                <div className={classes.modalContent}>
                    <img 
                        src={card.image} 
                        alt={card.title} 
                        className={classes.modalImage}
                    />
                    <h2 className={classes.modalTitle}>{card.title}</h2>
                    <p className={classes.modalDescription}>{card.description}</p>
                    <p className={classes.modalPrice}>{card.price} ₽</p>
                    <button className={classes.addToCartBtn} onClick={() => {setInBasket(prev => !prev)}}>
                        {!inBasket ? 'Добавить в корзину' : 'Удалить из корзины'}
                    </button>
                </div>
            </Modal>
        </div>
    );
};