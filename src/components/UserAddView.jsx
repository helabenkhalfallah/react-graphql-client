import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { 
  Form, 
  Input, 
  Button, 
} from 'antd';
import {
  UserMutations,
}from '../graphql';

const {
  ADD_USER,
} = UserMutations;

const UserAddView = () => {
  const [addUser, {loading} ] = useMutation(ADD_USER, { errorPolicy: 'all' });
  const [data, setData ] = useState('');
  const [error, setError ] = useState('');

  const handleSubmit = async (values) => {
    try {
      const { data } = addUser({ 
        variables: { 
         ...values,
        }})
      setData(data)
    }catch (e) {
      setError(e)
    }
  }
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const onFinish = values => {
    handleSubmit(values);
  };

  return (
    <Form
      name="basic"
      onFinish={onFinish}
    >
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: 'Please input your first name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[{ required: true, message: 'Please input your last name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item >
        <Button 
        type="primary" 
        htmlType="submit"
      >
          Submit
        </Button>
      </Form.Item>
    </Form>
)
};

export default UserAddView;