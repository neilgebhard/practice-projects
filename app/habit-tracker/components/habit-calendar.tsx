'use client'

import { Calendar } from '@/components/ui/calendar'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export function HabitCalendar() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const dateSearchParam = searchParams.get('date')
  const selectedDate = dateSearchParam ? new Date(dateSearchParam) : new Date()

  const [date, setDate] = useState<Date | undefined>(selectedDate)

  const handleSelect = (e: Date | undefined) => {
    setDate(e)
    window.location.href = `/habit-tracker?date=${e?.toLocaleDateString()}`
  }

  return (
    <Calendar
      mode='single'
      selected={date}
      onSelect={handleSelect}
      className='rounded-md border'
    />
  )
}

export default HabitCalendar
