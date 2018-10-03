import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import PCard from '../Components/Data Display/Card';
import PCardMeta from '../Components/Data Display/Card/CardMeta'
import PCardGrid from '../Components/Data Display/Card/PCardGrid'

const stories = storiesOf('Card', module);
stories.addDecorator(withKnobs);

stories.add('Basic card', withInfo({})(() => (
    <PCard
        title= {text('title', 'Title')}
        extra={<a href="#">{text('extra', '')}</a>}
        style={{ width: 300 }}
        bordered={boolean('bordered', true)}
    >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
    </PCard>
)));

stories.add('Simple Card', withInfo({})(() => (
    <PCard style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
    </PCard>
)));

stories.add('Customized content', withInfo({})(() => (
    <PCard
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
        <PCardMeta
            title="Europe Street beat"
            description="www.instagram.com"
        />
    </PCard>
)));
const gridStyle = {
    width: '25%',
    textAlign: 'center',
};
stories.add('Grid Card', withInfo({})(() => (
    <PCard title="Card Title">
        <PCardGrid style={gridStyle}>Content</PCardGrid>
        <PCardGrid style={gridStyle}>Content</PCardGrid>
        <PCardGrid style={gridStyle}>Content</PCardGrid>
        <PCardGrid style={gridStyle}>Content</PCardGrid>
        <PCardGrid style={gridStyle}>Content</PCardGrid>
        <PCardGrid style={gridStyle}>Content</PCardGrid>
        <PCardGrid style={gridStyle}>Content</PCardGrid>
        <PCardGrid style={gridStyle}>Content</PCardGrid>
    </PCard>
)));

stories.add('Inner Card', withInfo({})(() => (
    <PCard title="Card title">
        <p
            style={{
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.85)',
                marginBottom: 16,
                fontWeight: 500,
            }}
        >
            Group title
        </p>
        <PCard
            type="inner"
            title="Inner Card title"
            extra={<a href="#">''</a>}
        >
            Inner Card content
        </PCard>
        <PCard
            style={{ marginTop: 16 }}
            type="inner"
            title="Inner Card title"
            extra={<a href="#">''</a>}
        >
            Inner Card content
        </PCard>
    </PCard>
)));

//Tabs Content part

const tabList = [{
    key: 'tab1',
    tab: 'tab1',
}, {
    key: 'tab2',
    tab: 'tab2',
}];

const contentList = {
    tab1: <p>content1</p>,
    tab2: <p>content2</p>,
};

const tabListNoTitle = [{
    key: 'article',
    tab: 'article',
}, {
    key: 'app',
    tab: 'app',
}, {
    key: 'project',
    tab: 'project',
}];

const contentListNoTitle = {
    article: <p>article content</p>,
    app: <p>app content</p>,
    project: <p>project content</p>,
};



class TabsCard extends React.Component {
    state = {
        key: 'tab1',
        noTitleKey: 'app',
    }

    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
    }

    render() {
        return (
            <div>
                <PCard
                    style={{ width: '100%' }}
                    title="Card title"
                    extra={<a href="#">More</a>}
                    tabList={tabList}
                    activeTabKey={this.state.key}
                    onTabChange={(key) => { this.onTabChange(key, 'key'); }}
                >
                    {contentList[this.state.key]}
                </PCard>
                <br /><br />
                <PCard
                    style={{ width: '100%' }}
                    tabList={tabListNoTitle}
                    activeTabKey={this.state.noTitleKey}
                    onTabChange={(key) => { this.onTabChange(key, 'noTitleKey'); }}
                >
                    {contentListNoTitle[this.state.noTitleKey]}
                </PCard>
            </div>
        );
    }
}

stories.add('Tab Cards', withInfo({})(() => (
   <TabsCard/>
)));