import { cn } from '@/lib/utils'
import React from 'react'

interface ContainerProps {
    children: React.ReactNode
    className?: string
    size?: 'sm' | 'md' | 'lg' | 'xl'
}

const Container = ({
    children,
    className,
    size = 'xl'
}: ContainerProps) => {
    const sizeClasses = {
        sm: 'max-w-4xl',    
        md: 'max-w-5xl',    
        lg: 'max-w-7xl',    
        xl: 'max-w-screen-2xl' 
    }

    return (
        <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", sizeClasses[size], className)} >
            {children}
        </div>
    )
}

export default Container