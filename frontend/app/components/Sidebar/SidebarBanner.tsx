'use client'
import React from 'react'

export default function SidebarBanner({ src }: { src: string }) {
  return (
    <div className="sidebar-banner">
      <img src={src} alt="Product" style={{ width: '100%', borderRadius: 8 }} />
    </div>
  )
}
