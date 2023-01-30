import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import App from './components/app/App';

const store = createStore(reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode >
    <Provider store={store}>
      <App/>
    </Provider>
</StrictMode>,
);

