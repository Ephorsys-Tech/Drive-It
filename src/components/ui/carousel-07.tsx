"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  type PanInfo,
  type MotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export interface Slide {
  image: string;
  title: string;
  description: string;
  badge: string;
  rating?: number;
  role?: string;
}

export const defaultSlides: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    title: "Abinash Nahak",
    role: "Puri & Konark Roadtrip",
    description: "Best self drive experience in Bhubaneswar! Booked Thar for our trip to Puri Marine Drive. Car was spotless.",
    badge: "5.0 ★ Verified",
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    title: "Amisha Das",
    role: "Corporate Executive",
    description: "Rented the Venue for a week in Patia. Car smelled brand new, full tank handover, and instant WhatsApp support!",
    badge: "5.0 ★ Business",
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    title: "Satyaprakash Jena",
    role: "Family Outing to Chilika",
    description: "Took the Scorpio-N with 6 family members. Powerful diesel engine, great mileage, and zero hidden charges at return.",
    badge: "5.0 ★ Family",
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    title: "Rajendra Prasad",
    role: "Event & Airport Pickup",
    description: "Needed a car urgently for wedding guests. Provided Maruti Ertiga on doorstep delivery within 45 minutes!",
    badge: "5.0 ★ Airport",
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
    title: "Anshuman Sinha",
    role: "Tech Lead, Infocity",
    description: "Smooth booking flow, zero deposit hassles, and very polite delivery agent. Returning was painless. 10/10 recommended.",
    badge: "5.0 ★ Verified",
    rating: 5,
  },
];

interface CarouselConfig {
  distanceDivisor: number;
  velocityDivisor: number;
  sensitivity: number;
  xMultiplier: number;
  yMultiplier: number;
  rotationMultiplier: number;
  scaleReduction: number;
}

const getCarouselConfig = (width: number): CarouselConfig => {
  if (width < 640) {
    return {
      distanceDivisor: 120,
      velocityDivisor: 500,
      sensitivity: 180,
      xMultiplier: 90,
      yMultiplier: 20,
      rotationMultiplier: 8,
      scaleReduction: 0.06,
    };
  }
  if (width < 1024) {
    return {
      distanceDivisor: 160,
      velocityDivisor: 650,
      sensitivity: 220,
      xMultiplier: 130,
      yMultiplier: 30,
      rotationMultiplier: 10,
      scaleReduction: 0.09,
    };
  }
  return {
    distanceDivisor: 200,
    velocityDivisor: 800,
    sensitivity: 250,
    xMultiplier: 170,
    yMultiplier: 40,
    rotationMultiplier: 12,
    scaleReduction: 0.12,
  };
};

export interface CarouselStackedProps {
  slides?: Slide[];
  className?: string;
}

