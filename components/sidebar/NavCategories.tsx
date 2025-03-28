import {
  type IconType,
} from "react-icons"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export function NavCategories({
  categories,
}: {
  categories: {
    name: string
    url: string
    icon: IconType,
    count: number,
  }[]
}) {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Categories</SidebarGroupLabel>
      <SidebarMenu>
        {categories.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <Link href={item.url} className="flex justify-between">
                <span className="flex items-center">
                  <item.icon />
                  <span className="ml-2">{item.name}</span>
                </span>
                <Badge>{item.count}</Badge>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
