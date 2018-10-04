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
        value:''
    }

    onChangeHandler = (e) => {
        this.setState({
            value:e
        })
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
                onChange={(e)=>this.onChangeHandler(e)}
                value={this.state.value}
            />
        );
    }
}
stories.add('Based on the input Value', withInfo({})(() => (
    <Complete/>
)));

