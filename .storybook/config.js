import { configure } from '@storybook/react';

function loadStories() {
    require('../src/stories');
    require('../src/stories/icons.story');
    require('../src/stories/checkbox.story');
    require('../src/stories/spinner.story');
    require('../src/stories/alert.story');
    require('../src/stories/progressbar.story');
    require('../src/stories/message.story');
    require('../src/stories/divider.story');
    require('../src/stories/backtop.story');
    require('../src/stories/anchor.story');
}

configure(loadStories, module);
