import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { 
  Divider,
} from 'antd';
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
        <Divider plain>User List</Divider>
        <UsersListView />
        <Divider plain>User Details</Divider>
        <UserDetailsView 
          email="alberteinsten@gmail.com"
        />
        <Divider plain>Add new user</Divider>
        <UserAddView />
      </div>
    </ApolloProvider>
  );
}

export default App;
