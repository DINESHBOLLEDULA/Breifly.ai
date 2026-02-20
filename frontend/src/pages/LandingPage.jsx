// import React from 'react';
// import { 
//   Sparkles, Moon, Sun, FileText, MoveRight, 
//   Lightbulb, Languages, History, Link as LinkIcon,
//   GitGraph, Share2, Globe
// } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';

// const LandingPage = () => {
//   const { isDark, toggleTheme } = useTheme();

//   return (
//     <div className="relative min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">
//       {/* Navigation */}
//       <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-background-dark/70 border-b border-slate-200 dark:border-slate-800">
//         <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
//           <div className="flex items-center gap-8">
//             <div className="flex items-center gap-2">
//               <div className="size-8 bg-accent-teal rounded-lg flex items-center justify-center text-white">
//                 <Sparkles size={18} fill="white" />
//               </div>
//               <span className="text-xl font-bold tracking-tight text-accent-teal">Breifly.ai</span>
//             </div>
//             <nav className="hidden md:flex items-center gap-8">
//               {['Features', 'Integrations', 'Languages'].map((item) => (
//                 <a key={item} href="#" className="text-sm font-medium hover:text-accent-teal dark:hover:text-accent-teal transition-colors">{item}</a>
//               ))}
//             </nav>
//           </div>
//           <div className="flex items-center gap-4">
//             <button 
//               onClick={toggleTheme}
//               className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
//             >
//               {isDark ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//             <button className="text-sm font-bold text-slate-600 dark:text-slate-300 px-4 hover:text-accent-teal transition-colors">Log In</button>
//             <button className="bg-accent-teal text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-teal-500/20">
//               Start Now
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <main className="flex-1 workbench-grid relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col items-center text-center relative z-10">
          
//           {/* Top-Left Floating Element */}
//           <div className="hidden lg:block absolute top-10 left-10 animate-float">
//             <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 flex items-center gap-4">
//               <div className="size-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400">
//                 <FileText size={20} />
//               </div>
//               <MoveRight className="text-accent-green" size={20} />
//               <div className="size-10 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center text-yellow-600 dark:text-yellow-400">
//                 <Lightbulb size={20} />
//               </div>
//               <div className="text-left ml-2">
//                 <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-none">Status</div>
//                 <div className="text-xs font-bold">Analysis Complete</div>
//               </div>
//             </div>
//           </div>

//           <FloatingStatusNodes />

//           <h1 className="text-5xl md:text-7xl font-bold text-accent-teal dark:text-accent-teal mb-6 max-w-4xl leading-tight">
//             One tool to <span className="underline-neon">summarize</span> your world.
//           </h1>
          
//           <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed">
//             Upload PDFs, docs, or URLs. Get instant summaries, flowcharts, and multilingual translations with verifiable citations.
//           </p>

//           {/* Search Bar Area */}
//           <div className="w-full max-w-2xl flex flex-col md:flex-row gap-4 items-center">
//             <div className="relative flex-1 w-full group">
//               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
//                 <LinkIcon size={18} />
//               </div>
//               <input 
//                 className="block w-full pl-12 pr-32 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-accent-teal outline-none transition-all shadow-sm" 
//                 placeholder="Paste a URL or document link" 
//                 type="text"
//               />
//               <button className="absolute right-2 top-2 bottom-2 px-6 bg-accent-teal text-white rounded-lg text-sm font-bold hover:bg-opacity-90 transition-all">
//                 Summarize
//               </button>
//             </div>
//             <span className="text-slate-400 font-medium text-sm">OR</span>
//             <button className="whitespace-nowrap bg-accent-teal text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-teal-500/20">
//               Start for Free ✨
//             </button>
//           </div>

