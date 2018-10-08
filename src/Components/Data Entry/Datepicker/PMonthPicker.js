import React from 'react';
import PropTypes from 'prop-types';
import {DatePicker} from 'antd';


export default class PMonthPicker extends React.Component {

    render() {

        const {MonthPicker} = DatePicker;
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
            monthCellContentRender,
            renderExtraFooter,
            value,
            onChange
        } = this.props;
        return (
            <MonthPicker allowClear={allowClear}
                autoFocus={autoFocus}
                className={className}
                dateRender={dateRender}
                disabled={disabled}
                disabledDate={disabledDate}
                dropdownClassName={dropdownClassName}
                getCalendarContainer={getCalendarContainer}
                locale={locale}
                mode={mode}
                // open={open}
                // placeholder={placeholder}
                popupStyle={popupStyle}
                size={size}
                style={style}
                onOpenChange={onOpenChange}
                onPanelChange={onPanelChange}
                defaultValue={defaultValue}
                format={format}
                monthCellContentRender={monthCellContentRender}
                renderExtraFooter={renderExtraFooter}
                // value={value}
                onChange={onChange}
            />
        );
    }
}
