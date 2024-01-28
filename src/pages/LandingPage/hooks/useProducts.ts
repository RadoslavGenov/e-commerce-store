import { useEffect, useState } from 'react'
import { GET_PRODUCTS, apiInstance } from '../../../api/api'
import { Product } from '../../../types'

type UseProducts = (
  page: number,
  itemsPerPage: number
) => Readonly<{ products: Product[] }>

export const useProducts: UseProducts = (page, itemsPerPage) => {
  const [products, setProducts] = useState<Product[]>()

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await apiInstance.get(GET_PRODUCTS, {
          params: { page, itemsPerPage }
        })

        setProducts(data)
      } catch (error) {}
    }

    fetchProducts()
  }, [itemsPerPage, page])

  return { products: products ?? [] }
}
