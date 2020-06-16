import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import {
  UserMutations,
}from '../graphql';

const {
  ADD_USER,
} = UserMutations;

const UserAddView = () => {
  const [addUser, {loading} ] = useMutation(ADD_USER, { errorPolicy: 'all' });
  const [firstName, setFirstName ] = useState('');
  const [data, setData ] = useState('');
  const [error, setError ] = useState('');

  const handleSubmit = async () => {
    try {
      const { data } = await addUser({ 
        variables: { 
          firstName, 
          lastName: 'Test',
          phone: '',
          email: 'azerty@gmail.com',
          username: 'azertytest',
          password: 'azertytest',
        }})
      setData(data)
    }catch (e) {
      setError(e)
    }
  }
  
  console.log('loading : ', loading);
  console.log('data : ', data);
  console.log('error : ', error);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
        setFirstName('');
      }}
    >
      <input
        onChange={event => setFirstName(event.target.value)}
        value={firstName}
      />
      <button type="submit">Add Todo</button>
    </form>
)
};

export default UserAddView;