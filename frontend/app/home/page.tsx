'use client'

import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import api from '@/lib/axios'
import FlashSale from '@/components/FlashSale'
import BestSells from '@/components/BestSells'
import PopularProductsTabs from '@/components/PopularProducts';
import PromoBanner from '@/components/PromoBanners';
import NewsletterBanner from '@/components/Newsletter';


interface Product {
  id: number
  name: string
  price: number
  slug: string
  images: string
  discount: number
  description: string
  category?: string
}

export default function HomePage() {
  const [allProducts, setAllProducts] = useState<Product[]>([])
  const [filter, setFilter] = useState({ search: '', category: '', maxPrice: '' })
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20 //số lượng sản phẩm mỗi trang 

  useEffect(() => {
    api.get('/products').then(res => {
      let data: any[] = []
      if (Array.isArray(res.data)) {
        data = res.data
      } else if (
        res.data && 
        typeof res.data === 'object' &&
        Array.isArray((res.data as any)?.products)
      ) {
        data = (res.data as any).products
      }
      setAllProducts(data)
      setLoading(false)
    })
  }, [])
  

  const filteredProducts = useMemo(() => {
    let filtered = allProducts
    if (filter.search) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(filter.search.toLowerCase())
      )
    }
    if (filter.category) {
      filtered = filtered.filter(p =>
        (p.category || '').toLowerCase() === filter.category
      )
    }
    if (filter.maxPrice) {
      filtered = filtered.filter(p => p.price <= parseInt(filter.maxPrice, 10))
    }
    return filtered
  }, [allProducts, filter])

  const startIndex = (currentPage - 1) * itemsPerPage
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage)

  const handleFilter = (f: { search: string; category: string; maxPrice: string }) => {
    setFilter(f)
    setCurrentPage(1)
  }

  return (
    <div>
      <FlashSale />
      <PromoBanner />
      <PopularProductsTabs />
      <BestSells />
      <BestSells />
      <BestSells />
      <BestSells />
      <NewsletterBanner />
    </div>
  )
}
