import React from 'react';
import AppContext from '../../context';
import styles from './Specifications.module.scss';

function Specifications({ phone }) {
  
  const { specificationsOpened } = React.useContext(AppContext);
  
  return (
    <div className={`${styles.about__overlay}  ${specificationsOpened ? styles.overlayVisible : ''}`}>
      <h2>Характеристики:</h2>
      <p>{phone.name}</p>
    </div>
  )

}

export default Specifications