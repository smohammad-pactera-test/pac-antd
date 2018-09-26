import React from 'react';
import PropTypes from 'prop-types';
import  {Collapse}  from 'antd'


export default class PCollapse extends React.Component{
    render(){

        const {

            accordion,
            activeKey,
            bordered,
            defaultActiveKey,
            onChange,
            destroyInactivePanel

        }=this.props;


    return(
        <Collapse accordion={accordion}
                  activeKey={activeKey}
                  bordered={bordered}
                  defaultActiveKey={defaultActiveKey}
                  onChange={onChange}
                  destroyInactivePanel={destroyInactivePanel}

        >
            {this.props.children}
        </Collapse>

    );


    }
}

// PCollapse.defaultProps = {
//     accordion:false,
//     bordered:true,
//     destroyInactivePanel:false
// }
