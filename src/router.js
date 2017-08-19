import React from 'react';
import { Router } from 'dva/router';

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./app.model').default);
          cb(null, require('./app').default);
        });
      },
    },
  ];

  return <Router history={history} routes={routes} />;
}

export default RouterConfig;
