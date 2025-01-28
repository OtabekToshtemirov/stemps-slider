export interface SlideData {
  id: number
  icon: React.ReactNode
  title: string
  description: string
}

export interface SliderProps {
  slides: SlideData[]
  initialSlide?: number
}

export interface PaginationProps {
  total: number
  current: number
  onSelect: (index: number) => void
}

export interface SliderControlsProps extends PaginationProps {
  onPrevious: () => void
  onNext: () => void
}

