import React from 'react'
import { Divider } from 'antd'
import { DividerProps } from 'antd/lib/divider'

const CustomDivider: React.FunctionComponent<DividerProps> = ({
  dashed = false,
  orientation = 'left',
  plain = true,
  type = 'horizontal',
  ...props
}): React.ReactElement => (
  <Divider
    dashed={dashed}
    orientation={orientation}
    plain={plain}
    type={type}
    {...props}
  >
    {props.children}
  </Divider>
)

export default CustomDivider
