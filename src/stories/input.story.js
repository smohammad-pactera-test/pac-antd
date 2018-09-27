import React, {Component} from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {withKnobs, boolean, button, number, object, select, text} from '@storybook/addon-knobs';
import PInput from '../Components/Data Entry/Input';
import PInputSearchBox from '../Components/Data Entry/Input/PInputSearch'
import PInputTextArea from '../Components/Data Entry/Input/PInputTextArea'
import PIcon from "../Components/PIcon";

const stories = storiesOf('Input', module);
stories.addDecorator(withKnobs);

class BasicInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    onChange = ({name, value}) => {

        this.setState({
            value: value
        })

    }

    render() {

        const {
            addonBefore,
            defaultValue,
            addonAfter,
            inputType,
            onSearch,
            enterButton,
            enterButtonText,
            size,
            autosize,
            prefix
        } = this.props;

        if (inputType === 'searchBox') {

            if (enterButtonText) {
                return (
                    <PInputSearchBox value={this.state.value}
                                     size={size}
                                     enterButton={enterButtonText}
                                     addonBefore={addonBefore}
                                     defaultValue={defaultValue}
                                     addonAfter={addonAfter}
                                     placeholder='I am your placeholder'
                                     onSearch={value => console.log(value)}
                                     onChange={({target: {name, value}}) => {
                                         this.onChange({name, value})
                                     }}/>
                )
            }


            return (
                <PInputSearchBox value={this.state.value}
                                 size={size}
                                 enterButton={enterButton}
                                 addonBefore={addonBefore}
                                 defaultValue={defaultValue}
                                 addonAfter={addonAfter}
                                 placeholder='I am your placeholder'
                                 onSearch={value => console.log(value)}
                                 onChange={({target: {name, value}}) => {
                                     this.onChange({name, value})
                                 }}/>
            );
        }


        else if (inputType === 'textArea') {
            return (
                <PInputTextArea value={this.state.value}
                                size={size}
                                enterButton={enterButton}
                                addonBefore={addonBefore}
                                defaultValue={defaultValue}
                                autosize={autosize}
                                addonAfter={addonAfter}
                                placeholder='I am your placeholder'
                                onSearch={value => console.log(value)}
                                onChange={({target: {name, value}}) => {
                                    this.onChange({name, value})
                                }}/>
            );
        }


        return (
            <PInput onChange={({target: {name, value}}) => {
                this.onChange({name, value})
            }}
                    value={this.state.value}
                    size={size}
                    addonBefore={addonBefore}
                    defaultValue={defaultValue}
                    addonAfter={addonAfter}
                    placeholder='I am your placeholder'
                    prefix={prefix}
            />
        )
    }
}


stories.add('Basic Input Component', withInfo({})(() => (
    <BasicInput size={select('Input size', inputSize, 'default')}/>
)));
stories.add('Basic Input Component with prefix postfix', withInfo({})(() => (
    <BasicInput addonBefore='Prefix' addonAfter=".com" size={select('Input size', inputSize, 'default')}/>
)));
const inputSize = {
    small: 'small',
    default: 'default',
    large: 'large'

}
stories.add('Search Box', withInfo({})(() => (
    <BasicInput placeholder="input search text"
                size={select('Input size', inputSize, 'default')}
                style={{width: 200}}
                inputType='searchBox'
                enterButton={boolean('Make enter Button visible', false)}
                enterButtonText={text('Label for Search Button', '')}
    />
)));

stories.add('Text Area Auto Sizing', withInfo({})(() => (
    <BasicInput placeholder="input search text"
                size={select('Input size', inputSize, 'default')}
                style={{width: 200}}
                inputType='textArea'
                enterButton={boolean('Make enter Button visible', false)}
                enterButtonText={text('Label for Search Button', '')}
                autosize={{minRows: 2, maxRows: 6}}
    />
)));

const iconTypes= {
    down:'down',
    up:'up',
    user:'user'
}

stories.add('prefix and suffix', withInfo({})(() => (
    <BasicInput placeholder="input search text"
                size={select('Input size', inputSize, 'default')}
                prefix={<PIcon type={select('Icon type', iconTypes, 'user')} style={{ color: 'rgba(0,0,0,.25)' }} />}
                style={{width: 200}}
    />
)));
