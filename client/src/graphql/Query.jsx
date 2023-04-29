import { gql } from '@apollo/client';
const getAllClothes = gql`
query GetClothes($giatien: Int, $mathang: String,$theloai:String) {
  getClothes(giatien: $giatien, mathang: $mathang,theloai:$theloai) {
    _id
    chatlieu
    giatien
    hinhanh
    mathang
    name
    theloai
    xuatxu
  }
}
`;
const getDetailClothes = gql`query Query($clothesId: String!) {
  getDetailClothes(clothesId: $clothesId) {
    _id
    chatlieu
    giatien
    hinhanh
    name
    xuatxu
  }
}`;
const getCart = gql`
query GetCart {
  getCart {
    clothes {
      giatien
      hinhanh
      _id
    }
    soluong
  }
}`;
const soluongCart = gql`
query GetCart {
  getSoluongCart {
    soluong
  }
}`;
const getUser = gql`
query Query {
  getUser {
    firstname
    phone
    address
    lastname
  }
}`
// eslint-disable-next-line react-refresh/only-export-components
export {getAllClothes,getDetailClothes,getCart,soluongCart,getUser}
