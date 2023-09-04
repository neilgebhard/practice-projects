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
import toast from 'react-hot-toast'

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
  initialHabit: Habit | null
}

const Create = ({ initialHabit, date }: Props) => {
  const notes = initialHabit?.notes
  const exercised = initialHabit?.exercised
  const practicedProperNutrition = initialHabit?.practicedProperNutrition
  const sleptWell = initialHabit?.sleptWell
  const learned = initialHabit?.learned
  const avoidedAlcohol = initialHabit?.avoidedAlcohol
  const avoidedSmoking = initialHabit?.avoidedSmoking
  const socialized = initialHabit?.socialized
  const limitedScreenTime = initialHabit?.limitedScreenTime
  const read = initialHabit?.read
  const expressedGratitude = initialHabit?.expressedGratitude
  const meditated = initialHabit?.meditated
  const actedWithKindness = initialHabit?.actedWithKindness
  const practicedPersonalHygiene = initialHabit?.practicedPersonalHygiene
  const journaled = initialHabit?.journaled

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
    if (initialHabit) {
      editHabit({ ...values, date })
      toast.success('Habit updated successfully')
    } else {
      createHabit({ ...values, date })
      toast.success('Habit updated successfully')
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-wrap gap-3 mb-3'>
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
            <div className='grid grid-cols-3 gap-3'>
              <FormField
                control={form.control}
                name='exercised'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 w-full h-full'>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>Exercised</div>
                    </FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='sleptWell'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 w-full h-full'>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        Slept well last night
                      </div>
                    </FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='practicedProperNutrition'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 w-full h-full'>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        Practiced proper nutrition
                      </div>
                    </FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='learned'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 w-full h-full'>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        Learned something new
                      </div>
                    </FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='avoidedAlcohol'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 w-full h-full'>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        Avoided alcohol?
                      </div>
                    </FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='avoidedSmoking'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 w-full h-full'>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        Avoided smoking
                      </div>
                    </FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='socialized'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 w-full h-full'>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>Socialized</div>
                    </FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='limitedScreenTime'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 w-full h-full'>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        Limited screen time
                      </div>
                    </FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='read'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 w-full h-full'>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        Did some reading
                      </div>
                    </FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='expressedGratitude'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 w-full h-full'>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        Expressed gratitude
                      </div>
                    </FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='meditated'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 w-full h-full'>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        Meditated or practiced mindfulness
                      </div>
                    </FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='actedWithKindness'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 w-full h-full'>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        Acted with kindness
                      </div>
                    </FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='practicedPersonalHygiene'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 w-full h-full'>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        Practiced personal Hygiene
                      </div>
                    </FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='journaled'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='inline-flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 w-full h-full'>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>Journaled</div>
                    </FormLabel>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button size='lg'>Save</Button>
        </form>
      </Form>
    </>
  )
}

export default Create
