import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import PCascadar from '../Components/Data Entry/PAutoComplete';


const stories = storiesOf('Check box', module);
stories.addDecorator(withKnobs);

stories.add('checkbox', withInfo({})(() => (
    <Button disabled={ boolean('Disabled', false) }
            type={ select('Button type', btnType, 'dashed') }
            size={ select('Button size', size, 'default') }
            onClick={ action('Button clicked!') }>
        { text('Label', 'Hellos Button') }
    </Button>
)));


