import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'antd';


export default class PList extends React.Component {
    render() {

        const {
            bordered,
            className,
            dataSource,
            extra,
            grid,
            id,
            itemLayout,
            loading,
            loadMore,
            pagination,
            prefixCls,
            rowKey,
            renderItem,
            size,
            split,
            header,
            footer,
            locale
        }
            = this.props;

        return (
            <List bordered={bordered}
                className={className}
                dataSource={dataSource}
                extra={extra}
                grid={grid}
                id={id}
                itemLayout={itemLayout}
                loading={loading}
                loadMore={loadMore}
                pagination={pagination}
                prefixCls={prefixCls}
                rowKey={rowKey}
                renderItem={renderItem}
                size={size}
                split={split}
                header={header}
                footer={footer}
                locale={locale}
            />
        );
    }
}

PList.propTypes = {
    bordered: PropTypes.bool,
    footer: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    grid: PropTypes.object,
    header: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    itemLayout: PropTypes.string,
    loading: false,
    loadMore: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    locale: PropTypes.object,
    pagination: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object
    ]),
    split: PropTypes.bool,
    className:PropTypes.string,

};

PList.defaultProps = {
    bordered: false,
    loading: false,
    locale: {emptyText: 'No Data'},
    pagination:false,
    split:true
};

