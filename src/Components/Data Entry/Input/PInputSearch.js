import React from 'react';
import PropTypes from 'prop-types';
import {Input} from 'antd';

export default class PInputSearch extends React.Component {
    render() {
        const {
            type,
            id,
            size,
            maxLength,
            disabled,
            value,
            defaultValue,
            className,
            addonBefore,
            addonAfter,
            prefixCls,
            onPressEnter,
            onKeyDown,
            onKeyUp,
            onFocus,
            onBlur,
            prefix,
            suffix,
            onChange,
            placeholder,
            enterButton,
            onSearch
        } = this.props;
        return (
            <Input.Search type={type}
                id={id}
                size={size}
                maxLength={maxLength}
                disabled={disabled}
                value={value}
                defaultValue={defaultValue}
                className={className}
                addonBefore={addonBefore}
                addonAfter={addonAfter}
                prefixCls={prefixCls}
                onPressEnter={onPressEnter}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                onFocus={onFocus}
                onBlur={onBlur}
                prefix={prefix}
                suffix={suffix}
                onChange={onChange}
                placeholder={placeholder}
                enterButton={enterButton}
                onSearch={onSearch}
            />

        );
    }
}
PInputSearch.propTypes = {
    addonAfter:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    addonBefore:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    defaultValue:PropTypes.string,
    disabled:PropTypes.bool,
    id:PropTypes.string,
    prefix:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    size:PropTypes.string,
    suffix:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    type:PropTypes.string,
    value:PropTypes.string,
    onChange:PropTypes.func,
    onPressEnter:PropTypes.func,
    enterButton:PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.node
    ]),
    onSearch:PropTypes.func
};

PInputSearch.defaultProps = {
    disabled:false,
    size:'default',
    type:'text',
    enterButton:false
};