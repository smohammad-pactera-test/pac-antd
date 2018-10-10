import React from 'react';
import {DatePicker} from 'antd';

export default class PWeekPicker extends React.Component {

    render() {

        const {WeekPicker} = DatePicker;

        const {
            defaultValue,
            format,
            value,
            onChange
        } = this.props;

        return (

            <WeekPicker defaultValue={defaultValue}
                format={format}
                value={value}
                onChange={onChange}/>
        );
    }
}
