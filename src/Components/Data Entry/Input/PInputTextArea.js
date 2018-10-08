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
