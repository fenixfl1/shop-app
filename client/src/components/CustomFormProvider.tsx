import React, { createContext } from 'react'
import { FormProviderProps } from 'antd/lib/form/context'
import { Form } from 'antd'

type CustomFormProviderProps = FormProviderProps & {
  readOnly?: boolean
  uppercase?: boolean
}

export const FormProviderContext = createContext<CustomFormProviderProps>({})

const CustomFormProvider: React.FunctionComponent<CustomFormProviderProps> = ({
  uppercase = false,
  readOnly = false,
  ...props
}): React.ReactElement => {
  return (
    <FormProviderContext.Provider value={{ ...props, readOnly, uppercase }}>
      <Form.Provider {...props}>{props.children}</Form.Provider>
    </FormProviderContext.Provider>
  )
}

export default CustomFormProvider
