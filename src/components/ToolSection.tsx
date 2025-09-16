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
    <section>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold mb-6 text-accent-foreground">Generate</h2>
        <Button variant='link' className="text-blue-500">
          <ChevronDown/>
          Show all
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {tools.map((tool) => (
          <ToolItem key={tool.name} {...tool} />
        ))}
      </div>
    </section>
  );
}
