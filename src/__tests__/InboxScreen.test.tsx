import React from 'react';
import ReactDOM from 'react-dom';
import { InboxScreen } from '../components/InboxScreen';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InboxScreen />, div);
  ReactDOM.unmountComponentAtNode(div);
});
