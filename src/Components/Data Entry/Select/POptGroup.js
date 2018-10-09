import React from 'react';
import PropTypes from 'prop-types';
import {Select} from 'antd';

export default class POptGroup extends React.Component {
    render() {

        const {
            key,
            label
        } = this.props;

        return (
            <Select.OptGroup key={key}
                label={label} >
                {this.props.children}
            </Select.OptGroup>
        );
    }
}

POptGroup.propTypes = {
    key:PropTypes.string,
    label:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ])
};