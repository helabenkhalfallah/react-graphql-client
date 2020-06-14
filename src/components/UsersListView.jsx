import React from 'react';
import { useQuery } from '@apollo/react-hooks';
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
    {data.users.map(({
      id,
      firstName,
      lastName,
      birthday,
      email,
      phone,
      username,
      posts,
    }) => (
      <div key={id}>
        <p>
          {firstName}: {lastName}
        </p>
      </div>
    ))}
    <button onClick={() => refetch()}>Refetch!</button>
  </>)
};

export default UsersListView;



