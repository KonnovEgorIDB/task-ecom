import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import classes from './modal.module.css';

export const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEsc);
        }

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className={classes.overlay} onClick={onClose}>
            <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
                <button className={classes.closeBtn} onClick={onClose}>×</button>
                {children}
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};