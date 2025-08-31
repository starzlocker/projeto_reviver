import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * VideoCarousel — a common video carousel with autoplay and manual controls.
 *
 * Props:
 * - items: Array<{ id?: string|number, src: string, title?: string, poster?: string }>
 * - intervalMs?: number (default 6000)
 * - autoPlay?: boolean (default true)
 * - className?: string
 */
export default function VideoCarousel({
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
        No videos yet.
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
      <div className="relative min-h-[200px]">
        <AnimatePresence initial={false} custom={dir}>
          <motion.div
            key={current.id ?? index}
            custom={dir}
            initial={{ x: dir * 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -dir * 60, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex justify-center"
          >
            <video
              controls
              poster={current.poster}
              className="max-h-[500px] w-full rounded-xl object-contain"
            >
              <source src={current.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 px-2 md:px-3">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous video"
            className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white/80 p-2 shadow-sm backdrop-blur hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next video"
            className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white/80 p-2 shadow-sm backdrop-blur hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-1">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to video ${i + 1}`}
              aria-current={i === index}
              onClick={() => goTo(i, i > index ? 1 : -1)}
              className={
                "h-2 w-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 " +
                (i === index ? "w-6 bg-neutral-900" : "bg-neutral-300 hover:bg-neutral-400")
              }
            />
          ))}
        </div>
      )}
    </section>
  );
}

// Example usage
export const DemoVideoCarousel = () => {
  const demoVideos = [
    {
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      title: "Big Buck Bunny",
      poster: "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",
    },
    {
      src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      title: "Flowers",
    },
    {
      src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      title: "Sintel Trailer",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl p-6">
      <h2 className="mb-4 text-center text-2xl font-semibold">Video Carousel</h2>
      <VideoCarousel items={demoVideos} />
    </div>
  );
};