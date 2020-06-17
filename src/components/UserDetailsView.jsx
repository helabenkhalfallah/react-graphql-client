import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Descriptions } from 'antd';
import {
  UserQueries,
}from '../graphql';

const {
  GET_USER,
} = UserQueries;

const UserDetailsView = ({
  email,
}) => {
  const {
    loading, 
    error, 
    data,
  } = useQuery(GET_USER, {
    variables: { email },
    // pollInterval: 5000,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data || !data.user) return <p>Empty :(</p>;

  const {
    firstName,
    lastName,
    username,
  } = data.user;

  return (
  <div>
    <Descriptions title="User Details">
      <Descriptions.Item label="username">{username}</Descriptions.Item>
      <Descriptions.Item label="First Name">{firstName}</Descriptions.Item>
      <Descriptions.Item label="Last Name">{lastName}</Descriptions.Item>
      <Descriptions.Item label="Birthday">22/02/1299</Descriptions.Item>
    </Descriptions>
  </div>);
};


export default UserDetailsView;
