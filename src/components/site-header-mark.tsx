'use client';

import { useMotionValueEvent, useScroll } from "motion/react";
import * as motion from "motion/react-m";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { FrancisMashaMark } from "./francis-masha-mark";

export function SiteHeaderMark() {
  const pathname = usePathname();
  return pathname === '/' ? <FrancisMashaMarkMotion /> : <FrancisMashaMark />;
}

function FrancisMashaMarkMotion() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const distanceRef = useRef(160);

  useMotionValueEvent(scrollY, 'change', (latestValue) => {
    setVisible(latestValue >= distanceRef.current);
  });

  useEffect(() => {
    const coverMark = document.getElementById('js-cover-mark');
    if (!coverMark) {
      return;
    }

    distanceRef.current = calcDistance(coverMark);

    const resizeObserver = new ResizeObserver(() => {
      distanceRef.current = calcDistance(coverMark);
    });
    resizeObserver.observe(coverMark);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <motion.svg
      animate={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px)' : 'translateY(8px)',
      }}
      initial={{
        opacity: 0,
        transform: 'translateY(8px)',
      }}
      transition={{ duration: 0.3 }}
      viewBox="0 0 512 256"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M160,96v64H96V96Z" opacity="0.2"></path>
      <path d="M216,152H168V104h48a8,8,0,0,0,0-16H168V40a8,8,0,0,0-16,0V88H104V40a8,8,0,0,0-16,0V88H40a8,8,0,0,0,0,16H88v48H40a8,8,0,0,0,0,16H88v48a8,8,0,0,0,16,0V168h48v48a8,8,0,0,0,16,0V168h48a8,8,0,0,0,0-16Zm-112,0V104h48v48Z"></path>
    </motion.svg>
  );
}

const calcDistance = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;
  const headerHeight = 56;
  return scrollTop + rect.top + rect.height - headerHeight;
};
