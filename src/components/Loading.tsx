import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Loading({ setIsLoading }: { setIsLoading: (loading: boolean) => void }) {
  const name = 'Muhammad Shehroz*';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setCurrentIndex(0);
    setShowCursor(true);
    let i = 0;
    let timeoutId: ReturnType<typeof setTimeout>;
    const type = () => {
      if (i < name.length) {
        setCurrentIndex(i + 1);
        i++;
        timeoutId = setTimeout(type, 220);
      }
    };
    type();
    const cursorInterval = setInterval(() => setShowCursor(c => !c), 500);
    return () => {
      clearInterval(cursorInterval);
      clearTimeout(timeoutId);
    };
  }, [name, setIsLoading]);

  useEffect(() => {
    if (currentIndex === name.length) {
      const doneTimeout = setTimeout(() => setIsLoading(false), 1800);
      return () => clearTimeout(doneTimeout);
    }
  }, [currentIndex, name.length, setIsLoading]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-neutral-200 dark:bg-black">
      <span className="font-gambarino text-[2rem] text-neutral-900 dark:text-white bg-transparent drop-shadow-md inline-flex">
        {name.split('').map((char, idx) => {
          if (idx >= currentIndex) return null;
          const isAsterisk = char === '*';
          const isSpace = char === ' ';
          if (idx === currentIndex - 1) {
            return (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className={
                  isAsterisk
                    ? 'inline-block text-orange-600'
                    : isSpace
                    ? ''
                    : 'inline-block tracking-wider'
                }
              >
                {isSpace ? ' ' : char}
              </motion.span>
            );
          }
          return (
            <span
              key={idx}
              className={
                isAsterisk
                  ? 'text-orange-600'
                  : isSpace
                  ? ''
                  : 'tracking-wider'
              }
            >
              {isSpace ? ' ' : char}
            </span>
          );
        })}
        <span className={showCursor ? 'inline' : 'invisible'}>|</span>
      </span>
    </div>
  );
}