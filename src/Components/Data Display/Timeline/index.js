import React from 'react';
import PropTypes from 'prop-types';
import {Timeline,Icon} from 'antd';

export default class PTimeline extends React.Component {
    render() {

        const {
            pending,
            pendingDot,
            reverse,
            mode
        } = this.props;


        return (

            <Timeline pending={pending}
                pendingDot={pendingDot}
                reverse={reverse}
                mode={mode}>
                {this.props.children}
            </Timeline>
        );
    }
}

PTimeline.propTypes = {
    pending:PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.node
    ]),
    pendingDot:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    reverse:PropTypes.bool,
    mode:PropTypes.oneOfType([
        'left',
        'alternate',
        'right'
    ])
};

PTimeline.defaultProps = {
    pending:false,
    pendingDot:<Icon type="loading" />,
    reverse:false,
    mode:'left'
};
