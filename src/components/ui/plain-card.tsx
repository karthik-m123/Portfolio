"use client"

import { type ReactNode } from "react"

interface PlainCardProps {
  children: ReactNode
}

export function PlainCard({ children }: PlainCardProps) {
  return (
    <div className="w-full h-full min-h-[280px] sm:min-h-[320px] lg:min-h-[350px] bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 rounded-xl p-6 transition-all duration-300 hover:bg-gray-800/80 flex flex-col">
      {children}
    </div>
  )
}
