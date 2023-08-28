'use client'

import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

type Circle = {
  x: number
  y: number
}

const Page = () => {
  const [circles, setCircles] = useState<Circle[]>([])
  const [popped, setPopped] = useState<Circle[]>([])

  const handleWindowClick = (e: MouseEvent) => {
    const circle = {
      x: e.clientX,
      y: e.clientY,
    }
    // remove from circles if below array index is below circles.length - 1
    setCircles((prev) => [...prev, circle])
    setPopped([])
  }

  const handlePrevClick = (e: MouseEvent) => {
    e.stopPropagation()
    const newPopped = circles.pop()
    if (newPopped) {
      setPopped([...popped, newPopped])
      setCircles([...circles])
    }
  }

  const handleNextClick = (e: any) => {
    const newPopped = popped.pop()
    if (newPopped) {
      setCircles([...circles, newPopped])
      setPopped(popped)
    }
    e.stopPropagation()
  }

  useEffect(() => {
    window.addEventListener('click', handleWindowClick)

    return () => {
      window.removeEventListener('click', handleWindowClick)
    }
  }, [])

  return (
    <div className='relative'>
      <div className='flex gap-3 p-3'>
        <Button onClick={handlePrevClick}>Prev</Button>
        <Button onClick={handleNextClick}>Next</Button>
      </div>
      {circles.map((circle, i) => (
        <div
          key={i}
          className='absolute rounded-full h-3 w-3 bg-black -translate-x-1/2 -translate-y-1/2'
          style={{
            left: circle.x,
            top: circle.y,
          }}
        />
      ))}
    </div>
  )
}

export default Page
