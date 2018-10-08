import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

export default class POptions extends React.Component {
    render() {

        const {
            disabled,
            key,
            title,
            value
        } = this.props;

        return (
            <Select.Option disabled={disabled}
                key={key}
                title={title}
                value={value}>
                {this.props.children}
            </Select.Option>
        );
    }
}

POptions.defaultProps = {
    disabled:false
};