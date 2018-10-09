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

Table.propTypes = {
    bordered:PropTypes.bool,
    columns:PropTypes.any,
    components:PropTypes.any,
    defaultExpandAllRows:PropTypes.bool,
    expandedRowRender:PropTypes.node,
    expandRowByClick:PropTypes.bool,
    footer:PropTypes.func,
    indentSize:PropTypes.number,
    locale:PropTypes.object,
    pagination:PropTypes.object,
    rowClassName:PropTypes.any,
    rowKey:PropTypes.any,
    rowSelection:PropTypes.object,
    showHeader:PropTypes.bool,
    title:PropTypes.func,
    onChange:PropTypes.func,
    onExpand:PropTypes.func,
    onExpandedRowsChange:PropTypes.func,
    onHeaderRow:PropTypes.func,
    onRow:PropTypes.func
};
