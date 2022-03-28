import React from 'react'
import Space, { SpaceProps } from 'antd/lib/space'

type CustomSpaceProps = SpaceProps & {
  width?: string | number
}

const CustomSpace: React.FunctionComponent<CustomSpaceProps> = ({
  width,
  style,
  ...props
}): React.ReactElement => (
  <Space style={{ width, ...style }} {...props}>
    {props.children}
  </Space>
)

export default CustomSpace
