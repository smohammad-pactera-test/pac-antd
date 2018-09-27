import React from 'react';
import PropTypes from 'prop-types';
import {Input} from 'antd';

export default class PInputSearch extends React.Component{
    render(){
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
        }=this.props;
        return(
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
