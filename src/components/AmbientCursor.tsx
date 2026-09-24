import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

interface AmbientCursorProps {
  isDark: boolean;
}

export const AmbientCursor: React.FC<AmbientCursorProps> = ({ isDark }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(true);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  // Soft spring configuration for the ambient background glow
  const smoothX = useSpring(mouseX, { damping: 28, stiffness: 220, mass: 0.6 });
  const smoothY = useSpring(mouseY, { damping: 28, stiffness: 220, mass: 0.6 });

  // Slightly tighter spring for the precision ring
  const ringX = useSpring(mouseX, { damping: 20, stiffness: 350 });
  const ringY = useSpring(mouseY, { damping: 20, stiffness: 350 });

  useEffect(() => {
    // Only show on devices with a fine pointer (mouse/trackpad), not touchscreens
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsPointerFine(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsPointerFine(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check if target or its parent is interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('button, a, input, textarea, select, [role="button"], .interactive-cursor');
        setIsHovered(!!interactive);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isPointerFine) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden transition-opacity duration-300">
      {/* Aesthetic Smooth Ambient Background Glow */}
      <motion.div
        className="absolute rounded-full blur-[70px] pointer-events-none will-change-transform"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 480 : 380,
          height: isHovered ? 480 : 380,
          background: isDark
            ? isHovered
              ? 'radial-gradient(circle, rgba(99, 102, 241, 0.16) 0%, rgba(59, 130, 246, 0.08) 45%, transparent 70%)'
              : 'radial-gradient(circle, rgba(59, 130, 246, 0.11) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 70%)'
            : isHovered
            ? 'radial-gradient(circle, rgba(59, 130, 246, 0.14) 0%, rgba(147, 197, 253, 0.06) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(191, 219, 254, 0.03) 50%, transparent 70%)',
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Minimal Aesthetic Cursor Ring */}
      <motion.div
        className="absolute rounded-full border pointer-events-none will-change-transform"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 36 : 14,
          height: isHovered ? 36 : 14,
          borderColor: isDark
            ? isHovered
              ? 'rgba(96, 165, 250, 0.7)'
              : 'rgba(96, 165, 250, 0.4)'
            : isHovered
            ? 'rgba(37, 99, 235, 0.6)'
            : 'rgba(37, 99, 235, 0.35)',
          backgroundColor: isDark
            ? isHovered
              ? 'rgba(59, 130, 246, 0.08)'
              : 'rgba(96, 165, 250, 0.2)'
            : isHovered
            ? 'rgba(59, 130, 246, 0.05)'
            : 'rgba(37, 99, 235, 0.15)',
          backdropFilter: isHovered ? 'blur(1px)' : 'none',
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
};
