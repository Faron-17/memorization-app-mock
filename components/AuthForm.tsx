'use client'

import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { signUpSchema } from '@/lib/validation'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

const AuthForm = ({type}: {type: string}) => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: 'testtest',
      email: '',
      password: ''
    }
  })

  const handleSubmit = () => {
    router.push('./')
  }

  return (
    <Card className='w-80'>
      <CardHeader>
        <CardTitle>
          {type}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className='flex flex-col justify-center items-center' onSubmit={form.handleSubmit(handleSubmit)}>
            {type === 'SIGN_UP' && <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel className='capitalize'>
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      required
                      {...field}
                      className='form-input' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />}
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className={cn('w-full', `${type !== 'SIGN_IN' ? 'mt-5' : ''}`)}>
                  <FormLabel className='capitalize'>
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      required
                      {...field}
                      className='form-input' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem className='mt-5 w-full'>
                  <FormLabel className='capitalize'>
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      required
                      {...field}
                      className='form-input' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className='book-form_btn text-white mt-7 w-full cursor-pointer'>
              {type}
            </Button>
          </form>
        </Form>
        <Link href={type === 'SIGN_IN' ? "/sign-up" : "/sign-in"} className='underline underline-offset-2 w-full text-center inline-block mt-5'>
          {type === 'SIGN_IN' ? "Create an account" : "Sign in"}
        </Link>
      </CardContent>
    </Card>
  )
}

export default AuthForm