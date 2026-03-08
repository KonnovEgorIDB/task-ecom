
import { Card } from '../../entities/card/Card'
import classes from './ProductList.module.css'

export const ProductList = ({cards}) => {

    return (
        <div className={classes.list}>
            {cards.map((card) => (
                <Card card={card} key={card.id} />
            ))}
        </div>
    )
}