import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Bluetooth, ChevronsDown } from "lucide-react"
import { NavMain } from "./app-nav-main"

const data = {
  navMain: [
    {
      title: "android",
      url: "#",
      items: [
        {
          title: "bluetooth",
          url: "/android/bluetooth",
          icon: Bluetooth
        }
      ]
    },
    {
      title: "web",
      url: "#",
      items: [
        {
          title: "Vue",
          url: "/web/vue",
          icon: ChevronsDown
        }
      ]
    }
  ],
}

// TODO 26.03.19: sidebar icon 적용하기
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="flex aspect-square size-8 items-center justify-center rounded-sm bg-sidebar-primary text-sidebar-primary-foreground">
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Documentation</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {
          data.navMain.map((item) => (
            <SidebarGroup key={item.title}>
              <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <NavMain items={item.items || []} />
              </SidebarGroupContent>
            </SidebarGroup>
          ))
        }
      </SidebarContent>
      <SidebarFooter>
  
      </SidebarFooter>
    </Sidebar>
  )
}
