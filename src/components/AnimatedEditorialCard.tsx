import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, PropsWithChildren } from "react";

type AnimatedEditorialCardProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  style?: CSSProperties;
}>;

export function AnimatedEditorialCard({
  children,
  className = "",
  delay = 0,
  style,
}: AnimatedEditorialCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.985 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: prefersReducedMotion ? 0.35 : 0.86,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -5,
              boxShadow: "0 30px 86px rgba(15, 23, 42, 0.16)",
            }
      }
      style={style}
      className={className}
    >
      {children}
    </motion.article>
  );
}
