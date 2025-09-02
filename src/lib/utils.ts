import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Decide if smooth scrolling should be used (avoid on mobile/low-end or reduced motion)
export function shouldUseSmoothScroll(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
    const coarsePointer = window.matchMedia?.('(pointer: coarse)')?.matches ?? false;
    const isMobileUA = typeof navigator !== 'undefined' && /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    return !(prefersReduced || coarsePointer || isMobileUA);
  } catch {
    return true;
  }
}