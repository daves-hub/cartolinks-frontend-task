import {
  Image,
  Video,
  Wand2,
  PersonStanding,
  DraftingCompass,
  MicVocal,
  PenLine,
  BrainCircuit,
  ChevronDown,
} from "lucide-react";
import ToolItem, { ToolItemProp } from "./ToolItem";
import { Button } from "./ui/button";

export default function ToolSection() {
  const tools: ToolItemProp[] = [
    {
      name: "Image",
      icon: Image,
      description: "Generate images with custom styles in Flux and Ideogram.",
      avatarBackground: "bg-gradient-to-b from-slate-800 to-slate-300",
      badge: 'New'
    },
    {
      name: "Video",
      icon: Video,
      description: "Generate videos with Hailua, Pica, Runway, Luma, and more.",
      avatarBackground: "bg-amber-500",
    },
    {
      name: "Realtime",
      icon: PenLine,
      description: "Edit custom copies and attract images.",
      avatarBackground: "bg-gradient-to-b from-sky-500 to-cyan-300",
    },
    {
      name: "Enhancer",
      icon: Wand2,
      description: "Upscale and enhance images and vidoes up to 22k.",
      avatarBackground: "bg-gradient-to-b from-black to-gray-500",
      badge: 'New'
    },
    {
      name: "Edit",
      icon: DraftingCompass,
      description: "Add objects, change style, or expand photos and genrations.",
      avatarBackground:
        "bg-gradient-to-b from-gray-900 to-purple-700",
      badge: 'New'
    },
    {
      name: "Video LipSync",
      icon: MicVocal,
      description: "Lip sync any video to any audio.",
      avatarBackground:
        "bg-gradient-to-b from-teal-900 via-teal-400 to-lime-200",
      badge: 'New'
    },
    {
      name: "Motion Transfer",
      icon: PersonStanding,
      description: "Transfer motion to images and animate characters.",
      avatarBackground: "bg-black",
      badge: 'New'
    },
    {
      name: "Train",
      icon: BrainCircuit,
      description: "Teach Krea to replicate your style, products, or characters.",
      avatarBackground: "bg-transparent rounded-full border-2",
    },
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-6 text-accent-foreground">Generate</h2>
        <Button variant='link' className="text-blue-500 p-0 sm:p-4">
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5"/>
          <span className="text-sm sm:text-base">Show all</span>
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
        {tools.map((tool) => (
          <ToolItem key={tool.name} {...tool} />
        ))}
      </div>
    </section>
  );
}
