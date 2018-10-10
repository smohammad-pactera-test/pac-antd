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
PCheckboxGroup.propTypes = {
    defaultValue:PropTypes.arrayOf(PropTypes.string),
    disabled:PropTypes.bool,
    options:PropTypes.arrayOf(PropTypes.string),
    value:PropTypes.arrayOf(PropTypes.string),
    onChange:PropTypes.func
};

PCheckboxGroup.defaultProps = {
    defaultValue:[],
    disabled:false,
    options:[],
    value:[]
};