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

        } = this.props;

        return (
            <List.Item xs={xs}
                xl={xl}
                sm={sm}
                lg={lg}
                xxl={xxl}
                md={md}
                column={column}>
                {this.props.children}
            </List.Item>
        );
    }
}