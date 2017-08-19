import React from 'react';
import { connect } from 'dva';
import History from './history/history';

function Example({ dispatch, example}){

  function send(item) {
    dispatch({
      type: 'example/send',
      payload: item,
    });
  }


  return (
    <div>
      <h1>example</h1>
      <History items={example.items} onResend={send}></History>
    </div>
  );
}

export default connect(({ example }) => ({
  example
}))(Example);