import React from 'react';
import PropTypes from 'prop-types';
import {Calendar} from 'antd';


export default class PCalendar extends React.Component {
    render() {

        const {

            monthCellRender,
            dateCellRender,
            monthFullCellRender,
            dateFullCellRender,
            fullscreen,
            locale,
            preficCls,
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
                prefixCls={preficCls}
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
