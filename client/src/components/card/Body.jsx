import React from 'react'
import Header_body from '../header/Header.body'
import Contentcard from './Content.card'
import Address from './Address'

export default function Body() {
  return (
    <div className='h-max'>
      <Header_body info={'Thông tin đặt hàng'}></Header_body>
      <Address/>
      <Contentcard/>
    </div>
  )
}