export const CarouselStacked = ({ slides = defaultSlides, className }: CarouselStackedProps) => {
  const scrollProgress = useMotionValue(0);
  const startProgress = React.useRef(0);
  const [windowWidth, setWindowWidth] = React.useState(0);

  const total = slides.length;

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const config = React.useMemo(
    () => getCarouselConfig(windowWidth),
    [windowWidth],
  );

  const handleDragStart = () => {
    startProgress.current = scrollProgress.get();
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const dragDistance = info.offset.x;
    const velocity = info.velocity.x;

    const distanceShift = -dragDistance / config.distanceDivisor;
    const velocityShift = -velocity / config.velocityDivisor;

    let totalShift = Math.round(distanceShift + velocityShift);
    totalShift = Math.max(-3, Math.min(3, totalShift));

    const target = Math.round(startProgress.current) + totalShift;

    animate(scrollProgress, target, {
      type: "spring",
      stiffness: 200,
      damping: 30,
      mass: 1,
    });
  };

  return (
    <div className={cn("flex flex-col items-center justify-center w-full py-6 overflow-hidden select-none", className)}>
      <div className="relative w-full max-w-6xl h-84 sm:h-112 lg:h-128 flex items-center justify-center">
        {/* Transparent Drag Surface */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={handleDragStart}
          onDrag={(_, info) => {
            const delta = -info.delta.x / config.sensitivity;
            scrollProgress.set(scrollProgress.get() + delta);
          }}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 z-30 cursor-grab active:cursor-grabbing"
        />

        {slides.map((slide, i) => (
          <Card
            key={i}
            slide={slide}
            index={i}
            total={total}
            progress={scrollProgress}
            config={config}
          />
        ))}
      </div>

      {/* Swipe instruction helper */}
      <div className="mt-4 text-xs font-semibold text-slate-400 uppercase tracking-widest flex items-center gap-2">
        <span>← Drag to explore customer stories →</span>
      </div>
    </div>
  );
};

interface CardProps {
  slide: Slide;
  index: number;
  total: number;
  progress: MotionValue<number>;
  config: CarouselConfig;
}

const Card = ({ slide, index, total, progress, config }: CardProps) => {
  const offset = useTransform(progress, (p) => {
    let diff = (index - p) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  });

  const x = useTransform(offset, (o) => o * config.xMultiplier);
  const rotate = useTransform(offset, (o) => {
    const absO = Math.abs(o);
    if (absO < 0.05) return 0;
    return o * config.rotationMultiplier;
  });
  const y = useTransform(offset, (o) => {
    const absO = Math.abs(o);
    if (absO < 0.05) return 0;
    return absO * config.yMultiplier;
  });
  const scale = useTransform(
    offset,
    (o) => 1 - Math.abs(o) * config.scaleReduction,
  );
  const opacity = useTransform(
    offset,
    [-total / 2, -total / 2 + 0.5, 0, total / 2 - 0.5, total / 2],
    [0, 1, 1, 1, 0],
  );
  const zIndex = useTransform(offset, (o) =>
    Math.round(20 - Math.abs(o) * 2),
  );

  return (
    <motion.div
      style={{
        x,
        rotate,
        y,
        scale,
        opacity,
        zIndex,
      }}
      className={cn(
        "absolute rounded-3xl overflow-hidden bg-slate-900 shadow-2xl group pointer-events-none border border-white/10",
        "w-48 h-64 sm:w-60 sm:h-84 lg:w-72 lg:h-104",
      )}
    >
      <img
        src={slide.image}
        alt={slide.title}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-700 group-hover:scale-110"
      />

      <motion.div
        style={{
          opacity: useTransform(
            offset,
            [-2, -0.5, 0, 0.5, 2],
            [0.6, 0.25, 0, 0.25, 0.6],
          ),
        }}
        className="absolute inset-0 bg-black pointer-events-none"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

      {/* Badge Top Right */}
      <Badge className="absolute top-3 right-3 sm:top-5 sm:right-5 px-2.5 sm:px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-900 shadow-md">
        {slide.badge}
      </Badge>

      {/* Content Bottom */}
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white text-left">
        {/* Star Rating */}
        <motion.div
          style={{
            opacity: useTransform(offset, [-0.5, 0, 0.5], [0, 1, 0]),
          }}
          className="flex items-center gap-1 mb-1.5"
        >
          {[...Array(slide.rating || 5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
        </motion.div>

        <motion.p
          style={{
            opacity: useTransform(offset, [-0.5, 0, 0.5], [0, 1, 0]),
          }}
          className="text-base sm:text-xl font-black leading-tight mb-1 drop-shadow-md text-white"
        >
          {slide.title}
        </motion.p>

        {slide.role && (
          <motion.p
            style={{
              opacity: useTransform(offset, [-0.5, 0, 0.5], [0, 1, 0]),
            }}
            className="text-[11px] font-semibold text-rose-300 mb-2 drop-shadow-xs"
          >
            {slide.role}
          </motion.p>
        )}

        <motion.p
          style={{
            opacity: useTransform(offset, [-0.5, 0, 0.5], [0, 1, 0]),
          }}
          className="text-xs text-slate-200 line-clamp-3 leading-relaxed font-normal drop-shadow-xs"
        >
          "{slide.description}"
        </motion.p>
      </div>
    </motion.div>
  );
};

export default CarouselStacked;
