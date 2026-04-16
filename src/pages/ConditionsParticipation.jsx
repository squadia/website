import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ConditionsParticipation = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = "Conditions de participation — Jeu concours Squadia 2026";
  }, []);

  return (
    <div style={{ background: '#0A0A1A', minHeight: '100vh', color: '#F9FAFB' }}>
      <div className="container" style={{ paddingTop: '160px', paddingBottom: '80px', maxWidth: '800px', marginInline: 'auto' }}>
        
        <div className="fade-in" style={{ marginBottom: '3rem' }}>
          <Link 
            to="/ressources/enquete-ia-b2b" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              color: '#9CA3AF', 
              textDecoration: 'none',
              fontSize: '0.95rem',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#F9FAFB'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
          >
            <ArrowLeft size={16} /> Retour a l enquete
          </Link>
        </div>

        <h1 className="fade-in" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: '1.2', marginBottom: '4rem', color: '#F9FAFB' }}>
          Reglement du jeu concours Squadia
        </h1>

        <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          
          <section>
            <h2 style={{ fontSize: '1.5rem', color: '#44CCFF', marginBottom: '1rem' }}>Article 1 – Organisateur</h2>
            <p style={{ fontSize: '1.05rem', color: '#D1D5DB', lineHeight: 1.7 }}>
              La societe SQUADIA, entreprise individuelle immatriculee au RCS de Creteil, dont le siege est situe au 70 rue Mirabeau a Ivry-sur-Seine, organise un jeu-concours gratuit sans obligation d achat intitule : Sales & Marketing Manager B2B : vos priorites face a L IA (ci-apres le Jeu).
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', color: '#44CCFF', marginBottom: '1rem' }}>Article 2 – Conditions de participation</h2>
            <p style={{ fontSize: '1.05rem', color: '#D1D5DB', lineHeight: 1.7, marginBottom: '1rem' }}>
              Le Jeu est ouvert a toute personne physique majeure, residant en France metropolitaine, et exercant actuellement ses fonctions au sein d une entreprise.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#D1D5DB', lineHeight: 1.7, marginBottom: '1rem' }}>
              La participation est exclusivement reservee aux managers encadrant directement une equipe, avec une responsabilite hierarchique portant sur au moins deux collaborateurs.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#D1D5DB', lineHeight: 1.7, marginBottom: '1rem' }}>
              Ne peuvent pas participer les personnes exercant leur activite professionnelle dans une entreprise dont l activite principale consiste en la revente de donnees B2B, la prospection commerciale externalisee, la formation a la vente ou au marketing digital, la vente de services de marketing digital ou de communication ayant pour objet la generation de leads ou la prospection pour le compte de tiers.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#D1D5DB', lineHeight: 1.7, marginBottom: '1rem' }}>
              Cette exclusion s applique y compris dans l hypothese ou ces personnes auraient ete sollicitees directement ou indirectement par Squadia.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#D1D5DB', lineHeight: 1.7, marginBottom: '1rem' }}>
              Chaque participant doit fournir l ensemble des informations permettant son identification : nom, prenom, adresse email valide, numero de telephone et profil LinkedIn. Toute participation incomplete, erronee ou ne satisfaisant pas aux conditions ci-dessus sera automatiquement consideree comme nulle.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#D1D5DB', lineHeight: 1.7, marginBottom: '1rem' }}>
              En validant sa participation, le candidat reconnait que Squadia pourra, a tout moment et sur simple demande, exiger un justificatif attestant du respect de ces conditions. Le defaut de communication du justificatif entrainera l invalidation immediate de la participation.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#D1D5DB', lineHeight: 1.7 }}>
              Seules les participations repondant strictement aux criteres d eligibilite definis au present article sont considerees comme valides et prises en compte dans le calcul du nombre de participants.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', color: '#44CCFF', marginBottom: '1rem' }}>Article 3 – Duree du jeu</h2>
            <p style={{ fontSize: '1.05rem', color: '#D1D5DB', lineHeight: 1.7 }}>
              Le jeu est ouvert a compter de sa date de mise en ligne et restera actif jusqu au 31 mars 2026 inclus, ou jusqu a l atteinte du seuil de participations valides defini a l article 4 si celle-ci intervient avant.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', color: '#44CCFF', marginBottom: '1rem' }}>Article 4 – Modalites de tirage au sort</h2>
            <p style={{ fontSize: '1.05rem', color: '#D1D5DB', lineHeight: 1.7, marginBottom: '1rem' }}>
              Le tirage au sort du lot sera effectue des lors qu un seuil minimum de 100 participations valides aura ete atteint.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#D1D5DB', lineHeight: 1.7, marginBottom: '1rem' }}>
              Seules les participations repondant strictement aux criteres d eligibilite definis a l article 2 sont prises en compte dans le calcul de ce seuil.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#D1D5DB', lineHeight: 1.7, marginBottom: '1rem' }}>
              A defaut d atteinte de ce seuil, le jeu reste ouvert et le tirage au sort est automatiquement reporte jusqu a satisfaction de cette condition, sans obligation de notification individuelle aux participants.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#D1D5DB', lineHeight: 1.7 }}>
              Le tirage au sort designera un gagnant unique.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', color: '#44CCFF', marginBottom: '1rem' }}>Article 5 – Dotation</h2>
            <p style={{ fontSize: '1.05rem', color: '#D1D5DB', lineHeight: 1.7, marginBottom: '1rem' }}>
              Le lot est constitue d un bon cadeau Relais & Chateaux, coffret DUNE pour deux personnes, correspondant a un repas dans un restaurant gastronomique ou un soin, dans plus de 130 maisons, pour une valeur de 350 EUR TTC.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#D1D5DB', lineHeight: 1.7 }}>
              Le bon est nominatif, non echangeable, non cessible et ne pourra donner lieu a aucune contrepartie financiere.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', color: '#44CCFF', marginBottom: '1rem' }}>Article 6 – Information des participants</h2>
            <p style={{ fontSize: '1.05rem', color: '#D1D5DB', lineHeight: 1.7, marginBottom: '1rem' }}>
              Seul le gagnant sera contacte individuellement par l organisateur, par email ou telephone, a l issue du tirage au sort.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#D1D5DB', lineHeight: 1.7 }}>
              Les autres participants ne feront l objet d aucune notification specifique.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', color: '#44CCFF', marginBottom: '1rem' }}>Article 7 – Responsabilites</h2>
            <p style={{ fontSize: '1.05rem', color: '#D1D5DB', lineHeight: 1.7 }}>
              L organisateur ne saurait etre tenu responsable en cas de force majeure, d evenement independant de sa volonte ou de dysfonctionnement technique empechant la participation ou le bon deroulement du jeu.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', color: '#44CCFF', marginBottom: '1rem' }}>Article 8 – Donnees personnelles</h2>
            <p style={{ fontSize: '1.05rem', color: '#D1D5DB', lineHeight: 1.7 }}>
              Les donnees collectees dans le cadre du jeu sont traitees conformement a la reglementation en vigueur relative a la protection des donnees personnelles. Elles sont utilisees exclusivement par Squadia a des fins d analyse, de communication et de prospection professionnelle, et ne sont en aucun cas cedees a des tiers. Conformement a la reglementation applicable, chaque participant dispose d un droit d acces, de rectification et de suppression des donnees le concernant.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', color: '#44CCFF', marginBottom: '1rem' }}>Article 9 – Acceptation du reglement</h2>
            <p style={{ fontSize: '1.05rem', color: '#D1D5DB', lineHeight: 1.7 }}>
              La participation au jeu implique l acceptation pleine et entiere du present reglement.
            </p>
          </section>
          
          <div style={{ marginTop: '2rem', borderTop: '1px solid #1A1A3A', paddingTop: '2rem' }}>
            <p style={{ fontSize: '0.9rem', color: '#6B7280', fontStyle: 'italic' }}>
              Reglement mis a jour le 8 janvier 2026.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ConditionsParticipation;
