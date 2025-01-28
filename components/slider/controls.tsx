"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { SliderControlsProps } from "@/types/slider"
import { Pagination } from "./pagination"

export function SliderControls({ total, current, onSelect }: SliderControlsProps) {
  return (
    <div className="flex flex-col items-start">
      <Pagination total={total} current={current} onSelect={onSelect} />
    </div>
  )
}

export default SliderControls