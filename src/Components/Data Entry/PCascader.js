import React from 'react';
import PropTypes from 'prop-types';
import {Cascader} from 'antd';

export default class PCascader extends React.Component {

    render() {
        const {
            allowClear,
            autoFocus,
            changeOnSelect,
            className,
            defaultValue,
            disabled,
            displayRender,
            expandTrigger,
            fieldNames,
            getPopupContainer,
            loadData,
            notFoundContent,
            options,
            placeholder,
            popupClassName,
            popupPlacement,
            popupVisible,
            showSearch,
            size,
            style,
            value,
            onChange,
            onPopupVisibleChange,
        } = this.props;


        return (
            <Cascader allowClear={allowClear}
                autoFocus={autoFocus}
                changeOnSelect={changeOnSelect}
                className={className}
                defaultValue={defaultValue}
                disabled={disabled}
                displayRender={displayRender}
                expandTrigger={expandTrigger}
                fieldNames={fieldNames}
                getPopupContainer={getPopupContainer}
                loadData={loadData}
                notFoundContent={notFoundContent}
                options={options}
                placeholder={placeholder}
                popupClassName={popupClassName}
                popupPlacement={popupPlacement}
                popupVisible={popupVisible}
                showSearch={showSearch}
                size={size}
                style={style}
                value={value}
                onChange={onChange}
                onPopupVisibleChange={onPopupVisibleChange}
            />
        );
    }
}

PCascader.propTypes = {
    allowClear:PropTypes.bool,
    autoFocus:PropTypes.bool,
    changeOnSelect:PropTypes.bool,
    className:PropTypes.string,
    defaultValue:PropTypes.arrayOf(PropTypes.string),
    disabled:PropTypes.bool,
    displayRender:PropTypes.node,
    expandTrigger:PropTypes.string,
    fieldNames:PropTypes.object,
    getPopupContainer:PropTypes.any,
    loadData:PropTypes.any,
    notFoundContent:PropTypes.string,
    options:PropTypes.object,
    placeholder:PropTypes.string,
    popupClassName:PropTypes.string,
    popupPlacement:PropTypes.string,
    popupVisible:PropTypes.bool,
    showSearch:PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object
    ]),
    size:PropTypes.string,
    style:PropTypes.string,
    suffixIcon:PropTypes.node,
    value:PropTypes.arrayOf(PropTypes.string),
    onChange:PropTypes.func,
    onPopupVisibleChange:PropTypes.func
};

PCascader.defaultProps = {
    allowClear:true,
    autoFocus:false,
    changeOnSelect:false,
    defaultValue:[],
    disabled:false,
    displayRender:(label) => label.join(' / '),
    expandTrigger:'click',
    fieldNames:{ label: 'label', value: 'value', children: 'children' },
    getPopupContainer:() => document.body,
    notFoundContent:'Not Found',
    placeholder:'Please select',
    popupPlacement:'bottomLeft',
    showSearch:false,
    size:'default'
};