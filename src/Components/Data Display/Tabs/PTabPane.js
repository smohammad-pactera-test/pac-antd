import React from 'react';
import PropTypes from 'prop-types';
import {Tabs} from 'antd';

export default class PTabPane extends React.Component {
    render() {
        const TabPane = Tabs.TabPane;
        const { children, ...rest} = this.props;
        return (
            <TabPane rootPrefixCls={'ant-tabs'} {...rest}>
                {children}
            </TabPane>

        );
    }
}
PTabPane.propTypes = {
    children:PropTypes.instanceOf(Element)
};
PTabPane.defaultProps = {
    forceRender:false
};
