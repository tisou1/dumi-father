import classnames from 'classnames'
import React from 'react'
import './index.less'
type buttonType = 'large' | 'middle' | 'small'
interface ButtonProps {
  children?: React.ReactNode,
  type?: string
  size?: buttonType
}
const Button = (props: ButtonProps) => {
  return (
    <button
      className={
        classnames('btn', props.type, props.size)
      }>
      {props.children}</button>
  )
}

export default Button