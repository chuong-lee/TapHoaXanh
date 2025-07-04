import SidebarCategory, { Category } from './SidebarCategory'
import SidebarPriceFilter from './SidebarPriceFilter'
import SidebarBanner from './SidebarBanner'

export default function CategorySidebar(props: {
  categories: Category[]
  selectedCategory: number
  onSelectCategory: (catId: number) => void

  price: { min: number; max: number; value: number; onChange: (v: number) => void }
  bannerSrc: string
}) {
  return (
    <div className="sidebar">
      <SidebarCategory
        categories={props.categories}
        selected={props.selectedCategory}
        onSelect={props.onSelectCategory}
      />
      <SidebarPriceFilter {...props.price} />
      <SidebarBanner src={props.bannerSrc} />
    </div>
  )
}
