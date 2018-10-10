import React from 'react';
import PropTypes from 'prop-types';
import {Select} from 'antd';

export default class PSelect extends React.Component {
    render() {
        const {
            allowClear,
            autoClearSearchValue,
            autoFocus,
            defaultActiveFirstOption,
            defaultValue,
            disabled,
            dropdownClassName,
            dropdownMatchSelectWidth,
            dropdownStyle,
            filterOption,
            firstActiveValue,
            getPopupContainer,
            labelInValue,
            maxTagCount,
            maxTagPlaceholder,
            mode,
            notFoundContent,
            optionFilterProp,
            optionLabelProp,
            placeholder,
            showArrow,
            showSearch,
            size,
            suffixIcon,
            tokenSeparators,
            value,
            onBlur,
            onChange,
            onDeselect,
            onFocus,
            onInputKeyDown,
            onMouseEnter,
            onMouseLeave,
            onPopupScroll,
            onSearch,
            onSelect,
            // defaultOpen,
            // open,
            onDropdownVisibleChange,
            style
        } = this.props;

        return (
            <Select allowClear={allowClear}
                style={style}
                autoClearSearchValue={autoClearSearchValue}
                autoFocus={autoFocus}
                defaultActiveFirstOption={defaultActiveFirstOption}
                defaultValue={defaultValue}
                disabled={disabled}
                dropdownClassName={dropdownClassName}
                dropdownMatchSelectWidth={dropdownMatchSelectWidth}
                dropdownStyle={dropdownStyle}
                filterOption={filterOption}
                firstActiveValue={firstActiveValue}
                getPopupContainer={getPopupContainer}
                labelInValue={labelInValue}
                maxTagCount={maxTagCount}
                maxTagPlaceholder={maxTagPlaceholder}
                mode={mode}
                notFoundContent={notFoundContent}
                optionFilterProp={optionFilterProp}
                optionLabelProp={optionLabelProp}
                placeholder={placeholder}
                showArrow={showArrow}
                showSearch={showSearch}
                size={size}
                suffixIcon={suffixIcon}
                tokenSeparators={tokenSeparators}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                onDeselect={onDeselect}
                onFocus={onFocus}
                onInputKeyDown={onInputKeyDown}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onPopupScroll={onPopupScroll}
                onSearch={onSearch}
                onSelect={onSelect}
                // defaultOpen={defaultOpen}
                // open={open}
                prefixCls={'ant-select'}
                onDropdownVisibleChange={onDropdownVisibleChange}>
                {this.props.children}
            </Select>
        );
    }
}
PSelect.propTypes = {
    allowClear: PropTypes.bool,
    autoClearSearchValue: PropTypes.bool,
    autoFocus: PropTypes.bool,
    defaultActiveFirstOption: PropTypes.bool,
    defaultValue: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.arrayOf(PropTypes.number)
    ]),
    disabled: PropTypes.bool,
    dropdownClassName: PropTypes.string,
    dropdownMatchSelectWidth: PropTypes.bool,
    dropdownStyle: PropTypes.object,
    filterOption: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.func
    ]),
    firstActiveValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),
    getPopupContainer: PropTypes.func,
    labelInValue: PropTypes.bool,
    maxTagCount: PropTypes.bool,
    maxTagPlaceholder: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func
    ]),
    mode: PropTypes.oneOf([
        'default',
        'multiple',
        'tags'
    ]),
    notFoundContent: PropTypes.string,
    optionFilterProp: PropTypes.string,
    optionLabelProp: PropTypes.string,
    placeholder: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    showArrow: PropTypes.bool,
    showSearch: PropTypes.bool,
    size: PropTypes.string,
    suffixIcon: PropTypes.node,
    tokenSeparators: PropTypes.arrayOf(PropTypes.string),
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number)
    ]),
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onDeselect: PropTypes.func,
    onFocus: PropTypes.func,
    onInputKeyDown: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onPopupScroll: PropTypes.func,
    onSearch: PropTypes.func,
    onSelect: PropTypes.func,
    onDropdownVisibleChange: PropTypes.func,
    defaultOpen: PropTypes.bool,
    open: PropTypes.open,
    style:PropTypes.object,
    children:PropTypes.element


};

PSelect.defaultProps = {
    allowClear: false,
    autoClearSearchValue: true,
    autoFocus: false,
    defaultActiveFirstOption: true,
    disabled: false,
    dropdownMatchSelectWidth: true,
    filterOption: true,
    getPopupContainer: () => document.body,
    labelInValue: false,
    mode: 'default',
    notFoundContent: 'Not Found',
    prefixCls:
        'ant-select',
    showArrow: true,
    showSearch: false,
    size: 'default',
    transitionName: 'slide-up',
    choiceTransitionName: 'zoom'
};
