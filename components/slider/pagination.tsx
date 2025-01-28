"use client"

import { motion } from "framer-motion"
import type { PaginationProps } from "@/types/slider"

export function Pagination({ total, current, onSelect }: PaginationProps) {
  const itemsPerRow = 7
  const rows = Math.ceil(total / itemsPerRow)

  return (
    <div className="flex flex-col gap-2 mt-6">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex gap-1.5">
          {Array.from({ length: Math.min(itemsPerRow, total - rowIndex * itemsPerRow) }).map((_, colIndex) => {
            const index = rowIndex * itemsPerRow + colIndex
            const isActive = index === current

            return (
              <button
                key={index}
                onClick={() => onSelect(index)}
                className="relative h-2 flex items-center"
                style={{ width: isActive ? "24px" : "8px" }}
                aria-label={`Go to slide ${index + 1}`}
              >
                <motion.div
                  className="absolute inset-0 bg-gray-200 rounded-full"
                  initial={false}
                  animate={{
                    opacity: isActive ? 0 : 1,
                  }}
                />
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-gray-900 rounded-full"
                    layoutId={`activeDot-row-${rowIndex}`}
                    initial={{ width: 8 }}
                    animate={{ width: 24 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            )
          })}
        </div>
      ))}
    </div>
  )
}

