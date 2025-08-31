import { cn } from "../lib/utils";
import { useState, useEffect } from "react";
import UnicornScene from "unicornstudio-react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export const UnicornBackground = ({ className, children }) => {
  const { width, height } = useWindowSize();

  return (
    <div className={cn("relative w-full h-full", className)}>
      {/* Unicorn Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <UnicornScene 
          production={true} 
          projectId="erpu4mAlEe8kmhaGKYe9" 
          width={width} 
          height={height} 
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};
