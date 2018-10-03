import React, {Component} from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {withKnobs, boolean, button, number, object, select, text} from '@storybook/addon-knobs';
import PSwitch from '../Components/Data Entry/switch'
import PIcon from "../Components/PIcon";
import PButton from "../Components/PButton";

const stories = storiesOf('Switch', module);
stories.addDecorator(withKnobs);


class BasicSwitch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:false
        }
    }

    render(){

        const {
            checkedChildren,
            unCheckedChildren,
            defaultChecked,
            loading,
            size
        } = this.props;


       const  onChangeHandler = () => {
            this.setState({
                value:!this.state.value
            })
        }
        return(
            <PSwitch onChange={onChangeHandler}
                     checked={this.state.value}
                     checkedChildren={checkedChildren}
                     unCheckedChildren={unCheckedChildren}
                     defaultChecked={defaultChecked}
                     loading={loading}
                     size={size}/>
        );
    }


}


stories.add('Basic Switch', withInfo({})(() => (
  <BasicSwitch/>
)));

const size = {
    default:'default',
    small:'small'
}

stories.add('Switch with Icons', withInfo({})(() => (
    <BasicSwitch checkedChildren="1" unCheckedChildren="0"  loading={boolean('loading',false)}   size={select('size', size, 'default')} />
)));




