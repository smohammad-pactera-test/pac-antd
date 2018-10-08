import React from 'react';
import PropTypes from 'prop-types';
import {Col} from 'antd';

export default class PCol extends React.Component {
    render() {

        const {
            offset,
            order,
            pull,
            push,
            span,
            xs,
            sm,
            md,
            lg,
            xl,
            xxl
        } = this.props;

        return (
            <Col offset={offset}
                order={order}
                pull={pull}
                push={push}
                span={span}
                xs={xs}
                sm={sm}
                md={md}
                lg={lg}
                xl={xl}
                xxl={xxl}>
                {this.props.children}
            </Col>
        );
    }
}
