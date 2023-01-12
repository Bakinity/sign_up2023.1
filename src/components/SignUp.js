import React from "react";

import user from "../assets/user.png";

import { Select, Form, Input, Checkbox, Button } from "antd";

const Signup = () => {
  return (
    <div
      style={{
        margin: "8%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        layout='vertical'
        style={{
          width: "350px",
        }}
      >
        <Form.Item>
          <img
            src={user}
            alt='user'
            style={{
              marginLeft: "35%",
              width: "100px",
            }}
          ></img>
        </Form.Item>

        <Form.Item
          label='Name Lastname'
          name='username'
          style={{ marginTop: "20px", marginBottom: "0" }}
        >
          <Input
            bordered={false}
            placeholder='Aghayev Ilqar'
            type='text'
            style={{ borderRadius: "0", borderBottom: "1px solid grey" }}
          ></Input>
        </Form.Item>

        <Form.Item label='Email' name='email' style={{ marginBottom: "0" }}>
          <Input
            label='Email'
            bordered={false}
            placeholder='example@mail.com'
            type='email'
            style={{
              borderRadius: "0",
              borderBottom: "1px solid grey",
            }}
          ></Input>
        </Form.Item>

        <Form.Item
          label='Password'
          name='Password'
          style={{ marginBottom: "0" }}
        >
          <Input
            bordered={false}
            placeholder='Password'
            type='password'
            style={{ borderRadius: "0", borderBottom: "1px solid grey" }}
          ></Input>
        </Form.Item>

        <Form.Item label='City' style={{ marginBottom: "0" }}>
          <Select
            bordered={false}
            placeholder='Select the city where you live'
            style={{
              width: "100%",
              borderRadius: "0",
              borderBottom: "1px solid grey",
            }}
            options={[
              {
                options: [
                  { label: "Baki", value: "Baki" },
                  { label: "Sumqayit", value: "Sumqayit" },
                ],
              },
            ]}
          />
        </Form.Item>

        <Form.Item label='University' style={{ marginBottom: "10px" }}>
          <Select
            bordered={false}
            placeholder='Select your university'
            style={{
              width: "100%",
              borderRadius: "0",
              borderBottom: "1px solid grey",
            }}
            options={[
              {
                options: [
                  { label: "BDU", value: "BDU" },
                  { label: "ADNSU", value: "ADNSU" },
                ],
              },
            ]}
          />
        </Form.Item>

        <Form.Item style={{ textAlign: "center", marginBottom: "10px" }}>
          <Checkbox style={{ borderRadius: "0", borderColor: "black" }}>
            I'll accept all terms of use
          </Checkbox>
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
              fontWeight: "500",
              width: "50%",
              background: "#e66465",
              color: "white",
              borderRadius: "15px",
            }}
          >
            Qeydiyyat
          </Button>

          <p>
            Allready have an account?{" "}
            <a href='*' style={{ textDecoration: "underline" }}>
              Sign In
            </a>
          </p>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
