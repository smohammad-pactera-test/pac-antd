import React from 'react';
import PropTypes from 'prop-types';
import {Timeline,Icon} from 'antd';

export default class PTimeline extends React.Component{
    render(){

        const {
            pending,
            pendingDot,
            reverse,
            mode
        }= this.props;


        return(

            <Timeline pending={pending}
                      pendingDot={pendingDot}
                      reverse={reverse}
                      mode={mode}>
                {this.props.children}
            </Timeline>
        );
    }
}

PTimeline.defaultProps={
    pending:false,
    pendingDot:<Icon type="loading" />,
    reverse:false,
    mode:'left'
}
