import React from 'react';
import PropTypes from 'prop-types';
import {Skeleton} from 'antd';

export default class PSkeleton extends React.Component {
    render() {

        const {
            active,
            avatar,
            loading,
            paragraph,
            title
        } = this.props;

        return (
            <Skeleton active={active}
                avatar={avatar}
                loading={loading}
                paragraph={paragraph}
                title={title}>
                {this.props.children}
            </Skeleton>
        );
    }
}

PSkeleton.propTypes = {
    active:PropTypes.bool,
    avatar:PropTypes.any,
    loading:PropTypes.bool,
    paragraph:PropTypes.any,
    title:PropTypes.any,
    children:PropTypes.element
};

PSkeleton.defaultProps = {
    active:false,
    avatar:false,
    paragraph:true,
    title:true
};

