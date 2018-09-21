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
    require('../src/stories/steps.story');
    require('../src/stories/pagination.story');
    require('../src/stories/autocomplete.story');
    require('../src/stories/datepicker.story');
    require('../src/stories/avatar.story');
    require('../src/stories/badge.story');
    require('../src/stories/carousel.story');
}

configure(loadStories, module);
