import React from 'react';
import PropTypes from 'prop-types';
import {AutoComplete} from 'antd';


export default class PAutoComplete extends React.Component {

    render() {

        const {
            allowClear,
            autoFocus,
            backfill,
            dataSource,
            defaultActiveFirstOption,
            defaultValue,
            disabled,
            filterOption,
            optionLabelProp,
            placeholder,
            value,
            onBlur,
            onChange,
            onFocus,
            onSearch,
            onSelect,
            style
        } = this.props;

        return (
            <AutoComplete
                allowClear={allowClear}
                autoFocus={autoFocus}
                backfill={backfill}
                dataSource={dataSource}
                defaultActiveFirstOption={defaultActiveFirstOption}
                defaultValue={defaultValue}
                disabled={disabled}
                style={style}
                filterOption={filterOption}
                optionLabelProp={optionLabelProp}
                placeholder={placeholder}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                onFocus={onFocus}
                onSelect={onSelect}
                onSearch={onSearch}
            />
        );

    }
}

PAutoComplete.propTypes = {
    allowClear:PropTypes.bool,
    autoFocus:PropTypes.bool,
    backfill:PropTypes.bool,
    dataSource:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    defaultActiveFirstOption:PropTypes.bool,
    defaultValue:PropTypes.any,
    disabled:PropTypes.bool,
    filterOption:PropTypes.bool,
    optionLabelProp:PropTypes.string,
    placeholder:PropTypes.string,
    value:PropTypes.any,
    onBlur:PropTypes.func,
    onChange:PropTypes.func,
    onFocus:PropTypes.func,
    onSearch:PropTypes.func,
    onSelect:PropTypes.func,
    defaultOpen:PropTypes.bool,
    open:PropTypes.bool,
    onDropdownVisibleChange:PropTypes.func,
    style:PropTypes.object
};

PAutoComplete.defaultProps = {
    allowClear:false,
    autoFocus:false,
    backfill:false,
    defaultActiveFirstOption:true,
    disabled:false,
    filterOption:true,
    // optionLabelProp:children
};

