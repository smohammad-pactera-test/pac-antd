import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'antd';

export default  class PSwitch extends React.Component {
    render() {
        const {
            autoFocus,
            checked,
            checkedChildren,
            defaultChecked,
            disabled,
            loading,
            size,
            unCheckedChildren,
            onChange,
            onBlur,
            onFocus
        } = this.props;

        return (
            <Switch autoFocus={autoFocus}
                checked={checked}
                checkedChildren={checkedChildren}
                defaultChecked={defaultChecked}
                disabled={disabled}
                loading={loading}
                size={size}
                onFocus={onFocus}
                onBlur={onBlur}
                unCheckedChildren={unCheckedChildren}
                onChange={onChange}/>
        );
    }
}
PSwitch.propTypes = {
    autoFocus:PropTypes.bool,
    checked:PropTypes.bool,
    checkedChildren:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    defaultChecked:PropTypes.bool,
    disabled:PropTypes.bool,
    loading:PropTypes.bool,
    size:PropTypes.string,
    unCheckedChildren:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    onChange:PropTypes.func,
    className:PropTypes.string,
    onBlur:PropTypes.func,
    onFocus:PropTypes.func
};

PSwitch.defaultProps = {
    autoFocus:false,
    checked:false,
    defaultChecked:false,
    disabled:false,
    loading:false,
    size:'default'
};
