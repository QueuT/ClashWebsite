"use client";

import Image from "next/image";
import { useRef, useState, useSyncExternalStore } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToMotionPreference(onChange: () => void) {
  const mediaQuery = window.matchMedia(reducedMotionQuery);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

function getMotionPreference() {
  return window.matchMedia(reducedMotionQuery).matches;
}

function getServerMotionPreference() {
  return false;
}

const chapters = [
  {
    label: "BUMP",
    image: "/coclash/story-bump.jpg",
    alt: "Colorado Clash girls team together on the court.",
  },
  {
    label: "SET",
    image: "/coclash/story-set.jpg",
    alt: "Colorado Clash boys team gathered before play.",
  },
  {
    label: "SPIKE",
    image: "/coclash/story-spike.jpg",
    alt: "Colorado Clash players competing on the court.",
  },
];

export function VolleyballStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionPreference,
    getServerMotionPreference,
  );
  const [activeChapter, setActiveChapter] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const ballX = useTransform(
    scrollYProgress,
    [0, 0.16, 0.33, 0.5, 0.66, 0.83, 1],
    ["6vw", "19vw", "30vw", "44vw", "58vw", "69vw", "75vw"],
  );
  const ballY = useTransform(
    scrollYProgress,
    [0, 0.16, 0.33, 0.5, 0.66, 0.83, 1],
    ["-30vh", "-10vh", "-30vh", "-4vh", "-30vh", "-10vh", "-30vh"],
  );
  const ballRotation = useTransform(scrollYProgress, [0, 1], [0, 1080]);
  const bumpOpacity = useTransform(scrollYProgress, [0, 0.27, 0.38], [1, 1, 0]);
  const setOpacity = useTransform(scrollYProgress, [0.28, 0.4, 0.6, 0.72], [0, 1, 1, 0]);
  const spikeOpacity = useTransform(scrollYProgress, [0.62, 0.75, 1], [0, 1, 1]);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const nextChapter = Math.min(2, Math.floor(progress * 3));
    setActiveChapter((currentChapter) =>
      currentChapter === nextChapter ? currentChapter : nextChapter,
    );
  });

  function goToChapter(chapterIndex: number) {
    const section = sectionRef.current;
    if (!section) return;

    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const sectionScrollDistance = section.offsetHeight - window.innerHeight;
    const chapterProgress = chapterIndex / 2;

    window.scrollTo({
      top: sectionTop + sectionScrollDistance * chapterProgress,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }

  const chapterOpacities = [bumpOpacity, setOpacity, spikeOpacity];

  return (
    <section
      ref={sectionRef}
      aria-label="Volleyball play sequence"
      className="relative h-[300svh] bg-[#100816] text-white"
    >
      <div className="sticky top-0 isolate h-[100svh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            key={chapters[activeChapter].image}
            src={chapters[activeChapter].image}
            alt={chapters[activeChapter].alt}
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,4,16,0.92)_0%,rgba(18,7,29,0.8)_38%,rgba(12,7,18,0.2)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(9,4,16,0.64)_0%,transparent_45%,rgba(9,4,16,0.16)_100%)]" />
        </div>

        <div className="volleyball-story-court pointer-events-none absolute inset-[18px]" aria-hidden="true" />

        <motion.div
          className="volleyball-story-ball absolute left-0 top-1/2 z-10"
          style={{
            x: prefersReducedMotion ? "43vw" : ballX,
            y: prefersReducedMotion ? "0vh" : ballY,
            rotate: prefersReducedMotion ? 0 : ballRotation,
          }}
          aria-hidden="true"
        >
          <span className="volleyball-mark volleyball-mark--story" />
        </motion.div>

        <div className="relative z-20 flex h-full flex-col justify-between px-5 pb-8 pt-24 sm:px-8 sm:pb-10 lg:px-16 lg:pt-28">
          <div className="flex items-center justify-between gap-4 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-white/75 sm:text-xs">
            <span>Colorado Clash</span>
            <span>0{activeChapter + 1} / 03</span>
          </div>

          <div className="max-w-3xl pb-20 sm:pb-24">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-accent sm:text-sm">
              Play it together
            </p>
            <div className="relative min-h-[6rem] sm:min-h-[8rem]">
              {chapters.map((chapter, index) => (
                <motion.h2
                  key={chapter.label}
                  className="absolute inset-0 text-6xl font-black leading-none tracking-[-0.07em] text-white sm:text-8xl lg:text-[8rem]"
                  aria-hidden={activeChapter !== index}
                  style={{
                    opacity: prefersReducedMotion
                      ? activeChapter === index
                        ? 1
                        : 0
                      : chapterOpacities[index],
                  }}
                >
                  {chapter.label}
                </motion.h2>
              ))}
            </div>

            <nav aria-label="Volleyball play sequence chapters" className="mt-6 flex flex-wrap gap-2">
              {chapters.map((chapter, index) => (
                <button
                  key={chapter.label}
                  type="button"
                  aria-pressed={activeChapter === index}
                  onClick={() => goToChapter(index)}
                  className={`min-w-24 border px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    activeChapter === index
                      ? "border-accent bg-accent text-[#100816]"
                      : "border-white/40 bg-black/15 text-white hover:border-accent hover:text-accent"
                  }`}
                >
                  {chapter.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-30 h-1 bg-white/15" aria-hidden="true">
          <motion.div
            className="h-full origin-left bg-accent"
            style={{ scaleX: prefersReducedMotion ? 0 : scrollYProgress }}
          />
        </div>
      </div>
    </section>
  );
}