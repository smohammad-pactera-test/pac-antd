import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import 'antd/dist/antd.css';
import PCheckbox from '../Components/Data Entry/PCheckbox'
import PCheckboxGroup from '../Components/Data Entry/PCheckboxGroup'
import PButton from "../Components/PButton";


const stories = storiesOf('Check box', module);
stories.addDecorator(withKnobs);

class BasicCheckBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isChecked:true
        }
    }

    checkHandler = () => {
        this.setState({ isChecked: !this.state.isChecked });
    }

    render(){
        return(
          <PCheckbox checked={this.state.isChecked} onChange={this.checkHandler} disabled={this.props.disabled}>
              {this.props.children}
          </PCheckbox>
        );
    }

}


stories.add('Basic checkbox', withInfo({})(() => (
    <BasicCheckBox disabled={boolean('Disabled', false)}>
        {text('Label', 'Hello Checkbox')}
    </BasicCheckBox>
)));


class ControlledCheckBox extends React.Component {
    state = {
        checked: true,
        disabled: false,
    };

    render() {
        const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${this.state.disabled ? 'Disabled' : 'Enabled'}`;
        return (
            <div>
                <p style={{ marginBottom: '20px' }}>
                    <PCheckbox
                        checked={this.state.checked}
                        disabled={this.state.disabled}
                        onChange={this.onChange}
                    >
                        {label}
                    </PCheckbox>
                </p>
                <p>
                    <PButton
                        type="primary"
                        size="small"
                        onClick={this.toggleChecked}
                    >
                        {!this.state.checked ? 'Check' : 'Uncheck'}
                    </PButton>
                    <PButton
                        style={{ marginLeft: '10px' }}
                        type="primary"
                        size="small"
                        onClick={this.toggleDisable}
                    >
                        {!this.state.disabled ? 'Disable' : 'Enable'}
                    </PButton>
                </p>
            </div>
        );
    }

    toggleChecked = () => {
        this.setState({ checked: !this.state.checked });
    }

    toggleDisable = () => {
        this.setState({ disabled: !this.state.disabled });
    }

    onChange = (e) => {
        console.log('checked = ', e.target.checked);
        this.setState({
            checked: e.target.checked,
        });
    }
}
stories.add('Controlled checkbox', withInfo({})(() => (
    <ControlledCheckBox/>
)));

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

class CheckAll extends React.Component {
    state = {
        checkedList: defaultCheckedList,
        indeterminate: true,
        checkAll: false,
    };

    render() {
        return (
            <div>
                <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                    <PCheckbox
                        indeterminate={this.state.indeterminate}
                        onChange={this.onCheckAllChange}
                        checked={this.state.checkAll}
                    >
                        Check all
                    </PCheckbox>
                </div>
                <br />
                <PCheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
            </div>
        );
    }

    onChange = (checkedList) => {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
            checkAll: checkedList.length === plainOptions.length,
        });
    }

    onCheckAllChange = (e) => {
        this.setState({
            checkedList: e.target.checked ? plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    }
}



stories.add('Check all with checkbox group', withInfo({})(() => (
    <CheckAll/>
)));
