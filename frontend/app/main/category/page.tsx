'use client'
import { useEffect, useState } from 'react'
import SidebarCategory from '@/components/Sidebar/CategorySidebar'
import CategoryFilter, { FilterField } from '@/components/CategoryFilter'
import CategoryProductList from '@/components/CategoryProductList'
import Pagination from '@/components/Pagination'
import api from '@/lib/axios'

interface Category {
  id: number;
  name: string;
}

interface Product {
  id: number
  name: string
  price: number
  slug: string
  images: string
  discount: number
  description: string
}

export default function CategoryPage() {
  // Danh mục
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<number>(0)
  // Sản phẩm
  const [allProducts, setAllProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  // Filter bar ngang
  const [filterBar, setFilterBar] = useState<{ name: string; sort: string; show: string }>({
    name: '',
    sort: 'newest',
    show: '12'
  })
  // Phân trang
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(12)

  // Sidebar price slider
  const [priceValue, setPriceValue] = useState(100) // 100 (tương ứng 100.000đ)

  // Lấy danh mục khi mount
  useEffect(() => {
    setLoading(true)
    api.get('/categories')
      .then((catRes) => {
        let catData: Category[] = []
        const catRaw = catRes.data
        if (Array.isArray(catRaw)) catData = catRaw
        else if (catRaw && Array.isArray((catRaw as any).categories)) catData = (catRaw as any).categories
        setCategories([{ id: 0, name: 'Tất cả' }, ...catData])
      })
      .catch(() => {})
      .then(() => setLoading(false))
  }, [])

  // Lấy sản phẩm theo danh mục khi đổi selectedCategory
  useEffect(() => {
    setLoading(true)
    let productPromise
    if (selectedCategory && selectedCategory !== 0) {
      productPromise = api.get(`/products/cate/${selectedCategory}`)
    } else {
      productPromise = api.get('/products')
    }
    productPromise
      .then(prodRes => {
        let productList: Product[] = []
        const prodRaw = prodRes.data
        if (Array.isArray(prodRaw)) productList = prodRaw
        else if (prodRaw && typeof prodRaw === 'object' && 'products' in prodRaw && Array.isArray(prodRaw.products)) {
          productList = prodRaw.products
        }
        setAllProducts(productList)
      })
      .catch(() => {
        setAllProducts([])
      })
      .then(() => setLoading(false))
  }, [selectedCategory])

  // Xử lý filterBar (lọc ngang)
  const handleFilterBar = (values: Record<string, string>) => {
    setFilterBar({
      name: values.name || '',
      sort: values.sort || 'newest',
      show: values.show || '8'
    })
    setItemsPerPage(Number(values.show) || 8) //Chỉnh sửa số lượng sản phẩm tỏgn trang mặc định
    setCurrentPage(1)
  }

  // Lọc sản phẩm
  const getFilteredProducts = () => {
    let filtered = [...allProducts]
    // Lọc theo tên
    if (filterBar.name) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(filterBar.name.toLowerCase())
      )
    }
    // Lọc theo giá
    if (priceValue) {
      filtered = filtered.filter(product => product.price <= priceValue * 1000)
    }
    // Sort
    if (filterBar.sort === 'price-asc') filtered.sort((a, b) => a.price - b.price)
    else if (filterBar.sort === 'price-desc') filtered.sort((a, b) => b.price - a.price)
    else if (filterBar.sort === 'newest') filtered.sort((a, b) => b.id - a.id)
    else if (filterBar.sort === 'oldest') filtered.sort((a, b) => a.id - b.id)
    return filtered
  }

  const filteredProducts = getFilteredProducts()
  const totalItems = filteredProducts.length
  const currentProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Cấu hình fields cho CategoryFilter bar (phía trên)
  const filterBarFields: FilterField[] = [
    { type: 'text', name: 'name', placeholder: 'Tìm sản phẩm', col: 'col-md-5' },
    {
      type: 'select', name: 'sort', col: 'col-md-3', options: [
        { value: 'newest', label: 'Mới nhất' },
        { value: 'oldest', label: 'Cũ nhất' },
        { value: 'price-asc', label: 'Giá tăng dần' },
        { value: 'price-desc', label: 'Giá giảm dần' }
      ]
    },
    {
      type: 'select', name: 'show', col: 'col-md-2', options: [
        { value: '8', label: '8 sp trang' },
        { value: '24', label: '24 sp trang' },
        { value: '36', label: '36 sp trang' },
        { value: '48', label: '48 sp trang' }
      ]
    }
  ]

  return (
      <div className="category-page product">
        <div className="product">
          <div className="container my-3">
            <div className="row">
              {/* Sidebar */}
              <div className="col-lg-3">
                <SidebarCategory
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                  price={{ min: 10, max: 10000, value: priceValue, onChange: setPriceValue }}
                  bannerSrc="http://127.0.0.1:5500/html/client/images/banner-1.png"
                />
              </div>
              {/* Main content */}
              <div className="col-lg-9">
                <div className="content">
                  <div className="content-header d-flex justify-content-between align-items-center mb-3">
                    <h6>
                      Tìm thấy <span className="count">{totalItems}</span> sản phẩm!
                    </h6>
                    <div className="content-controls">
                      <CategoryFilter fields={filterBarFields} onFilter={handleFilterBar} />
                    </div>
                  </div>
                
                  {loading ? (
                    <div className="text-center py-5">
                      <span className="spinner-border spinner-border-sm"></span> Đang tải sản phẩm...
                    </div>
                  ) : currentProducts.length === 0 ? (
                    <div className="alert alert-warning">Không có sản phẩm phù hợp.</div>
                  ) : (
                    <CategoryProductList products={currentProducts} />
                    
                  )}
                </div>
                <Pagination
                  currentPage={currentPage}
                  totalItems={totalItems}
                  itemsPerPage={itemsPerPage}
                  onPageChange={setCurrentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
