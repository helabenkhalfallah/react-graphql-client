import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import {
  UsersListView,
  UserDetailsView,
  UserAddView,
} from './components';

const localGraphQL = "http://localhost:5000/graphql";
const client = new ApolloClient({
  uri: localGraphQL
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>Users List</h2>
        <UsersListView />
        <h2>Get user by Id</h2>
        <UserDetailsView 
          email="helaben@gmail.com"
        />
        <h2>Add new user</h2>
        <UserAddView />
      </div>
    </ApolloProvider>
  );
}

export default App;
