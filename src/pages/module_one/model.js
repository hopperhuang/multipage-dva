const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

export default {
  namespace: 'module_one',
  state: {
    name: 'dva-multipage',
    count: 3,
  },
  reducers: {
    addOne(state) {
      const newCount = state.count + 1;
    //   const s = { ...state };
    //   console.log(s);
      return Object.assign({}, state, { count: newCount });
    //   return state;
    },
    minusOne(state) {
      const newCount = state.count - 1;
      return Object.assign({}, state, { count: newCount });
    //   return state;
    },
  },
  effects: {
    *add(action, { call, put }) {
      yield call(delay, 1000);
      yield put({ type: 'addOne' });
    },
    *minus(action, { call, put }) {
      yield call(delay, 1000);
      yield put({ type: 'minusOne' });
    },
  },
};

