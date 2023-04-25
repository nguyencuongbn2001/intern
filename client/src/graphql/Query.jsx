import { gql } from '@apollo/client';
const GetAllClothes = gql`
query Query {
  getClothes {
    _id
    chatlieu
    giatien
    hinhanh
    soluong
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
// eslint-disable-next-line react-refresh/only-export-components
export {GetAllClothes,getDetailClothes}
