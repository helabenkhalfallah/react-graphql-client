import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { 
  List, 
  Button,
} from 'antd';
import {
  UserQueries,
}from '../graphql';

const {
  GET_USERS,
  GET_USERS_SKIP,
  GET_USERS_INCLUDE,
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
  
  /* const {
    loading, 
    error, 
    data,
    refetch,
  } = useQuery(GET_USERS_SKIP, {
    variables: { 
      skipEmail: true,
     },
  }); */

  /* const {
    loading, 
    error, 
    data,
    refetch,
  } = useQuery(GET_USERS_INCLUDE, {
    variables: { 
      includeEmail: false,
     },
  }); */

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data || !data.users) return <p>Empty :(</p>;
  
  return (
  <>
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
    <Button 
      type="primary" 
      onClick={() => refetch()}
      style={{ margin: '1rem' }}
      >
      Refetch!
    </Button>
  </>)
};

export default UsersListView;



