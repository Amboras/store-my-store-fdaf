'use client'

import { useState } from 'react'
import { X, Package } from 'lucide-react'

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-[#2C1810] text-white">
      <div className="container-custom flex items-center justify-center gap-2 py-2.5 text-sm tracking-wide">
        <Package className="h-3.5 w-3.5 flex-shrink-0" />
        <p>Free shipping on all orders over $50 — Use code <span className="font-semibold">PAWS20</span> for 20% off your first order</p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:opacity-70 transition-opacity"
          aria-label="Dismiss announcement"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
