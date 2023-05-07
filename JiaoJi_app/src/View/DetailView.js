import React from "react";
// import Card from 'react-bootstrap/Card';
import activities from "../Activities";
import {Button, Card as AntCard, Col, Row} from "antd";
import '../css/ActivityDetail.css';
import {Link} from "react-router-dom";
const ActivityDetail = ({ ActivityId }) => {
    const activity = activities[ActivityId - 1];

    return (
        <div className="card-container">
            <AntCard className="activity-card ant-card-hoverable">
                <div className="ant-card-head">
                    <h2 className="ant-card-head-title">{activity.name}</h2>
                </div>
                <div className="ant-card-body">
                    <p>{activity.content}</p>
                    <ul>
                        <li>地点：{activity.location}</li>
                        <li>报名时间：{activity.signupTime}</li>
                        <li>活动时间：{activity.activityTime}</li>
                        <li>开设学院：{activity.departments}</li>
                        <li>报名限制：{activity.signupRestriction}</li>
                        <li>招募人数：{activity.recruitmentNumber}</li>
                        <li>主办单位：{activity.organizer}</li>
                        <li>素拓奖励：{activity.suScore} 分</li>
                        <li>劳动教育学时：{activity.laborHour} 时</li>
                    </ul>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Link to={'http://localhost:3000/signup'}>
                                <Button type="primary">立刻报名</Button>
                            </Link>
                        </Col>
                        <Col span={12}>
                            <Button type="primary">添加到感兴趣活动列表</Button>
                        </Col>
                    </Row>
                </div>
            </AntCard>
        </div>
    );
};

export default ActivityDetail;