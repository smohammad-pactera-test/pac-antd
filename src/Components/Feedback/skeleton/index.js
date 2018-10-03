import React from 'react';
import PropTypes from 'prop-types';
import {Skeleton} from 'antd'
export default class PSkeleton extends React.Component{
    render(){

        const {
            active,
            avatar,
            loading,
            paragraph,
            title
        } = this.props;

        return(
            <Skeleton active={active}
                      avatar={avatar}
                      //loading={loading}
                      paragraph={paragraph}
                      title={title}>
                {this.props.children}
            </Skeleton>
        );
    }
}