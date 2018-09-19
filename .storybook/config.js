import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
    require('../src/stories/icons.story');
  require('../src/stories/checkbox.story');
}

configure(loadStories, module);
