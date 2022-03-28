import React from 'react'
import { Form } from 'antd'
import { FormItemProps } from 'antd/lib/form'
import { CustomFormContext } from './CustomForm'

const { Item } = Form

export type CustomFormItemProps = FormItemProps & {
  onlyLetter?: boolean
  onlyNumbers?: boolean
  ref?: React.MutableRefObject<FormItemProps>
}

const patternOnlyLetters = '^[a-z A-Z ZÀ-ÿ]+$'
const patternOnlyNumbers = '^[0-9 -,]+$'

export const CustomFormItemContext = React.createContext<CustomFormItemProps>(
  {}
)

const CustomFormItem: React.FunctionComponent<CustomFormItemProps> = ({
  colon = true,
  hasFeedback = false,
  labelAlign = 'right' as FormItemProps['labelAlign'],
  noStyle = false,
  onlyLetter = false,
  onlyNumbers = false,
  required = false,
  trigger = 'onChange',
  validateFirst = false,
  validateTrigger = 'onChange',
  valuePropName = 'value',
  ...props
}): React.ReactElement => {
  const ctx = React.useContext(CustomFormContext)
  if (onlyLetter) {
    props.normalize = (value: string) => {
      if (RegExp(patternOnlyLetters).test(value)) {
        let curValue = value
        if (ctx?.uppercase) curValue = value.toUpperCase()
        return curValue
      } else {
        return value.substring(0, value.length - 1)
      }
    }
  } else if (onlyNumbers) {
    props.normalize = (value: string) =>
      value.match(new RegExp(patternOnlyNumbers))
        ? value
        : value.substring(0, value.length - 1)
  } else {
    props.normalize = (value: string) =>
      typeof value?.toUpperCase == 'function' && ctx?.uppercase
        ? value.toUpperCase()
        : value
  }

  return (
    <CustomFormItemContext.Provider value={{ ...props }}>
      <Item
        colon={colon}
        hasFeedback={hasFeedback}
        labelAlign={labelAlign}
        noStyle={noStyle}
        required={required}
        style={{ margin: 0, padding: 0 }}
        trigger={trigger}
        validateFirst={validateFirst}
        validateTrigger={validateTrigger}
        valuePropName={valuePropName}
        {...props}
      >
        {props.children}
      </Item>
    </CustomFormItemContext.Provider>
  )
}

export default CustomFormItem
