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
      <CardContent className="flex items-center gap-4 p-4">
        <Avatar>
          <AvatarFallback className={`p-4 rounded-lg ${tool.avatarBackground}`}>
            <tool.icon className={`h-8 w-8 ${tool.name === 'Train' ? 'text-black' : 'text-white'} dark:text-white`} />
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="flex gap-3 items-center">
            <h3 className="font-semibold text-lg">{tool.name}</h3>{" "}
            {tool.badge && <Badge className="rounded-full bg-blue-500 py-0 h-5">{tool.badge}</Badge>}
          </div>
          <p className="text-sm text-gray-600">{tool.description}</p>
        </div>
        <Button variant="secondary" className="rounded-full ml-auto px-6 py-4">
          Open
        </Button>
      </CardContent>
    </Card>
  );
}
