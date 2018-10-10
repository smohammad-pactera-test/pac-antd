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

PSlider.propTypes = {
    autoFocus:PropTypes.bool,
    defaultValue:PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number)
    ]),
    disabled:PropTypes.bool,
    dots:PropTypes.bool,
    included:PropTypes.bool,
    marks:PropTypes.object,
    max:PropTypes.number,
    min:PropTypes.number,
    range:PropTypes.bool,
    step:PropTypes.oneOfType([
        PropTypes.number,
        null
    ]),
    tipFormatter:PropTypes.oneOfType([
        PropTypes.func,
        null
    ]),
    value:PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number)
    ]),
    vertical:PropTypes.bool,
    onAfterChange:PropTypes.func,
    onChange:PropTypes.func
};

