import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import 'antd/dist/antd.css';
import PCollapse from '../Components/Data Display/PCollapse';
import PPanel from '../Components/Data Display/PPanel';
//import '../CSS/storybook.css';
import {Collapse} from 'antd';


const stories = storiesOf('Collapse', module);
stories.addDecorator(withKnobs);
const Panel = Collapse.Panel;



class TestCollapse extends React.Component{



    render(){
        function callback(key) {
            console.log(key);
        }

        const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
        return(
            <PCollapse defaultActiveKey={['1']} onChange={callback}>
                <Panel header="This is panel header 1" key="1">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3" disabled>
                    <p>{text}</p>
                </Panel>
            </PCollapse>
        );
    }

}



stories.add('Baisc Collapse', withInfo({})(() => (
    <section className="code-box" id="components-collapse-demo-basic" data-scrollama-index="2">
        <section className="code-box-demo">
            <PCollapse defaultActiveKey={['1']}>
                <Panel header="This is panel header 1" key="1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cupiditate dolor exercitationem fugiat illo illum incidunt ipsum magni nulla numquam officiis omnis quia quidem quisquam sed suscipit, tempore tenetur voluptate.</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam modi numquam quaerat quas quidem! Aliquam cum deleniti dolore eos explicabo harum incidunt magni, nesciunt officiis possimus provident quasi, quidem recusandae.</p>
                </Panel>
                <Panel header="This is panel header 3" key="3" disabled>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque consequuntur deserunt dolore, ducimus eos harum ipsa iure, maiores molestias nulla numquam obcaecati possimus, quasi reiciendis rerum tempora vitae. Sunt.</p>
                </Panel>
            </PCollapse>
        </section>

    </section>

)));

stories.add('test Collapse', withInfo({})(() => (
   <TestCollapse/>



)));
