import React from 'react';
import PropTypes from 'prop-types';
import {DatePicker} from 'antd';
import {commonDatepickerProps} from './index';

export default class PRangePicker extends React.Component {

    render() {

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
        return (
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
                value={value}
                onChange={onChange}
                onOk={onOk}

            />
        );
    }
}

PRangePicker.propTypes = {
    ...commonDatepickerProps,
    defaultValue:PropTypes.any,
    disabledTime:PropTypes.func,
    format:PropTypes.string,
    ranges:PropTypes.any,
    renderExtraFooter:PropTypes.node,
    showTime:PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool
    ]),
    value:PropTypes.instanceOf(Date),
    onChange:PropTypes.func,
    onOk:PropTypes.func
};

PRangePicker.defaultProps = {
    format:'YYYY-MM-DD HH:mm:ss'
};