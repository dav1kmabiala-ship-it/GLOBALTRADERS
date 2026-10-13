import { sweepBuySidePattern, sweepSellSidePattern, ranging, bullTrend } from '../../charts/candleData.js'

export default {
  id: 'm14', number: 14, title: 'Les liquidités : concept central du marché',
  description: 'Liquidité externe (BSL/SSL), liquidité interne, liquidity sweep, supports/résistances et synthèse.',
  badge: 'advanced',
  intro: 'La liquidité est le concept central des Smart Money Concepts. Ce module explore en profondeur les zones de liquidité externe (BSL, SSL), interne, les sweeps, et leur rôle dans l\'analyse du prix. Les zones de liquidité sont des hypothèses d\'analyse : la présence exacte des ordres ne peut pas être déduite avec certitude d\'un graphique.',
  objectives: ['Comprendre le concept de liquidité', 'Identifier BSL et SSL', 'Repérer les liquidity sweeps', 'Distinguer sweep et cassure de continuation'],
  lessons: [
    {
      id: 'm14-l1', title: 'La liquidité en trading : définition et rôle',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'La <strong>liquidité</strong> en finance désigne la facilité d\'acheter ou vendre sans impact sur le prix. En SMC, la liquidité désigne aussi les <strong>zones où des ordres</strong> (notamment des stops) sont susceptibles d\'être concentrés, attirant potentiellement le prix.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Les ordres sur le marché incluent : <ul><li><strong>Ordres au marché</strong> : achats et ventes immédiats.</li><li><strong>Ordres en attente</strong> : Buy Limit, Sell Limit, Buy Stop, Sell Stop.</li><li><strong>Stops</strong> : Stop Loss (qui deviennent des ordres au marché quand touchés) et Take Profit.</li></ul>Les stops sont importants car un Stop Loss d\'une position d\'achat est un ordre de vente : si beaucoup de stops d\'achat sont concentrés au-dessus d\'un sommet, leur déclenchement crée une vague de ventes.' },
        { type: 'callout', variant: 'info', title: 'Hypothèse d\'analyse', content: 'Les zones de liquidité sont des hypothèses d\'analyse. La présence et la taille exactes des ordres ne peuvent pas être déduites avec certitude d\'un simple graphique. On identifie des zones où des ordres sont susceptibles d\'être concentrés, sans certitude.' },
        { type: 'heading', content: 'Différence entre liquidité, volatilité et volume' },
        { type: 'table', headers: ['Concept', 'Définition', 'Mesure'], rows: [
          ['Liquidité', 'Facilité d\'achat/vente sans impact', 'Spread, profondeur du carnet'],
          ['Volatilité', 'Amplitude des variations de prix', 'ATR, écart-type'],
          ['Volume', 'Nombre d\'unités échangées', 'Volume tick (Forex), volume réel (actions)']
        ]},
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'La liquidité est le concept central des SMC. Comprendre où les ordres sont susceptibles d\'être concentrés aide à anticiper les zones où le prix peut réagir. Les sommets et creux attirent potentiellement le prix car des stops y sont placés.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Un sommet à 1,0900 a été formé il y a 2 jours.', 'Des traders qui ont vendu à 1,0880 placent leurs Stop Loss au-dessus de 1,0900.', 'Ces stops sont des ordres d\'achat (Buy Stop).', 'La zone au-dessus de 1,0900 contient potentiellement une concentration de stops d\'achat.', 'Le prix peut être attiré vers cette zone pour déclencher ces stops.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader suppose qu\'un sommet attire forcément le prix. Il achète au-dessus du sommet en attendant que le prix y aille. Mais le prix n\'atteint jamais ce sommet et baisse. Un sommet n\'attire pas toujours le prix : c\'est une hypothèse, pas une certitude.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Supposer que la présence d\'ordres est certaine', 'Confondre liquidité, volatilité et volume', 'Croire qu\'un sommet attire toujours le prix', 'Ne pas distinguer les types d\'ordres'] },
        { type: 'summary', points: ['La liquidité = facilité d\'achat/vente + zones d\'ordres concentrés', 'Les stops sont des ordres qui se déclenchent à un niveau', 'Un Stop Loss d\'achat est un ordre de vente', 'Les zones de liquidité sont des hypothèses, pas des certitudes', 'La présence exacte des ordres ne peut pas être déduite d\'un graphique'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce que la liquidité en SMC ?', options: ['Le volume', 'Les zones où des ordres sont susceptibles d\'être concentrés', 'La volatilité', 'Le spread'], correct: 1, explanation: 'En SMC, la liquidité désigne les zones où des ordres (notamment des stops) sont susceptibles d\'être concentrés, attirant potentiellement le prix.' },
          { question: 'Que devient un Stop Loss d\'une position d\'achat ?', options: ['Un ordre d\'achat', 'Un ordre de vente quand il est déclenché', 'Rien', 'Un Take Profit'], correct: 1, explanation: 'Un Stop Loss d\'une position d\'achat est un ordre de vente : quand le prix atteint le niveau, une vente au marché est déclenchée.' },
          { question: 'Les zones de liquidité sont-elles certaines ?', options: ['Oui', 'Non, ce sont des hypothèses d\'analyse', 'Parfois', 'Toujours'], correct: 1, explanation: 'Les zones de liquidité sont des hypothèses d\'analyse. La présence et la taille exactes des ordres ne peuvent pas être déduites avec certitude d\'un graphique.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Sur un graphique H4, identifiez un sommet récent. <br>1. Où les stops d\'achat sont-ils susceptibles d\'être placés ? <br>2. Pourquoi le prix pourrait-il être attiré vers cette zone ?', correction: '1. Les stops d\'achat des traders qui ont vendu sont placés au-dessus du sommet. <br>2. Le prix peut être attiré vers cette zone car le déclenchement des stops crée une vague d\'achats qui alimente le mouvement. Mais c\'est une hypothèse, pas une certitude.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je comprends que la liquidité = zones d\'ordres concentrés', 'Je sais que les stops sont des ordres au marché', 'Je traite les zones de liquidité comme des hypothèses', 'Je ne suppose pas que la présence d\'ordres est certaine'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm14-l2', title: 'Liquidité externe : BSL et SSL',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'La <strong>Buy-Side Liquidity (BSL)</strong> est la liquidité située au-dessus des sommets (où des stops d\'achat sont placés). La <strong>Sell-Side Liquidity (SSL)</strong> est la liquidité située sous les creux (où des stops de vente sont placés).' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Les zones de BSL incluent : <ul><li>Au-dessus des sommets précédents (swing highs).</li><li>Au-dessus des <strong>equal highs</strong> (deux sommets au même niveau).</li><li>Au-dessus des plus hauts de la veille (PDH).</li><li>Au-dessus des plus hauts de session.</li></ul>Les zones de SSL incluent : <ul><li>Sous les creux précédents (swing lows).</li><li>Sous les <strong>equal lows</strong> (deux creux au même niveau).</li><li>Sous les plus bas de la veille (PDL).</li><li>Sous les plus bas de session.</li></ul>' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Les BSL et SSL sont les zones les plus visibles de liquidité externe. Le prix peut être attiré vers ces zones pour déclencher les stops. Identifier ces zones aide à anticiper où le prix peut aller et où il peut se retourner après un sweep.' },
        { type: 'heading', content: 'Illustration graphique' },
        { type: 'chart', title: 'BSL au-dessus des sommets et SSL sous les creux', props: {
          candles: ranging(16, 1.1000, 0.0008),
          zones: [
            { top: 1.1030, bottom: 1.1020, color: 'rgba(38,166,154,0.1)', label: 'BSL', labelColor: '#26a69a' },
            { top: 1.0980, bottom: 1.0970, color: 'rgba(239,83,80,0.1)', label: 'SSL', labelColor: '#ef5350' },
          ],
          annotations: [
            { type: 'circle', candle: 3, price: 1.1020, color: '#26a69a' },
            { type: 'label', candle: 3, price: 1.1040, offsetY: -5, text: 'Sommet → BSL au-dessus', color: '#26a69a' },
            { type: 'circle', candle: 8, price: 1.0980, color: '#ef5350' },
            { type: 'label', candle: 8, price: 1.0960, offsetY: 5, text: 'Creux → SSL en dessous', color: '#ef5350' },
          ]
        }},
        { type: 'text', content: 'La zone verte (BSL) au-dessus des sommets : les stops d\'achat des vendeurs y sont placés. La zone rouge (SSL) sous les creux : les stops de vente des acheteurs y sont placés. Le prix peut être attiré vers ces zones.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['L\'EUR/USD a deux sommets à 1,0900 et 1,0901 (equal highs).', 'La zone au-dessus de 1,0901 est une BSL (Buy-Side Liquidity).', 'Des stops d\'achat sont susceptibles d\'y être concentrés.', 'Le prix monte vers 1,0905, déclenche les stops, puis se retourne.', 'C\'est un sweep de la BSL.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Le prix atteint la BSL à 1,0905 mais au lieu de se retourner, il continue à monter. La BSL n\'était pas suffisante pour provoquer un retournement. Un sweep n\'est pas garanti : la cassure peut être suivie d\'une continuation.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Supposer que le prix atteindra toujours la BSL/SSL', 'Confondre BSL et SSL', 'Supposer qu\'un sweep garantit un retournement', 'Ne pas identifier les equal highs et equal lows'] },
        { type: 'summary', points: ['BSL = liquidité au-dessus des sommets', 'SSL = liquidité sous les creux', 'Equal highs et equal lows concentrent la liquidité', 'Le prix peut être attiré vers ces zones', 'Un sweep n\'est pas garanti : la cassure peut continuer'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce que la BSL ?', options: ['Liquidité sous les creux', 'Liquidité au-dessus des sommets', 'Un indicateur', 'Un type d\'ordre'], correct: 1, explanation: 'La Buy-Side Liquidity (BSL) est la liquidité située au-dessus des sommets, où des stops d\'achat sont susceptibles d\'être concentrés.' },
          { question: 'Que sont les equal highs ?', options: ['Des creux égaux', 'Deux sommets au même niveau', 'Un indicateur', 'Un type de trade'], correct: 1, explanation: 'Les equal highs sont deux sommets situés approximativement au même niveau de prix. Ils concentrent potentiellement la BSL.' },
          { question: 'Le prix atteint-il toujours la BSL ?', options: ['Oui', 'Non, c\'est une hypothèse', 'Parfois', 'Toujours'], correct: 1, explanation: 'Le prix n\'atteint pas toujours la BSL. C\'est une hypothèse d\'analyse : le prix peut être attiré vers cette zone, mais ce n\'est pas garanti.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Sur un graphique H4, identifiez : <br>1. Les 3 derniers sommets (BSL au-dessus) <br>2. Les 3 derniers creux (SSL en dessous) <br>3. Des equal highs ou equal lows éventuels', correction: 'Les sommets récents sont les BSL potentielles. Les creux récents sont les SSL potentielles. Les equal highs (deux sommets au même niveau) concentrent particulièrement la BSL. Les equal lows (deux creux au même niveau) concentrent la SSL.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'identifie les BSL au-dessus des sommets', 'J\'identifie les SSL sous les creux', 'Je repère les equal highs et equal lows', 'Je traite ces zones comme des hypothèses'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm14-l3', title: 'Liquidité interne',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'La <strong>liquidité interne</strong> est la liquidité située à l\'intérieur d\'une structure de marché, formée par les petits sommets et creux intermédiaires. Contrairement à la liquidité externe (aux extrêmes), elle se trouve à l\'intérieur du range ou de l\'impulsion.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'La liquidité interne inclut : <ul><li>Les petits sommets à l\'intérieur d\'un range.</li><li>Les petits creux à l\'intérieur d\'une consolidation.</li><li>Les sommets et creux intermédiaires d\'une impulsion.</li><li>Les zones de liquidité à l\'intérieur d\'un retracement.</li></ul>La liquidité interne peut interagir avec les FVG et les order blocks, mais ce sont des concepts distincts. Ne pas confondre automatiquement liquidité interne et FVG.' },
        { type: 'callout', variant: 'info', title: 'Distinction importante', content: 'La liquidité interne et les FVG (Fair Value Gaps) sont des concepts distincts. Ils peuvent parfois interagir, mais un FVG n\'est pas automatiquement une liquidité interne et inversement.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'La liquidité interne explique pourquoi le prix fait des mouvements à l\'intérieur d\'un range ou d\'une impulsion. Les petits sommets et creux attirent potentiellement le prix avant qu\'il n\'aille chercher la liquidité externe.' },
        { type: 'heading', content: 'Illustration graphique' },
        { type: 'chart', title: 'Liquidité interne dans un range', props: {
          candles: ranging(16, 1.1000, 0.0008),
          zones: [
            { top: 1.1015, bottom: 1.1005, color: 'rgba(38,166,154,0.08)', label: 'Liquidité interne (BSL)', labelColor: '#26a69a' },
            { top: 1.0995, bottom: 1.0985, color: 'rgba(239,83,80,0.08)', label: 'Liquidité interne (SSL)', labelColor: '#ef5350' },
          ],
          annotations: [
            { type: 'circle', candle: 5, price: 1.1010, color: '#ab47bc' },
            { type: 'label', candle: 5, price: 1.1025, offsetY: -5, text: 'Petit sommet interne', color: '#ab47bc' },
            { type: 'circle', candle: 10, price: 1.0990, color: '#ab47bc' },
            { type: 'label', candle: 10, price: 1.0975, offsetY: 5, text: 'Petit creux interne', color: '#ab47bc' },
          ]
        }},
        { type: 'text', content: 'À l\'intérieur du range, les petits sommets et creux forment la liquidité interne. Le prix peut aller chercher ces liquidités internes avant d\'aller vers la liquidité externe (au-dessus du range ou en dessous).' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Le prix est dans un range 1,0800-1,0900.', 'Un petit sommet à 1,0850 forme une liquidité interne (BSL).', 'Un petit creux à 1,0830 forme une liquidité interne (SSL).', 'Le prix peut aller chercher 1,0850 avant d\'aller vers 1,0900 (BSL externe).', 'Les liquidités internes sont des étapes intermédiaires.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader confond un FVG avec une liquidité interne. Il suppose que le prix va aller chercher le FVG parce que c\'est une « liquidité interne ». Mais un FVG est un déséquilibre de prix, pas nécessairement une concentration d\'ordres. Ce sont deux concepts distincts.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Confondre liquidité interne et FVG', 'Ignorer les petits sommets et creux', 'Supposer que la liquidité interne attire toujours le prix', 'Ne pas distinguer interne et externe'] },
        { type: 'summary', points: ['La liquidité interne = petits sommets et creux à l\'intérieur', 'Elle se trouve dans les ranges, impulsions, retracements', 'Elle peut interagir avec les FVG (concepts distincts)', 'Le prix peut chercher la liquidité interne avant l\'externe', 'Ne pas confondre liquidité interne et FVG'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce que la liquidité interne ?', options: ['La liquidité aux extrêmes', 'La liquidité à l\'intérieur de la structure (petits sommets/creux)', 'Un FVG', 'Un indicateur'], correct: 1, explanation: 'La liquidité interne est la liquidité située à l\'intérieur d\'une structure de marché, formée par les petits sommets et creux intermédiaires.' },
          { question: 'La liquidité interne est-elle identique au FVG ?', options: ['Oui', 'Non, ce sont des concepts distincts qui peuvent interagir', 'Parfois', 'Toujours'], correct: 1, explanation: 'La liquidité interne et les FVG sont des concepts distincts. Ils peuvent parfois interagir, mais il ne faut pas les confondre automatiquement.' },
          { question: 'Où se trouve la liquidité interne ?', options: ['Au-dessus des sommets majeurs', 'À l\'intérieur des ranges, impulsions et retracements', 'Sous les creux majeurs', 'Nulle part'], correct: 1, explanation: 'La liquidité interne se trouve à l\'intérieur de la structure : dans les ranges, les impulsions et les retracements, formée par les petits sommets et creux.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Dans un range sur H4, identifiez : <br>1. Les petits sommets internes (BSL interne) <br>2. Les petits creux internes (SSL interne) <br>3. La liquidité externe (au-dessus et en dessous du range)', correction: 'Les petits sommets à l\'intérieur du range sont les BSL internes. Les petits creux à l\'intérieur sont les SSL internes. La liquidité externe est au-dessus du sommet du range (BSL externe) et sous le creux du range (SSL externe).' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'identifie les petits sommets internes', 'J\'identifie les petits creux internes', 'Je distingue liquidité interne et externe', 'Je ne confonds pas liquidité interne et FVG'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm14-l4', title: 'Le liquidity sweep',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Un <strong>liquidity sweep</strong> est un mouvement du prix au-delà d\'un niveau de liquidité (sommet ou creux) suivi d\'un retour et potentiellement d\'un retournement. Le prix « balaie » les stops au-delà du niveau, puis se retourne.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Le sweep se distingue de la cassure de continuation : <ul><li><strong>Sweep</strong> : le prix dépasse le niveau (mèche), déclenche les stops, puis revient et se retourne.</li><li><strong>Cassure de continuation</strong> : le prix dépasse le niveau et continue dans le même sens.</li><li><strong>Fausse cassure</strong> : similaire au sweep, le prix dépasse le niveau puis revient.</li></ul>La différence entre sweep et continuation se fait après le dépassement : si le prix revient et se retourne → sweep. S\'il continue → cassure de continuation.' },
        { type: 'callout', variant: 'warning', title: 'Pas de garantie', content: 'Un sweep n\'est pas un retournement garanti. Le prix peut dépasser un niveau, revenir, puis continuer dans le sens de la cassure. Toujours attendre une confirmation (CHoCH, pattern de retournement) avant d\'entrer.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Le sweep est l\'un des concepts les plus puissants des SMC. Il identifie les zones où le prix « balaie » les stops avant de se retourner. Reconnaître un sweep permet d\'entrer au moment où le prix se retourne, souvent à un excellent prix.' },
        { type: 'heading', content: 'Illustration graphique : sweep du BSL (retournement)' },
        { type: 'chart', title: 'Sweep du BSL suivi d\'un retournement', props: {
          candles: sweepBuySidePattern(),
          annotations: [
            { type: 'circle', candle: 7, price: 1.1035, color: '#26a69a' },
            { type: 'label', candle: 7, price: 1.1050, offsetY: -5, text: 'Sweep BSL', color: '#26a69a' },
            { type: 'arrow', candle: 10, price: 1.0970, direction: 'down', color: '#ef5350' },
            { type: 'label', candle: 10, price: 1.0950, offsetY: 5, text: 'Retournement', color: '#ef5350' },
          ],
          lines: [
            { y1: 1.1025, y2: 1.1025, x1: 0.1, x2: 0.9, color: '#26a69a', dashed: true, label: 'Niveau BSL', labelX: 0.88, labelY: 1.1035 },
          ]
        }},
        { type: 'text', content: 'Le prix dépasse le niveau BSL à 1,1025 avec une mèche haute (sweep), déclenche les stops d\'achat, puis revient sous le niveau et baisse. C\'est un sweep suivi d\'un retournement. Le trader peut vendre après la confirmation du retournement.' },
        { type: 'heading', content: 'Illustration graphique : sweep sans retournement' },
        { type: 'chart', title: 'Dépassement sans retournement (continuation)', props: {
          candles: [...(() => { let p = 1.10; const c = []; for (let i = 0; i < 12; i++) { const o = p; const ch = p + (Math.random() * 0.5 + 0.1) * 0.002; c.push({ o: +o.toFixed(4), c: +ch.toFixed(4), h: +(ch + 0.0005).toFixed(4), l: +(o - 0.0005).toFixed(4) }); p = ch; } return c; })()],
          annotations: [
            { type: 'circle', candle: 4, price: 1.1090, color: '#ffa726' },
            { type: 'label', candle: 4, price: 1.1110, offsetY: -5, text: 'Dépassement mais continuation', color: '#ffa726' },
          ],
          lines: [
            { y1: 1.1080, y2: 1.1080, x1: 0.1, x2: 0.9, color: '#ffa726', dashed: true, label: 'Niveau', labelX: 0.88, labelY: 1.1090 },
          ]
        }},
        { type: 'text', content: 'Le prix dépasse le niveau mais au lieu de se retourner, il continue à monter. Ce n\'est pas un sweep mais une cassure de continuation. Le prix a dépassé le niveau et est resté au-dessus.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['L\'EUR/USD a un sommet à 1,0900 (BSL au-dessus).', 'Le prix monte à 1,0905 (dépasse le sommet avec une mèche).', 'Il revient sous 1,0900 et forme un CHoCH baissier.', 'C\'est un sweep du BSL suivi d\'un retournement.', 'Le trader vend après la confirmation (CHoCH + pattern).'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Le prix dépasse 1,0900 avec une mèche mais au lieu de se retourner, il clôture au-dessus et continue à monter. C\'est une cassure de continuation, pas un sweep. Un trader qui a vendu sur le dépassement se fait piéger.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Vendre sur un dépassement sans attendre le retournement', 'Confondre sweep et cassure de continuation', 'Supposer qu\'un sweep garantit un retournement', 'Ne pas attendre la confirmation'] },
        { type: 'summary', points: ['Un sweep = dépassement d\'un niveau + retour + retournement potentiel', 'À distinguer de la cassure de continuation (le prix continue)', 'Le sweep déclenche les stops au-delà du niveau', 'Toujours attendre une confirmation (CHoCH, pattern)', 'Un sweep n\'est pas un retournement garanti'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce qu\'un liquidity sweep ?', options: ['Une cassure qui continue', 'Un dépassement d\'un niveau suivi d\'un retour et d\'un retournement potentiel', 'Un type d\'ordre', 'Un indicateur'], correct: 1, explanation: 'Un liquidity sweep est un mouvement du prix au-delà d\'un niveau de liquidité (déclenchant les stops) suivi d\'un retour et potentiellement d\'un retournement.' },
          { question: 'Comment distinguer un sweep d\'une continuation ?', options: ['C\'est impossible', 'Après le dépassement : si le prix revient et se retourne → sweep, s\'il continue → continuation', 'Le broker le dit', 'Par la couleur'], correct: 1, explanation: 'La distinction se fait après le dépassement : si le prix revient sous le niveau et se retourne, c\'est un sweep. S\'il reste au-delà et continue, c\'est une continuation.' },
          { question: 'Un sweep garantit-il un retournement ?', options: ['Oui', 'Non, il faut attendre une confirmation', 'Parfois', 'Toujours'], correct: 1, explanation: 'Un sweep n\'est pas un retournement garanti. Le prix peut dépasser un niveau, revenir, puis continuer dans le sens de la cassure. Toujours attendre une confirmation.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Sur un graphique H4, identifiez un sommet récent. <br>1. Le prix l\'a-t-il dépassé ? <br>2. Si oui, est-ce un sweep (retour + retournement) ou une continuation ? <br>3. Quelle confirmation attendriez-vous ?', correction: '1. Si le prix a dépassé le sommet avec une mèche → dépassement. <br>2. Si le prix est revenu sous le sommet et a baissé → sweep. S\'il est resté au-dessus → continuation. <br>3. Confirmation : CHoCH baissier (en structure interne), pattern de retournement (engulfing bearish, pin bar), ou BOS baissier.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'identifie les niveaux de liquidité (BSL/SSL)', 'Je vérifie si le prix les a dépassés', 'Je distingue sweep et continuation', 'J\'attends une confirmation avant d\'entrer'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm14-l5', title: 'Synthèse des liquidités',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Cette leçon synthétise tous les concepts de liquidité : liquidité interne, externe, BSL, SSL, sweep, cassure, supports, résistances et trendlines.' },
        { type: 'heading', content: 'Tableau comparatif' },
        { type: 'table', headers: ['Concept', 'Définition', 'Localisation'], rows: [
          ['Liquidité externe', 'Liquidité aux extrêmes de la structure', 'Au-dessus des sommets, sous les creux'],
          ['Liquidité interne', 'Liquidité à l\'intérieur de la structure', 'Petits sommets et creux intermédiaires'],
          ['BSL', 'Buy-Side Liquidity', 'Au-dessus des sommets (stops d\'achat)'],
          ['SSL', 'Sell-Side Liquidity', 'Sous les creux (stops de vente)'],
          ['Sweep', 'Dépassement + retour + retournement potentiel', 'Au niveau d\'une liquidité'],
          ['Cassure', 'Dépassement + continuation', 'Au niveau d\'un support/résistance'],
          ['Support', 'Niveau qui arrête une baisse', 'Sous le prix actuel'],
          ['Résistance', 'Niveau qui arrête une hausse', 'Au-dessus du prix actuel'],
          ['Trendline', 'Ligne de tendance (support/résistance dynamique)', 'Relie les creux ou les sommets']
        ]},
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Cette synthèse permet de visualiser l\'ensemble des concepts de liquidité et leurs relations. Les supports et résistances peuvent concentrer des ordres (liquidité), les trendlines aussi. Les sweeps peuvent se produire à tous ces niveaux.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Le trader identifie la structure : tendance haussière, range 1,0800-1,0900.', 'BSL externe : au-dessus de 1,0900. SSL externe : sous 1,0800.', 'Liquidité interne : petits sommets à 1,0850, petits creux à 1,0830.', 'Le prix monte vers 1,0850 (liquidité interne), la balaie, puis va vers 1,0900 (BSL externe).', 'À 1,0900, sweep du BSL → retournement potentiel.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader identifie une BSL au-dessus d\'un sommet et suppose que le prix va l\'atteindre, la balayer et se retourner. Mais le prix n\'atteint jamais la BSL et baisse directement. Les zones de liquidité sont des hypothèses : le prix ne va pas toujours les chercher.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Confondre les différents types de liquidité', 'Supposer que le prix cherche toujours la liquidité', 'Ne pas distinguer sweep et cassure', 'Ignorer la liquidité interne'] },
        { type: 'summary', points: ['Liquidité externe = BSL (au-dessus) et SSL (en dessous)', 'Liquidité interne = petits sommets et creux', 'Sweep = dépassement + retour + retournement potentiel', 'Cassure = dépassement + continuation', 'Supports, résistances et trendlines peuvent concentrer des ordres'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Où se trouve la BSL ?', options: ['Sous les creux', 'Au-dessus des sommets', 'À l\'intérieur du range', 'Nulle part'], correct: 1, explanation: 'La Buy-Side Liquidity (BSL) se trouve au-dessus des sommets, où des stops d\'achat sont susceptibles d\'être concentrés.' },
          { question: 'Quelle différence entre sweep et cassure ?', options: ['Aucune', 'Sweep = retour + retournement, cassure = continuation', 'Sweep = continuation, cassure = retour', 'Ce sont des indicateurs'], correct: 1, explanation: 'Le sweep est un dépassement suivi d\'un retour et d\'un retournement potentiel. La cassure est un dépassement suivi d\'une continuation.' },
          { question: 'Les supports peuvent-ils concentrer des ordres ?', options: ['Non', 'Oui, les supports peuvent concentrer des stops et des ordres', 'Seulement les résistances', 'Jamais'], correct: 1, explanation: 'Les supports peuvent concentrer des ordres (notamment des stops de vente sous le support), ce qui en fait des zones de liquidité potentielles.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Sur un graphique H4 non annoté : <br>1. Identifiez la BSL et la SSL <br>2. Identifiez la liquidité interne <br>3. Identifiez un sweep ou une cassure éventuel <br>4. Tracez les supports et résistances', correction: 'BSL = au-dessus des sommets. SSL = sous les creux. Liquidité interne = petits sommets/creux à l\'intérieur. Sweep = dépassement + retour. Cassure = dépassement + continuation. Supports et résistances = niveaux où le prix a réagi plusieurs fois.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'identifie BSL et SSL', 'J\'identifie la liquidité interne', 'Je distingue sweep et cassure', 'Je trace les supports et résistances', 'Je traite les zones de liquidité comme des hypothèses'] },
        { type: 'note' }
      ]
    }
  ]
}
