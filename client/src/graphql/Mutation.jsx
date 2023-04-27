import { gql } from '@apollo/client';
const registerUser = gql`
mutation AddUser($email: String!, $password: String!) {
  addUser(email: $email, password: $password) {
    RefreshToken
    Token
  }
}
`;
const loginUser = gql`
mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      RefreshToken
      Token
    }
  }`;
export {registerUser,loginUser}