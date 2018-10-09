import React from 'react';
import PropTypes from 'prop-types';
import {Modal} from 'antd';
import {PButtonProps} from '../../PButton';

export default class PModal extends React.Component {
    render() {

        const {
            prefixCls,
            onOk,
            onCancel,
            okText,
            cancelText,
            centered,
            width,
            confirmLoading,
            visible,
            align,
            footer,
            title,
            closable
        } = this.props;

        return (
            <Modal
                prefixCls={prefixCls}
                onOk={onOk}
                onCancel={onCancel}
                okText={okText}
                cancelText={cancelText}
                centered={centered}
                width={width}
                confirmLoading={confirmLoading}
                visible={visible}
                align={align}
                footer={footer}
                title={title}
                closable={closable}>
                {this.props.children}
            </Modal>
        );
    }
}

PModal.propTypes = {
    afterClose:PropTypes.func,
    bodyStyle:PropTypes.object,
    cancelText:PropTypes.string,
    centered:PropTypes.bool,
    closable:PropTypes.bool,
    confirmLoading:PropTypes.bool,
    destroyOnClose:PropTypes.bool,
    footer:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    getContainer: PropTypes.instanceOf(Element),
    mask:PropTypes.bool,
    maskClosable:PropTypes.bool,
    maskStyle:PropTypes.object,
    okText:PropTypes.string,
    okType:PropTypes.string,
    okButtonProps:PButtonProps,
    cancelButtonProps:PButtonProps,
    style:PropTypes.object,
    title:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    visible:PropTypes.bool,
    width:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    wrapClassName:PropTypes.string,
    zIndex:PropTypes.number,
    onCancel:PropTypes.func,
    onOk:PropTypes.func,
    children:PropTypes.element,
    prefixCls:PropTypes.any,
    align:PropTypes.object
};
