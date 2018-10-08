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
