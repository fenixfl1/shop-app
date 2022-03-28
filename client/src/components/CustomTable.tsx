import React, { ReactElement } from 'react'
import { Table } from 'antd'
import { TableProps } from 'antd/lib/table'

const CustomTable: React.FC<TableProps<any>> = ({
  bordered = true,
  size = 'small',
  ...props
}): ReactElement => (
  <Table bordered={bordered} size={size} {...props}>
    {props.children}
  </Table>
)

export default CustomTable
