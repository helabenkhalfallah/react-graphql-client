import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { List, Button } from 'antd';
import {
  UserQueries,
}from '../graphql';

const {
  GET_USERS,
} = UserQueries;

const UsersListView = () => {
  const {
    loading, 
    error, 
    data,
    refetch,
 } = useQuery(GET_USERS, {
   // pollInterval: 500,
   // fetchPolicy: 'cache-and-network'
 });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data || !data.users) return <p>Empty :(</p>;
  
  return (
  <>
    <Button 
      type="primary" 
      onClick={() => refetch()}
      >
      Refetch!
    </Button>
    <List
      bordered
      dataSource={data.users}
      renderItem={user => {
        const {
          firstName,
          lastName,
          email
        } = user;
        return (
          <List.Item>
            <List.Item.Meta
              avatar={null}
              title={`${firstName} ${lastName}`}
              description={email}
            />
          </List.Item>
        )
      }}
    />
  </>)
};

export default UsersListView;



