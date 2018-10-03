import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

export default class PCardGrid extends  React.Component{
    render() {
        const {
            className,
            style
        }=this.props;
        return (
           <Card.Grid style={style}
                      className={className} >
               {this.props.children}
           </Card.Grid>
        );
    }
}