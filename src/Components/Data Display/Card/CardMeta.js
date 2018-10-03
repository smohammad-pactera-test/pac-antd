import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'antd'

export default class CardMeta extends React.Component {
    render() {

        const {
            title,
            description
        } = this.props;


        return (
            <Card.Meta title={title}
                       description={description}>
                {this.props.children}
            </Card.Meta>
        );
    }
}