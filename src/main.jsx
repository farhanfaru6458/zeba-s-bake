import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight, ChevronRight, Heart, Instagram, Menu, MessageCircle,
  Sparkles, Star, X, CakeSlice, Leaf, Clock3, Gift
} from "lucide-react";
import "./index.css";

const WHATSAPP_NUMBER = "919995962897";
const INSTAGRAM_URL = "https://www.instagram.com/zebasbake/";

const products = [
  {
    name: "Kinder Nutella Brownie Tub",
    price: 299,
    description: "Fudgy brownie layers finished with a rich Kinder-Nutella style topping.",
    image: "/images/brownie-tubs.jpg",
    tag: "Signature"
  },
  {
    name: "Assorted Gourmet Brownie Platter",
    price: 199,
    description: "A generous mix of indulgent brownie textures and chocolate toppings.",
    image: "/images/gourmet-platter.jpg",
    tag: "Best Seller"
  },
  {
    name: "Chocolate Fudge Brownie",
    price: 149,
    description: "Deep cocoa flavour, soft centre and a glossy chocolate finish.",
    image: "/images/brownie-detail.jpg",
    tag: "Classic"
  },
  {
    name: "Lotus Biscoff Cake",
    price: 499,
    description: "Creamy, caramelised biscuit flavour with a soft celebration-cake crumb.",
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=1000&q=85",
    tag: "Cake"
  },
  {
    name: "Belgian Chocolate Cake",
    price: 549,
    description: "Silky chocolate layers made for serious chocolate cravings.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476e?auto=format&fit=crop&w=1000&q=85",
    tag: "Premium"
  },
  {
    name: "Custom Celebration Cake",
    price: null,
    description: "Tell us your occasion, flavour and design — we'll discuss the details.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",
    tag: "Custom"
  }
];

const testimonials = [
  "The brownies were absolutely amazing! Rich, soft and perfectly chocolaty.",
  "Beautiful cake and even better taste. Everyone loved it!",
  "The presentation felt so premium. Such a lovely homemade treat."
];

function whatsapp(message) {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank", "noopener,noreferrer");
}
function orderOnWhatsApp(productName, price) {
  const priceText = price ? ` for ₹${price}` : "";
  whatsapp(`Hi Zebas Bake! I'd like to order ${productName}${priceText}. Please share the availability and delivery details.`);
}
function customCake() {
  whatsapp("Hi Zebas Bake! I'd like to discuss a custom cake.");
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: .65, ease: [0.22, 1, .36, 1] } }
};

