"use client"
import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export default function SpotlightCard({ children, className, ...props }: SpotlightCardProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        })
    }

    return (
        <div
            className={cn("relative overflow-hidden border border-neutral-800 bg-black rounded-[24px]", className)}
            onMouseMove={handleMouseMove}
            {...props}
        >
            {/* The Spotlight Overlay */}
            <div
                className="pointer-events-none absolute inset-0 -inset-px rounded-[24px] opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
                style={{
                    backgroundColor: '#aaff0070', // primary color with opacity
                    maskImage: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, white, transparent 80%)`,
                }}
            />
            {children}
        </div>
    )
}