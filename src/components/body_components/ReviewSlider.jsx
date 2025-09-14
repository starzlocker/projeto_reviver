import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

export default function ReviewSlider({
  items = [],
  intervalMs = 3000,
  autoPlay = true,
  pauseOnHover = true,
  showIndicators = true,
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const length = items.length;
  const timerRef = useRef(null);
  const touchStartX = useRef(null);

  const goTo = (i, direction = 1) => {
    if (!length) return;
    setDir(direction);
    setIndex(((i % length) + length) % length);
  };
  const next = () => goTo(index + 1, 1);
  const prev = () => goTo(index - 1, -1);

  useEffect(() => {
    if (!autoPlay || paused || length <= 1) return;
    timerRef.current && clearInterval(timerRef.current);
    timerRef.current = setInterval(next, Math.max(1500, intervalMs));
    return () => timerRef.current && clearInterval(timerRef.current);
  }, [autoPlay, paused, index, intervalMs, length]);

  const current = useMemo(() => items[length ? index : 0], [items, index, length]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    const start = touchStartX.current;
    if (start == null) return;
    const dx = e.changedTouches[0].clientX - start;
    if (Math.abs(dx) > 45) {
      dx < 0 ? next() : prev();
    }
    touchStartX.current = null;
  };

  const announceId = "slider-announce";

  if (!length) {
    return (
      <div className={"w-full rounded-2xl border border-neutral-200 p-6 text-center text-neutral-500 " + className}>
        No reviews yet.
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
      aria-label="Testimonials"
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <p id={announceId} className="sr-only" aria-live="polite">
        Slide {index + 1} of {length}
      </p>

      {/* Container com altura fixa e flexível */}
      <div className="relative flex items-center justify-center min-h-[220px] md:min-h-[240px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={current.id ?? index}
            initial={{ opacity: 0, x: dir * 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -dir * 20 }}
            transition={{ 
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="absolute inset-0 flex items-center justify-center w-full"
          >
            <div className="mx-auto grid max-w-3xl grid-cols-[auto_1fr] items-center gap-4 rounded-xl p-2 md:p-4 w-full">
              {current.avatar ? (
                <img
                  src={current.avatar}
                  alt={current.author ? `${current.author} avatar` : "Avatar"}
                  className="h-14 w-14 rounded-full object-cover ring-1 ring-black/10"
                  loading="lazy"
                />
              ) : (
                <div className="h-14 w-14 rounded-full bg-neutral-100 ring-1 ring-black/10" aria-hidden />
              )}

              <div className="space-y-2">
                <blockquote className="text-balance text-lg leading-relaxed md:text-xl">
                  <span className="align-top text-2xl">"</span>
                  {current.quote}
                  <span className="align-top text-2xl">"</span>
                </blockquote>
                {(current.author || current.role) && (
                  <figcaption className="text-sm text-neutral-600">
                    {current.author && <span className="font-medium text-neutral-800">{current.author}</span>}
                    {current.author && current.role && <span> · </span>}
                    {current.role}
                  </figcaption>
                )}
              </div>
            </div>
          </motion.figure>
        </AnimatePresence>
      </div>

      {/* Resto do código permanece igual... */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 px-2 md:px-3">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white/80 p-2 shadow-sm backdrop-blur hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white/80 p-2 shadow-sm backdrop-blur hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="absolute right-2 top-2 flex items-center gap-1">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          aria-label={paused ? "Play slides" : "Pause slides"}
          className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs shadow-sm backdrop-blur hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          {paused ? "Play" : "Pause"}
        </button>
      </div>

      {showIndicators && length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-1">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
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

export const DemoReviews = () => {
const demo = [
    {
        quote: "This slider is clean, accessible, and easy to drop into any React app. Exactly what we needed.",
        author: "Ana Souza",
        role: "Product Manager",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    },
    {
        quote: "Plug-and-play. Auto-plays, pauses on hover, and works great on mobile swipes.",
        author: "Bruno Lima",
        role: "Frontend Dev",
        avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&auto=format&fit=crop",
    },
    {
        quote: "Finally a testimonial component that doesn't fight me on accessibility.",
        author: "Carla Martins",
        role: "UX Designer",
        avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop",
    },
    {
        quote: "Super customizable and the animations are smooth. Highly recommend for any project.",
        author: "Diego Ferreira",
        role: "Full Stack Developer",
        avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=200&auto=format&fit=crop",
    },
    {
        quote: "Easy to integrate and looks great out of the box. Saved us a lot of time.",
        author: "Elisa Ramos",
        role: "Project Lead",
        avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=200&auto=format&fit=crop",
    },
    {
        quote: "The mobile experience is fantastic. Swiping between testimonials feels natural.",
        author: "Felipe Costa",
        role: "Mobile Engineer",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    },
];

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h2 className="mb-4 text-center text-2xl font-semibold">What people are saying</h2>
      <ReviewSlider items={demo} />
    </div>
  );
};