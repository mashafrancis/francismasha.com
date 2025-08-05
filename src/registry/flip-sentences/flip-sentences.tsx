'use client';

import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-m';
import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

export function FlipSentences({
  className,
  sentences,
}: {
  className?: string;
  sentences: string[];
}) {
  const [currentSentence, setCurrentSentence] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAnimation = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSentence((prev) => (prev + 1) % sentences.length);
    }, 2500);
  };

  useEffect(() => {
    startAnimation();

    const abortController = new AbortController();
    const { signal } = abortController;

    document.addEventListener(
      'visibilitychange',
      () => {
        if (document.visibilityState !== 'visible' && intervalRef.current) {
          clearInterval(intervalRef.current); // Clear the interval when the tab is not visible
          intervalRef.current = null;
        } else if (document.visibilityState === 'visible') {
          setCurrentSentence((prev) => (prev + 1) % sentences.length); // Show the next sentence immediately
          startAnimation(); // Restart the interval when the tab becomes visible
        }
      },
      { signal }
    );

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentences, startAnimation]);

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.p
        animate={{
          y: 0,
          opacity: 1,
        }}
        className={cn(
          'select-none text-balance font-mono text-muted-foreground text-sm',
          className
        )}
        exit={{
          y: -8,
          opacity: 0,
        }}
        initial={{
          y: 8,
          opacity: 0,
        }}
        key={`current-sentence-${currentSentence}`}
        transition={{
          duration: 0.3,
          ease: 'linear',
        }}
      >
        {sentences[currentSentence]}
      </motion.p>
    </AnimatePresence>
  );
}
