import React from 'react';
import PropTypes from 'prop-types';
import {Tabs} from 'antd';


export default class PTabs extends React.Component{
    render(){

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
        }=this.props;
        console.log(this.props.children)
        return(
                    <Tabs //activeKey={activeKey}
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
