import React, { useContext } from 'react'
import { Input } from 'antd'
import { TextAreaProps } from 'antd/lib/input'
import { CustomFormContext } from './CustomForm'

const { TextArea } = Input

type CustomTextAreaProps = TextAreaProps & {
  width?: string | number
}

const CustomTextArea: React.FunctionComponent<CustomTextAreaProps> = ({
  autoSize = { minRows: 3, maxRows: 3 },
  size = 'small',
  showCount = true,
  maxLength = 200,
  disabled = false,
  width = '100%',
  style,
  ...props
}): React.ReactElement => {
  const ctx = useContext(CustomFormContext)
  return (
    <TextArea
      disabled={ctx?.readOnly ? false : disabled}
      readOnly={ctx?.readOnly}
      autoSize={autoSize}
      showCount={showCount}
      maxLength={maxLength}
      style={{ ...style, width }}
      size={size}
      {...props}
    />
  )
}
export default CustomTextArea
