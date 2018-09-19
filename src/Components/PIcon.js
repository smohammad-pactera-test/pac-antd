import React from 'react';
import PropTypes from 'prop-types'
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
        } = this.props

        return <Icon type={type}
                     style={style}
                     theme={theme}
                     spin={spin}
                     component={component}
                     twoToneColor={twoToneColor}
        />
    }
}

PIcon.defaultProps = {
    type: 'omitted',

}

PIcon.propTypes = {
    icon: PropTypes.string.isRequired
}
