import React from 'react';
import styles from './ItemsCart.module.scss';

function ItemsCart({quantity=0}) {
    return quantity>0?(
        <div className={styles.itemsInCart}>
             {quantity}
         </div>
     ):null
}

export default ItemsCart