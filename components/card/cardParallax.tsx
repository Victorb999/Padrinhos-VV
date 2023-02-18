'use client'
import '../../styles/atropos.css'

import Atropos from 'atropos/react'

interface CardProps {
  children: JSX.Element
  className: string
}

export default function CardParallax({ children, className }: CardProps) {
  return (
    <div>
      <Atropos className={className}>{children}</Atropos>
    </div>
  )
}
