import React from 'react';
import { useQuery } from '@apollo/react-hooks';
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
    pollInterval: 5000,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data || !data.user) return <p>Empty :(</p>;

  const {
    firstName,
    lastName,
    birthday,
    phone,
    username,
    posts,
  } = data.user;

  return (
  <div>
    <p>
      {firstName}: {lastName}
    </p>
  </div>);
};


export default UserDetailsView;
