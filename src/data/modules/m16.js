import { orderBlockBullishPattern, bearTrend, bullTrend } from '../../charts/candleData.js'

export default {
  id: 'm16', number: 16, title: 'Order Blocks et Breaker Blocks',
  description: 'Order Blocks (bullish/bearish), critères d\'identification, Breaker Blocks, invalidations et différences.',
  badge: 'advanced',
  intro: 'Ce module explore les Order Blocks et les Breaker Blocks, deux concepts centraux des Smart Money Concepts. Les Order Blocks sont des interprétations techniques du prix, pas des preuves d\'ordres institutionnels.',
  objectives: ['Définir et identifier les Order Blocks', 'Comprendre les Breaker Blocks', 'Distinguer OB et Breaker', 'Connaître les invalidations'],
  lessons: [
    {
      id: 'm16-l1', title: 'Order Blocks : définition et identification',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Un <strong>Order Block (OB)</strong> dans l\'approche SMC est la dernière bougie baissière (rouge) avant une impulsion haussière (Bullish OB) ou la dernière bougie haussière (verte) avant une impulsion baissière (Bearish OB). C\'est une zone d\'origine du mouvement.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Le <strong>Bullish Order Block</strong> : la dernière bougie rouge avant une grande bougie verte (impulsion haussière). L\'interprétation : cette zone peut attirer le prix lors d\'un retracement. Le <strong>Bearish Order Block</strong> : la dernière bougie verte avant une grande bougie rouge (impulsion baissière). L\'interprétation : cette zone peut repousser le prix lors d\'un retracement.' },
        { type: 'callout', variant: 'info', title: 'Interprétation technique', content: 'Un Order Block ne prouve pas la présence d\'ordres institutionnels. Il s\'agit d\'une interprétation technique du prix : la zone d\'origine d\'une impulsion peut attirer le prix lors d\'un retour. C\'est une hypothèse d\'analyse, pas une certitude.' },
        { type: 'heading', content: 'Critères d\'identification' },
        { type: 'list', items: [
          'La bougie de l\'OB est la dernière bougie opposée avant l\'impulsion',
          'L\'impulsion qui suit est forte (grande bougie ou série de bougies directionnelles)',
          'L\'impulsion crée idéalement un BOS',
          'L\'OB est plus pertinent s\'il coïncide avec un FVG ou une liquidité'
        ]},
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Les Order Blocks sont l\'un des concepts les plus utilisés en SMC. Ils identifient les zones d\'où les impulsions sont parties, zones qui peuvent attirer le prix lors d\'un retracement. Combinés avec les FVG et les liquidités, ils forment des confluences puissantes.' },
        { type: 'heading', content: 'Illustration graphique : Bullish Order Block' },
        { type: 'chart', title: 'Bullish Order Block : dernière bougie rouge avant l\'impulsion', props: {
          candles: orderBlockBullishPattern(),
          zones: [
            { top: 1.0870, bottom: 1.0850, color: 'rgba(38,166,154,0.15)', label: 'Bullish OB', labelColor: '#26a69a' },
          ],
          annotations: [
            { type: 'circle', candle: 3, price: 1.0860, color: '#26a69a' },
            { type: 'label', candle: 3, price: 1.0835, offsetY: 5, text: 'Dernière bougie rouge (OB)', color: '#26a69a' },
            { type: 'arrow', candle: 4, price: 1.0950, direction: 'up', color: '#26a69a' },
            { type: 'label', candle: 4, price: 1.0970, offsetY: -5, text: 'Impulsion haussière', color: '#26a69a' },
          ]
        }},
        { type: 'text', content: 'La 4ème bougie (rouge) est la dernière bougie baissière avant l\'impulsion haussière. C\'est le Bullish Order Block (zone verte). Si le prix retraced, il peut revenir vers cette zone avant de continuer à monter.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['L\'EUR/USD fait une impulsion haussière à partir de 1,0850.', 'La dernière bougie rouge avant l\'impulsion est à 1,0850-1,0860 (Bullish OB).', 'Le prix monte à 1,0950 puis retraced.', 'Il revient vers 1,0860 (l\'OB) et rebondit.', 'Le trader achète dans l\'OB avec SL sous 1,0850.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Le prix revient vers l\'OB à 1,0860 mais au lieu de rebondir, il le traverse et continue à baisser. L\'OB n\'a pas attiré le prix comme un support. Un OB n\'est pas un support garanti : c\'est une zone d\'intérêt.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Confondre n\'importe quelle bougie rouge avec un OB', 'Supposer que l\'OB garantit un rebond', 'Ne pas vérifier l\'impulsion qui suit', 'Ignorer le contexte (tendance, BOS)'] },
        { type: 'summary', points: ['Un OB = dernière bougie opposée avant une impulsion', 'Bullish OB = dernière rouge avant une impulsion haussière', 'Bearish OB = dernière verte avant une impulsion baissière', 'L\'OB peut attirer le prix lors d\'un retracement', 'Un OB ne prouve pas la présence d\'ordres institutionnels'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce qu\'un Bullish Order Block ?', options: ['La première bougie verte', 'La dernière bougie rouge avant une impulsion haussière', 'Un doji', 'Un indicateur'], correct: 1, explanation: 'Un Bullish Order Block est la dernière bougie baissière (rouge) avant une impulsion haussière. C\'est la zone d\'origine du mouvement haussier.' },
          { question: 'Un OB prouve-t-il la présence d\'ordres institutionnels ?', options: ['Oui', 'Non, c\'est une interprétation technique du prix', 'Parfois', 'Toujours'], correct: 1, explanation: 'Un Order Block ne prouve pas la présence d\'ordres institutionnels. C\'est une interprétation technique : la zone d\'origine d\'une impulsion peut attirer le prix.' },
          { question: 'Quels critères pour identifier un OB ?', options: ['N\'importe quelle bougie', 'Dernière bougie opposée + impulsion forte + idéalement BOS', 'La plus grande bougie', 'La plus petite bougie'], correct: 1, explanation: 'Un OB s\'identifie par : la dernière bougie opposée avant l\'impulsion, une impulsion forte qui suit, et idéalement un BOS créé par l\'impulsion.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Sur un graphique H4, cherchez une impulsion haussière. <br>1. Quelle est la dernière bougie rouge avant l\'impulsion ? <br>2. Est-ce un Bullish OB ? <br>3. Le prix est-il revenu le tester ?', correction: 'La dernière bougie rouge avant l\'impulsion haussière est le Bullish OB. Vérifiez que l\'impulsion est forte (grande bougie ou série de bougies vertes). Si le prix est revenu vers l\'OB et a rebondi, l\'OB a fonctionné comme support.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'identifie la dernière bougie opposée avant l\'impulsion', 'Je vérifie que l\'impulsion est forte', 'Je vérifie s\'il y a un BOS', 'Je traite l\'OB comme une zone d\'intérêt, pas une garantie'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm16-l2', title: 'Breaker Blocks : définition et différence avec les OB',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Un <strong>Breaker Block</strong> est une ancienne zone (support ou résistance) qui, après avoir été cassée, change de rôle et peut servir de zone de retournement dans l\'autre sens. Un support cassé devient un Breaker Block (résistance potentielle) et inversement.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Le Breaker Block est lié au changement de structure : <ul><li><strong>Bullish Breaker Block</strong> : un ancien support (ou OB bearish) qui a été cassé à la baisse, puis retesté à la hausse. L\'ancien support devient une résistance potentielle, puis si le prix casse au-dessus, cette zone devient un support (breaker).</li><li><strong>Bearish Breaker Block</strong> : un ancien OB bullish cassé à la hausse, puis retesté à la baisse.</li></ul>La différence avec l\'OB : l\'OB est la zone d\'origine d\'une impulsion. Le Breaker est une zone qui a été invalidée puis réinterprétée dans le nouveau contexte.' },
        { type: 'table', headers: ['Critère', 'Order Block', 'Breaker Block'], rows: [
          ['Définition', 'Zone d\'origine d\'une impulsion', 'Ancienne zone invalidée puis réinterprétée'],
          ['Rôle', 'Support (bullish) ou résistance (bearish)', 'Rôle inversé après cassure'],
          ['Contexte', 'Dans la tendance actuelle', 'Après un changement de structure'],
          ['Fiabilité', 'Plus fiable (tendance intacte)', 'Moins fiable (changement de contexte)']
        ]},
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Le Breaker Block explique pourquoi d\'anciens supports deviennent des résistances (et inversement) dans le cadre des SMC. Il montre comment les zones évoluent quand la structure change. C\'est un concept avancé qui nécessite de bien comprendre la structure du marché.' },
        { type: 'heading', content: 'Illustration graphique' },
        { type: 'chart', title: 'Breaker Block : ancien support cassé devient résistance', props: {
          candles: [...bullTrend(6, 1.0800, 0.001), ...bearTrend(10, 1.0880, 0.001)],
          zones: [
            { top: 1.0850, bottom: 1.0830, color: 'rgba(171,71,188,0.1)', label: 'Breaker Block', labelColor: '#ab47bc' },
          ],
          annotations: [
            { type: 'circle', candle: 4, price: 1.0840, color: '#26a69a' },
            { type: 'label', candle: 4, price: 1.0820, offsetY: 5, text: 'Ancien support', color: '#26a69a' },
            { type: 'arrow', candle: 8, price: 1.0840, direction: 'down', color: '#ef5350' },
            { type: 'label', candle: 8, price: 1.0860, offsetY: -5, text: 'Cassure (CHoCH)', color: '#ef5350' },
            { type: 'circle', candle: 13, price: 1.0840, color: '#ab47bc' },
            { type: 'label', candle: 13, price: 1.0860, offsetY: -5, text: 'Retest = Breaker', color: '#ab47bc' },
          ]
        }},
        { type: 'text', content: 'Le prix avait un support à 1,0840. Il casse ce support à la baisse (CHoCH). Plus tard, il remonte tester 1,0840 qui agit maintenant comme résistance. L\'ancien support est devenu un Breaker Block.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Un Bullish OB à 1,0850 a servi de support.', 'Le prix casse sous 1,0850 (CHoCH baissier).', 'L\'OB est invalidé en tant que support.', 'Le prix remonte tester 1,0850 : l\'ancien OB devient un Breaker Block (résistance).', 'Le trader vend au retest du Breaker avec SL au-dessus.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader identifie un Breaker Block mais ne vérifie pas le changement de structure. Il vend sur un « Breaker » qui n\'en est pas un car la structure n\'a pas changé. Le prix continue à monter. Un Breaker nécessite un changement de structure confirmé.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Confondre OB et Breaker', 'Ne pas vérifier le changement de structure', 'Supposer que le Breaker garantit un retournement', 'Identifier un Breaker sans CHoCH'] },
        { type: 'summary', points: ['Un Breaker = ancienne zone invalidée puis réinterprétée', 'Un support cassé devient potentiellement une résistance', 'Le Breaker est lié à un changement de structure (CHoCH)', 'Différent de l\'OB : l\'OB est dans la tendance, le Breaker après un changement', 'Le Breaker nécessite un changement de structure confirmé'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce qu\'un Breaker Block ?', options: ['Un OB qui fonctionne', 'Une ancienne zone invalidée puis réinterprétée après un changement de structure', 'Un type d\'indicateur', 'Un FVG'], correct: 1, explanation: 'Un Breaker Block est une ancienne zone (support ou résistance) qui, après avoir été cassée (changement de structure), change de rôle et peut servir de zone de retournement.' },
          { question: 'Quelle différence entre OB et Breaker ?', options: ['Aucune', 'L\'OB est dans la tendance, le Breaker après un changement de structure', 'L\'OB est plus fiable', 'Le Breaker est plus fiable'], correct: 1, explanation: 'L\'Order Block est la zone d\'origine d\'une impulsion dans la tendance actuelle. Le Breaker est une zone qui a été invalidée puis réinterprétée après un changement de structure.' },
          { question: 'Que nécessite un Breaker Block ?', options: ['Rien', 'Un changement de structure (CHoCH)', 'Un FVG', 'Un indicateur'], correct: 1, explanation: 'Un Breaker Block nécessite un changement de structure (CHoCH) : la zone doit avoir été cassée et le contexte doit avoir changé pour qu\'elle soit réinterprétée.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Sur un graphique H4 : <br>1. Identifiez un OB qui a été cassé <br>2. Le prix l\'a-t-il retesté après la cassure ? <br>3. S\'est-il comporté comme un Breaker (résistance) ?', correction: 'Si un OB (support) a été cassé à la baisse (CHoCH) puis le prix est remonté le tester et a été repoussé → Breaker Block confirmé. Si le prix est passé à travers → le Breaker n\'a pas fonctionné. Le changement de structure est nécessaire.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'identifie le changement de structure (CHoCH)', 'Je vérifie que l\'OB a été cassé', 'J\'attends le retest de la zone', 'Je distingue OB et Breaker'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm16-l3', title: 'Invalidations et faux signaux des OB et Breakers',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'L\'<strong>invalidation</strong> d\'un Order Block se produit quand le prix clôture au-delà de la zone. L\'invalidation d\'un Breaker se produit quand le prix clôture au-delà de la zone dans le sens opposé. Les <strong>faux signaux</strong> surviennent quand la zone ne réagit pas comme attendu.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Conditions d\'invalidation : <ul><li><strong>Bullish OB invalidé</strong> : le prix clôture sous l\'OB.</li><li><strong>Bearish OB invalidé</strong> : le prix clôture au-dessus de l\'OB.</li><li><strong>Bullish Breaker invalidé</strong> : le prix clôture au-dessus du Breaker (qui devait faire résistance).</li><li><strong>Bearish Breaker invalidé</strong> : le prix clôture sous le Breaker.</li></ul>Les Order Blocks faibles (petite bougie, impulsion faible, pas de BOS) sont moins pertinents. Les OB et Breakers les plus pertinents sont ceux avec confluence (FVG, liquidité, structure).' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Connaître les invalidations permet de placer les Stop Loss correctement et de savoir quand abandonner un trade. Comprendre quels OB sont faibles ou forts aide à filtrer et à prioriser les meilleures zones.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Bullish OB à 1,0850-1,0860. Le trader achète à 1,0855.', 'Stop Loss à 1,0845 (sous l\'OB).', 'Si le prix clôture sous 1,0850 → OB invalidé, trade fermé.', 'Take Profit à la BSL au-dessus du sommet précédent.', 'Le trade a un plan clair avec invalidation définie.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader identifie un OB faible : petite bougie rouge, impulsion modérée, pas de BOS. Il le trade comme un OB fort. Le prix traverse l\'OB sans réaction. L\'OB était trop faible pour être pertinent.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Ne pas définir d\'invalidation', 'Trader des OB faibles', 'Ne pas filtrer les OB', 'Confondre OB et Breaker'] },
        { type: 'summary', points: ['Un Bullish OB est invalidé si le prix clôture sous la zone', 'Un Bearish OB est invalidé si le prix clôture au-dessus', 'Les OB faibles (petite bougie, pas de BOS) sont moins pertinents', 'Les OB avec confluence (FVG, liquidité) sont plus pertinents', 'Toujours définir l\'invalidation avant d\'entrer'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Quand un Bullish OB est-il invalidé ?', options: ['Le prix entre dans l\'OB', 'Le prix clôture sous l\'OB', 'Le prix monte', 'Jamais'], correct: 1, explanation: 'Un Bullish OB est invalidé quand le prix clôture sous la zone de l\'OB. Le support n\'est plus valide.' },
          { question: 'Qu\'est-ce qu\'un OB faible ?', options: ['Un grand OB', 'Un OB avec une petite bougie, une impulsion faible et pas de BOS', 'Un OB avec confluence', 'Un OB en tendance'], correct: 1, explanation: 'Un OB faible a une petite bougie opposée, une impulsion modérée et pas de BOS. Il est moins pertinent et moins fiable.' },
          { question: 'Quels OB sont les plus pertinents ?', options: ['Les OB faibles', 'Les OB avec confluence (FVG, liquidité, BOS)', 'Tous les OB', 'Aucun'], correct: 1, explanation: 'Les OB les plus pertinents sont ceux avec confluence : un FVG à proximité, une liquidité, et un BOS créé par l\'impulsion.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Identifiez 3 OB sur H4. <br>1. Lesquels sont forts (impulsion + BOS) ? <br>2. Lesquels sont faibles ? <br>3. Où placer le Stop Loss pour chaque OB fort ?', correction: 'Les OB forts ont une grande impulsion et un BOS. Les OB faibles ont une petite impulsion et pas de BOS. Le Stop Loss se place sous le bord inférieur d\'un Bullish OB (ou au-dessus d\'un Bearish OB), à l\'invalidation.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je filtre les OB (forts vs faibles)', 'Je définis l\'invalidation de chaque OB', 'Je place le Stop Loss à l\'invalidation', 'Je cherche les confluences (FVG, liquidité, BOS)'] },
        { type: 'note' }
      ]
    }
  ]
}
