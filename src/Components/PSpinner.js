import React from 'react';
import PropTypes from 'prop-types';
import {Spin} from 'antd';


export default class PSpinner extends React.Component {


    render() {

        const {
            prefixCls,
            className,
            spinning,
            size,
            wrapperClassName,
            indicator,
            delay,
            tip
        } = this.props;

        return (
            <Spin prefixCls={prefixCls}
                delay={delay}
                className={className}
                spinning={spinning}
                size={size}
                tip={tip}
                wrapperClassName={wrapperClassName}
                indicator={indicator}>
                {this.props.children}
            </Spin>

        );

    }


}

PSpinner.propTypes = {
    delay:PropTypes.string,
    indicator:PropTypes.element,
    size:PropTypes.string,
    spinning:PropTypes.bool,
    tip:PropTypes.string,
    wrapperClassName:PropTypes.string,
    children:PropTypes.node,
    prefixCls:PropTypes.string,
    className:PropTypes.string
};
PSpinner.defaultProps = {
    spinning: true
};
