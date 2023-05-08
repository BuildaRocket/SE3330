import React from "react";
import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";
import ActivityDetails from "../Component/ActivityDetails";
import activities from "../Component/Activities";

const ActivityDetail = ({ ActivityId }) => {
    const activity = activities[ActivityId - 1];

    const handleAddToCartButtonClick = () => {
        // 添加到感兴趣活动列表的逻辑
    };

    return (
        <div>
            <ActivityDetails activity={activity} />
            <div style={{ marginBottom: '20px' }}></div>
            <Row gutter={16}>
                <Col span={12} >
                    <Link to={"http://localhost:3000/signup"}>
                        <Button type="primary" style={{marginLeft:'500px'}}>立刻报名</Button>
                    </Link>
                </Col>
                <Col span={12}>
                    <Button type="primary" onClick={handleAddToCartButtonClick}>
                        添加到感兴趣活动列表
                    </Button>
                </Col>
            </Row>
        </div>
    );
};



export default ActivityDetail;
