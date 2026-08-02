"use client";

import { DownloadIcon, TriangleDashedIcon, TypeIcon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import type React from "react";
import { toast } from "sonner";

import { copyText } from "@/utils/copy";
import { getWordmarkSVG } from "./chanhdai-wordmark";
import { FrancisMashaMark, getMarkSVG } from "./francis-masha-mark";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./ui/context-menu";

export function BrandContextMenu({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();

  return (
    <ContextMenu>
      <ContextMenuTrigger render={children as React.ReactElement} />

      <ContextMenuContent className="w-64">
        <ContextMenuItem
          onClick={() => {
            const svg = getMarkSVG(resolvedTheme === "light" ? "#000" : "#fff");
            copyText(svg);
            toast.success("Copied Mark as SVG");
          }}
        >
          <FrancisMashaMark />
          Copy Mark as SVG
        </ContextMenuItem>

        <ContextMenuItem
          onClick={() => {
            const svg = getWordmarkSVG(
              resolvedTheme === "light" ? "#000" : "#fff"
            );
            copyText(svg);
            toast.success("Copied Logotype as SVG");
          }}
        >
          <TypeIcon />
          Copy Logotype as SVG
        </ContextMenuItem>

        <ContextMenuItem render={<Link href="/blog/chanhdai-brand" />}>
          <TriangleDashedIcon />
          Brand Guidelines
        </ContextMenuItem>

        <ContextMenuItem
          render={
            <a download href="https://assets.chanhdai.com/chanhdai-brand.zip" />
          }
        >
          <DownloadIcon />
          Download Brand Assets
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
