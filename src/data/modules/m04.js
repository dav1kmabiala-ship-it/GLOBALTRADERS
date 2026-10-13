export default {
  id: 'm4', number: 4, title: 'Analyse fondamentale',
  description: 'Taux d\'intérêt, inflation, emploi, banques centrales et calendrier économique : comprenez ce qui fait bouger les marchés.',
  badge: 'basics',
  intro: 'L\'analyse fondamentale étudie les facteurs économiques, politiques et sociaux qui influencent les prix. Ce module vous apprend à lire un calendrier économique et à comprendre l\'impact des annonces sur le marché.',
  objectives: ['Comprendre les facteurs fondamentaux', 'Lire un calendrier économique', 'Anticiper les réactions du marché', 'Gérer le risque pendant les annonces'],
  lessons: [
    {
      id: 'm4-l1', title: 'Les taux d\'intérêt',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Les <strong>taux d\'intérêt</strong> sont fixés par les banques centrales (Fed, BCE, BOE...). Un taux élevé attire les investisseurs vers la devise (rendement plus élevé), ce qui peut faire monter son prix. Un taux bas rend la devise moins attractive.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Les décisions de taux d\'intérêt sont les annonces les plus impactantes pour le Forex. Une hausse de taux de la Fed (USD) renforce généralement le dollar. Une baisse l\'affaiblit. Les marchés anticipent ces décisions : la réaction dépend souvent de la différence entre l\'anticipation et la décision réelle.' },
        { type: 'table', headers: ['Banque centrale', 'Pays/Région', 'Devise', 'Fréquence'], rows: [
          ['Fed (FOMC)', 'États-Unis', 'USD', '8 fois/an'],
          ['BCE', 'Zone euro', 'EUR', '8 fois/an'],
          ['BOE', 'Royaume-Uni', 'GBP', '8 fois/an'],
          ['BOJ', 'Japon', 'JPY', '8 fois/an']
        ]},
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Les taux d\'intérêt sont le moteur principal des mouvements de long terme sur le Forex. Comprendre le différentiel de taux entre deux devises aide à anticiper la direction de la paire. Les annonces de taux peuvent provoquer des volatilités extrêmes.' },
        { type: 'callout', variant: 'warning', title: 'Attention', content: 'Les réactions du marché aux taux d\'intérêt ne sont pas systématiques. Le marché peut réagir à l\'anticipation plutôt qu\'à la décision, ou au discours qui accompagne la décision. Ne supposez jamais qu\'une hausse de taux fera automatiquement monter la devise.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['La Fed annonce une hausse de taux de 0,25% (anticipée).', 'Le marché avait déjà anticipé cette hausse.', 'L\'USD ne monte pas comme attendu car la décision était « déjà prixée ».', 'Le discours de la Fed est prudent → l\'USD baisse même après la hausse.', 'La réaction dépend du contexte, pas uniquement de la décision.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader achète l\'USD car il attend une hausse de taux. La hausse a bien lieu, mais le discours de la Fed est très prudent (« dovish »). L\'USD baisse au lieu de monter. Le trader a ignoré le contexte du discours.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Supposer qu\'une hausse de taux fait toujours monter la devise', 'Ignorer l\'anticipation du marché', 'Ne pas lire le discours qui accompagne la décision', 'Trader sans Stop Loss pendant une annonce de taux'] },
        { type: 'summary', points: ['Les taux d\'intérêt sont fixés par les banques centrales', 'Un taux élevé attire les investisseurs vers la devise', 'Les marchés anticipent les décisions', 'La réaction dépend de l\'écart entre anticipation et réalité', 'Le discours qui accompagne la décision est aussi important'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qui fixe les taux d\'intérêt ?', options: ['Le gouvernement', 'Les banques centrales', 'Les brokers', 'Les traders'], correct: 1, explanation: 'Les taux d\'intérêt sont fixés par les banques centrales (Fed, BCE, BOE, BOJ...).' },
          { question: 'Pourquoi le marché peut-il ne pas réagir à une hausse de taux ?', options: ['Parce que le marché est fermé', 'Parce que la hausse était déjà anticipée (« déjà prixée »)', 'Parce que c\'est interdit', 'Parce que le broker le bloque'], correct: 1, explanation: 'Si le marché a déjà anticipé la hausse, la décision ne provoque pas de mouvement supplémentaire car elle est « déjà prixée ».' },
          { question: 'Que faut-il regarder en plus de la décision de taux ?', options: ['Rien', 'Le discours et les projections qui accompagnent la décision', 'La météo', 'L\'heure'], correct: 1, explanation: 'Le discours de la banque centrale et ses projections économiques sont aussi importants que la décision elle-même.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'La Fed annonce une hausse de taux. Le marché attendait 0,25% et la Fed annonce 0,50%. <br>1. Quelle est la surprise ? <br>2. Quelle réaction est possible sur l\'USD ?', correction: '1. La surprise est de +0,25% par rapport à l\'anticipation (0,50% au lieu de 0,25%). <br>2. L\'USD pourrait monter car la hausse est plus forte que prévue, rendant le dollar plus attractif. Mais le discours peut modifier cette réaction.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je connais le taux actuel et l\'anticipation du marché', 'Je surveille le calendrier économique', 'Je lis le discours qui accompagne la décision', 'Je ne suppose pas une réaction systématique'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm4-l2', title: 'L\'inflation',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'L\'<strong>inflation</strong> mesure la hausse générale des prix dans une économie. Elle est suivie via des indices comme l\'IPC (Indice des Prix à la Consommation). Une inflation élevée pousse les banques centrales à hausser les taux, ce qui peut renforcer la devise.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'L\'inflation est un indicateur clé pour les banques centrales. Une inflation trop élevée (> 2%) pousse à hausser les taux pour la contrôler. Une inflation trop basse (déflation) pousse à baisser les taux pour stimuler l\'économie. Les données d\'inflation (CPI, PCE) sont publiées mensuellement et provoquent souvent de la volatilité.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'L\'inflation influence directement les décisions de taux d\'intérêt. Une inflation en hausse peut anticiper une hausse de taux, ce qui renforce la devise. Comprendre cette relation aide à anticiper les mouvements de moyen terme.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['L\'IPC américain montre une inflation de 4% (au-dessus de la cible de 2%).', 'Les marchés anticipent une hausse de taux de la Fed.', 'L\'USD se renforce en anticipation.', 'La Fed confirme la hausse → l\'USD peut continuer à monter ou corriger si la hausse était déjà prixée.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'L\'inflation baisse soudainement à 1%. Les marchés anticipent une baisse de taux. La devise baisse. Un trader qui n\'a pas suivi l\'inflation est surpris par le mouvement.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Ignorer les données d\'inflation', 'Confondre inflation et déflation', 'Ne pas comprendre la relation inflation-taux', 'Supposer une réaction automatique'] },
        { type: 'summary', points: ['L\'inflation mesure la hausse des prix', 'Une inflation élevée pousse à hausser les taux', 'Une inflation basse pousse à baisser les taux', 'L\'IPC et le PCE sont les principaux indicateurs', 'L\'influence sur le Forex passe par les taux'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce que l\'inflation ?', options: ['La baisse des prix', 'La hausse générale des prix', 'La stagnation', 'La croissance'], correct: 1, explanation: 'L\'inflation mesure la hausse générale des prix dans une économie.' },
          { question: 'Quelle est la cible d\'inflation typique des banques centrales ?', options: ['0%', '2%', '10%', '50%'], correct: 1, explanation: 'La plupart des banques centrales visent une inflation d\'environ 2%.' },
          { question: 'Qu\'est-ce que l\'IPC ?', options: ['Un indicateur technique', 'L\'Indice des Prix à la Consommation', 'Un type d\'ordre', 'Une banque centrale'], correct: 1, explanation: 'L\'IPC (Indice des Prix à la Consommation) est l\'indicateur principal de l\'inflation.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'L\'IPC américain passe de 3% à 5%. <br>1. Que peut anticiper le marché ? <br>2. Quel impact possible sur l\'USD ?', correction: '1. Le marché peut anticiper une hausse de taux plus agressive de la Fed pour contrôler l\'inflation. <br>2. L\'USD pourrait se renforcer en anticipation. Mais la réaction dépend du contexte et de l\'anticipation déjà intégrée.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je suis les données d\'inflation (IPC, PCE)', 'Je comprends la relation inflation-taux-devise', 'Je ne suppose pas une réaction automatique', 'Je vérifie l\'anticipation du marché'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm4-l3', title: 'Emploi et croissance économique',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'L\'<strong>emploi</strong> (NFP, taux de chômage) et la <strong>croissance économique</strong> (PIB) mesurent la santé d\'une économie. Une économie forte attire les investissements et renforce la devise.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Le <strong>NFP</strong> (Non-Farm Payrolls) est publié le premier vendredi de chaque mois aux États-Unis. Il mesure le nombre d\'emplois créés (hors agriculture). C\'est l\'annonce la plus volatile du mois pour le Forex. Le PIB mesure la croissance économique trimestriellement.' },
        { type: 'table', headers: ['Indicateur', 'Fréquence', 'Impact'], rows: [
          ['NFP (États-Unis)', 'Mensuel (1er vendredi)', 'Très élevé'],
          ['Taux de chômage', 'Mensuel', 'Élevé'],
          ['PIB', 'Trimestriel', 'Élevé'],
          ['PMI manufacturier', 'Mensuel', 'Modéré'],
          ['Ventes au détail', 'Mensuel', 'Modéré']
        ]},
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Le NFP peut provoquer des mouvements de 50-100 pips en quelques minutes. Trader pendant le NFP sans préparation est extrêmement risqué. Comprendre ces indicateurs aide à anticiper la direction de moyen terme de la devise.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Le NFP américain annonce 300 000 emplois créés (vs 200 000 attendus).', 'Surprise positive : l\'économie est plus forte que prévu.', 'L\'USD se renforce car une économie forte peut supporter des taux élevés.', 'L\'EUR/USD baisse (USD plus fort, EUR relativement plus faible).'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Le NFP est excellent, mais le chômage augmente simultanément. Le marché réagit de manière mitigée : l\'USD monte puis revient. Les indicateurs peuvent envoyer des signaux contradictoires.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Trader pendant le NFP sans Stop Loss', 'Ne pas vérifier le calendrier économique', 'Ignorer les révisions des mois précédents', 'Supposer une réaction systématique'] },
        { type: 'summary', points: ['L\'emploi et la croissance mesurent la santé économique', 'Le NFP est l\'annonce la plus volatile du mois', 'Une économie forte renforce généralement la devise', 'Les indicateurs peuvent envoyer des signaux contradictoires', 'Ne jamais trader sans Stop Loss pendant les annonces'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce que le NFP ?', options: ['Un indicateur technique', 'Les emplois non agricoles créés aux États-Unis', 'Une banque centrale', 'Un type d\'ordre'], correct: 1, explanation: 'Le NFP (Non-Farm Payrolls) mesure le nombre d\'emplois créés aux États-Unis hors secteur agricole. C\'est l\'annonce la plus volatile du mois.' },
          { question: 'Quand le NFP est-il publié ?', options: ['Tous les jours', 'Le premier vendredi de chaque mois', 'Une fois par an', 'Le week-end'], correct: 1, explanation: 'Le NFP est publié le premier vendredi de chaque mois.' },
          { question: 'Un NFP meilleur que prévu renforce généralement ?', options: ['L\'EUR', 'L\'USD', 'Le JPY', 'Aucune devise'], correct: 1, explanation: 'Un NFP meilleur que prévu montre une économie américaine forte, ce qui renforce généralement l\'USD.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Le NFP annonce 150 000 emplois (vs 250 000 attendus). <br>1. Quelle est la surprise ? <br>2. Quel impact possible sur l\'USD ?', correction: '1. Surprise négative : 100 000 emplois de moins que prévu. L\'économie est plus faible qu\'anticipé. <br>2. L\'USD pourrait baisser car une économie plus faible pourrait pousser la Fed à maintenir des taux bas. Mais la réaction dépend du contexte global.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je vérifie le calendrier économique avant de trader', 'Je connais la date et l\'heure du NFP', 'Je ne trade pas sans Stop Loss pendant les annonces', 'Je ne suppose pas une réaction systématique'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm4-l4', title: 'Les décisions des banques centrales',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Les <strong>banques centrales</strong> (Fed, BCE, BOE, BOJ) prennent des décisions sur les taux d\'intérêt et la politique monétaire. Ces décisions influencent directement la valeur des devises et la volatilité des marchés.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Les banques centrales ont deux mandats principaux : contrôler l\'inflation et soutenir l\'emploi. Leurs décisions incluent : les taux directeurs, le quantitative easing (QE), les forward guidance (communications sur les intentions futures). La <strong>conférence de presse</strong> qui suit l\'annonce est souvent plus importante que l\'annonce elle-même.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Les décisions des banques centrales créent les tendances de fond sur le Forex. Un cycle de hausse de taux peut durer des mois et faire monter une devise sur toute la période. Comprendre la position des banques centrales aide à trader dans le sens de la tendance fondamentale.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['La BCE annonce une baisse de taux de 0,25%.', 'L\'EUR baisse immédiatement (taux plus bas = moins attractif).', 'La conférence de presse révèle des inquiétudes sur la croissance.', 'L\'EUR baisse encore plus car le discours est « dovish ».', 'La tendance baissière de l\'EUR peut durer plusieurs jours.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'La BCE baisse les taux, mais le discours est optimiste sur la croissance future. L\'EUR baisse puis remonte car le marché interprète la baisse comme temporaire. Le discours contredit l\'impact initial de la décision.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Ne pas écouter la conférence de presse', 'Ignorer le forward guidance', 'Supposer que baisse de taux = devise qui baisse toujours', 'Trader sans Stop Loss pendant les décisions'] },
        { type: 'summary', points: ['Les banques centrales contrôlent les taux et la politique monétaire', 'Leurs mandats : contrôler l\'inflation et soutenir l\'emploi', 'La conférence de presse est souvent plus importante que la décision', 'Les décisions créent les tendances de fond', 'Le discours peut contredire l\'impact initial'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Quels sont les mandats principaux des banques centrales ?', options: ['Maximiser les profits', 'Contrôler l\'inflation et soutenir l\'emploi', 'Fixer le prix des actions', 'Réguler les brokers'], correct: 1, explanation: 'Les banques centrales ont pour mandat de contrôler l\'inflation et de soutenir l\'emploi.' },
          { question: 'Qu\'est-ce qui est souvent plus important que la décision elle-même ?', options: ['La couleur du graphique', 'La conférence de presse qui suit', 'L\'heure', 'Le broker'], correct: 1, explanation: 'La conférence de presse qui suit la décision est souvent plus importante car elle donne le contexte et les intentions futures.' },
          { question: 'Qu\'est-ce que le forward guidance ?', options: ['Un indicateur technique', 'La communication sur les intentions futures de la banque centrale', 'Un type d\'ordre', 'Une stratégie'], correct: 1, explanation: 'Le forward guidance est la communication de la banque centrale sur ses intentions futures en matière de politique monétaire.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'La Fed maintient ses taux (pas de changement). Le discours est « hawkish » (plus restrictif). <br>1. Quelle réaction possible sur l\'USD ? <br>2. Pourquoi ?', correction: '1. L\'USD pourrait monter. <br>2. Un discours « hawkish » suggère que la Fed est prête à hausser les taux à l\'avenir, ce qui rend l\'USD plus attractif. Le marché anticipe la hausse future même sans changement immédiat.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je connais le calendrier des banques centrales', 'J\'écoute la conférence de presse', 'Je comprends le forward guidance', 'Je ne suppose pas une réaction automatique'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm4-l5', title: 'Les annonces économiques et le calendrier',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Un <strong>calendrier économique</strong> liste toutes les annonces économiques à venir (taux, inflation, emploi, PIB...) avec leur date, heure, valeur précédente, consensus et impact attendu. Il est indispensable pour tout trader.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Les calendriers économiques (ForexFactory, Investing.com, DailyFX) classent les annonces par impact : <strong>rouge</strong> (élevé), <strong>orange</strong> (modéré), <strong>jaune</strong> (faible). Les annonces à impact élevé peuvent provoquer des mouvements significatifs et doivent être gérées avec prudence.' },
        { type: 'table', headers: ['Annonce', 'Impact', 'Devise affectée', 'Fréquence'], rows: [
          ['Taux d\'intérêt (FOMC)', '🔴 Très élevé', 'USD', '8x/an'],
          ['NFP', '🔴 Très élevé', 'USD', 'Mensuel'],
          ['IPC (Inflation)', '🔴 Élevé', 'Toutes', 'Mensuel'],
          ['PIB', '🟠 Élevé', 'Toutes', 'Trimestriel'],
          ['PMI', '🟠 Modéré', 'Toutes', 'Mensuel'],
          ['Ventes au détail', '🟡 Modéré', 'Toutes', 'Mensuel']
        ]},
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Le calendrier économique vous permet de savoir quand le marché peut devenir volatile. Ne pas vérifier le calendrier avant de trader peut vous surprendre avec une annonce à fort impact qui provoque un mouvement violent contre votre position.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Un trader vérifie le calendrier : NFP à 14h30 (heure de Paris).', 'Il a une position ouverte sur l\'EUR/USD.', 'Il décide de fermer sa position avant l\'annonce pour éviter la volatilité.', 'Ou il réduit sa taille de position.', 'Ou il place un Stop Loss plus large temporairement.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader ouvre une position sans vérifier le calendrier. À 14h30, le NFP est publié. Le prix fait un mouvement de 80 pips en 1 minute. Son Stop Loss est touché avec un slippage de 15 pips. Il n\'était pas au courant de l\'annonce.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Ne pas vérifier le calendrier avant de trader', 'Garder des positions pendant des annonces à fort impact', 'Ne pas adapter le Stop Loss aux annonces', 'Ignorer les annonces des autres devises de la paire'] },
        { type: 'summary', points: ['Le calendrier économique liste toutes les annonces à venir', 'Les annonces sont classées par impact (rouge, orange, jaune)', 'Les annonces à fort impact peuvent provoquer de la volatilité extrême', 'Vérifier le calendrier avant de trader est obligatoire', 'Adapter sa gestion du risque aux annonces'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Que faut-il faire avant d\'ouvrir une position ?', options: ['Rien', 'Vérifier le calendrier économique', 'Regarder la TV', 'Appeler un ami'], correct: 1, explanation: 'Avant d\'ouvrir une position, il faut vérifier le calendrier économique pour savoir si une annonce à fort impact est prévue.' },
          { question: 'Quelle couleur indique un impact élevé sur le calendrier ?', options: ['Vert', 'Jaune', 'Rouge', 'Bleu'], correct: 2, explanation: 'Le rouge indique un impact élevé. Ces annonces peuvent provoquer des mouvements significatifs du marché.' },
          { question: 'Que faire si une annonce à fort impact est prévue ?', options: ['Ignorer', 'Fermer, réduire la position, ou adapter le Stop Loss', 'Augmenter le levier', 'Ouvrir plus de positions'], correct: 1, explanation: 'Face à une annonce à fort impact, on peut fermer la position, réduire sa taille, ou adapter le Stop Loss pour gérer la volatilité.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Vous avez une position ouverte sur le GBP/USD. Le calendrier montre une annonce de taux de la BOE à 13h00 (Paris). <br>1. Quel niveau d\'impact ? <br>2. Que faites-vous ?', correction: '1. Impact très élevé (rouge). Les décisions de taux de la BOE sont parmi les annonces les plus volatiles pour le GBP. <br>2. Options : fermer la position avant 13h00, réduire la taille, ou élargir le Stop Loss. Ne jamais rester sans Stop Loss.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai vérifié le calendrier économique aujourd\'hui', 'Je connais les annonces à fort impact de la journée', 'J\'ai adapté ma gestion du risque aux annonces', 'Je ne trade pas sans Stop Loss pendant les annonces'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm4-l6', title: 'Les événements géopolitiques',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Les <strong>événements géopolitiques</strong> (guerres, élections, conflits, sanctions, accords commerciaux) peuvent provoquer des mouvements brutaux et imprévisibles sur les marchés. Ils sont impossibles à anticiper avec précision.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Les événements géopolitiques affectent les marchés par leur impact sur l\'économie : un conflit dans une région productrice de pétrole peut faire monter le pétrole, des sanctions sur un pays peuvent affecter sa devise, des élections peuvent changer la politique économique. L\'or est souvent considéré comme une valeur refuge en période de tensions géopolitiques.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Les événements géopolitiques peuvent invalider instantanément une analyse technique. Un support peut être cassé par une annonce géopolitique soudaine. Savoir que ces événements existent et peuvent survenir aide à toujours protéger ses positions avec un Stop Loss.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Des tensions augmentent entre deux pays producteurs de pétrole.', 'Le pétrole monte de 5% en quelques heures.', 'L\'or monte aussi (valeur refuge).', 'Les actions baissent (aversion au risque).', 'Un trader qui suivait l\'actualité a pu anticiper ou du moins protéger ses positions.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader a une position sur l\'USD/JPY sans Stop Loss. Un événement géopolitique soudain provoque un mouvement de « risk-off » : les investisseurs se tournent vers le JPY (refuge), qui se renforce. L\'USD/JPY chute de 100 pips. Sans Stop Loss, la perte est importante.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Ignorer l\'actualité géopolitique', 'Ne pas utiliser de Stop Loss', 'Supposer que le marché ne réagira pas', 'Penser que l\'analyse technique suffit toujours'] },
        { type: 'summary', points: ['Les événements géopolitiques peuvent provoquer des mouvements brutaux', 'Ils sont impossibles à anticiper avec précision', 'L\'or est souvent une valeur refuge en période de tensions', 'Ils peuvent invalider une analyse technique', 'Le Stop Loss est encore plus important en période de tensions'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Quel actif est souvent considéré comme valeur refuge ?', options: ['Le pétrole', 'L\'or', 'Les cryptomonnaies', 'Les actions'], correct: 1, explanation: 'L\'or est traditionnellement considéré comme une valeur refuge en période d\'incertitude géopolitique.' },
          { question: 'Que peuvent faire les événements géopolitiques ?', options: ['Rien', 'Provoquer des mouvements brutaux et imprévisibles', 'Fermer le marché', 'Annuler les trades'], correct: 1, explanation: 'Les événements géopolitiques peuvent provoquer des mouvements brutaux et imprévisibles sur les marchés.' },
          { question: 'Que faut-il faire face aux risques géopolitiques ?', options: ['Ignorer', 'Toujours utiliser un Stop Loss et suivre l\'actualité', 'Augmenter le levier', 'Arrêter de trader définitivement'], correct: 1, explanation: 'Face aux risques géopolitiques, il faut toujours utiliser un Stop Loss et suivre l\'actualité pour ne pas être surpris.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Des tensions géopolitiques augmentent. <br>1. Quels actifs pourraient monter ? <br>2. Quels actifs pourraient baisser ? <br>3. Que devez-vous faire avec vos positions ?', correction: '1. L\'or (refuge), le pétrole (si la région est productrice), le JPY et le CHF (devises refuge). <br>2. Les actions (aversion au risque), les devises des pays concernés. <br>3. Vérifier les Stop Loss, réduire l\'exposition, éviter d\'ouvrir de nouvelles positions pendant l\'incertitude.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je suis l\'actualité géopolitique', 'J\'utilise toujours un Stop Loss', 'Je sais quels actifs sont des valeurs refuge', 'Je réduis l\'exposition en période d\'incertitude'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm4-l7', title: 'Anticipation et réaction du marché',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Le marché <strong>anticipe</strong> les annonces avant qu\'elles ne se produisent (le prix intègre les attentes). La <strong>réaction</strong> après l\'annonce dépend de la différence entre l\'attente et la réalité, pas uniquement de la valeur annoncée.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Si le marché attend une hausse de taux de 0,25% et que la Fed annonce effectivement 0,25%, le prix peut ne pas bouger car l\'information était « déjà prixée ». Si la Fed annonce 0,50% (surprise), le prix réagit fortement. C\'est l\'écart entre <strong>consensus</strong> et <strong>valeur réelle</strong> qui crée la volatilité.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Comprendre l\'anticipation vous évite d\'être surpris par une réaction « illogique ». Une bonne annonce peut faire baisser le prix si elle était déjà anticipée. Une mauvaise annonce peut faire monter le prix si elle était moins pire que prévu.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Le marché attend un NFP de 200 000 emplois.', 'L\'annonce est de 200 000 (exactement le consensus).', 'Le prix ne bouge presque pas : l\'information était déjà intégrée.', 'Si l\'annonce avait été de 300 000, l\'USD aurait monté fortement.', 'Si l\'annonce avait été de 100 000, l\'USD aurait baissé fortement.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader voit un NFP « bon » (200 000 emplois) et achète l\'USD. Mais le consensus était de 250 000. Le NFP est en réalité inférieur aux attentes. L\'USD baisse au lieu de monter. Le trader n\'a pas comparé la valeur au consensus.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Comparer la valeur à la précédente au lieu du consensus', 'Ignorer l\'anticipation du marché', 'Supposer qu\'une bonne annonce fait toujours monter le prix', 'Ne pas comprendre le concept de « déjà prixé »'] },
        { type: 'summary', points: ['Le marché anticipe les annonces avant qu\'elles ne se produisent', 'La réaction dépend de l\'écart entre consensus et réalité', 'Une annonce conforme au consensus peut ne provoquer aucun mouvement', 'Une surprise positive ou négative crée la volatilité', 'Toujours comparer la valeur au consensus, pas à la précédente'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce que le « déjà prixé » (priced in) ?', options: ['Le prix ne bouge pas', 'L\'information était déjà intégrée dans le prix par anticipation', 'Le prix est trop élevé', 'Le broker a fixé le prix'], correct: 1, explanation: '« Déjà prixé » signifie que le marché a déjà intégré l\'information dans le prix par anticipation, donc l\'annonce ne provoque pas de mouvement supplémentaire.' },
          { question: 'Qu\'est-ce qui crée la volatilité après une annonce ?', options: ['La valeur absolue', 'L\'écart entre le consensus et la valeur réelle', 'L\'heure', 'Le broker'], correct: 1, explanation: 'C\'est l\'écart entre la valeur attendue (consensus) et la valeur réelle qui crée la volatilité, pas la valeur absolue.' },
          { question: 'Une bonne annonce fait-elle toujours monter le prix ?', options: ['Oui', 'Non, si elle était déjà anticipée', 'Jamais', 'Seulement le matin'], correct: 1, explanation: 'Une bonne annonce ne fait pas monter le prix si elle était déjà anticipée (« déjà prixée »). C\'est la surprise qui crée le mouvement.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Le consensus pour l\'IPC est de 3,2%. L\'annonce est de 3,0%. <br>1. Quelle est la surprise ? <br>2. Quelle réaction possible sur l\'USD ?', correction: '1. L\'inflation est plus basse que prévu (3,0% vs 3,2%). C\'est une surprise négative pour l\'USD car une inflation plus basse pourrait pousser la Fed à ne pas hausser les taux. <br>2. L\'USD pourrait baisser. Mais la réaction dépend aussi du contexte global et des révisions.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je connais le consensus avant l\'annonce', 'Je compare la valeur réelle au consensus', 'Je comprends le concept de « déjà prixé »', 'Je ne suppose pas une réaction automatique'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm4-l8', title: 'Gestion du risque pendant les annonces',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'La <strong>gestion du risque pendant les annonces</strong> consiste à adapter ses positions avant, pendant et après les annonces économiques à fort impact pour limiter l\'exposition à la volatilité extrême.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Stratégies possibles : <ul><li><strong>Fermer avant l\'annonce</strong> : la méthode la plus sûre, surtout pour les débutants.</li><li><strong>Réduire la taille</strong> : garder une position mais avec une taille réduite.</li><li><strong>Élargir le Stop Loss</strong> : temporairement, pour éviter d\'être touché par le pic de volatilité.</li><li><strong>Attendre après l\'annonce</strong> : laisser la volatilité retomber avant de reprendre le trading.</li><li><strong>Trader l\'annonce</strong> : réservé aux traders expérimentés, très risqué.</li></ul>' },
        { type: 'callout', variant: 'danger', title: 'Avertissement', content: 'Trader pendant les annonces à fort impact est extrêmement risqué. Le slippage peut dépasser le Stop Loss. Les spreads peuvent s\'élargir considérablement. Les débutants doivent éviter de trader pendant ces périodes.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Les annonces à fort impact peuvent provoquer des mouvements de 50-100 pips en quelques secondes. Le slippage peut faire exécuter le Stop Loss à un prix bien pire que prévu. Les spreads peuvent passer de 1 pip à 20 pips. Sans gestion du risque, une annonce peut détruire un trade gagnant.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Un trader a une position gagnante de +30 pips sur EUR/USD.', 'Le NFP est prévu à 14h30.', 'Il décide de fermer la position à 14h25 et sécuriser son gain.', 'Le NFP provoque un mouvement de 80 pips en 1 minute.', 'S\'il avait gardé la position, il aurait pu perdre son gain et plus encore.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader garde sa position pendant le NFP avec un Stop Loss de 20 pips. Le NFP provoque un mouvement de 80 pips en 1 seconde. Le Stop Loss est exécuté avec un slippage de 30 pips. Perte totale : 50 pips au lieu de 20. Le Stop Loss n\'a pas protégé comme prévu.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Garder des positions pendant les annonces à fort impact', 'Ne pas élargir le Stop Loss avant l\'annonce', 'Ignorer le calendrier', 'Essayer de « trader l\'annonce » sans expérience'] },
        { type: 'summary', points: ['Adapter ses positions avant les annonces à fort impact', 'Fermer, réduire ou élargir le Stop Loss', 'Le slippage peut dépasser le Stop Loss pendant les annonces', 'Les spreads peuvent s\'élargir considérablement', 'Les débutants doivent éviter de trader pendant les annonces'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Que peut-il arriver au Stop Loss pendant une annonce ?', options: ['Rien', 'Slippage — exécution à un prix pire que prévu', 'Il est supprimé', 'Il est amélioré'], correct: 1, explanation: 'Pendant une annonce, la volatilité extrême peut causer un slippage : le Stop Loss est exécuté à un prix bien pire que le niveau défini.' },
          { question: 'Quelle est la méthode la plus sûre pour un débutant ?', options: ['Trader l\'annonce', 'Fermer la position avant l\'annonce', 'Augmenter le levier', 'Ignorer l\'annonce'], correct: 1, explanation: 'Fermer la position avant l\'annonce est la méthode la plus sûre, surtout pour les débutants.' },
          { question: 'Que peuvent faire les spreads pendant une annonce ?', options: ['Rétrécir', 'S\'élargir considérablement', 'Disparaître', 'Rester identiques'], correct: 1, explanation: 'Pendant une annonce, les spreads peuvent s\'élargir considérablement (de 1 pip à 20 pips ou plus), augmentant les coûts de transaction.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Vous avez une position sur le GBP/USD. La BOE annonce ses taux à 13h00. Il est 12h45. <br>1. Que faites-vous ? <br>2. Quels risques si vous ne faites rien ?', correction: '1. Options : fermer la position (plus sûr), réduire la taille, ou élargir le Stop Loss. Ne jamais rester sans Stop Loss. <br>2. Risques : slippage sur le Stop Loss, élargissement du spread, mouvement de 50-100 pips en quelques secondes, perte potentielle importante.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai vérifié le calendrier avant de trader', 'Je ferme ou réduis mes positions avant les annonces à fort impact', 'Je n\'essaie pas de trader les annonces sans expérience', 'Je sais que le slippage peut dépasser le Stop Loss'] },
        { type: 'note' }
      ]
    }
  ]
}
