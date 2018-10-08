import React from 'react';
import PropTypes from 'prop-types';
import {Form} from 'antd';

class PForm extends React.Component {
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

const PFormCreate = Form.create;
export {
    PFormCreate,
    PForm
};