// eslint-disable-next-line no-unused-vars
import React from 'react'
import {DiCodeigniter} from 'react-icons/di'
export default function Header_body(props) {
  return (<div className='flex mt-2 gap-2'> <DiCodeigniter className='text-red-700'></DiCodeigniter>
  <span className='uppercase font-medium text-sm font-fontcuong'>{props.info}</span></div> 
  )
}
