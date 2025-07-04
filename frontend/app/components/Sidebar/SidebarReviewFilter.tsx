'use client'
import React from 'react'

interface SidebarReviewFilterProps {
  selected: number | null
  onSelect: (star: number) => void
}

export default function SidebarReviewFilter({ selected, onSelect }: SidebarReviewFilterProps) {
  return (
    <div className="filter-group">
      <h3 className="filter-title">Review</h3>
      <ul className="review-list">
        {[5,4,3,2,1].map(star => (
          <li
            key={star}
            style={{ cursor: 'pointer' }}
            className={selected === star ? 'active' : ''}
            onClick={() => onSelect(star)}
          >
            <div className="stars" style={{ display: 'inline-block', marginRight: 4 }}>
              {[1,2,3,4,5].map(i =>
                <i key={i} className={i <= star ? "fa fa-star" : "fa fa-star-o"} />
              )}
            </div>
            {star} Star
          </li>
        ))}
      </ul>
    </div>
  )
}
