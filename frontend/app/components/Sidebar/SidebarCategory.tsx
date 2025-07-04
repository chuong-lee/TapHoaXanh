'use client'
import React from 'react'

export interface Category {
  id: number
  name: string
  count?: number
}

interface SidebarCategoryProps {
  categories: Category[]
  selected: number
  onSelect: (catId: number) => void
}

export default function SidebarCategory({ categories, selected, onSelect }: SidebarCategoryProps) {
  return (
    <div className="filter-group">
      <h3 className="filter-title">Category</h3>
      <ul className="filter-list" style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {/* "Tất cả" luôn ở trên, không cuộn */}
        <li
          className={selected === 0 ? 'active' : ''}
          style={{ cursor: 'pointer', minHeight: 38 }}
          onClick={() => onSelect(0)}
        >
          <span className="icon"><i className="fa fa-circle"></i></span>
          Tất cả
        </li>
      </ul>
      {/* Danh mục còn lại nằm trong khung cuộn dọc */}
      <div
        className="category-scroll-vertical"
        style={{
          maxHeight: 10 * 38, // khoảng 10 mục, mỗi mục cao 38px
          overflowY: "auto",
          marginTop: 3,
          marginRight: -6,
          paddingRight: 6
        }}
      >
        <ul className="filter-list" style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {categories.filter(cat => cat.id !== 0).map(cat => (
            <li
              key={cat.id}
              className={selected === cat.id ? 'active' : ''}
              style={{
                cursor: 'pointer',
                minHeight: 38,
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden'
              }}
              onClick={() => onSelect(cat.id)}
            >
              <span className="icon"><i className="fa fa-circle"></i></span>
              {cat.name}
              {cat.count !== undefined &&
                <span className="count">({cat.count})</span>
              }
            </li>
          ))}
        </ul>
      </div>
    </div>

  )
}
