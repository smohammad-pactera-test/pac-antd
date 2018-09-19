import React from 'react';
import PropTypes from 'prop-types';
import {Spin} from 'antd';


export default class PSpinner extends React.Component{


    render(){

        const {
            prefixCls,
            className,
            spinning,
            size,
            wrapperClassName,
            indicator
        } = this.props;

        return(
            <Spin prefixCls={prefixCls}
                  className={className}
                  spinning={spinning}
                  size={size}
                  wrapperClassName={wrapperClassName}
                  indicator={indicator}>
                {this.props.children}
            </Spin>

        )

    }


}

PSpinner.defaultProps={
    spinning:true

}
