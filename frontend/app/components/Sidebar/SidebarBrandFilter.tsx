'use client'
import React from 'react'

interface SidebarBrandFilterProps {
  brands: { name: string; checked: boolean }[]
  onChange: (name: string) => void
}

export default function SidebarBrandFilter({ brands, onChange }: SidebarBrandFilterProps) {
  return (
    <div className="filter-group">
      <h3 className="filter-title">Brand</h3>
      <ul className="brand-list">
        {brands.map(brand => (
          <li key={brand.name}>
            <input
              type="checkbox"
              checked={brand.checked}
              onChange={() => onChange(brand.name)}
              style={{ marginRight: 6 }}
            />
            {brand.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
