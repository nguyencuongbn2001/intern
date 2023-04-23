import React from 'react'
import Header_body from '../header/Header.body'
import Contentbody from './Content.body'
import Footer from '../footer/Footer'

export default function Bodydetail() {
  return (
    <div className="w-full h-full">
        <Header_body info = {'Thông tin sản phẩm'}/>
        <Contentbody/>
    </div>
  )
}
