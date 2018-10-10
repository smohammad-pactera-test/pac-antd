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

export const commonDatepickerProps = {
    allowClear:PropTypes.bool,
    autoFocus:PropTypes.bool,
    className:PropTypes.string,
    dateRender:PropTypes.func,
    disabled:PropTypes.bool,
    disabledDate:PropTypes.bool,
    dropdownClassName:PropTypes.string,
    getCalendarContainer:PropTypes.func,
    locale:PropTypes.object,
    mode:PropTypes.oneOf([
        'time',
        'date',
        'month',
        'year'
    ]),
    open:PropTypes.bool,
    placeholder:PropTypes.string,
    popupStyle:PropTypes.object,
    size:PropTypes.size,
    suffixIcon:PropTypes.node,
    style:PropTypes.object,
    onOpenChange:PropTypes.func,
    onPanelChange:PropTypes.func
};

PDatePicker.propTypes = {
    ...commonDatepickerProps,
    defaultValue:PropTypes.instanceOf(Date),
    disabledTime:PropTypes.func,
    format:PropTypes.string,
    renderExtraFooter:PropTypes.node,
    showTime:PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool
    ]),
    showToday:PropTypes.bool,
    value:PropTypes.string,
    onCalendarChange:PropTypes.func,
    onChange:PropTypes.func,
    onOk:PropTypes.func
};

PDatePicker.defaultProps = {
    format:'YYYY-MM-DD',
    showToday:true
};
