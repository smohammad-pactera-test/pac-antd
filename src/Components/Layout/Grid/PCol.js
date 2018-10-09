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
PCol.propTypes = {
    offset:PropTypes.number,
    order:PropTypes.number,
    pull:PropTypes.number,
    push:PropTypes.number,
    span:PropTypes.number,
    xs:PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object
    ]),
    sm:PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object
    ]),
    md:PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object
    ]),
    lg:PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object
    ]),
    xl:PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object
    ]),
    xxl:PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object
    ]),
    children:PropTypes.element

};

PCol.defaultProps = {
    offset:0,
    order:0,
    pull:0,
    push:0
};