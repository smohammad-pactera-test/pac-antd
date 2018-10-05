import React from 'react';
import PropTypes from 'prop-types';
import {AutoComplete} from 'antd';


export default class PAutoComplete extends React.Component{

    render(){

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
        }=this.props;

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
