import React from 'react';
import PropTypes from 'prop-types';
import {Radio} from 'antd';

export default class PRadioGroup extends  React.Component {
    render() {
        const {
            defaultValue,
            disabled,
            name,
            options,
            size,
            value,
            onChange,
            buttonStyle
        } = this.props;

        return (
            <Radio.Group defaultValue={defaultValue}
                disabled={disabled}
                name={name}
                options={options}
                size={size}
                value={value}
                onChange={onChange}
                buttonStyle={buttonStyle}
            >
                {this.props.children}
            </Radio.Group>
        );


    }
}