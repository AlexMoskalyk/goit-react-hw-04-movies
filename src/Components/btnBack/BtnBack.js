import React from "react";
import styles from './BtnBack.module.css'


const BtnBack = ({ onGobackClick }) => {
  return (
    <button type="button" onClick={onGobackClick} className={ styles.btn}>
      Go back
    </button>
  );
};

export default BtnBack;
