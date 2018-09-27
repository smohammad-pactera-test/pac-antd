import React from 'react';
import PropTypes from 'prop-types';
import {Modal} from 'antd';

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
