import { fvgBullishPattern, fvgBearishPattern } from '../../charts/candleData.js'

export default {
  id: 'm15', number: 15, title: 'Fair Value Gap (FVG)',
  description: 'Définition, modèle à 3 bougies, Bullish/Bearish FVG, comblement, invalidation et exercices.',
  badge: 'advanced',
  intro: 'Les Fair Value Gaps (FVG) sont l\'un des concepts centraux des Smart Money Concepts. Ce module explore en profondeur les FVG : leur définition, leur identification, leur utilisation et leurs limites.',
  objectives: ['Définir et identifier un FVG', 'Distinguer FVG bullish et bearish', 'Comprendre le comblement et l\'invalidation', 'Identifier les faux signaux'],
  lessons: [
    {
      id: 'm15-l1', title: 'Définition et modèle à 3 bougies du FVG',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Un <strong>Fair Value Gap (FVG)</strong> est un déséquilibre de prix créé par une impulsion rapide, où le prix laisse un espace non comblé entre deux bougies. Le modèle classique à 3 bougies : la 1ère bougie et la 3ème bougie ne se chevauchent pas, créant un gap entre elles.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Le FVG se forme quand le marché se déplace si vite qu\'il laisse un « trou » dans le prix. Dans un <strong>Bullish FVG</strong> (haussier) : la mèche haute de la 1ère bougie est plus basse que la mèche basse de la 3ème bougie. L\'espace entre les deux est le FVG. Dans un <strong>Bearish FVG</strong> (baissier) : la mèche basse de la 1ère bougie est plus haute que la mèche haute de la 3ème bougie.' },
        { type: 'heading', content: 'Différence entre FVG, gap classique et bougie impulsive' },
        { type: 'table', headers: ['Concept', 'Description', 'Différence avec FVG'], rows: [
          ['FVG', 'Espace entre la 1ère et la 3ème bougie d\'une impulsion', '—'],
          ['Gap classique', 'Espace entre la clôture d\'une bougie et l\'ouverture de la suivante', 'Le gap classique est entre 2 bougies consécutives, le FVG entre la 1ère et la 3ème'],
          ['Bougie impulsive', 'Grande bougie directionnelle', 'Une bougie impulsive peut créer un FVG, mais n\'est pas un FVG en elle-même']
        ]},
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Le FVG représente un déséquilibre : le prix est monté (ou descendu) si vite qu\'il n\'a pas échangé à certains niveaux. Le prix peut revenir « combler » ce gap pour rééquilibrer le marché. Les FVG sont des zones d\'intérêt potentiel pour le prix.' },
        { type: 'heading', content: 'Illustration graphique : Bullish FVG' },
        { type: 'chart', title: 'Bullish FVG : espace entre la 1ère et la 3ème bougie', props: {
          candles: fvgBullishPattern(),
          zones: [
            { top: 1.0950, bottom: 1.0910, color: 'rgba(38,166,154,0.15)', label: 'Bullish FVG', labelColor: '#26a69a' },
          ],
          annotations: [
            { type: 'circle', candle: 0, price: 1.0910, color: '#00d4ff' },
            { type: 'label', candle: 0, price: 1.0895, offsetY: 5, text: '1ère bougie', color: '#00d4ff' },
            { type: 'circle', candle: 2, price: 1.0950, color: '#00d4ff' },
            { type: 'label', candle: 2, price: 1.0970, offsetY: -5, text: '3ème bougie', color: '#00d4ff' },
          ]
        }},
        { type: 'text', content: 'La 1ère bougie a un haut à 1,0910. La 3ème bougie a un bas à 1,0950. L\'espace entre 1,0910 et 1,0950 est le Bullish FVG (zone verte). Le prix n\'a pas échangé dans cette zone pendant l\'impulsion. Il peut revenir la combler.' },
        { type: 'heading', content: 'Illustration graphique : Bearish FVG' },
        { type: 'chart', title: 'Bearish FVG : espace entre la 1ère et la 3ème bougie', props: {
          candles: fvgBearishPattern(),
          zones: [
            { top: 1.1050, bottom: 1.1010, color: 'rgba(239,83,80,0.15)', label: 'Bearish FVG', labelColor: '#ef5350' },
          ],
          annotations: [
            { type: 'circle', candle: 0, price: 1.1050, color: '#00d4ff' },
            { type: 'label', candle: 0, price: 1.1070, offsetY: -5, text: '1ère bougie', color: '#00d4ff' },
            { type: 'circle', candle: 2, price: 1.1010, color: '#00d4ff' },
            { type: 'label', candle: 2, price: 1.0990, offsetY: 5, text: '3ème bougie', color: '#00d4ff' },
          ]
        }},
        { type: 'text', content: 'La 1ère bougie a un bas à 1,1050. La 3ème bougie a un haut à 1,1010. L\'espace entre 1,1010 et 1,1050 est le Bearish FVG (zone rouge). Le prix peut revenir combler ce gap à la hausse.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['L\'EUR/USD fait une impulsion haussière rapide.', 'Un Bullish FVG se forme entre 1,0850 et 1,0880.', 'Le prix continue à monter puis retraced.', 'Il revient vers la zone 1,0850-1,0880 (le FVG).', 'Le trader achète dans le FVG, avec SL sous le FVG et TP au sommet précédent.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Le prix revient dans le FVG mais au lieu de rebondir, il le traverse et continue à baisser. Le FVG n\'a pas attiré le prix comme un support. Un FVG n\'est pas un support garanti : c\'est une zone d\'intérêt, pas une garantie.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Confondre FVG et gap classique', 'Supposer que le prix comblera toujours le FVG', 'Ne pas vérifier le contexte (tendance, structure)', 'Entrer dans le FVG sans confirmation'] },
        { type: 'summary', points: ['Le FVG est un déséquilibre de prix entre la 1ère et la 3ème bougie', 'Bullish FVG : espace non comblé à la hausse', 'Bearish FVG : espace non comblé à la baisse', 'Le prix peut revenir combler le FVG', 'Un FVG n\'est pas un support/résistance garanti'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce qu\'un FVG ?', options: ['Un type d\'indicateur', 'Un déséquilibre de prix entre la 1ère et la 3ème bougie d\'une impulsion', 'Un gap classique', 'Une bougie impulsive'], correct: 1, explanation: 'Un Fair Value Gap est un déséquilibre de prix créé par une impulsion rapide, où la 1ère et la 3ème bougie ne se chevauchent pas.' },
          { question: 'Comment se forme un Bullish FVG ?', options: ['La 1ère bougie est plus haute que la 3ème', 'La mèche haute de la 1ère bougie est plus basse que la mèche basse de la 3ème', 'Les 3 bougies sont rouges', 'Il n\'y a pas de gap'], correct: 1, explanation: 'Dans un Bullish FVG, la mèche haute de la 1ère bougie est plus basse que la mèche basse de la 3ème bougie, créant un espace non comblé à la hausse.' },
          { question: 'Le prix revient-il toujours combler le FVG ?', options: ['Oui', 'Non, c\'est une zone d\'intérêt, pas une garantie', 'Parfois', 'Toujours'], correct: 1, explanation: 'Le prix ne revient pas toujours combler le FVG. C\'est une zone d\'intérêt potentiel, pas une garantie de retour.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Sur un graphique H4, cherchez une impulsion rapide (3 bougies directionnelles). <br>1. Y a-t-il un espace entre la 1ère et la 3ème bougie ? <br>2. S\'agit-il d\'un Bullish ou Bearish FVG ? <br>3. Le prix est-il revenu le combler ?', correction: 'Si la 1ère et la 3ème bougie ne se chevauchent pas → FVG. Si l\'impulsion est haussière → Bullish FVG (espace à combler à la hausse). Si baissière → Bearish FVG. Le prix peut ou non revenir le combler.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'identifie les 3 bougies de l\'impulsion', 'Je vérifie l\'espace entre la 1ère et la 3ème', 'Je détermine si c\'est un Bullish ou Bearish FVG', 'Je vérifie le contexte (tendance, structure)'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm15-l2', title: 'FVG dans une tendance, un retracement et après un BOS',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Les FVG apparaissent dans différents contextes : <strong>dans une tendance</strong> (impulsions directionnelles), <strong>dans un retracement</strong> (mouvements correctifs), et <strong>après un BOS</strong> (cassure de structure). Le contexte influence l\'interprétation du FVG.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: '<ul><li><strong>FVG dans une tendance haussière</strong> : créé par une impulsion haussière. Le FVG peut servir de support lors d\'un retracement.</li><li><strong>FVG dans un retracement</strong> : créé par un mouvement correctif. Moins fiable car le retracement est temporaire.</li><li><strong>FVG après un BOS</strong> : créé juste après la cassure de structure. Le FVG confirme la cassure et peut servir de zone de retest.</li></ul>' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Le contexte du FVG détermine sa fiabilité. Un FVG dans une tendance haussière, après un BOS, est plus significatif qu\'un FVG dans un retracement. Comprendre le contexte aide à prioriser les FVG les plus pertinents.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Tendance haussière sur D1. BOS haussier sur H4.', 'Une impulsion haussière crée un Bullish FVG après le BOS.', 'Le prix retraced vers le FVG (qui coïncide avec l\'ancien SH cassé).', 'Confluence : FVG + ancien SH + trendline = zone d\'entrée forte.', 'Le trader achète dans le FVG avec une forte confluence.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un FVG se forme dans un retracement baissier au milieu d\'une tendance haussière. Le trader achète dans ce FVG, pensant que c\'est un support. Mais le retracement continue et le FVG est traversé. Le FVG dans un retracement est moins fiable.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Traiter tous les FVG de la même façon', 'Ignorer le contexte (tendance, BOS)', 'Donner la même importance à un FVG de retracement et de tendance', 'Ne pas vérifier la confluence'] },
        { type: 'summary', points: ['Les FVG apparaissent dans différents contextes', 'FVG de tendance = plus fiable (impulsion directionnelle)', 'FVG de retracement = moins fiable (mouvement correctif)', 'FVG après BOS = confirme la cassure, sert de retest', 'Le contexte détermine la fiabilité du FVG'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Quel FVG est le plus fiable ?', options: ['FVG dans un retracement', 'FVG dans une tendance après un BOS', 'Tous les FVG sont identiques', 'Aucun FVG n\'est fiable'], correct: 1, explanation: 'Un FVG dans une tendance, après un BOS, est plus fiable car il est créé par une impulsion directionnelle confirmée par la cassure de structure.' },
          { question: 'Pourquoi un FVG de retracement est-il moins fiable ?', options: ['Il est plus grand', 'Le retracement est un mouvement temporaire, pas directionnel', 'Le broker le supprime', 'Il est interdit'], correct: 1, explanation: 'Un FVG de retracement est moins fiable car le retracement est un mouvement correctif temporaire, pas une impulsion directionnelle forte.' },
          { question: 'Que peut faire un FVG après un BOS ?', options: ['Rien', 'Servir de zone de retest de la cassure', 'Annuler le BOS', 'Créer un CHoCH'], correct: 1, explanation: 'Un FVG après un BOS peut servir de zone de retest : le prix revient tester le FVG (qui coïncide avec l\'ancien niveau cassé) avant de continuer.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Identifiez un FVG sur H4. <br>1. Dans quel contexte apparaît-il (tendance, retracement, après BOS) ? <br>2. Quelle est sa fiabilité selon le contexte ?', correction: 'FVG dans une tendance haussière après un BOS = haute fiabilité. FVG dans un retracement = fiabilité modérée. Vérifiez la confluence avec d\'autres concepts (support, trendline, order block) pour augmenter la fiabilité.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'identifie le contexte du FVG', 'Je vérifie s\'il est dans une tendance ou un retracement', 'Je cherche la confluence avec un BOS', 'Je priorise les FVG de tendance'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm15-l3', title: 'FVG, liquidités et Order Blocks : relations et comblement',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Les FVG peuvent interagir avec les <strong>liquidités</strong> (le prix peut aller chercher une liquidité en passant par un FVG) et les <strong>Order Blocks</strong> (un FVG peut se trouver à proximité d\'un OB). Le <strong>comblement</strong> d\'un FVG est le retour du prix dans la zone du FVG.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Le comblement peut être : <ul><li><strong>Partiel</strong> : le prix entre dans le FVG mais n\'atteint pas le bord opposé.</li><li><strong>Total</strong> : le prix traverse entièrement le FVG.</li></ul>Un FVG comblé perd son caractère de déséquilibre et devient moins pertinent. Un FVG non comblé reste une zone d\'intérêt. Les FVG et les Order Blocks sont distincts mais peuvent se trouver au même niveau (confluence).' },
        { type: 'callout', variant: 'info', title: 'Distinction', content: 'Les FVG et les Order Blocks sont des concepts distincts. Un FVG est un déséquilibre de prix. Un Order Block est une zone d\'origine d\'une impulsion. Ils peuvent se trouver au même niveau (confluence) mais ne sont pas identiques.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Comprendre les relations entre FVG, liquidités et Order Blocks permet d\'identifier les zones de forte confluence. Un FVG + un Order Block + une liquidité au même niveau = une zone d\'intérêt majeure. Le comblement indique si le FVG est encore pertinent.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Un Bullish FVG se trouve entre 1,0850 et 1,0880.', 'Un Order Block bullish se trouve juste en dessous (1,0840-1,0850).', 'Une liquidité (SSL) se trouve sous l\'OB à 1,0830.', 'Confluence : FVG + OB + SSL = zone d\'intérêt majeure.', 'Le prix peut aller chercher la SSL (1,0830), rebondir sur l\'OB, puis combler partiellement le FVG.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader suppose qu\'un FVG et un Order Block sont la même chose. Il identifie un FVG et le trade comme un OB. Mais le FVG est un déséquilibre de prix, pas une zone d\'origine d\'impulsion. Les traiter de la même façon mène à des erreurs d\'interprétation.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Confondre FVG et Order Block', 'Supposer que le prix comblera toujours le FVG', 'Ne pas vérifier le comblement', 'Ignorer les confluences avec les liquidités'] },
        { type: 'summary', points: ['Les FVG peuvent interagir avec les liquidités et les OB', 'FVG et OB sont distincts mais peuvent être au même niveau', 'Le comblement peut être partiel ou total', 'Un FVG comblé perd de sa pertinence', 'Les confluences (FVG + OB + liquidité) sont des zones majeures'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Un FVG et un Order Block sont-ils identiques ?', options: ['Oui', 'Non, ce sont des concepts distincts qui peuvent être au même niveau', 'Parfois', 'Toujours'], correct: 1, explanation: 'Les FVG et les Order Blocks sont des concepts distincts. Un FVG est un déséquilibre de prix, un OB est une zone d\'origine d\'impulsion. Ils peuvent être au même niveau (confluence).' },
          { question: 'Qu\'est-ce qu\'un comblement total ?', options: ['Le prix entre partiellement dans le FVG', 'Le prix traverse entièrement le FVG', 'Le prix ignore le FVG', 'Le FVG s\'agrandit'], correct: 1, explanation: 'Un comblement total se produit quand le prix traverse entièrement le FVG, d\'un bord à l\'autre. Le FVG perd alors son caractère de déséquilibre.' },
          { question: 'Que devient un FVG comblé ?', options: ['Plus pertinent', 'Moins pertinent (le déséquilibre est résolu)', 'Identique', 'Supprimé'], correct: 1, explanation: 'Un FVG comblé perd son caractère de déséquilibre et devient moins pertinent. Le prix a rééquilibré la zone.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Identifiez un FVG et un Order Block sur H4. <br>1. Sont-ils au même niveau (confluence) ? <br>2. Le FVG est-il comblé ? <br>3. Y a-t-il une liquidité à proximité ?', correction: 'Si le FVG et l\'OB sont au même niveau → confluence forte. Si le FVG est non comblé → toujours pertinent. Si une liquidité (BSL/SSL) est à proximité → le prix peut aller la chercher en passant par le FVG.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je vérifie si le FVG est comblé ou non', 'Je cherche les confluences avec les OB', 'Je cherche les liquidités à proximité', 'Je ne confonds pas FVG et OB'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm15-l4', title: 'Invalidation, limites et faux signaux des FVG',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'L\'<strong>invalidation</strong> d\'un FVG se produit quand le prix clôture au-delà du bord opposé du FVG (le déséquilibre est comblé et dépassé). Les <strong>faux signaux</strong> surviennent quand le prix entre dans le FVG mais ne réagit pas comme attendu.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Conditions d\'invalidation : <ul><li><strong>Bullish FVG invalidé</strong> : le prix clôture sous le bord inférieur du FVG.</li><li><strong>Bearish FVG invalidé</strong> : le prix clôture au-dessus du bord supérieur du FVG.</li></ul>Limites des FVG : <ul><li>Tous les FVG ne sont pas pertinents.</li><li>Le prix ne revient pas toujours combler le FVG.</li><li>Un FVG dans un contexte défavorable est moins fiable.</li><li>Les FVG sont nombreux : il faut les filtrer.</li></ul>' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Connaître les conditions d\'invalidation permet de placer le Stop Loss correctement et de savoir quand abandonner un trade basé sur un FVG. Comprendre les limites évite de surutiliser les FVG et de les traiter comme des garanties.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Bullish FVG entre 1,0850 et 1,0880.', 'Le trader achète à 1,0865 (dans le FVG).', 'Stop Loss à 1,0845 (sous le bord inférieur du FVG).', 'Si le prix clôture sous 1,0850 → FVG invalidé, trade fermé.', 'Take Profit au sommet précédent ou à la BSL.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader identifie 10 FVG sur un graphique et les trade tous. La plupart ne sont pas pertinents (trop petits, dans un retracement, sans contexte). Il perd sur la majorité. Il faut filtrer les FVG et ne garder que les plus pertinents.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Trader tous les FVG sans filtrer', 'Ne pas définir d\'invalidation', 'Supposer que le prix réagira toujours dans le FVG', 'Ignorer le contexte'] },
        { type: 'summary', points: ['Un Bullish FVG est invalidé si le prix clôture sous le bord inférieur', 'Un Bearish FVG est invalidé si le prix clôture au-dessus du bord supérieur', 'Tous les FVG ne sont pas pertinents : il faut filtrer', 'Le prix ne revient pas toujours combler le FVG', 'Les FVG sont des zones d\'intérêt, pas des garanties'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Quand un Bullish FVG est-il invalidé ?', options: ['Le prix entre dans le FVG', 'Le prix clôture sous le bord inférieur du FVG', 'Le prix monte', 'Jamais'], correct: 1, explanation: 'Un Bullish FVG est invalidé quand le prix clôture sous le bord inférieur du FVG. Le déséquilibre est comblé et dépassé.' },
          { question: 'Faut-il trader tous les FVG ?', options: ['Oui', 'Non, il faut filtrer et garder les plus pertinents', 'Seulement les petits', 'Seulement les grands'], correct: 1, explanation: 'Il ne faut pas trader tous les FVG. Il faut filtrer et garder les plus pertinents : FVG dans une tendance, après un BOS, avec confluence.' },
          { question: 'Le prix revient-il toujours combler le FVG ?', options: ['Oui', 'Non', 'Parfois', 'Toujours'], correct: 2, explanation: 'Le prix ne revient pas toujours combler le FVG. Parfois il continue sans revenir. Le FVG est une zone d\'intérêt, pas une garantie de retour.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Identifiez 3 FVG sur H4. <br>1. Lequel est le plus pertinent ? <br>2. Où placer le Stop Loss pour chacun ? <br>3. Lequel tradez-vous ?', correction: 'Le FVG le plus pertinent est celui dans une tendance, après un BOS, avec confluence (OB, support, liquidité). Le Stop Loss se place sous le bord inférieur (Bullish) ou au-dessus du bord supérieur (Bearish). Tradez le FVG le plus pertinent avec le meilleur contexte.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je filtre les FVG (pas tous les trader)', 'Je définis l\'invalidation (clôture au-delà du bord)', 'Je place le Stop Loss à l\'invalidation', 'Je vérifie le contexte et les confluences'] },
        { type: 'note' }
      ]
    }
  ]
}
