'use client';

import * as motion from "motion/react-m";
import { useState } from "react";

import { FrancisMashaMark } from "@/components/francis-masha-mark";

const variants = {
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
  },
};

export function LogoResizeAnimation({
  minWidth = 128,
  maxWidth = 160,
}: {
  minWidth?: number;
  maxWidth?: number;
}) {
  const [width, setWidth] = useState(maxWidth);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ width: maxWidth }}
      onAnimationComplete={() => {
        setIsEnd(true);
      }}
      onUpdate={(latest) => {
        setWidth(latest.width as number);
      }}
      transition={{ duration: 1, delay: 0.4 }}
      viewport={{ once: true }}
      whileInView={{ width: [maxWidth, minWidth, maxWidth] }}
    >
      <motion.div
        animate={isEnd ? 'hide' : 'show'}
        className="-top-px -right-px -bottom-px -left-px absolute border border-blue-500 *:absolute *:size-[9px] *:border *:border-blue-500 *:bg-background dark:border-zinc-600 dark:*:border-zinc-600"
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        variants={variants}
      >
        <div className="-top-[5px] -left-[5px]" />
        <div className="-top-[5px] -right-[5px]" />
        <div className="-bottom-[5px] -left-[5px]" />
        <div className="-right-[5px] -bottom-[5px]" />
      </motion.div>

      <motion.div
        animate={isEnd ? 'hide' : 'show'}
        className="-top-2 -translate-x-1/2 -translate-y-full absolute left-1/2 transform whitespace-nowrap rounded-sm bg-blue-600 px-1 font-mono text-sm text-white dark:bg-zinc-600"
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        variants={variants}
      >
        {Math.round(width)}x{Math.round(width / 2)}
      </motion.div>

      <FrancisMashaMark className="size-full text-black dark:text-white" />
    </motion.div>
  );
}
