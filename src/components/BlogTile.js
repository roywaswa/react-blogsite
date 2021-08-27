import React from 'react'
import { ArrowDownwardsIcon, ArrowUpwardsIcon, BookMarkIcon } from '../resources/VectorIcons'
import dayjs from 'dayjs'

export default function BlogTile() {
  let time = dayjs().format("ddd DD-MM-YY")
  console.log(time)
  return ( 
    <div className='blog-tile'>
      <span className='blog-tile-author'>Author of Piece</span>
      <span className='blog-tile-title'>BLOG TITLE IN THE BEGINNING</span>
      <span className='blog-tile-headline'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Condimentum lacinia quis vel eros donec ac odio tempor orci.
      </span>
      <div className='blog-tile-details'>
        <div className='timestamp'>
          <span>{ time.toString() }</span>
        </div>
        <div className='actions'>
          <div><ArrowUpwardsIcon width="30px" height="30px" fill="#000"/></div>
          <div><ArrowDownwardsIcon width="30px" height="30px" fill="#000"/></div>
          <div><BookMarkIcon width="30px" height="30px" fill="#000"/></div>
        </div>
      </div>
    </div>
  )
}
