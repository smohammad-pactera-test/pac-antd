import React from 'react';
import PropTypes from 'prop-types';
import {Row} from 'antd';

export default class PRow extends React.Component {
    render() {
        const {
            align,
            gutter,
            justify,
            type
        } = this.props;
        return (
            <Row align={align}
                gutter={gutter}
                justify={justify}
                type={type}
            >
                {this.props.children}
            </Row>
        );
    }
}
