import StoryList from '@/components/StoryList';
import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider, SidebarTrigger} from '@/components/ui/sidebar';
import {Button} from "@/components/ui/button";
import {Settings} from "lucide-react";
import React from "react";

export default function Home() {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar collapsible="icon" variant="inset">
          <SidebarHeader>
            <div className="font-bold">LinguaTales</div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>Stories</SidebarMenuButton>
              </SidebarMenuItem>
              {/* Add more menu items here */}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4"/>
            </Button>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 p-4">
          <StoryList/>
        </div>
      </div>
    </SidebarProvider>
  );
}
