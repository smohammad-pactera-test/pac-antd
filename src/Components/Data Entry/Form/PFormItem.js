import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';

export default class PFormItem extends React.Component {

    render() {

        const {
            colon,
            extra,
            hasFeedback,
            help,
            label,
            labelCol,
            required,
            validateStatus,
            wrapperCol

        } = this.props;

        return (
            <Form.Item colon={colon}
                extra={extra}
                hasFeedback={hasFeedback}
                help={help}
                label={label}
                labelCol={labelCol}
                required={required}
                validateStatus={validateStatus}
                wrapperCol={wrapperCol}>
                {this.props.children}
            </Form.Item>
        );
    }
}
PFormItem.propTypes = {
    colon:PropTypes.bool,
    extra:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    hasFeedback:PropTypes.bool,
    help:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    label:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    labelCol:PropTypes.object,
    required:PropTypes.bool,
    validateStatus:PropTypes.string,
    wrapperCol:PropTypes.object
};

PFormItem.defaultProps = {
    colon:true,
    hasFeedback:false,
    required:false
};