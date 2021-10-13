import React from "react";

const BtnBack = ({ onGobackClick }) => {
  return (
    <button type="button" onClick={onGobackClick}>
      Go back
    </button>
  );
};

export default BtnBack;
