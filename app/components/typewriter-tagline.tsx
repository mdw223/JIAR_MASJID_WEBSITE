"use client";

import { useEffect, useRef, useState } from "react";

const WORDS = ["Masjid.", "Community.", "Home."];

const TYPE_SPEED_MS = 95;
const DELETE_SPEED_MS = 55;
const PAUSE_AFTER_MS = 2200;
const PAUSE_BEFORE_DELETE_MS = 400;

/**
 * The hero's rotating tagline — "Your Masjid. / Community. / Home." — typed
 * and deleted one character at a time behind a blinking caret.
 *
 * The longest word is held open as invisible text so the line never reflows
 * mid-cycle, and the whole animation is skipped for prefers-reduced-motion,
 * which falls back to the middle word standing still. No library, no images:
 * a single timeout chain and one CSS keyframe.
 */
export function TypewriterTagline() {
  const [word, setWord] = useState("Community.");
  const [animating, setAnimating] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    setAnimating(true);

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const tick = () => {
      const current = WORDS[wordIndex];

      if (deleting) {
        charIndex -= 1;
        setWord(current.substring(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % WORDS.length;
          timer.current = setTimeout(tick, TYPE_SPEED_MS);
        } else {
          timer.current = setTimeout(tick, DELETE_SPEED_MS);
        }
        return;
      }

      charIndex += 1;
      setWord(current.substring(0, charIndex));
      if (charIndex === current.length) {
        timer.current = setTimeout(() => {
          deleting = true;
          timer.current = setTimeout(tick, PAUSE_BEFORE_DELETE_MS);
        }, PAUSE_AFTER_MS);
      } else {
        timer.current = setTimeout(tick, TYPE_SPEED_MS);
      }
    };

    setWord("");
    timer.current = setTimeout(tick, 600);

    return () => clearTimeout(timer.current);
  }, []);

  return (
    <p className="hero-tagline">
      Your{" "}
      <span className="typewriter-slot">
        {/* Reserves the width of the longest word so the caret never jumps. */}
        <span aria-hidden className="typewriter-ghost">
          Community.
        </span>
        <span className={animating ? "typewriter is-animating" : "typewriter"}>
          {word}
        </span>
      </span>
    </p>
  );
}
