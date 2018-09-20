import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import 'antd/dist/antd.css';
import PBackTop from '../Components/PBackTop';

const stories = storiesOf('Back Top', module);
stories.addDecorator(withKnobs);

stories.add('BackTop with height visibility', withInfo({})(() => (
    <div>
   <PBackTop visibilityHeight={number('height of row for visiblity of button', 400)}/>
        Scroll down to see the bottom-right
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque libero, quidem? Assumenda consequuntur dolorem esse ipsam ipsum minima modi neque numquam, officiis provident quam quod repellendus rerum soluta tenetur voluptatem!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque libero, quidem? Assumenda consequuntur dolorem esse ipsam ipsum minima modi neque numquam, officiis provident quam quod repellendus rerum soluta tenetur voluptatem!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque libero, quidem? Assumenda consequuntur dolorem esse ipsam ipsum minima modi neque numquam, officiis provident quam quod repellendus rerum soluta tenetur voluptatem!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque libero, quidem? Assumenda consequuntur dolorem esse ipsam ipsum minima modi neque numquam, officiis provident quam quod repellendus rerum soluta tenetur voluptatem!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque libero, quidem? Assumenda consequuntur dolorem esse ipsam ipsum minima modi neque numquam, officiis provident quam quod repellendus rerum soluta tenetur voluptatem!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque libero, quidem? Assumenda consequuntur dolorem esse ipsam ipsum minima modi neque numquam, officiis provident quam quod repellendus rerum soluta tenetur voluptatem!</p> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque libero, quidem? Assumenda consequuntur dolorem esse ipsam ipsum minima modi neque numquam, officiis provident quam quod repellendus rerum soluta tenetur voluptatem!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque libero, quidem? Assumenda consequuntur dolorem esse ipsam ipsum minima modi neque numquam, officiis provident quam quod repellendus rerum soluta tenetur voluptatem!</p> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque libero, quidem? Assumenda consequuntur dolorem esse ipsam ipsum minima modi neque numquam, officiis provident quam quod repellendus rerum soluta tenetur voluptatem!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque libero, quidem? Assumenda consequuntur dolorem esse ipsam ipsum minima modi neque numquam, officiis provident quam quod repellendus rerum soluta tenetur voluptatem!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque libero, quidem? Assumenda consequuntur dolorem esse ipsam ipsum minima modi neque numquam, officiis provident quam quod repellendus rerum soluta tenetur voluptatem!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque libero, quidem? Assumenda consequuntur dolorem esse ipsam ipsum minima modi neque numquam, officiis provident quam quod repellendus rerum soluta tenetur voluptatem!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque libero, quidem? Assumenda consequuntur dolorem esse ipsam ipsum minima modi neque numquam, officiis provident quam quod repellendus rerum soluta tenetur voluptatem!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque libero, quidem? Assumenda consequuntur dolorem esse ipsam ipsum minima modi neque numquam, officiis provident quam quod repellendus rerum soluta tenetur voluptatem!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque libero, quidem? Assumenda consequuntur dolorem esse ipsam ipsum minima modi neque numquam, officiis provident quam quod repellendus rerum soluta tenetur voluptatem!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque libero, quidem? Assumenda consequuntur dolorem esse ipsam ipsum minima modi neque numquam, officiis provident quam quod repellendus rerum soluta tenetur voluptatem!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque libero, quidem? Assumenda consequuntur dolorem esse ipsam ipsum minima modi neque numquam, officiis provident quam quod repellendus rerum soluta tenetur voluptatem!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque libero, quidem? Assumenda consequuntur dolorem esse ipsam ipsum minima modi neque numquam, officiis provident quam quod repellendus rerum soluta tenetur voluptatem!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque libero, quidem? Assumenda consequuntur dolorem esse ipsam ipsum minima modi neque numquam, officiis provident quam quod repellendus rerum soluta tenetur voluptatem!</p> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque libero, quidem? Assumenda consequuntur dolorem esse ipsam ipsum minima modi neque numquam, officiis provident quam quod repellendus rerum soluta tenetur voluptatem!</p>
        <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
        button.
    </div>
)));


