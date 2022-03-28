import React from 'react'
import { Button, ButtonProps } from 'antd'

const CustomButton: React.FC<ButtonProps> = ({
  block = false,
  danger = false,
  disabled = false,
  ghost = false,
  loading = false,
  size = 'small',
  type = 'default',
  style,
  ...props
}): React.ReactElement => {
  return (
    <Button
      block={block}
      danger={danger}
      disabled={disabled}
      ghost={ghost}
      loading={loading}
      type={type}
      size={size}
      {...props}
    >
      {props.children}
    </Button>
  )
}

export default CustomButton
