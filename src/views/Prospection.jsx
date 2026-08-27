'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Send, Phone, Users, BarChart3,
  ChevronDown, ChevronUp
} from 'lucide-react';

const teamSquadia = '/assets/images/notremission/team-squadia.png';
const fondProspection = '/assets/images/campagne/prospectionteam.png';
const imgCampagne = '/assets/images/campagne/campagne.png';
const imgColdCall = '/assets/images/campagne/prospectionteam.png';
const imgHybride = '/assets/images/hubspotcrm.jpeg';

export default function Prospection() {
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    document.title = "Prospection B2B : campagnes multicanale et appels sortants : Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Squadia lance vos campagnes de prospection B2B : séquences email et LinkedIn avec Repliik, appels sortants par un commercial senior, ou les deux combinés.");
    }
  }, []);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <div style={{ backgroundColor: '#0A0A1A', color: '#F9FAFB', minHeight: '100vh', paddingBottom: '4rem', fontFamily: '"Open Sans", Arial, sans-serif' }}>

        {/* SECTION 1 : HERO */}
        <section style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
          <img src={fondProspection} alt="" style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center top', pointerEvents: 'none', zIndex: 0
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

          <div style={{ position: 'relative', zIndex: 4, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '8%' }}>
            <p style={{ color: '#44CCFF', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1.2rem', letterSpacing: '0.12em', fontSize: '0.9rem' }}>Nos Services</p>
            <h1 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', fontWeight: 700, lineHeight: 1.1, color: '#F9FAFB', marginBottom: '1.5rem', maxWidth: '750px' }}>
              Des rendez-vous qualifiés,<br />
              pas juste des leads.
            </h1>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#44CCFF' }}>8 à 12</span>
              <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', maxWidth: '300px', lineHeight: 1.3 }}>points de contact en moyenne nécessaires pour obtenir un premier rendez-vous avec un décideur</span>
            </div>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.78)', maxWidth: '600px', marginBottom: '3rem', lineHeight: 1.6 }}>
              Email, LinkedIn, téléphone : nous activons vos contacts sur les canaux qui font réagir un décideur, jusqu'au rendez-vous qualifié dans votre CRM.
            </p>
            <div style={{ display: 'flex', gap: '1.2rem' }}>
              <Link href="/contact" style={{ backgroundColor: '#44CCFF', color: '#060612', padding: '1.1rem 2.2rem', borderRadius: '0.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '1.1rem' }}>
                RDV avec un expert
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 2 : CE QUE VOUS OBTENEZ CONCRÈTEMENT */}
        <section style={{ padding: '10rem 2rem', backgroundColor: '#050510', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', right: '10%', transform: 'translateY(-50%)', width: '550px', height: '550px', background: 'radial-gradient(circle, rgba(37,99,235,0.65) 0%, transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, textAlign: 'center', marginBottom: '4rem', color: '#fff' }}>Ce que vous obtenez concrètement.</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              {[
                { icon: <Send size={22} color="#44CCFF" />, title: 'Séquences email et LinkedIn personnalisées', desc: "Chaque message s'appuie sur un signal réel : recrutement, levée de fonds, changement d'outil. Envoyées et suivies avec Repliik, notre outil maison." },
                { icon: <Phone size={22} color="#44CCFF" />, title: 'Appels passés par un commercial senior', desc: "Un profil avec plus de dix ans d'expérience en prospection directe B2B, avec un script co-construit avec vous avant le premier appel." },
                { icon: <Users size={22} color="#44CCFF" />, title: 'Rendez-vous qualifiés dans votre CRM', desc: "Bon interlocuteur, intérêt exprimé, créneau confirmé : la définition du rendez-vous qualifié est écrite avec vous avant de démarrer." },
                { icon: <BarChart3 size={22} color="#44CCFF" />, title: 'Reporting hebdomadaire', desc: "Un point chaque semaine sur ce qui fonctionne et ce qu'on ajuste. Pas d'engagement figé sur un chiffre : un pilotage vivant de la campagne." },
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

        {/* SECTION 3A : CAMPAGNE MULTICANALE (image gauche, texte droite) */}
        <section style={{ padding: '8rem 2rem', backgroundColor: '#0A0A1A' }}>
          <div className="prospection-alt-row" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}>
              <img src={imgCampagne} alt="Campagne multicanale : séquences email et LinkedIn" style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#44CCFF', marginBottom: '1rem' }}>Campagne multicanale</p>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#F9FAFB', marginBottom: '1.25rem', lineHeight: 1.3 }}>Des séquences qui parlent à chaque contact.</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '2rem' }}>
                Un email générique n'émeut personne. On construit des séquences email et LinkedIn personnalisées contact par contact, à partir d'un signal réel, et on traite les réponses jusqu'au rendez-vous.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <div style={{ borderLeft: '3px solid #44CCFF', paddingLeft: '1.25rem' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.35rem' }}>Personnalisation contact par contact</div>
                  <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Chaque message s'appuie sur l'actualité de l'entreprise contactée : recrutement, nomination, projet d'investissement.</div>
                </div>
                <div style={{ borderLeft: '3px solid #44CCFF', paddingLeft: '1.25rem' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.35rem' }}>Repliik, notre outil d'envoi</div>
                  <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Import des contacts, enrichissement, séquences multicanale et réponses LinkedIn automatisées, dans un seul flux.</div>
                </div>
              </div>
              <Link href="/prospection/campagne" style={{ color: '#44CCFF', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}>
                Découvrir la campagne multicanale <ChevronDown size={14} style={{ transform: 'rotate(-90deg)' }} />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 3B : APPELS SORTANTS (texte gauche, image droite) */}
        <section style={{ padding: '8rem 2rem', backgroundColor: '#050510' }}>
          <div className="prospection-alt-row" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div className="prospection-text-first">
              <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#44CCFF', marginBottom: '1rem' }}>Appels sortants</p>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#F9FAFB', marginBottom: '1.25rem', lineHeight: 1.3 }}>Un commercial senior qui décroche le téléphone.</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '2rem' }}>
                Le téléphone reste le canal le plus direct pour engager un décideur. Nos commerciaux appellent vos prospects sur signal, avec un script validé avec vous, et ne s'arrêtent qu'au rendez-vous qualifié.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <div style={{ borderLeft: '3px solid #44CCFF', paddingLeft: '1.25rem' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.35rem' }}>Script co-construit avec vous</div>
                  <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Rédigé à partir de vos cas clients réels et des objections que vous rencontrez, validé avant le premier appel.</div>
                </div>
                <div style={{ borderLeft: '3px solid #44CCFF', paddingLeft: '1.25rem' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.35rem' }}>Rendez-vous qualifié défini ensemble</div>
                  <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Bon interlocuteur, intérêt exprimé, créneau confirmé : la définition est écrite avec vous avant de démarrer.</div>
                </div>
              </div>
              <Link href="/prospection/cold-call" style={{ color: '#44CCFF', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}>
                Découvrir les appels sortants <ChevronDown size={14} style={{ transform: 'rotate(-90deg)' }} />
              </Link>
            </div>
            <div className="prospection-image-second" style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}>
              <img src={imgColdCall} alt="Appels sortants : rendez-vous qualifiés par téléphone" style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </section>

        {/* SECTION 3C : MISSION HYBRIDE (image gauche, texte droite) */}
        <section style={{ padding: '8rem 2rem', backgroundColor: '#0A0A1A' }}>
          <div className="prospection-alt-row" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}>
              <img src={imgHybride} alt="Mission hybride : data et prospection combinées" style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#44CCFF', marginBottom: '1rem' }}>Mission hybride</p>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#F9FAFB', marginBottom: '1.25rem', lineHeight: 1.3 }}>Campagne multicanale et appels sortants.</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '2rem' }}>
                Pour les comptes prioritaires, combiner campagne multicanale et cold call multiplie les points de contact. Un Customer Success Manager dédié pilote l'ensemble, un seul interlocuteur pour la data et les appels.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <div style={{ borderLeft: '3px solid #44CCFF', paddingLeft: '1.25rem' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.35rem' }}>Data et cold call combinés</div>
                  <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Les comptes chauds identifiés par les séquences sont relayés directement aux appels, sans perte de contexte.</div>
                </div>
                <div style={{ borderLeft: '3px solid #44CCFF', paddingLeft: '1.25rem' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.35rem' }}>CRM et dashboard dédiés</div>
                  <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Une vue unique sur le pipeline, partagée en reporting hebdomadaire avec votre Customer Success Manager.</div>
                </div>
              </div>
              <Link href="/contact" style={{ color: '#44CCFF', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}>
                Discuter d'une mission hybride <ChevronDown size={14} style={{ transform: 'rotate(-90deg)' }} />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 4 : ET ENSUITE ? */}
        <section style={{ padding: '10rem 2rem', backgroundColor: '#050510' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, marginBottom: '4rem', textAlign: 'center', color: '#F9FAFB' }}>
              Et ensuite ?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>

              <div style={{ backgroundColor: '#11111E', border: '1px solid #1A1A2E', borderRadius: '1rem', overflow: 'hidden' }}>
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img src="/assets/images/data/data.jpeg" alt="Data B2B" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,26,0.2), rgba(17,17,30,0.85))' }} />
                </div>
                <div style={{ padding: '2.5rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.2rem', color: '#F9FAFB' }}>Vos données sont-elles prêtes ?</h3>
                  <p style={{ color: 'rgba(255,255,255,0.45)', marginBottom: '2.5rem', lineHeight: 1.7 }}>Une campagne ne vaut que par la base qui l'alimente. On nettoie, segmente et enrichit vos contacts avant de lancer.</p>
                  <Link href="/data" style={{ backgroundColor: 'rgba(37,99,235,0.1)', color: '#3B82F6', padding: '0.8rem 1.5rem', borderRadius: '0.5rem', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    Voir l'offre Data B2B <ChevronDown size={16} style={{ transform: 'rotate(-90deg)' }} />
                  </Link>
                </div>
              </div>

              <div style={{ backgroundColor: '#11111E', border: '1px solid #1A1A2E', borderRadius: '1rem', overflow: 'hidden' }}>
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img src="/assets/images/formationB2B.png" alt="Formation IA" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,26,0.2), rgba(17,17,30,0.85))' }} />
                </div>
                <div style={{ padding: '2.5rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.2rem', color: '#F9FAFB' }}>Vos équipes sont-elles prêtes ?</h3>
                  <p style={{ color: 'rgba(255,255,255,0.45)', marginBottom: '2.5rem', lineHeight: 1.7 }}>Formez vos commerciaux à prospecter, qualifier et closer avec les bons outils IA.</p>
                  <Link href="/formations" style={{ backgroundColor: 'rgba(37,99,235,0.1)', color: '#3B82F6', padding: '0.8rem 1.5rem', borderRadius: '0.5rem', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    Voir l'offre Formation <ChevronDown size={16} style={{ transform: 'rotate(-90deg)' }} />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 5 : FAQ */}
        <section id="faq" style={{ padding: '10rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, marginBottom: '4rem', textAlign: 'center', color: '#F9FAFB' }}>
            Questions fréquentes.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {[
              { q: 'Quelle est la différence entre campagne multicanale et appels sortants ?', a: "La campagne multicanale envoie des séquences email et LinkedIn personnalisées et traite les réponses. Les appels sortants sont passés directement par un commercial senior. Les deux visent le même objectif : un rendez-vous qualifié dans votre CRM." },
              { q: 'Peut-on combiner les deux approches ?', a: "Oui, c'est l'objet de la mission hybride : les comptes prioritaires reçoivent une séquence multicanale et sont relancés par téléphone, avec un Customer Success Manager qui pilote l'ensemble." },
              { q: "Qu'est-ce que Repliik ?", a: "Repliik est l'outil que nous avons développé pour opérer les campagnes multicanale : import de contacts, enrichissement, envoi email et LinkedIn, et réponses automatisées. On l'utilise pour vous, ou on vous forme à l'utiliser en autonomie." },
              { q: 'Comment définissez-vous un rendez-vous qualifié ?', a: "Nous l'écrivons avec vous avant de commencer. Trois critères minimum : le bon interlocuteur, un intérêt exprimé, un créneau confirmé. Vous validez la définition, nous nous engageons dessus." },
              { q: 'Sous quel délai les premiers rendez-vous arrivent-ils ?', a: "Comptez environ 3 à 4 semaines : cadrage, construction de la base, rédaction des séquences ou du script, puis lancement. Les appels et campagnes démarrent en semaine 4." },
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

        {/* ═══ CTA FINAL : PROCHAINE ÉTAPE ═══ */}
        <section style={{ background: '#060612', padding: '60px 0 120px' }}>
          <div className="container" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '-160px', bottom: '-160px', width: '840px', height: '840px', background: 'radial-gradient(circle, rgba(68,204,255,0.55) 0%, rgba(68,204,255,0) 70%)', filter: 'blur(30px)', zIndex: 0, pointerEvents: 'none' }} />
            <div style={{ border: '1px solid rgba(68,204,255,.1)', borderRadius: '20px', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 0 60px -20px rgba(68,204,255,.15)', minHeight: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', zIndex: 1 }}>
              <img src={teamSquadia} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', filter: 'brightness(0.75) saturate(1.1)', zIndex: 0, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,6,18,0.75) 0%, transparent 32%, transparent 55%, rgba(6,6,18,0.92) 100%)', zIndex: 1, pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 2, padding: '56px 56px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#44CCFF', display: 'block', marginBottom: '16px' }}>Prochaine étape</span>
                  <p style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 200, fontStyle: 'italic', lineHeight: 1.1, color: '#fff', margin: '0 0 8px' }}>Rejoignez-nous :</p>
                  <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, lineHeight: 1.1, color: '#fff', margin: 0 }}>Prêt à remplir<br />votre pipeline ?</h2>
                </div>
                <div>
                  <p style={{ fontSize: '1.1rem', lineHeight: 1.72, color: '#bcc8d1', maxWidth: '420px', margin: '0 auto 32px' }}>30 minutes pour définir le bon canal pour vos rendez-vous qualifiés.</p>
                  <Link href="/contact" style={{ fontSize: '1.1rem', fontWeight: 700, background: '#44CCFF', color: '#060612', padding: '1.1rem 2.2rem', borderRadius: '0.5rem', textDecoration: 'none', display: 'inline-block', margin: '0 auto' }}>Prendre Rendez-Vous</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .prospection-alt-row { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .prospection-text-first { order: 1; }
          .prospection-image-second { order: 2; }
        }
      `}</style>
    </>
  );
}
