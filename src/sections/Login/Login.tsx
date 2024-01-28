import { ChangeEvent, useState } from 'react'
import { Button, Input, Modal, Space, Typography } from 'antd'
import { LOGIN, apiInstance } from '../../api/api'
import styles from './Login.module.css'

const { Text } = Typography

const Login: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleOpenModal = () => {
    setOpen(true)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const handleLogin = async () => {
    try {
      await apiInstance.post(LOGIN, {
        username,
        password
      })
    } catch (error: any) {
      setError(error.response.data.message)
    }
  }

  const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value)
  }

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }

  return (
    <>
      <Button onClick={handleOpenModal}>Login</Button>
      <Modal
        open={open}
        title="Login"
        onOk={handleLogin}
        onCancel={handleCancel}
        footer={[
          <div key="submit" className={styles.loginButton}>
            <Button type="primary" onClick={handleLogin}>
              Login
            </Button>
          </div>
        ]}
      >
        <Space className={styles.space} direction="vertical" align="center">
          <Input
            value={username}
            onChange={handleChangeUsername}
            placeholder="username"
          />
          <Input
            onChange={handleChangePassword}
            placeholder="password"
            type="password"
            value={password}
          />

          {error && <Text type="danger">{error}</Text>}
        </Space>
      </Modal>
    </>
  )
}

export default Login
