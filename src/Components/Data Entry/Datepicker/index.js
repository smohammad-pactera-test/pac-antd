import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';

export default class PDatePicker extends React.Component {

    render() {

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
            mode,
            open,
            placeholder,
            popupStyle,
            size,
            style,
            onOpenChange,
            onPanelChange,
            defaultValue,
            disabledTime,
            format,
            renderExtraFooter,
            showTime,
            showToday,
            value,
            onCalendarChange,
            onChange,
            onOk

        } = this.props;

        return (
            <DatePicker allowClear={allowClear}
                autoFocus={autoFocus}
                className={className}
                dateRender={dateRender}
                disabled={disabled}
                disabledDate={disabledDate}
                dropdownClassName={dropdownClassName}
                getCalendarContainer={getCalendarContainer}
                locale={locale}
                mode={mode}
                open={open}
                placeholder={placeholder}
                popupStyle={popupStyle}
                size={size}
                style={style}
                onOpenChange={onOpenChange}
                onPanelChange={onPanelChange}
                defaultValue={defaultValue}
                disabledTime={disabledTime}
                format={format}
                renderExtraFooter={renderExtraFooter}
                showTime={showTime}
                showToday={showToday}
                value={value}
                onCalendarChange={onCalendarChange}
                onChange={onChange}
                onOk={onOk}
            />
        );
    }
}
