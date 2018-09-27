import React from 'react';
import PropTypes from 'prop-types';
import {Anchor} from 'antd';
export default class PLink extends React.Component{

    render(){
        const {Link} = Anchor;

        const {
            href,
            title
        }= this.props;

        return(
            <Link href={href} title={title}>
                {this.props.children}
            </Link>
        )
    }
}

PLink.PropTypes={
    href:PropTypes.func,
    title:PropTypes.string
}
