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
const addCart = gql`
mutation AddCart($soluong: Int!, $clothesId: ID!) {
  addCart(soluong: $soluong, clothesId: $clothesId) {
    clothes {
      giatien
      hinhanh
      name
    }
    soluong
  }
}`;
export {registerUser,loginUser,addCart}