import dva from 'dva-no-router';
import React from 'react';

// 引入我们需要的css
import styles from './index.less';


const app = dva();

app.model({
  namespace: 'module_two',
  state: {
    name: 'module_two',
  },
});

app.router(() => (<div className={styles.module_two_container} >
这时一个dva app
<a href="/module_one/index.html" >got to module one</a>
</div>));

app.start('#root');
