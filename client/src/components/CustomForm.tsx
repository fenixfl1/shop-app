import React from 'react'
import { Form } from 'antd'
import { FormProps } from 'antd/lib/form'
import { validateMessages } from '../constants/general'
import { FormProviderContext } from './CustomFormProvider'

type CustomFormProps = FormProps & {
  readOnly?: boolean
  uppercase?: boolean
}

export const CustomFormContext = React.createContext<CustomFormProps>({})

const CustomForm: React.FunctionComponent<CustomFormProps> = ({
  autoComplete = 'off',
  readOnly,
  uppercase = false,
  ...props
}): React.ReactElement => {
  const context = React.useContext(FormProviderContext)
  return (
    <CustomFormContext.Provider
      value={{
        readOnly: context?.readOnly ? context?.readOnly : readOnly,
        uppercase: uppercase || context?.uppercase,
        ...props,
      }}
    >
      <Form
        autoComplete={autoComplete}
        validateMessages={validateMessages}
        {...props}
      >
        {props.children}
      </Form>
    </CustomFormContext.Provider>
  )
}

export default CustomForm
