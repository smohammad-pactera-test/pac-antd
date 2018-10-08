import React from 'react';
import PropTypes from 'prop-types';
import {Divider} from 'antd';


export default class PDivider extends React.Component {

    render() {

        const {
            className,
            dashed,
            orientation,
            style,
            type
        } = this.props;

        return (

            <Divider className={className}
                dashed={dashed}
                orientation={orientation}
                style={style}
                type={type}>
                {this.props.children}
            </Divider>

        );
    }
}
