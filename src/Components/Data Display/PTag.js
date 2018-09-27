import React from 'react';
import { Tag } from 'antd';

export default class PTag extends React.Component{
    render(){


        const {
            afterClose,
            closable,
            color,
            onClose,
            visible
        } = this.props;

        return(
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

PTag.defaultProps={
    visible:true
}
