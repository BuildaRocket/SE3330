/*详情页点击报名弹出的报名表单界面*/
import React from "react";
import {Form, Input, Button, Row, Col} from "antd";
// import Card from "react-bootstrap/Card";
import activities from "../Activities";
import { Card as AntCard } from "antd";
import "../css/SignUp.css";
import { Link } from "react-router-dom";
import { message } from "antd";
const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 16,
    },
};

const SignUp = ({ ActivityId }) => {
    const activity = activities[ActivityId - 1];

    const onFinish = (values) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    function handleConfirmSignUp(){
        alert("报名信息已确认，报名成功！")
    }
    return (
        <div className="card-container" style={{marginLeft:'200px',marginRight:'200px'}}>
            <AntCard className="activity-card ant-card-hoverable">
                <div className="ant-card-head">
                    <h2 className="ant-card-head-title">填写报名信息</h2>
                </div>
                <div className="ant-card-body">
                    <Form
                        {...layout}
                        name="basic"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="姓名"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: "请输入姓名！",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="学号"
                            name="studentId"
                            rules={[
                                {
                                    required: true,
                                    message: "请输入学号！",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="学院"
                            name="department"
                            rules={[
                                {
                                    required: true,
                                    message: "请输入学院！",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="手机号码"
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: "请输入手机号码！",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="邮箱"
                            name="email"
                            rules={[
                                {
                                    type: "email",
                                    message: "请输入正确的邮箱地址！",
                                },
                                {
                                    required: true,
                                    message: "请输入邮箱地址！",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Button type="primary"  onClick={handleConfirmSignUp}>
                                        确认报名
                                    </Button></Col>
                                <Col span={12}>
                                    <Button style={{ marginLeft: 16 }}>取消报名</Button></Col>
                            </Row>
                        </Form.Item>
                    </Form>
                </div>
            </AntCard>
        </div>
    );
};

export default SignUp;