import React from 'react';
import PropTypes from 'prop-types';
import {Steps} from 'antd';


export default class PStep extends React.Component {
    render() {
        const {
            description,
            icon,
            status,
            title
        } = this.props;
        return (
            <Steps.Step description={description}
                icon={icon}
                status={status}
                title={title}>
                {this.props.children}
            </Steps.Step>
        );
    }
}
PStep.propTypes = {
    description:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    icon:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    status:PropTypes.string,
    title:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    children:PropTypes.element
};

PStep.defaultProps = {
    status:'wait'
};