import { Sparkle } from "lucide-react";

import { cn } from "@/lib/utils";

export function SectionBadge({
  text,
  classNames,
}: {
  text: string;
  classNames?: string;
}) {
  return (
    <div
      className={cn(
        "px-4 py-1 rounded-full font-extrabold uppercase text-xs text-primary border-[2px] border-primary w-fit flex items-center gap-1.5 leading-relaxed animate-badge-glow",
        classNames,
      )}
    >
      <Sparkle size={16} className="fill-accent -translate-y-[1px]" />
      {text}
    </div>
  );
}
