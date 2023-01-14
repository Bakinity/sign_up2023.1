import React from "react";

import user from "../assets/user.png";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Layout } from "antd";

const Footer = Layout;

const Login = () => {
  return (
    <div
      style={{
        background:
          " linear-gradient(rgb(187, 34, 34), rgb(221, 125, 125)) no-repeat",
        padding: "8%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        style={{
          width: "350px",
        }}
        name='normal_login'
        className='login-form'
        initialValues={{ remember: true }}
        onFinish='*'
      >
        <img
          src={user}
          alt='user'
          width='100'
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
            color: "transparent",
          }}
        ></img>

        <p style={{ textAlign: "center", color: "white" }}>
          HazirCavab boş vaxtlarinizda sizi əyləndirmək, qazandirmaq, rəqabəti
          hiss elətdirmək üçün hazirlanmiş oyundur
        </p>
        <Form.Item
          style={{
            background: "transparent",
            borderBottom: "2px solid white",
            marginBottom: "10px",
          }}
          name='username'
        >
          <Input
            bordered={false}
            style={{
              background: "transparent",
            }}
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Username'
          />
        </Form.Item>

        <Form.Item
          style={{
            background: "transparent",
            borderBottom: "2px solid white",
            marginBottom: "10px",
          }}
          name='password'
        >
          <Input
            bordered={false}
            style={{
              background: "transparent",
            }}
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>

        <Form.Item
          style={{
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
            style={{
              fontWeight: "600",
              width: "70%",
              background: "white",
              color: "#e66465",
            }}
          >
            Daxil ol
          </Button>
        </Form.Item>

        <Form.Item
          style={{
            textAlign: "center",
            marginBottom: "5px",
          }}
        >
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
            style={{
              border: "white 2px solid",
              width: "70%",
              background: "transparent",
              color: "white",
            }}
          >
            Qeydiyyat
          </Button>
        </Form.Item>

        <Form.Item style={{ textAlign: "center", marginBottom: "90px" }}>
          <a
            className='login-form-forgot'
            href='*'
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Şifrəni unutdun?
          </a>
        </Form.Item>
        <Footer style={{ textAlign: "center", background: "transparent" }}>
          <a
            href='*'
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Haqqimizda
          </a>

          <p
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Copyright 2017 Bütün Hüquqlar Qorunur
          </p>
        </Footer>
      </Form>
    </div>
  );
};

export default Login;
