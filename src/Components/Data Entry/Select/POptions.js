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


POptions.propTypes = {
    disabled:PropTypes.bool,
    key:PropTypes.string,
    title:PropTypes.string,
    value:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    className:PropTypes.string,
    children:PropTypes.element
};

POptions.defaultProps = {
    disabled:false
};