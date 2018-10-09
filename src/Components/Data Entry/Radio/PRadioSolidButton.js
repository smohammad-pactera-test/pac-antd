import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';

export default class PRadioSolidButton extends React.Component {
    render() {

        const {
            buttonStyle,
            value
        } = this.props;

        return (
            <Radio.Button buttonStyle={buttonStyle}
                value={value}>
                {this.props.children}
            </Radio.Button>
        );
    }
}

PRadioSolidButton.propTypes = {
    buttonStyle:PropTypes.object,
    value:PropTypes.number,
    children:PropTypes.element
};