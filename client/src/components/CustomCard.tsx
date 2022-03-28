import React from 'react'
import { Card, CardProps } from 'antd'

type CustomCardProps = CardProps & {
  width?: string | number
}

const CustomCard: React.FC<CustomCardProps> = ({
  size = 'small',
  type = 'inner',
  style,
  width,
  ...props
}): React.ReactElement => (
  <Card size={size} style={{ ...style, width }} type={type} {...props}>
    {props.children}
  </Card>
)

export default CustomCard
