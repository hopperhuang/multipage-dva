import dva from 'dva-no-router';
import React from 'react';

// 引入我们需要的css
import './index.less';


const app = dva();

app.model({
  namespace: 'module_two',
  state: {
    name: 'module_two',
  },
});

app.router(() => (<div>这时一个dva app</div>));

app.start('#root');
