import React from 'react';
import PropTypes from 'prop-types';
import {Pagination} from 'antd';


export default class PPagination extends React.Component {

    render() {
        const {
            total,
            current,
            defaultCurrent,
            defaultPageSize,
            hideOnSinglePage,
            itemRender,
            //  pageSize,
            pageSizeOptions,
            showQuickJumper,
            showSizeChanger,
            showTotal,
            simple,
            size,
            onChange,
            onShowSizeChange
        } = this.props;


        return (
            <Pagination total={total}
                current={current}
                defaultCurrent={defaultCurrent}
                defaultPageSize={defaultPageSize}
                hideOnSinglePage={hideOnSinglePage}
                itemRender={itemRender}
                // pageSize={pageSize}
                pageSizeOptions={pageSizeOptions}
                showQuickJumper={showQuickJumper}
                showSizeChanger={showSizeChanger}
                showTotal={showTotal}
                simple={simple}
                size={size}
                onChange={onChange}
                onShowSizeChange={onShowSizeChange}
            />

        );
    }
}

PPagination.propTypes = {
    current:PropTypes.number,
    defaultCurrent:PropTypes.number,
    defaultPageSize:PropTypes.number,
    hideOnSinglePage:PropTypes.bool,
    itemRender:PropTypes.node,
    pageSize:PropTypes.number,
    pageSizeOptions:PropTypes.arrayOf(PropTypes.string),
    showQuickJumper:PropTypes.bool,
    showSizeChanger:PropTypes.bool,
    showTotal:PropTypes.func,
    simple:PropTypes.bool,
    size:PropTypes.string,
    total:PropTypes.number,
    onChange:PropTypes.func,
    onShowSizeChange:PropTypes.func

};


PPagination.defaultProps = {
    prefixCls: 'ant-pagination',
    selectPrefixCls: 'ant-select',
    current:0,
    defaultCurrent:1,
    defaultPageSize:10,
    hideOnSinglePage:false,
    pageSizeOptions:[10,20,30,40],
    showQuickJumper:false,
    showSizeChanger:false,
    total:0,
    pageSize:10
};
