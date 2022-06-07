import React from 'react';
import AppContext from '../../context';
import styles from './AboutPhone.module.scss';

function AboutPhone({phone}) {
  const { aboutOpened } = React.useContext(AppContext);
  
  return (
    <div className={`${styles.about__overlay}  ${aboutOpened ? styles.overlayVisible : ''}`}>
      <h2>Описание:</h2>
      <p>{phone.about}</p>
    </div>
  )
}

export default AboutPhone;