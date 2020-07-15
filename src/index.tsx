import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  tasks: {
    0: { id: 0, text: 'this is your first task', isComplete: false },
    1: { id: 1, text: 'this is your second task', isComplete: false },
    2: { id: 2, text: 'this is your third complete task', isComplete: true },
  },
};

const rootReducer = (state: any = initialState, action: any) => {
  switch(action.type) {
    case 'ADD_TASK': 
      console.log('task added', action)
      return state;
    case 'TOGGLE_TASK':
      const { id } = action.payload;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [id]: {
            ...state.tasks[id],
            isComplete: !state.tasks[id].isComplete,
          }
        }
      };
    default: 
      return state;
  }
};

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