function Reveal({ children, className = "", delay = 0 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: .15 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["Desserts", "desserts"], ["Cakes", "cakes"], ["About", "about"], ["Contact", "contact"]];
  return (
    <header className="fixed top-0 z-40 w-full px-4 pt-4 sm:px-6 lg:px-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-chocolate/10 bg-cream/80 px-4 py-3 shadow-sm backdrop-blur-xl sm:px-6">
        <a href="#home" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src="/images/logo.png" alt="Zebas Bake logo" className="h-10 w-10 sm:h-12 sm:w-12 rounded-[20px] object-contain" />
          <span className="script text-2xl leading-none sm:text-3xl">Zebas Bake</span>
        </a>
        <div className="hidden items-center gap-7 text-xs font-bold lg:flex">
          <a href="#home" className="transition hover:opacity-60">Home</a>
          {links.map(([label, id]) => <a key={id} href={`#${id}`} className="transition hover:opacity-60">{label}</a>)}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => whatsapp("Hi Zebas Bake! I'd like to place an order.")} className="hidden rounded-full bg-chocolate px-5 py-3 text-xs font-extrabold text-cream transition hover:-translate-y-0.5 hover:shadow-lg sm:block">
            Order on WhatsApp
          </button>
          <button aria-label="Open menu" onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full border border-chocolate/10 lg:hidden">
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>
      {open && (
        <motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} className="mx-auto mt-2 max-w-7xl rounded-3xl border border-chocolate/10 bg-cream/95 p-4 shadow-soft backdrop-blur-xl lg:hidden">
          {links.map(([label,id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block border-b border-chocolate/10 px-3 py-4 text-sm font-bold last:border-0">{label}</a>
          ))}
          <button onClick={() => whatsapp("Hi Zebas Bake! I'd like to place an order.")} className="mt-3 w-full rounded-2xl bg-chocolate px-4 py-4 text-sm font-extrabold text-cream">Order on WhatsApp</button>
        </motion.div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[820px] overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:min-h-[900px] lg:px-12">
      <div className="hero-grid absolute inset-0 opacity-50" />
      <div className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-caramel/10 blur-3xl" />
      <div className="absolute -right-24 bottom-16 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div className="max-w-xl pt-10">
          <Reveal><p className="eyebrow mb-5 text-cocoa">Homemade • Kannur • Made fresh</p></Reveal>
          <Reveal delay=".08">
            <h1 className="display-serif text-[4rem] leading-[.92] tracking-[-.045em] sm:text-[5.5rem] lg:text-[6.8rem]">
              Made with love.<br /><span className="script text-caramel">Baked to crave.</span>
            </h1>
          </Reveal>
          <Reveal delay=".14">
            <p className="mt-7 max-w-md text-base leading-7 text-chocolate/65 sm:text-lg">
              Handcrafted cakes, brownies & indulgent desserts made fresh with love.
            </p>
          </Reveal>
          <Reveal delay=".2" className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => whatsapp("Hi Zebas Bake! I'd like to place an order.")} className="group flex items-center gap-3 rounded-full bg-chocolate px-6 py-4 text-sm font-extrabold text-cream shadow-soft transition hover:-translate-y-1">
              Order on WhatsApp <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a href="#desserts" className="flex items-center gap-2 rounded-full border border-chocolate/20 px-6 py-4 text-sm font-extrabold transition hover:bg-white/50">
              Explore desserts <ChevronRight size={16}/>
            </a>
          </Reveal>
          <Reveal delay=".26" className="mt-10 flex items-center gap-6 text-xs font-bold text-chocolate/55">
            <span className="flex items-center gap-2"><Heart size={14}/> Homemade</span>
            <span className="flex items-center gap-2"><Sparkles size={14}/> Premium finish</span>
          </Reveal>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[620px]"
          initial={{opacity:0,scale:.96,y:20}} animate={{opacity:1,scale:1,y:0}}
          transition={{duration:1,ease:[.22,1,.36,1]}}
        >
          <div className="relative aspect-[.9] overflow-hidden rounded-[42%_42%_18%_18%/32%_32%_20%_20%] bg-[#ead8c5] shadow-soft">
            <img src="/images/gourmet-platter.jpg" alt="Assorted gourmet brownies from Zebas Bake" className="h-full w-full object-cover scale-[1.12]" />
            <div className="absolute inset-0 bg-gradient-to-t from-chocolate/20 via-transparent to-white/10" />
          </div>
          <motion.div animate={{y:[0,-12,0],rotate:[0,2,0]}} transition={{duration:5,repeat:Infinity,ease:"easeInOut"}} className="absolute -left-2 top-8 rounded-2xl border border-white/50 bg-cream/80 px-4 py-3 shadow-lg backdrop-blur-xl sm:-left-7">
            <p className="eyebrow text-cocoa">Today's craving</p><p className="mt-1 text-sm font-extrabold">Gourmet brownies</p>
          </motion.div>
          <motion.div animate={{y:[0,10,0],rotate:[0,-2,0]}} transition={{duration:4.5,repeat:Infinity,ease:"easeInOut"}} className="absolute -bottom-3 right-2 rounded-2xl bg-chocolate px-4 py-3 text-cream shadow-lg sm:-right-4">
            <p className="eyebrow text-gold">Made in</p><p className="mt-1 text-sm font-extrabold">Kannur</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, copy }) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="eyebrow text-caramel">{eyebrow}</p>
        <h2 className="display-serif mt-3 text-4xl leading-none tracking-tight sm:text-5xl">{title}</h2>
      </div>
      {copy && <p className="max-w-md text-sm leading-6 text-chocolate/60">{copy}</p>}
    </div>
  );
}

