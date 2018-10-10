import React from 'react';
import PropTypes from 'prop-types';
import {Steps} from 'antd';


export default class PSteps extends React.Component {

    render() {
        const {
            current,
            direction,
            labelPlacement,
            progressDot,
            size,
            status,
            initial
        } = this.props;

        return (
            <Steps current={current}
                direction={direction}
                labelPlacement={labelPlacement}
                progressDot={progressDot}
                size={size}
                status={status}
                initial={initial}>
                {this.props.children}
            </Steps>
        );
    }
}

PSteps.defaultProps = {
    prefixCls: 'ant-steps',
    iconPrefix: 'ant',
    current: 0,
    direction:'horizontal',
    labelPlacement:'horizontal',
    progressDot:false,
    size:'default',
    status:'process',
    initial:0
};

PSteps.propTypes = {
    prefixCls: PropTypes.string,
    iconPrefix: PropTypes.string,
    current: PropTypes.number,
    direction:PropTypes.string,
    labelPlacement:PropTypes.string,
    progressDot:PropTypes.bool,
    size:PropTypes.string,
    status:PropTypes.string,
    initial:PropTypes.number,
    children:PropTypes.element
};
