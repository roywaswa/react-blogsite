import React from 'react';

const ArrowUpwardsIcon = ({width,height,fill}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
    height={height} 
    viewBox="0 0 24 24" 
    width={width} 
    fill={fill}>
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
    </svg>
  );
}

const ArrowDownwardsIcon = ({width,height,fill}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
    height={height} 
    viewBox="0 0 24 24" 
    width={width} 
    fill={fill}>
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/>
    </svg>
  )
}

const BookMarkIcon = ({width,height,fill}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
    height={height} viewBox="0 0 24 24" 
    width={width} 
    fill={fill}>
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/>
    </svg>
  )
}

export {
  ArrowDownwardsIcon,
  ArrowUpwardsIcon,
  BookMarkIcon
}
