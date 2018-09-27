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
            onSelect
        }=this.props;

        return (
            <AutoComplete
                dataSource={dataSource}
                style={{ width: 200 }}
                onSelect={onSelect}
                onSearch={this.handleSearch}
                placeholder="input here"
            />
        );

    }
}
