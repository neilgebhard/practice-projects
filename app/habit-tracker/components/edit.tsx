'use client'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Habit } from '@prisma/client'
import editHabit from '../actions/editHabit'

const formSchema = z.object({
  notes: z.string().min(1),
})

type Props = {
  habit: Habit
}

const Create = ({ habit }: Props) => {
  const { notes, date } = habit

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      notes: notes || '',
    },
  })

  const { handleSubmit, control } = form

  function onSubmit(values: z.infer<typeof formSchema>) {
    editHabit({ ...values, date })
  }

  return (
    <>
      <h1>Edit</h1>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={control}
            name='notes'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notes</FormLabel>
                <FormControl>
                  <Input placeholder='Write down a note here...' {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </>
  )
}

export default Create
