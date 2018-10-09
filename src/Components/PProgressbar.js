import React from 'react';
import {Progress} from 'antd';
import PropTypes from 'prop-types';

export default class PProgressbar extends React.Component {

    render() {

        const {
            status,
            type,
            showInfo,
            percent,
            width,
            strokeWidth,
            strokeLinecap,
            strokeColor,
            trailColor,
            format,
            gapDegree,
        } = this.props;

        return (
            <Progress status={status}
                type={type}
                showInfo={showInfo}
                percent={percent}
                width={width}
                strokeWidth={strokeWidth}
                strokeLinecap={strokeLinecap}
                strokeColor={strokeColor}
                trailColor={trailColor}
                format={format}
                gapDegree={gapDegree}

            />
        );


    }
}

PProgressbar.propTypes = {
    format:PropTypes.func,
    gapDegree:PropTypes.number,
    gapPosition:PropTypes.string,
    percent:PropTypes.number,
    showInfo:PropTypes.bool,
    status:PropTypes.string,
    strokeWidth:PropTypes.number,
    strokeLinecap:PropTypes.number,
    strokeColor:PropTypes.string,
    successPercent:PropTypes.number,
    type:PropTypes.string,
    width:PropTypes.number,
    trailColor:PropTypes.string
};


PProgressbar.defaultProps = {
    format:() => {},
    gapDegree:0,
    gapPosition:'top',
    percent:0,
    showInfo:true,
    strokeWidth:10,
    strokeLinecap:'round',
    successPercent:0,
    type:'line',
    trailColor: '#f3f3f3'
};
