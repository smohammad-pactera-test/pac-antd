import React from 'react';
import PropTypes from 'prop-types';
import {Collapse} from 'antd';

export default class PPanel extends React.Component {
    render() {
        const Panel  = Collapse.Panel;

        const {
            disabled,
            forceRender,
            header,
            key,
            showArrow
        } = this.props;

        return (
            <Panel disabled={disabled}
                forceRender={forceRender}
                header={header}
                key={key}
                showArrow={showArrow}
            >
                {this.props.children}
            </Panel>
        );
    }
}

PPanel.defaultProps = {
    disabled:false,
    forceRender:false,
    showArrow:true
};

PPanel.propTypes = {
    disabled:PropTypes.bool,
    forceRender:PropTypes.bool,
    header:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    key:PropTypes.string,
    showArrow:PropTypes.bool,
    children:PropTypes.element
};
