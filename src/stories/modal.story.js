import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import PModal from '../Components/Feedback/Modal'
import PButton from "../Components/PButton";


class ModalDemo extends React.Component{
    state = { visible: false }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    render() {
        return (
            <div>
                <PButton type="primary" onClick={this.showModal}>
                    Open Modal
                </PButton>
                <PModal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </PModal>
            </div>
        );
    }
}

class ModalWithCustomisedFooter extends React.Component{
    state = {
        loading: false,
        visible: false,
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    render() {
        const { visible, loading } = this.state;
        return (
            <div>
                <PButton type="primary" onClick={this.showModal}>
                    Open Modal with customized footer
                </PButton>
                <PModal
                    visible={visible}
                    title="Title"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <PButton key="back" onClick={this.handleCancel}>Return</PButton>,
                        <PButton key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                            Submit
                        </PButton>,
                    ]}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </PModal>
            </div>
        );
    }
}


const stories = storiesOf('Modal', module);
stories.addDecorator(withKnobs);

stories.add('Basic Modal', withInfo({})(() => (
    <ModalDemo/>
)));

stories.add('Modal with customised Footer', withInfo({})(() => (
   <ModalWithCustomisedFooter/>
)));

