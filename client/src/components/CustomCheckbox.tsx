import React from 'react'
import { Checkbox } from 'antd'
import { CheckboxProps } from 'antd/lib/checkbox'
import { QuestionCircleOutlined } from '@ant-design/icons'
import CustomTooltip from './CustomTooltip'

type CustomCheckboxProps = CheckboxProps & {
  tooltip?: string | unknown
  width?: string | number
}

const CustomCheckBox: React.FunctionComponent<CustomCheckboxProps> = ({
  tooltip,
  width = '100%',
  style,
  ...props
}): React.ReactElement => {
  return (
    <Checkbox
      {...props}
      style={{ display: 'flex', justifyContent: 'start', ...style }}
    >
      {tooltip && (
        <CustomTooltip title={<>{tooltip}</>}>
          <QuestionCircleOutlined style={{ color: '#40a9ff' }} />
        </CustomTooltip>
      )}
      {props.children}
    </Checkbox>
  )
}

export default CustomCheckBox
