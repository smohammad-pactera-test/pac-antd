import React from 'react';
import PropTypes from 'prop-types'
import { Icon } from 'antd';


export default class PIcon extends React.Component {
    render() {
        const {
            type
        } = this.props
        return <Icon type={type} />
    }
}

PIcon.defaultProps = {
    type: 'omitted',

}

PIcon.propTypes = {
    icon: PropTypes.string.isRequired
}
