import React from "react";
import { Button } from "./button";
import { motion } from "framer-motion";

export const Feature1 = ({
  title = "Boosté par IA, Vérifié par humains",
  description = "Recevez un flux de données des contacts les plus enclins à vous acheter (changement de poste, embauche spécifique, business news...)",
  children,
  buttonPrimary = {
    label: "Demander une démo",
    href: "#calendrier",
  },
  buttonSecondary = {
    label: "Voir nos cas d'usage",
    href: "/cas-usage",
  },
}) => {
  return (
    <section className="py-32 bg-[#050510]">
      <div className="container mx-auto px-8 max-w-[1200px]">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Animated Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "0px" }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <h1 className="my-6 mt-0 text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-balance text-[#F9FAFB] leading-[1.15] tracking-tight">
              {title}
            </h1>
            <p className="mb-10 max-w-xl text-[#9CA3AF] lg:text-[1.1rem] leading-relaxed">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a href={buttonPrimary.href}>
                  {buttonPrimary.label}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-[rgba(255,255,255,0.2)] text-white hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.4)]" asChild>
                <a href={buttonSecondary.href}>
                  {buttonSecondary.label}
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Animated Image/Component Block (delayed) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "0px" }}
            className="flex justify-center lg:justify-end"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
