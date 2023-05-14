import React from "react";
import { Table, Space, List } from "antd";
import { Link } from "react-router-dom";
import activities from "../Component/Activities";
import AdminActivity from "../Component/AdminActivity";

/**
 * 活动历史页面
 * 管理员可以在此页面查看所有审核过的活动
 * 被AdminHomeView.js调用
 * edit by yhx 0513
 */

/**TODO：
 *  从数据库中按照状态获取活动信息
 */

const data = [
    {
        id: 1,
        name: '活动1',
        organizer: '组织者1',
        location: '地点1',
        activityTime: '2021-01-01',
        status: '待审核',
        feedback: null,
    },
    {
        id: 2,
        name: '活动2',
        organizer: '组织者2',
        location: '地点2',
        activityTime: '2021-01-02',
        status: '待审核',
        feedback: null,
    },
    {
        id: 3,
        name: '活动3',
        organizer: '组织者3',
        location: '地点3',
        activityTime: '2021-01-03',
        status: '待审核',
        feedback: null,
    },
    {
        id: 4,
        name: '活动4',
        organizer: '组织者4',
        location: '地点4',
        activityTime: '2021-01-04',
        status: '已通过',
        feedback: null,
    },
    {
        id: 5,
        name: '活动5',
        organizer: '组织者5',
        location: '地点5',
        activityTime: '2021-01-05',
        status: '已通过',
        feedback: null,
    },
]

const pendingActivities = data.filter((activity) => activity.status === '待审核');
const passedActivities = data.filter((activity) => activity.status === '已通过');

const AdminHistoryView = () => {
    return (
        <div>
            <List 
                grid={{ gutter: 16, column: 1 }}
                dataSource={passedActivities}
                renderItem={(passedActivities) => (
                    <List.Item>
                        <AdminActivity activity={passedActivities} />
                    </List.Item>
                )}
            />
            {/* <List
                grid={{ gutter: 16, column: 1 }}
                dataSource={passedActivities}
                renderItem={(activity) => (
                    <List.Item>
                        <AdminActivity activity={activity} />
                    </List.Item>
                )}
            /> */}
        </div>
    );
}

export default AdminHistoryView;


