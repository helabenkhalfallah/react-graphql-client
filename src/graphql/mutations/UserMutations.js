import { gql } from 'apollo-boost';

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

const UserMutations = {
  ADD_USER,
};

export default UserMutations;