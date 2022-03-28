import React from 'react'
import { Row } from 'antd'
import { RowProps } from 'antd/lib/row'

type CustomRowProps = RowProps & {
  width?: string | number
}

const CustomRow: React.FunctionComponent<CustomRowProps> = ({
  align = 'middle',
  gutter = 0,
  justify = 'end',
  width,
  style,
  ...props
}): React.ReactElement => (
  <Row
    align={align}
    gutter={gutter}
    justify={justify}
    style={{ width, ...style }}
    {...props}
  >
    {props.children}
  </Row>
)

export default CustomRow
