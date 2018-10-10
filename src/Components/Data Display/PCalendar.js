import React from 'react';
import PropTypes from 'prop-types';
import {Calendar} from 'antd';
import moment from 'moment';

export default class PCalendar extends React.Component {
    render() {

        const {

            monthCellRender,
            dateCellRender,
            monthFullCellRender,
            dateFullCellRender,
            fullscreen,
            locale,
            prefixCls,
            className,
            style,
            onPanelChange,
            value,
            onSelect,
            onChange,
            mode,
            disabledDate

        } = this.props;

        return (
            <Calendar monthCellRender={monthCellRender}
                dateCellRender={dateCellRender}
                monthFullCellRender={monthFullCellRender}
                dateFullCellRender={dateFullCellRender}
                fullscreen={fullscreen}
                locale={locale}
                prefixCls={prefixCls}
                className={className}
                style={style}
                onPanelChange={onPanelChange}
                value={value}
                onSelect={onSelect}
                onChange={onChange}
                mode={mode}
                disabledDate={disabledDate}
            />
        );
    }
}

PCalendar.propTypes = {
    dateCellRender:PropTypes.func,
    dateFullCellRender:PropTypes.func,
    defaultValue:PropTypes.instanceOf(Date),
    disabledDate:PropTypes.bool,
    fullscreen:PropTypes.bool,
    locale:PropTypes.object,
    mode:PropTypes.oneOf([
        'month',
        'year'
    ]),
    monthCellRender:PropTypes.func,
    monthFullCellRender:PropTypes.func,
    validRange:PropTypes.any,
    value:PropTypes.instanceOf(Date),
    onPanelChange:PropTypes.func,
    onSelect:PropTypes.func,
    onChange:PropTypes.func,
    prefixCls:PropTypes.string,
    className:PropTypes.string,
    style:PropTypes.object
};
PCalendar.defaultProps = {
    fullscreen:true,
    mode:'month',
    value:moment()
};