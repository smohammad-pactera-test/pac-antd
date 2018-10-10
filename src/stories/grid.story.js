import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import PCol from '../Components/Layout/Grid/PCol';
import PRow from '../Components/Layout/Grid/PRow'
import PSlider from '../Components/Data Entry/PSlider'

const stories = storiesOf('Grid', module);
stories.addDecorator(withKnobs);

stories.add('Basic Grid', withInfo({})(() => (
    <div>
        <PRow>
            <PCol span={12}>col-12</PCol>
            <PCol span={12}>col-12</PCol>
        </PRow>
        <br/>
        <PRow>
            <PCol span={8}>col-8</PCol>
            <PCol span={8}>col-8</PCol>
            <PCol span={8}>col-8</PCol>
        </PRow>
        <br/>
        <PRow>
            <PCol span={6}>col-6</PCol>
            <PCol span={6}>col-6</PCol>
            <PCol span={6}>col-6</PCol>
            <PCol span={6}>col-6</PCol>
        </PRow>
    </div>
)));

stories.add('Col offset', withInfo({})(() => (
    <div>
        <PRow>
            <PCol span={8}>col-8</PCol>
            <PCol span={8} offset={8}>col-8</PCol>
        </PRow>
        <br/>
        <PRow>
            <PCol span={6} offset={6}>col-6 col-offset-6</PCol>
            <PCol span={6} offset={6}>col-6 col-offset-6</PCol>
        </PRow>
        <br/>
        <PRow>
            <PCol span={12} offset={6}>col-12 col-offset-6</PCol>
        </PRow>
    </div>
)));

stories.add('Grid Push and Pull', withInfo({})(() => (
    <div>
        <PRow>
            <PCol span={18} push={6}>col-18 col-push-6</PCol>
            <PCol span={6} pull={18}>col-6 col-pull-18</PCol>
        </PRow>
    </div>
)));

stories.add('Flex Layout', withInfo({})(() => (
    <div>
        <p className='u-align-left'>sub-element align left</p>
        <PRow type="flex" justify="start">
            <PCol span={4}>col-4</PCol>
            <PCol span={4}>col-4</PCol>
            <PCol span={4}>col-4</PCol>
            <PCol span={4}>col-4</PCol>
        </PRow>
        <br/>
        <p className='u-align-center'>sub-element align center</p>
        <PRow type="flex" justify="center">
            <PCol span={4}>col-4</PCol>
            <PCol span={4}>col-4</PCol>
            <PCol span={4}>col-4</PCol>
            <PCol span={4}>col-4</PCol>
        </PRow>
        <br/>
        <p className='u-align-right'>sub-element align right</p>
        <PRow type="flex" justify="end">
            <PCol span={4}>col-4</PCol>
            <PCol span={4}>col-4</PCol>
            <PCol span={4}>col-4</PCol>
            <PCol span={4}>col-4</PCol>
        </PRow>
        <br/>
        <p className='u-align-left'>sub-element monospaced arrangement</p>
        <PRow type="flex" justify="space-between">
            <PCol span={4}>col-4</PCol>
            <PCol span={4}>col-4</PCol>
            <PCol span={4}>col-4</PCol>
            <PCol span={4}>col-4</PCol>
        </PRow>
        <br/>
        <p className='u-align-left'>sub-element align full</p>
        <PRow type="flex" justify="space-around">
            <PCol span={4}>col-4</PCol>
            <PCol span={4}>col-4</PCol>
            <PCol span={4}>col-4</PCol>
            <PCol span={4}>col-4</PCol>
        </PRow>
    </div>
)));

stories.add('Responsive Grid', withInfo({})(() => (
   <div>
       <h1 className='heading-secondary'>Responsive Grid</h1>
    <PRow>
        <PCol xs={2} sm={4} md={6} lg={8} xl={10}>Col</PCol>
        <PCol xs={20} sm={16} md={12} lg={8} xl={4}>Col</PCol>
        <PCol xs={2} sm={4} md={6} lg={8} xl={10}>Col</PCol>
    </PRow>
       <br/>
       <br/>
       <h1 className='heading-secondary'>Responsive Grid with Offset</h1>
       <PRow>
           <PCol xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</PCol>
           <PCol xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</PCol>
           <PCol xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</PCol>
       </PRow>
   </div>
)));

class GridWorkingDemo extends React.Component {
    gutters = {};

    colCounts = {};

    constructor() {
        super();
        this.state = {
            gutterKey: 1,
            colCountKey: 2,
        };
        [8, 16, 24, 32, 40, 48].forEach((value, i) => { this.gutters[i] = value; });
        [2, 3, 4, 6, 8, 12].forEach((value, i) => { this.colCounts[i] = value; });
    }

    onGutterChange = (gutterKey) => {
        this.setState({ gutterKey });
    }

    onColCountChange = (colCountKey) => {
        this.setState({ colCountKey });
    }

    render() {
        const { gutterKey, colCountKey } = this.state;
        const cols = [];
        const colCount = this.colCounts[colCountKey];
        let colCode = '';
        for (let i = 0; i < colCount; i++) {
            cols.push(
                <PCol key={i.toString()} span={24 / colCount}>
                    <div>Column</div>
                </PCol>
            );
            colCode += `  <PCol span={${24 / colCount}} />\n`;
        }
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <span style={{ marginRight: 6 }}>Gutter (px): </span>
                    <div style={{ width: '50%' }}>
                        <PSlider
                            min={0}
                            max={Object.keys(this.gutters).length - 1}
                            value={gutterKey}
                            onChange={this.onGutterChange}
                            marks={this.gutters}
                            step={null}
                        />
                    </div>
                    <span style={{ marginRight: 6 }}>Column Count:</span>
                    <div style={{ width: '50%' }}>
                        <PSlider
                            min={0}
                            max={Object.keys(this.colCounts).length - 1}
                            value={colCountKey}
                            onChange={this.onColCountChange}
                            marks={this.colCounts}
                            step={null}
                        />
                    </div>
                </div>
                <PRow gutter={this.gutters[gutterKey]}>{cols}</PRow>
                <pre>{`<PRow gutter={${this.gutters[gutterKey]}}>\n${colCode}</PRow>`}</pre>
            </div>
        );
    }
}

stories.add('Grid Demo', withInfo({})(() => (
    <GridWorkingDemo/>
)));
