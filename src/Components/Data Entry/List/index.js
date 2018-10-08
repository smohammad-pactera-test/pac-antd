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
                // loading={loading}
                loadMore={loadMore}
                pagination={pagination}
                prefixCls={prefixCls}
                rowKey={rowKey}
                renderItem={renderItem}
                size={size}
                split={true}
                header={header}
                footer={footer}
                locale={locale}
            />
        );
    }
}