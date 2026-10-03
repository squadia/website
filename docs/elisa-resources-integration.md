# Elisa - Ressources Integration Guide

## Structure Ressources + Thématiques

### Resource Mapping

```javascript
const RESOURCES = {
  recrutement_commercial: {
    id: 'recrutement-commercial-7-leviers',
    title: 'Recruter un commercial : 7 leviers avant l\'onboarding',
    url: 'https://www.squadia.io/ressources/recrutement-commercial-7-leviers/',
    themes: [
      'recruter',
      'onboarding',
      'semaine critique',
      'tiering client',
      'segmentation marché',
      'anti-show',
      'jour 1',
      'équipe vente',
      'playbook',
      'scripts',
      'nouveau commercial'
    ]
  },
  sales_manager: {
    id: 'guide-sales-manager',
    title: 'Guide Sales Manager',
    url: 'https://www.squadia.io/ressources/guide-sales-manager/',
    themes: [
      'manager',
      'pipeline',
      'forecasting',
      'coaching',
      'ambition',
      'ventes',
      'performance',
      'team management'
    ]
  },
  marketing_manager: {
    id: 'guide-marketing-manager',
    title: 'Guide Marketing Manager',
    url: 'https://www.squadia.io/ressources/guide-marketing-manager/',
    themes: [
      'marketing',
      'campaign',
      'lead generation',
      'roi',
      'tracking',
      'analytics'
    ]
  }
};
```

## Context Detection

### Keywords Mapping (pour matching automatique)

```javascript
const CONTEXT_KEYWORDS = {
  // Recrutement
  recruter: ['recruter', 'recrutement', 'nouveau', 'embaucher', 'candidat', 'hiring'],
  onboarding: ['onboarding', 'intégration', 'jour 1', 'première semaine', 'arrivée'],
  segmentation: ['tiering', 'segmentation', 'marché', 'clients', 'stratégie'],
  
  // Sales Management
  pipeline: ['pipeline', 'forecast', 'deals', 'prospects', 'ventes'],
  coaching: ['coaching', 'manager', 'team', 'performance', 'ambition'],
  
  // Marketing
  marketing: ['marketing', 'campaign', 'lead', 'gen', 'roi', 'analytics']
};

// Function: Detect resources from conversation
function detectResourcesFromContext(conversationText) {
  const detectedResources = new Set();
  const lowerText = conversationText.toLowerCase();
  
  for (const [resource, keywords] of Object.entries(CONTEXT_KEYWORDS)) {
    if (keywords.some(kw => lowerText.includes(kw))) {
      detectedResources.add(resource);
    }
  }
  
  return Array.from(detectedResources);
}
```

## Elisa Response Integration

### Scenarios

#### 1. RDV Booké → Propose Ressources

```
[Après confirmation RDV]

Elisa: "Parfait! Jérôme vous contactera le [DATE]. 

Avant votre rendez-vous, vu que vous m'avez dit [recap contexte], on a 
quelques ressources qui pourraient vous intéresser :

📋 [RESSOURCE 1 DÉTECTÉE]
   → [Lien direct]
   
[Si 2+ ressources]
👨‍💼 [RESSOURCE 2]
📊 [RESSOURCE 3]

Ça vous intéresse d'y jeter un œil?"
```

#### 2. RDV Refusé → Propose Ressources

```
Elisa: "D'accord, pas de problème! En attendant, pendant ce temps, 
vu votre contexte, vous pourriez trouver utile:

📋 [RESSOURCE PRINCIPALE]

Ça pourrait vous aider à avancer pendant ce temps?"
```

#### 3. Multi-ressources → User Choix

```
Elisa: "Vous m'avez parlé de recrutement ET de management d'équipe. 
On a deux guides pour ça:

1. Recruter un commercial (7 leviers)
2. Guide Sales Manager

Lequel vous intéresse le plus?"

[User clicks resource OR answers]
→ Tracking + close conversation
```

## Implementation Checklist

- [ ] Add `RESOURCES` object to Elisa context
- [ ] Add `CONTEXT_KEYWORDS` mapping
- [ ] Implement `detectResourcesFromContext()` function
- [ ] Add resource proposal logic to Elisa response generation
- [ ] Add tracking event for each proposed resource
- [ ] Add tracking event for accepted/clicked resources
- [ ] Test all 3 scenarios (RDV booked, RDV refused, multi-choice)
- [ ] Wire resource URLs to live links

## Tracking Events

```javascript
// When resource proposed
track('resource_proposed', {
  resource_id: 'recrutement-commercial-7-leviers',
  context: 'rdv_booked', // rdv_booked | rdv_refused | multi_choice
  detected_themes: ['recruter', 'onboarding']
});

// When resource clicked
track('resource_clicked', {
  resource_id: 'recrutement-commercial-7-leviers',
  from: 'elisa_proposal'
});
```

## Notes

- Les thématiques sont basées sur le contenu réel des PDFs
- Detection est fuzzy (substring match) pour robustesse
- Proposer max 3 ressources (sinon too much)
- Toujours offer dans tone conversationnel (pas salesy)
- Si aucune ressource détectée → propose all 3 / propose "autres ressources"
