import React from 'react';
import PropTypes from 'prop-types';
import {Radio} from 'antd';
export default class PRadio extends React.Component {
    render() {

        const {
            autoFocus,
            checked,
            defaultChecked,
            disabled,
            value,
            onBlur,
            onChange,
            style,
            onFocus
        } = this.props;


        return (

            <Radio autoFocus={autoFocus}
                checked={checked}
                defaultChecked={defaultChecked}
                disabled={disabled}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                style={style}
                onFocus={onFocus}
            >
                {this.props.children}
            </Radio>

        );
    }
}
PRadio.propTypes = {
    autoFocus:PropTypes.bool,
    checked:PropTypes.bool,
    defaultChecked:PropTypes.bool,
    disabled:PropTypes.bool,
    value:PropTypes.any,
    onBlur:PropTypes.func,
    onChange:PropTypes.func,
    style:PropTypes.object,
    onFocus:PropTypes.object,
    children:PropTypes.instanceOf(Element)
};

PRadio.defaultProps = {
    autoFocus:false,
    defaultChecked:false,
    disabled:false
};