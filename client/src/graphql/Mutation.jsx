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
const updateUser = gql`
mutation Mutation($address: String, $phone: String, $lastname: String, $firstname: String) {
  updateUser(address: $address, phone: $phone, lastname: $lastname, firstname: $firstname) {
    lastname
  }
}`;
const deleteCart = gql`
mutation Mutation($clothesId: ID!) {
  deleteCart(clothesId: $clothesId) {
    soluong
  }
}`;
const order = gql`
mutation Mutation {
  order {
    status
  }
}`

export {registerUser,loginUser,addCart,updateUser,deleteCart,order}