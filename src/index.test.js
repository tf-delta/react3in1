import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import Root from './containers'
import Store from './Store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <Provider store={Store}>
          <Root/>
      </Provider>,
      div);
});
