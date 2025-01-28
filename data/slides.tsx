import type { SlideData } from "@/types/slider"
import { PieChart, Search, FileText, Users, UserCheck, UserPlus } from "lucide-react"

export const slides: SlideData[] = [
  {
    id: 1,
    icon: <PieChart className="w-12 h-12 text-violet-400" />,
    title: "Анализ текущего состояния карьеры",
    description: "Проведем оценку вашего опыта и создадим стратегию для дальнейшего карьерного развития.",
  },
  {
    id: 2,
    icon: <Search className="w-12 h-12 text-violet-400" />,
    title: "Поиск работы",
    description: "Определим вашу карьерную цель и разработаем стратегию для трудоустройства.",
  },
  {
    id: 3,
    icon: <FileText className="w-12 h-12 text-violet-400" />,
    title: "Сопроводительные письма и резюме",
    description: "Поможем оформить профессиональное портфолио, которое выделит вас среди других кандидатов.",
  },
  {
    id: 4,
    icon: <Users className="w-12 h-12 text-violet-400" />,
    title: "Тренинг по презентации личного бренда",
    description: "Покажем сильные стороны и грамотно выстроим самопрезентацию.",
  },
  {
    id: 5,
    icon: <UserCheck className="w-12 h-12 text-violet-400" />,
    title: "Подготовка к собеседованию",
    description: "Научим говорить о себе кратко, ярко и профессионально.",
  },
  {
    id: 6,
    icon: <UserPlus className="w-12 h-12 text-violet-400" />,
    title: "Рекомендация по базе STEMPS Career",
    description: "Поможем встретиться с подходящим работодателем.",
  },
]

