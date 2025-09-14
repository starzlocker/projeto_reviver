import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * IframeCarousel — a common iframe carousel with autoplay and manual controls.
 *
 * Props:
 * - items: Array<{ id?: string|number, embedUrl: string, title: string }>
 * - intervalMs?: number (default 6000)
 * - autoPlay?: boolean (default true)
 * - className?: string
 */
export default function IframeCarousel({
  items = [],
  intervalMs = 6000,
  autoPlay = true,
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const timerRef = useRef(null);

  const length = items.length;
  const goTo = (i, direction = 1) => {
    if (!length) return;
    setDir(direction);
    setIndex(((i % length) + length) % length);
  };
  const next = () => goTo(index + 1, 1);
  const prev = () => goTo(index - 1, -1);

  useEffect(() => {
    if (!autoPlay || length <= 1) return;
    timerRef.current && clearInterval(timerRef.current);
    timerRef.current = setInterval(next, Math.max(2000, intervalMs));
    return () => timerRef.current && clearInterval(timerRef.current);
  }, [autoPlay, index, intervalMs, length]);

  const current = useMemo(() => items[length ? index : 0], [items, index, length]);

  if (!length) {
    return (
      <div className={"w-full rounded-2xl border border-neutral-200 p-6 text-center text-neutral-500 " + className}>
        No items to display.
      </div>
    );
  }

  return (
    <section
      className={
        "relative isolate w-full overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 " +
        className
      }
      role="region"
      aria-roledescription="carousel"
      aria-label="Videos"
    >
      {/* Container to maintain aspect ratio, e.g., 16:9 */}
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <AnimatePresence initial={false} custom={dir}>
          <motion.div
            key={current.id ?? index}
            custom={dir}
            initial={{ x: dir * 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -dir * 60, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0 flex h-full w-full items-center justify-center"
          >
            {/* --- Alteração Principal: de <video> para <iframe> --- */}
            <iframe
              src={current.embedUrl}
              title={current.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full rounded-xl"
            ></iframe>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 px-2 md:px-3">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous item"
            className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white/80 p-2 shadow-sm backdrop-blur hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <ChevronLeft className="h-5 w-5 text-neutral-600" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next item"
            className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white/80 p-2 shadow-sm backdrop-blur hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <ChevronRight className="h-5 w-5 text-neutral-600" />
          </button>
        </div>
      </div>
    </section>
  );
}