import React from 'react';
import HistoryDetail from './../history-detail/history-detail';

const History = ({ items, onResend }) => {
  return (
    <div>
      <h1>history, size: {items && items.length}</h1>
      { items.map((item) => 
          <HistoryDetail key={item.id} item={item} onResend={onResend}></HistoryDetail>
        )
      }
    </div>
  );
};

export default History;