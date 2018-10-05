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
    require('../src/stories/calendar.story');
    require('../src/stories/collapse.story');
    require('../src/stories/popover.story');
    require('../src/stories/tooltip.story');
    require('../src/stories/table.story');
    require('../src/stories/tag.story');
    require('../src/stories/tab.story');
    require('../src/stories/timeline.story');
    require('../src/stories/drawer.story');
    require('../src/stories/modal.story');
    require('../src/stories/input.story');
    require('../src/stories/grid.story');
    require('../src/stories/slider.story');
    require('../src/stories/radio.story');
    require('../src/stories/form.story');
    require('../src/stories/skeleton.story');
    require('../src/stories/list.story');
    require('../src/stories/cards.story');
    require('../src/stories/switch.story');
    require('../src/stories/rate.story');
    require('../src/stories/select.story');

}

configure(loadStories, module);
