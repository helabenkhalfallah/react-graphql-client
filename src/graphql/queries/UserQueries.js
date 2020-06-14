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

const ADD_USER = gql`
  mutation AddUser (
    $firstName: String!
    $lastName: String!
    $phone: String
    $email: String!
    $username: String!
    $password: String!
  ) {
    addUser(firstName: $firstName, lastName: $lastName, phone: $phone, email: $email, username: $username, password: $password) {
      id
      firstName
      lastName
      birthday
      phone
      email
      username
    }
  }
`;

const UserQueries = {
  GET_USERS,
  GET_USER,
  ADD_USER,
};

export default UserQueries;