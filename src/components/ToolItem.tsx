import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { LucideIcon } from "lucide-react";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";

export interface ToolItemProp {
  name: string;
  description: string;
  icon: LucideIcon;
  avatarBackground: string;
  badge?: string;
}

export default function ToolItem(tool: ToolItemProp) {
  return (
    <Card
      key={tool.name}
      className="hover:bg-accent shadow-none border-0 bg-none transition"
    >
      <CardContent className="flex items-center gap-2 sm:gap-4 p-2 sm:p-4">
        <Avatar>
          <AvatarFallback className={`p-2 sm:p-4 rounded-lg ${tool.avatarBackground}`}>
            <tool.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${tool.name === 'Train' ? 'text-black' : 'text-white'} dark:text-white`} />
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex gap-2 sm:gap-3 items-center flex-wrap">
            <h3 className="font-semibold text-sm sm:text-lg">{tool.name}</h3>
            {tool.badge && <Badge className="rounded-full bg-blue-500 py-0 h-4 sm:h-5 text-xs">{tool.badge}</Badge>}
          </div>
          <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{tool.description}</p>
        </div>
        <Button variant="secondary" className="rounded-full ml-auto px-3 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm">
          Open
        </Button>
      </CardContent>
    </Card>
  );
}
