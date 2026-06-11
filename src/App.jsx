import React, { useEffect, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
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
import enquêteIAB2B from './views/enquêteIAB2B';
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
  useLayoutEffect(() => {
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
      <div style={{ minHeight: '100vh' }}>
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
          <Route path="/ressources/enquête-ia-b2b" element={<enquêteIAB2B />} />
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
      </div>
      <Footer />
    </Router>
  );
}

export default App;