//           {/* Trust Bar */}
//           <div className="mt-20 flex flex-col items-center">
//             <p className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-8">
//               Summarizing millions of pages for researchers and students
//             </p>
//             <div className="flex flex-wrap justify-center gap-12 grayscale opacity-50 contrast-125">
//               <div className="flex items-center gap-2"><FileText /> <span className="font-bold text-xl text-slate-700 dark:text-slate-300">PDF</span></div>
//               <div className="flex items-center gap-2"><History /> <span className="font-bold text-xl text-slate-700 dark:text-slate-300">Word</span></div>
//               <div className="flex items-center gap-2"><Globe /> <span className="font-bold text-xl text-slate-700 dark:text-slate-300">Web URLs</span></div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Feature Grid */}
//       <section className="bg-white dark:bg-background-dark py-24 border-t border-slate-100 dark:border-slate-800">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
//           <FeatureCard 
//             title="Verifiable Citations"
//             desc="Every summary point is linked back to the original source. Click any citation to see exactly where the information came from."
//             footer={
//               <div className="mt-6 p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-[11px]">
//                 <p className="mb-2 italic text-slate-400">"The mitochondria is the powerhouse of the cell..."</p>
//                 <div className="flex items-center justify-between">
//                   <span className="bg-accent-teal/10 text-accent-teal px-2 py-0.5 rounded-full font-bold">Source: Page 42</span>
//                   <LinkIcon className="text-accent-teal" size={14} />
//                 </div>
//               </div>
//             }
//           />
//           <FeatureCard 
//             title="Visual Flowcharts"
//             desc="Transform dense technical documents into interactive mapping nodes. Perfect for understanding complex relationships."
//             footer={<MappingNodesPreview />}
//           />
//           <FeatureCard 
//             title="75+ Languages"
//             desc="Upload in any language and get summaries in your native tongue. Full support for Hindi, Tamil, Bengali, and 70+ more."
//             footer={
//               <div className="flex gap-2 flex-wrap mt-6">
//                 {['日本語', 'हिन्दी', 'Español', 'Français'].map(lang => (
//                   <span key={lang} className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-full text-[10px] font-bold">
//                     {lang}
//                   </span>
//                 ))}
//               </div>
//             }
//           />
//         </div>
//       </section>
//     </div>
//   );
// };

// const FeatureCard = ({ title, desc, footer }) => (
//   <div className="p-8 rounded-2xl bg-background-light dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-accent-teal transition-colors group">
//     <div className="size-12 rounded-xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-accent-teal mb-6 group-hover:bg-accent-teal group-hover:text-white transition-all">
//       <Sparkles size={24} />
//     </div>
//     <h3 className="text-xl font-bold mb-4">{title}</h3>
//     <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-6">{desc}</p>
//     {footer}
//   </div>
// );

