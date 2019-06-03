import React from 'react';
import { storiesOf } from '@storybook/react';
import { InboxScreen } from '../components/InboxScreen';

const defaultInbox = () => <InboxScreen />;
const error = () => <InboxScreen error={new Error('oups')} />;

storiesOf('InboxScreen', module)
  .add('default', defaultInbox)
  .add('error', error);
