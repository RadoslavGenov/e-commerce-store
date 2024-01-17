import Login from './sections/Login/Login'
import { Register } from './sections/Register/Register'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Login />
      <Register />
    </div>
  )
}

export default App
