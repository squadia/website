'use client';
import React from 'react';

const sectionStyle = { marginTop: '2.5rem' };
const h2Style = { fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem', color: '#44CCFF' };
const pStyle = { color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '0.75rem' };
const listStyle = { color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, paddingLeft: '1.25rem', marginBottom: '0.75rem' };

const TemoignageConditions = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#050510', color: '#F9FAFB', padding: '160px 24px 80px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', width: '100%' }}>
        <h1 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, marginBottom: '0.5rem' }}>
          Conditions générales d'utilisation des témoignages et autorisation de droit à l'image
        </h1>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Préambule</h2>
          <p style={pStyle}>
            Le présent document a pour but de définir les conditions dans lesquelles Jérôme DEBRUYNE, Dirigeant de Squadia, domiciliée au 193 avenue de France (ci-après dénommé "le Formateur"), est autorisé à exploiter le témoignage vidéo fourni par le participant (ci-après dénommé "le Témoin").
          </p>
          <p style={pStyle}>
            La fourniture de ce témoignage est une démarche strictement volontaire et facultative de la part du Témoin, proposée en contrepartie de l'accès à des ressources pédagogiques additionnelles (base documentaire Notion). Ce témoignage est totalement indépendant de l'organisme de formation ou de l'entité ayant commandité la session initiale. Il relève d'un accord exclusif et direct entre le Témoin et le Formateur.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Article 1 : Objet de l'autorisation</h2>
          <p style={pStyle}>
            En cochant la case d'acceptation lors de la soumission de la vidéo, le Témoin cède au Formateur, à titre gratuit, le droit d'enregistrer, de reproduire, de représenter et d'adapter :
          </p>
          <ul style={listStyle}>
            <li>Son image (captation vidéo) ;</li>
            <li>Sa voix ;</li>
            <li>Ses propos (témoignage) ;</li>
            <li>Les attributs de sa personnalité renseignés (prénom, initiale ou nom complet, fonction professionnelle et, le cas échéant, le nom de son entreprise utilisé à titre purement informatif pour contextualiser son profil professionnel).</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Article 2 : Droit d'adaptation, de montage et d'habillage</h2>
          <p style={pStyle}>
            Afin de répondre aux impératifs de la communication numérique et aux formats spécifiques des différents supports visés, le Témoin autorise expressément le Formateur à procéder à toutes les adaptations techniques et éditoriales jugées nécessaires. À ce titre, le Formateur se réserve le plein droit d'effectuer tout travail de montage, de coupe, de raccourcissement ou d'extraction des propos recueillis, afin d'en isoler les séquences les plus pertinentes au regard de sa ligne éditoriale et des nécessités de concision. De même, le Formateur est autorisé à modifier le ratio d'image, à procéder à un étalonnage colorimétrique, et à intégrer le témoignage au sein d'un habillage graphique, textuel ou sonore de son choix. Le Formateur s'engage toutefois à ce que ces opérations de sélection et d'habillage ne dénaturent pas le sens propre des extraits diffusés ni ne portent atteinte à l'image du Témoin.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Article 3 : Finalités de l'exploitation</h2>
          <p style={pStyle}>
            L'utilisation de ce témoignage a pour but exclusif la promotion et la communication autour des activités, des formations et des services proposés par le Formateur. Le Formateur s'interdit expressément de procéder à une exploitation du témoignage susceptible de porter atteinte à la vie privée, à la réputation ou à la dignité du Témoin, ainsi que toute utilisation à des fins polémiques, pornographiques, racistes, xénophobes ou toute autre exploitation préjudiciable.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Article 4 : Expression à titre personnel</h2>
          <p style={pStyle}>
            Le Témoin déclare s'exprimer strictement en son nom propre et à titre personnel, en sa qualité d'apprenant. Les propos tenus dans le cadre de ce témoignage reflètent son expérience et son opinion individuelles. Ils n'engagent en aucun cas l'entreprise, l'institution ou l'organisation qui l'emploie. Dès lors que le Témoin ne s'exprime pas au nom de sa société et ne divulgue aucune information confidentielle la concernant, la fourniture de ce témoignage relève de sa seule liberté individuelle et ne requiert pas l'autorisation préalable de son employeur.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Article 5 : Supports autorisés</h2>
          <p style={pStyle}>
            L'exploitation de l'image et du témoignage est autorisée de manière non exclusive pour les supports de communication suivants :
          </p>
          <ul style={listStyle}>
            <li>Site internet : sur toutes les pages du site web du Formateur (www.squadia.io) ;</li>
            <li>Réseaux sociaux : sur les comptes professionnels du Formateur (notamment LinkedIn, YouTube, Instagram, Facebook, TikTok) ;</li>
            <li>Supports de prospection : intégration dans des présentations commerciales numériques, webinaires, e-mailings ou newsletters du Formateur ;</li>
            <li>Plateformes d'hébergement vidéo : (ex: Vimeo, YouTube) nécessaires à l'intégration des vidéos sur les supports susmentionnés.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Article 6 : Durée et étendue territoriale</h2>
          <p style={pStyle}>
            Conformément à la loi française, cette autorisation est accordée :
          </p>
          <ul style={listStyle}>
            <li>Pour le monde entier : l'exploitation ayant lieu principalement sur le réseau Internet, l'autorisation est de fait mondiale.</li>
            <li>Pour une durée déterminée : l'autorisation est accordée pour une durée de cinq (5) ans à compter de la date d'envoi du témoignage vidéo. À l'issue de cette période, sauf accord de renouvellement, le Formateur s'engage à ne plus publier le témoignage sur de nouveaux supports (les publications passées sur les réseaux sociaux pourront cependant demeurer dans l'historique des fils d'actualité).</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Article 7 : Rémunération</h2>
          <p style={pStyle}>
            La présente autorisation est consentie à titre entièrement gratuit. Le Témoin reconnaît expressément qu'il ne pourra prétendre à aucune rémunération, redevance, indemnité ou contrepartie financière, présente ou future, au titre de la captation et de l'exploitation de son témoignage et de son image.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Article 8 : Données personnelles (RGPD) et droit de rétractation</h2>
          <p style={pStyle}>
            Le Formateur agit en tant que responsable de traitement des données personnelles collectées via ce témoignage (image, voix, identité). Conformément à la réglementation européenne en vigueur (RGPD) et à la loi Informatique et Libertés :
          </p>
          <ol style={listStyle}>
            <li>Droit de retrait : Le Témoin a le droit de retirer son consentement à tout moment et sans avoir à se justifier.</li>
            <li>Exercice des droits : Pour exercer son droit de rétractation, de suppression, de rectification ou d'accès, le Témoin peut adresser une simple demande par e-mail à : contact@squadia.fr.</li>
            <li>Délai d'exécution : Dès réception de la demande de retrait, le Formateur s'engage à supprimer la vidéo de ses serveurs et à la retirer de ses sites et supports de communication dans un délai maximum de trente (30) jours. Le retrait n'a pas d'effet rétroactif sur les campagnes de communication déjà achevées.</li>
          </ol>
        </section>

        <section style={{ ...sectionStyle, marginBottom: '2rem' }}>
          <h2 style={h2Style}>Article 9 : Loi applicable et litiges</h2>
          <p style={pStyle}>
            Les présentes conditions d'utilisation sont régies par le droit français. En cas de différend quant à l'interprétation ou l'exécution des présentes, et à défaut d'accord amiable, les tribunaux français seront seuls compétents.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TemoignageConditions;
