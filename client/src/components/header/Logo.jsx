// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import Logo1 from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { MyContext } from "../context/Context";
export default function Logo() {
  const navigate = useNavigate()
  const {setopenshoping} = useContext(MyContext);
  return (
    <div style={{backgroundImage: `url(${Logo1})`}} className='bg-contain w-40 h-40 bg-no-repeat cursor-pointer' onClick={()=>{navigate(`/`);setopenshoping(true)}} ></div>
  )
}
