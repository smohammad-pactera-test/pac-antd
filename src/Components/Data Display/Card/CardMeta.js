import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'antd';

export default class PCardMeta extends React.Component {
    render() {

        const {
            avatar,
            className,
            description,
            style,
            title
        } = this.props;

        return (
            <Card.Meta
                avatar={avatar}
                className={className}
                description={description}
                style={style}
                title={title}
            />
        );
    }
}

PCardMeta.propTypes = {
    avatar:PropTypes.node,
    className:PropTypes.string,
    description:PropTypes.node,
    style:PropTypes.object,
    title:PropTypes.node
};
