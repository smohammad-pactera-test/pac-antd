import React from 'react';
import { Tag } from 'antd';
import PropTypes from 'prop-types';
export default class PTag extends React.Component {
    render() {


        const {
            afterClose,
            closable,
            color,
            onClose,
            visible
        } = this.props;

        return (
            <Tag afterClose={afterClose}
                closable={closable}
                color={color}
                onClose={onClose}
                visible={visible}>
                {this.props.children}
            </Tag>
        );
    }
}

PTag.defaultProps = {
    visible:true,
    closable:false
};
PTag.propTypes = {
    afterClose:PropTypes.func,
    closable:PropTypes.bool,
    color:PropTypes.string,
    onClose:PropTypes.func,
    visible:PropTypes.bool
};
