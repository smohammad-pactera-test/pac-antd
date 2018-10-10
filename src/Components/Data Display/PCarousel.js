import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';

export default class PCarousel extends React.Component {

    render() {


        const {
            afterChange,
            autoplay,
            beforeChange,
            dots,
            easing,
            effect,
            vertical
        } = this.props;


        return (

            <Carousel afterChange={afterChange}
                autoplay={autoplay}
                beforeChange={beforeChange}
                dots={dots}
                easing={easing}
                effect={effect}
                vertical={vertical} >
                {this.props.children}
            </Carousel>

        );
    }
}
PCarousel.propTypes = {
    afterChange:PropTypes.func,
    autoplay:PropTypes.bool,
    beforeChange:PropTypes.func,
    dots:PropTypes.bool,
    easing:PropTypes.string,
    effect:PropTypes.oneOf([
        'scrollx',
        'fade'
    ]),
    vertical:PropTypes.bool,
    children:PropTypes.element
};

PCarousel.defaultProps = {
    autoplay:false,
    dots:true,
    easing:'linear',
    effect:'scrollx',
    vertical:false
};