function ProductCard({ product, index }) {
  return (
    <motion.article whileHover={{y:-6}} transition={{duration:.25}} className="group overflow-hidden rounded-[28px] border border-chocolate/10 bg-[#fbf7f1] shadow-sm">
      <div className="relative aspect-[1.08] overflow-hidden">
        <img src={product.image} alt={product.name} loading={index > 1 ? "lazy" : "eager"} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest backdrop-blur">{product.tag}</span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-extrabold tracking-tight">{product.name}</h3>
          {product.price && <span className="shrink-0 text-sm font-extrabold">₹{product.price}</span>}
        </div>
        <p className="mt-2 text-xs leading-5 text-chocolate/55">{product.description}</p>
        <button onClick={() => product.price ? orderOnWhatsApp(product.name, product.price) : customCake()} className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-chocolate/15 px-4 py-3 text-xs font-extrabold transition hover:bg-chocolate hover:text-cream">
          {product.price ? "Order now" : "Discuss your cake"} <ArrowUpRight size={15}/>
        </button>
      </div>
    </motion.article>
  );
}

function Desserts() {
  return (
    <section id="desserts" className="px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal><SectionIntro eyebrow="The sweet shelf" title="Desserts worth sharing." copy="A small, focused menu designed around rich flavours, beautiful presentation and easy WhatsApp ordering." /></Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p,i) => <Reveal key={p.name} delay={i*.04}><ProductCard product={p} index={i}/></Reveal>)}
        </div>
      </div>
    </section>
  );
}

