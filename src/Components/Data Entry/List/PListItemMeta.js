import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
export default class PListItemMeta extends React.Component {

    render() {

        const {
            avatar,
            description,
            title

        } = this.props;

        return (
            <List.Item.Meta avatar={avatar}
                description={description}
                title={title}>
                {this.props.children}
            </List.Item.Meta>
        );
    }

}
PListItemMeta.propTypes = {
    avatar:PropTypes.node,
    children:PropTypes.element,
    description:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    title:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ])
};