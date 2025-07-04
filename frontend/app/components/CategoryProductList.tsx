import ProductCard from './ProductCard'

interface Product {
  id: number
  name: string
  price: number
  slug: string
  images: string
  discount: number
  description: string
  // ...các trường khác nếu cần
}

interface Props {
  products: Product[]
}

export default function CategoryProductList({ products }: Props) {
  if (!products.length)
    return <div className="alert alert-warning">Không có sản phẩm nào.</div>
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          images={product.images}
          title={product.name}
          price={product.price}
          // brand={product.brand}
          // category={product.category}
          // truyền thêm discount, oldPrice, sold, progress, badge... nếu muốn
        />
      ))}
    </div>
  )
}
