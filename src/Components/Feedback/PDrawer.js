import React from 'react';
import PropTypes from 'prop-types';
import {Drawer} from 'antd';

export default class PDrawer extends React.Component {
    render() {

        const {
            closable,
            destroyOnClose,
            getContainer,
            maskClosable,
            mask,
            maskStyle,
            style,
            title,
            visible,
            width,
            zIndex,
            prefixCls,
            placement,
            onClose,
            className
        } = this.props;

        return (
            <Drawer
                closable={closable}
                destroyOnClose={destroyOnClose}
                getContainer={getContainer}
                maskClosable={maskClosable}
                mask={mask}
                maskStyle={maskStyle}
                style={style}
                title={title}
                visible={visible}
                width={width}
                zIndex={zIndex}
                prefixCls={prefixCls}
                placement={placement}
                onClose={onClose}
                className={className}
            >
                {this.props.children}
            </Drawer>
        );
    }
}

PDrawer.propTypes = {
    closable: PropTypes.bool,
    destroyOnClose: PropTypes.bool,
    getContainer: PropTypes.instanceOf(Element),
    mask: PropTypes.bool,
    maskClosable: PropTypes.bool,
    maskStyle: PropTypes.object,
    style: PropTypes.object,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    visible: PropTypes.bool,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    className: PropTypes.string,
    zIndex: PropTypes.number,
    placement: PropTypes.oneOf([
        'top',
        'right',
        'bottom',
        'left'
    ]),
    onClose: PropTypes.func,
    prefixCls:PropTypes.any,
    children:PropTypes.element
};

PDrawer.defaultProps = {
    closable: true,
    destroyOnClose: false,
    getContainer: 'body',
    mask: true,
    maskClosable: true,
    maskStyle: {},
    visible: false,
    width: 256,
    zIndex: 1000,
    placement: 'right'
};