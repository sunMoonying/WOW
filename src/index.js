import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import router from './Router'
import 'antd/dist/antd.css';  //引入antd样式（给pc用的，后端管理系统）
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
