import React from 'react'

export const Input = ({name,value,onChange,onClick,placeholder}) => {
  return (
   <input
   value={value}
   onChange={onChange}
   onClick={onClick}
   placeholder={placeholder}
   name={name}
   />
  )
}
