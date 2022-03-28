import React, { useContext } from 'react'
import Select, { SelectProps } from 'antd/lib/select'
import { DownOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import CustomSpace from './CustomSpace'
import CustomTooltip from './CustomTooltip'
import { CustomFormContext } from './CustomForm'

type CustomSelectProps = SelectProps<string | number> & {
  tooltip?: string
  alwaysAvailable?: boolean
  width?: string
}

const CustomSelect: React.FunctionComponent<CustomSelectProps> = ({
  tooltip = undefined,
  dropdownMatchSelectWidth = false,
  allowClear = false,
  size = 'small',
  disabled = false,
  width = '100%',
  alwaysAvailable = false,
  ...props
}): React.ReactElement => {
  const readOnly = useContext(CustomFormContext)?.readOnly
  const suffixIcon = tooltip ? (
    <CustomSpace style={{ marginLeft: '-20px' }}>
      <CustomTooltip title={tooltip}>
        <QuestionCircleOutlined style={{ color: '#69c0ff' }} />
      </CustomTooltip>
      <DownOutlined />
    </CustomSpace>
  ) : undefined

  return (
    <Select
      allowClear={allowClear}
      style={{ width: '100%' }}
      disabled={readOnly && !alwaysAvailable ? false : disabled}
      suffixIcon={suffixIcon}
      dropdownMatchSelectWidth={dropdownMatchSelectWidth}
      size={size}
      {...props}
    >
      {props.children}
    </Select>
  )
}

export default CustomSelect
