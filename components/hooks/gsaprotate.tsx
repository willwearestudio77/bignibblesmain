'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const useGsapRotate = () => {
  const rotateRef = useRef(null);

  useEffect(() => {
    gsap.to(rotateRef.current, {
      rotation: 300,
      transformOrigin: '50% 50%',
      scrollTrigger: {
        trigger: rotateRef.current,
        start: 'bottom bottom+=500',
        end: 'top top-=500',
        scrub: 2
      }
    });

    // Hover effect
    if (rotateRef.current) {
      (rotateRef.current as HTMLElement).addEventListener('mouseover', () => {
        gsap.to(rotateRef.current, {
          scale: 0.9,
          duration: 0.2
        });
      });

      (rotateRef.current as HTMLElement).addEventListener('mouseout', () => {
        gsap.to(rotateRef.current, {
          scale: 1,
          duration: 0.2
        });
      });
    }

    // Click effect
    if (rotateRef.current) {
      (rotateRef.current as HTMLElement).addEventListener('mousedown', () => {
        gsap.to(rotateRef.current, {
          scale: 0.95,
          duration: 0.2
        });
      });

      (rotateRef.current as HTMLElement).addEventListener('mouseup', () => {
        gsap.to(rotateRef.current, {
          scale: 1,
          duration: 0.2
        });
      });
    }
  }, []);

  return rotateRef;
};
