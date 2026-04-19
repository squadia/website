import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './views/Home';
import StrategieIA from './views/StrategieIA';
import StrategieCommerciale from './views/StrategieCommerciale';
import StrategieCrm from './views/StrategieCrm';
import DataClean from './views/DataClean';
import DataSeg from './views/DataSeg';
import DataLead from './views/DataLead';
import AutomatisationIA from './views/AutomatisationIA';
import Formation from './views/Formation';
import LandingSales from './views/LandingSales';
import LandingDG from './views/LandingDG';
import LandingMarketing from './views/LandingMarketing';
import Contact from './views/Contact';
import CasClients from './views/CasClients';
import About from './views/About';
import Tarifs from './views/Tarifs';
import BlogProspectionErreurs from './views/BlogProspectionErreurs';
import FormationCommerciale from './views/FormationCommerciale';
import DataB2B from './views/DataB2B';
import StrategieIAPME from './views/StrategieIAPME';
import FormationOuAutomatisation from './views/FormationOuAutomatisation';
import Ressources from './views/Ressources';
import EnqueteIAB2B from './views/EnqueteIAB2B';
import GuideSalesManager from './views/GuideSalesManager';
import GuideMarketingManager from './views/GuideMarketingManager';
import ChannelSalesPlan from './views/ChannelSalesPlan';
import ConditionsParticipation from './views/ConditionsParticipation';
import SecteurITSaaS from './views/SecteurITSaaS';
import SecteurIndustrie from './views/SecteurIndustrie';
import SecteurPublic from './views/SecteurPublic';
import Formations from './views/Formations';
import FormationVentesIA from './views/FormationVentesIA';
import FormationMarketingIA from './views/FormationMarketingIA';
import FormationCommunicationIA from './views/FormationCommunicationIA';
import CasPipelineB2B from './views/CasPipelineB2B';
import CasFormationIACom from './views/CasFormationIACom';
import CasCRMIndustrie from './views/CasCRMIndustrie';
import CasMigrationCRM from './views/CasMigrationCRM';
import CasFormationVente from './views/CasFormationVente';
import BlogStrategieIAPME from './views/BlogStrategieIAPME';
import BlogChangementCRM from './views/BlogChangementCRM';
import BlogFormationIAVAutom from './views/BlogFormationIAVAutom';
import MentionsLegales from './views/MentionsLegales';
import Data from './views/Data';
import Mission from './views/Mission';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/strategie-ia" element={<StrategieIA />} />
        <Route path="/strategie/commerciale" element={<StrategieCommerciale />} />
        <Route path="/strategie/crm" element={<StrategieCrm />} />
        <Route path="/data/data-clean" element={<DataClean />} />
        <Route path="/data/data-seg" element={<DataSeg />} />
        <Route path="/data/data-lead" element={<DataLead />} />
        <Route path="/automatisation-ia" element={<AutomatisationIA />} />
        <Route path="/formation-ia" element={<Formation />} />
        <Route path="/directeur-commercial" element={<LandingSales />} />
        <Route path="/directeur-general" element={<LandingDG />} />
        <Route path="/directeur-marketing" element={<LandingMarketing />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/cas-clients/pipeline-b2b" element={<CasPipelineB2B />} />
        <Route path="/cas-clients/formation-ia-com" element={<CasFormationIACom />} />
        <Route path="/cas-clients/crm-industrie" element={<CasCRMIndustrie />} />
        <Route path="/cas-clients/migration-crm" element={<CasMigrationCRM />} />
        <Route path="/cas-clients/formation-vente" element={<CasFormationVente />} />
        <Route path="/cas-clients/:caseId?" element={<CasClients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Navigate href="/ressources" replace />} />
        <Route path="/blog/prospection-multicanale-b2b-erreurs" element={<BlogProspectionErreurs />} />
        <Route path="/blog/formation-commerciale-b2b-ia" element={<FormationCommerciale />} />
        <Route path="/blog/nettoyage-segmentation-enrichissement-donnees-b2b" element={<DataB2B />} />
        <Route path="/blog/strategie-ia-pme-eti" element={<StrategieIAPME />} />
        <Route path="/blog/formation-ia-ou-automatisation" element={<FormationOuAutomatisation />} />
        <Route path="/blog/strategie-ia-pme-sequence" element={<BlogStrategieIAPME />} />
        <Route path="/blog/changement-crm-organisation" element={<BlogChangementCRM />} />
        <Route path="/blog/formation-ia-automatisation-ordre" element={<BlogFormationIAVAutom />} />
        <Route path="/ressources" element={<Ressources />} />
        <Route path="/ressources/enquete-ia-b2b" element={<EnqueteIAB2B />} />
        <Route path="/ressources/guide-sales-manager" element={<GuideSalesManager />} />
        <Route path="/ressources/guide-marketing-manager" element={<GuideMarketingManager />} />
        <Route path="/ressources/channel-sales-plan" element={<ChannelSalesPlan />} />
        <Route path="/ressources/conditions-participation" element={<ConditionsParticipation />} />
        <Route path="/data" element={<Data />} />
        <Route path="/secteur-it-saas" element={<SecteurITSaaS />} />
        <Route path="/secteur-industrie" element={<SecteurIndustrie />} />
        <Route path="/secteur-public" element={<SecteurPublic />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/formation-ventes-et-ia" element={<FormationVentesIA />} />
        <Route path="/formation-marketing-et-ia" element={<FormationMarketingIA />} />
        <Route path="/formation-communication-et-ia" element={<FormationCommunicationIA />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/notre-mission" element={<Mission />} />
      </Routes>
      
      {/* Footer */}
      <footer style={{ background: '#050510', padding: '5rem 0 3rem 0', borderTop: '1px solid #111' }}>
        <div className="container">
          <div className="footer-grid">
            
            {/* COLONNE 1 */}
            <div>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '0.85rem', fontWeight: 600 }}>Solutions</h4>
              <ul style={{ display: 'flex', flexDirection: 'column' }}>
                <li><Link href="/strategie/commerciale" className="footer-link">Stratégie Commerciale</Link></li>
                <li><Link href="/strategie/crm" className="footer-link">Migration CRM</Link></li>
                <li><Link href="/data/data-clean" className="footer-link">Data Clean</Link></li>
                <li><Link href="/data/data-seg" className="footer-link">Data Seg</Link></li>
                <li><Link href="/data/data-lead" className="footer-link">Data Lead</Link></li>
                <li><Link href="/automatisation-ia" className="footer-link">Automatisation</Link></li>
              </ul>
            </div>

            {/* COLONNE 2 */}
            <div>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '0.85rem', fontWeight: 600 }}>Formation</h4>
              <ul style={{ display: 'flex', flexDirection: 'column' }}>
                <li><Link href="/formations" className="footer-link">Formations</Link></li>
                <li><Link href="/formation-ventes-et-ia" className="footer-link">Vente B2B et IA</Link></li>
                <li><Link href="/formation-marketing-et-ia" className="footer-link">Marketing et IA</Link></li>
                <li><Link href="/formation-communication-et-ia" className="footer-link">Communication et IA</Link></li>
              </ul>
            </div>
            
            {/* COLONNE 3 */}
            <div>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '0.85rem', fontWeight: 600 }}>Votre fonction</h4>
              <ul style={{ display: 'flex', flexDirection: 'column' }}>
                <li><Link href="/directeur-general" className="footer-link">Directeur Général</Link></li>
                <li><Link href="/directeur-marketing" className="footer-link">Directeur Marketing</Link></li>
                <li><Link href="/directeur-commercial" className="footer-link">Directeur Commercial</Link></li>
              </ul>
            </div>

            {/* COLONNE 4 */}
            <div>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '0.85rem', fontWeight: 600 }}>Cas clients</h4>
              <ul style={{ display: 'flex', flexDirection: 'column' }}>
                <li><Link href="/cas-clients/pipeline-b2b" className="footer-link">Pipeline B2B</Link></li>
                <li><Link href="/cas-clients/crm-industrie" className="footer-link">CRM Industrie</Link></li>
                <li><Link href="/cas-clients/migration-crm" className="footer-link">Migration CRM</Link></li>
                <li><Link href="/cas-clients/formation-vente" className="footer-link">Formation Vente</Link></li>
                <li><Link href="/cas-clients/formation-ia-com" className="footer-link">Formation IA Com</Link></li>
              </ul>
            </div>

            {/* COLONNE 5 */}
            <div>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '0.85rem', fontWeight: 600 }}>Tarifs</h4>
              <ul style={{ display: 'flex', flexDirection: 'column' }}>
                <li><Link href="/tarifs" className="footer-link">Stratégie IA</Link></li>
                <li><Link href="/tarifs" className="footer-link">Automatisation</Link></li>
                <li><Link href="/tarifs" className="footer-link">Formation</Link></li>
              </ul>
            </div>

            {/* COLONNE 6 */}
            <div>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '0.85rem', fontWeight: 600 }}>Ressources</h4>
              <ul style={{ display: 'flex', flexDirection: 'column' }}>
                <li><Link href="/ressources/enquete-ia-b2b" className="footer-link">Enquête IA 2026</Link></li>
                <li><Link href="/ressources/guide-sales-manager" className="footer-link">Guide Sales Manager</Link></li>
                <li><Link href="/ressources/guide-marketing-manager" className="footer-link">Guide Marketing Manager</Link></li>
                <li><Link href="/ressources/channel-sales-plan" className="footer-link">Channel Sales Plan</Link></li>
              </ul>
            </div>
            
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '3rem', borderTop: '1px solid #1A1A3A', gap: '2rem' }}>
            <div>
              <Link href="/">
                <img src="/logo.png" alt="Squadia" style={{ height: '32px', width: 'auto', marginBottom: '1.5rem' }} />
              </Link>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                2026 Squadia — SIRET 45243901100027<br />
                193 Av. de France, 75013 Paris<br />
                contact@squadia.io — +33 7 82 84 35 64
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', marginTop: '1rem' }}>
              <a href="https://www.linkedin.com/company/squadiagroup" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}>LinkedIn</a>
              <a href="https://www.youtube.com/@squadiagroup" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}>YouTube</a>
              <Link href="/mentions-legales" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}>Mentions Légales</Link>
            </div>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;
