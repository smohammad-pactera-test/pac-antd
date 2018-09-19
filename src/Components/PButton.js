import React from 'react';
import PropTypes from 'prop-types'
import { Button } from 'antd';


export default class PButton extends React.Component {
    render() {
        const {
            title,
            type,
            size,
            icon,
            shape,
            disabled,
            onClick
        } = this.props
        return <Button
            type={type}
            onClick={onClick}
            size={size}
            icon={icon}
            shape={shape}
            disabled={disabled}>{this.props.children}</Button>
    }
}

PButton.defaultProps = {
    type: 'primary',
    disabled: false,
    onClick: () => {}
}

PButton.propTypes = {
    onClick: PropTypes.func.isRequired
}
