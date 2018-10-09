import React from 'react';
import PropTypes from 'prop-types';
import {Rate, Icon} from 'antd';


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

PRate.propTypes = {
    allowClear:PropTypes.bool,
    allowHalf:PropTypes.bool,
    autoFocus:PropTypes.bool,
    character:PropTypes.node,
    className:PropTypes.string,
    count:PropTypes.number,
    defaultValue:PropTypes.number,
    disabled:PropTypes.bool,
    style:PropTypes.object,
    value:PropTypes.number,
    onBlur:PropTypes.func,
    onChange:PropTypes.func,
    onFocus:PropTypes.func,
    onHoverChange:PropTypes.func,
    onKeyDown:PropTypes.func
};

PRate.defaultProps = {
    allowClear:true,
    allowHalf:false,
    autoFocus:false,
    character:<Icon type="star" />,
    count:5,
    defaultValue:0,
    disabled:false
};