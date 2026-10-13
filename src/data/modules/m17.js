import { pdhPdlPattern, sweepBuySidePattern, sweepSellSidePattern } from '../../charts/candleData.js'

export default {
  id: 'm17', number: 17, title: 'Previous Daily High and Low (PDH/PDL)',
  description: 'Définition, identification, rôle dans la liquidité externe, sweeps, scénarios et exercices.',
  badge: 'advanced',
  intro: 'Ce module est consacré aux Previous Daily High (PDH) et Previous Daily Low (PDL), deux niveaux de référence majeurs pour l\'analyse de la liquidité externe. Le PDH et le PDL sont des niveaux de référence, pas des signaux d\'entrée automatiques. Un sweep ou une cassure ne garantit jamais un retournement ou une continuation.',
  objectives: ['Définir et identifier le PDH et le PDL', 'Comprendre leur rôle dans la liquidité', 'Distinguer sweep et cassure', 'Utiliser le PDH/PDL en multi-timeframe'],
  lessons: [
    {
      id: 'm17-l1', title: 'Définition et identification du PDH et du PDL',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Le <strong>PDH (Previous Daily High)</strong> est le plus haut de la journée précédente. Le <strong>PDL (Previous Daily Low)</strong> est le plus bas de la journée précédente. Ce sont des niveaux de référence qui peuvent attirer des liquidités (BSL au-dessus du PDH, SSL sous le PDL).' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Le PDH et le PDL se tracent en identifiant le plus haut et le plus bas de la bougie journalière (D1) précédente. Ils restent fixes pendant toute la journée actuelle. Ils sont différents des sommets et creux formés pendant la journée actuelle : le PDH/PDL sont des niveaux de la veille, pas de la journée en cours.' },
        { type: 'heading', content: 'Différence entre PDH/PDL et sommets/creux intraday' },
        { type: 'table', headers: ['Critère', 'PDH/PDL', 'Sommets/creux intraday'], rows: [
          ['Période', 'Journée précédente', 'Journée actuelle'],
          ['Fixation', 'Fixes pendant toute la journée', 'Évoluent au cours de la journée'],
          ['Rôle', 'Niveaux de référence de liquidité externe', 'Structure interne de la journée'],
          ['Visibilité', 'Très visibles pour tous les traders', 'Moins visibles (dépend de l\'unité de temps)']
        ]},
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Le PDH et le PDL sont parmi les niveaux de liquidité externe les plus surveillés. Beaucoup de traders placent leurs stops au-delà de ces niveaux. Le prix peut être attiré vers le PDH (pour chercher la BSL) ou vers le PDL (pour chercher la SSL).' },
        { type: 'callout', variant: 'info', title: 'Niveaux de référence', content: 'Le PDH et le PDL sont des niveaux de référence, pas des signaux d\'entrée automatiques. Un sweep ou une cassure ne garantit jamais un retournement ou une continuation. Ils doivent être utilisés avec d\'autres concepts (structure, FVG, OB) pour construire un plan de trading.' },
        { type: 'heading', content: 'Illustration graphique' },
        { type: 'chart', title: 'PDH et PDL tracés sur le graphique', props: {
          candles: pdhPdlPattern(),
          lines: [
            { y1: 1.1030, y2: 1.1030, color: '#26a69a', label: 'PDH (Previous Daily High)', labelX: 0.95, labelY: 1.1040 },
            { y1: 1.0940, y2: 1.0940, color: '#ef5350', label: 'PDL (Previous Daily Low)', labelX: 0.95, labelY: 1.0930 },
          ],
          annotations: [
            { type: 'label', candle: 0, price: 1.0980, text: 'Journée précédente', color: '#9ca8b8' },
            { type: 'label', candle: 8, price: 1.1010, text: 'Journée actuelle', color: '#00d4ff' },
          ]
        }},
        { type: 'text', content: 'Les lignes vertes et rouges montrent le PDH (1,1030) et le PDL (1,0940) de la journée précédente. Pendant la journée actuelle, le prix évolue entre ces deux niveaux. Le PDH peut attirer la BSL et le PDL peut attirer la SSL.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Hier, l\'EUR/USD a fait un plus haut à 1,0950 et un plus bas à 1,0880.', 'Aujourd\'hui, le PDH est à 1,0950 et le PDL est à 1,0880.', 'Le trader trace ces deux niveaux sur son graphique intraday.', 'Il sait que la BSL est au-dessus de 1,0950 et la SSL sous 1,0880.', 'Il surveille ces niveaux pour d\'éventuels sweeps ou cassures.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader trace le PDH et le PDL mais confond avec les sommets et creux de la journée actuelle. Il place le PDH au plus haut d\'aujourd\'hui au lieu du plus haut d\'hier. Le niveau est incorrect et l\'analyse est faussée.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Confondre PDH/PDL avec les sommets/creux intraday', 'Ne pas tracer le PDH/PDL chaque jour', 'Supposer que le prix atteindra toujours le PDH/PDL', 'Traiter le PDH/PDL comme un signal d\'entrée automatique'] },
        { type: 'summary', points: ['Le PDH = plus haut de la journée précédente', 'Le PDL = plus bas de la journée précédente', 'Ils sont fixes pendant toute la journée actuelle', 'BSL au-dessus du PDH, SSL sous le PDL', 'Ce sont des niveaux de référence, pas des signaux automatiques'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce que le PDH ?', options: ['Le plus haut de la journée actuelle', 'Le plus haut de la journée précédente', 'Un indicateur', 'Un type d\'ordre'], correct: 1, explanation: 'Le PDH (Previous Daily High) est le plus haut de la journée précédente. C\'est un niveau de référence fixe pendant toute la journée actuelle.' },
          { question: 'Quelle liquidité est associée au PDH ?', options: ['SSL', 'BSL (Buy-Side Liquidity au-dessus du PDH)', 'Aucune', 'Liquidité interne'], correct: 1, explanation: 'La BSL (Buy-Side Liquidity) se trouve au-dessus du PDH : des stops d\'achat sont susceptibles d\'y être concentrés.' },
          { question: 'Le PDH/PDL est-il un signal d\'entrée ?', options: ['Oui', 'Non, c\'est un niveau de référence', 'Parfois', 'Toujours'], correct: 1, explanation: 'Le PDH/PDL est un niveau de référence, pas un signal d\'entrée automatique. Il doit être utilisé avec d\'autres concepts pour construire un plan de trading.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Identifiez le PDH et le PDL d\'hier sur l\'EUR/USD. <br>1. Quel est le plus haut d\'hier (D1) ? <br>2. Quel est le plus bas d\'hier (D1) ? <br>3. Tracez ces niveaux sur votre graphique intraday.', correction: 'Regardez la bougie D1 d\'hier : le haut de la mèche = PDH, le bas de la mèche = PDL. Tracez deux lignes horizontales à ces niveaux sur votre graphique H1 ou M15. Ces niveaux restent fixes pendant toute la journée.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai identifié le PDH (hier)', 'J\'ai identifié le PDL (hier)', 'J\'ai tracé ces niveaux sur mon graphique intraday', 'Je sais que BSL est au-dessus du PDH et SSL sous le PDL'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm17-l2', title: 'Sweeps du PDH et du PDL',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Un <strong>sweep du PDH</strong> est un mouvement du prix au-dessus du PDH (déclenchant les stops d\'achat) suivi d\'un retour sous le PDH et potentiellement d\'un retournement. Un <strong>sweep du PDL</strong> est un mouvement sous le PDL suivi d\'un retour au-dessus et d\'un retournement potentiel.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Le sweep du PDH : le prix monte au-dessus du PDH avec une mèche, déclenche les stops d\'achat (BSL), puis revient sous le PDH. Si le prix se retourne à la baisse → sweep confirmé. S\'il reste au-dessus → cassure de continuation. Le sweep du PDL est l\'inverse : le prix descend sous le PDL, déclenche les stops de vente (SSL), puis revient au-dessus.' },
        { type: 'callout', variant: 'warning', title: 'Pas de garantie', content: 'Un sweep du PDH ou du PDL ne garantit pas un retournement. Le prix peut dépasser le niveau, revenir, puis continuer dans le sens de la cassure. Toujours attendre une confirmation (CHoCH, pattern) avant d\'entrer.' },
        { type: 'heading', content: 'Différence entre sweep et cassure de continuation' },
        { type: 'table', headers: ['Scénario', 'Description', 'Action'], rows: [
          ['Sweep du PDH + retournement', 'Dépassement du PDH + retour + baisse', 'Vendre après confirmation'],
          ['Cassure du PDH + continuation', 'Dépassement du PDH + clôture au-dessus + continuation haussière', 'Acheter sur le retest'],
          ['Sweep du PDL + retournement', 'Dépassement du PDL + retour + hausse', 'Acheter après confirmation'],
          ['Cassure du PDL + continuation', 'Dépassement du PDL + clôture en dessous + continuation baissière', 'Vendre sur le retest']
        ]},
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Les sweeps du PDH et du PDL sont parmi les setups les plus surveillés en SMC. Ils identifient les moments où le prix « balaie » les stops au-delà des niveaux de référence quotidiens. Distinguer un sweep d\'une cassure de continuation est essentiel pour ne pas se faire piéger.' },
        { type: 'heading', content: 'Illustration graphique : sweep du PDH' },
        { type: 'chart', title: 'Sweep du PDH suivi d\'un retournement', props: {
          candles: sweepBuySidePattern(),
          lines: [
            { y1: 1.1025, y2: 1.1025, color: '#26a69a', label: 'PDH', labelX: 0.95, labelY: 1.1035 },
          ],
          annotations: [
            { type: 'arrow', candle: 7, price: 1.1035, direction: 'up', color: '#ffa726' },
            { type: 'label', candle: 7, price: 1.1050, offsetY: -5, text: 'Sweep du PDH', color: '#ffa726' },
            { type: 'arrow', candle: 11, price: 1.0930, direction: 'down', color: '#ef5350' },
            { type: 'label', candle: 11, price: 1.0910, offsetY: 5, text: 'Retournement', color: '#ef5350' },
          ]
        }},
        { type: 'text', content: 'Le prix dépasse le PDH à 1,1025 avec une mèche (sweep), déclenche les stops au-dessus, puis revient sous le PDH et baisse. C\'est un sweep du PDH suivi d\'un retournement. Le trader vend après la confirmation (CHoCH baissier).' },
        { type: 'heading', content: 'Illustration graphique : cassure du PDH avec continuation' },
        { type: 'chart', title: 'Cassure du PDH suivie d\'une continuation haussière', props: {
          candles: [...(() => { let p = 1.098; const c = []; for (let i = 0; i < 12; i++) { const o = p; const ch = p + 0.0015 + Math.random() * 0.001; c.push({ o: +o.toFixed(4), c: +ch.toFixed(4), h: +(ch + 0.0005).toFixed(4), l: +(o - 0.0005).toFixed(4) }); p = ch; } return c; })()],
          lines: [
            { y1: 1.1025, y2: 1.1025, color: '#26a69a', label: 'PDH', labelX: 0.95, labelY: 1.1035 },
          ],
          annotations: [
            { type: 'arrow', candle: 3, price: 1.1030, direction: 'up', color: '#26a69a' },
            { type: 'label', candle: 3, price: 1.1050, offsetY: -5, text: 'Cassure + continuation', color: '#26a69a' },
          ]
        }},
        { type: 'text', content: 'Le prix casse le PDH à 1,1025 et clôture au-dessus. Il continue à monter. C\'est une cassure de continuation, pas un sweep. Le trader achète sur le retest du PDH (ancienne résistance = nouveau support).' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Le PDH est à 1,0950. Le prix monte vers 1,0955 (dépasse le PDH).', 'Il revient sous 1,0950 et forme un CHoCH baissier en M15.', 'C\'est un sweep du PDH suivi d\'un retournement.', 'Le trader vend après la confirmation (CHoCH + pattern bearish).', 'Stop Loss au-dessus du sweep (1,0956). TP à la SSL suivante.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Le prix dépasse le PDH à 1,0955. Le trader vend immédiatement, pensant à un sweep. Mais le prix clôture au-dessus du PDH et continue à monter. C\'était une cassure de continuation, pas un sweep. Le trader s\'est fait piéger en vendant trop tôt, sans confirmation.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Vendre sur le dépassement du PDH sans attendre le retour', 'Confondre sweep et cassure de continuation', 'Supposer qu\'un sweep garantit un retournement', 'Ne pas attendre la confirmation (CHoCH, pattern)'] },
        { type: 'summary', points: ['Un sweep du PDH = dépassement + retour + retournement potentiel', 'Une cassure du PDH = dépassement + continuation haussière', 'Un sweep du PDL = dépassement + retour + retournement potentiel', 'Toujours attendre une confirmation avant d\'entrer', 'Un sweep ne garantit pas un retournement'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce qu\'un sweep du PDH ?', options: ['Le prix reste sous le PDH', 'Le prix dépasse le PDH, revient et se retourne potentiellement', 'Le prix ignore le PDH', 'Une cassure de continuation'], correct: 1, explanation: 'Un sweep du PDH est un mouvement du prix au-dessus du PDH (déclenchant les stops) suivi d\'un retour sous le PDH et potentiellement d\'un retournement.' },
          { question: 'Comment distinguer un sweep d\'une cassure de continuation ?', options: ['C\'est impossible', 'Sweep = retour + retournement, continuation = clôture au-delà + poursuite', 'Le broker le dit', 'Par la couleur'], correct: 1, explanation: 'Le sweep est suivi d\'un retour sous le niveau et d\'un retournement. La cassure de continuation est suivie d\'une clôture au-delà du niveau et d\'une poursuite du mouvement.' },
          { question: 'Que faire après un sweep du PDH ?', options: ['Vendre immédiatement', 'Attendre une confirmation (CHoCH, pattern) avant de vendre', 'Acheter', 'Rien'], correct: 1, explanation: 'Après un sweep du PDH, il faut attendre une confirmation (CHoCH baissier, pattern de retournement) avant de vendre. Un sweep n\'est pas un retournement garanti.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Tracez le PDH et le PDL d\'hier sur l\'EUR/USD. <br>1. Le prix a-t-il atteint le PDH ou le PDL aujourd\'hui ? <br>2. S\'agit-il d\'un sweep ou d\'une cassure de continuation ? <br>3. Quelle confirmation attendriez-vous ?', correction: 'Si le prix a dépassé le PDH puis est revenu sous → sweep potentiel. S\'il est resté au-dessus → continuation. Confirmation : CHoCH baissier (pour un sweep du PDH), pattern de retournement, ou BOS dans le nouveau sens.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai tracé le PDH et le PDL', 'Je vérifie si le prix les a dépassés', 'Je distingue sweep et continuation', 'J\'attends une confirmation avant d\'entrer'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm17-l3', title: 'Interactions avec BOS, CHoCH, FVG et Order Blocks',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Le PDH et le PDL peuvent interagir avec d\'autres concepts SMC : un BOS peut se produire au niveau du PDH, un CHoCH peut suivre un sweep du PDH, un FVG peut se former près du PDH, et un Order Block peut coïncider avec le PDH.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Interactions possibles : <ul><li><strong>PDH + BOS</strong> : le prix casse le PDH à la hausse = BOS haussier (le PDH était un SH). La cassure du PDH peut confirmer une continuation haussière.</li><li><strong>PDH + CHoCH</strong> : après un sweep du PDH, un CHoCH baissier en M15/H1 confirme le retournement.</li><li><strong>PDH + FVG</strong> : un FVG peut se former juste sous ou au-dessus du PDH pendant l\'impulsion qui balaie les stops.</li><li><strong>PDH + OB</strong> : un Order Block peut se trouver à proximité du PDH, créant une confluence.</li></ul>' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Les interactions entre le PDH/PDL et les autres concepts SMC créent des confluences puissantes. Un sweep du PDH + un CHoCH + un FVG + un OB au même niveau = une confluence majeure. Ces confluences augmentent la pertinence du setup.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Le PDH est à 1,0950. Le prix monte et balaie le PDH à 1,0955 (sweep).', 'Un FVG se forme entre 1,0940 et 1,0950 pendant le sweep.', 'Le prix revient sous le PDH et forme un CHoCH baissier en M15.', 'Confluence : sweep du PDH + FVG + CHoCH = setup de vente puissant.', 'Le trader vend avec SL au-dessus du sweep et TP à la SSL.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Le prix balaie le PDH mais il n\'y a pas de CHoCH, pas de FVG, pas d\'OB à proximité. Le trader vend quand même sur le sweep seul. Sans confluence, le setup est faible et le prix peut continuer à monter.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Trader un sweep du PDH sans chercher de confluence', 'Ignorer le CHoCH après un sweep', 'Ne pas chercher les FVG et OB à proximité', 'Supposer que le PDH/PDL suffit comme signal'] },
        { type: 'summary', points: ['Le PDH/PDL peut interagir avec BOS, CHoCH, FVG et OB', 'Un BOS au PDH = cassure de continuation potentielle', 'Un CHoCH après un sweep = confirmation de retournement', 'Un FVG ou OB près du PDH = confluence', 'Les confluences augmentent la pertinence du setup'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Que peut indiquer un BOS au niveau du PDH ?', options: ['Un retournement', 'Une cassure de continuation haussière potentielle', 'Rien', 'Un sweep'], correct: 1, explanation: 'Si le prix casse le PDH à la hausse et clôture au-dessus, c\'est un BOS haussier qui peut indiquer une continuation haussière.' },
          { question: 'Que confirme un CHoCH après un sweep du PDH ?', options: ['La continuation', 'Le retournement potentiel', 'Rien', 'Un FVG'], correct: 1, explanation: 'Un CHoCH baissier après un sweep du PDH confirme le retournement potentiel : la structure interne a changé de caractère.' },
          { question: 'Pourquoi chercher des confluences avec le PDH/PDL ?', options: ['Pour le plaisir', 'Pour augmenter la pertinence du setup', 'Le broker l\'exige', 'Ce n\'est pas utile'], correct: 1, explanation: 'Les confluences (FVG, OB, CHoCH) avec le PDH/PDL augmentent la pertinence du setup. Un sweep du PDH avec CHoCH + FVG + OB est plus fiable qu\'un sweep seul.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Tracez le PDH et le PDL. <br>1. Y a-t-il un FVG près du PDH ou du PDL ? <br>2. Y a-t-il un OB à proximité ? <br>3. Un CHoCH s\'est-il formé après un sweep ?', correction: 'Cherchez les FVG, OB et CHoCH à proximité du PDH/PDL. Si plusieurs concepts se trouvent au même niveau → confluence forte. Si le PDH/PDL est isolé → setup plus faible, attendre plus de confluence.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je cherche les FVG près du PDH/PDL', 'Je cherche les OB à proximité', 'Je vérifie s\'il y a un CHoCH après un sweep', 'Je cherche les confluences'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm17-l4', title: 'Analyse multi-timeframe avec PDH/PDL',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'L\'analyse multi-timeframe avec le PDH/PDL consiste à utiliser le PDH et le PDL comme niveaux de référence sur l\'unité daily, tout en cherchant des entrées sur des unités inférieures (H1, M15) quand le prix atteint ces niveaux.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Méthode : <ol><li><strong>D1</strong> : identifier le PDH et le PDL de la veille.</li><li><strong>H4/H1</strong> : observer la structure interne et les liquidités à l\'approche du PDH/PDL.</li><li><strong>M15</strong> : chercher un sweep, un CHoCH ou un pattern de retournement au PDH/PDL.</li><li><strong>Entrée</strong> : après confirmation sur M15, dans le sens opposé au sweep.</li></ol>' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Le PDH/PDL est un niveau daily. Les entrées se font sur des unités inférieures pour obtenir un meilleur prix et un Stop Loss plus serré. L\'analyse multi-timeframe permet de combiner la pertinence du niveau daily avec la précision de l\'unité inférieure.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['D1 : PDH à 1,0950, PDL à 1,0880.', 'H1 : le prix monte vers le PDH. Structure interne haussière.', 'M15 : le prix balaie le PDH à 1,0953, puis forme un CHoCH baissier.', 'Entrée : vendre à 1,0948 après le CHoCH, SL à 1,0956, TP à 1,0880 (PDL).', 'Le trade utilise le PDH comme niveau de référence et le M15 pour l\'entrée précise.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader voit le prix atteindre le PDH et vend immédiatement sur H1 sans descendre en M15. Il n\'a pas de confirmation précise. Le prix continue à monter au-dessus du PDH. Sans l\'analyse M15, il a manqué le fait qu\'il n\'y avait pas encore de CHoCH.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Entrer sur le PDH/PDL sans descendre en unité inférieure', 'Ne pas attendre le CHoCH ou le pattern en M15', 'Utiliser le même Stop Loss pour toutes les unités de temps', 'Ignorer la structure interne'] },
        { type: 'summary', points: ['Le PDH/PDL est un niveau daily', 'Les entrées se font sur des unités inférieures (M15)', 'D1 = niveau, H1 = structure, M15 = entrée', 'Le multi-timeframe combine pertinence et précision', 'Toujours attendre la confirmation sur l\'unité inférieure'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Sur quelle unité identifier le PDH/PDL ?', options: ['M1', 'D1', 'M15', 'Aucune'], correct: 1, explanation: 'Le PDH et le PDL s\'identifient sur le graphique daily (D1) : ce sont le plus haut et le plus bas de la bougie de la veille.' },
          { question: 'Sur quelle unité chercher l\'entrée ?', options: ['D1', 'M15 ou H1', 'W1', 'MN'], correct: 1, explanation: 'L\'entrée se cherche sur une unité inférieure (M15 ou H1) après que le prix a atteint le PDH/PDL et qu\'une confirmation s\'est formée.' },
          { question: 'Pourquoi descendre en M15 pour l\'entrée ?', options: ['Pour le plaisir', 'Pour obtenir un meilleur prix et un Stop Loss plus serré', 'Le broker l\'exige', 'Ce n\'est pas utile'], correct: 1, explanation: 'Descendre en M15 permet d\'obtenir un meilleur prix d\'entrée et un Stop Loss plus serré, tout en bénéficiant du niveau de référence daily.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Tracez le PDH sur D1, observez l\'approche sur H1, cherchez l\'entrée sur M15. <br>1. Le prix approche-t-il du PDH ? <br>2. Y a-t-il un sweep en M15 ? <br>3. Où entreriez-vous ?', correction: 'Si le prix approche du PDH sur H1, descendez en M15 pour chercher un sweep + CHoCH. L\'entrée se fait après la confirmation (CHoCH baissier + pattern) avec un Stop Loss au-dessus du sweep et un TP vers le PDL ou la SSL suivante.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai identifié le PDH/PDL sur D1', 'J\'observe l\'approche sur H1', 'Je cherche l\'entrée sur M15', 'J\'attends la confirmation (CHoCH, pattern)'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm17-l5', title: 'Scénarios, invalidation et préparation de séance',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Cette leçon présente les <strong>scénarios haussier, baissier et neutre</strong> autour du PDH/PDL, les <strong>conditions d\'invalidation</strong>, les <strong>erreurs fréquentes</strong> et une <strong>checklist de préparation de séance</strong>.' },
        { type: 'heading', content: 'Scénarios' },
        { type: 'table', headers: ['Scénario', 'Description', 'Action potentielle'], rows: [
          ['Haussier', 'Le prix balaie le PDL (SSL), revient au-dessus, CHoCH haussier', 'Acheter après confirmation, TP vers le PDH'],
          ['Baissier', 'Le prix balaie le PDH (BSL), revient en dessous, CHoCH baissier', 'Vendre après confirmation, TP vers le PDL'],
          ['Neutre', 'Le prix évolue entre le PDH et le PDL sans sweep', 'Attendre, ne pas forcer de trade'],
          ['Continuation haussière', 'Le prix casse le PDH et clôture au-dessus', 'Acheter sur le retest du PDH'],
          ['Continuation baissière', 'Le prix casse le PDL et clôture en dessous', 'Vendre sur le retest du PDL']
        ]},
        { type: 'heading', content: 'Conditions d\'invalidation' },
        { type: 'list', items: [
          'Scénario haussier invalidé : le prix clôture sous le PDL après le sweep',
          'Scénario baissier invalidé : le prix clôture au-dessus du PDH après le sweep',
          'Scénario neutre : pas d\'invalidation, juste attendre',
          'Continuation haussière invalidée : le prix revient sous le PDH et clôture en dessous',
          'Continuation baissière invalidée : le prix revient au-dessus du PDL et clôture au-dessus'
        ]},
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: [
          'Trader le PDH/PDL sans confirmation',
          'Supposer qu\'un sweep garantit un retournement',
          'Ne pas préparer sa séance (identifier PDH/PDL avant l\'ouverture)',
          'Forcer un trade quand le prix est entre le PDH et le PDL (scénario neutre)',
          'Confondre sweep et cassure de continuation'
        ]},
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Préparer sa séance avec le PDH/PDL donne un cadre clair pour la journée. On sait où sont les liquidités, quels scénarios on attend, et à quel niveau on invalide. Cette préparation évite de trader de manière impulsive.' },
        { type: 'heading', content: 'Checklist de préparation de séance' },
        { type: 'checklist', items: [
          'J\'ai identifié le PDH et le PDL d\'hier',
          'J\'ai identifié la structure du marché (tendance, BOS, CHoCH)',
          'J\'ai identifié les liquidités (BSL au-dessus du PDH, SSL sous le PDL)',
          'J\'ai défini un scénario haussier et un scénario baissier',
          'J\'ai défini les conditions d\'invalidation',
          'J\'ai vérifié le calendrier économique',
          'Je sais ce que je fais si le prix atteint le PDH ou le PDL'
        ]},
        { type: 'heading', content: 'Exemple de préparation de séance' },
        { type: 'list', ordered: true, items: ['Avant l\'ouverture : PDH = 1,0950, PDL = 1,0880.', 'Structure D1 : tendance haussière, dernier HL à 1,0850.', 'Scénario haussier : le prix balaie le PDL, CHoCH haussier → acheter, TP vers le PDH.', 'Scénario baissier : le prix balaie le PDH, CHoCH baissier → vendre, TP vers le PDL.', 'Invalidation haussier : clôture sous 1,0880. Invalidation baissier : clôture au-dessus de 1,0950.', 'Calendrier : pas d\'annonce à fort impact aujourd\'hui.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader ouvre sa plateforme sans préparation. Il ne sait pas où sont le PDH et le PDL. Il trade au hasard, sans scénario défini. Quand le prix atteint un niveau clé, il est surpris et réagit émotionnellement.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Ne pas préparer sa séance', 'Ne pas définir de scénarios', 'Forcer un trade en scénario neutre', 'Ne pas définir d\'invalidation'] },
        { type: 'summary', points: ['Le PDH/PDL permet de définir des scénarios clairs', 'Scénario haussier : sweep du PDL + CHoCH haussier', 'Scénario baissier : sweep du PDH + CHoCH baissier', 'Scénario neutre : attendre, ne pas forcer', 'La préparation de séance est essentielle'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Que faire en scénario neutre ?', options: ['Forcer un trade', 'Attendre, ne pas forcer', 'Augmenter le levier', 'Vendre'], correct: 1, explanation: 'En scénario neutre (le prix évolue entre le PDH et le PDL sans sweep), il faut attendre et ne pas forcer de trade. On attend que le prix atteigne un niveau clé.' },
          { question: 'Quand le scénario haussier est-il invalidé ?', options: ['Le prix monte', 'Le prix clôture sous le PDL après le sweep', 'Le prix atteint le PDH', 'Jamais'], correct: 1, explanation: 'Le scénario haussier (sweep du PDL + CHoCH haussier) est invalidé si le prix clôture sous le PDL après le sweep. Le retournement n\'a pas eu lieu.' },
          { question: 'Que faut-il faire avant l\'ouverture ?', options: ['Rien', 'Préparer sa séance : PDH, PDL, structure, scénarios, invalidation', 'Acheter immédiatement', 'Vendre'], correct: 1, explanation: 'Avant l\'ouverture, il faut préparer sa séance : identifier le PDH/PDL, la structure, les liquidités, définir les scénarios et les invalidations, vérifier le calendrier.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Préparez votre séance de trading : <br>1. Quel est le PDH et le PDL d\'hier ? <br>2. Quelle est la structure du marché ? <br>3. Quel est votre scénario haussier et baissier ? <br>4. Quelles sont les invalidations ?', correction: '1. PDH = plus haut d\'hier, PDL = plus bas d\'hier. <br>2. Tendance, BOS, CHoCH récents. <br>3. Haussier : sweep du PDL + CHoCH haussier → acheter vers le PDH. Baissier : sweep du PDH + CHoCH baissier → vendre vers le PDL. <br>4. Invalidation haussier : clôture sous le PDL. Baissier : clôture au-dessus du PDH.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai identifié le PDH et le PDL', 'J\'ai défini un scénario haussier et baissier', 'J\'ai défini les invalidations', 'J\'ai vérifié le calendrier économique', 'Je sais ce que je fais à chaque niveau', 'Je ne force pas de trade en scénario neutre'] },
        { type: 'note' }
      ]
    }
  ]
}
