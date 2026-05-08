"use client"
import React from 'react'
import { cn } from '@/lib/utils'

interface BorderBeamCardProps {
  children: React.ReactNode
  className?: string
}

export default function BorderBeamCard({ children, className }: BorderBeamCardProps) {
  return (
    <div className={cn("border-beam-wrapper rounded-[16px]", className)}>
      <div className="bg-[#0a0a0a] h-full w-full rounded-[14px] overflow-hidden p-6 relative">
        {children}
      </div>
    </div>
  )
}