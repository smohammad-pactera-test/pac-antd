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
PRow.propTypes = {
    align:PropTypes.string,
    gutter:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    justify:PropTypes.string,
    type:PropTypes.string,
    children:PropTypes.element
};

PRow.defaultProps = {
    align:'top',
    gutter:0,
    justify:'start'
};