import React from 'react'

export const Button = ({label,name,value,onChange,onClick,placeholder}) => {
  return (
  <button 
  name={name}
  value={value}
  onChange={onChange}
  onClick={onClick}
  placeholder={placeholder}
  

  >
  {
    label
  }
  </button>
  )
}
