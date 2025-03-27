import React from 'react'
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";

const Header = () => {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <h2 className="text-2xl font-semibold tracking-tight">
        Category name
      </h2>
      <Separator orientation="vertical" className="mr-2 h-4" />
    </header>
  )
}

export default Header