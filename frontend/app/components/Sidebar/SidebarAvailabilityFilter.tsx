'use client'
import React from 'react'

interface SidebarAvailabilityFilterProps {
  list: { name: string; checked: boolean }[]
  onChange: (name: string) => void
}

export default function SidebarAvailabilityFilter({ list, onChange }: SidebarAvailabilityFilterProps) {
  return (
    <div className="filter-group">
      <h3 className="filter-title">Availability</h3>
      <ul className="availability-list">
        {list.map(item => (
          <li key={item.name}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => onChange(item.name)}
              style={{ marginRight: 6 }}
            />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
