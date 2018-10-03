import React, {Component} from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {withKnobs, boolean, button, number, object, select, text} from '@storybook/addon-knobs';
import {PForm, PFormCreate} from '../Components/Data Entry/Form'
import PFormItem from '../Components/Data Entry/Form/PFormItem'
import PInput from "../Components/Data Entry/Input";
import PButton from "../Components/PButton";
import {Form} from 'antd'
import PIcon from "../Components/PIcon";
import PCheckbox from "../Components/Data Entry/PCheckbox";
import PRow from "../Components/Layout/Grid/PRow";
import PCol from "../Components/Layout/Grid/PCol";

const stories = storiesOf('Form', module);
stories.addDecorator(withKnobs);

const FormItem = PForm.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
    componentDidMount() {
        // To disabled submit button at the beginning.
        console.log('!@#', this.props.form);
        this.props.form.validateFields();
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        // Only show error after a field is touched.
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');

        return (
            <PForm layout="inline" onSubmit={this.handleSubmit} {...this.props}>
                <React.Fragment>
                    <PFormItem
                        validateStatus={userNameError ? 'error' : ''}
                        help={userNameError || ''}
                    >
                        {getFieldDecorator('userName', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(
                            <PInput prefix={<PIcon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="Username"/>
                        )}
                    </PFormItem>
                    <PFormItem
                        validateStatus={passwordError ? 'error' : ''}
                        help={passwordError || ''}
                    >
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                        })(
                            <PInput prefix={<PIcon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password" placeholder="Password"/>
                        )}
                    </PFormItem>
                    <PFormItem>
                        <PButton
                            type="primary"
                            htmlType="submit"
                            disabled={hasErrors(getFieldsError())}
                        >
                            Log in
                        </PButton>
                    </PFormItem>
                </React.Fragment>
            </PForm>
        );
    }
}

const Wrapper = PFormCreate()(HorizontalLoginForm)


class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <PForm onSubmit={this.handleSubmit} className="login-form">
                <PFormItem>
                    {getFieldDecorator('userName', {
                        rules: [{required: true, message: 'Please input your username!'}],
                    })(
                        <PInput prefix={<PIcon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder="Username"/>
                    )}
                </PFormItem>
                <PFormItem>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please input your Password!'}],
                    })(
                        <PInput prefix={<PIcon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                placeholder="Password"/>
                    )}
                </PFormItem>
                <PFormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <PCheckbox>Remember me</PCheckbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <PButton type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </PButton>
                    Or <a href="">register now!</a>
                </PFormItem>
            </PForm>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

stories.add('Basic horizontal form', withInfo({})(() => (
    <Wrapper/>
)));

stories.add('Basic Login form', withInfo({})(() => (
    <div>
        <div className='u-width-50 u-center'>
            <WrappedNormalLoginForm/>
        </div>
    </div>
)));

