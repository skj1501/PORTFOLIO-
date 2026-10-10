"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string | null;
  name: string;
  index: number;
};

export const SkillDataProvider = ({
  name,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <div className="rounded-full border border-[#7042F88B] bg-[#030014]/70 px-5 py-3 text-center text-sm font-medium text-gray-100 shadow-lg shadow-[#2A0E61]/40">
        {name}
      </div>
    </motion.div>
  );
};
