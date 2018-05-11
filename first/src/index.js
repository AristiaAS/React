import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Mine from './Mine';
import Counter from './Counter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();
