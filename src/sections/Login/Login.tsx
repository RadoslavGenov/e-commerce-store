import { useState } from 'react'
import { Button, Modal } from 'antd'

const Login: React.FC = () => {
  const [open, setOpen] = useState(false)

  const handleOpenModal = () => {
    setOpen(true)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const handleLogin = () => {}

  return (
    <>
      <Button onClick={handleOpenModal}>Login</Button>
      <Modal
        open={open}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleLogin}>
            Login
          </Button>
        ]}
      >
        <></>
      </Modal>
    </>
  )
}

export default Login
