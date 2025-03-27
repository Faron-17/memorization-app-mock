import * as React from "react"
import {
  Command,
} from "lucide-react"

import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavCategories } from "@/components/sidebar/NavCategories"
import { NavUser } from "@/components/sidebar/NavUser";
import Link from "next/link";

const data = {
  user: {
    name: "User Name",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  categories: [
    {
      name: "React.js",
      url: "/react",
      icon: FaReact,
      count: 1,
    },
    {
      name: "Next.js",
      url: "/next",
      icon: RiNextjsFill,
      count: 2,
    },
  ],
}

export default function AppSidebar() {
  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Memorization App</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavCategories categories={data.categories} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
