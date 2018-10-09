import React from 'react';
import PropTypes from 'prop-types';
import {Tabs} from 'antd';


export default class PTabs extends React.Component {
    render() {

        const {
            activeKey,
            animated,
            renderTabBar,
            defaultActiveKey,
            hideAdd,
            size,
            tabBarExtraContent,
            tabBarGutter,
            tabBarStyle,
            tabPosition,
            type,
            onChange,
            onEdit,
            onNextClick,
            onPrevClick,
            onTabClick
        } = this.props;
        console.log(this.props.children);
        return (
            <Tabs // activeKey={activeKey}
                animated={animated}
                renderTabBar={renderTabBar}
                defaultActiveKey={defaultActiveKey}
                hideAdd={hideAdd}
                size={size}
                tabBarExtraContent={tabBarExtraContent}
                tabBarGutter={tabBarGutter}
                tabBarStyle={tabBarStyle}
                tabPosition={tabPosition}
                type={type}
                onChange={onChange}
                onEdit={onEdit}
                onNextClick={onNextClick}
                onPrevClick={onPrevClick}
                onTabClick={onTabClick}
            >
                {this.props.children}
            </Tabs>

        );
    }
}
Tabs.propTypes = {
    activeKey:PropTypes.string,
    animated:PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object
    ]),
    renderTabBar:PropTypes.node,
    defaultActiveKey:PropTypes.string,
    hideAdd:PropTypes.bool,
    size:PropTypes.oneOf([
        'large',
        'default',
        'small'
    ]),
    tabBarExtraContent:PropTypes.node,
    tabBarGutter:PropTypes.number,
    tabBarStyle:PropTypes.object,
    tabPosition:PropTypes.oneOf([
        'top',
        'right',
        'bottom',
        'left'
    ]),
    type:PropTypes.oneOf([
        'line',
        'card',
        'editable-card'
    ]),
    onChange:PropTypes.func,
    onEdit:PropTypes.func,
    onNextClick:PropTypes.func,
    onPrevClick:PropTypes.func,
    onTabClick:PropTypes.func
};
