'use client'
import React from 'react'

interface SidebarTypeFilterProps {
  types: { name: string; checked: boolean }[]
  onChange: (name: string) => void
}

export default function SidebarTypeFilter({ types, onChange }: SidebarTypeFilterProps) {
  return (
    <div className="filter-group">
      <h3 className="filter-title">Product Type</h3>
      <ul className="type-list">
        {types.map(type => (
          <li key={type.name}>
            <input
              type="checkbox"
              checked={type.checked}
              onChange={() => onChange(type.name)}
              style={{ marginRight: 6 }}
            />
            {type.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