function BestSellers() {
  const best = products.slice(0,3);
  return (
    <section className="overflow-hidden bg-chocolate px-5 py-24 text-cream sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal><SectionIntro eyebrow="Most loved" title="The ones people crave again." copy="Your next order might already be here." /></Reveal>
        <div className="hide-scrollbar -mx-5 flex snap-x gap-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:px-0">
          {best.map((p,i) => (
            <motion.article key={p.name} whileHover={{y:-8}} className="min-w-[82vw] snap-start overflow-hidden rounded-[32px] border border-cream/10 bg-white/5 sm:min-w-0">
              <div className="relative aspect-[1.05] overflow-hidden"><img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-700 hover:scale-105"/><span className="absolute left-4 top-4 rounded-full bg-cream px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-chocolate">Best Seller</span></div>
              <div className="flex items-center justify-between gap-4 p-5"><div><h3 className="font-extrabold">{p.name}</h3><p className="mt-1 text-sm text-cream/55">₹{p.price}</p></div><button onClick={() => orderOnWhatsApp(p.name,p.price)} aria-label={`Order ${p.name}`} className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-caramel text-cream transition hover:scale-105"><ArrowUpRight size={17}/></button></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    [Heart, "Homemade With Love", "Freshly prepared with care."],
    [Leaf, "Premium Ingredients", "Rich flavours and quality ingredients."],
    [Clock3, "Made Fresh", "Prepared specially for every order."],
    [Gift, "Custom Creations", "Desserts and cakes made for special moments."]
  ];
  return (
    <section id="about" className="px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal><SectionIntro eyebrow="Why Zebas Bake" title="Small-batch feeling. Big dessert energy." /></Reveal>
        <div className="grid overflow-hidden rounded-[32px] border border-chocolate/10 bg-[#fbf7f1] sm:grid-cols-2 lg:grid-cols-4">
          {items.map(([Icon,title,copy],i) => (
            <Reveal key={title} delay={i*.05} className="border-b border-chocolate/10 p-7 sm:border-r lg:border-b-0 last:border-r-0">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-caramel/10 text-caramel"><Icon size={20}/></div>
              <h3 className="mt-7 font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-chocolate/55">{copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DessertExperience() {
  const reduce = useReducedMotion();
  return (
    <section className="px-5 py-10 sm:px-8 lg:px-12">
      <div className="relative mx-auto min-h-[560px] max-w-7xl overflow-hidden rounded-[38px] bg-[#ead8c5] px-6 py-20 sm:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,.7),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(184,121,67,.18),transparent_35%)]" />
        <div className="relative z-10 max-w-md">
          <Reveal><p className="eyebrow text-cocoa">Dessert experience</p></Reveal>
          <Reveal delay=".06"><h2 className="display-serif mt-4 text-5xl leading-[.95] tracking-tight sm:text-6xl">A little extra <span className="script text-caramel">magic.</span></h2></Reveal>
          <Reveal delay=".12"><p className="mt-6 text-sm leading-6 text-chocolate/60">Layers, textures, chocolate, crumbs and cream — designed to feel indulgent before the first bite.</p></Reveal>
        </div>
        <div className="absolute left-1/2 top-[58%] h-48 w-64 -translate-x-1/2 -translate-y-1/2 [perspective:900px] sm:left-[65%] sm:top-1/2">
          <motion.div animate={reduce ? {} : {rotateX:[8,-2,8],rotateY:[-12,12,-12],y:[0,-8,0]}} transition={{duration:7,repeat:Infinity,ease:"easeInOut"}} className="relative h-full w-full [transform-style:preserve-3d]">
            <div className="absolute inset-0 rounded-[24px] bg-[#4a2116] shadow-[0_35px_60px_rgba(59,31,23,.25)] [transform:translateZ(22px)]" />
            <div className="absolute left-4 right-4 top-5 h-9 rounded-full bg-[#6a3522] [transform:translateZ(42px)]" />
            <div className="absolute left-8 top-10 h-4 w-4 rounded-full bg-gold [transform:translateZ(54px)]" />
            <div className="absolute right-14 top-14 h-5 w-5 rounded-full bg-caramel [transform:translateZ(56px)]" />
            <div className="absolute -left-7 top-2 h-6 w-6 rounded-full bg-[#3b1f17] shadow-lg [transform:translateZ(70px)]" />
            <div className="absolute -right-4 bottom-4 h-7 w-7 rounded-full bg-[#8c5632] shadow-lg [transform:translateZ(65px)]" />
          </motion.div>
        </div>
        <div className="absolute bottom-7 right-7 flex items-center gap-2 text-xs font-bold text-chocolate/55"><Sparkles size={14}/> Lightweight 3D-inspired depth</div>
      </div>
    </section>
  );
}

function Cakes() {
  return (
    <section id="cakes" className="px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <Reveal>
          <div>
            <p className="eyebrow text-caramel">For your moments</p>
            <h2 className="display-serif mt-4 text-5xl leading-[.95] tracking-tight sm:text-6xl">Your celebration.<br/><span className="script text-caramel">Your cake.</span></h2>
            <p className="mt-7 max-w-md text-sm leading-6 text-chocolate/60">Birthday cakes, anniversary cakes, custom designs, personalised desserts and special-occasion creations.</p>
            <button onClick={customCake} className="mt-8 flex items-center gap-3 rounded-full bg-chocolate px-6 py-4 text-sm font-extrabold text-cream transition hover:-translate-y-1"><CakeSlice size={17}/> Create your cake</button>
          </div>
        </Reveal>
        <Reveal delay=".1">
          <div className="grid grid-cols-2 gap-4">
            <div className="mt-10 overflow-hidden rounded-[32px]"><img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85" alt="Celebration cake example" loading="lazy" className="aspect-[.8] h-full w-full object-cover"/></div>
            <div className="overflow-hidden rounded-[32px] bg-chocolate p-3"><img src="https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=900&q=85" alt="Chocolate cake example" loading="lazy" className="aspect-[.8] h-full w-full rounded-[24px] object-cover"/></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-[#efe4d6] px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal><SectionIntro eyebrow="Kind words" title="Sweet words from happy tables." /></Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t,i) => (
            <Reveal key={t} delay={i*.06} className="rounded-[28px] bg-cream p-7 shadow-sm">
              <div className="flex gap-1 text-gold">{[1,2,3,4,5].map(n => <Star key={n} size={15} fill="currentColor"/>)}</div>
              <p className="mt-8 display-serif text-2xl leading-tight">“{t}”</p>
              <p className="mt-7 text-xs font-extrabold uppercase tracking-widest text-chocolate/45">Zebas Bake customer</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstagramSection() {
  const imgs = ["/images/brownie-tubs.jpg","/images/gourmet-platter.jpg","/images/brownie-detail.jpg","https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80"];
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
          <Reveal><p className="eyebrow text-caramel">Follow the sweetness</p><h2 className="display-serif mt-3 text-5xl tracking-tight">@zebasbake</h2></Reveal>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex w-fit items-center gap-2 rounded-full border border-chocolate/20 px-5 py-3 text-xs font-extrabold transition hover:bg-chocolate hover:text-cream"><Instagram size={16}/> Follow on Instagram</a>
        </div>
        <div className="hide-scrollbar mt-10 flex gap-4 overflow-x-auto pb-3">
          {imgs.map((src,i)=><div key={src} className="min-w-[68vw] overflow-hidden rounded-[28px] sm:min-w-[30vw] lg:min-w-0 lg:flex-1"><img src={src} alt="Zebas Bake dessert" loading="lazy" className="aspect-square w-full object-cover transition duration-700 hover:scale-105"/></div>)}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="px-5 pb-10 pt-4 sm:px-8 lg:px-12">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[38px] bg-chocolate px-6 py-24 text-center text-cream sm:px-10">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-caramel/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative">
          <p className="eyebrow text-gold">One more thing…</p>
          <h2 className="display-serif mx-auto mt-5 max-w-3xl text-5xl leading-[.95] tracking-tight sm:text-7xl">Something sweet is waiting for you.</h2>
          <p className="mx-auto mt-7 max-w-xl text-sm leading-6 text-cream/60">Freshly baked. Beautifully made. Ready to make your day a little sweeter.</p>
          <button onClick={() => whatsapp("Hi Zebas Bake! I'd like to place an order.")} className="mt-9 inline-flex items-center gap-3 rounded-full bg-cream px-7 py-4 text-sm font-extrabold text-chocolate transition hover:-translate-y-1 hover:shadow-xl">Order on WhatsApp <MessageCircle size={17}/></button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 pb-8 pt-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-chocolate/10 pt-8 md:flex-row md:items-end md:justify-between">
        <div><div className="script text-4xl">Zebas Bake</div><p className="mt-2 text-xs text-chocolate/50">Homemade desserts & cakes made with love.</p></div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold text-chocolate/60">
          <a href="#home">Home</a><a href="#desserts">Desserts</a><a href="#cakes">Cakes</a><a href="#about">About</a><a href="#contact">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-chocolate/15"><Instagram size={16}/></a>
          <button onClick={() => whatsapp("Hi Zebas Bake! I'd like to place an order.")} aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full bg-chocolate text-cream"><MessageCircle size={16}/></button>
        </div>
      </div>
      <div className="mx-auto mt-7 flex max-w-7xl justify-between text-[10px] font-bold uppercase tracking-widest text-chocolate/35"><span>Made in Kannur</span><span>© {new Date().getFullYear()} Zebas Bake</span></div>
    </footer>
  );
}

function App() {
  return (
    <>
      <div className="grain" />
      <Navbar />
      <main>
        <Hero />
        <Desserts />
        <BestSellers />
        <WhyUs />
        <DessertExperience />
        <Cakes />
        <Testimonials />
        <InstagramSection />
        <FinalCTA />
      </main>
      <Footer />
      <button onClick={() => whatsapp("Hi Zebas Bake! I'd like to place an order.")} className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-chocolate text-cream shadow-xl ring-4 ring-cream/70 transition hover:scale-105 sm:hidden" aria-label="Order on WhatsApp">
        <MessageCircle size={23}/>
      </button>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
