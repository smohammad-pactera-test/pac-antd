import React from 'react';
import PropTypes from 'prop-types';
import { Anchor } from 'antd';

export default class PAnchor extends React.Component {

    render() {

        const {
            affix,
            bounds,
            getContainer,
            offsetBottom,
            offsetTop,
            showInkInFixed,
            onClick

        } = this.props;


        return (
            <Anchor affix={affix}
                bounds={bounds}
                getContainer={getContainer}
                offsetBottom={offsetBottom}
                offsetTop={offsetTop}
                showInkInFixed={showInkInFixed}
                onClick={onClick}>
                {this.props.children}
            </Anchor>
        );
    }
}

PAnchor.defaultProps = {
    affix:true,
    bounds:5,
    getContainer:() => window,
    offsetTop:0,
    showInkInFixed:false
};

PAnchor.PropTypes = {
    affix:PropTypes.bool,
    bounds:PropTypes.number,
    getContainer:PropTypes.func,
    offsetTop:PropTypes.number,
    showInkInFixed:PropTypes.bool,
    offsetBottom:PropTypes.bool,
    onClick:PropTypes.func
};
