import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import PAutoComplete from '../Components/Data Entry/PAutoComplete';



const stories = storiesOf('Auto Complete', module);
stories.addDecorator(withKnobs);


function onSelect(value) {
    console.log('onSelect', value);
}

class Complete extends React.Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : [
                value,
                value + value,
                value + value + value,
            ],
        });
    }

    render() {
        const { dataSource } = this.state;
        return (
            <PAutoComplete
                dataSource={dataSource}
                style={{ width: 200 }}
                onSelect={onSelect}
                onSearch={this.handleSearch}
                placeholder="input here"
            />
        );
    }
}

const dataSource = ['12345', '23456', '34567'];
stories.add('Auto Complete', withInfo({})(() => (

    <PAutoComplete  dataSource={dataSource}
                    style={{ width: 200 }}
                    placeholder="input here" />

)));

stories.add('Based on the input Value', withInfo({})(() => (

    <Complete/>

)));

