import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import PPagination from '../Components/Navigation/PPagination';
import {Pagination} from 'antd';


const stories = storiesOf('Pagination', module);
stories.addDecorator(withKnobs);

class BasicPagination extends React.Component{
    constructor(){
        super();
        this.state={
            value:1
        }
    }

onChangeHandler = (e) => {
       this.setState({
           value:e
       })
}

    render() {
        const {
            showSizeChanger,
            showQuickJumper
        } = this.props;
        return (
            <div>
                <PPagination onChange={(e)=>this.onChangeHandler(e)}
                             total={500}
                             defaultCurrent={1}
                             current={this.state.value}
                             showSizeChanger={showSizeChanger}
                             showQuickJumper={showQuickJumper}/>
            </div>
        );
    }
}
stories.add('Basic Pagination', withInfo({})(() => (
   <BasicPagination/>
)));

stories.add('Pagination with changer', withInfo({})(() => (
    <BasicPagination size="small" total={5000} showSizeChanger showQuickJumper/>
)));