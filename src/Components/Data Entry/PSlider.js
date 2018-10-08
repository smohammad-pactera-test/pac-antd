import React from 'react';
import PropTypes from 'prop-types';
import {Slider} from 'antd';

export default class PSlider extends React.Component {
    render() {

        const {
            autoFocus,
            defaultValue,
            disabled,
            dots,
            max,
            marks,
            included,
            tipFormatter,
            step,
            value,
            range,
            vertical,
            onAfterChange,
            onChange,
            min
        } = this.props;

        return (
            <Slider autoFocus={autoFocus}
                defaultValue={defaultValue}
                disabled={disabled}
                dots={dots}
                included={included}
                marks={marks}
                max={max}
                min={min}
                range={range}
                step={step}
                tipFormatter={tipFormatter}
                value={value}
                vertical={vertical}
                onAfterChange={onAfterChange}
                onChange={onChange}
            />
        );
    }
}
