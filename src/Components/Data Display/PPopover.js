import React from 'react';
import PropTypes from 'prop-types';
import {Popover} from 'antd';

export default class PPopover extends React.Component {

    render() {

        const {
            content,
            title
        } = this.props;


        return (
            <Popover title={title} content={content}>
                {this.props.children}
            </Popover>
        );
    }
}

PPopover.propTypes = {
    content:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    title:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    children:PropTypes.node
};
