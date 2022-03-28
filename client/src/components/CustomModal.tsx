import React from 'react'
import { Modal, ModalProps } from 'antd'

const CustomModal: React.FC<ModalProps> = ({
  centered,
  ...props
}): React.ReactElement => {
  return (
    <Modal centered={centered} {...props}>
      {props.children}
    </Modal>
  )
}

export default CustomModal
