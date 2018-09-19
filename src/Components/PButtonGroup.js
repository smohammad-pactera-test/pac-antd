import React from 'react';
import PropTypes from 'prop-types'
import { Button } from 'antd';


export default class PButtonGroup extends React.Component {
    render() {
        return <Button.Group>{this.props.children}</Button.Group>
    }
}


PButtonGroup.propTypes = {
    children: PropTypes.element.isRequired
}
