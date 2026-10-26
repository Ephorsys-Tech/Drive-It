// components/ui/gradient-card.tsx

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

// Define variants for the card's overall style using cva
const cardVariants = cva(
  "relative flex flex-col justify-between h-full w-full overflow-hidden rounded-3xl p-8 shadow-sm transition-all duration-300 hover:shadow-xl border border-white/60",
  {
    variants: {
      gradient: {
        orange: "bg-gradient-to-br from-orange-100 via-amber-50 to-amber-200/50",
        gray: "bg-gradient-to-br from-slate-100 via-zinc-50 to-slate-200/50",
        purple: "bg-gradient-to-br from-purple-100 via-indigo-50 to-indigo-200/50",
        green: "bg-gradient-to-br from-emerald-100 via-teal-50 to-teal-200/50",
        red: "bg-gradient-to-br from-red-100 via-rose-50 to-rose-200/50",
        blue: "bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100/50",
      },
    },
    defaultVariants: {
      gradient: "gray",
    },
  }
);

// Define the props interface for type safety and reusability
export interface GradientCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  badgeText: string;
  badgeColor: string; // Expecting a hex color string, e.g., "#FF5733"
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  imageUrl: string;
}

const GradientCard = React.forwardRef<HTMLDivElement, GradientCardProps>(
  ({ className, gradient, badgeText, badgeColor, title, description, ctaText, ctaHref, imageUrl, ...props }, ref) => {
    
    // Animation variants for framer-motion
    const cardAnimation = {
      rest: { scale: 1, y: 0 },
      hover: { scale: 1.02, y: -4 },
    };

    const imageAnimation = {
      rest: { scale: 1, rotate: 0 },
      hover: { scale: 1.08, rotate: 2 },
    };

    return (
      <motion.div
        variants={cardAnimation}
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="h-full"
        ref={ref}
      >
        <div
          className={cn(cardVariants({ gradient }), className)}
          {...props}
        >
          {/* Decorative background image with animation */}
          <motion.img
            src={imageUrl}
            alt={`${title} background graphic`}
            variants={imageAnimation}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="absolute -right-8 -bottom-8 w-3/5 sm:w-1/2 max-h-48 object-contain opacity-85 pointer-events-none drop-shadow-lg"
          />

          {/* Card Content */}
          <div className="z-10 flex flex-col h-full relative">
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-3.5 py-1 text-xs font-bold text-slate-800 backdrop-blur-md w-fit border border-white/80 shadow-xs">
              <span 
                className="h-2 w-2 rounded-full" 
                style={{ backgroundColor: badgeColor }}
              />
              {badgeText}
            </div>

            {/* Title and Description */}
            <div className="flex-grow">
              <h3 className="text-2xl font-black text-slate-900 mb-2.5 tracking-tight">{title}</h3>
              <p className="text-slate-600 max-w-xs text-sm leading-relaxed font-medium">{description}</p>
            </div>
            
            {/* Call to Action Link */}
            <a
              href={ctaHref}
              className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-red-600 transition-colors"
            >
              <span>{ctaText}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </motion.div>
    );
  }
);
GradientCard.displayName = "GradientCard";

export { GradientCard, cardVariants };
