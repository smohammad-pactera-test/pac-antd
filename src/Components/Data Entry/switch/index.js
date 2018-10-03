import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'antd';

export default  class PSwitch extends React.Component{
    render(){
        const {
            autoFocus,
            checked,
            checkedChildren,
            defaultChecked,
            disabled,
            loading,
            size,
            unCheckedChildren,
            onChange,
            onBlur,
            onFocus
        } = this.props;

        return(
            <Switch autoFocus={autoFocus}
                    checked={checked}
                    checkedChildren={checkedChildren}
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                    loading={loading}
                    size={size}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    unCheckedChildren={unCheckedChildren}
                    onChange={onChange}/>
        );
    }
}