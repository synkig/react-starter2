import dva from 'dva';
import { hashHistory } from 'dva/router';
import './index.css';

const app = dva({
  history: hashHistory
});

app.router(require('./router').default);

app.start('#root');