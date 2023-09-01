'use client'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import createHabit from '../actions/createHabit'
import editHabit from '../actions/editHabit'
import { Habit } from '@prisma/client'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'

const formSchema = z.object({
  notes: z.string(),
  exercised: z.boolean(),
  practicedProperNutrition: z.boolean(),
  sleptWell: z.boolean(),
  learned: z.boolean(),
  avoidedAlcohol: z.boolean(),
  avoidedSmoking: z.boolean(),
  socialized: z.boolean(),
  limitedScreenTime: z.boolean(),
  read: z.boolean(),
  expressedGratitude: z.boolean(),
  meditated: z.boolean(),
  actedWithKindness: z.boolean(),
  practicedPersonalHygiene: z.boolean(),
  journaled: z.boolean(),
})

type Props = {
  date: string
  initialData: Habit | null
}

const Create = ({ initialData, date }: Props) => {
  const notes = initialData?.notes
  const exercised = initialData?.exercised
  const practicedProperNutrition = initialData?.practicedProperNutrition
  const sleptWell = initialData?.sleptWell
  const learned = initialData?.learned
  const avoidedAlcohol = initialData?.avoidedAlcohol
  const avoidedSmoking = initialData?.avoidedSmoking
  const socialized = initialData?.socialized
  const limitedScreenTime = initialData?.limitedScreenTime
  const read = initialData?.read
  const expressedGratitude = initialData?.expressedGratitude
  const meditated = initialData?.meditated
  const actedWithKindness = initialData?.actedWithKindness
  const practicedPersonalHygiene = initialData?.practicedPersonalHygiene
  const journaled = initialData?.journaled

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      notes: notes || '',
      exercised: exercised || false,
      practicedProperNutrition: practicedProperNutrition || false,
      sleptWell: sleptWell || false,
      learned: learned || false,
      avoidedAlcohol: avoidedAlcohol || false,
      avoidedSmoking: avoidedSmoking || false,
      socialized: socialized || false,
      limitedScreenTime: limitedScreenTime || false,
      read: read || false,
      expressedGratitude: expressedGratitude || false,
      meditated: meditated || false,
      actedWithKindness: actedWithKindness || false,
      practicedPersonalHygiene: practicedPersonalHygiene || false,
      journaled: journaled || false,
    },
  })

  const { handleSubmit, control } = form

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    if (initialData) {
      editHabit({ ...values, date })
    } else {
      createHabit({ ...values, date })
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-wrap gap-3'
        >
          <FormField
            control={control}
            name='notes'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Textarea
                    placeholder='Write down any notes for the day...'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='exercised'
            render={({ field }) => (
              <FormItem className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className='space-y-1 leading-none'>
                  <FormLabel>Exercised</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='sleptWell'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className='space-y-1 leading-none'>Slept well</div>
                </FormLabel>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='practicedProperNutrition'
            render={({ field }) => (
              <FormItem className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className='space-y-1 leading-none'>
                  <FormLabel>Practiced proper nutrition</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='learned'
            render={({ field }) => (
              <FormItem className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className='space-y-1 leading-none'>
                  <FormLabel>Learned something new</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='avoidedAlcohol'
            render={({ field }) => (
              <FormItem className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className='space-y-1 leading-none'>
                  <FormLabel>Avoided alcohol?</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='avoidedSmoking'
            render={({ field }) => (
              <FormItem className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className='space-y-1 leading-none'>
                  <FormLabel>Avoided smoking</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='socialized'
            render={({ field }) => (
              <FormItem className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className='space-y-1 leading-none'>
                  <FormLabel>Socialized</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='limitedScreenTime'
            render={({ field }) => (
              <FormItem className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className='space-y-1 leading-none'>
                  <FormLabel>Limited screen time</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='read'
            render={({ field }) => (
              <FormItem className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className='space-y-1 leading-none'>
                  <FormLabel>Did some reading</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='expressedGratitude'
            render={({ field }) => (
              <FormItem className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className='space-y-1 leading-none'>
                  <FormLabel>Expressed gratitude</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='meditated'
            render={({ field }) => (
              <FormItem className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className='space-y-1 leading-none'>
                  <FormLabel>Meditated or practiced mindfulness</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='actedWithKindness'
            render={({ field }) => (
              <FormItem className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className='space-y-1 leading-none'>
                  <FormLabel>Acted with kindness</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='practicedPersonalHygiene'
            render={({ field }) => (
              <FormItem className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className='space-y-1 leading-none'>
                  <FormLabel>Practiced personal hygiene</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='journaled'
            render={({ field }) => (
              <FormItem className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className='space-y-1 leading-none'>
                  <FormLabel>Journaled</FormLabel>
                </div>
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
