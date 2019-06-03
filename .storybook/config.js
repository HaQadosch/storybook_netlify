import { configure, addParameters } from '@storybook/react';
import requireContext from 'require-context.macro';
import 'storybook-chromatic';

import '../src/index.css';

addParameters({ viewport: { defaultViewport: 'iphonex' } });

const req = requireContext('../src/stories', true, /\.stories\.tsx$/);

function loadStories() {
  require('../src/stories');
  req.keys().forEach(req);
}

configure(loadStories, module);
