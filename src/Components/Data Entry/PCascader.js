import React from 'react';
import PropTypes from 'prop-types';
import {Cascader} from 'antd'

export default class PCascader extends React.Component{

    render(){
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


        return(

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
