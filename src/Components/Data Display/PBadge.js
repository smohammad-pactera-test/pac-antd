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
