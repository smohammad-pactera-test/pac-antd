import React from 'react';
import PropTypes from 'prop-types';
import {Avatar} from 'antd';

export default class PAvatar extends React.Component {

    render() {

        const {
            icon,
            shape,
            size,
            src,
            alt,
            onError
        } = this.props;

        return (
            <Avatar icon={icon}
                shape={shape}
                size={size}
                src={src}
                alt={alt}
                onError={onError}>
                {this.props.children}
            </Avatar>
        );
    }

}

PAvatar.propTypes = {
    icon:PropTypes.string,
    shape:PropTypes.oneOf([
        'circle',
        'square'
    ]),
    size:PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    src:PropTypes.string,
    alt:PropTypes.string,
    onError:PropTypes.bool,
    children:PropTypes.element
};

PAvatar.defaultProps = {
    shape:'circle',
    size:'default'
};
