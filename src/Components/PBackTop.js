import React from 'react';
import PropTypes from 'prop-types';
import {BackTop} from 'antd';

export default class PBackTop extends React.Component {


    render() {

        const {
            visibilityHeight,
            onClick,
            target
        } = this.props;

        return (
            <BackTop visibilityHeight={visibilityHeight}
                onClick={onClick}
                target={target}/>
        );
    }
}
PBackTop.propTypes = {
    target:PropTypes.func,
    visibilityHeight:PropTypes.number,
    onClick:PropTypes.func
};

PBackTop.defaultProps = {
    visibilityHeight:400,
    target:() => window
};

