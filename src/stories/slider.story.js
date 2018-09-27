import React, {Component} from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {withKnobs, boolean, button, number, object, select, text} from '@storybook/addon-knobs';
import PSlider from '../Components/Data Entry/PSlider'


const stories = storiesOf('Slider', module);
stories.addDecorator(withKnobs);

class BasicSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }


    render() {

        const onChangeHandler = ({value}) => {
            this.setState({
                value: value
            })
        }

        const {
            tipFormatter,
            marks,
            defaultValue,
            included,
            step
        } = this.props;

        function formatter(value) {
            return `${value}%`;
        }

        if (tipFormatter) {
            return (
                <PSlider value={this.state.value}
                         onChange={(value) => {
                             onChangeHandler({value})
                         }}
                         onAfterChange={(afterMouseLiftValue) => {
                             console.log("After Mouse Release , The Value is", afterMouseLiftValue)
                         }}
                         tipFormatter={formatter}
                         marks={marks}
                         defaultValue={defaultValue}
                         included={included}
                         step={step}

                />
            );
        }

        return (
            <PSlider value={this.state.value}
                     onChange={(value) => {
                         onChangeHandler({value})
                     }}
                     onAfterChange={(afterMouseLiftValue) => {
                         console.log("After Mouse Release , The Value is", afterMouseLiftValue)
                     }}
                     marks={marks}
                     defaultValue={defaultValue}
                     included={included}
                     step={step}

            />
        );
    }
}


stories.add('Basic Slider', withInfo({})(() => (
    <BasicSlider/>
)));

stories.add('Basic Slider with TipToolFormatter', withInfo({})(() => (
    <BasicSlider tipFormatter={true}/>
)));


const marks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
        style: {
            color: '#f50',
        },
        label: <strong>100°C</strong>,
    },
};

stories.add('Graduate Slider', withInfo({})(() => (
    <div>
        <h4>included=true</h4>
        <BasicSlider marks={marks} defaultValue={37}/>
        <BasicSlider range marks={marks} defaultValue={[26, 37]}/>

        <h4>included=false</h4>
        <BasicSlider marks={marks} included={false} defaultValue={37}/>

        <h4>marks & step</h4>
        <BasicSlider marks={marks} step={10} defaultValue={37}/>

        <h4>step=null</h4>
        <BasicSlider marks={marks} step={null} defaultValue={37}/>
    </div>
)));
