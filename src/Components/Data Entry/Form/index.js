import React from 'react';
import PropTypes from 'prop-types';
import {Form} from 'antd';

export default class PForm extends React.Component {
    render() {

        const {
            form,
            hideRequiredMark,
            layout,
            onSubmit
        } = this.props;

        return (
            <Form form={form}
                hideRequiredMark={hideRequiredMark}
                layout={layout}
                onSubmit={onSubmit}>
                {this.props.children}
            </Form>
        );
    }
}

PForm.propTypes = {
    form:PropTypes.object,
    hideRequiredMark:PropTypes.bool,
    layout:PropTypes.oneOf([
        'horizontal',
        'vertical',
        'inline'
    ]),
    onSubmit:PropTypes.func,
    children:PropTypes.element
};

PForm.defaultProps = {
    hideRequiredMark:false,
    layout:'horizontal'
};
const PFormCreate = Form.create;
export {
    PFormCreate,
    PForm
};

