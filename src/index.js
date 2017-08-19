import dva from 'dva';
import {
  browerHistory
} from 'dva/router';
import './index.css';

const app = dva({
  history: browerHistory
});

app.router(require('./router').default);

app.start('#root');