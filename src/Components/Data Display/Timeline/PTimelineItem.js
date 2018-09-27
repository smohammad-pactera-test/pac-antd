import React from 'react';
import PropTypes from 'prop-types';
import {Timeline} from 'antd'


export default class PTimelineItem extends React.Component{
    render(){
        const {
            color,
            dot

        }=this.props;
        return(
            <Timeline.Item color={color}
                           dot={dot}>
                {this.props.children}
            </Timeline.Item>
        );

    }
}

PTimelineItem.defaultProps={
    color:'blue'
}
