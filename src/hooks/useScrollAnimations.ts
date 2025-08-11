import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  animationDelay?: number;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    animationDelay = 0,
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasAnimated)) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, animationDelay);
        } else if (!triggerOnce) {
          setIsVisible(entry.isIntersecting);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, animationDelay, hasAnimated]);

  return {
    elementRef,
    isVisible,
    hasAnimated,
  };
};

// Enhanced hook with multiple animation states
export const useAdvancedScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const [animationState, setAnimationState] = useState<'idle' | 'entering' | 'visible' | 'exiting'>('idle');
  const { elementRef, isVisible } = useScrollAnimation(options);

  useEffect(() => {
    if (isVisible && animationState === 'idle') {
      setAnimationState('entering');
      setTimeout(() => setAnimationState('visible'), 300);
    } else if (!isVisible && animationState === 'visible') {
      setAnimationState('exiting');
      setTimeout(() => setAnimationState('idle'), 300);
    }
  }, [isVisible, animationState]);

  return {
    elementRef,
    animationState,
    isVisible,
    isEntering: animationState === 'entering',
    isVisible: animationState === 'visible',
    isExiting: animationState === 'exiting',
  };
};

// Stagger animation hook for lists
export const useStaggeredAnimation = (itemCount: number, baseDelay: number = 100) => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const getItemAnimation = (index: number) => ({
    transitionDelay: isVisible ? `${index * baseDelay}ms` : '0ms',
    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
    opacity: isVisible ? 1 : 0,
  });

  return {
    elementRef,
    isVisible,
    getItemAnimation,
  };
};