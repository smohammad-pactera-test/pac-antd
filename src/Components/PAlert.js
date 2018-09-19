import React from 'react';
import {Alert} from 'antd';

export default class PAlert extends React.Component{


    render(){

        const {

            afterClose,
            banner,
            closable,
            closeText,
            description,
            iconType,
            message,
            showIcon,
            type,
            onClose

        } = this.props;


        return(
            <Alert
                afterClose={afterClose}
                banner={banner}
                closable={closable}
                closeText={closeText}
                description={description}
                iconType={iconType}
                message={message}
                showIcon={showIcon}
                type={type}
                onClose={onClose}
            >
                {this.props.children}
            </Alert>
        )

    }

}
