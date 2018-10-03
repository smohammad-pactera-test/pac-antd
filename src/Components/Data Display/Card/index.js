import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

export default class PCard extends React.Component{
    render(){

        const {
            actions,
            activeTabKey,
            headStyle,
            bodyStyle,
            bordered,
            cover,
            defaultActiveTabKey,
            extra,
            hoverable,
            loading,
            tabList,
            title,
            type,
            onTabChange,
            style
        } = this.props;

        return(
            <Card actions={actions}
                  activeTabKey={activeTabKey}
                  headStyle={headStyle}
                  bodyStyle={bodyStyle}
                  bordered={bordered}
                  cover={cover}
                  style={style}
                  defaultActiveTabKey={defaultActiveTabKey}
                  extra={extra}
                  hoverable={hoverable}
                  loading={loading}
                  tabList={tabList}
                  title={title}
                  type={type}
                  onTabChange={onTabChange}>
                {this.props.children}
            </Card>
        );
    }
}