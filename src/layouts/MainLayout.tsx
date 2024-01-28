import { Layout, Space } from 'antd'
import styles from './MainLayout.module.css'
import Login from '../sections/Login/Login'
import Register from '../sections/Register/Register'
const { Header, Content, Footer } = Layout

type MainLayoutProps = Readonly<{
  children?: React.ReactNode
}>

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <Space className={styles.headerRight}>
          <Login />
          <Register />
        </Space>
      </Header>
      <Content className={styles.content}>{children}</Content>
      <Footer className={styles.footer}></Footer>
    </Layout>
  )
}

export default MainLayout
