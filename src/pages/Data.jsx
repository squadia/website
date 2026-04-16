import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Database, Target, TrendingUp,
  ChevronDown, ChevronUp, Check, Search, Rocket, Shield
} from 'lucide-react';

import fondData from '../assets/images/data/data.jpeg';
import fondDataClean from '../assets/images/dataclean/data-clean.jpeg';
import fondDataSeg from '../assets/images/dataseg/data-seg.jpeg';
import fondDataLead from '../assets/images/datalead/datalead.jpeg';
import fondFormation from '../assets/images/formationB2B.png';
import fondAutomatisation from '../assets/images/automatisation/automatisationbg.jpeg';

const DataCSS = `
@keyframes pulseDotData {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37,99,235,0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(37,99,235,0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37,99,235,0); }
}
`;

export default function Data() {
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    document.title = "Data B2B — Nettoyage, segmentation et leads — Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Squadia nettoie votre CRM, structure votre segmentation ICP et construit vos bases de prospection B2B. Données fiables et exploitables en moins de 30 jours.");
    }
  }, []);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 600;
    let start = null;
    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      const easing = -(Math.cos(Math.PI * percentage) - 1) / 2;
      window.scrollTo(0, startPosition + distance * easing);
      if (progress < duration) window.requestAnimationFrame(step);
    });
  };

  return (
    <>
      <div style={{ backgroundColor: '#0A0A1A', color: '#F9FAFB', minHeight: '100vh', paddingBottom: '4rem', fontFamily: '"Open Sans", Arial, sans-serif' }}>

        {/* SECTION 1 — HERO */}
        <section style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
          <style>{DataCSS}</style>

          {/* BACKGROUND */}
          <img src={fondData} alt="" style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center', pointerEvents: 'none', zIndex: 0
          }} />
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, background: 'rgba(10,10,26,0.40)' }} />
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2,
            background: 'linear-gradient(105deg, rgba(10,10,26,0.97) 0%, rgba(10,10,26,0.75) 35%, rgba(10,10,26,0.40) 60%, transparent 100%)',
          }} />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '140px', pointerEvents: 'none', zIndex: 2,
            background: 'linear-gradient(to bottom, transparent, #0A0A1A)',
          }} />

          {/* TEXT BLOCK */}
          <div style={{ position: 'relative', zIndex: 4, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '8%' }}>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, color: '#F9FAFB', marginBottom: '1.5rem', maxWidth: '750px' }}>
              Votre CRM ne ment pas.<br />
              Il reflète ce qu'on y a mis.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.78)', maxWidth: '600px', marginBottom: '3rem', lineHeight: 1.6 }}>
              Un CRM mal structuré, c'est des commerciaux qui ne s'en servent pas. Avant d'automatiser ou de prospecter, il faut que la base soit propre, segmentée et exploitable.
            </motion.p>
            <div style={{ display: 'flex', gap: '1.2rem' }}>
              <Link to="/contact" style={{ backgroundColor: '#2563EB', color: '#FFFFFF', padding: '1.1rem 2.2rem', borderRadius: '0.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '1.1rem' }}>
                RDV avec un expert
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 2 — CE QUE VOUS OBTENEZ CONCRÈTEMENT */}
        <section id="offres" style={{ padding: '10rem 2rem', backgroundColor: '#050510', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', right: '10%', transform: 'translateY(-50%)', width: '550px', height: '550px', background: 'radial-gradient(circle, rgba(37,99,235,0.65) 0%, transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, textAlign: 'center', marginBottom: '4rem', color: '#fff' }}>Ce que vous obtenez concrètement.</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              {[
                { icon: <Database size={22} color="#44CCFF" />, title: 'Base CRM nettoyée et fiabilisée', desc: "Suppression des doublons, normalisation des champs, complétion des données manquantes. Vos équipes peuvent enfin faire confiance à ce qu'elles ont sous les yeux." },
                { icon: <Target size={22} color="#44CCFF" />, title: 'Segmentation ICP opérationnelle', desc: "Définition des profils clients idéaux, scoring et variables de priorisation. Vos commerciaux savent exactement sur quels comptes concentrer leur énergie." },
                { icon: <Rocket size={22} color="#44CCFF" />, title: 'Pipeline de prospects qualifiés', desc: "Construction de bases de contacts sur-mesure enrichies multicanal et intégrées directement dans votre CRM. Prêt à prospecter dès le premier jour." },
                { icon: <Shield size={22} color="#44CCFF" />, title: 'Livrables actionnables sous 30 jours', desc: "Rapport d'audit, fichier nettoyé, segmentation activable et intégration CRM. Pas de PowerPoint : des données prêtes à l'emploi, dans vos outils." },
              ].map((item, i) => (
                <div key={i} style={{ padding: '2.5rem', background: 'linear-gradient(135deg, #0d1b35 0%, #111f3a 60%, #0a1628 100%)', border: '1px solid rgba(68,204,255,0.12)', borderRadius: '16px', transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(68,204,255,0.35)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,99,235,0.2)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(68,204,255,0.12)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)'; }}
                >
                  <div style={{ marginBottom: '1.5rem', width: '44px', height: '44px', background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(68,204,255,0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.9rem', lineHeight: 1.4, color: '#F9FAFB' }}>{item.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.7, fontSize: '1rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3A — DATA CLEAN (image gauche, texte droite) */}
        <section style={{ padding: '8rem 2rem', backgroundColor: '#0A0A1A' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}>
              <img src={fondDataClean} alt="Data Clean — Nettoyer votre base CRM" style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#44CCFF', marginBottom: '1rem' }}>Data Clean</p>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '1.25rem', lineHeight: 1.3 }}>Nettoyer et fiabiliser votre base.</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '2rem' }}>
                Le CRM a été rempli sans règle commune. Résultat : personne ne lui fait confiance et les commerciaux gardent leurs vrais contacts dans Excel. On repart de zéro sur les bonnes bases.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <div style={{ borderLeft: '3px solid #44CCFF', paddingLeft: '1.25rem' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.35rem' }}>Dédoublonnage et normalisation</div>
                  <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Suppression des doublons, harmonisation des formats, complétion des champs manquants.</div>
                </div>
                <div style={{ borderLeft: '3px solid #44CCFF', paddingLeft: '1.25rem' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.35rem' }}>Rapport d'audit complet</div>
                  <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Livraison d'un fichier propre et d'un rapport détaillant l'état de départ et les actions réalisées.</div>
                </div>
              </div>
              <Link to="/data/data-clean" style={{ color: '#44CCFF', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}>
                Découvrir Data Clean <ChevronDown size={14} style={{ transform: 'rotate(-90deg)' }} />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 3B — DATA SEG (texte gauche, image droite) */}
        <section style={{ padding: '8rem 2rem', backgroundColor: '#050510' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#44CCFF', marginBottom: '1rem' }}>Data Seg</p>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '1.25rem', lineHeight: 1.3 }}>Identifier vos meilleurs segments.</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '2rem' }}>
                Les contacts sont là mais il n'y a pas de segmentation utile. Tout le monde est prioritaire, donc personne ne l'est vraiment. On structure la logique qui manque.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <div style={{ borderLeft: '3px solid #44CCFF', paddingLeft: '1.25rem' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.35rem' }}>Définition de l'ICP</div>
                  <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Identification des profils clients idéaux à partir de vos données historiques et de votre stratégie commerciale.</div>
                </div>
                <div style={{ borderLeft: '3px solid #44CCFF', paddingLeft: '1.25rem' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.35rem' }}>Scoring et priorisation</div>
                  <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Variables de scoring activables dans votre CRM pour que chaque commercial sache exactement où concentrer son temps.</div>
                </div>
              </div>
              <Link to="/data/data-seg" style={{ color: '#44CCFF', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}>
                Découvrir Data Seg <ChevronDown size={14} style={{ transform: 'rotate(-90deg)' }} />
              </Link>
            </div>
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}>
              <img src={fondDataSeg} alt="Data Seg — Segmenter votre base CRM" style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </section>

        {/* SECTION 3C — DATA LEAD (image gauche, texte droite) */}
        <section style={{ padding: '8rem 2rem', backgroundColor: '#0A0A1A' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}>
              <img src={fondDataLead} alt="Data Lead — Construire votre pipeline B2B" style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#44CCFF', marginBottom: '1rem' }}>Data Lead</p>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '1.25rem', lineHeight: 1.3 }}>Bâtir votre pipeline de prospection.</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '2rem' }}>
                Un contact sur trois change de poste tous les 18 mois. Sans enrichissement actif, vous prospectez des adresses qui n'existent plus. On construit la base que vous n'avez pas encore.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <div style={{ borderLeft: '3px solid #44CCFF', paddingLeft: '1.25rem' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.35rem' }}>Construction de bases sur-mesure</div>
                  <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Ciblage précis selon votre ICP, enrichissement multicanal et vérification de la qualité des contacts.</div>
                </div>
                <div style={{ borderLeft: '3px solid #44CCFF', paddingLeft: '1.25rem' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.35rem' }}>Intégration directe dans votre CRM</div>
                  <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Les contacts sont livrés propres, segmentés et prêts à être activés dans vos séquences de prospection.</div>
                </div>
              </div>
              <Link to="/data/data-lead" style={{ color: '#44CCFF', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}>
                Découvrir Data Lead <ChevronDown size={14} style={{ transform: 'rotate(-90deg)' }} />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 4 — ET ENSUITE ? */}
        <section style={{ padding: '10rem 2rem', backgroundColor: '#050510' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '4rem', textAlign: 'center', color: '#F9FAFB' }}>
              Et ensuite ?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>

              <div style={{ backgroundColor: '#11111E', border: '1px solid #1A1A2E', borderRadius: '1rem', overflow: 'hidden' }}>
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img src={fondFormation} alt="Formation IA" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,26,0.2), rgba(17,17,30,0.85))' }} />
                </div>
                <div style={{ padding: '2.5rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.2rem', color: '#F9FAFB' }}>Vos équipes sont-elles prêtes ?</h3>
                  <p style={{ color: 'rgba(255,255,255,0.45)', marginBottom: '2.5rem', lineHeight: 1.7 }}>Formez vos commerciaux et marketing managers à exploiter chaque opportunité avec les bons outils IA.</p>
                  <Link to="/formation-ia" style={{ backgroundColor: 'rgba(37,99,235,0.1)', color: '#3B82F6', padding: '0.8rem 1.5rem', borderRadius: '0.5rem', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    Voir l'offre Formation <ChevronDown size={16} style={{ transform: 'rotate(-90deg)' }} />
                  </Link>
                </div>
              </div>

              <div style={{ backgroundColor: '#11111E', border: '1px solid #1A1A2E', borderRadius: '1rem', overflow: 'hidden' }}>
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img src={fondAutomatisation} alt="Automatisation IA" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,26,0.2), rgba(17,17,30,0.85))' }} />
                </div>
                <div style={{ padding: '2.5rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.2rem', color: '#F9FAFB' }}>Automatisez le superflu.</h3>
                  <p style={{ color: 'rgba(255,255,255,0.45)', marginBottom: '2.5rem', lineHeight: 1.7 }}>Une base structurée permet d'automatiser sans créer de chaos. Zéro doublon, zéro lead perdu.</p>
                  <Link to="/automatisation-ia" style={{ backgroundColor: 'rgba(37,99,235,0.1)', color: '#3B82F6', padding: '0.8rem 1.5rem', borderRadius: '0.5rem', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    Voir l'offre Automatisation <ChevronDown size={16} style={{ transform: 'rotate(-90deg)' }} />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 5 — FAQ */}
        <section id="faq" style={{ padding: '10rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '4rem', textAlign: 'center', color: '#F9FAFB' }}>
            Questions fréquentes.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {[
              { q: 'Dans quel état doit être mon CRM pour démarrer ?', a: "Peu importe l'état. C'est précisément l'objet du cadrage initial : comprendre ce qu'on a, ce qui manque et ce qu'on veut obtenir. On a travaillé sur des bases de quelques centaines de contacts comme sur des bases de plusieurs milliers." },
              { q: "Est-ce qu'on touche à notre CRM directement ?", a: "Ça dépend du périmètre défini en cadrage. Dans certains cas on travaille sur une extraction, on livre le fichier nettoyé et vous réintégrez. Dans d'autres, on intervient directement dans l'outil avec les accès que vous nous donnez." },
              { q: "Qui est propriétaire des données après la mission ?", a: "Vous. Toujours. Squadia est prestataire, pas propriétaire. Pour les outils d'enrichissement externes, on privilégie que vous ouvriez votre propre compte — vous gardez ainsi le contrôle total de vos données et de vos crédits." },
              { q: "Est-ce qu'un stagiaire ne pourrait pas faire ce travail ?", a: "La vraie difficulté n'est pas le nettoyage lui-même — c'est savoir quoi normaliser, comment segmenter pour que ça serve vraiment les équipes, et quelles variables créer pour que la base soit exploitable. C'est là que l'expérience terrain fait la différence." },
              { q: "Combien de temps prend une mission Data ?", a: "Data Clean : 1 à 2 semaines. Data Seg : 2 à 4 semaines. Data Lead : 3 à 6 semaines. Les délais sont cadrés précisément avant chaque démarrage." }
            ].map((faq, idx) => (
              <div key={idx} style={{ backgroundColor: '#11111E', border: '1px solid #1A1A2E', borderRadius: '0.75rem', overflow: 'hidden' }}>
                <button
                  onClick={() => toggleFAQ(idx)}
                  style={{ width: '100%', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', color: '#F9FAFB', fontSize: '1.1rem', fontWeight: 600, textAlign: 'left' }}
                >
                  {faq.q}
                  {openFAQ === idx ? <ChevronUp size={20} color="#2563EB" /> : <ChevronDown size={20} color="#9CA3AF" />}
                </button>
                {openFAQ === idx && (
                  <div style={{ padding: '0 1.5rem 1.5rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6 — CTA FINAL */}
        <section id="calendrier" style={{ padding: '10rem 2rem', textAlign: 'center', backgroundColor: '#0A0A1A' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '3rem', color: '#F9FAFB', maxWidth: '850px', marginInline: 'auto' }}>
            Prêt à faire de votre base un vrai levier de croissance ?
          </h2>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ backgroundColor: '#2563EB', color: '#FFFFFF', padding: '1.2rem 3rem', borderRadius: '0.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '1.15rem' }}>
              RDV avec un expert
            </Link>
            <Link to="/tarifs" style={{ color: '#2563EB', border: '1px solid #2563EB', padding: '1.2rem 3rem', borderRadius: '0.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '1.15rem' }}>
              Découvrir nos offres
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
