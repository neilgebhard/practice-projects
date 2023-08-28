'use client'

import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

type Circle = {
  x: number
  y: number
}

const Page = () => {
  const [circles, setCircles] = useState<Circle[]>([])
  const [index, setIndex] = useState(-1)

  const handleWindowClick = (e: MouseEvent) => {
    const circle = {
      x: e.clientX,
      y: e.clientY,
    }

    setCircles((prev) => [...prev, circle])
    setIndex((prev) => prev + 1)
  }

  const handlePrevClick = (e: any) => {
    e.stopPropagation()
    // prevent index from going below -1
    const prevIndex = Math.max(index - 1, -1)
    setIndex(prevIndex)
  }

  const handleNextClick = (e: any) => {
    e.stopPropagation()
    // prevent index from exceeding circles array length
    const nextIndex = Math.min(index + 1, circles.length - 1)
    setIndex(nextIndex)
  }

  useEffect(() => {
    window.addEventListener('click', handleWindowClick)

    return () => {
      window.removeEventListener('click', handleWindowClick)
    }
  }, [])

  console.log(circles, index)

  return (
    <div className='relative'>
      <div className='flex gap-3 p-3'>
        <Button onClick={handlePrevClick}>Prev</Button>
        <Button onClick={handleNextClick}>Next</Button>
      </div>
      {circles.map((circle, i) => {
        return i <= index ? (
          <div
            key={i}
            className='absolute rounded-full h-3 w-3 bg-black -translate-x-1/2 -translate-y-1/2'
            style={{
              left: circle.x,
              top: circle.y,
            }}
          />
        ) : null
      })}
    </div>
  )
}

export default Page
