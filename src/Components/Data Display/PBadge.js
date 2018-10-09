import React from 'react';
import PropTypes from 'prop-types';
import {Badge} from 'antd';

export default class PBadge extends React.Component {

    render() {
        const {
            count,
            showZero,
            dot,
            overflowCount,
            offset,
            status,
            text,
            title
        } = this.props;
        return (
            <Badge count={count}
                showZero={showZero}
                dot={dot}
                overflowCount={overflowCount}
                offset={offset}
                status={status}
                text={text}
                title={title}
            >
                {this.props.children}
            </Badge>
        );
    }
}

PBadge.propTypes = {
    count:PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.node
    ]),
    dot:PropTypes.bool,
    offset:PropTypes.arrayOf(PropTypes.number),
    overflowCount:PropTypes.number,
    showZero:PropTypes.bool,
    status:PropTypes.oneOf([
        'success',
        'processing',
        'default',
        'error',
        'warning'
    ]),
    text:PropTypes.string,
    title:PropTypes.string
};

PBadge.defaultProps = {
    dot:false,
    overflowCount:99,
    showZero:false,
    title:'count'
};