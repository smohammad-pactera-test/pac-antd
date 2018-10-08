import React from 'react';
import PropTypes from 'prop-types';
import {DatePicker} from 'antd';

export default class PWeekPicker extends React.Component {

    render() {

        const {WeekPicker} = DatePicker;

        return (

            <WeekPicker/>

        );


    }
}
