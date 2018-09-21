import React from 'react';
import PropTypes from 'prop-types';
import {DatePicker} from 'antd'


export default class PRangePicker extends React.Component{

    render(){

        const {RangePicker} = DatePicker;
        const {
            allowClear,
            autoFocus,
            className,
            dateRender,
            disabled,
            disabledDate,
            dropdownClassName,
            getCalendarContainer,
            locale,
            popupStyle,
            size,
            style,
            onOpenChange,
            onPanelChange,
            defaultValue,
            disabledTime,
            format,
            ranges,
            renderExtraFooter,
            showTime,
            value,
            onChange,
            onOk
        } = this.props;
        return(
            <RangePicker allowClear={allowClear}
                         autoFocus={autoFocus}
                         className={className}
                         dateRender={dateRender}
                         disabled={disabled}
                         disabledDate={disabledDate}
                         dropdownClassName={dropdownClassName}
                         getCalendarContainer={getCalendarContainer}
                         locale={locale}
                         popupStyle={popupStyle}
                         size={size}
                         style={style}
                         onOpenChange={onOpenChange}
                         onPanelChange={onPanelChange}
                         defaultValue={defaultValue}
                         disabledTime={disabledTime}
                         format={format}
                         ranges={ranges}
                         renderExtraFooter={renderExtraFooter}
                         showTime={showTime}
                         //value={value}
                         onChange={onChange}
                         onOk={onOk}

            />
        );
    }
}
