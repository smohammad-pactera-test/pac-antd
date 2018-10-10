import React from 'react';
import PropTypes from 'prop-types';
import {Input} from 'antd';

export default class PInputTextArea extends React.Component {
    render() {
        const {
            onChange,
            autosize,
            defaultValue,
            value,
            onPressEnter,
            autocapitalize,
            autocomplete,
            autofocus,
            cols,
            disabled,
            form,
            maxlength,
            minlength,
            name,
            placeholder,
            readonly,
            required,
            rows,
            spellcheck,
            wrap
        } = this.props;
        return (
            <Input.TextArea autosize={autosize}
                defaultValue={defaultValue}
                value={value}
                onPressEnter={onPressEnter}
                autoCapitalize={autocapitalize}
                autoComplete={autocomplete}
                autoFocus={autofocus}
                cols={cols}
                disabled={disabled}
                form={form}
                maxLength={maxlength}
                minLength={minlength}
                name={name}
                placeholder={placeholder}
                readOnly={readonly}
                required={required}
                rows={rows}
                spellCheck={spellcheck}
                wrap={wrap}
                onChange={onChange}

            >
                {this.props.children}
            </Input.TextArea>
        );
    }
}
PInputTextArea.propTypes = {
    addonAfter:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    addonBefore:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    defaultValue:PropTypes.string,
    disabled:PropTypes.bool,
    id:PropTypes.string,
    prefix:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    size:PropTypes.string,
    suffix:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    type:PropTypes.string,
    value:PropTypes.string,
    onChange:PropTypes.func,
    onPressEnter:PropTypes.func,
    autosize:PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object
    ]),
    autocapitalize:PropTypes.bool,
    autocomplete:PropTypes.bool,
    autofocus:PropTypes.bool,
    cols:PropTypes.any,
    form:PropTypes.any,
    maxlength:PropTypes.number,
    minlength:PropTypes.number,
    name:PropTypes.number,
    placeholder:PropTypes.string,
    readonly:PropTypes.bool,
    required:PropTypes.bool,
    rows:PropTypes.any,
    spellcheck:PropTypes.bool,
    wrap:PropTypes.any,
    children:PropTypes.element


};