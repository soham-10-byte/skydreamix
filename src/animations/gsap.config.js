import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import SplitType from 'split-type';

// Register plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Global settings
gsap.defaults({
  duration: 0.8, // Default for reveals
  ease: "power3.out" // Default for entries
});

// Custom easing for transitions
export const transitionEase = "power2.inOut";

// Animation Constants
export const ANIMATION_CONFIG = {
  REVEAL: { duration: 0.8, ease: "power3.out" },
  HERO: { duration: 1.2, ease: "power3.out" },
  TRANSITION: { duration: 0.5, ease: "power2.inOut" },
  STAGGER: {
    LISTS: 0.08,
    CARDS: 0.15
  }
};

// Reduced Motion handling
export const mm = gsap.matchMedia();
export const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Helper to wrap animations with reduced motion check
export const safeAnimate = (animationCallback) => {
  mm.add("(prefers-reduced-motion: no-preference)", () => {
    animationCallback();
  });
};

export { gsap, ScrollTrigger, TextPlugin, SplitType };
