import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Muzika from './Muzika';

const App = () => (
  <div>
    <Muzika />
  </div>
);

render(<App />, document.querySelector('#app'));
