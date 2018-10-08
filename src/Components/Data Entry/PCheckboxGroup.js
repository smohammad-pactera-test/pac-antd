import React from 'react';
import PropTypes from 'prop-types';
import {Checkbox} from 'antd';

export default class PCheckboxGroup extends React.Component {
    render() {
        const {
            defaultValue,
            disabled,
            options,
            value,
            onChange
        } = this.props;
        return (
            <Checkbox.Group defaultValue={defaultValue}
                disabled={disabled}
                options={options}
                value={value}
                onChange={onChange}/>
        );

    }
}
