import React from 'react';
import PropTypes from 'prop-types';
import {Checkbox} from 'antd';

export default class PCheckbox extends React.Component {
    render() {

        const {
            autoFocus,
            checked,
            defaultChecked,
            disabled,
            indeterminate,
            onChange

        } = this.props;

        return (
            <Checkbox autoFocus={autoFocus}
                checked={checked}
                defaultChecked={defaultChecked}
                disabled={disabled}
                indeterminate={indeterminate}
                onChange={onChange}
            >
                {this.props.children}
            </Checkbox>
        );
    }
}

PCheckbox.defaultProps = {
    autoFocus: false,
    checked: false,
    defaultChecked: false,
    disabled: false,
    indeterminate: false
};
