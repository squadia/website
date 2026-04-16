import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Bot, Cpu, Zap, ArrowRight, Settings, Workflow } from 'lucide-react';

const Automatisation = () => {
  useScrollReveal();

  const useCases = [
    { title: 'Data Enrichment', desc: 'Nettoyage et enrichissement automatique de votre CRM à partir des profils LinkedIn et sites web.' },
    { title: 'Outreach Personnalisé', desc: 'Génération d\'accroches ultra-personnalisées basées sur l\'actualité réelle de vos prospects.' },
    { title: 'Meeting Prep', desc: 'Synthèse automatique de tout ce que vous devez savoir avant un rendez-vous client en 30 secondes.' },
    { title: 'Content Factory', desc: 'Transformation de vos webinars et meetings en articles, posts LinkedIn et newsletters.' }
  ];

  return (
    <div className="automa-page">
      {/* Hero */}
      <section className="hero container" style={{ paddingTop: '160px', paddingBottom: '100px' }}>
        <div className="fade-in">
          <span className="tag-hero">AUTOMATISATION IA</span>
          <h1 style={{ marginTop: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', maxWidth: '850px' }}>
            Libérez votre cerveau. Automatisez le reste.
          </h1>
          <p className="subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginTop: '2rem', maxWidth: '750px' }}>
            Nous connectons vos outils (CRM, LinkedIn, Mail) pour créer des workflows qui travaillent pendant que vos commerciaux vendent.
          </p>
          <div style={{ marginTop: '3rem' }}>
            <Link to="/contact" className="btn btn-primary pulse">Automatiser mes process <ArrowRight size={18} style={{ marginLeft: '8px' }} /></Link>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="fade-in" style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2>Gagnez 10h par semaine et par collaborateur</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1.5rem', maxWidth: '700px', marginInline: 'auto' }}>
              Ce n'est pas de la magie, c'est de l'ingénierie de process. Nous remplaçons les tâches répétitives par des agents intelligents.
            </p>
          </div>
          
          <div className="grid-2">
            {useCases.map((uc, i) => (
              <div key={i} className="use-case-card">
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div className="icon-circle"><Workflow size={24} color="var(--accent)" /></div>
                  <div>
                    <h3 style={{ marginBottom: '0.75rem' }}>{uc.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{uc.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section className="section-padding container">
        <div className="fade-in">
          <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>Les outils que nous maîtrisons pour vous</h2>
          <div className="grid-4" style={{ textAlign: 'center', opacity: 0.7 }}>
            {[ 'Make.com', 'n8n', 'Clay', 'Zapier', 'OpenAI', 'Perplexity', 'Llama 3', 'Anthropic' ].map((tool) => (
              <div key={tool} style={{ padding: '2rem', border: '1px solid #111', borderRadius: '4px' }}>
                <span style={{ fontWeight: 700 }}>{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Small */}
      <section className="section-padding container" style={{ borderTop: '1px solid #111' }}>
        <div className="fade-in grid-2" style={{ alignItems: 'center' }}>
          <h2>"Est-ce que ça va déshumaniser ma relation client ?"</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Au contraire. En automatisant la collecte de données et la mise à jour du CRM, vous libérez du temps pour ce qui compte vraiment : l'écoute active et la créativité stratégique face au client. L'IA fait le travail de secrétaire, vous faites le travail de conseiller.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)', textAlign: 'center' }}>
        <div className="container fade-in">
          <h2>Prêt à scaler sans recruter ?</h2>
          <div style={{ marginTop: '2.5rem' }}>
            <Link to="/contact" className="btn btn-primary pulse">Lancer mon premier workflow</Link>
          </div>
        </div>
      </section>

      <style>{`
        .tag-hero {
          background: rgba(37, 99, 235, 0.1);
          color: var(--accent);
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
        }
        .use-case-card {
          background: #0A0A1A;
          padding: 2.5rem;
          border-radius: 8px;
          border: 1px solid #1A1A3A;
          transition: var(--transition-fast);
        }
        .use-case-card:hover {
          border-color: var(--accent);
          transform: translateY(-5px);
        }
        .icon-circle {
          flex-shrink: 0;
          width: 50px;
          height: 50px;
          background: rgba(37, 99, 235, 0.05);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default Automatisation;
