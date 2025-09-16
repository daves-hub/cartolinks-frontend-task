'use client';

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import {
  Home,
  ImageIcon,
  Video,
  Wand2,
  DraftingCompass,
  PenLine,
  Folder,
  Headset,
  Bell,
  Sun,
  Moon,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Button } from "./ui/button";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Header() {
  const { setTheme } = useTheme()
  const navActions = [
    {
      icon: Home,
      tooltip: "Home",
    },
    {
      icon: ImageIcon,
      tooltip: "Image",
    },
    {
      icon: Video,
      tooltip: "Video",
    },
    {
      icon: Wand2,
      tooltip: "Enhance",
    },
    {
      icon: PenLine,
      tooltip: "Realtime Edits",
    },
    {
      icon: DraftingCompass,
      tooltip: "Edit",
    },
    {
      icon: Folder,
      tooltip: "Gallery",
    },
  ];
  const [activeNavAction, setActiveNavAction] = useState(0)

  return (
    <header className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-10 items-center">
          <Image
            src="/logo-light.png"
            alt="Logo"
            width={36}
            height={36}
            className="block dark:hidden"
          />
          <Image
            src="/logo-dark.png"
            alt="Logo"
            width={36}
            height={36}
            className="hidden dark:block"
          />
          <div className="flex gap-2">
            <Avatar className="size-9">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Select>
              <SelectTrigger className="w-[120px] border-0 bg-transparent shadow-none outline-none">
                <SelectValue placeholder="daves-hub" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Nothing to see here</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <nav className="flex p-1 gap-1 rounded-lg dark:bg-card bg-gray-200">
          {navActions.map((action, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Button variant={`${activeNavAction === index ? 'secondary' : 'ghost'}`} className="h-min w-min p-3" onClick={() => setActiveNavAction(index)}>
                  <action.icon className="w-5! h-5!"/>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{action.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>
        <div className="flex gap-2">
          <Button variant='secondary' className="gap-2 py-2 h-min w-min rounded-xl">
            <ImageIcon className="h-5! w-5!"/>
            Gallery
          </Button>
          <Button variant='secondary' className="gap-2 py-2 h-min w-min rounded-xl">
            <Headset className="h-4.5! w-4.5!"/>
            Suport
          </Button>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant='secondary' className="rounded-full p-2! h-min w-min">
                <Bell className="h-4.5! w-4.5!"/>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Notifications</p>
            </TooltipContent>
          </Tooltip>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-accent border-0 shadow-none rounded-full p-2! h-min w-min">
                <Sun className="h-4.5! w-4.5! scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-4.5! w-4.5! scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Avatar className="size-9">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>DH</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
