import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import PDrawer from '../Components/Feedback/PDrawer'
import PButton from "../Components/PButton";


const stories = storiesOf('Drawer', module);
stories.addDecorator(withKnobs);


class BasicDrawer extends React.Component{
    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <PButton type="primary" onClick={this.showDrawer}>
                    Open
                </PButton>
                <PDrawer
                    title="Basic Drawer"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </PDrawer>
            </div>
        );
    }
}





stories.add('Basic Drawer', withInfo({})(() => (
            <BasicDrawer/>
)));


