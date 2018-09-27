import React from 'react';
import PropTypes from 'prop-types';
import {Popover} from 'antd';

export default class PPopover extends React.Component{

    render(){

        const {
            content,
            title
        }= this.props;


        return(
        <Popover title={title} content={content}>
            {this.props.children}
        </Popover>
        );
    }
}

// PPopover.defaultProps={
//     prefixCls: 'ant-popover',
//     placement: 'top',
//     transitionName: 'zoom-big',
//     trigger: 'hover',
//     mouseEnterDelay: 0.1,
//     mouseLeaveDelay: 0.1,
//     overlayStyle: {}
// }
