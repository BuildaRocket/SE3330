import React from 'react';
import { Avatar, List, Card } from 'antd';

/**
 * @description: 活动列表
 * card：活动卡片
 * card未链接到活动详情页面
 */

const activities = [
    {
        title: '活动1',
        avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=1',
        description: 'A workshop on React basics and best practices',
        date: '2022-01-15',
    },
    {
        title: '活动2',
        avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=2',
        description: 'A 24-hour hackathon for students and professionals',
        date: '2022-02-12',
    },
    {
        title: '活动3',
        avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=3',
        description: 'An evening of networking with industry leaders',
        date: '2022-03-05',
    },
    {
        title: '活动4',
        avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=4',
        description: 'A panel discussion on the future of technology',
        date: '2022-04-08',
    },
    {
        title: '活动5',
        avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=5',
        description: 'A panel discussion on the future of technology',
        date: '2022-04-08',
    },
    {
        title: '活动6',
        avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=6',
        description: 'A panel discussion on the future of technology',
        date: '2022-04-08',
    },
];

const ActivityList = () => (
    <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={activities}
        renderItem={(activity) => (
            <List.Item>
                <Card
                    cover={<img alt="example" src={activity.avatarUrl} />}
                    title={<a href="https://ant.design">{activity.title}</a>}
                >
                    <Card.Meta description={activity.description} />
                    报名截止日期：{activity.date}
                </Card>
            </List.Item>
        )}
    />
);

export default ActivityList;
