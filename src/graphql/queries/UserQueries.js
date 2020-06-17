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

const GET_USERS_SKIP = gql`
  query Users($skipEmail: Boolean!) {
    users{
      id
      firstName
      lastName
      birthday
      email @skip(if: $skipEmail)
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

const GET_USERS_INCLUDE = gql`
  query Users($includeEmail: Boolean!) {
    users{
      id
      firstName
      lastName
      birthday
      email @include(if: $includeEmail)
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
  GET_USERS_SKIP,
  GET_USERS_INCLUDE,
};

export default UserQueries;