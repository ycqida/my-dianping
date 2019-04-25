import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import * as serviceWorker from './serviceWorker';
import { RouterMap }  from './router/routeMap';
  
// 创建 Redux 的 store 对象
const store = configureStore()

ReactDOM.render(
<Provider store={store}>
    <RouterMap />
</Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
