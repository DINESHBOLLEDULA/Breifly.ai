// import { createContext, useContext, useState, useEffect, useRef } from 'react';

// const ThemeContext = createContext();

// export function ThemeProvider({ children }) {
//   const [isDark, setIsDark] = useState(() => {
//     const saved = localStorage.getItem('theme');
//     if (saved) return saved === 'dark';
//     return window.matchMedia('(prefers-color-scheme: dark)').matches;
//   });

//   const isAnimating = useRef(false);

//   useEffect(() => {
//     const root = window.document.documentElement;
//     if (isDark) {
//       root.classList.add('dark');
//       root.classList.remove('light');
//     } else {
//       root.classList.remove('dark');
//       root.classList.add('light');
//     }
//     localStorage.setItem('theme', isDark ? 'dark' : 'light');
//   }, [isDark]);

//   // Call this with the click event from the toggle button
//   const toggleTheme = (e) => {
//     if (isAnimating.current) return;

//     const x = e?.clientX ?? window.innerWidth / 2;
//     const y = e?.clientY ?? window.innerHeight / 2;

//     // Calculate max radius needed to cover full screen from click point
//     const maxRadius = Math.hypot(
//       Math.max(x, window.innerWidth - x),
//       Math.max(y, window.innerHeight - y)
//     );

//     const nextDark = !isDark;
//     const overlayColor = nextDark ? '#15141e' : '#f6f6f8';

//     // Create ripple overlay
//     const ripple = document.createElement('div');
//     ripple.style.cssText = `
//       position: fixed;
//       inset: 0;
//       z-index: 9999;
//       pointer-events: none;
//       background: ${overlayColor};
//       clip-path: circle(0px at ${x}px ${y}px);
//       transition: clip-path 600ms cubic-bezier(0.4, 0, 0.2, 1);
//     `;
//     document.body.appendChild(ripple);
//     isAnimating.current = true;

//     // Trigger expand on next frame
//     requestAnimationFrame(() => {
//       requestAnimationFrame(() => {
//         ripple.style.clipPath = `circle(${maxRadius}px at ${x}px ${y}px)`;
//       });
//     });

//     // Swap theme halfway through so it's hidden behind the ripple
//     setTimeout(() => {
//       setIsDark(nextDark);
//     }, 300);

//     // Remove overlay after animation completes
//     setTimeout(() => {
//       ripple.remove();
//       isAnimating.current = false;
//     }, 650);
//   };

//   return (
//     <ThemeContext.Provider value={{ isDark, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export function useTheme() {
//   const context = useContext(ThemeContext);
//   if (!context) throw new Error('useTheme must be used within a ThemeProvider');
//   return context;
// }

import { createContext, useContext, useState, useEffect, useRef } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const isAnimating = useRef(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = (e) => {
    if (isAnimating.current) return;

    const nextDark = !isDark;

    const rect = e.currentTarget.getBoundingClientRect();
    const originX = rect.left + rect.width / 2;
    const originY = rect.top + rect.height / 2;

    const maxRadius = Math.hypot(
      Math.max(originX, window.innerWidth - originX),
      Math.max(originY, window.innerHeight - originY)
    );

    isAnimating.current = true;

    if (nextDark) {
      // DARK MODE: ripple expands FROM button outward
      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: fixed;
        inset: 0;
        z-index: 9999;
        pointer-events: none;
        background: #15141e;
        clip-path: circle(0px at ${originX}px ${originY}px);
        transition: clip-path 380ms cubic-bezier(0.4, 0, 0.2, 1);
      `;
      document.body.appendChild(ripple);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          ripple.style.clipPath = `circle(${maxRadius}px at ${originX}px ${originY}px)`;
        });
      });

      // Swap theme once fully covered
      setTimeout(() => setIsDark(true), 380);
      setTimeout(() => {
        ripple.remove();
        isAnimating.current = false;
      }, 400);

    } else {
      // LIGHT MODE: current dark overlay shrinks INTO button (reverse)
      // Apply new light theme immediately underneath
      setIsDark(false);

      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: fixed;
        inset: 0;
        z-index: 9999;
        pointer-events: none;
        background: #15141e;
        clip-path: circle(${maxRadius}px at ${originX}px ${originY}px);
        transition: clip-path 380ms cubic-bezier(0.4, 0, 0.2, 1);
      `;
      document.body.appendChild(ripple);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          ripple.style.clipPath = `circle(0px at ${originX}px ${originY}px)`;
        });
      });

      setTimeout(() => {
        ripple.remove();
        isAnimating.current = false;
      }, 400);
    }
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
}