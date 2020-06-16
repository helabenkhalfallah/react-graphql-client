import { gql } from 'apollo-boost';

const GET_USERS = gql`
  {
    users {
      id
      firstName
      lastName
      birthday
      email
      phone
      username
      posts {
        createdAt
        text
        user
      }
    }
  }
`;

const GET_USER = gql`
  query User($email: String!) {
    user(email: $email) {
      id
      firstName
      lastName
      birthday
      email
      phone
      username
      password
      posts {
        createdAt
        text
        user
      }
    }
  }
`;

const UserQueries = {
  GET_USERS,
  GET_USER,
};

export default UserQueries;