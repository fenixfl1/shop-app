import React from 'react'
import { isLoggedIn } from '../utils/session'
import NavigationBar from './NavigationBar'
import { Navigate } from 'react-router-dom'
import { PATH_LOGIN } from '../constants/routes'
import { CustomContent, CustomLayout, CustomSpin } from '.'
import { Footer } from 'antd/lib/layout/layout'

interface ProtectedRoutesProps {
  protect?: boolean
  children: React.ReactNode
  allowSearch?: boolean
  spinning?: boolean
}

const RoutesWrapper: React.FC<ProtectedRoutesProps> = ({
  protect = false,
  allowSearch = true,
  spinning = false,
  ...props
}): React.ReactElement => {
  if (!isLoggedIn() && protect) {
    return <Navigate to={PATH_LOGIN} />
  }

  return (
    <CustomLayout>
      <CustomSpin spinning={spinning} size={'large'}>
        <NavigationBar allowSearch={allowSearch} />
        <CustomContent
          style={{
            overflow: 'initial',
            maxWidth: '85%',
            margin: 'auto',
          }}
        >
          <div className="">{props.children}</div>
          <Footer style={{ textAlign: 'center' }}>
            FAST SHOP ©{`${new Date().getFullYear()}`} Created by KODIGO's
            Students
          </Footer>
        </CustomContent>
      </CustomSpin>
    </CustomLayout>
  )
}

export default RoutesWrapper
