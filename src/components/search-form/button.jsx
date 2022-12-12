import React from 'react'

export const Button = ({ className, type, text, props}) => {
  return <button className={className} type={type} required {...props} >{text}</button>
}