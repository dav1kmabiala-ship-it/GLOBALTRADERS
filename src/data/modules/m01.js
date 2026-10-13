import { bullTrend, bearTrend, ranging } from '../../charts/candleData.js'

export default {
  id: 'm1',
  number: 1,
  title: 'Introduction aux marchés financiers',
  description: 'Comprenez ce qu\'est le trading, comment fonctionnent les marchés, et les bases essentielles pour débuter.',
  badge: 'basics',
  intro: 'Ce module pose les fondations de votre apprentissage. Vous y découvrirez ce qu\'est réellement le trading, comment les marchés financiers fonctionnent, et les premiers concepts que tout trader doit maîtriser avant d\'aller plus loin.',
  objectives: [
    'Définir le trading et ses différentes formes',
    'Comprendre le fonctionnement des marchés financiers',
    'Identifier les différents types de marchés',
    'Reconnaître les risques et erreurs fréquentes'
  ],
  lessons: [
    {
      id: 'm1-l1',
      title: 'Qu\'est-ce que le trading ?',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Le <strong>trading</strong> est l\'activité qui consiste à acheter et vendre des actifs financiers (devises, actions, matières premières, cryptomonnaies) dans le but de réaliser un profit à partir des variations de leur prix. Contrairement à un investissement à long terme, le trading se concentre sur des mouvements de prix à court ou moyen terme.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Le trader cherche à anticiper la direction que prendra le prix d\'un actif. S\'il pense que le prix va monter, il achète (position <strong>longue</strong> / <strong>buy</strong>) pour revendre plus cher. S\'il pense que le prix va baisser, il vend (position <strong>courte</strong> / <strong>sell</strong>) pour racheter moins cher.' },
        { type: 'text', content: 'Le profit provient de la différence entre le prix d\'achat et le prix de vente, diminuée des coûts de transaction (spread, commission, swap). Le trading peut être effectué sur différentes durées : le <strong>scalping</strong> (secondes à minutes), le <strong>day trading</strong> (intraday, positions fermées avant la fin de journée), le <strong>swing trading</strong> (jours à semaines) et le <strong>position trading</strong> (semaines à mois).' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Comprendre ce qu\'est réellement le trading vous évite de tomber dans les illusions véhiculées par les réseaux sociaux. Le trading n\'est pas un moyen de devenir riche rapidement : c\'une activité qui demande des connaissances, une discipline rigoureuse et une gestion du risque constante. Savoir ce que vous faites — et ce que vous ne faites pas — est la première étape vers une pratique responsable.' },
        { type: 'heading', content: 'Illustration graphique' },
        { type: 'chart', title: 'Exemple d\'un trade acheteur (Buy) sur une tendance haussière', props: {
          candles: bullTrend(16, 1.0800, 0.0012),
          annotations: [
            { type: 'arrow', candle: 2, price: 1.0810, direction: 'up', color: '#26a69a', text: 'Achat' },
            { type: 'label', candle: 2, price: 1.0810, offsetY: 20, text: 'Entrée Buy', color: '#26a69a' },
            { type: 'arrow', candle: 14, price: 1.0900, direction: 'down', color: '#26a69a', text: 'Vente' },
            { type: 'label', candle: 14, price: 1.0900, offsetY: -15, text: 'Sortie → Profit', color: '#26a69a' },
          ],
          lines: [
            { y1: 1.0810, y2: 1.0810, color: '#26a69a', dashed: true, label: 'Entrée', labelX: 0.95, labelY: 1.0810 },
            { y1: 1.0900, y2: 1.0900, color: '#26a69a', dashed: true, label: 'Sortie', labelX: 0.95, labelY: 1.0900 },
          ]
        }},
        { type: 'text', content: 'Sur ce graphique, le trader identifie une tendance haussière (les prix montent). Il entre en position d\'achat (Buy) à un prix bas, puis sort de la position à un prix plus élevé. La différence entre les deux prix, moins les frais, constitue son profit.' },
        { type: 'heading', content: 'Exemple concret étape par étape' },
        { type: 'list', ordered: true, items: [
          '<strong>Observation</strong> : L\'EUR/USD se trouve à 1,0850 et montre une tendance haussière sur le graphique H1.',
          '<strong>Analyse</strong> : Le trader estime que le prix va continuer à monter vers 1,0920.',
          '<strong>Décision</strong> : Il ouvre une position d\'achat (Buy) de 0,1 lot à 1,0850.',
          '<strong>Gestion du risque</strong> : Il place un Stop Loss à 1,0820 (30 pips de risque) et un Take Profit à 1,0920 (70 pips de gain potentiel).',
          '<strong>Résultat</strong> : Le prix atteint 1,0920. Le trade se ferme avec un gain de 70 pips × 1$ par pip (pour 0,1 lot sur EUR/USD) = 70$ de profit.'
        ]},
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Le même trader ouvre une position d\'achat à 1,0850 sans Stop Loss, persuadé que le prix va monter. Le prix chute soudainement à 1,0750 après une annonce économique. Sans Stop Loss, la perte atteint 100 pips, soit potentiellement plusieurs pourcents du capital. Cet exemple montre l\'importance de toujours protéger ses positions.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: [
          'Ouvrir des positions sans Stop Loss',
          'Risquer un pourcentage trop élevé de son capital sur un seul trade',
          'Croire que le trading est un moyen de devenir riche rapidement',
          'Trader sur la base d\'émotions (peur, avidité) plutôt que d\'une stratégie',
          'Ne pas avoir de plan de trading défini avant d\'entrer en position'
        ]},
        { type: 'summary', points: [
          'Le trading consiste à acheter et vendre des actifs pour profiter des variations de prix',
          'On peut acheter (Buy) quand on anticipe une hausse, ou vendre (Sell) quand on anticipe une baisse',
          'Le profit vient de la différence entre prix d\'achat et prix de vente, moins les frais',
          'Le trading exige des connaissances, de la discipline et une gestion rigoureuse du risque',
          'Le trading comporte un risque de perte en capital — aucun concept ne garantit un résultat'
        ]},
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce qu\'une position longue (Buy) ?', options: [
            'Vendre un actif pour le racheter moins cher',
            'Acheter un actif pour le revendre plus cher',
            'Ne pas prendre position sur le marché',
            'Parier sur la stabilité du prix'
          ], correct: 1, explanation: 'Une position longue (Buy) consiste à acheter un actif dans l\'espoir de le revendre à un prix plus élevé.' },
          { question: 'Qu\'est-ce que le day trading ?', options: [
            'Trader sur plusieurs mois',
            'Ouvrir et fermer toutes ses positions dans la même journée',
            'Trader uniquement le week-end',
            'Acheter et conserver pendant des années'
          ], correct: 1, explanation: 'Le day trading consiste à ouvrir et fermer toutes ses positions au cours de la même journée, sans laisser de positions ouvertes la nuit.' },
          { question: 'D\'où provient le profit d\'un trade ?', options: [
            'Uniquement des dividendes',
            'De la différence entre prix d\'achat et prix de vente, moins les frais',
            'Du nombre de trades effectués',
            'Du temps passé sur la plateforme'
          ], correct: 1, explanation: 'Le profit provient de la différence entre le prix d\'achat et le prix de vente, diminuée des coûts de transaction (spread, commission, swap).' },
          { question: 'Qu\'est-ce qu\'un Stop Loss ?', options: [
            'Un ordre pour maximiser les profits',
            'Un ordre qui ferme automatiquement une position en perte à un niveau prédéfini',
            'Un type de graphique',
            'Une stratégie de trading à long terme'
          ], correct: 1, explanation: 'Le Stop Loss est un ordre qui ferme automatiquement une position si le prix atteint un niveau de perte prédéfini, limitant ainsi le risque.' },
          { question: 'Le trading garantit-il un profit ?', options: [
            'Oui, si on utilise les bons indicateurs',
            'Oui, si on trade tous les jours',
            'Non, le trading comporte toujours un risque de perte',
            'Oui, si on utilise un levier élevé'
          ], correct: 2, explanation: 'Le trading comporte toujours un risque de perte en capital. Aucune stratégie ou indicateur ne garantit un profit.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Vous observez l\'EUR/USD à 1,0950. Vous pensez que le prix va baisser. <br>1. Quelle type de position ouvrez-vous ? <br>2. Si le prix tombe à 1,0900, quel est votre résultat en pips ? <br>3. Si vous tradez 0,1 lot avec une valeur de pip de 1$, quel est votre profit ?', correction: '1. Vous ouvrez une position de vente (Sell). <br>2. La différence est de 1,0950 - 1,0900 = 0,0050, soit 50 pips. <br>3. Avec 0,1 lot et 1$ par pip, le profit est de 50 × 1 = 50$.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: [
          'J\'ai défini si j\'ouvre une position d\'achat ou de vente',
          'J\'ai placé un Stop Loss',
          'J\'ai défini un Take Profit',
          'J\'ai calculé la taille de position selon mon risque',
          'Je sais pourquoi j\'entre dans ce trade',
          'Je n\'utilise pas un levier excessif'
        ]},
        { type: 'note' }
      ]
    },
    {
      id: 'm1-l2',
      title: 'Le fonctionnement des marchés financiers',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Un <strong>marché financier</strong> est un lieu (physique ou électronique) où des acheteurs et des vendeurs se rencontrent pour échanger des actifs financiers. C\'est l\'endroit où le prix d\'un actif est déterminé par la rencontre entre l\'offre (ceux qui veulent vendre) et la demande (ceux qui veulent acheter).' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Les marchés financiers modernes fonctionnent principalement de manière électronique. Des plateformes comme les bourses (NYSE, Euronext), le marché Forex (devises), ou les plateformes de CFD connectent des millions de participants à travers le monde. Le prix d\'un actif y évolue en temps réel selon l\'équilibre entre acheteurs et vendeurs.' },
        { type: 'text', content: 'Les marchés remplissent plusieurs rôles : ils permettent aux entreprises de financer leur développement (émission d\'actions), aux investisseurs de placer leur capital, et aux traders de spéculer sur les mouvements de prix. Les marchés sont animés par des participants variés : banques centrales, banques commerciales, fonds d\'investissement, entreprises, et traders individuels.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Comprendre le fonctionnement du marché vous aide à réaliser que le prix n\'est pas manipulé par une seule entité, mais résulte de l\'interaction de millions de décisions. Cela vous aide aussi à comprendre pourquoi les prix réagissent à l\'actualité et pourquoi certains marchés sont plus liquides que d\'autres.' },
        { type: 'heading', content: 'Illustration graphique' },
        { type: 'chart', title: 'Le carnet d\'ordres : rencontre entre acheteurs et vendeurs', props: {
          candles: ranging(14, 1.1000, 0.0008),
          annotations: [
            { type: 'label', candle: 3, price: 1.1015, text: 'Acheteurs (Demand)', color: '#26a69a' },
            { type: 'label', candle: 3, price: 1.0985, text: 'Vendeurs (Offer)', color: '#ef5350' },
            { type: 'label', candle: 7, price: 1.1000, text: 'Spread', color: '#ffa726' },
          ],
          zones: [
            { top: 1.1015, bottom: 1.1000, color: 'rgba(38,166,154,0.08)', label: 'Acheteurs', labelColor: '#26a69a' },
            { top: 1.1000, bottom: 1.0985, color: 'rgba(239,83,80,0.08)', label: 'Vendeurs', labelColor: '#ef5350' },
          ]
        }},
        { type: 'text', content: 'Le graphique illustre le principe du carnet d\'ordres : les acheteurs placent leurs ordres à un certain prix (demande), les vendeurs placent les leurs à un prix légèrement supérieur (offre). La différence entre les deux est le <strong>spread</strong>. Quand un acheteur accepte le prix des vendeurs, une transaction se réalise.' },
        { type: 'heading', content: 'Exemple concret étape par étape' },
        { type: 'list', ordered: true, items: [
          'Sur l\'EUR/USD, le meilleur prix d\'achat (bid) est 1,0850 et le meilleur prix de vente (ask) est 1,0852. Le spread est de 2 pips.',
          'Un trader veut acheter immédiatement : il paie le prix ask de 1,0852.',
          'Un autre trader veut vendre immédiatement : il reçoit le prix bid de 1,0850.',
          'La différence de 2 pips est captée par le broker ou le teneur de marché.',
          'Si beaucoup d\'acheteurs entrent sur le marché, le prix ask va monter car les vendeurs exigent un prix plus élevé.'
        ]},
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Sur un marché peu liquide (par exemple une paire exotique comme USD/ZAR), le spread peut atteindre 50 pips ou plus. Un trader qui achète et revend immédiatement perd déjà 50 pips, soit un montant significatif. Ceci montre que la liquidité du marché affecte directement les coûts de trading.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: [
          'Ignorer le spread et les coûts de transaction dans ses calculs',
          'Trader sur des marchés peu liquides sans comprendre les risques',
          'Croire que le marché est toujours rationnel',
          'Ne pas savoir distinguer les différents types de marchés (centralisé vs décentralisé)'
        ]},
        { type: 'summary', points: [
          'Un marché financier est un lieu de rencontre entre acheteurs et vendeurs',
          'Le prix résulte de l\'équilibre entre l\'offre et la demande',
          'Le spread est la différence entre le prix d\'achat (ask) et le prix de vente (bid)',
          'La liquidité d\'un marché influence directement le spread et les coûts',
          'Les marchés sont animés par des participants variés aux objectifs différents'
        ]},
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce que le spread ?', options: [
            'La commission fixe du broker',
            'La différence entre le prix d\'achat (ask) et le prix de vente (bid)',
            'Le nombre de trades par jour',
            'La taille d\'une position'
          ], correct: 1, explanation: 'Le spread est la différence entre le prix auquel vous pouvez acheter (ask) et le prix auquel vous pouvez vendre (bid) un actif.' },
          { question: 'Qui participe aux marchés financiers ?', options: [
            'Uniquement les traders individuels',
            'Uniquement les banques',
            'Banques centrales, banques, fonds, entreprises et traders individuels',
            'Uniquement les gouvernements'
          ], correct: 2, explanation: 'Les marchés financiers sont animés par une grande variété de participants : banques centrales, banques commerciales, fonds d\'investissement, entreprises et traders individuels.' },
          { question: 'Que se passe-t-il quand il y a plus d\'acheteurs que de vendeurs ?', options: [
            'Le prix baisse',
            'Le prix monte',
            'Le prix ne change pas',
            'Le marché ferme'
          ], correct: 1, explanation: 'Quand la demande (acheteurs) dépasse l\'offre (vendeurs), le prix a tendance à monter car les acheteurs sont prêts à payer plus cher.' },
          { question: 'Pourquoi un marché peu liquide a-t-il un spread plus important ?', options: [
            'Parce qu\'il y a moins d\'acheteurs et vendeurs pour combler l\'écart',
            'Parce que le broker prend plus de commission',
            'Parce que le marché est fermé',
            'Parce que le prix est trop élevé'
          ], correct: 0, explanation: 'Sur un marché peu liquide, il y a moins d\'ordres en attente, ce qui élargit l\'écart entre le meilleur prix d\'achat et le meilleur prix de vente.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Le bid de l\'EUR/USD est 1,0948 et l\'ask est 1,0951. <br>1. Quel est le spread en pips ? <br>2. Si vous achetez puis revendez immédiatement au bid, combien perdez-vous en pips ?', correction: '1. Le spread est de 1,0951 - 1,0948 = 0,0003, soit 3 pips. <br>2. Vous achetez à 1,0951 (ask) et revendez à 1,0948 (bid). La perte est de 3 pips, ce qui correspond au spread. C\'est votre coût de transaction immédiat.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: [
          'Je connais le spread de l\'actif que je trade',
          'Je comprends que le prix résulte de l\'offre et la demande',
          'Je sais qu\'un marché liquide a un spread plus serré',
          'Je tiens compte des coûts dans mes calculs de profit'
        ]},
        { type: 'note' }
      ]
    },
    {
      id: 'm1-l3',
      title: 'Trading, investissement et spéculation : les différences',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Le <strong>trading</strong>, l\'<strong>investissement</strong> et la <strong>spéculation</strong> sont trois approches différentes des marchés financiers. L\'investissement vise le long terme avec une analyse fondamentale, le trading vise le court/moyen terme avec une analyse technique, et la spéculation prend des risques élevés pour des gains rapides.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'table', headers: ['Critère', 'Investissement', 'Trading', 'Spéculation'], rows: [
          ['Horizon', 'Années', 'Minutes à semaines', 'Très court terme'],
          ['Approche', 'Analyse fondamentale', 'Analyse technique + fondamentale', 'Souvent intuitive ou impulsif'],
          ['Risque', 'Modéré', 'Variable selon la stratégie', 'Élevé'],
          ['Objectif', 'Croissance du capital', 'Profit régulier', 'Gains rapides'],
          ['Fréquence', 'Quelques transactions/an', 'Plusieurs par jour/semaine', 'Très fréquent'],
          ['Gestion du risque', 'Diversification', 'Stop Loss, taille de position', 'Souvent négligée']
        ]},
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Beaucoup de débutants confondent ces trois approches et adoptent un comportement hybride qui mène à des pertes. Un investisseur qui se met à trader impulsivement quand son action baisse, ou un trader qui se transforme en investisseur en gardant une position perdante « en attendant que ça remonte », font des erreurs classiques. Savoir quelle approche vous pratiquez vous aide à rester cohérent.' },
        { type: 'heading', content: 'Exemple concret étape par étape' },
        { type: 'list', ordered: true, items: [
          '<strong>Investisseur</strong> : Achète des actions Apple à 150$ car il croit dans la société à long terme. Compte les garder 5 ans.',
          '<strong>Trader</strong> : Achette Apple à 150$ avec un Stop Loss à 148$ et un Take Profit à 155$. Sort dans la journée ou la semaine.',
          '<strong>Spéculateur</strong> : Achète Apple à 150$ avec un levier de 100x, sans Stop Loss, en espérant un gain de 50% en une heure.',
          'Les trois peuvent faire un profit, mais les niveaux de risque sont radicalement différents.'
        ]},
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader achète l\'EUR/USD à 1,0900 avec un objectif de jour. Le prix baisse à 1,0850. Au lieu de couper sa perte comme prévu, il décide de « garder la position en investissement ». Le prix continue à baisser à 1,0700. La perte s\'aggrave considérablement. Ce comportement — transformer un trade en investissement — est l\'une des causes principales de pertes importantes.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: [
          'Confondre trading et investissement',
          'Garder une position perdante en espérant qu\'elle remonte',
          'Spéculer sans plan ni gestion du risque',
          'Changer d\'approche en cours de trade'
        ]},
        { type: 'summary', points: [
          'L\'investissement vise le long terme avec une analyse fondamentale',
          'Le trading vise le court/moyen terme avec un plan défini',
          'La spéculation prend des risques élevés pour des gains rapides',
          'Rester cohérent dans son approche est essentiel',
          'Ne jamais transformer un trade perdant en « investissement »'
        ]},
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Quelle est la principale différence entre trading et investissement ?', options: [
            'Le type d\'actif',
            'L\'horizon temporel et l\'approche d\'analyse',
            'Le broker utilisé',
            'Le pays'
          ], correct: 1, explanation: 'L\'investissement vise le long terme avec une analyse fondamentale, tandis que le trading vise le court/moyen terme avec une analyse plus technique.' },
          { question: 'Qu\'est-ce qui caractérise la spéculation ?', options: [
            'Une gestion rigoureuse du risque',
            'Un horizon long terme',
            'Un risque élevé pour des gains rapides',
            'Une diversification systématique'
          ], correct: 2, explanation: 'La spéculation se caractérise par la prise de risques élevés dans le but de réaliser des gains rapides.' },
          { question: 'Que faire quand un trade perdant atteint son Stop Loss ?', options: [
            'Garder la position en espérant une remontée',
            'Ajouter à la position pour moyenner',
            'Fermer la position comme prévu dans le plan',
            'Augmenter le levier'
          ], correct: 2, explanation: 'Quand le Stop Loss est atteint, il faut fermer la position comme prévu. Garder une position perdante est une erreur classique.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Lisez les trois scénarios et identifiez s\'il s\'agit d\'investissement, de trading ou de spéculation : <br>A. Acheter des actions Total pour les garder 10 ans. <br>B. Acheter l\'EUR/USD avec un SL et un TP, sortie prévue dans la journée. <br>C. Acheter un contrat crypto avec 50x de levier sans Stop Loss.', correction: 'A. Investissement — horizon long terme, approche fondamentale. <br>B. Trading — horizon court terme, plan défini avec SL et TP. <br>C. Spéculation — risque très élevé, pas de gestion du risque, recherche de gains rapides.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: [
          'Je sais quelle approche je pratique (investissement, trading, spéculation)',
          'Je reste cohérent dans mon approche',
          'Je ne transforme pas un trade perdant en investissement',
          'Mon horizon temporel est défini avant d\'entrer en position'
        ]},
        { type: 'note' }
      ]
    },
    {
      id: 'm1-l4',
      title: 'Les acheteurs et les vendeurs',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Sur tout marché, il y a des <strong>acheteurs</strong> (la demande) et des <strong>vendeurs</strong> (l\'offre). Les acheteurs veulent acheter à un prix bas, les vendeurs veulent vendre à un prix élevé. Le prix final est le résultat de cette confrontation.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Les acheteurs et les vendeurs ne sont pas tous identiques. On distingue : les <strong>teneurs de marché</strong> (market makers) qui offrent des prix en continu, les <strong>investisseurs institutionnels</strong> (banques, fonds) qui traitent de gros volumes, les <strong>traders de détail</strong> (particuliers) qui traitent de petits volumes, et les <strong>market takers</strong> qui prennent les prix affichés sans les proposer.' },
        { type: 'text', content: 'Quand les acheteurs sont plus agressifs, ils acceptent de payer le prix ask, ce qui pousse le prix à la hausse. Quand les vendeurs sont plus agressifs, ils acceptent le prix bid, ce qui pousse le prix à la baisse. C\'est ce déséquilibre temporaire qui crée les mouvements de prix.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Comprendre la dynamique acheteurs/vendeurs vous aide à interpréter les mouvements de prix. Quand le prix monte rapidement, cela signifie qu\'il y a un afflux d\'acheteurs agressifs. Quand le prix chute, ce sont les vendeurs qui dominent. Cette compréhension est la base de l\'analyse technique et des concepts SMC.' },
        { type: 'heading', content: 'Illustration graphique' },
        { type: 'chart', title: 'Dominance des acheteurs vs vendeurs sur le prix', props: {
          candles: [...bullTrend(8, 1.0800, 0.001), ...bearTrend(8, 1.0880, 0.001)],
          annotations: [
            { type: 'label', candle: 3, price: 1.0830, text: 'Acheteurs dominent', color: '#26a69a' },
            { type: 'label', candle: 11, price: 1.0870, text: 'Vendeurs dominent', color: '#ef5350' },
          ],
          zones: [
            { top: 1.0890, bottom: 1.0800, color: 'rgba(38,166,154,0.05)', label: 'Pression acheteuse' },
          ]
        }},
        { type: 'text', content: 'Sur la première moitié du graphique, les acheteurs dominent et le prix monte. Sur la seconde moitié, les vendeurs prennent le dessus et le prix baisse. La transition entre les deux marque un changement d\'équilibre.' },
        { type: 'heading', content: 'Exemple concret étape par étape' },
        { type: 'list', ordered: true, items: [
          'Une bonne annonce économique sur l\'USD attire de nombreux acheteurs d\'USD.',
          'Les acheteurs achètent massivement, acceptant des prix de plus en plus élevés.',
          'Le prix de l\'USD monte par rapport à l\'EUR : l\'EUR/USD baisse.',
          'Les vendeurs d\'EUR/USD (qui vendent EUR, achètent USD) profitent de cette dynamique.',
          'Le mouvement continue jusqu\'à ce que l\'équilibre entre acheteurs et vendeurs se rétablit.'
        ]},
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader voit le prix monter et suppose que les acheteurs vont toujours dominer. Il achète au sommet, juste au moment où les derniers acheteurs ont fini d\'entrer et où les vendeurs commencent à prendre le dessus. Le prix se retourne et le trader perd. Le momentum acheteur ne dure pas indéfiniment.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: [
          'Acheter au sommet quand les acheteurs sont sur le point de s\'épuiser',
          'Vendre au creux quand les vendeurs sont sur le point de se retirer',
          'Confondre un mouvement ponctuel avec une tendance durable',
          'Ne pas reconnaître le changement de dominance entre acheteurs et vendeurs'
        ]},
        { type: 'summary', points: [
          'Le prix bouge selon le déséquilibre entre acheteurs et vendeurs',
          'Plus d\'acheteurs agressifs → le prix monte',
          'Plus de vendeurs agressifs → le prix baisse',
          'Le momentum d\'un côté ne dure pas éternellement',
          'Comprendre cette dynamique est la base de l\'analyse du prix'
        ]},
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Que se passe-t-il quand les acheteurs sont plus agressifs que les vendeurs ?', options: [
            'Le prix baisse',
            'Le prix monte',
            'Le prix reste stable',
            'Le marché ferme'
          ], correct: 1, explanation: 'Quand les acheteurs sont plus agressifs, ils acceptent de payer plus cher, ce qui pousse le prix à la hausse.' },
          { question: 'Qui sont les teneurs de marché (market makers) ?', options: [
            'Des traders particuliers',
            'Des entités qui offrent des prix d\'achat et de vente en continu',
            'Des régulateurs',
            'Des analystes'
          ], correct: 1, explanation: 'Les teneurs de marché sont des institutions qui proposent en permanence un prix d\'achat (bid) et un prix de vente (ask), assurant la liquidité du marché.' },
          { question: 'Pourquoi le prix ne monte-t-il pas indéfiniment ?', options: [
            'Parce que le broker l\'empêche',
            'Parce que les acheteurs finissent par s\'épuiser et les vendeurs prennent le dessus',
            'Parce que le marché ferme',
            'Parce que c\'est impossible techniquement'
          ], correct: 1, explanation: 'À un certain niveau, les acheteurs les plus agressifs ont fini d\'entrer et les vendeurs commencent à dominer, ce qui fait baisser le prix.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Observez un graphique en chandeliers. Sur les 10 dernières bougies, identifiez : <br>1. Les périodes où les acheteurs dominent <br>2. Les périodes où les vendeurs dominent <br>3. Le moment où la dominance change', correction: '1. Les bougies haussières (vertes) indiquent une dominance acheteuse. <br>2. Les bougies baissières (rouges) indiquent une dominance vendeuse. <br>3. Le changement de dominance se manifeste souvent par une bougie de retournement (doji, pin bar, engulfing) ou par une cassure de structure.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: [
          'J\'identifie qui domine actuellement : acheteurs ou vendeurs',
          'Je cherche des signes d\'épuisement d\'un côté',
          'Je ne suppose pas qu\'un momentum va durer éternellement',
          'Je cherche le moment où la dominance pourrait changer'
        ]},
        { type: 'note' }
      ]
    },
    {
      id: 'm1-l5',
      title: 'L\'offre et la demande',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'L\'<strong>offre</strong> représente la quantité d\'un actif que les vendeurs sont prêts à vendre à un prix donné. La <strong>demande</strong> représente la quantité que les acheteurs sont prêts à acheter à ce prix. Quand la demande dépasse l\'offre, le prix monte. Quand l\'offre dépasse la demande, le prix baisse.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'La loi de l\'offre et de la demande est le mécanisme fondamental qui détermine les prix sur tout marché. À un prix élevé, plus de vendeurs veulent vendre (l\'offre augmente) mais moins d\'acheteurs veulent acheter (la demande diminue). À un prix bas, c\'l\'inverse : moins de vendeurs, plus d\'acheteurs.' },
        { type: 'text', content: 'Le prix d\'équilibre est le point où l\'offre égale la demande. Sur les marchés financiers, cet équilibre est dynamique et change constamment en fonction de l\'actualité, des annonces économiques, et du sentiment des participants.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'L\'offre et la demande expliquent pourquoi les prix bougent. En trading, on cherche à identifier les zones où l\'offre ou la demande est concentrée, car ce sont des zones où le prix est susceptible de réagir. Les supports et résistances, les zones d\'order blocks et les zones de liquidité sont tous des manifestations de concentrations d\'offre et de demande.' },
        { type: 'heading', content: 'Illustration graphique' },
        { type: 'chart', title: 'Offre et demande : zones de déséquilibre', props: {
          candles: ranging(16, 1.1000, 0.0008),
          zones: [
            { top: 1.1020, bottom: 1.1010, color: 'rgba(239,83,80,0.1)', label: 'Zone d\'offre (résistance)', labelColor: '#ef5350' },
            { top: 1.0990, bottom: 1.0980, color: 'rgba(38,166,154,0.1)', label: 'Zone de demande (support)', labelColor: '#26a69a' },
          ],
          annotations: [
            { type: 'label', candle: 5, price: 1.1015, text: 'Vendeurs', color: '#ef5350' },
            { type: 'label', candle: 5, price: 1.0985, text: 'Acheteurs', color: '#26a69a' },
          ]
        }},
        { type: 'text', content: 'La zone rouge représente une zone d\'offre : beaucoup de vendeurs y placent leurs ordres, ce qui pousse le prix à la baisse quand il l\'atteint. La zone verte représente une zone de demande : les acheteurs y sont concentrés, ce qui pousse le prix à la hausse.' },
        { type: 'heading', content: 'Exemple concret étape par étape' },
        { type: 'list', ordered: true, items: [
          'L\'EUR/USD évolue dans un range entre 1,0980 et 1,1020.',
          'À 1,1020, de nombreux vendeurs placent leurs ordres de vente (offre concentrée).',
          'Quand le prix approche 1,1020, les acheteurs sont moins nombreux car le prix est jugé élevé.',
          'L\'offre dépasse la demande → le prix baisse.',
          'À 1,0980, c\'l\'inverse : la demande dépasse l\'offre → le prix remonte.'
        ]},
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Le prix atteint la zone de demande à 1,0980, mais une annonce économique négative sur l\'EUR augmente massivement l\'offre (ventes). La zone de demande est absorbée et le prix casse sous 1,0980. Une zone de demande n\'est pas un mur infranchissable : elle peut être vaincue par un déséquilibre suffisant.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: [
          'Croire qu\'une zone d\'offre ou de demande est toujours respectée',
          'Ne pas tenir compte du contexte de marché',
          'Confondre une zone de demande avec un niveau exact',
          'Ignorer que les zones peuvent être cassées par un déséquilibre suffisant'
        ]},
        { type: 'summary', points: [
          'L\'offre et la demande déterminent le prix sur tout marché',
          'Demande > Offre → le prix monte',
          'Offre > Demande → le prix baisse',
          'Les zones de concentration d\'offres/de demandes sont des zones de réaction potentielle',
          'Aucune zone n\'est garantie : un déséquilibre suffisant peut la traverser'
        ]},
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Que se passe-t-il quand la demande dépasse l\'offre ?', options: [
            'Le prix baisse',
            'Le prix monte',
            'Le prix ne change pas',
            'Le marché ferme'
          ], correct: 1, explanation: 'Quand la demande dépasse l\'offre, les acheteurs sont prêts à payer plus cher, ce qui fait monter le prix.' },
          { question: 'Qu\'est-ce qu\'une zone d\'offre ?', options: [
            'Une zone où les acheteurs sont concentrés',
            'Une zone où les vendeurs sont concentrés, pouvant faire baisser le prix',
            'Une zone sans transactions',
            'Une zone de profit garanti'
          ], correct: 1, explanation: 'Une zone d\'offre est une zone où de nombreux vendeurs placent leurs ordres, ce qui peut faire baisser le prix quand celui-ci l\'atteint.' },
          { question: 'Une zone de demande peut-elle être cassée ?', options: [
            'Non, jamais',
            'Oui, si l\'offre est suffisamment importante',
            'Seulement le week-end',
            'Seulement par le broker'
          ], correct: 1, explanation: 'Une zone de demande peut être cassée si l\'offre (ventes) est suffisamment importante pour absorber toute la demande présente à ce niveau.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Sur un graphique, identifiez une zone où le prix a rebondi plusieurs fois à la hausse. <br>1. S\'agit-il d\'une zone d\'offre ou de demande ? <br>2. Que se passe-t-il à ce niveau ?', correction: '1. Si le prix rebondit à la hausse, c\'est une zone de demande (support). Les acheteurs y sont concentrés. <br>2. À ce niveau, la demande dépasse l\'offre, ce qui pousse le prix à la hausse. Mais cette zone peut être cassée si l\'offre devient suffisamment importante.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: [
          'J\'identifie les zones où l\'offre et la demande sont concentrées',
          'Je comprends que ces zones sont des zones de réaction, pas des garanties',
          'Je tiens compte du contexte de marché',
          'Je sais qu\'une zone peut être cassée par un déséquilibre suffisant'
        ]},
        { type: 'note' }
      ]
    },
    {
      id: 'm1-l6',
      title: 'La formation des prix',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Le <strong>prix</strong> d\'un actif financier est déterminé par la rencontre entre le dernier prix auquel un acheteur et un vendeur ont accepté de transiger. Ce prix évolue en continu selon l\'équilibre entre l\'offre et la demande.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Sur les plateformes de trading, le prix affiché est le dernier prix auquel une transaction a eu lieu (le prix de marché). Ce prix change à chaque nouvelle transaction. Les graphiques de prix représentent l\'évolution de ce prix au fil du temps, sous forme de lignes, de barres ou de chandeliers japonais.' },
        { type: 'text', content: 'Le prix se déplace en zigzag : il monte par impulsions et retracements, créant des sommets et des creux. Ces sommets et creux forment la <strong>structure du marché</strong>, qui sera étudiée en détail dans les modules avancés SMC.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Comprendre comment le prix se forme vous aide à lire un graphique. Le prix n\'est pas aléatoire : il suit des mouvements structurés que l\'on peut analyser. Savoir lire la structure des prix est la compétence la plus importante en trading.' },
        { type: 'heading', content: 'Illustration graphique' },
        { type: 'chart', title: 'Évolution du prix : sommets, creux et tendance', props: {
          candles: bullTrend(18, 1.0800, 0.001),
          annotations: [
            { type: 'circle', candle: 2, price: 1.0815, color: '#00d4ff', text: 'SH1' },
            { type: 'label', candle: 2, price: 1.0815, offsetY: -15, text: 'Sommet', color: '#00d4ff' },
            { type: 'circle', candle: 5, price: 1.0830, color: '#ffa726', text: 'SL1' },
            { type: 'label', candle: 5, price: 1.0830, offsetY: 15, text: 'Creux', color: '#ffa726' },
            { type: 'circle', candle: 9, price: 1.0860, color: '#00d4ff' },
            { type: 'label', candle: 9, price: 1.0860, offsetY: -15, text: 'Sommet plus haut', color: '#00d4ff' },
            { type: 'circle', candle: 12, price: 1.0850, color: '#ffa726' },
            { type: 'label', candle: 12, price: 1.0850, offsetY: 15, text: 'Creux plus haut', color: '#ffa726' },
          ],
          lines: [
            { y1: 1.0815, y2: 1.0815, x1: 0.1, x2: 0.5, color: '#00d4ff', dashed: true, label: 'SH1', labelX: 0.05, labelY: 1.0815 },
            { y1: 1.0860, y2: 1.0860, x1: 0.4, x2: 0.8, color: '#00d4ff', dashed: true, label: 'SH2 > SH1', labelX: 0.75, labelY: 1.0860 },
          ]
        }},
        { type: 'text', content: 'Sur ce graphique, le prix forme des sommets (SH) et des creux (SL) de plus en plus élevés : c\'est une tendance haussière. Les sommets montent (SH2 > SH1) et les creux montent aussi (SL2 > SL1). Cette structure est la base de l\'analyse de marché.' },
        { type: 'heading', content: 'Exemple concret étape par étape' },
        { type: 'list', ordered: true, items: [
          'Le prix de l\'EUR/USD part de 1,0800.',
          'Il monte à 1,0850 (premier sommet), puis redescend à 1,0820 (premier creux).',
          'Il remonte à 1,0880 (sommet plus élevé), puis redescend à 1,0850 (creux plus élevé).',
          'Cette succession de sommets et creux plus élevés forme une tendance haussière.',
          'Le trader peut décider d\'acheter sur les creux et de vendre sur les sommets, tout en gérant son risque.'
        ]},
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Le prix monte à 1,0880 (sommet), mais au lieu de faire un creux plus élevé, il casse sous le creux précédent de 1,0850. La structure haussière est rompue. Un trader qui achète aveuglément en supposant que la tendance continue se retrouve en perte. La structure peut changer à tout moment.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: [
          'Ne pas reconnaître la structure du marché (sommets et creux)',
          'Supposer qu\'une tendance va continuer indéfiniment',
          'Ignorer les changements de structure',
          'Confondre un mouvement de prix avec une tendance'
        ]},
        { type: 'summary', points: [
          'Le prix est déterminé par les transactions entre acheteurs et vendeurs',
          'Le prix évolue en zigzag, formant des sommets et des creux',
          'La succession de sommets et creux définit la structure du marché',
          'Des sommets et creux plus élevés = tendance haussière',
          'Des sommets et creux plus bas = tendance baissière'
        ]},
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Comment identifie-t-on une tendance haussière ?', options: [
            'Des sommets et creux de plus en plus bas',
            'Des sommets et creux de plus en plus élevés',
            'Un prix qui ne bouge pas',
            'Un prix qui chute brusquement'
          ], correct: 1, explanation: 'Une tendance haussière se caractérise par des sommets (higher highs) et des creux (higher lows) de plus en plus élevés.' },
          { question: 'Qu\'est-ce que le prix affiché sur une plateforme ?', options: [
            'Le prix que le broker choisit',
            'Le dernier prix auquel une transaction a eu lieu',
            'Le prix moyen de la journée',
            'Le prix fixé par la banque centrale'
          ], correct: 1, explanation: 'Le prix affiché est le dernier prix auquel un acheteur et un vendeur ont accepté de transiger.' },
          { question: 'Le prix se déplace comment sur un graphique ?', options: [
            'En ligne droite',
            'En zigzag, par impulsions et retracements',
            'Toujours à la hausse',
            'Toujours à la baisse'
          ], correct: 1, explanation: 'Le prix se déplace en zigzag, alternant impulsions (mouvements directionnels) et retracements (mouvements correctifs).' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Sur un graphique en chandeliers, identifiez les 3 derniers sommets et les 3 derniers creux. <br>1. Les sommets montent-ils ou descendent-ils ? <br>2. Les creux montent-ils ou descendent-ils ? <br>3. Quelle est la tendance actuelle ?', correction: 'Si les sommets et les creux montent → tendance haussière. Si les sommets et les creux descendent → tendance baissière. Si les sommets et les creux sont plats → consolidation (range). La tendance se définit par la direction des sommets et des creux.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: [
          'J\'identifie les sommets et les creux sur le graphique',
          'Je compare les sommets entre eux et les creux entre eux',
          'Je détermine la tendance (haussière, baissière, ou range)',
          'Je sais que la tendance peut changer'
        ]},
        { type: 'note' }
      ]
    },
    {
      id: 'm1-l7',
      title: 'Les marchés : Forex, indices, actions, matières premières et cryptomonnaies',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Il existe plusieurs types de marchés financiers sur lesquels un trader peut intervenir : le <strong>Forex</strong> (devises), les <strong>indices</strong> boursiers, les <strong>actions</strong>, les <strong>matières premières</strong> (commodities) et les <strong>cryptomonnaies</strong>. Chaque marché a ses propres caractéristiques, ses heures d\'ouverture et son profil de risque.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'table', headers: ['Marché', 'Description', 'Horaires (approx.)', 'Particularités'], rows: [
          ['Forex', 'Échange de paires de devises (EUR/USD, GBP/JPY...)', '24h/24 du lundi au vendredi', 'Marché le plus liquide au monde, levier élevé'],
          ['Indices', 'Panier d\'actions représentatif (DAX, S&P500...)', 'Selon la bourse concernée', 'Exposition à un marché entier, pas une seule action'],
          ['Actions', 'Titres de propriété d\'une entreprise', 'Heures de bourse', 'Dividendes possibles, analyse fondamentale importante'],
          ['Matières premières', 'Or, pétrole, gaz, blé, cuivre...', 'Selon le marché', 'Sensibles à l\'offre/demande physique et à la géopolitique'],
          ['Cryptomonnaies', 'Bitcoin, Ethereum, altcoins...', '24h/24, 7j/7', 'Très volatil, marché décentralisé, pas de régulation uniforme']
        ]},
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Chaque marché a un comportement différent. Le Forex est très liquide mais peut être moins volatil, les cryptomonnaies sont très volatiles mais moins régulées, les matières premières réagissent à des facteurs physiques (sécheresse, guerre). Choisir le marché adapté à son profil est une décision fondamentale.' },
        { type: 'heading', content: 'Exemple concret étape par étape' },
        { type: 'list', ordered: true, items: [
          'Un trader débutant choisit le Forex car c\'est le marché le plus accessible et le plus documenté.',
          'Il commence par l\'EUR/USD, la paire la plus liquide, avec le spread le plus serré.',
          'Plus tard, il diversifie vers les indices (DAX) pour profiter de mouvements plus amples.',
          'Il évite les cryptomonnaies au début car leur volatilité est trop élevée pour son niveau.',
          'Il garde les matières premières pour plus tard, quand il aura plus d\'expérience.'
        ]},
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un débutant se lance directement sur les cryptomonnaies avec un levier de 100x. La volatilité extrême provoque des mouvements de 10-20% en quelques heures. Sans expérience ni gestion du risque, il perd la majorité de son capital en quelques jours. Chaque marché nécessite une préparation adaptée.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: [
          'Commencer par le marché le plus volatil sans expérience',
          'Trader plusieurs marchés en même temps sans les connaître',
          'Ignorer les horaires d\'ouverture et de fermeture des marchés',
          'Ne pas adapter sa stratégie au marché choisi'
        ]},
        { type: 'summary', points: [
          'Il existe 5 grands types de marchés : Forex, indices, actions, matières premières, cryptomonnaies',
          'Chaque marché a ses propres caractéristiques, horaires et profil de risque',
          'Le Forex est le plus liquide et accessible pour les débutants',
          'Les cryptomonnaies sont les plus volatiles et nécessitent de l\'expérience',
          'Choisir le bon marché selon son profil est une décision fondamentale'
        ]},
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Quel est le marché le plus liquide au monde ?', options: ['Le marché des actions', 'Le Forex', 'Le marché des cryptomonnaies', 'Le marché des matières premières'], correct: 1, explanation: 'Le Forex (marché des devises) est le marché le plus liquide au monde, avec un volume quotidien de plusieurs milliers de milliards de dollars.' },
          { question: 'Quelle particularité des cryptomonnaies ?', options: ['Elles sont peu volatiles', 'Elles sont ouvertes uniquement en semaine', 'Elles sont très volatiles et ouvertes 24h/24, 7j/7', 'Elles ne peuvent pas être tradées'], correct: 2, explanation: 'Les cryptomonnaies sont très volatiles et le marché est ouvert 24h/24, 7j/7, sans interruption.' },
          { question: 'Qu\'est-ce qu\'un indice boursier ?', options: ['Une seule action', 'Un panier d\'actions représentatif d\'un marché', 'Une devise', 'Une matière première'], correct: 1, explanation: 'Un indice boursier est un panier d\'actions représentatif d\'un marché ou d\'un secteur (ex: DAX pour la bourse allemande, S&P500 pour les États-Unis).' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Classez ces marchés du moins volatil au plus volatil pour un trader débutant : <br>A. EUR/USD (Forex) <br>B. Bitcoin (Crypto) <br>C. Or (Matière première) <br>D. DAX (Indice)', correction: 'Ordre approximatif du moins volatil au plus volatil : A (EUR/USD) < C (Or) < D (DAX) < B (Bitcoin). L\'EUR/USD est la paire la plus liquide et la moins volatile. Le Bitcoin est l\'actif le plus volatile de cette liste. Cet ordre peut varier selon les conditions de marché.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: [
          'Je connais les caractéristiques du marché sur lequel je trade',
          'J\'ai choisi un marché adapté à mon niveau d\'expérience',
          'Je connais les horaires d\'ouverture du marché',
          'Je n\'ai pas diversifié prématurément sur des marchés que je ne connais pas'
        ]},
        { type: 'note' }
      ]
    },
    {
      id: 'm1-l8',
      title: 'Marchés centralisés et décentralisés',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Un marché <strong>centralisé</strong> (comme une bourse) passe par une place de marché unique qui centralise toutes les transactions. Un marché <strong>décentralisé</strong> (comme le Forex ou les cryptomonnaies) n\'a pas de place centrale : les transactions se font directement entre les participants à travers un réseau.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Sur un marché centralisé (NYSE, Euronext), tous les ordres convergent vers un carnet d\'ordres unique, ce qui assure un prix transparent pour tous. Sur le Forex, il n\'y a pas de bourse centrale : chaque broker a son propre flux de prix, ce qui explique pourquoi le prix peut légèrement différer d\'un broker à l\'autre.' },
        { type: 'text', content: 'Les cryptomonnaies fonctionnent sur des exchanges (Binance, Coinbase) qui sont centralisés, mais aussi sur des DEX (Decentralized Exchanges) qui sont décentralisés et fonctionnent via des smart contracts.' },
        { type: 'table', headers: ['Critère', 'Marché centralisé', 'Marché décentralisé'], rows: [
          ['Exemple', 'NYSE, Euronext', 'Forex, DEX crypto'],
          ['Carnet d\'ordres', 'Unique et centralisé', 'Multiple, selon le broker/platforme'],
          ['Prix', 'Identique pour tous', 'Peut varier légèrement entre providers'],
          ['Régulation', 'Forte (autorités boursières)', 'Variable selon la juridiction'],
          ['Transparence', 'Élevée', 'Variable'],
          ['Heures', 'Selon la bourse', 'Souvent 24/24 ou 24/7']
        ]},
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Savoir si votre marché est centralisé ou décentralisé vous aide à comprendre pourquoi le prix peut différer entre brokers, pourquoi certains écarts existent, et pourquoi la régulation varie. Sur le Forex, le fait que le prix soit propre à chaque broker signifie que les niveaux techniques peuvent légèrement différer.' },
        { type: 'heading', content: 'Exemple concret étape par étape' },
        { type: 'list', ordered: true, items: [
          'Sur le Forex, le prix de l\'EUR/USD chez le broker A peut être 1,08501 tandis qu\'il est 1,08503 chez le broker B.',
          'Cette différence est normale car il n\'y a pas de prix centralisé.',
          'Un trader qui place un Stop Loss à un niveau exact doit savoir que ce niveau peut être touché chez un broker mais pas chez l\'autre.',
          'Sur une bourse centralisée, ce problème n\'existe pas : le prix est le même pour tous.'
        ]},
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader place un Stop Loss très serré à 1,08500 sur le Forex. Chez son broker, une pointe de prix (spike) atteint 1,08499 et déclenche son Stop Loss, alors que chez un autre broker, le prix n\'est descendu qu\'à 1,08502. Le Stop Loss est déclenché uniquement à cause de la spécificité du flux de prix de son broker. C\'est une limite du marché décentralisé.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: [
          'Placer des Stops Loss trop serrés sur un marché décentralisé',
          'S\'étonner de différences de prix entre brokers',
          'Confondre marché centralisé et décentralisé',
          'Ne pas tenir compte du flux de prix propre à son broker'
        ]},
        { type: 'summary', points: [
          'Un marché centralisé a un carnet d\'ordres unique (bourses)',
          'Un marché décentralisé a des flux de prix multiples (Forex, DEX)',
          'Sur le Forex, le prix peut différer entre brokers',
          'Les Stops Loss serrés sont plus risqués sur les marchés décentralisés',
          'La régulation varie selon le type de marché'
        ]},
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Le Forex est-il un marché centralisé ou décentralisé ?', options: ['Centralisé', 'Décentralisé', 'Les deux', 'Ni l\'un ni l\'autre'], correct: 1, explanation: 'Le Forex est un marché décentralisé : il n\'y a pas de bourse centrale, chaque broker a son propre flux de prix.' },
          { question: 'Pourquoi le prix peut-il différer entre deux brokers Forex ?', options: ['Parce que le broker manipule le prix', 'Parce qu\'il n\'y a pas de prix centralisé sur le Forex', 'Parce que les brokers ne sont pas régulés', 'Parce que le décalage horaire'], correct: 1, explanation: 'Sur le Forex décentralisé, chaque broker reçoit son flux de prix de ses propres fournisseurs de liquidité, ce qui peut créer de légères différences.' },
          { question: 'Quel avantage a un marché centralisé ?', options: ['Il est ouvert 24h/24', 'Le prix est identique pour tous les participants', 'Il n\'y a pas de frais', 'Le levier est illimité'], correct: 1, explanation: 'Sur un marché centralisé, tous les ordres convergent vers un carnet unique, ce qui assure un prix transparent et identique pour tous.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Identifiez si les marchés suivants sont centralisés ou décentralisés : <br>A. Bourse de New York (NYSE) <br>B. Marché Forex <br>C. Binance (exchange crypto) <br>D. Uniswap (DEX crypto)', correction: 'A. Centralisé — tous les ordres convergent vers le carnet unique du NYSE. <br>B. Décentralisé — pas de bourse centrale, chaque broker a son flux. <br>C. Centralisé — Binance est un exchange centralisé avec un carnet d\'ordres unique. <br>D. Décentralisé — Uniswap est un DEX fonctionnant via des smart contracts sans carnet central.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: [
          'Je sais si le marché que je trade est centralisé ou décentralisé',
          'Je tiens compte des différences de prix possibles entre brokers',
          'Je place mes Stops Loss avec une marge suffisante sur les marchés décentralisés',
          'Je comprends que la régulation varie selon le type de marché'
        ]},
        { type: 'note' }
      ]
    },
    {
      id: 'm1-l9',
      title: 'Les sessions de marché et leurs caractéristiques',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Les marchés financiers ne sont pas actifs en permanence au même niveau. Il existe des <strong>sessions</strong> de marché — asiatique, européenne et américaine — chacune avec ses caractéristiques de volatilité et de liquidité. Le chevauchement de ces sessions crée les périodes les plus actives.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'table', headers: ['Session', 'Horaires (UTC, approx.)', 'Caractéristiques', 'Actifs les plus actifs'], rows: [
          ['Asiatique', '00h00 - 09h00', 'Volatilité modérée, mouvements souvent lents', 'JPY, AUD, NZD'],
          ['Européenne', '07h00 - 16h00', 'Augmentation de la volatilité et de la liquidité', 'EUR, GBP, CHF'],
          ['Américaine', '13h00 - 22h00', 'Volatilité élevée, surtout à l\'ouverture', 'USD, CAD, indices US'],
          ['Chevauchement EU/US', '13h00 - 16h00', 'Période la plus liquide et volatile', 'EUR/USD, GBP/USD, indices']
        ]},
        { type: 'text', content: 'Les horaires exacts varient selon le passage à l\'heure d\'été/hiver. Les sessions se chevauchent : la session européenne et américaine se chevauchent entre 13h00 et 16h00 UTC, ce qui est généralement la période la plus active de la journée.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'La volatilité et la liquidité varient selon la session. Trader pendant la session asiatique sur l\'EUR/USD peut offrir peu de mouvements, tandis que le chevauchement EU/US est très actif. Adapter sa stratégie à la session est essentiel pour éviter de trader dans des conditions inadaptées.' },
        { type: 'heading', content: 'Illustration graphique' },
        { type: 'chart', title: 'Volatilité typique selon les sessions (EUR/USD)', props: {
          candles: [
            ...ranging(6, 1.1000, 0.0003),
            ...bullTrend(6, 1.1000, 0.0008),
            ...ranging(4, 1.1050, 0.0005),
          ],
          zones: [
            { top: 1.1020, bottom: 1.0980, color: 'rgba(100,100,100,0.05)', label: 'Asie (calme)' },
            { top: 1.1080, bottom: 1.0990, color: 'rgba(0,212,255,0.05)', label: 'Europe (actif)' },
            { top: 1.1090, bottom: 1.0990, color: 'rgba(255,167,38,0.05)', label: 'US (très actif)' },
          ],
          annotations: [
            { type: 'label', candle: 2, price: 1.1010, text: 'Session asiatique', color: '#6b7689' },
            { type: 'label', candle: 8, price: 1.1050, text: 'Session EU', color: '#00d4ff' },
            { type: 'label', candle: 14, price: 1.1070, text: 'Chevauchement', color: '#ffa726' },
          ]
        }},
        { type: 'text', content: 'Ce graphique illustre comment la volatilité augmente à mesure que les sessions se chevauchent. La session asiatique est calme, la session européenne apporte plus de mouvement, et le chevauchement EU/US est le plus actif.' },
        { type: 'heading', content: 'Exemple concret étape par étape' },
        { type: 'list', ordered: true, items: [
          'Un trader européen veut trader l\'EUR/USD en day trading.',
          'Il évite la session asiatique (trop peu de mouvements).',
          'Il préfère l\'ouverture de la session européenne à 8h00 (heure de Paris) et le chevauchement avec les US à 14h30.',
          'Il sait que les annonces économiques US à 14h30 (heure de Paris) peuvent créer de la volatilité.',
          'Il adapte sa stratégie : trades plus calmes le matin, plus volatils l\'après-midi.'
        ]},
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader essaie de faire du scalping sur l\'EUR/USD pendant la session asiatique. Le prix bouge très peu, le spread est parfois plus large, et les mouvements ne sont pas suffisants pour atteindre ses objectifs. Il s\'impatiente et force des trades qui ne correspondent pas aux conditions du marché.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: [
          'Trader un actif en dehors de sa session active',
          'Ne pas tenir compte des chevauchements de sessions',
          'Ignorer les annonces économiques qui coïncident avec les ouvertures',
          'S\'impatienter pendant les sessions calmes et forcer des trades'
        ]},
        { type: 'summary', points: [
          'Il existe 3 sessions principales : asiatique, européenne, américaine',
          'Chaque session a un niveau de volatilité et de liquidité différent',
          'Le chevauchement EU/US (13h-16h UTC) est la période la plus active',
          'Adapter sa stratégie à la session est essentiel',
          'Les actifs les plus actifs varient selon la session'
        ]},
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Quelle est la période la plus active pour l\'EUR/USD ?', options: ['La session asiatique', 'Le chevauchement des sessions européenne et américaine', 'Le week-end', 'La fermeture du marché'], correct: 1, explanation: 'Le chevauchement des sessions européenne et américaine (environ 13h-16h UTC) est la période la plus liquide et la plus volatile pour l\'EUR/USD.' },
          { question: 'Quels actifs sont les plus actifs pendant la session asiatique ?', options: ['EUR et GBP', 'JPY, AUD et NZD', 'USD et CAD', 'Or et pétrole'], correct: 1, explanation: 'Pendant la session asiatique, les devises de la région (JPY, AUD, NZD) sont les plus actives.' },
          { question: 'Pourquoi éviter le scalping pendant la session asiatique sur l\'EUR/USD ?', options: ['Le marché est fermé', 'La volatilité est trop faible pour atteindre des objectifs', 'Le spread est nul', 'Il n\'y a pas de broker'], correct: 1, explanation: 'Pendant la session asiatique, l\'EUR/USD a généralement peu de volatilité, ce qui rend le scalping difficile.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Vous êtes en Europe et voulez trader l\'EUR/USD en day trading. <br>1. Quelle session privilégiez-vous ? <br>2. À quelle heure (approx.) commencez-vous ? <br>3. Quelle période de la journée est la plus volatile ?', correction: '1. La session européenne et le chevauchement avec les US. <br>2. Vers 8h00 (heure de Paris) pour l\'ouverture européenne. <br>3. Le chevauchement EU/US, environ 14h30-16h00 (heure de Paris), surtout si des annonces US sont publiées à 14h30.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: [
          'Je connais la session active pour l\'actif que je trade',
          'J\'adapte ma stratégie à la volatilité de la session',
          'Je sais quand les chevauchements de sessions se produisent',
          'Je n\'essaie pas de forcer des trades pendant les sessions calmes'
        ]},
        { type: 'note' }
      ]
    },
    {
      id: 'm1-l10',
      title: 'Les risques liés au trading',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Le trading comporte un <strong>risque de perte en capital</strong>. Ce risque vient de plusieurs sources : la volatilité des prix, l\'effet du levier, les gaps de prix, le slippage, les frais de transaction, et les erreurs humaines. Aucune stratégie ne garantit un profit, et il est possible de perdre tout ou partie de son capital.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Les principaux risques en trading sont : <ul><li><strong>Risque de marché</strong> : le prix évolue défavorablement.</li><li><strong>Risque de levier</strong> : le levier amplifie les gains ET les pertes. Un levier de 100:1 signifie qu\'un mouvement de 1% contre vous peut vous faire perdre 100% de votre capital investi.</li><li><strong>Risque de gap</strong> : le prix peut « sauter » d\'un niveau à un autre sans passer par les niveaux intermédiaires, surtout entre la clôture et l\'ouverture du marché.</li><li><strong>Risque de slippage</strong> : votre ordre est exécuté à un prix différent de celui demandé, surtout en cas de volatilité élevée.</li><li><strong>Risque de corrélation</strong> : plusieurs positions qui semblent différentes peuvent en réalité évoluer dans le même sens, amplifiant les pertes.</li><li><strong>Risque psychologique</strong> : la peur, l\'avidité et le FOMO peuvent conduire à des décisions irrationnelles.</li></ul>' },
        { type: 'callout', variant: 'danger', title: 'Avertissement sur le risque', content: 'Le trading comporte un risque de perte en capital. Aucun concept technique, aucune stratégie et aucun indicateur ne garantit un résultat. Ne tradez jamais avec de l\'argent que vous ne pouvez pas vous permettre de perdre.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'La première cause de perte en trading n\'est pas le manque de connaissances techniques, mais la mauvaise gestion du risque. Un trader qui comprend les risques et les gère correctement peut survivre à des séries de pertes. Un trader qui ignore le risque peut tout perdre, même avec une bonne stratégie.' },
        { type: 'heading', content: 'Exemple concret étape par étape' },
        { type: 'list', ordered: true, items: [
          'Un trader a un capital de 5000€ et risque 2% par trade, soit 100€.',
          'Il perd 5 trades d\'affilée : sa perte totale est de 500€, soit 10% de son capital.',
          'Il lui reste 4500€. Pour revenir à 5000€, il doit faire +11,1%.',
          'S\'il avait risqué 10% par trade (500€), il aurait perdu 2500€ (50% de son capital).',
          'Pour revenir à 5000€ depuis 2500€, il aurait besoin de +100% — le doublement du capital restant.'
        ]},
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader utilise un levier de 500:1 sur le Forex. Il ouvre une position avec 1000€ de marge. Un mouvement de 0,2% contre sa position (20 pips sur EUR/USD) suffit pour perdre ses 1000€ entièrement. La veille d\'une annonce économique, un gap de 50 pips à l\'ouverture provoque la perte totale de son capital. Le levier excessif est l\'une des principales causes de perte totale.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: [
          'Utiliser un levier excessif',
          'Risquer plus de 2% de son capital sur un seul trade',
          'Ne pas utiliser de Stop Loss',
          'Trader avec de l\'argent dont on a besoin pour vivre',
          'Ignorer les risques de gap et de slippage',
          'Cumuler des positions corrélées sans le savoir'
        ]},
        { type: 'summary', points: [
          'Le trading comporte un risque réel de perte en capital',
          'Le levier amplifie les gains ET les pertes',
          'Les gaps et le slippage peuvent dépasser le Stop Loss',
          'La gestion du risque est plus importante que la stratégie',
          'Ne jamais trader avec de l\'argent dont on a besoin pour vivre'
        ]},
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce que le risque de levier ?', options: ['Le risque que le broker fasse faillite', 'Le levier amplifie les gains ET les pertes', 'Le risque de payer trop de frais', 'Le risque de ne pas pouvoir trader'], correct: 1, explanation: 'Le levier amplifie à la fois les gains et les pertes. Un levier élevé signifie qu\'un petit mouvement défavorable peut entraîner une perte importante.' },
          { question: 'Qu\'est-ce qu\'un gap ?', options: ['Une différence de prix entre deux brokers', 'Un saut de prix sans passer par les niveaux intermédiaires', 'Une erreur du broker', 'Un type d\'indicateur'], correct: 1, explanation: 'Un gap est un saut de prix où le prix passe d\'un niveau à un autre sans passer par les niveaux intermédiaires, souvent entre la clôture et l\'ouverture du marché.' },
          { question: 'Quel pourcentage de risque par trade est généralement recommandé ?', options: ['10%', '5%', '1 à 2%', '50%'], correct: 2, explanation: 'La règle générale est de risquer 1 à 2% de son capital par trade pour limiter l\'impact des séries de pertes.' },
          { question: 'Qu\'est-ce que le slippage ?', options: ['Un type d\'ordre', 'L\'exécution d\'un ordre à un prix différent de celui demandé', 'Une stratégie de trading', 'Un type de graphique'], correct: 1, explanation: 'Le slippage est la différence entre le prix auquel vous voulez exécuter votre ordre et le prix auquel il est réellement exécuté, surtout en cas de volatilité.' },
          { question: 'Pourquoi une perte de 50% est-elle difficile à récupérer ?', options: ['Parce qu\'il faut +100% pour revenir au capital initial', 'Parce que le broker bloque le compte', 'Parce que c\'est impossible', 'Parce qu\'il faut +50%'], correct: 0, explanation: 'Une perte de 50% nécessite un gain de 100% pour revenir au capital initial. Plus le drawdown est profond, plus la récupération est difficile.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Vous avez un capital de 10 000€. <br>1. Quel montant risquez-vous par trade en suivant la règle des 1% ? <br>2. Si vous perdez 5 trades d\'affilée, quel est votre capital restant ? <br>3. Quel pourcentage de gain faut-il pour revenir au capital initial ?', correction: '1. 1% de 10 000€ = 100€ par trade. <br>2. 5 × 100€ = 500€ de perte. Capital restant : 9 500€. <br>3. Pour revenir à 10 000€ depuis 9 500€, il faut faire +5,26%. C\'est gérable avec une stratégie correcte.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: [
          'Je risque au maximum 1 à 2% de mon capital par trade',
          'J\'utilise toujours un Stop Loss',
          'Je n\'utilise pas un levier excessif',
          'Je ne trade pas avec de l\'argent dont j\'ai besoin pour vivre',
          'Je suis conscient que je peux perdre tout ou partie de mon capital',
          'Je tiens compte des risques de gap et de slippage'
        ]},
        { type: 'note' }
      ]
    },
    {
      id: 'm1-l11',
      title: 'Les erreurs fréquentes des débutants',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Les débutants en trading commettent des erreurs prévisibles et bien documentées. Les connaître avant de commencer vous aide à les éviter et à accélérer votre progression.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Voici les 10 erreurs les plus fréquentes chez les débutants :' },
        { type: 'list', ordered: true, items: [
          '<strong>Ne pas utiliser de Stop Loss</strong> : on laisse les pertes courir en espérant que le prix revienne.',
          '<strong>Risquer trop par trade</strong> : on met un pourcentage trop élevé de son capital sur une seule position.',
          '<strong>Surtrader</strong> : on ouvre trop de positions, trop souvent, sans analyse suffisante.',
          '<strong>Revenge trading</strong> : après une perte, on ouvre une position plus grosse pour « se refaire ».',
          '<strong>Ne pas avoir de plan</strong> : on entre dans les trades sans stratégie définie.',
          '<strong>Utiliser un levier excessif</strong> : on amplifie les pertes avec un levier trop élevé.',
          '<strong>Changer de stratégie en permanence</strong> : on saute d\'une méthode à l\'autre sans en maîtriser aucune.',
          '<strong>Ignorer la psychologie</strong> : on sous-estime l\'impact des émotions sur ses décisions.',
          '<strong>Ne pas tenir de journal</strong> : on ne documente pas ses trades, ce qui empêche d\'apprendre de ses erreurs.',
          '<strong>Vouloir devenir riche rapidement</strong> : on a des attentes irréalistes qui mènent à des prises de risque excessives.'
        ]},
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'La majorité des traders débutants perdent de l\'argent, non pas parce que le trading est impossible, mais parce qu\'ils commettent ces erreurs. Les connaître vous permet de les éviter dès le départ et de vous concentrer sur ce qui compte : la gestion du risque, la discipline et l\'apprentissage continu.' },
        { type: 'callout', variant: 'warning', title: 'Rappel essentiel', content: 'Le trading n\'est pas une course vers le profit rapide. C\'est une activité qui demande de la patience, de la discipline et un apprentissage progressif. Les traders qui réussissent sont ceux qui survivent assez longtemps pour apprendre de leurs erreurs.' },
        { type: 'heading', content: 'Exemple concret étape par étape' },
        { type: 'list', ordered: true, items: [
          'Un débutant ouvre un compte de 1000€.',
          'Il risque 20% par trade (200€) sans Stop Loss, en espérant des gains rapides.',
          'Il perd 3 trades d\'affilée : 600€ de perte, soit 60% du capital.',
          'En colère, il ouvre une position de 400€ (revenge trading) pour « se refaire ».',
          'Il perd encore : il ne lui reste que 200€. Il a perdu 80% de son capital en quelques heures.'
        ]},
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un débutant ouvre un compte de 1000€. Il risque 1% par trade (10€) avec un Stop Loss. Il accepte de perdre et apprend de chaque trade en tenant un journal. Après 50 trades, il a perdu 200€ au total mais a appris énormément. Sa discipline lui permet de progresser et, avec le temps, de devenir rentable.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'text', content: 'Toutes les erreurs listées ci-dessus sont les erreurs fréquentes. La plus dangereuse est probablement le <strong>revenge trading</strong> : après une perte, vouloir se refaire immédiatement en prenant plus de risque. C\'est le comportement qui détruit le plus de comptes.' },
        { type: 'summary', points: [
          'Les débutants commettent des erreurs prévisibles et évitables',
          'Ne pas utiliser de Stop Loss est l\'erreur la plus dangereuse',
          'Le revenge trading détruit plus de comptes que toute autre erreur',
          'Avoir un plan, un journal et une discipline est essentiel',
          'La patience et l\'apprentissage progressif sont les clés du succès'
        ]},
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce que le revenge trading ?', options: [
            'Trader avec un ami',
            'Ouvrir une position plus grosse après une perte pour se refaire',
            'Trader uniquement le matin',
            'Utiliser un Stop Loss'
          ], correct: 1, explanation: 'Le revenge trading consiste à ouvrir une position (souvent plus grosse) immédiatement après une perte pour « se refaire ». C\'est une réaction émotionnelle destructrice.' },
          { question: 'Qu\'est-ce que le surtrading ?', options: [
            'Ouvrir trop de positions trop souvent sans analyse suffisante',
            'Utiliser un levier élevé',
            'Trader sur plusieurs marchés',
            'Tenir un journal'
          ], correct: 0, explanation: 'Le surtrading consiste à ouvrir trop de positions, trop souvent, sans analyse suffisante. C\'est souvent lié à l\'ennui ou au FOMO.' },
          { question: 'Quelle est l\'attitude correcte face à une perte ?', options: [
            'Ouvrir immédiatement une position plus grosse',
            'Analyser pourquoi on a perdu et apprendre de l\'erreur',
            'Changer de stratégie immédiatement',
            'Arrêter le trading définitivement'
          ], correct: 1, explanation: 'Face à une perte, il faut analyser pourquoi elle s\'est produite, en tirer des leçons via son journal, et continuer à suivre son plan avec discipline.' },
          { question: 'Pourquoi tenir un journal de trading ?', options: [
            'Pour des raisons fiscales',
            'Pour documenter ses trades et apprendre de ses erreurs',
            'Pour impressionner les autres',
            'Ce n\'est pas utile'
          ], correct: 1, explanation: 'Le journal de trading permet de documenter chaque trade (raison d\'entrée, sortie, résultat) et d\'identifier les schémas récurrents dans ses succès et ses erreurs.' },
          { question: 'Quelle est la plus dangereuse des erreurs de débutant ?', options: [
            'Ne pas utiliser de Stop Loss et faire du revenge trading',
            'Trader le matin',
            'Utiliser un graphique en chandeliers',
            'Tenir un journal'
          ], correct: 0, explanation: 'Ne pas utiliser de Stop Loss combiné au revenge trading est la combinaison la plus destructrice : les pertes ne sont pas limitées et les émotions prennent le contrôle.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Parmi ces comportements, lesquels sont des erreurs de débutant ? <br>A. Placer un Stop Loss sur chaque trade <br>B. Ouvrir une position plus grosse après une perte <br>C. Ne pas avoir de plan de trading <br>D. Tenir un journal de trading <br>E. Risquer 50% de son capital sur un trade', correction: 'Erreurs : B (revenge trading), C (pas de plan), E (risque excessif). <br>Bonnes pratiques : A (Stop Loss) et D (journal). Un Stop Loss et un journal sont des habitudes de traders disciplinés.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: [
          'J\'utilise toujours un Stop Loss',
          'Je risque au maximum 1 à 2% par trade',
          'Je ne fais pas de revenge trading après une perte',
          'J\'ai un plan de trading défini',
          'Je tiens un journal de trading',
          'Je n\'ai pas d\'attentes irréalistes de profit rapide',
          'Je ne change pas de stratégie à chaque perte'
        ]},
        { type: 'note' }
      ]
    }
  ]
}
