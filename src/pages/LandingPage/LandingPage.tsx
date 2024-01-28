import MainLayout from '../../layouts/MainLayout'
import { useProducts } from './hooks/useProducts'

const LandingPage: React.FC = () => {
  const { products } = useProducts(1, 10)

  return <MainLayout></MainLayout>
}

export default LandingPage
