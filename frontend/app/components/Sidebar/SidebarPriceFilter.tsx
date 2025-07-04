'use client'
import React from 'react'

interface SidebarPriceFilterProps {
  min: number
  max: number
  value: number
  onChange: (value: number) => void
}

export default function SidebarPriceFilter({ min, max, value, onChange }: SidebarPriceFilterProps) {
  return (
    <div className="filter-group">
      <h3 className="filter-title">Price</h3>
      <div className="price-slider">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={e => onChange(Number(e.target.value))}
          className="form-range"
        />
        <div className="price-range d-flex justify-content-between">
          <span>đ{min.toFixed(3)}</span>
          <span>đ{max.toFixed(3)}</span>
        </div>
      </div>
    </div>
  )
}
