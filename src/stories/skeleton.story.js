import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, button, number, object, select, text } from '@storybook/addon-knobs';
import PSkeleton from '../Components/Feedback/skeleton'
import PSwitch from "../Components/Data Entry/switch";
import PList from "../Components/Data Entry/List";
import PListItem from "../Components/Data Entry/List/PListItem";
import PAvatar from "../Components/Data Display/PAvatar";
import PListItemMeta from "../Components/Data Entry/List/PListItemMeta";
import PIcon from "../Components/PIcon";

const stories = storiesOf('Skeleton', module);
stories.addDecorator(withKnobs);
const listData = [];
for (let i = 0; i < 3; i++) {
    listData.push({
        href: '#',
        title: `List ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}

const IconText = ({ type, text }) => (
    <span>
    <PIcon type={type} style={{ marginRight: 8 }} />
        {text}
  </span>
);
class App extends React.Component {
    state = {
        loading: true,
    }

    onChange = (checked) => {
        this.setState({ loading: !checked });
    }

    render() {
        const { loading } = this.state;

        return (
            <div>
                <PSwitch checked={!loading} onChange={this.onChange} />

                <PList
                    itemLayout="vertical"
                    size="large"
                    dataSource={listData}
                    renderItem={item => (
                        <PListItem
                            key={item.title}
                            actions={!loading && [<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                            extra={!loading && <img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                        >
                            <PSkeleton loading={loading} active avatar>
                                <PListItemMeta
                                    avatar={<PAvatar src={item.avatar} />}
                                    title={<a href={item.href}>{item.title}</a>}
                                    description={item.description}
                                />
                                {item.content}
                            </PSkeleton>
                        </PListItem>
                    )}
                />
            </div>
        );
    }
}


stories.add('Basic Skeleton', withInfo({})(() => (
    <App/>
)));
