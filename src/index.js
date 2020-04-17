import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'semantic-ui-less/semantic.less';

import * as serviceWorker from './serviceWorker';
import App from './components/App';


import FireBase, { FirebaseContext } from "./components/Firebase";


ReactDOM.render(
    <FirebaseContext.Provider value={ new FireBase() }>
      <App />
    </FirebaseContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
