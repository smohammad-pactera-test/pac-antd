import React from 'react';
import PropTypes from 'prop-types';
import {Tooltip} from 'antd';


export default class PTooltip extends React.Component {

    render() {

        const {
            title,
            arrowPointAtCenter,
            autoAdjustOverflow,
            defaultVisible,
            getPopupContainer,
            mouseEnterDelay,
            mouseLeaveDelay,
            overlayClassName,
            overlayStyle,
            placement,
            trigger,
            // visible,
            onVisibleChange
        } = this.props;


        return (
            <Tooltip title={title}
                arrowPointAtCenter={arrowPointAtCenter}
                autoAdjustOverflow={autoAdjustOverflow}
                defaultVisible={defaultVisible}
                getPopupContainer={getPopupContainer}
                mouseEnterDelay={mouseEnterDelay}
                mouseLeaveDelay={mouseLeaveDelay}
                overlayClassName={overlayClassName}
                overlayStyle={overlayStyle}
                placement={placement}
                trigger={trigger}
                // visible={visible}
                onVisibleChange={onVisibleChange}
            >
                {this.props.children}
            </Tooltip>
        );
    }
}
PTooltip.propTypes = {
    title:PropTypes.node,
    arrowPointAtCenter:PropTypes.PropTypes.bool,
    autoAdjustOverflow:PropTypes.PropTypes.bool,
    defaultVisible:PropTypes.PropTypes.bool,
    getPopupContainer:PropTypes.PropTypes.func,
    mouseEnterDelay:PropTypes.number,
    mouseLeaveDelay:PropTypes.number,
    overlayClassName:PropTypes.string,
    overlayStyle:PropTypes.object,
    placement:PropTypes.string,
    trigger:PropTypes.oneOf([
        'hover',
        'focus',
        'click',
        'contextMenu'
    ]),
    onVisibleChange:PropTypes.func,
    align:PropTypes.object,
    children:PropTypes.element
};

PTooltip.defaultProps = {
    prefixCls: 'ant-tooltip',
    placement: 'top',
    transitionName: 'zoom-big-fast',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    arrowPointAtCenter: false,
    autoAdjustOverflow: true,
};
