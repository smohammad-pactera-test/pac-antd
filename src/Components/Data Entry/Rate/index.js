import React from 'react';
import PropTypes from 'prop-types';
import {Rate} from 'antd';

export default class PRate extends  React.Component {
    render() {
        const {
            allowClear,
            allowHalf,
            autoFocus,
            character,
            className,
            count,
            defaultValue,
            disabled,
            style,
            value,
            onBlur,
            onChange,
            onFocus,
            onHoverChange,
            onKeyDown
        } = this.props;
        return (
            <Rate allowClear={allowClear}
                allowHalf={allowHalf}
                autoFocus={autoFocus}
                character={character}
                className={className}
                count={count}
                defaultValue={defaultValue}
                disabled={disabled}
                style={style}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                onFocus={onFocus}
                onHoverChange={onHoverChange}
                onKeyDown={onKeyDown}
            />
        );
    }
}