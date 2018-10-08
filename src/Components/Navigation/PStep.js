import React from 'react';
import PropTypes from 'prop-types';
import {Steps} from 'antd';


export default class PStep extends React.Component {


    render() {

        const Step = Steps.Step;

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
