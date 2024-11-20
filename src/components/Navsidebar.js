import React from 'react'
import {nav} from '../utils/data/Data'
import { Link } from 'react-router-dom'
const Navsidebar = ({mobileview}) => {
  return (
    
    <ul className={
        mobileview?'flex-col  shadow-md ':'flex align-middle '
    }>
    {nav.map((item)=>(
        <Link to={item.path}>
        <li className='m-5 text-green-600 font-semibold '>{(item.text).toUpperCase()}</li>
        </Link>
    ))}
 </ul>
  )
}

export default Navsidebar