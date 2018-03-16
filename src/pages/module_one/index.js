import dva from 'dva-no-router';
import React from 'react';


// 引入我们需要的css
import './index.css';


const app = dva();

app.model({
  namespace: 'module_one',
  state: {
    name: 'dva-multipage',
  },
});

app.router(() => (<div>这是另外一个dva app</div>));

app.start('#root');
