import React from 'react';

const HistoryDetail = ({ item, onResend }) => {

  function onOk() {
    if (onResend) {
      onResend(item);
    }
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <button onClick={onOk}>OK</button>
    </div>
  );
};

export default HistoryDetail;