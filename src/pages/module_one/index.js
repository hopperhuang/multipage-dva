import dva, { connect } from 'dva';
import React from 'react';


// 引入我们需要的css
import styles from './index.css';

// 引入model
import model from './model';


const app = dva();

app.model(model);

function Counter(props) {
  return (
    <div className={styles.module_one_container} >
      <button type="button" onClick={() => { props.dispatch({ type: 'module_one/add' }); }} >+++</button>
      {props.model.count}
      <button type="button" onClick={() => { props.dispatch({ type: 'module_one/minus' }); }} >---</button>
    </div>
  );
}


// 绑定数据
const App = connect(state => ({ model: state.module_one }))(Counter);

app.router(() => (<App />));

app.start('#root');
