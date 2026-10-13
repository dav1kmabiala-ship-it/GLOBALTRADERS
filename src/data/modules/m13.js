import { bullTrend, bearTrend, ranging, bosPattern, chochPattern } from '../../charts/candleData.js'

export default {
  id: 'm13', number: 13, title: 'Structure du marché et concepts SMC',
  description: 'Market Structure, swings, BOS, CHoCH, structure interne/externe et analyse multi-timeframe.',
  badge: 'advanced',
  intro: 'Ce module est le fondement des Smart Money Concepts. Vous y apprendrez à lire la structure du marché, à identifier les Breaks of Structure (BOS) et les Changes of Character (CHoCH), et à analyser plusieurs unités de temps simultanément.',
  objectives: ['Maîtriser la Market Structure', 'Identifier les BOS et CHoCH', 'Distinguer structure interne et externe', 'Pratiquer l\'analyse multi-timeframe'],
  lessons: [
    {
      id: 'm13-l1', title: 'Market Structure : sommets, creux et tendances',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'La <strong>Market Structure</strong> (structure du marché) est l\'organisation des mouvements de prix en sommets (Swing Highs) et creux (Swing Lows). La succession de ces sommets et creux définit la tendance : haussière (HH + HL), baissière (LH + LL), ou consolidation.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Les concepts clés : <ul><li><strong>Swing High (SH)</strong> : sommet, point haut avant une baisse.</li><li><strong>Swing Low (SL)</strong> : creux, point bas avant une hausse.</li><li><strong>Higher High (HH)</strong> : sommet plus élevé que le précédent.</li><li><strong>Higher Low (HL)</strong> : creux plus élevé que le précédent.</li><li><strong>Lower High (LH)</strong> : sommet plus bas que le précédent.</li><li><strong>Lower Low (LL)</strong> : creux plus bas que le précédent.</li></ul>Une tendance haussière = succession de HH et HL. Une tendance baissière = succession de LH et LL. Une consolidation = sommets et creux approximativement au même niveau.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'La Market Structure est la base de toute analyse SMC. Les BOS, CHoCH, liquidités, FVG et order blocks se construisent tous sur la lecture de la structure. Sans cette compétence, aucun concept SMC ne peut être appliqué correctement.' },
        { type: 'heading', content: 'Illustration graphique' },
        { type: 'chart', title: 'Structure haussière : HH et HL', props: {
          candles: bullTrend(18, 1.0800, 0.001),
          annotations: [
            { type: 'circle', candle: 3, price: 1.0825, color: '#00d4ff' },
            { type: 'label', candle: 3, price: 1.0825, offsetY: -15, text: 'SH1', color: '#00d4ff' },
            { type: 'circle', candle: 6, price: 1.0810, color: '#ffa726' },
            { type: 'label', candle: 6, price: 1.0810, offsetY: 15, text: 'SL1', color: '#ffa726' },
            { type: 'circle', candle: 9, price: 1.0860, color: '#00d4ff' },
            { type: 'label', candle: 9, price: 1.0860, offsetY: -15, text: 'SH2 (HH)', color: '#00a69a' },
            { type: 'circle', candle: 12, price: 1.0840, color: '#ffa726' },
            { type: 'label', candle: 12, price: 1.0840, offsetY: 15, text: 'SL2 (HL)', color: '#26a69a' },
            { type: 'circle', candle: 15, price: 1.0890, color: '#00d4ff' },
            { type: 'label', candle: 15, price: 1.0890, offsetY: -15, text: 'SH3 (HH)', color: '#26a69a' },
          ]
        }},
        { type: 'text', content: 'Cette structure montre une tendance haussière : SH2 > SH1 (Higher High), SL2 > SL1 (Higher Low), SH3 > SH2 (Higher High). Chaque sommet et chaque creux est plus élevé que le précédent. C\'est la définition d\'une tendance haussière.' },
        { type: 'heading', content: 'Illustration graphique : structure baissière' },
        { type: 'chart', title: 'Structure baissière : LH et LL', props: {
          candles: bearTrend(18, 1.1200, 0.001),
          annotations: [
            { type: 'circle', candle: 3, price: 1.1175, color: '#00d4ff' },
            { type: 'label', candle: 3, price: 1.1175, offsetY: -15, text: 'SH1', color: '#00d4ff' },
            { type: 'circle', candle: 6, price: 1.1190, color: '#ffa726' },
            { type: 'label', candle: 6, price: 1.1190, offsetY: 15, text: 'SL1', color: '#ffa726' },
            { type: 'circle', candle: 9, price: 1.1140, color: '#00d4ff' },
            { type: 'label', candle: 9, price: 1.1140, offsetY: -15, text: 'SH2 (LH)', color: '#ef5350' },
            { type: 'circle', candle: 12, price: 1.1160, color: '#ffa726' },
            { type: 'label', candle: 12, price: 1.1160, offsetY: 15, text: 'SL2 (LL)', color: '#ef5350' },
          ]
        }},
        { type: 'text', content: 'Cette structure montre une tendance baissière : SH2 < SH1 (Lower High), SL2 < SL1 (Lower Low). Chaque sommet et chaque creux est plus bas que le précédent.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Le trader identifie la structure sur D1 : HH + HL = tendance haussière.', 'Il cherche à acheter sur les retracements (sur les HL).', 'Il identifie le dernier HL comme support potentiel.', 'Il attend que le prix retraced vers ce HL pour chercher une entrée.', 'La structure lui donne le contexte pour sa stratégie.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader identifie une structure haussière mais ne remarque pas que le dernier creux est plus bas que le précédent (LL au lieu de HL). La structure a changé mais il continue à acheter comme si la tendance était haussière. Il faut toujours comparer les derniers sommets et creux avec les précédents.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Ne pas comparer les sommets et creux entre eux', 'Confondre un pic avec un swing high', 'Ignorer les changements de structure', 'Supposer que la tendance continue indéfiniment'] },
        { type: 'summary', points: ['La Market Structure = organisation des SH et SL', 'HH + HL = tendance haussière', 'LH + LL = tendance baissière', 'Sommets/creux plats = consolidation', 'La structure est la base de tous les concepts SMC'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce que la Market Structure ?', options: ['Un indicateur', 'L\'organisation des mouvements en SH et SL', 'Un type d\'ordre', 'Une plateforme'], correct: 1, explanation: 'La Market Structure est l\'organisation des mouvements de prix en sommets (Swing Highs) et creux (Swing Lows), définissant la tendance.' },
          { question: 'Quelle structure indique une tendance haussière ?', options: ['LH + LL', 'HH + HL', 'Sommets plats', 'Aucune'], correct: 1, explanation: 'Une tendance haussière se caractérise par des Higher Highs (HH) et des Higher Lows (HL) — les sommets et les creux montent.' },
          { question: 'Qu\'est-ce qu\'un Lower Low ?', options: ['Un sommet plus bas', 'Un creux plus bas que le précédent', 'Un type d\'ordre', 'Un support'], correct: 1, explanation: 'Un Lower Low (LL) est un creux plus bas que le creux précédent, indiquant une poursuite de la tendance baissière.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Sur un graphique D1, identifiez les 4 derniers SH et les 4 derniers SL. <br>1. Sont-ce des HH ou des LH ? <br>2. Sont-ce des HL ou des LL ? <br>3. Quelle est la tendance ?', correction: 'Comparez SH1 vs SH2 vs SH3 vs SH4 et SL1 vs SL2 vs SL3 vs SL4. Si les SH montent et les SL montent → haussière. Si les SH descendent et les SL descendent → baissière. Si plats → consolidation.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'identifie les SH et SL sur le graphique', 'Je compare les SH entre eux (HH ou LH)', 'Je compare les SL entre eux (HL ou LL)', 'Je détermine la tendance', 'Je vérifie régulièrement si la structure change'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm13-l2', title: 'Break of Structure (BOS)',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Le <strong>Break of Structure (BOS)</strong> est la cassure d\'un sommet (en tendance haussière) ou d\'un creux (en tendance baissière) qui confirme la <strong>continuation</strong> de la tendance. En tendance haussière, un BOS se produit quand le prix casse au-dessus du dernier swing high.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Le BOS indique que la tendance continue : <ul><li><strong>BOS haussier</strong> : le prix casse au-dessus du dernier SH. La tendance haussière continue.</li><li><strong>BOS baissier</strong> : le prix casse sous le dernier SL. La tendance baissière continue.</li></ul>Le BOS est confirmé par la <strong>cassure</strong> du niveau (le prix dépasse le niveau) et idéalement par une <strong>clôture</strong> au-delà. Un simple dépassement avec une mèche peut être une fausse cassure.' },
        { type: 'callout', variant: 'info', title: 'Note importante', content: 'Un BOS confirme la continuation de la tendance, mais ne garantit pas que la tendance va continuer indéfiniment. Après un BOS, le prix peut faire un retracement ou se retourner. Le BOS est un signal de continuation, pas une garantie.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Le BOS est l\'un des concepts les plus utilisés en SMC. Il confirme que la tendance est intacte et permet d\'identifier les zones de retracement potentielles. Après un BOS, le prix fait souvent un retracement vers la zone cassée avant de continuer.' },
        { type: 'heading', content: 'Illustration graphique' },
        { type: 'chart', title: 'BOS haussier : cassure du dernier swing high', props: {
          candles: bosPattern(),
          annotations: [
            { type: 'circle', candle: 5, price: 1.0990, color: '#00d4ff' },
            { type: 'label', candle: 5, price: 1.0990, offsetY: -15, text: 'Dernier SH', color: '#00d4ff' },
            { type: 'arrow', candle: 12, price: 1.1110, direction: 'up', color: '#26a69a' },
            { type: 'label', candle: 12, price: 1.1130, offsetY: -5, text: 'BOS ↑', color: '#26a69a' },
          ],
          lines: [
            { y1: 1.1095, y2: 1.1095, x1: 0.3, x2: 0.9, color: '#00d4ff', dashed: true, label: 'Niveau cassé', labelX: 0.88, labelY: 1.1105 },
          ]
        }},
        { type: 'text', content: 'Le prix monte, forme un sommet à 1,0990 (dernier SH), retraced, puis casse au-dessus de ce sommet. C\'est un BOS haussier : la tendance haussière continue. Le niveau cassé (1,0990) peut servir de support lors d\'un retracement.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Tendance haussière sur EUR/USD D1 (HH, HL).', 'Le dernier SH est à 1,0950.', 'Le prix monte et casse au-dessus de 1,0950 → BOS haussier.', 'La tendance haussière est confirmée.', 'Le trader cherche à acheter sur le retracement vers 1,0950 (ancien SH = nouveau support).'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Le prix dépasse le SH à 1,0950 avec une mèche haute mais clôture sous 1,0950. Ce n\'est pas un BOS confirmé : c\'est potentiellement une fausse cassure (sweep). Le trader qui achète sur ce « BOS » se fait piéger.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Confondre BOS et fausse cassure', 'Ne pas attendre la clôture pour confirmer', 'Supposer que le BOS garantit la continuation', 'Entrer immédiatement après le BOS sans retracement'] },
        { type: 'summary', points: ['Le BOS confirme la continuation de la tendance', 'BOS haussier = cassure au-dessus du dernier SH', 'BOS baissier = cassure sous le dernier SL', 'Le BOS doit être confirmé (clôture au-delà)', 'Un BOS ne garantit pas la continuation indéfinie'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce qu\'un BOS ?', options: ['Un retournement de tendance', 'Une cassure qui confirme la continuation de la tendance', 'Un type d\'ordre', 'Un indicateur'], correct: 1, explanation: 'Le Break of Structure (BOS) est la cassure d\'un sommet (haussier) ou d\'un creux (baissier) qui confirme la continuation de la tendance.' },
          { question: 'Comment confirmer un BOS ?', options: ['Le prix dépasse le niveau', 'Le prix clôture au-delà du niveau', 'Le broker le confirme', 'Rien'], correct: 1, explanation: 'Un BOS est confirmé quand le prix clôture au-delà du niveau cassé, pas seulement quand il le dépasse avec une mèche.' },
          { question: 'Un BOS garantit-il la continuation ?', options: ['Oui', 'Non, c\'est un signal de continuation, pas une garantie', 'Parfois', 'Toujours'], correct: 1, explanation: 'Un BOS est un signal de continuation de la tendance, mais il ne garantit pas que la tendance va continuer. Le prix peut faire un retracement ou se retourner.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Sur un graphique H4, identifiez le dernier SH en tendance haussière. <br>1. Le prix l\'a-t-il cassé ? <br>2. S\'agit-il d\'un BOS confirmé (clôture au-delà) ? <br>3. Que pouvez-vous faire après le BOS ?', correction: '1. Si le prix a clôturé au-dessus du dernier SH → BOS haussier confirmé. <br>2. Si seulement une mèche dépasse → fausse cassure potentielle. <br>3. Après un BOS, on peut chercher un retracement vers l\'ancien SH (qui devient support) pour une entrée dans le sens de la tendance.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai identifié le dernier SH ou SL', 'Je vérifie la clôture pour confirmer le BOS', 'Je ne confonds pas BOS et fausse cassure', 'Je cherche un retracement après le BOS'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm13-l3', title: 'Change of Character (CHoCH)',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Le <strong>Change of Character (CHoCH)</strong> est la cassure d\'un creux (en tendance haussière) ou d\'un sommet (en tendance baissière) qui indique un <strong>changement potentiel de tendance</strong>. En tendance haussière, un CHoCH se produit quand le prix casse sous le dernier swing low.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Le CHoCH est l\'opposé du BOS : <ul><li><strong>CHoCH baissier</strong> (en tendance haussière) : le prix casse sous le dernier HL. La tendance haussière est potentiellement terminée.</li><li><strong>CHoCH haussier</strong> (en tendance baissière) : le prix casse au-dessus du dernier LH. La tendance baissière est potentiellement terminée.</li></ul>Le CHoCH indique un <strong>changement potentiel</strong>, pas certain. Après un CHoCH, il faut attendre une confirmation (BOS dans le nouveau sens) pour valider le retournement.' },
        { type: 'callout', variant: 'warning', title: 'Attention', content: 'Un CHoCH indique un changement potentiel de tendance, pas un retournement garanti. Après un CHoCH, le prix peut reprendre la tendance initiale. Toujours attendre une confirmation avant de trader dans le sens du CHoCH.' },
        { type: 'heading', content: 'Différence entre BOS et CHoCH' },
        { type: 'table', headers: ['Critère', 'BOS', 'CHoCH'], rows: [
          ['Signification', 'Continuation de la tendance', 'Changement potentiel de tendance'],
          ['En tendance haussière', 'Casse au-dessus du SH', 'Casse sous le SL'],
          ['En tendance baissière', 'Casse sous le SL', 'Casse au-dessus du SH'],
          ['Fiabilité', 'Plus fiable (continuation)', 'Moins fiable (changement)'],
          ['Action', 'Trader dans le sens de la tendance', 'Attendre une confirmation']
        ]},
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Le CHoCH est le premier signal d\'un retournement potentiel. Le reconnaître permet de se préparer à un changement de tendance, de réduire l\'exposition ou de chercher des opportunités dans le nouveau sens. Mais il doit être confirmé avant d\'agir.' },
        { type: 'heading', content: 'Illustration graphique' },
        { type: 'chart', title: 'CHoCH baissier : cassure du dernier HL en tendance haussière', props: {
          candles: chochPattern(),
          annotations: [
            { type: 'circle', candle: 6, price: 1.0975, color: '#ffa726' },
            { type: 'label', candle: 6, price: 1.0975, offsetY: 15, text: 'Dernier HL', color: '#ffa726' },
            { type: 'arrow', candle: 11, price: 1.0940, direction: 'down', color: '#ef5350' },
            { type: 'label', candle: 11, price: 1.0920, offsetY: 5, text: 'CHoCH ↓', color: '#ef5350' },
          ],
          lines: [
            { y1: 1.0975, y2: 1.0975, x1: 0.3, x2: 0.8, color: '#ffa726', dashed: true, label: 'Niveau cassé', labelX: 0.78, labelY: 1.0985 },
          ]
        }},
        { type: 'text', content: 'Le prix était en tendance haussière (HH, HL). Le dernier HL était à 1,0975. Le prix casse sous ce niveau : c\'est un CHoCH baissier. La tendance haussière est potentiellement terminée. Le trader attend une confirmation (BOS baissier) avant de vendre.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Tendance haussière sur EUR/USD H4.', 'Le dernier HL est à 1,0850.', 'Le prix casse sous 1,0850 → CHoCH baissier.', 'Le trader réduit son exposition ou ferme ses positions longues.', 'Il attend un BOS baissier pour confirmer le retournement et chercher une vente.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Le prix casse sous le HL (CHoCH), mais il s\'agit d\'une fausse cassure (sweep). Le prix revient au-dessus du HL et reprend la tendance haussière. Un trader qui a vendu sur le CHoCH sans confirmation se fait piéger. Toujours attendre la confirmation.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Trader le CHoCH sans confirmation', 'Confondre CHoCH et BOS', 'Supposer que le CHoCH garantit le retournement', 'Ne pas attendre le BOS dans le nouveau sens'] },
        { type: 'summary', points: ['Le CHoCH indique un changement potentiel de tendance', 'CHoCH baissier = cassure sous le dernier HL (en haussière)', 'CHoCH haussier = cassure au-dessus du dernier LH (en baissière)', 'Le CHoCH doit être confirmé par un BOS dans le nouveau sens', 'Un CHoCH ne garantit pas le retournement'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce qu\'un CHoCH ?', options: ['Une continuation', 'Un changement potentiel de tendance', 'Un type d\'ordre', 'Un indicateur'], correct: 1, explanation: 'Le Change of Character (CHoCH) est la cassure d\'un creux (en haussière) ou d\'un sommet (en baissière) indiquant un changement potentiel de tendance.' },
          { question: 'Quelle différence entre BOS et CHoCH ?', options: ['Aucune', 'BOS = continuation, CHoCH = changement potentiel', 'BOS = retournement, CHoCH = continuation', 'Ce sont des indicateurs'], correct: 1, explanation: 'Le BOS confirme la continuation de la tendance, tandis que le CHoCH indique un changement potentiel de tendance.' },
          { question: 'Que faire après un CHoCH ?', options: ['Trader immédiatement', 'Attendre une confirmation (BOS dans le nouveau sens)', 'Ignorer', 'Augmenter le levier'], correct: 1, explanation: 'Après un CHoCH, il faut attendre une confirmation (un BOS dans le nouveau sens) avant de trader dans le sens du retournement potentiel.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Sur un graphique H4 en tendance haussière, identifiez le dernier HL. <br>1. Le prix l\'a-t-il cassé ? <br>2. S\'agit-il d\'un CHoCH ? <br>3. Quelle confirmation attendez-vous ?', correction: '1. Si le prix a clôturé sous le dernier HL → CHoCH baissier. <br>2. Le CHoCH indique un changement potentiel de tendance. <br>3. On attend un BOS baissier (cassure sous le SL suivant) pour confirmer le retournement avant de vendre.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'identifie le dernier HL ou LH', 'Je vérifie si le prix l\'a cassé (CHoCH)', 'Je n\'agis pas sans confirmation', 'J\'attends un BOS dans le nouveau sens'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm13-l4', title: 'Structure interne et structure externe',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'La <strong>structure externe</strong> est formée par les sommets et creux majeurs (les swings les plus importants). La <strong>structure interne</strong> est formée par les petits sommets et creux à l\'intérieur d\'un mouvement. La structure interne s\'analyse sur une unité de temps inférieure.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Sur D1, la structure externe montre la tendance majeure (HH, HL). Sur H1 ou M15, la structure interne montre les mouvements à l\'intérieur de la tendance D1. Un CHoCH sur la structure interne (M15) peut précéder un CHoCH sur la structure externe (H4). L\'analyse de la structure interne permet d\'anticiper les changements de la structure externe.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Distinguer structure interne et externe permet d\'analyser le marché à plusieurs niveaux. Un retournement commence souvent par un CHoCH sur la structure interne avant de se propager à la structure externe. Cette analyse multi-niveaux est au cœur de l\'approche SMC.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Structure externe (D1) : tendance haussière, dernier HL à 1,0800.', 'Structure interne (H1) : le prix fait un CHoCH baissier à 1,0850.', 'Ce CHoCH interne peut précéder un CHoCH externe si le prix casse 1,0800.', 'Le trader surveille 1,0800 : si cassé, le CHoCH externe est confirmé.', 'La structure interne donne un signal d\'alerte précoce.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader ne regarde que la structure externe (D1) et ignore la structure interne. Il rate le CHoCH interne qui annonçait un retournement. Quand le CHoCH externe se produit, il est trop tard pour réagir optimalement.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['N\'analyser que la structure externe', 'Confondre structure interne et externe', 'Ne pas utiliser plusieurs unités de temps', 'Ignorer les CHoCH internes'] },
        { type: 'summary', points: ['La structure externe = sommets et creux majeurs (unité haute)', 'La structure interne = petits sommets et creux (unité basse)', 'Un CHoCH interne peut précéder un CHoCH externe', 'L\'analyse multi-niveaux est au cœur de l\'approche SMC', 'La structure interne donne un signal d\'alerte précoce'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce que la structure externe ?', options: ['Les petits sommets', 'Les sommets et creux majeurs', 'Un indicateur', 'Rien'], correct: 1, explanation: 'La structure externe est formée par les sommets et creux majeurs, analysés sur une unité de temps élevée (D1, H4).' },
          { question: 'Pourquoi analyser la structure interne ?', options: ['Pour le plaisir', 'Un CHoCH interne peut précéder un CHoCH externe', 'Le broker l\'exige', 'Ce n\'est pas utile'], correct: 1, explanation: 'Un CHoCH sur la structure interne (unité basse) peut précéder un CHoCH sur la structure externe (unité haute), donnant un signal d\'alerte précoce.' },
          { question: 'Sur quelle unité de temps analyse-t-on la structure interne ?', options: ['D1', 'W1', 'M15 ou H1 (inférieure à l\'externe)', 'MN'], correct: 2, explanation: 'La structure interne s\'analyse sur une unité de temps inférieure à celle de la structure externe (ex: M15 ou H1 si l\'externe est sur D1).' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Analysez la structure externe (D1) et la structure interne (H1) de l\'EUR/USD. <br>1. Quelle est la tendance externe ? <br>2. Y a-t-il un CHoCH interne ? <br>3. Le CHoCH interne menace-t-il la structure externe ?', correction: 'La structure externe (D1) donne la tendance majeure. La structure interne (H1) montre les mouvements à l\'intérieur. Si un CHoCH interne se produit, il menace la structure externe si le prix approche d\'un niveau clé (HL ou LH) de la structure externe.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'analyse la structure externe (unité haute)', 'J\'analyse la structure interne (unité basse)', 'Je cherche les CHoCH internes', 'Je surveille si les CHoCH internes menacent la structure externe'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm13-l5', title: 'Analyse multi-timeframe',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'L\'<strong>analyse multi-timeframe</strong> consiste à analyser le même actif sur plusieurs unités de temps simultanément : la tendance sur l\'unité haute (D1, H4), le contexte sur l\'unité intermédiaire (H1), et les entrées sur l\'unité basse (M15, M5).' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'La méthode SMC multi-timeframe : <ol><li><strong>D1</strong> : identifier la structure externe et la tendance majeure.</li><li><strong>H4</strong> : confirmer la structure et identifier les zones clés (liquidités, FVG, OB).</li><li><strong>H1</strong> : chercher les CHoCH et BOS internes.</li><li><strong>M15</strong> : trouver des entrées précises (retest, pattern, confirmation).</li></ol>Le principe : trader dans le sens de la tendance de l\'unité supérieure, chercher des entrées sur l\'unité inférieure.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'L\'analyse multi-timeframe augmente la probabilité des trades. Un signal d\'achat sur M15 dans une tendance haussière D1 est plus fiable qu\'un signal d\'achat sur M15 dans une tendance baissière D1. L\'alignement des unités de temps est l\'un des facteurs les plus importants en SMC.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['D1 : tendance haussière, dernier HL à 1,0800.', 'H4 : le prix retraced vers 1,0800, un FVG s\'y trouve.', 'H1 : un CHoCH haussier se forme à 1,0810 (structure interne).', 'M15 : un marteau se forme à 1,0805 + BOS haussier interne.', 'Entrée : acheter à 1,0810 dans le sens de D1, avec confirmation M15.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader voit un signal d\'achat sur M15 mais ne vérifie pas D1. D1 est en tendance baissière. Le signal M15 n\'est qu\'un retracement dans une tendance baissière. Le prix reprend sa baisse et le trade est perdant.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Trader une seule unité de temps', 'Trader contre la tendance de l\'unité supérieure', 'Ne pas aligner les unités de temps', 'Chercher des entrées sans vérifier le contexte'] },
        { type: 'summary', points: ['L\'analyse multi-timeframe utilise plusieurs unités simultanément', 'D1 = tendance, H4 = zones, H1 = structure interne, M15 = entrées', 'Trader dans le sens de l\'unité supérieure', 'L\'alignement des unités augmente la probabilité', 'Ne jamais trader contre la tendance majeure'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Quelle unité pour la tendance majeure ?', options: ['M1', 'M15', 'D1 ou H4', 'Aucune'], correct: 2, explanation: 'La tendance majeure s\'identifie sur une unité haute comme D1 ou H4, qui filtrent le bruit des unités basses.' },
          { question: 'Sur quelle unité chercher les entrées ?', options: ['D1', 'M15 ou M5', 'W1', 'MN'], correct: 1, explanation: 'Les entrées précises se cherchent sur une unité basse comme M15 ou M5, après avoir confirmé la tendance sur l\'unité haute.' },
          { question: 'Pourquoi aligner les unités de temps ?', options: ['Pour le plaisir', 'Pour augmenter la probabilité des trades', 'Le broker l\'exige', 'Ce n\'est pas important'], correct: 1, explanation: 'L\'alignement des unités de temps (tendance haussière sur D1 + signal d\'achat sur M15) augmente la probabilité du trade.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Analysez l\'EUR/USD sur D1, H4 et M15. <br>1. Tendance D1 ? <br>2. Zones clés H4 ? <br>3. Signal M15 ? <br>4. Les unités sont-elles alignées ?', correction: 'Si D1 est haussier et M15 montre un signal d\'achat → aligné. Si D1 est baissier et M15 montre un signal d\'achat → non aligné, éviter. Les zones clés sur H4 (liquidités, FVG, OB) servent de niveaux d\'entrée et de SL/TP.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai identifié la tendance sur D1', 'J\'ai identifié les zones clés sur H4', 'Je cherche des signaux sur M15', 'Les unités sont alignées', 'Je trade dans le sens de la tendance majeure'] },
        { type: 'note' }
      ]
    }
  ]
}
