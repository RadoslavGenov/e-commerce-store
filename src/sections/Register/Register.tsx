import { ChangeEvent, useState } from 'react'
import { Button, Input, Modal, Space, Typography } from 'antd'
import { REGISTER, apiInstance } from '../../api/api'
import { INITIAL_VALUES } from './Register.constants'
import styles from './Register.module.css'

const { Text } = Typography

export const Register: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [values, setValues] = useState<{ [key: string]: string }>(
    INITIAL_VALUES
  )

  const handleOpenModal = () => {
    setOpen(true)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const handleRegister = async () => {
    try {
      if (values['password'] !== values['repeatPassword']) {
        setValues({ ...values, error: 'Passwords do not match!' })
        return
      }

      await apiInstance.post(REGISTER, values)
    } catch (error: any) {
      setValues({ ...values, error: error.response.data.message })
    }
  }

  const handleChangeValue =
    (value: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [value]: e.currentTarget.value })
    }

  return (
    <>
      <Button onClick={handleOpenModal}>Register</Button>
      <Modal
        open={open}
        title="Register"
        onOk={handleRegister}
        onCancel={handleCancel}
        footer={[
          <div key="register" className={styles.footer}>
            <Button key="submit" type="primary" onClick={handleRegister}>
              Register
            </Button>
          </div>
        ]}
      >
        <Space className={styles.space} direction="vertical" align="center">
          <Input
            onChange={handleChangeValue('firstName')}
            placeholder="First Name"
            value={values['firstName']}
          />
          <Input
            onChange={handleChangeValue('lastName')}
            placeholder="Last Name"
            value={values['lastName']}
          />
          <Input
            onChange={handleChangeValue('email')}
            placeholder="Email"
            type="email"
            value={values['email']}
          />
          <Input
            onChange={handleChangeValue('username')}
            placeholder="username"
            value={values['username']}
          />
          <Input
            onChange={handleChangeValue('password')}
            placeholder="password"
            type="password"
            value={values['password']}
          />
          <Input
            onChange={handleChangeValue('repeatPassword')}
            placeholder="Repeat Password"
            type="password"
            value={values['repeatPassword']}
          />

          {values['error'] && <Text type="danger">{values['error']}</Text>}
        </Space>
      </Modal>
    </>
  )
}
