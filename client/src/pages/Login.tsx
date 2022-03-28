import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Image } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import RoutesWrapper from '../components/RoutesWrapper'
import { authenticateUser } from '../actions/user'
import {
  PATH_REGISTER_USER,
  PATH_MAIN,
  PATH_LOGO_WITHOUT_TEXT_BLACK,
} from '../constants/routes'
import { isLoggedIn } from '../utils/session'
import { StoreState } from '../reducers'
import {
  CustomRow,
  CustomCol,
  CustomCard,
  CustomForm,
  CustomFormItem,
  CustomInput,
  CustomButton,
} from '../components'
import CustomCheckbox from '../components/CustomCheckbox'

export const CardTitle = styled.span`
  font-family: sans-serif;
  font-size: 16px;
  font-style: italic;
  letter-spacing: 10px;
  text-decoration: underline;
  padding: 20px 0;
`

const Login = (): React.ReactElement => {
  const dispatch = useDispatch()
  const { isLoggedIn: inSession } = useSelector(
    (state: StoreState) => state.user
  )

  useEffect(() => {
    inSession && window.location.reload()
  }, [inSession])

  if (isLoggedIn()) {
    return <Navigate to={PATH_MAIN} />
  }

  return (
    <RoutesWrapper allowSearch={false}>
      <CustomRow
        justify={'center'}
        className={'login-card-container'}
        align={'middle'}
      >
        <CustomCol xs={24} sm={8} xxl={6} style={{ margin: '20px 0px' }}>
          <CustomCard style={{ borderRadius: '8px' }}>
            <CustomForm
              autoComplete={'off'}
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={({ username, password }) => {
                dispatch(authenticateUser(username, password))
              }}
            >
              <CustomFormItem>
                <CustomRow justify={'center'}>
                  <Image
                    preview={false}
                    width={'5rem'}
                    src={PATH_LOGO_WITHOUT_TEXT_BLACK}
                    alt={'Logo'}
                  />
                </CustomRow>
              </CustomFormItem>
              <CustomFormItem
                name="username"
                rules={[
                  { required: true, message: 'Please input your Username!' },
                ]}
              >
                <CustomInput
                  autoComplete={'off'}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </CustomFormItem>
              <CustomFormItem
                name="password"
                rules={[
                  { required: true, message: 'Please input your Password!' },
                ]}
              >
                <CustomInput
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </CustomFormItem>
              <CustomFormItem name="remember" valuePropName="checked" noStyle>
                <CustomCheckbox>Remember me</CustomCheckbox>
              </CustomFormItem>

              <CustomFormItem>
                <CustomButton
                  type="primary"
                  htmlType="submit"
                  style={{ width: '100%', marginTop: '20px' }}
                >
                  Log in
                </CustomButton>
              </CustomFormItem>

              <CustomFormItem>
                <CustomRow justify={'center'}>
                  <Link to={'/reset'}>Did you forget your password?</Link>
                </CustomRow>
              </CustomFormItem>
            </CustomForm>
          </CustomCard>

          <CustomCard style={{ marginTop: '20px', borderRadius: '8px' }}>
            <CustomRow justify={'center'}>
              <span>
                You do not have an account?{' '}
                <Link to={PATH_REGISTER_USER}>Sign up!</Link>
              </span>
            </CustomRow>
          </CustomCard>
        </CustomCol>
      </CustomRow>
    </RoutesWrapper>
  )
}

export default Login
