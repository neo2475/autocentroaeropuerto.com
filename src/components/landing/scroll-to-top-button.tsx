'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={cn(
        "fixed bottom-5 right-5 z-50 transition-opacity duration-300",
        "md:bottom-5 md:right-5",
        "bottom-20", 
        isVisible ? 'opacity-100' : 'opacity-0'
    )}>
        <Button
            size="icon"
            onClick={scrollToTop}
            className="rounded-full bg-primary/80 text-primary-foreground hover:bg-primary"
            aria-label="Volver arriba"
        >
            <ArrowUp className="h-6 w-6" />
        </Button>
    </div>
  );
};

export default ScrollToTopButton;