// const MappingNodesPreview = () => (
//   <div className="relative h-32 w-full flex items-center justify-center bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-dashed border-slate-200 dark:border-slate-700">
//     <div className="absolute inset-0 flex items-center justify-center px-10">
//       <div className="w-full h-[2px] bg-gradient-to-r from-primary to-accent-teal opacity-50" />
//       <div className="absolute w-24 h-[2px] bg-accent-green animate-[draw-line_2s_infinite]" />
//     </div>
//     <div className="flex gap-16 relative z-10">
//       <div className="size-10 rounded-lg bg-accent-teal/80 flex items-center justify-center text-white shadow-lg shadow-teal-500/40">
//         <GitGraph size={18} />
//       </div>
//       <div className="relative">
//         <div className="size-10 rounded-lg bg-accent-teal flex items-center justify-center text-white animate-pulse-soft shadow-lg shadow-teal-500/20">
//           <Share2 size={18} />
//         </div>
//         <div className="absolute -right-2 -top-2 size-5 rounded-full bg-accent-green text-primary flex items-center justify-center text-[10px] font-black border-2 border-white dark:border-slate-900">
//           +
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const FloatingStatusNodes = () => (
//   <div className="hidden lg:block absolute bottom-40 right-10 animate-float" style={{ animationDelay: '1.5s' }}>
//     <div className="bg-accent-teal text-white p-5 rounded-2xl shadow-2xl border border-white/10 w-64 text-left">
//       <div className="flex flex-col gap-4">
//         <div className="flex items-center gap-3">
//           <div className="size-2 rounded-full bg-accent-green animate-pulse" />
//           <div className="h-[2px] flex-1 bg-white/20 relative overflow-hidden">
//             <div className="absolute inset-0 bg-accent-teal w-1/2 animate-[draw-line_2s_infinite]" />
//           </div>
//           <div className="size-6 rounded bg-accent-teal flex items-center justify-center">
//             <GitGraph size={14} className="text-white" />
//           </div>
//         </div>
//         <div className="text-[10px] font-medium tracking-wide text-slate-300">Mapping Research Nodes...</div>
//       </div>
//     </div>
//   </div>
// );

// export default LandingPage;

// import React, { useRef, useEffect } from 'react';
// import { 
//   Sparkles, Moon, Sun, FileText, MoveRight, 
//   Lightbulb, Languages, History, Link as LinkIcon,
//   GitGraph, Share2, Globe
// } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';

// const LandingPage = () => {
//   const { isDark, toggleTheme } = useTheme();

//   return (
//     <div className="relative min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">
//       {/* Navigation */}
//       <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-background-dark/70 border-b border-slate-200 dark:border-slate-800">
//         <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
//           <div className="flex items-center gap-8">
//             <div className="flex items-center gap-2">
//               <div className="size-8 bg-accent-teal rounded-lg flex items-center justify-center text-white">
//                 <Sparkles size={18} fill="white" />
//               </div>
//               <span className="text-xl font-bold tracking-tight text-accent-teal">Breifly.ai</span>
//             </div>
//             <nav className="hidden md:flex items-center gap-8">
//               {['Features', 'Integrations', 'Languages'].map((item) => (
//                 <a key={item} href="#" className="text-sm font-medium hover:text-accent-teal dark:hover:text-accent-teal transition-colors">{item}</a>
//               ))}
//             </nav>
//           </div>
//           <div className="flex items-center gap-4">
//             <button 
//               onClick={toggleTheme}
//               className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
//             >
//               {isDark ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//             <button className="text-sm font-bold text-slate-600 dark:text-slate-300 px-4 hover:text-accent-teal transition-colors">Log In</button>
//             <button className="bg-accent-teal text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-teal-500/20">
//               Start Now
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <main className="flex-1 relative overflow-hidden">
//         <ParticleCanvas isDark={isDark} />
//         <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col items-center text-center relative z-10">
          
//           {/* Top-Left Floating Element */}
//           <div className="hidden lg:block absolute top-10 left-10 animate-float">
//             <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 flex items-center gap-4">
//               <div className="size-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400">
//                 <FileText size={20} />
//               </div>
//               <MoveRight className="text-accent-green" size={20} />
//               <div className="size-10 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center text-yellow-600 dark:text-yellow-400">
//                 <Lightbulb size={20} />
//               </div>
//               <div className="text-left ml-2">
//                 <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-none">Status</div>
//                 <div className="text-xs font-bold">Analysis Complete</div>
//               </div>
//             </div>
//           </div>

//           <FloatingStatusNodes />

//           <h1 className="text-5xl md:text-7xl font-bold text-accent-teal dark:text-accent-teal mb-6 max-w-4xl leading-tight">
//             One tool to <span className="underline-neon">summarize</span> your world.
//           </h1>
          
//           <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed">
//             Upload PDFs, docs, or URLs. Get instant summaries, flowcharts, and multilingual translations with verifiable citations.
//           </p>

//           {/* Search Bar Area */}
//           <div className="w-full max-w-2xl flex flex-col md:flex-row gap-4 items-center">
//             <div className="relative flex-1 w-full group">
//               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
//                 <LinkIcon size={18} />
//               </div>
//               <input 
//                 className="block w-full pl-12 pr-32 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-accent-teal outline-none transition-all shadow-sm" 
//                 placeholder="Paste a URL or document link" 
//                 type="text"
//               />
//               <button className="absolute right-2 top-2 bottom-2 px-6 bg-accent-teal text-white rounded-lg text-sm font-bold hover:bg-opacity-90 transition-all">
//                 Summarize
//               </button>
//             </div>
//             <span className="text-slate-400 font-medium text-sm">OR</span>
//             <button className="whitespace-nowrap bg-accent-teal text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-teal-500/20">
//               Start for Free ✨
//             </button>
//           </div>

//           {/* Trust Bar */}
//           <div className="mt-20 flex flex-col items-center">
//             <p className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-8">
//               Summarizing millions of pages for researchers and students
//             </p>
//             <div className="flex flex-wrap justify-center gap-12 grayscale opacity-50 contrast-125">
//               <div className="flex items-center gap-2"><FileText /> <span className="font-bold text-xl text-slate-700 dark:text-slate-300">PDF</span></div>
//               <div className="flex items-center gap-2"><History /> <span className="font-bold text-xl text-slate-700 dark:text-slate-300">Word</span></div>
//               <div className="flex items-center gap-2"><Globe /> <span className="font-bold text-xl text-slate-700 dark:text-slate-300">Web URLs</span></div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Feature Grid */}
//       <section className="bg-white dark:bg-background-dark py-24 border-t border-slate-100 dark:border-slate-800">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
//           <FeatureCard 
//             title="Verifiable Citations"
//             desc="Every summary point is linked back to the original source. Click any citation to see exactly where the information came from."
//             footer={
//               <div className="mt-6 p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-[11px]">
//                 <p className="mb-2 italic text-slate-400">"The mitochondria is the powerhouse of the cell..."</p>
//                 <div className="flex items-center justify-between">
//                   <span className="bg-accent-teal/10 text-accent-teal px-2 py-0.5 rounded-full font-bold">Source: Page 42</span>
//                   <LinkIcon className="text-accent-teal" size={14} />
//                 </div>
//               </div>
//             }
//           />
//           <FeatureCard 
//             title="Visual Flowcharts"
//             desc="Transform dense technical documents into interactive mapping nodes. Perfect for understanding complex relationships."
//             footer={<MappingNodesPreview />}
//           />
//           <FeatureCard 
//             title="75+ Languages"
//             desc="Upload in any language and get summaries in your native tongue. Full support for Hindi, Tamil, Bengali, and 70+ more."
//             footer={
//               <div className="flex gap-2 flex-wrap mt-6">
//                 {['日本語', 'हिन्दी', 'Español', 'Français'].map(lang => (
//                   <span key={lang} className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-full text-[10px] font-bold">
//                     {lang}
//                   </span>
//                 ))}
//               </div>
//             }
//           />
//         </div>
//       </section>
//     </div>
//   );
// };

// const ParticleCanvas = ({ isDark }) => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     let animationId;

//     const resize = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };
//     resize();
//     window.addEventListener('resize', resize);

//     // Particle config
//     const PARTICLE_COUNT = 80;
//     const CONNECTION_DISTANCE = 140;
//     const tealColor = '20, 184, 166';    // #14b8a6
//     const greenColor = '58, 145, 73';    // #3a9149

//     const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       vx: (Math.random() - 0.5) * 0.5,
//       vy: (Math.random() - 0.5) * 0.5,
//       radius: Math.random() * 2 + 1.5,
//       color: Math.random() > 0.5 ? tealColor : greenColor,
//     }));

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Update + draw particles
//       particles.forEach(p => {
//         p.x += p.vx;
//         p.y += p.vy;
//         if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
//         if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
//         ctx.fillStyle = isDark
//           ? `rgba(${p.color}, 0.55)`
//           : `rgba(${p.color}, 0.8)`;
//         ctx.fill();
//       });

//       // Draw connections
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const a = particles[i];
//           const b = particles[j];
//           const dx = a.x - b.x;
//           const dy = a.y - b.y;
//           const dist = Math.sqrt(dx * dx + dy * dy);

//           if (dist < CONNECTION_DISTANCE) {
//             const opacity = (1 - dist / CONNECTION_DISTANCE) * (isDark ? 0.3 : 0.5);
//             ctx.beginPath();
//             ctx.moveTo(a.x, a.y);
//             ctx.lineTo(b.x, b.y);
//             ctx.strokeStyle = `rgba(${a.color}, ${opacity})`;
//             ctx.lineWidth = 1;
//             ctx.stroke();
//           }
//         }
//       }

//       animationId = requestAnimationFrame(draw);
//     };

//     draw();

//     return () => {
//       cancelAnimationFrame(animationId);
//       window.removeEventListener('resize', resize);
//     };
//   }, [isDark]);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 w-full h-full pointer-events-none"
//     />
//   );
// };

// const FeatureCard = ({ title, desc, footer }) => (
//   <div className="p-8 rounded-2xl bg-background-light dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-accent-teal transition-colors group">
//     <div className="size-12 rounded-xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-accent-teal mb-6 group-hover:bg-accent-teal group-hover:text-white transition-all">
//       <Sparkles size={24} />
//     </div>
//     <h3 className="text-xl font-bold mb-4">{title}</h3>
//     <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-6">{desc}</p>
//     {footer}
//   </div>
// );

// const MappingNodesPreview = () => (
//   <div className="relative h-32 w-full flex items-center justify-center bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-dashed border-slate-200 dark:border-slate-700">
//     <div className="absolute inset-0 flex items-center justify-center px-10">
//       <div className="w-full h-[2px] bg-gradient-to-r from-primary to-accent-teal opacity-50" />
//       <div className="absolute w-24 h-[2px] bg-accent-green animate-[draw-line_2s_infinite]" />
//     </div>
//     <div className="flex gap-16 relative z-10">
//       <div className="size-10 rounded-lg bg-accent-teal/80 flex items-center justify-center text-white shadow-lg shadow-teal-500/40">
//         <GitGraph size={18} />
//       </div>
//       <div className="relative">
//         <div className="size-10 rounded-lg bg-accent-teal flex items-center justify-center text-white animate-pulse-soft shadow-lg shadow-teal-500/20">
//           <Share2 size={18} />
//         </div>
//         <div className="absolute -right-2 -top-2 size-5 rounded-full bg-accent-green text-primary flex items-center justify-center text-[10px] font-black border-2 border-white dark:border-slate-900">
//           +
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const FloatingStatusNodes = () => (
//   <div className="hidden lg:block absolute bottom-40 right-10 animate-float" style={{ animationDelay: '1.5s' }}>
//     <div className="bg-accent-teal text-white p-5 rounded-2xl shadow-2xl border border-white/10 w-64 text-left">
//       <div className="flex flex-col gap-4">
//         <div className="flex items-center gap-3">
//           <div className="size-2 rounded-full bg-accent-green animate-pulse" />
//           <div className="h-[2px] flex-1 bg-white/20 relative overflow-hidden">
//             <div className="absolute inset-0 bg-accent-teal w-1/2 animate-[draw-line_2s_infinite]" />
//           </div>
//           <div className="size-6 rounded bg-accent-teal flex items-center justify-center">
//             <GitGraph size={14} className="text-white" />
//           </div>
//         </div>
//         <div className="text-[10px] font-medium tracking-wide text-slate-300">Mapping Research Nodes...</div>
//       </div>
//     </div>
//   </div>
// );

// export default LandingPage;

import React, { useRef, useEffect } from 'react';
import { 
  Sparkles, Moon, Sun, FileText, MoveRight, 
  Lightbulb, Languages, History, Link as LinkIcon,
  GitGraph, Share2, Globe
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const { isDark, toggleTheme } = useTheme();
  const navigate= useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      {/* Global Particle Background — fixed so it covers the entire page while scrolling */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleCanvas isDark={isDark} />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-background-dark/70 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="size-8 bg-accent-teal rounded-lg flex items-center justify-center text-white">
                <Sparkles size={18} fill="white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-accent-teal">Breifly.ai</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              {['Features', 'Integrations', 'Languages'].map((item) => (
                <a key={item} href="#" className="text-sm font-medium hover:text-accent-teal dark:hover:text-accent-teal transition-colors">{item}</a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={(e) => toggleTheme(e)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
            onClick={()=>navigate('/login')}
            className="text-sm font-bold text-slate-600 dark:text-slate-300 px-4 hover:text-accent-teal transition-colors">Log In</button>
            <button 
            onClick={()=>navigate('/dashboard')}
            className="bg-accent-teal text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-teal-500/20">
              Start Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col items-center text-center relative z-10">
          
          {/* Top-Left Floating Element */}
          <div className="hidden lg:block absolute top-10 left-10 animate-float">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 flex items-center gap-4">
              <div className="size-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <FileText size={20} />
              </div>
              <MoveRight className="text-accent-green" size={20} />
              <div className="size-10 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                <Lightbulb size={20} />
              </div>
              <div className="text-left ml-2">
                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-none">Status</div>
                <div className="text-xs font-bold">Analysis Complete</div>
              </div>
            </div>
          </div>

          <FloatingStatusNodes />

          <h1 className="text-5xl md:text-7xl font-bold text-accent-teal dark:text-accent-teal mb-6 max-w-4xl leading-tight">
            One tool to <span className="underline-neon ">summarize</span> your world.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed">
            Upload PDFs, docs, or URLs. Get instant summaries, flowcharts, and multilingual translations with verifiable citations.
          </p>

          {/* Search Bar Area */}
          <div className="w-full max-w-2xl flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <LinkIcon size={18} />
              </div>
              <input 
                className="block w-full pl-12 pr-32 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-accent-teal outline-none transition-all shadow-sm" 
                placeholder="Paste a URL or document link" 
                type="text"
              />
              <button className="absolute right-2 top-2 bottom-2 px-6 bg-accent-teal text-white rounded-lg text-sm font-bold hover:bg-opacity-90 transition-all">
                Summarize
              </button>
            </div>
            <span className="text-slate-400 font-medium text-sm">OR</span>
            <button className="whitespace-nowrap bg-accent-teal text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-teal-500/20">
              Start for Free ✨
            </button>
          </div>

          {/* Trust Bar */}
          <div className="mt-20 flex flex-col items-center">
            <p className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-8">
              Summarizing millions of pages for researchers and students
            </p>
            <div className="flex flex-wrap justify-center gap-12 grayscale opacity-50 contrast-125">
              <div className="flex items-center gap-2"><FileText /> <span className="font-bold text-xl text-slate-700 dark:text-slate-300">PDF</span></div>
              <div className="flex items-center gap-2"><History /> <span className="font-bold text-xl text-slate-700 dark:text-slate-300">Word</span></div>
              <div className="flex items-center gap-2"><Globe /> <span className="font-bold text-xl text-slate-700 dark:text-slate-300">Web URLs</span></div>
            </div>
          </div>
        </div>
      </main>

      {/* Feature Grid */}
      <section className="relative z-10 bg-transparent py-24 border-t border-slate-100/20 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Verifiable Citations"
            desc="Every summary point is linked back to the original source. Click any citation to see exactly where the information came from."
            footer={
              <div className="mt-6 p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-[11px]">
                <p className="mb-2 italic text-slate-400">"The mitochondria is the powerhouse of the cell..."</p>
                <div className="flex items-center justify-between">
                  <span className="bg-accent-teal/10 text-accent-teal px-2 py-0.5 rounded-full font-bold">Source: Page 42</span>
                  <LinkIcon className="text-accent-teal" size={14} />
                </div>
              </div>
            }
          />
          <FeatureCard 
            title="Visual Flowcharts"
            desc="Transform dense technical documents into interactive mapping nodes. Perfect for understanding complex relationships."
            footer={<MappingNodesPreview />}
          />
          <FeatureCard 
            title="75+ Languages"
            desc="Upload in any language and get summaries in your native tongue. Full support for Hindi, Tamil, Bengali, and 70+ more."
            footer={
              <div className="flex gap-2 flex-wrap mt-6">
                {['日本語', 'हिन्दी', 'Español', 'Français'].map(lang => (
                  <span key={lang} className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-full text-[10px] font-bold">
                    {lang}
                  </span>
                ))}
              </div>
            }
          />
        </div>
      </section>
    </div>
  );
};

const ParticleCanvas = ({ isDark }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Particle config
    const PARTICLE_COUNT = 80;
    const CONNECTION_DISTANCE = 140;
    const tealColor = '20, 184, 166';    // #14b8a6
    const greenColor = '58, 145, 73';    // #3a9149

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1.5,
      color: Math.random() > 0.5 ? tealColor : greenColor,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update + draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(${p.color}, 0.35)`
          : `rgba(${p.color}, 0.45)`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * (isDark ? 0.15 : 0.25);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${a.color}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

const FeatureCard = ({ title, desc, footer }) => (
  <div className="p-8 rounded-2xl bg-background-light dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-accent-teal transition-colors group">
    <div className="size-12 rounded-xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-accent-teal mb-6 group-hover:bg-accent-teal group-hover:text-white transition-all">
      <Sparkles size={24} />
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-6">{desc}</p>
    {footer}
  </div>
);

const MappingNodesPreview = () => (
  <div className="relative h-32 w-full flex items-center justify-center bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-dashed border-slate-200 dark:border-slate-700">
    <div className="absolute inset-0 flex items-center justify-center px-10">
      <div className="w-full h-[2px] bg-gradient-to-r from-primary to-accent-teal opacity-50" />
      <div className="absolute w-24 h-[2px] bg-accent-green animate-[draw-line_2s_infinite]" />
    </div>
    <div className="flex gap-16 relative z-10">
      <div className="size-10 rounded-lg bg-accent-teal/80 flex items-center justify-center text-white shadow-lg shadow-teal-500/40">
        <GitGraph size={18} />
      </div>
      <div className="relative">
        <div className="size-10 rounded-lg bg-accent-teal flex items-center justify-center text-white animate-pulse-soft shadow-lg shadow-teal-500/20">
          <Share2 size={18} />
        </div>
        <div className="absolute -right-2 -top-2 size-5 rounded-full bg-accent-green text-primary flex items-center justify-center text-[10px] font-black border-2 border-white dark:border-slate-900">
          +
        </div>
      </div>
    </div>
  </div>
);

const FloatingStatusNodes = () => (
  <div className="hidden lg:block absolute bottom-40 right-10 animate-float" style={{ animationDelay: '1.5s' }}>
    <div className="bg-accent-teal text-white p-5 rounded-2xl shadow-2xl border border-white/10 w-64 text-left">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="size-2 rounded-full bg-accent-green animate-pulse" />
          <div className="h-[2px] flex-1 bg-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-accent-teal w-1/2 animate-[draw-line_2s_infinite]" />
          </div>
          <div className="size-6 rounded bg-accent-teal flex items-center justify-center">
            <GitGraph size={14} className="text-white" />
          </div>
        </div>
        <div className="text-[10px] font-medium tracking-wide text-slate-300">Mapping Research Nodes...</div>
      </div>
    </div>
  </div>
);

export default LandingPage;