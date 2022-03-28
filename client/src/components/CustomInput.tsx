import * as React from 'react'
import { Input } from 'antd'
import { InputProps } from 'antd/lib/input'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { CustomTooltip } from '.'
import { CustomFormContext } from './CustomForm'

export type CustomInputProps = InputProps & {
  autoComplete?: string
  tooltip?: string
  alwaysAvailable?: boolean
  textAlign?:
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'match-parent'
}

const CustomInput: React.FunctionComponent<CustomInputProps> = ({
  autoComplete = 'off',
  disabled = false,
  type = 'text',
  size = 'small',
  textAlign,
  tooltip = undefined,
  readOnly = false,
  alwaysAvailable = false,
  style,
  ...props
}): React.ReactElement => {
  const context = React.useContext(CustomFormContext)
  const suffix = tooltip ? (
    <CustomTooltip title={tooltip}>
      <QuestionCircleOutlined style={{ color: '#40a9ff' }} />
    </CustomTooltip>
  ) : null
  return (
    <Input
      autoComplete={autoComplete}
      disabled={context?.readOnly ? false : disabled}
      readOnly={(context?.readOnly && !alwaysAvailable) || readOnly}
      maxLength={100}
      size={size}
      type={type}
      style={{ ...style, textAlign }}
      suffix={suffix}
      {...props}
    />
  )
}

export default CustomInput
