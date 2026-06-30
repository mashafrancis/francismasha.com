import type { Node } from "unist";

export interface UnistNode extends Node {
  attributes?: {
    name: string;
    value: unknown;
    type?: string;
  }[];
  children?: UnistNode[];
  name?: string;
  properties?: {
    __rawString__?: string;
    [key: string]: unknown;
  } & NpmCommands;
  tagName?: string;
  type: string;
  value?: string;
}

export interface UnistTree extends Node {
  children: UnistNode[];
  type: "root";
}

export interface NpmCommands {
  __bun__?: string;
  __npm__?: string;
  __pnpm__?: string;
  __yarn__?: string;
}
