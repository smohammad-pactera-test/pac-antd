import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
// import 'antd/lib/button/style/css'

export default class PButton extends React.Component {
    render() {
        const {
            disabled,
            ghost,
            href,
            htmlType,
            icon,
            loading,
            shape,
            size,
            target,
            type,
            onClick,
            block,
            className
        } = this.props;
        return <Button
            block={block}
            type={type}
            onClick={onClick}
            size={size}
            icon={icon}
            shape={shape}
            disabled={disabled}
            ghost={ghost}
            htmlType={htmlType}
            loading={loading}
            target={target}
            className={className}
        >{this.props.children}</Button>;
    }
}

PButton.defaultProps = {
    prefixCls: 'ant-btn',
    loading: false,
    ghost: false,
    block: false,
    onClick: () => {}

};

PButton.propTypes = {
    type: PropTypes.string,
    shape: PropTypes.oneOf(['circle', 'circle-outline']),
    size: PropTypes.oneOf(['large', 'default', 'small']),
    htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
    onClick: PropTypes.func,
    loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    className: PropTypes.string,
    icon: PropTypes.string,
    block: PropTypes.bool,
};
