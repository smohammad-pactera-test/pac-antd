import React from 'react';
import PropTypes from 'prop-types';
import {Table} from 'antd';

export default class PTable extends  React.Component {
    render() {

        const {
            dataSource,
            columns,
            prefixCls,
            useFixedHeader,
            rowSelection,
            className,
            size,
            loading,
            bordered,
            onChange,
            locale,
            dropdownPrefixCls,
            pagination,
            title,
            footer,
            expandedRowRender,
            scroll
        } = this.props;

        return (
            <Table
                dataSource={dataSource}
                columns={columns}
                prefixCls={prefixCls}
                useFixedHeader={useFixedHeader}
                rowSelection={rowSelection}
                className={className}
                size={size}
                loading={loading}
                bordered={bordered}
                onChange={onChange}
                locale={locale}
                dropdownPrefixCls={dropdownPrefixCls}
                pagination={pagination}
                title={title}
                footer={footer}
                expandedRowRender={expandedRowRender}
                scroll={scroll}
            />
        );
    }
}
