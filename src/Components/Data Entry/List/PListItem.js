import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'antd';

export default class PListItem extends React.Component {
    render() {
        const {
            xs,
            xl,
            sm,
            lg,
            xxl,
            md,
            column,
            extra,
            alt,
            src,
            actions,
            gutter

        } = this.props;

        return (
            <List.Item xs={xs}
                xl={xl}
                sm={sm}
                lg={lg}
                xxl={xxl}
                md={md}
                column={column}
                extra={extra}
                alt={alt}
                src={src}
                actions={actions}
                gutter={gutter}>
                {this.props.children}
            </List.Item>
        );
    }
}

PListItem.propTypes = {
    xs: PropTypes.number,
    xl: PropTypes.number,
    sm: PropTypes.number,
    lg: PropTypes.number,
    xxl: PropTypes.number,
    md: PropTypes.number,
    column: PropTypes.number,
    extra: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    alt: PropTypes.string,
    src: PropTypes.string,
    actions: PropTypes.array,
    gutter: PropTypes.number,
    size: PropTypes.oneOf([
        'default',
        'middle',
        'small'
    ]),
    children:PropTypes.element
};

PListItem.defaultProps = {
    gutter:0,
    size:'default'
};