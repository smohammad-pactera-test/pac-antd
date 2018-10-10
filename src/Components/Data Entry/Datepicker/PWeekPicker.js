import React from 'react';
import {DatePicker} from 'antd';
import PropTypes from 'prop-types';
import {commonDatepickerProps} from './index';

export default class PWeekPicker extends React.Component {

    render() {

        const {WeekPicker} = DatePicker;


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
            format,
            value,
            onChange
        } = this.props;

        return (

            <WeekPicker allowClear={allowClear}
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
                format={format}
                value={value}
                onChange={onChange}/>
        );
    }
}

PWeekPicker.propTypes = {
    ...commonDatepickerProps,
    defaultValue: PropTypes.PropTypes.instanceOf(Date),
    format: PropTypes.string,
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func
};

PWeekPicker.defaultProps = {
    format: 'YYYY-wo'
};