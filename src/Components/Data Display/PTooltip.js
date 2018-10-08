import React from 'react';
import PropType from 'prop-types';
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
            visible,
            onVisibleChange
        } = this.props;


        return (
            <Tooltip title={title}
                // arrowPointAtCenter={arrowPointAtCenter}
                // autoAdjustOverflow={autoAdjustOverflow}
                // defaultVisible={defaultVisible}
                // getPopupContainer={getPopupContainer}
                // mouseEnterDelay={mouseEnterDelay}
                // mouseLeaveDelay={mouseLeaveDelay}
                // overlayClassName={overlayClassName}
                // overlayStyle={overlayStyle}
                // placement={placement}
                // trigger={trigger}
                // visible={visible}
                // onVisibleChange={onVisibleChange}
            >
                {this.props.children}
            </Tooltip>
        );
    }
}

PTooltip.defaultProps = {
    prefixCls: 'ant-tooltip',
    placement: 'top',
    transitionName: 'zoom-big-fast',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    arrowPointAtCenter: false,
    autoAdjustOverflow: true,
};
