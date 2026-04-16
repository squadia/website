"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sparkles as SparklesComp } from "@/components/ui/sparkles";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const plans = [
  {
    name: "Diagnostic & Roadmap",
    description: "Idéal pour identifier vos goulots d'étranglement et prioriser vos leviers IA.",
    price: 2500,
    yearlyPrice: 2500, // Fixed price for these services
    buttonText: "Démarrer le diagnostic",
    buttonVariant: "outline",
    includes: [
      "Inclus dans l'audit :",
      "Audit des processus sales/marketing",
      "Analyse de la stack technologique",
      "Plan d'action chiffré (ROI)",
      "Roadmap d'exécution à 90 jours",
    ],
  },
  {
    name: "Système Revenue IA",
    description: "Nous construisons et pilotons votre machine de génération de revenus IA.",
    price: 0, // Placeholder for "Sur Devis"
    yearlyPrice: 0,
    isQuote: true,
    buttonText: "Planifier l'audit gratuit",
    buttonVariant: "default",
    popular: true,
    includes: [
      "Accompagnement continu :",
      "Installation du moteur de leads",
      "Automatisation des workflows",
      "Formation des équipes SDR/AE",
      "Reporting & Optimisation mensuelle",
    ],
  },
  {
    name: "Formation Equipes",
    description: "Formations ultra-pratiques pour rendre vos équipes autonomes sur l'IA.",
    price: 1200,
    yearlyPrice: 1200,
    isPerPerson: true,
    buttonText: "Voir le catalogue",
    buttonVariant: "outline",
    includes: [
      "Programme expert :",
      "Sessions de 1 à 2 jours",
      "Ateliers sur vos propres comptes",
      "Support post-formation 30j",
      "Certifications Squadia",
    ],
  },
];

const PricingSwitch = ({ onSwitch }) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-10 mx-auto flex w-fit rounded-full bg-neutral-900 border border-gray-700 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "0" ? "text-white" : "text-gray-200"
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full border-4 shadow-sm shadow-blue-600 border-blue-600 bg-gradient-to-t from-blue-500 to-blue-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Standard</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "1" ? "text-white" : "text-gray-200"
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full border-4 shadow-sm shadow-blue-600 border-blue-600 bg-gradient-to-t from-blue-500 to-blue-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">Sur-mesure</span>
        </button>
      </div>
    </div>
  );
};

export default function PricingSection6() {
  console.log("PricingSection6 rendering");
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef(null);

  const revealVariants = {
    visible: (i) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <div
      className="min-h-screen mx-auto relative bg-transparent overflow-x-hidden py-24"
      ref={pricingRef}
    >
      <TimelineContent
        animationNum={4}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute top-0 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px]"></div>
        {/* <SparklesComp
          density={800}
          direction="bottom"
          speed={1}
          color="#44CCFF"
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        /> */}
      </TimelineContent>

      <article className="text-center mb-12 pt-12 max-w-3xl mx-auto space-y-4 relative z-50">
        <h2 className="text-5xl font-bold text-white mb-6">
          Investissez dans votre exécution.
          {/* <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0,
            }}
          >
            Investissez dans votre exécution.
          </VerticalCutReveal> */}
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="text-gray-400 text-lg"
        >
          Des tarifs clairs indexés sur la valeur et l'impact business.
          Pas de frais cachés, pas de théorie inutile.
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <PricingSwitch onSwitch={togglePricingPeriod} />
        </TimelineContent>
      </article>

      <div
        className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(37, 99, 235, 0.15) 0%, transparent 70%)`,
          opacity: 0.6,
        }}
      />

      <div className="grid md:grid-cols-3 max-w-6xl gap-8 py-12 px-6 mx-auto relative z-10">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={2 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={cn(
                "relative text-white border-neutral-800 bg-neutral-950/50 backdrop-blur-xl h-full flex flex-col transition-all duration-300 hover:border-blue-500/50",
                plan.popular && "border-blue-500/50 shadow-[0px_-13px_100px_0px_rgba(37,99,235,0.1)] scale-105 z-20"
              )}
            >
              <CardHeader className="text-left p-6">
                <h3 style={{ fontSize: '1.8rem', margin: '0 0 1rem 0', fontWeight: 'bold' }}>{plan.name}</h3>
                
                <p style={{ fontSize: '0.9rem', color: '#9CA3AF', marginBottom: '2rem', minHeight: '3rem' }}>
                  {plan.description}
                </p>
                
                <div className="price-container" style={{ marginBottom: '1rem' }}>
                  {plan.isQuote ? (
                    <>
                      <div className="price" style={{ fontSize: '2.2rem', fontWeight: 700 }}>Sur mesure</div>
                      <div style={{ fontSize: '0.8rem', color: '#9CA3AF', marginTop: '0.5rem' }}>Périmètre ajusté avant démarrage.</div>
                    </>
                  ) : (
                    <>
                      <div className="price" style={{ fontSize: '2.2rem', fontWeight: 700 }}>
                        {isYearly ? plan.yearlyPrice : plan.price} € {plan.isPerPerson ? '/ pers' : 'HT'}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#9CA3AF', marginTop: '0.5rem' }}>Périmètre ajusté avant démarrage.</div>
                    </>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-0 flex-grow flex flex-col">
                <button
                  className={cn(
                    "w-full mb-8 p-4 text-sm font-bold rounded-lg transition-all active:scale-95",
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-900/40 text-white"
                      : "bg-white/5 hover:bg-white/10 border border-white/10 text-white"
                  )}
                >
                  {plan.buttonText}
                </button>

                <div className="space-y-4 pt-6 border-t border-neutral-800 flex-grow">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-blue-500">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-3">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-1.5 ring-4 ring-blue-500/20" />
                        <span className="text-sm text-gray-300 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </div>
  );
}
