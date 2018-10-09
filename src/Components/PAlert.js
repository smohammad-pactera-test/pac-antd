import React from 'react';
import {Alert} from 'antd';
import PropTypes from 'prop-types';

export default class PAlert extends React.Component {


    render() {

        const {
            afterClose,
            banner,
            closable,
            closeText,
            description,
            iconType,
            message,
            showIcon,
            type,
            onClose,
            icon
        } = this.props;


        return (
            <Alert
                afterClose={afterClose}
                banner={banner}
                closable={closable}
                closeText={closeText}
                description={description}
                // iconType={iconType}
                message={message}
                showIcon={showIcon}
                icon={icon}
                type={type}
                onClose={onClose}
            >
                {this.props.children}
            </Alert>
        );

    }

}

PAlert.propTypes = {
    afterClose:PropTypes.func,
    banner:PropTypes.bool,
    closable:PropTypes.bool,
    closeText:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    description:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    icon:PropTypes.node,
    message:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    showIcon:PropTypes.bool,
    type:PropTypes.string,
    onClose:PropTypes.func,
    children:PropTypes.node
};

PAlert.defaultProps = {
    banner:false
};