"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  title: z.string().min(2).max(50),
  answer: z.string().min(2).max(50),
})

export function ProfileForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      answer: "",
    },
  })
  const title = form.watch("title")
  const answer = form.watch("answer")
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    router.push('./browse')
  }

  return (
    <div className="pt-6 h-full">
      <ResizablePanelGroup direction="horizontal" className=''>
        <ResizablePanel>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 h-full flex flex-col justify-center items-center">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="mb-3 w-full">
                    <FormControl>
                      <Textarea placeholder="title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="answer"
                render={({ field }) => (
                  <FormItem className="h-full w-full">
                    <FormControl>
                      <Textarea placeholder="answer" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-28 cursor-pointer">Submit</Button>
            </form>
          </Form>
        </ResizablePanel>
        <ResizableHandle withHandle className='mx-5'/>
        <ResizablePanel className='pb-16'>
          <Card className='h-full py-0'>
            <CardContent className='px-3'>
              <div className='font-medium min-h-8 break-words py-3'>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]} 
                  rehypePlugins={[rehypeSanitize]}
                >
                  {title}
                </ReactMarkdown>
              </div>
              <Separator />
              <div className='py-3 prose prose-slate lg:prose-lg'>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]} 
                  rehypePlugins={[rehypeSanitize]}
                >
                  {answer}
                </ReactMarkdown>
              </div>
            </CardContent>
          </Card>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}