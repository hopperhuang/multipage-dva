import dva from 'dva';
import React from 'react';


// 引入我们需要的css
import styles from './index.css';


const app = dva();

app.model({
  namespace: 'module_one',
  state: {
    name: 'dva-multipage',
  },
});

app.router(() => (<div className={styles.module_one_container} >
这是另外一个dva app
<a href="/module_two/index.html" >go to module two</a>
</div>));

app.start('#root');
