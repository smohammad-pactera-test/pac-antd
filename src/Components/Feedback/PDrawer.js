import React from 'react';
import PropTypes from 'prop-types';
import {Drawer} from 'antd'

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
