import React,{useEffect,useRef,useState} from 'react'
import {createRoot} from 'react-dom/client'
import {ArrowRight,BookOpen,ChevronsDown,Menu,PenLine,PencilRuler,Ruler,Sparkles,X} from 'lucide-react'
import './index.css'

const VIDEO='https://zxdefgavgwfxastwmmjm.supabase.co/storage/v1/object/public/assets/graven.mp4'
const beats=[
 {id:'01 · THE SHEET',title:'A blank field.',copy:'It starts with nothing but a border and a title block — the whole object still only an intention.',spec:['SIZE · A1','MEDIUM · vellum','MARKS · 0'],from:.06,to:.28,side:'left'},
 {id:'02 · THE FRAME',title:'Lines find their order.',copy:'Construction lines lay down the geometry — axes, centres, and the bones the drawing will hang on.',spec:['AXES · 3','TOLERANCE · ±0.1mm','PROJECTION · first-angle'],from:.30,to:.52,side:'right'},
 {id:'03 · THE SECTION',title:'Cut it open.',copy:'A section reveals the inside — hatching, wall thickness, and how every part meets the next.',spec:['CUT · A–A','HATCH · 45°','WALL · 2.4mm'],from:.54,to:.76,side:'left'},
 {id:'04 · THE BUILD',title:'Ready to make.',copy:'Fully dimensioned, checked, and signed. The line becomes a thing you can hold.',spec:['STATUS · released','CHECKED · yes','SHEETS · 6'],from:.78,to:1,side:'center'}
]
function clamp(n,a=0,b=1){return Math.max(a,Math.min(b,n))}
function App(){
 const outer=useRef(null),video=useRef(null),raf=useRef(0),target=useRef(0),current=useRef(0),[progress,setProgress]=useState(0),[beat,setBeat]=useState('intro'),[open,setOpen]=useState(false),reduced=useRef(false)
 useEffect(()=>{reduced.current=window.matchMedia('(prefers-reduced-motion: reduce)').matches
   const onScroll=()=>{const r=outer.current?.getBoundingClientRect();if(!r)return;const p=clamp((-r.top)/(r.height-window.innerHeight));target.current=p;setProgress(p);const active=[...beats].reverse().find(b=>p>=b.from)?.id||'intro';setBeat(active)}
   const tick=()=>{const v=video.current;if(v?.readyState>=2&&Number.isFinite(v.duration)){current.current=reduced.current?target.current:current.current+(target.current-current.current)*.1;if(reduced.current||Math.abs(target.current-current.current)>.01){try{v.currentTime=current.current*v.duration}catch{}}}raf.current=requestAnimationFrame(tick)}
   window.addEventListener('scroll',onScroll,{passive:true});onScroll();raf.current=requestAnimationFrame(tick);return()=>{window.removeEventListener('scroll',onScroll);cancelAnimationFrame(raf.current)}
 },[])
 const beatName=beat==='intro'?'TRACE':beat.split(' · ')[1]
 return <div>
  <div className="grain"/>
  <nav className="fixed top-0 left-0 w-full z-[50] backdrop-blur-md px-4 sm:px-6 md:px-12 py-4 md:py-6 flex items-center justify-between">
   <div className="blur-fade-up flex items-center gap-3" style={{animationDelay:'0ms'}}><span className="text-lg md:text-xl tracking-[.12em] font-light">GRAVEN</span><span className="mono text-[10px] tracking-[.3em] text-[#9aa4ae] hidden sm:inline">/ DRAFTING WORKS</span></div>
   <div className="hidden lg:flex items-center gap-8 text-sm text-white/70">{['Work','Method','The Studio','Contact'].map((x,i)=><a key={x} href={'#'+x.toLowerCase().replaceAll(' ','-')} className="blur-fade-up hover:text-white transition-colors" style={{animationDelay:`${100+i*50}ms`}}>{x}</a>)}</div>
   <div className="flex items-center gap-2"><button className="blur-fade-up liquid-glass rounded-full px-5 py-2 text-sm hidden lg:flex items-center gap-2" style={{animationDelay:'300ms'}}>Start a drawing <PenLine size={16}/></button><button aria-label="menu" onClick={()=>setOpen(!open)} className="lg:hidden liquid-glass w-10 h-10 rounded-full flex items-center justify-center">{open?<X size={18}/>:<Menu size={18}/>}</button></div>
  </nav>
  {open&&<div className="menu-enter fixed top-[72px] left-4 right-4 z-[49] liquid-glass rounded-2xl p-5 bg-[#0c0f13]/95 lg:hidden">{['Work','Method','The Studio','Contact'].map(x=><a onClick={()=>setOpen(false)} className="block py-3 mono text-xs tracking-[.2em] text-white/70" href={'#'+x.toLowerCase().replaceAll(' ','-')} key={x}>{x.toUpperCase()}</a>)}</div>}
  <div ref={outer} className="relative h-[360vh] md:h-[500vh]" id="work"><div className="sticky top-0 h-screen w-full overflow-hidden">
    <video ref={video} muted playsInline preload="auto" crossOrigin="anonymous" className="absolute inset-0 w-full h-full object-cover z-0" src={VIDEO} onLoadedMetadata={()=>{}}/>
    <div className="absolute inset-0 z-[1] opacity-10 pointer-events-none" style={{backgroundImage:'repeating-linear-gradient(90deg,rgba(154,164,174,.5) 0,rgba(154,164,174,.5) 1px,transparent 1px,transparent 40px),repeating-linear-gradient(0deg,rgba(154,164,174,.5) 0,rgba(154,164,174,.5) 1px,transparent 1px,transparent 40px)'}}/>
    <div className="absolute inset-0 z-[2] pointer-events-none backdrop-blur-[2px]" style={{maskImage:'linear-gradient(to top,black 0%,transparent 42%)',WebkitMaskImage:'linear-gradient(to top,black 0%,transparent 42%)'}}/>
    <div className="absolute inset-0 z-10 flex flex-col justify-end items-start text-left pb-20 md:pb-28 px-4 sm:px-6 md:px-12 max-w-3xl">
      <div className="blur-fade-up mono text-[11px] tracking-[.24em] uppercase text-white/50 flex flex-wrap gap-x-6 gap-y-2 mb-6" style={{animationDelay:'300ms'}}><span><Ruler size={14} className="inline mr-2"/>SCALE 1:1</span><span><PencilRuler size={14} className="inline mr-2"/>SHEET 01 OF 06</span><span><Sparkles size={14} className="inline mr-2"/>REV. A</span></div>
      <div className="rule w-[120px] mb-5 draw"/>
      <div className="blur-fade-up mono text-[11px] tracking-[.32em] uppercase text-[#9aa4ae] mb-4" style={{animationDelay:'380ms'}}>GRAVEN / DRAFTING WORKS</div>
      <h1 className="blur-fade-up text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-.03em] leading-[.95]" style={{animationDelay:'450ms'}}><span className="dim-label">Drawn</span> before it's built.</h1>
      <p className="blur-fade-up text-base sm:text-lg text-white/60 max-w-lg mt-5" style={{animationDelay:'560ms'}}>Every object begins as a line. Scroll to watch the draft take shape.</p>
      <div className="blur-fade-up mono text-[11px] tracking-[.3em] text-white/40 mt-8 flex items-center gap-2" style={{animationDelay:'680ms'}}>SCROLL TO TRACE <ChevronsDown size={17} className="cue"/></div>
    </div>
    <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3"><div className="w-px h-40 bg-white/10 relative"><div className="absolute bottom-0 left-0 w-px bg-[#9aa4ae] transition-[height] duration-100" style={{height:`${progress*100}%`}}/></div><span className="mono text-[10px] tracking-[.25em] uppercase text-white/45 [writing-mode:vertical-rl] rotate-180">{beatName}</span></div>
  </div></div>
  <main className="relative bg-[#0c0f13]">{beats.map((b,i)=><section id={i===1?'method':i===2?'the-studio':i===3?'contact':undefined} key={b.id} className={`min-h-screen flex items-center px-6 md:px-12 py-24 ${b.side==='right'?'justify-end':b.side==='center'?'justify-center':'justify-start'}`}><div className={`w-full max-w-3xl ${b.side==='right'?'text-right':''}`}><div className={`mono text-[11px] tracking-[.32em] text-[#9aa4ae] uppercase ${b.side==='right'?'text-right':''}`}>{b.id}</div><div className={`rule mt-4 mb-7 draw ${b.side==='right'?'ml-auto':''}`} style={{width:120}}/><h2 className="text-5xl md:text-7xl font-light tracking-[-.03em] leading-none">{b.title}</h2><p className="text-lg md:text-xl text-white/60 max-w-2xl mt-6">{b.copy}</p><div className={`mt-10 grid grid-cols-1 sm:grid-cols-3 ${b.side==='right'?'sm:text-right':''}`}>{b.spec.map((s,j)=><React.Fragment key={s}><div className="py-4 sm:px-5 mono text-[11px] tracking-[.18em] text-white/65">{s}</div>{j<2&&<div className="hidden sm:block rule-v"/>}</React.Fragment>)}</div>{i===3&&<div className="flex flex-wrap gap-3 mt-10"><button className="bg-[#9aa4ae] text-[#0c0f13] rounded-full px-7 py-3 font-medium flex items-center gap-2">See the work <ArrowRight size={17}/></button><button className="liquid-glass rounded-full px-7 py-3 text-white flex items-center gap-2">Read the method <BookOpen size={17}/></button></div>}</div></section>)}</main>
  <footer className="bg-[#0c0f13] px-6 md:px-12 pb-10"><div className="rule w-full mb-10"/><div className="flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/40"><span>GRAVEN — DRAFTING WORKS · SHEET SET 0001</span><span>Work · Method · Studio · Contact</span></div><div className="mono text-[10px] tracking-[.3em] text-[#9aa4ae] mt-8">GRAVEN / DRAFTING WORKS</div></footer>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>)
