"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const TimelineContent = ({
  children,
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
  as = "div",
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const defaultVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: animationNum * 0.1,
      },
    },
  };

  const variants = customVariants || defaultVariants;
  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      ref={ref}
      initial="visible"
      animate="visible"
      variants={variants}
      custom={animationNum}
      className={cn(className)}
    >
      {children}
    </MotionComponent>
  );
};
