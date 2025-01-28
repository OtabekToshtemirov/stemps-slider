# Stemps Slider

Современный слайдер для веб-приложений, созданный с использованием Next.js и Framer Motion.

## Особенности

- Бесконечная прокрутка слайдов
- Адаптивный дизайн
- Плавные анимации переходов
- Интерактивная пагинация
- Поддержка мобильных устройств

## Технологии

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/OtabekToshtemirov/stemps-slider.git
```

2. Установите зависимости:
```bash
npm install
# или
yarn install
# или
pnpm install
```

3. Запустите проект:
```bash
npm run dev
# или
yarn dev
# или
pnpm dev
```

4. Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Использование

```tsx
import { Slider } from '@/components/slider'

const slides = [
  {
    id: 1,
    title: "Заголовок 1",
    description: "Описание 1",
    icon: <YourIcon />
  },
  // ... добавьте другие слайды
]

export default function Home() {
  return <Slider slides={slides} />
}
```

## Деплой на Vercel

Самый простой способ развернуть приложение - использовать [Vercel Platform](https://vercel.com/new).

1. Создайте аккаунт на Vercel
2. Установите Vercel CLI:
```bash
npm i -g vercel
```
3. Войдите в аккаунт:
```bash
vercel login
```
4. Разверните проект:
```bash
vercel
```

## Лицензия

MIT
