import { bullTrend, bearTrend, ranging, bosPattern, chochPattern } from '../../charts/candleData.js'

export default {
  id: 'm5', number: 5, title: 'Analyse technique',
  description: 'Graphiques, tendances, supports, résistances, lignes de tendance et introduction aux Smart Money Concepts.',
  badge: 'basics',
  intro: 'L\'analyse technique étudie les graphiques de prix pour identifier des patterns et des niveaux. Ce module pose les bases de la lecture graphique et prépare aux concepts SMC avancés.',
  objectives: ['Lire un graphique de prix', 'Identifier les tendances', 'Tracer supports et résistances', 'Comprendre la structure du marché'],
  lessons: [
    {
      id: 'm5-l1', title: 'Les graphiques de prix',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Un <strong>graphique de prix</strong> représente l\'évolution du prix d\'un actif dans le temps. Les trois types principaux sont : <strong>ligne</strong> (prix de clôture uniquement), <strong>barres OHLC</strong> (Open, High, Low, Close) et <strong>chandeliers japonais</strong> (la plus utilisée).' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Le graphique en chandeliers est le plus informatif : chaque bougie montre l\'ouverture, le plus haut, le plus bas et la clôture de la période. La couleur indique la direction (vert/bleu = hausse, rouge = baisse). Le corps montre l\'écart entre ouverture et clôture. Les mèches montrent les extrêmes atteints.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Le graphique est l\'outil principal du trader technique. Savoir lire un graphique en chandeliers est la base de toute analyse technique. Chaque concept ultérieur (tendances, supports, patterns) se construit sur cette lecture.' },
        { type: 'heading', content: 'Illustration graphique' },
        { type: 'chart', title: 'Graphique en chandeliers japonais', props: { candles: bullTrend(16, 1.0800, 0.0012) }},
        { type: 'text', content: 'Chaque bougie verte représente une période où le prix a clôturé plus haut que l\'ouverture (haussière). Chaque bougie rouge représente une période où le prix a clôturé plus bas (baissière). Les mèches montent les extrêmes atteints pendant la période.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Un trader regarde l\'EUR/USD en H1 (chaque bougie = 1 heure).', 'Il voit 8 bougies vertes consécutives : tendance haussière forte.', 'La 9ème bougie a une longue mèche haute : les acheteurs ont été repoussés.', 'Il identifie un potentiel retournement ou une pause.', 'Il attend une confirmation avant de décider.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader voit une grande bougie verte et achète immédiatement, pensant que la hausse va continuer. Mais la bougie suivante est rouge et le prix baisse. Une seule bougie ne suffit pas pour prendre une décision : il faut regarder le contexte.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Prendre une décision sur une seule bougie', 'Ignorer le contexte global', 'Confondre les unités de temps', 'Ne pas regarder les mèches'] },
        { type: 'summary', points: ['Le graphique en chandeliers est le plus utilisé', 'Chaque bougie montre OHLC (Open, High, Low, Close)', 'Vert = hausse, rouge = baisse', 'Le corps et les mèches donnent des informations', 'Toujours analyser dans le contexte global'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Que montre une bougie verte ?', options: ['Le prix a baissé', 'Le prix a clôturé plus haut que l\'ouverture', 'Le marché est fermé', 'Rien'], correct: 1, explanation: 'Une bougie verte (ou bleue) indique que le prix a clôturé plus haut que l\'ouverture : c\'est une bougie haussière.' },
          { question: 'Que montrent les mèches d\'une bougie ?', options: ['L\'ouverture et la clôture', 'Le plus haut et le plus bas atteints pendant la période', 'Le volume', 'La tendance'], correct: 1, explanation: 'Les mèches (ou ombres) montrent le plus haut et le plus bas atteints pendant la période, au-delà du corps.' },
          { question: 'Que signifie OHLC ?', options: ['Un indicateur', 'Open, High, Low, Close', 'Un type d\'ordre', 'Une unité de temps'], correct: 1, explanation: 'OHLC signifie Open (ouverture), High (plus haut), Low (plus bas), Close (clôture) — les quatre données d\'une bougie.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Ouvrez un graphique en chandeliers sur l\'EUR/USD en H1. <br>1. Identifiez la plus grande bougie verte et la plus grande bougie rouge. <br>2. Que signifient leurs mèches ?', correction: 'La plus grande bougie verte montre une forte pression acheteuse. La plus grande bougie rouge montre une forte pression vendeuse. Les mèches hautes montrent les niveaux où les vendeurs ont repris le contrôle. Les mèches basses montrent où les acheteurs sont intervenus.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je sais lire OHLC sur une bougie', 'Je différencie bougies haussières et baissières', 'Je regarde les mèches', 'J\'analyse dans le contexte global'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm5-l2', title: 'Les unités de temps en analyse technique',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'L\'<strong>unité de temps</strong> (timeframe) détermine la période représentée par chaque bougie. L\'analyse technique doit toujours être effectuée sur plusieurs unités de temps pour confirmer la tendance et trouver des entrées.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'L\'analyse multi-timeframe consiste à : <ul><li>Identifier la tendance sur une unité haute (D1, H4)</li><li>Chercher des niveaux clés sur une unité intermédiaire (H1)</li><li>Trouver des entrées précises sur une unité basse (M15, M5)</li></ul>Une tendance haussière sur D1 prime sur une consolidation sur M15. On cherche à trader dans le sens de la tendance de l\'unité supérieure.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Trader contre la tendance de l\'unité supérieure est une erreur fréquente. Un signal d\'achat sur M15 perd en fiabilité si la tendance sur D1 est baissière. L\'alignement multi-timeframe augmente la probabilité des trades.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['D1 : tendance haussière (HH, HL).', 'H4 : retracement en cours (le prix baisse temporairement).', 'H1 : le prix approche d\'un support (ancien HL).', 'M15 : un pattern de retournement haussier se forme.', 'Entrée d\'achat sur M15, dans le sens de la tendance D1.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader voit un signal d\'achat sur M15 et ouvre une position. Mais sur D1, la tendance est baissière et le prix est sous une résistance majeure. Le signal M15 n\'est qu\'un retracement dans une tendance baissière. Le prix reprend sa baisse et le trade est perdant.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Trader contre la tendance de l\'unité supérieure', 'Analyser une seule unité de temps', 'Confondre un retracement avec un retournement', 'Ne pas aligner les unités de temps'] },
        { type: 'summary', points: ['L\'analyse multi-timeframe est essentielle', 'Tendance sur unité haute, entrée sur unité basse', 'La tendance de l\'unité supérieure prime', 'L\'alignement multi-timeframe augmente la probabilité', 'Ne jamais trader contre la tendance majeure'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Quelle unité de temps utiliser pour identifier la tendance principale ?', options: ['M1', 'M5', 'D1 ou H4', 'Aucune'], correct: 2, explanation: 'On identifie la tendance principale sur une unité haute comme D1 ou H4, qui filtrent le bruit.' },
          { question: 'Que faire si M15 montre un signal d\'achat mais D1 est baissier ?', options: ['Acheter', 'Ne pas acheter — trader dans le sens de D1', 'Vendre', 'Attendre'], correct: 1, explanation: 'Si D1 est baissier, un signal d\'achat sur M15 est probablement un retracement. On évite d\'acheter contre la tendance majeure.' },
          { question: 'Qu\'est-ce que l\'analyse multi-timeframe ?', options: ['Analyser plusieurs actifs', 'Analyser le même actif sur plusieurs unités de temps', 'Utiliser plusieurs plateformes', 'Trader plusieurs paires'], correct: 1, explanation: 'L\'analyse multi-timeframe consiste à analyser le même actif sur plusieurs unités de temps pour confirmer la tendance et trouver des entrées.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Analysez l\'EUR/USD sur D1, H4 et M15. <br>1. Quelle est la tendance sur D1 ? <br>2. Où en est le prix sur H4 (impulsion ou retracement) ? <br>3. Y a-t-il un signal sur M15 ?', correction: 'Répondez selon ce que vous voyez : si D1 est haussier et H4 en retracement, cherchez un signal d\'achat sur M15. Si D1 est baissier, cherchez un signal de vente. L\'alignement des trois unités donne le trade le plus fiable.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai identifié la tendance sur l\'unité supérieure', 'J\'ai analysé le contexte sur l\'unité intermédiaire', 'Je cherche un signal sur l\'unité inférieure', 'Mes trades sont dans le sens de la tendance majeure'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm5-l3', title: 'Sommets et creux',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Les <strong>sommets</strong> (Swing Highs) sont les points hauts où le prix fait un pic avant de redescendre. Les <strong>creux</strong> (Swing Lows) sont les points bas où le prix fait un creux avant de remonter. Ils forment la structure du marché.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Un sommet est formé quand le prix monte, atteint un maximum local, puis redescend. Un creux est formé quand le prix baisse, atteint un minimum local, puis remonte. La succession de sommets et de creux définit la tendance : <ul><li><strong>HH + HL</strong> (Higher Highs + Higher Lows) = tendance haussière</li><li><strong>LH + LL</strong> (Lower Highs + Lower Lows) = tendance baissière</li><li><strong>Sommets et creux plats</strong> = consolidation (range)</li></ul>' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Les sommets et creux sont la base de l\'analyse de structure de marché. Tous les concepts SMC (BOS, CHoCH, liquidités, FVG) se construisent sur l\'identification des sommets et creux. Sans cette compétence, l\'analyse technique est impossible.' },
        { type: 'heading', content: 'Illustration graphique' },
        { type: 'chart', title: 'Sommets (SH) et creux (SL) sur une tendance haussière', props: {
          candles: bullTrend(18, 1.0800, 0.001),
          annotations: [
            { type: 'circle', candle: 3, price: 1.0820, color: '#00d4ff' },
            { type: 'label', candle: 3, price: 1.0820, offsetY: -15, text: 'SH1', color: '#00d4ff' },
            { type: 'circle', candle: 6, price: 1.0815, color: '#ffa726' },
            { type: 'label', candle: 6, price: 1.0815, offsetY: 15, text: 'SL1', color: '#ffa726' },
            { type: 'circle', candle: 9, price: 1.0855, color: '#00d4ff' },
            { type: 'label', candle: 9, price: 1.0855, offsetY: -15, text: 'SH2 (HH)', color: '#00d4ff' },
            { type: 'circle', candle: 12, price: 1.0845, color: '#ffa726' },
            { type: 'label', candle: 12, price: 1.0845, offsetY: 15, text: 'SL2 (HL)', color: '#ffa726' },
          ]
        }},
        { type: 'text', content: 'SH2 est plus haut que SH1 (Higher High). SL2 est plus haut que SL1 (Higher Low). Cette structure HH + HL définit une tendance haussière.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Le prix monte à 1,0900 (SH1), redescend à 1,0850 (SL1).', 'Il remonte à 1,0950 (SH2 > SH1 = HH), redescend à 1,0880 (SL2 > SL1 = HL).', 'Structure : HH + HL = tendance haussière confirmée.', 'Le trader cherche à acheter sur les creux (HL).'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Le prix monte à 1,0950 (SH2) mais au lieu de faire un HL, il casse sous SL1 (1,0850). La structure haussière est rompue. Un trader qui achète en supposant que la tendance continue se retrouve en perte.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Confondre un pic avec un sommet de swing', 'Ne pas comparer les sommets entre eux', 'Ignorer les creux', 'Supposer que la tendance continue indéfiniment'] },
        { type: 'summary', points: ['Les sommets (SH) sont les pics avant une baisse', 'Les creux (SL) sont les creux avant une hausse', 'HH + HL = tendance haussière', 'LH + LL = tendance baissière', 'Sommets et creux plats = consolidation'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce qu\'un Higher High ?', options: ['Un creux plus élevé', 'Un sommet plus élevé que le précédent', 'Un prix qui ne bouge pas', 'Un type d\'ordre'], correct: 1, explanation: 'Un Higher High (HH) est un sommet plus élevé que le sommet précédent, indiquant une poursuite de la tendance haussière.' },
          { question: 'Quelle structure indique une tendance baissière ?', options: ['HH + HL', 'LH + LL', 'Sommets plats', 'Aucune'], correct: 1, explanation: 'Une tendance baissière se caractérise par des Lower Highs (LH) et des Lower Lows (LL) — les sommets et les creux descendent.' },
          { question: 'Que sont les sommets et creux plats ?', options: ['Une tendance forte', 'Une consolidation (range)', 'Une erreur', 'Un retournement'], correct: 1, explanation: 'Des sommets et creux plats (au même niveau) indiquent une consolidation, c\'est-à-dire un range où le prix évolue horizontalement.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Sur un graphique H4, identifiez les 3 derniers sommets et les 3 derniers creux. <br>1. Les sommets montent-ils ou descendent-ils ? <br>2. Les creux montent-ils ou descendent-ils ? <br>3. Quelle est la tendance ?', correction: 'HH + HL = haussière. LH + LL = baissière. Plats = range. Comparez systématiquement SH1 vs SH2 vs SH3 et SL1 vs SL2 vs SL3 pour déterminer la structure.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'identifie les sommets (SH) sur le graphique', 'J\'identifie les creux (SL)', 'Je compare les SH entre eux et les SL entre eux', 'Je détermine la tendance (haussière, baissière, range)'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm5-l4', title: 'Tendances haussières, baissières et consolidations',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Une <strong>tendance haussière</strong> est une succession de sommets et creux plus élevés. Une <strong>tendance baissière</strong> est une succession de sommets et creux plus bas. Une <strong>consolidation</strong> (range) est un mouvement horizontal où le prix oscille entre un support et une résistance.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'La tendance est la direction générale du marché. « The trend is your friend » — trader dans le sens de la tendance augmente la probabilité de succès. Les tendances ne durent pas éternellement : elles finissent par se retourner ou consolider. Identifier le type de tendance est la première étape de toute analyse.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'La stratégie de trading dépend du type de tendance. En tendance haussière, on cherche à acheter sur les retracements. En tendance baissière, on cherche à vendre sur les rebonds. En consolidation, on peut trader les rebonds sur support/résistance ou attendre la cassure.' },
        { type: 'heading', content: 'Illustration graphique' },
        { type: 'chart', title: 'Tendance haussière, baissière et consolidation', props: {
          candles: [...bullTrend(7, 1.0800, 0.001), ...ranging(6, 1.0880, 0.0008), ...bearTrend(7, 1.0880, 0.001)],
          annotations: [
            { type: 'label', candle: 3, price: 1.0830, text: 'Haussière', color: '#26a69a' },
            { type: 'label', candle: 10, price: 1.0900, text: 'Consolidation', color: '#ffa726' },
            { type: 'label', candle: 17, price: 1.0820, text: 'Baissière', color: '#ef5350' },
          ]
        }},
        { type: 'text', content: 'Le graphique montre les trois phases : une tendance haussière (HH, HL), suivie d\'une consolidation (range horizontal), puis d\'une tendance baissière (LH, LL). Le passage d\'une phase à l\'autre se fait par un changement de structure.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Le trader identifie une tendance haussière sur D1.', 'Il attend un retracement sur H1 (le prix baisse temporairement).', 'Il achète à un support (HL) dans le sens de la tendance.', 'Il place son Stop Loss sous le support et son TP au sommet précédent ou au-delà.', 'Il trade dans le sens de la tendance : « buy the dip ».'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader identifie une tendance haussière et achète au sommet, juste avant un retracement. Le prix baisse et touche son Stop Loss. Il aurait dû attendre le retracement pour acheter à un meilleur prix.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Acheter au sommet d\'une tendance haussière', 'Vendre au creux d\'une tendance baissière', 'Confondre un retracement avec un retournement', 'Ne pas adapter la stratégie au type de tendance'] },
        { type: 'summary', points: ['Tendance haussière = HH + HL', 'Tendance baissière = LH + LL', 'Consolidation = range horizontal', 'Trader dans le sens de la tendance', 'Acheter sur les retracements en tendance haussière'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce qu\'une consolidation ?', options: ['Une tendance forte', 'Un mouvement horizontal entre support et résistance', 'Une cassure', 'Un retournement'], correct: 1, explanation: 'Une consolidation (range) est un mouvement horizontal où le prix oscille entre un support et une résistance sans tendance claire.' },
          { question: 'Que signifie « buy the dip » ?', options: ['Vendre au sommet', 'Acheter sur un retracement à la baisse dans une tendance haussière', 'Acheter au sommet', 'Ne pas trader'], correct: 1, explanation: '« Buy the dip » signifie acheter sur un retracement (baisse temporaire) dans une tendance haussière, pour profiter d\'un meilleur prix d\'entrée.' },
          { question: 'Pourquoi trader dans le sens de la tendance ?', options: ['Parce que c\'est obligatoire', 'Parce que cela augmente la probabilité de succès', 'Parce que le broker l\'exige', 'Parce que c\'est plus rapide'], correct: 1, explanation: 'Trader dans le sens de la tendance augmente la probabilité de succès car le mouvement général du marché est dans cette direction.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Identifiez le type de tendance actuelle sur l\'EUR/USD en D1. <br>1. S\'agit-il d\'une tendance haussière, baissière ou d\'une consolidation ? <br>2. Quelle stratégie adoptez-vous ?', correction: 'Si HH + HL → haussière : acheter sur les retracements. Si LH + LL → baissière : vendre sur les rebonds. Si range → trader les rebonds sur support/résistance ou attendre la cassure.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai identifié le type de tendance', 'Ma stratégie correspond au type de tendance', 'Je trade dans le sens de la tendance', 'J\'attends les retracements pour entrer'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm5-l5', title: 'Supports et résistances',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Un <strong>support</strong> est un niveau de prix où la demande est suffisamment forte pour arrêter une baisse. Une <strong>résistance</strong> est un niveau où l\'offre est suffisamment forte pour arrêter une hausse. Le prix peut rebondir sur ces niveaux ou les casser.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Un support est formé par des acheteurs qui entrent à ce niveau. Une résistance est formée par des vendeurs. Plus un niveau est testé, plus il devient connu — mais aussi plus il peut s\'affaiblir. Une résistance cassée peut devenir un support (et inversement) : c\'est le principe de <strong>inversion de rôle</strong>.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Les supports et résistances sont les niveaux les plus importants en analyse technique. Ils servent à placer les Stop Loss (sous un support pour un Buy), les Take Profit (à une résistance pour un Buy) et à identifier des zones d\'entrée. Tous les concepts SMC (liquidités, order blocks) sont des formes de supports/résistances.' },
        { type: 'heading', content: 'Illustration graphique' },
        { type: 'chart', title: 'Support et résistance testés plusieurs fois', props: {
          candles: ranging(16, 1.1000, 0.0008),
          lines: [
            { y1: 1.1020, y2: 1.1020, color: '#ef5350', label: 'Résistance', labelX: 0.95, labelY: 1.1020 },
            { y1: 1.0980, y2: 1.0980, color: '#26a69a', label: 'Support', labelX: 0.95, labelY: 1.0980 },
          ],
          annotations: [
            { type: 'circle', candle: 2, price: 1.1020, color: '#ef5350' },
            { type: 'circle', candle: 7, price: 1.1020, color: '#ef5350' },
            { type: 'circle', candle: 12, price: 1.1020, color: '#ef5350' },
            { type: 'circle', candle: 5, price: 1.0980, color: '#26a69a' },
            { type: 'circle', candle: 10, price: 1.0980, color: '#26a69a' },
          ]
        }},
        { type: 'text', content: 'La résistance (rouge) est testée 3 fois : le prix bute à chaque fois. Le support (vert) est testé 2 fois : le prix rebondit. Ces niveaux sont des zones où le prix est susceptible de réagir.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['L\'EUR/USD a un support à 1,0800 testé 3 fois.', 'Le prix approche 1,0800 une 4ème fois.', 'Le trader achète à 1,0810 (légèrement au-dessus du support).', 'Stop Loss à 1,0780 (sous le support). Take Profit à 1,0860 (résistance suivante).', 'Le prix rebondit sur le support et atteint le TP.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Le prix approche du support à 1,0800 pour la 5ème fois. Le support a été testé 4 fois et s\'affaiblit. Cette fois, le prix casse sous le support. Un trader qui achète au support se retrouve en perte. Plus un niveau est testé, plus il peut céder.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Supposer qu\'un support/résistance est toujours respecté', 'Placer le Stop Loss exactement sur le niveau', 'Ne pas tenir compte du nombre de tests', 'Ignorer l\'inversion de rôle après une cassure'] },
        { type: 'summary', points: ['Un support arrête une baisse (demande)', 'Une résistance arrête une hausse (offre)', 'Plus un niveau est testé, plus il peut s\'affaiblir', 'Une résistance cassée peut devenir un support', 'Les supports/résistances ne sont pas des garanties'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce qu\'un support ?', options: ['Un niveau qui arrête une hausse', 'Un niveau qui arrête une baisse', 'Un type d\'ordre', 'Une tendance'], correct: 1, explanation: 'Un support est un niveau de prix où la demande est suffisamment forte pour arrêter une baisse et potentiellement faire rebondir le prix.' },
          { question: 'Que peut-il se passer quand une résistance est cassée ?', options: ['Rien', 'Elle peut devenir un support', 'Le marché ferme', 'Le prix reste bloqué'], correct: 1, explanation: 'Quand une résistance est cassée, elle peut devenir un support : c\'est le principe d\'inversion de rôle.' },
          { question: 'Pourquoi un support testé 5 fois est-il plus risqué ?', options: ['Il est plus fort', 'Il peut s\'affaiblir et être cassé', 'Il n\'a pas d\'importance', 'Le broker le supprime'], correct: 1, explanation: 'Plus un support est testé, plus les acheteurs à ce niveau sont consommés. Le support peut s\'affaiblir et finir par être cassé.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Sur un graphique H4, tracez les 3 supports et les 3 résistances les plus importants. <br>1. Combien de fois chaque niveau a-t-il été testé ? <br>2. Quel niveau est le plus fiable ?', correction: 'Un niveau testé 2-3 fois est généralement plus fiable qu\'un niveau testé 5+ fois (qui peut céder). Le niveau le plus fiable est celui qui a été testé 2-3 fois avec des réactions claires et qui correspond à un niveau historique important.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai identifié les supports et résistances', 'J\'ai compté le nombre de tests', 'Je sais que ces niveaux peuvent être cassés', 'J\'adapte mon SL et TP à ces niveaux'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm5-l6', title: 'Lignes de tendance',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Une <strong>ligne de tendance</strong> est une ligne tracée reliant plusieurs creux (tendance haussière) ou plusieurs sommets (tendance baissière). Elle visualise la direction de la tendance et peut servir de support ou résistance dynamique.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Une <strong>trendline haussière</strong> relie au moins 2 creux ascendants. Le prix rebondit sur cette ligne. Une <strong>trendline baissière</strong> relie au moins 2 sommets descendants. Le prix bute sur cette ligne. Plus il y a de points de contact, plus la trendline est valide. Une cassure de trendline peut signaler un changement de tendance.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Les lignes de tendance aident à visualiser la direction et la force de la tendance. Elles servent de zones d\'entrée (achat sur une trendline haussière) et de zones de sortie (cassure de trendline = signal de retournement potentiel).' },
        { type: 'heading', content: 'Illustration graphique' },
        { type: 'chart', title: 'Ligne de tendance haussière', props: {
          candles: bullTrend(16, 1.0800, 0.001),
          lines: [
            { y1: 1.0800, y2: 1.0880, x1: 0.05, x2: 0.95, color: '#26a69a', label: 'Trendline haussière', labelX: 0.85, labelY: 1.0890 },
          ],
          annotations: [
            { type: 'circle', candle: 4, price: 1.0820, color: '#26a69a' },
            { type: 'circle', candle: 9, price: 1.0850, color: '#26a69a' },
            { type: 'circle', candle: 13, price: 1.0870, color: '#26a69a' },
          ]
        }},
        { type: 'text', content: 'La trendline haussière (verte) relie 3 creux ascendants. Le prix rebondit sur cette ligne à chaque contact. La trendline sert de support dynamique : elle monte avec la tendance.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Le trader trace une trendline haussière reliant 3 creux.', 'Le prix approche la trendline pour la 4ème fois.', 'Il achète au contact de la trendline (support dynamique).', 'Stop Loss sous la trendline. TP au sommet précédent.', 'Le prix rebondit et atteint le TP.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Le prix casse la trendline haussière. Le trader achète quand même, pensant que le prix va revenir. Mais la cassure de trendline signale un changement potentiel de tendance. Le prix continue à baisser.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Tracer une trendline sur un seul point', 'Forcer une trendline qui ne correspond pas', 'Ignorer une cassure de trendline', 'Supposer que la trendline ne sera jamais cassée'] },
        { type: 'summary', points: ['Une trendline haussière relie les creux ascendants', 'Une trendline baissière relie les sommets descendants', 'Plus de contacts = plus valide', 'Une cassure de trendline = signal de retournement potentiel', 'Les trendlines sont des supports/résistances dynamiques'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Combien de points minimum pour tracer une trendline ?', options: ['1', '2', '5', '10'], correct: 1, explanation: 'Il faut au minimum 2 points (creux ou sommets) pour tracer une trendline. 3 points ou plus la rendent plus valide.' },
          { question: 'Que relie une trendline haussière ?', options: ['Les sommets', 'Les creux ascendants', 'Les ouvertures', 'Les clôtures'], correct: 1, explanation: 'Une trendline haussière relie les creux ascendants (Higher Lows), servant de support dynamique.' },
          { question: 'Que peut signaler une cassure de trendline ?', options: ['Rien', 'Un changement potentiel de tendance', 'Une hausse garantie', 'La fermeture du marché'], correct: 1, explanation: 'Une cassure de trendline peut signaler un changement potentiel de tendance ou au moins une pause dans la tendance actuelle.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Tracez une trendline sur l\'EUR/USD en H4. <br>1. Est-elle haussière ou baissière ? <br>2. Combien de points de contact ? <br>3. Le prix est-il proche de la trendline ?', correction: 'Si la trendline relie des creux ascendants → haussière (support). Si elle relie des sommets descendants → baissière (résistance). Plus de contacts = plus fiable. Si le prix approche de la trendline, c\'est une zone d\'entrée potentielle.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai tracé la trendline avec au moins 2 points', 'J\'ai compté les contacts', 'Je sais que la trendline peut être cassée', 'J\'utilise la trendline comme support/résistance dynamique'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm5-l7', title: 'Zones de prix, cassures et fausses cassures',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Une <strong>zone de prix</strong> est une zone (pas une ligne exacte) où le prix est susceptible de réagir. Une <strong>cassure</strong> (breakout) se produit quand le prix dépasse un niveau. Une <strong>fausse cassure</strong> (fakeout) se produit quand le prix dépasse un niveau puis revient dans la zone.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Les zones de prix sont plus réalistes que les lignes exactes : le marché ne respecte pas un prix au pip près. Une cassure confirmée se traduit par une clôture au-delà du niveau. Une fausse cassure (ou sweep) est un dépassement temporaire suivi d\'un retour — c\'est un concept clé des Smart Money Concepts.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Distinguer une vraie cassure d\'une fausse cassure est l\'une des compétences les plus importantes en trading. Les fausses cassures piègent les traders qui entrent sur la cassure. Les vraies cassures offrent des opportunités de continuation. Les sweeps de liquidité (Module 14) sont des fausses cassures intentionnelles.' },
        { type: 'heading', content: 'Illustration graphique' },
        { type: 'chart', title: 'Cassure confirmée vs fausse cassure', props: {
          candles: [...ranging(8, 1.1000, 0.0006), ...(() => { let p = 1.100; const c = []; for (let i = 0; i < 4; i++) { c.push({ o: +p.toFixed(4), c: +(p + 0.002).toFixed(4), h: +(p + 0.003).toFixed(4), l: +(p - 0.001).toFixed(4) }); p += 0.002; } return c; })()],
          lines: [
            { y1: 1.1020, y2: 1.1020, color: '#ef5350', dashed: true, label: 'Résistance', labelX: 0.95, labelY: 1.1020 },
          ],
          annotations: [
            { type: 'label', candle: 10, price: 1.1050, text: 'Cassure confirmée', color: '#26a69a' },
          ]
        }},
        { type: 'text', content: 'Dans cet exemple, le prix casse la résistance à 1,1020 et clôture au-dessus : c\'est une cassure confirmée. Si le prix avait dépassé 1,1020 puis était revenu sous ce niveau, ce serait une fausse cassure.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['L\'EUR/USD a une résistance à 1,0900.', 'Le prix monte à 1,0910 (dépasse la résistance).', 'Il clôture au-dessus à 1,0915 : cassure confirmée.', 'Le trader achète sur le retest de 1,0900 (ancienne résistance = nouveau support).', 'Le prix continue à monter.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Le prix dépasse 1,0900 (résistance) avec une mèche haute mais clôture sous 1,0900. C\'est une fausse cassure. Un trader qui a acheté sur le dépassement se retrouve en perte quand le prix revient sous la résistance.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Entrer sur un dépassement sans attendre la clôture', 'Confondre fausse cassure et vraie cassure', 'Ne pas attendre le retest après une cassure', 'Placer des ordres exactement sur le niveau'] },
        { type: 'summary', points: ['Une zone de prix est plus réaliste qu\'une ligne exacte', 'Une cassure confirmée = clôture au-delà du niveau', 'Une fausse cassure = dépassement temporaire puis retour', 'Les fausses cassures piègent les traders', 'Attendre le retest après une cassure est plus prudent'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce qu\'une fausse cassure ?', options: ['Une cassure qui continue', 'Un dépassement temporaire suivi d\'un retour', 'Une absence de cassure', 'Un type d\'indicateur'], correct: 1, explanation: 'Une fausse cassure (fakeout) est un dépassement temporaire d\'un niveau suivi d\'un retour dans la zone. Elle piège les traders qui entrent sur le dépassement.' },
          { question: 'Comment confirmer une cassure ?', options: ['Le prix dépasse le niveau', 'Le prix clôture au-delà du niveau', 'Le prix touche le niveau', 'Le broker le confirme'], correct: 1, explanation: 'Une cassure est confirmée quand le prix clôture au-delà du niveau, pas seulement quand il le dépasse avec une mèche.' },
          { question: 'Que faire après une cassure confirmée ?', options: ['Acheter immédiatement', 'Attendre le retest de l\'ancien niveau', 'Vendre', 'Rien'], correct: 1, explanation: 'Après une cassure confirmée, on peut attendre le retest de l\'ancien niveau (qui a changé de rôle) pour entrer à un meilleur prix.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Sur un graphique H1, identifiez une résistance. <br>1. Le prix l\'a-t-il cassée ou a-t-il fait une fausse cassure ? <br>2. Comment le savez-vous ?', correction: 'Si le prix a clôture au-dessus de la résistance → cassure confirmée. Si le prix a dépassé la résistance avec une mèche mais clôturé en dessous → fausse cassure. La clôture est le critère de confirmation.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je vérifie la clôture pour confirmer une cassure', 'Je distingue vraie et fausse cassure', 'J\'attends le retest après une cassure', 'Je n\'entre pas sur un simple dépassement'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm5-l8', title: 'Confluences et introduction aux SMC',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Une <strong>confluence</strong> est l\'alignement de plusieurs signaux ou concepts au même niveau. Les <strong>Smart Money Concepts (SMC)</strong> sont une approche d\'analyse qui étudie la structure du marché, les liquidités, les FVG et les order blocks pour comprendre le comportement du prix.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Plus il y a de confluences à un niveau, plus ce niveau est potentiellement significatif. Exemple de confluence : un support + une trendline + un FVG + un niveau de Fibonacci au même endroit. Les SMC approfondissent ces concepts avec la structure de marché (BOS, CHoCH), les liquidités (BSL, SSL, sweeps), les Fair Value Gaps et les Order Blocks.' },
        { type: 'callout', variant: 'info', title: 'Note importante', content: 'Les SMC sont une approche d\'interprétation technique du prix. Ils ne prouvent pas la présence d\'ordres institutionnels. Les zones identifiées sont des hypothèses d\'analyse, pas des certitudes.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Les confluences augmentent la probabilité d\'un setup. Les SMC offrent un cadre d\'analyse cohérent pour comprendre pourquoi le prix réagit à certains niveaux. Les modules 13 à 17 développent ces concepts en détail.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['L\'EUR/USD a un support à 1,0800.', 'Une trendline haussière passe aussi par 1,0800.', 'Un FVG se trouve entre 1,0790 et 1,0810.', 'Le niveau 1,0800 est une confluence de 3 facteurs.', 'Le trader achète à 1,0800 avec une forte confluence.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader achète à un niveau qui n\'a qu\'une seule confluence (un support vague). Le prix casse le support. Sans confluences supplémentaires, le niveau n\'était pas suffisamment significatif.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Compter une seule confluence comme suffisante', 'Forcer des confluences qui n\'existent pas', 'Supposer que les SMC garantissent un résultat', 'Ignorer le contexte de marché global'] },
        { type: 'summary', points: ['Une confluence = alignement de plusieurs signaux', 'Plus de confluences = niveau plus significatif', 'Les SMC étudient la structure, les liquidités, les FVG et les OB', 'Les SMC sont des interprétations, pas des preuves', 'Les modules 13-17 développent les SMC en détail'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce qu\'une confluence ?', options: ['Un seul signal', 'L\'alignement de plusieurs signaux au même niveau', 'Un type d\'indicateur', 'Une stratégie'], correct: 1, explanation: 'Une confluence est l\'alignement de plusieurs signaux ou concepts techniques au même niveau, ce qui rend ce niveau plus significatif.' },
          { question: 'Que sont les SMC ?', options: ['Des indicateurs', 'Une approche d\'analyse de la structure et des liquidités', 'Un type de broker', 'Une garantie de profit'], correct: 1, explanation: 'Les Smart Money Concepts (SMC) sont une approche d\'analyse qui étudie la structure du marché, les liquidités, les FVG et les order blocks.' },
          { question: 'Les SMC garantissent-ils un résultat ?', options: ['Oui', 'Non, ce sont des interprétations techniques', 'Parfois', 'Seulement en tendance'], correct: 1, explanation: 'Les SMC sont une approche d\'interprétation technique du prix. Ils ne garantissent pas un résultat et ne prouvent pas la présence d\'ordres institutionnels.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Identifiez un niveau sur l\'EUR/USD où au moins 2 concepts se rejoignent. <br>1. Quels concepts sont présents ? <br>2. S\'agit-il d\'une confluence ?', correction: 'Exemple : un support à 1,0800 + une trendline haussière passant par 1,0800 = confluence de 2 facteurs. Plus il y a de facteurs alignés (support + trendline + FVG + Fibonacci), plus la confluence est forte.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je cherche des confluences (minimum 2)', 'Je n\'entre pas sur un seul signal', 'Je comprends que les SMC sont des interprétations', 'Je suis prêt à approfondir les SMC dans les modules 13-17'] },
        { type: 'note' }
      ]
    }
  ]
}
