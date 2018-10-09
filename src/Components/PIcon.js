import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';


export default class PIcon extends React.Component {
    render() {
        const {
            type,
            style,
            theme,
            spin,
            component,
            twoToneColor
        } = this.props;

        return <Icon type={type}
            style={style}
            theme={theme}
            spin={spin}
            component={component}
            twoToneColor={twoToneColor}
        />;
    }
}

PIcon.defaultProps = {
    type: 'omitted',
    spin:'false'
};

PIcon.propTypes = {
    type:PropTypes.string,
    style:PropTypes.object,
    theme:PropTypes.oneOf(['filled', 'circle-filled','twoTone']),
    spin:PropTypes.bool,
    component:PropTypes.node,
    twoToneColor:PropTypes.string
};
