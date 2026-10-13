import { dojiPattern, hammerPattern, engulfingBullishPattern, pinBarPattern, bullTrend, bearTrend } from '../../charts/candleData.js'

export default {
  id: 'm6', number: 6, title: 'Chandeliers japonais',
  description: 'Construction d\'une bougie, dojis, marteaux, engulfing, pin bars et configurations à plusieurs bougies.',
  badge: 'basics',
  intro: 'Les chandeliers japonais sont l\'outil visuel le plus important du trader. Ce module explique chaque figure en détail, avec des graphiques annotés et des exemples de contexte favorable et défavorable.',
  objectives: ['Comprendre la construction d\'une bougie', 'Identifier les figures principales', 'Interpréter les signaux selon le contexte', 'Connaître les limites des signaux isolés'],
  lessons: [
    {
      id: 'm6-l1', title: 'Construction d\'une bougie : OHLC',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Une <strong>bougie</strong> (chandelier) représente l\'évolution du prix sur une période. Elle comporte 4 données : <strong>O</strong>uverture (Open), <strong>H</strong>aut (High), <strong>B</strong>as (Low), <strong>C</strong>lôture (Close). Le <strong>corps</strong> va de l\'ouverture à la clôture. Les <strong>mèches</strong> (ombres) vont du corps aux extrêmes.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Une bougie <strong>haussière</strong> (verte/bleue) a une clôture supérieure à l\'ouverture : le corps est rempli de bas en haut. Une bougie <strong>baissière</strong> (rouge) a une clôture inférieure à l\'ouverture : le corps est rempli de haut en bas. La taille du corps indique la force du mouvement. Les mèches indiquent les niveaux où le prix a été repoussé.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Comprendre la construction d\'une bougie est la base de toute lecture graphique. Chaque figure (doji, marteau, engulfing) se définit par la relation entre le corps et les mèches. Sans cette compréhension, impossible d\'identifier les patterns.' },
        { type: 'heading', content: 'Illustration graphique' },
        { type: 'chart', title: 'Bougie haussière et bougie baissière', props: {
          candles: [
            { o: 1.0900, c: 1.0950, h: 1.0960, l: 1.0890 },
            { o: 1.0950, c: 1.0900, h: 1.0960, l: 1.0890 },
          ],
          annotations: [
            { type: 'label', candle: 0, price: 1.0960, offsetY: -12, text: 'High', color: '#9ca8b8' },
            { type: 'label', candle: 0, price: 1.0950, offsetY: -5, text: 'Close', color: '#26a69a' },
            { type: 'label', candle: 0, price: 1.0900, offsetY: 5, text: 'Open', color: '#26a69a' },
            { type: 'label', candle: 0, price: 1.0890, offsetY: 12, text: 'Low', color: '#9ca8b8' },
            { type: 'label', candle: 1, price: 1.0960, offsetY: -12, text: 'High', color: '#9ca8b8' },
            { type: 'label', candle: 1, price: 1.0950, offsetY: -5, text: 'Open', color: '#ef5350' },
            { type: 'label', candle: 1, price: 1.0900, offsetY: 5, text: 'Close', color: '#ef5350' },
            { type: 'label', candle: 1, price: 1.0890, offsetY: 12, text: 'Low', color: '#9ca8b8' },
          ]
        }},
        { type: 'text', content: 'La bougie de gauche est haussière (verte) : Open en bas, Close en haut. La bougie de droite est baissière (rouge) : Open en haut, Close en bas. Les mèches montent les extrêmes (High et Low) pour les deux.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Une bougie haussière a un grand corps vert et de petites mèches : forte pression acheteuse.', 'Une bougie avec un petit corps et de grandes mèches : indécision (acheteurs et vendeurs s\'affrontent).', 'Une bougie avec une longue mèche haute et un petit corps : les vendeurs ont repoussé les acheteurs.', 'La taille et la position du corps et des mèches donnent des informations sur la dynamique du marché.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader voit une grande bougie verte et conclut que la tendance est haussière. Mais la bougie a aussi une longue mèche haute : les acheteurs ont été repoussés en fin de période. La bougie verte ne raconte qu\'une partie de l\'histoire.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Ne regarder que la couleur de la bougie', 'Ignorer les mèches', 'Ne pas comparer avec les bougies précédentes', 'Tirer des conclusions sur une seule bougie'] },
        { type: 'summary', points: ['Une bougie = OHLC (Open, High, Low, Close)', 'Le corps va de l\'ouverture à la clôture', 'Les mèches montent les extrêmes atteints', 'Vert = haussière, rouge = baissière', 'La taille du corps et des mèches donne des informations'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Que signifie OHLC ?', options: ['Un indicateur', 'Open, High, Low, Close', 'Un type d\'ordre', 'Une stratégie'], correct: 1, explanation: 'OHLC signifie Open (ouverture), High (plus haut), Low (plus bas), Close (clôture) — les 4 données d\'une bougie.' },
          { question: 'Qu\'est-ce qu\'une bougie haussière ?', options: ['Clôture < Ouverture', 'Clôture > Ouverture', 'Pas de corps', 'Mèche uniquement'], correct: 1, explanation: 'Une bougie haussière (verte) a une clôture supérieure à l\'ouverture : le prix a monté pendant la période.' },
          { question: 'Que indique une longue mèche haute ?', options: ['Forte pression acheteuse', 'Les vendeurs ont repoussé les acheteurs', 'Le marché est fermé', 'Rien'], correct: 1, explanation: 'Une longue mèche haute indique que les acheteurs ont poussé le prix vers le haut mais que les vendeurs ont repris le contrôle et repoussé le prix.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Identifiez sur un graphique : <br>1. Une bougie avec un grand corps et de petites mèches <br>2. Une bougie avec un petit corps et de grandes mèches <br>3. Que signifient-elles ?', correction: '1. Grand corps + petites mèches = mouvement directionnel fort (peu d\'hésitation). <br>2. Petit corps + grandes mèches = indécision (acheteurs et vendeurs s\'affrontent sans vainqueur clair). <br>3. La première indique une tendance, la second une hésitation ou un retournement potentiel.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je sais lire OHLC sur une bougie', 'J\'analyse le corps et les mèches', 'Je compare avec les bougies précédentes', 'Je ne tire pas de conclusion sur une seule bougie'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm6-l2', title: 'Corps et mèches',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Le <strong>corps</strong> d\'une bougie est la partie entre l\'ouverture et la clôture. Les <strong>mèches</strong> (ou ombres) sont les parties au-dessus et en dessous du corps, allant jusqu\'au plus haut et au plus bas. La proportion entre corps et mèches donne des informations sur la dynamique du marché.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Un grand corps indique un mouvement fort et directionnel. Un petit corps indique de l\'indécision. Une longue mèche haute indique un rejet vers le haut (pression vendeuse). Une longue mèche basse indique un rejet vers le bas (pression acheteuse). L\'absence de mèches (bougie « marubozu ») indique un mouvement unidirectionnel sans opposition.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'La lecture des corps et mèches permet d\'interpréter la psychologie du marché : qui domine (acheteurs ou vendeurs), y a-t-il de l\'indécision, le mouvement est-il fort ou faible. Cette lecture est la base de l\'interprétation des figures de chandeliers.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Une bougie avec un grand corps vert et pas de mèches : contrôle total des acheteurs.', 'Une bougie avec un petit corps et une longue mèche basse : les acheteurs ont repris le contrôle en fin de période (marteau).', 'Une bougie avec un petit corps et des mèches égales de chaque côté : indécision totale (doji).', 'Le trader interprète ces informations pour anticiper la suite.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader voit une bougie avec une longue mèche basse et achète, pensant que les acheteurs ont repris le contrôle. Mais cette bougie apparaît au milieu d\'une tendance baissière forte, pas à un support. Le contexte est défavorable et le prix continue à baisser.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Interpréter une bougie sans contexte', 'Ignorer la taille relative du corps et des mèches', 'Confondre mèche haute et mèche basse', 'Supposer qu\'une mèche longue garantit un retournement'] },
        { type: 'summary', points: ['Le corps = force du mouvement directionnel', 'Les mèches = niveaux de rejet', 'Grand corps = mouvement fort', 'Petit corps + grandes mèches = indécision', 'Toujours interpréter dans le contexte'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Que signifie un grand corps sans mèches (marubozu) ?', options: ['Indécision', 'Mouvement unidirectionnel fort', 'Le marché est fermé', 'Un retournement'], correct: 1, explanation: 'Un grand corps sans mèches (marubozu) indique un mouvement unidirectionnel fort sans opposition : un côté a contrôlé toute la période.' },
          { question: 'Que indique une longue mèche basse ?', options: ['Pression vendeuse', 'Pression acheteuse en fin de période', 'Indécision', 'Rien'], correct: 1, explanation: 'Une longue mèche basse indique que les vendeurs ont poussé le prix vers le bas mais que les acheteurs ont repris le contrôle, repoussant le prix vers le haut.' },
          { question: 'Que signifie un petit corps avec des mèches longues des deux côtés ?', options: ['Tendance forte', 'Indécision', 'Cassure', 'Marteau'], correct: 1, explanation: 'Un petit corps avec des mèches longues des deux côtés indique de l\'indécision : acheteurs et vendeurs s\'affrontent sans vainqueur clair.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Sur un graphique H1, trouvez : <br>1. La bougie avec le plus grand corps <br>2. La bougie avec la plus longue mèche <br>3. Interprétez ce qu\'elles signifient', correction: '1. La bougie au plus grand corps = mouvement directionnel fort pendant cette heure. <br>2. La bougie à la plus longue mèche = rejet à ce niveau (pression opposée). <br>3. Le grand corps indique la période de mouvement le plus fort. La longue mèche indique un niveau où le prix a été repoussé.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'analyse la proportion corps/mèches', 'J\'interprète les mèches comme des rejets', 'Je compare avec le contexte', 'Je ne conclus pas sur une seule bougie'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm6-l3', title: 'Les dojis',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Un <strong>doji</strong> est une bougie dont l\'ouverture et la clôture sont (presque) identiques. Le corps est très petit, ressemblant à une croix ou un signe plus. Il indique de l\'<strong>indécision</strong> entre acheteurs et vendeurs.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Le doji signifie que ni les acheteurs ni les vendeurs n\'ont pris l\'avantage pendant la période. Le prix a pu monter et descendre, mais il est revenu au niveau d\'ouverture. Le doji est significatif quand il apparaît après une tendance prolongée : il peut signaler une perte de momentum et un retournement potentiel.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Le doji est l\'une des figures les plus connues. Il signale un équilibre entre acheteurs et vendeurs. Après une tendance forte, un doji peut être le premier signe d\'essoufflement. Mais isolé, il n\'est pas un signal d\'entrée : il faut une confirmation.' },
        { type: 'heading', content: 'Illustration graphique' },
        { type: 'chart', title: 'Doji après une tendance haussière', props: {
          candles: dojiPattern(),
          annotations: [
            { type: 'circle', candle: 2, price: 1.1020, color: '#ffa726', radius: 10 },
            { type: 'label', candle: 2, price: 1.1040, offsetY: -5, text: 'Doji (indécision)', color: '#ffa726' },
          ]
        }},
        { type: 'text', content: 'Après deux bougies haussières, un doji apparaît : le corps est minuscule, les mèches sont présentes des deux côtés. Le marché hésite. La bougie suivante est baissière : le retournement se confirme.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['L\'EUR/USD monte pendant 5 bougies consécutives.', 'Un doji apparaît au sommet : indécision.', 'Le trader attend la bougie suivante pour confirmer.', 'La bougie suivante est baissière : confirmation de retournement potentiel.', 'Il ouvre une position de vente avec un Stop Loss au-dessus du doji.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un doji apparaît au milieu d\'un range, pas après une tendance. Il n\'a aucune signification particulière : le marché est déjà en indécision. Un trader qui vend sur ce doji n\'a pas de contexte favorable.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Vendre ou acheter sur un doji sans confirmation', 'Ignorer le contexte (tendance ou range)', 'Supposer qu\'un doji garantit un retournement', 'Ne pas attendre la bougie suivante'] },
        { type: 'summary', points: ['Un doji a un corps minuscule (Open ≈ Close)', 'Il indique de l\'indécision', 'Significatif après une tendance prolongée', 'Peut signaler un retournement potentiel', 'Toujours attendre une confirmation'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce qu\'un doji ?', options: ['Une bougie avec un grand corps', 'Une bougie dont Open ≈ Close (corps minuscule)', 'Une bougie rouge', 'Une bougie verte'], correct: 1, explanation: 'Un doji est une bougie dont l\'ouverture et la clôture sont presque identiques, formant un corps minuscule ressemblant à une croix.' },
          { question: 'Que signifie un doji après une tendance haussière ?', options: ['Continuation garantie', 'Indécision, retournement potentiel', 'Le marché ferme', 'Rien'], correct: 1, explanation: 'Après une tendance haussière, un doji signale de l\'indécision : les acheteurs perdent le contrôle, un retournement est possible mais pas garanti.' },
          { question: 'Faut-il entrer en position sur un doji seul ?', options: ['Oui', 'Non, attendre une confirmation', 'Seulement en tendance baissière', 'Seulement le matin'], correct: 1, explanation: 'Un doji seul n\'est pas un signal d\'entrée. Il faut attendre la bougie suivante pour confirmer le retournement.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Cherchez un doji sur un graphique H1. <br>1. Apparaît-il après une tendance ou dans un range ? <br>2. Que s\'est-il passé après le doji ?', correction: 'Si le doji apparaît après une tendance et est suivi d\'une bougie de retournement → signal valide. S\'il apparaît dans un range → peu de signification. La bougie suivante confirme ou infirme le signal.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'identifie le doji (corps minuscule)', 'Je vérifie le contexte (tendance ou range)', 'J\'attends la bougie suivante pour confirmer', 'Je n\'entre pas sur un doji seul'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm6-l4', title: 'Marteaux et marteaux inversés',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Un <strong>marteau</strong> (hammer) est une bougie avec un petit corps en haut et une longue mèche basse. Il apparaît après une baisse et peut signaler un retournement haussier. Un <strong>marteau inversé</strong> a un petit corps en bas et une longue mèche haute.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Le marteau signifie que les vendeurs ont poussé le prix vers le bas pendant la période, mais que les acheteurs ont repris le contrôle et ramené le prix près de l\'ouverture. La longue mèche basse montre le rejet des niveaux bas. Le marteau est plus significatif quand il apparaît à un support, pas au milieu d\'un range.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Le marteau est l\'une des figures de retournement les plus fiables, à condition d\'être dans un contexte favorable (à un support). Il montre que les acheteurs ont défendu un niveau. Sans contexte, un marteau n\'est qu\'une bougie comme une autre.' },
        { type: 'heading', content: 'Illustration graphique' },
        { type: 'chart', title: 'Marteau à un support', props: {
          candles: hammerPattern(),
          annotations: [
            { type: 'circle', candle: 2, price: 1.0965, color: '#26a69a', radius: 10 },
            { type: 'label', candle: 2, price: 1.0930, offsetY: 5, text: 'Marteau (rejet bas)', color: '#26a69a' },
          ],
          lines: [
            { y1: 1.0960, y2: 1.0960, color: '#26a69a', dashed: true, label: 'Support', labelX: 0.95, labelY: 1.0960 },
          ]
        }},
        { type: 'text', content: 'Le marteau (3ème bougie) a un petit corps en haut et une longue mèche basse : les vendeurs ont été repoussés. Il apparaît à un support, ce qui rend le signal plus fiable. La bougie suivante est haussière : confirmation.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['L\'EUR/USD baisse vers un support à 1,0800.', 'Un marteau se forme : longue mèche basse, petit corps vert.', 'Les acheteurs ont défendu le support.', 'Le trader achète à la clôture du marteau ou à la cassure du haut du marteau.', 'Stop Loss sous la mèche basse. TP à la résistance suivante.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un marteau apparaît au milieu d\'une tendance baissière forte, loin de tout support. Le trader achète, mais le prix continue à baisser. Le marteau n\'était pas à un niveau significatif : pas de contexte favorable.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Acheter sur un marteau sans support à proximité', 'Ne pas attendre la confirmation', 'Placer le Stop Loss trop serré sous le marteau', 'Confondre marteau et marteau inversé'] },
        { type: 'summary', points: ['Le marteau a un petit corps en haut et une longue mèche basse', 'Il montre un rejet des niveaux bas', 'Significatif à un support après une baisse', 'Toujours attendre une confirmation', 'Le contexte est plus important que la figure'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce qu\'un marteau ?', options: ['Une bougie avec un grand corps', 'Une bougie avec un petit corps en haut et une longue mèche basse', 'Une bougie rouge', 'Un doji'], correct: 1, explanation: 'Un marteau (hammer) a un petit corps en haut et une longue mèche basse, indiquant que les vendeurs ont été repoussés par les acheteurs.' },
          { question: 'Où le marteau est-il le plus significatif ?', options: ['Au milieu d\'un range', 'À un support après une baisse', 'Au sommet d\'une hausse', 'N\'importe où'], correct: 1, explanation: 'Le marteau est le plus significatif quand il apparaît à un support après une baisse : il montre que les acheteurs ont défendu le niveau.' },
          { question: 'Que faut-il faire après un marteau ?', options: ['Acheter immédiatement', 'Attendre une confirmation (bougie suivante haussière)', 'Vendre', 'Rien'], correct: 1, explanation: 'Après un marteau, il faut attendre la bougie suivante pour confirmer le retournement avant d\'entrer en position.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Cherchez un marteau sur un graphique H1. <br>1. Apparaît-il à un support ? <br>2. La bougie suivante confirme-t-elle le retournement ? <br>3. Où placeriez-vous le Stop Loss ?', correction: '1. Le marteau doit être à un support pour être significatif. <br>2. La bougie suivante doit être haussière pour confirmer. <br>3. Le Stop Loss se place sous la mèche basse du marteau (sous le support).' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Le marteau est à un support', 'Le corps est petit, la mèche basse est longue', 'J\'attends la confirmation', 'Mon Stop Loss est sous la mèche basse'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm6-l5', title: 'Engulfing bullish et bearish',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Un <strong>engulfing bullish</strong> est une figure à deux bougies : une petite bougie baissière suivie d\'une grande bougie haussière dont le corps englobe entièrement la bougie précédente. L\'<strong>engulfing bearish</strong> est l\'inverse : une petite bougie haussière suivie d\'une grande bougie baissière.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'L\'engulfing montre un changement soudain de contrôle. La première bougie va dans un sens, la second l\'annule complètement et va dans l\'autre sens avec force. Le corps de la second bougie dépasse entièrement le corps de la première. C\'est un signal de retournement plus fort que le marteau ou le doji.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'L\'engulfing est l\'une des figures de retournement les plus fiables. Il montre un basculement clair de contrôle entre acheteurs et vendeurs. À un support ou une résistance, il est particulièrement significatif.' },
        { type: 'heading', content: 'Illustration graphique' },
        { type: 'chart', title: 'Engulfing bullish à un support', props: {
          candles: engulfingBullishPattern(),
          annotations: [
            { type: 'circle', candle: 3, price: 1.0950, color: '#ef5350', radius: 8 },
            { type: 'label', candle: 3, price: 1.0930, offsetY: 5, text: 'Petite bougie rouge', color: '#ef5350' },
            { type: 'circle', candle: 4, price: 1.0970, color: '#26a69a', radius: 8 },
            { type: 'label', candle: 4, price: 1.0990, offsetY: -5, text: 'Grande bougie verte (engulfing)', color: '#26a69a' },
          ]
        }},
        { type: 'text', content: 'La 4ème bougie est une petite bougie rouge. La 5ème est une grande bougie verte qui englobe entièrement la précédente : c\'est un engulfing bullish. Le contrôle passe des vendeurs aux acheteurs. La bougie suivante confirme la hausse.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['L\'EUR/USD baisse vers un support à 1,0800.', 'Une petite bougie rouge se forme, suivie d\'une grande bougie verte qui l\'englobe.', 'Engulfing bullish à un support : signal de retournement fort.', 'Le trader achète à la clôture de l\'engulfing.', 'Stop Loss sous l\'engulfing. TP à la résistance suivante.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un engulfing bullish apparaît au milieu d\'une tendance baissière forte, sans support à proximité. Le trader achète, mais le prix continue à baisser. L\'engulfing n\'était pas dans un contexte favorable.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Entrer sur un engulfing sans contexte', 'Confondre engulfing et simple grande bougie', 'Ne pas vérifier que la 2ème bougie englobe la 1ère', 'Placer le Stop Loss trop serré'] },
        { type: 'summary', points: ['L\'engulfing est une figure à 2 bougies', 'La 2ème bougie englobe entièrement la 1ère', 'Engulfing bullish = retournement haussier potentiel', 'Engulfing bearish = retournement baissier potentiel', 'Le contexte (support/résistance) est crucial'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce qu\'un engulfing bullish ?', options: ['Une petite bougie verte suivie d\'une grande rouge', 'Une petite bougie rouge suivie d\'une grande verte qui l\'englobe', 'Un doji', 'Un marteau'], correct: 1, explanation: 'Un engulfing bullish est une petite bougie baissière (rouge) suivie d\'une grande bougie haussière (verte) dont le corps englobe entièrement la précédente.' },
          { question: 'Que montre un engulfing ?', options: ['De l\'indécision', 'Un changement soudain de contrôle entre acheteurs et vendeurs', 'Une continuation', 'Rien'], correct: 1, explanation: 'L\'engulfing montre un changement soudain de contrôle : le côté qui dominait est brusquement dominé par l\'autre côté.' },
          { question: 'Où l\'engulfing est-il le plus fiable ?', options: ['N\'importe où', 'À un support ou une résistance', 'Au milieu d\'un range', 'En tendance forte'], correct: 1, explanation: 'L\'engulfing est le plus fiable quand il apparaît à un support (engulfing bullish) ou à une résistance (engulfing bearish).' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Cherchez un engulfing sur un graphique H1. <br>1. Est-il bullish ou bearish ? <br>2. Apparaît-il à un niveau significatif ? <br>3. Où placer le Stop Loss ?', correction: '1. Engulfing bullish = petite rouge + grande verte. Bearish = petite verte + grande rouge. <br>2. Le plus fiable à un support (bullish) ou une résistance (bearish). <br>3. Stop Loss sous l\'engulfing bullish (ou au-dessus de l\'engulfing bearish).' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['La 2ème bougie englobe la 1ère', 'L\'engulfing est à un niveau significatif', 'J\'attends la clôture de la 2ème bougie', 'Mon Stop Loss est placé correctement'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm6-l6', title: 'Pin bars',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Une <strong>pin bar</strong> est une bougie avec un petit corps et une très longue mèche d\'un côté (et une petite ou pas de mèche de l\'autre). Elle ressemble à une épingle. La longue mèche montre un rejet fort d\'un niveau.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Une <strong>pin bar haussière</strong> a une longue mèche basse et un petit corps en haut : les vendeurs ont poussé le prix vers le bas mais les acheteurs ont repris le contrôle. Une <strong>pin bar baissière</strong> a une longue mèche haute et un petit corps en bas : les acheteurs ont été repoussés. La pin bar est significative à un support (haussière) ou à une résistance (baissière).' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'La pin bar est une figure de rejet très visuelle. Elle montre clairement que le prix a été repoussé à un niveau. C\'est l\'une des figures préférées des traders car elle est facile à identifier et à interpréter.' },
        { type: 'heading', content: 'Illustration graphique' },
        { type: 'chart', title: 'Pin bar baissière à une résistance', props: {
          candles: pinBarPattern(),
          annotations: [
            { type: 'circle', candle: 2, price: 1.1025, color: '#ef5350', radius: 10 },
            { type: 'label', candle: 2, price: 1.1050, offsetY: -5, text: 'Pin bar baissière', color: '#ef5350' },
          ],
          lines: [
            { y1: 1.1030, y2: 1.1030, color: '#ef5350', dashed: true, label: 'Résistance', labelX: 0.95, labelY: 1.1030 },
          ]
        }},
        { type: 'text', content: 'La 3ème bougie a une très longue mèche haute et un petit corps en bas : c\'est une pin bar baissière. Elle apparaît à une résistance. Les acheteurs ont été repoussés. La bougie suivante est baissière : confirmation.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['L\'EUR/USD monte vers une résistance à 1,0900.', 'Une pin bar baissière se forme : longue mèche haute, petit corps en bas.', 'Les acheteurs ont été repoussés à la résistance.', 'Le trader vend à la clôture de la pin bar ou à la cassure du bas du corps.', 'Stop Loss au-dessus de la mèche haute. TP au support suivant.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Une pin bar apparaît mais le corps est grand (pas un petit corps). Ce n\'est pas une vraie pin bar. Le trader l\'identifie comme pin bar et entre en position. La figure n\'est pas valide et le trade échoue.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Confondre une bougie avec grande mèche et pin bar (le corps doit être petit)', 'Entrer sans contexte (support/résistance)', 'Ne pas attendre la confirmation', 'Placer le Stop Loss trop serré'] },
        { type: 'summary', points: ['La pin bar a un petit corps et une très longue mèche d\'un côté', 'Pin bar haussière = longue mèche basse (rejet du bas)', 'Pin bar baissière = longue mèche haute (rejet du haut)', 'Significative à un support ou une résistance', 'Toujours attendre une confirmation'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce qu\'une pin bar ?', options: ['Une bougie avec un grand corps', 'Une bougie avec un petit corps et une très longue mèche d\'un côté', 'Un doji', 'Un engulfing'], correct: 1, explanation: 'Une pin bar a un petit corps et une très longue mèche d\'un côté, montrant un rejet fort d\'un niveau.' },
          { question: 'Une pin bar haussière a ?', options: ['Une longue mèche haute', 'Une longue mèche basse', 'Un grand corps vert', 'Pas de mèche'], correct: 1, explanation: 'Une pin bar haussière a une longue mèche basse : les vendeurs ont été repoussés, les acheteurs ont repris le contrôle.' },
          { question: 'Où la pin bar est-elle la plus significative ?', options: ['N\'importe où', 'À un support (haussière) ou une résistance (baissière)', 'Au milieu d\'un range', 'En tendance forte'], correct: 1, explanation: 'La pin bar est la plus significative quand elle apparaît à un support (pin bar haussière) ou à une résistance (pin bar baissière).' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Identifiez une pin bar sur un graphique H1. <br>1. Est-elle haussière ou baissière ? <br>2. Apparaît-elle à un niveau significatif ? <br>3. Où placer le Stop Loss ?', correction: '1. Longue mèche basse = haussière. Longue mèche haute = baissière. <br>2. La pin bar doit être à un support (haussière) ou une résistance (baissière). <br>3. Stop Loss au-delà de la mèche : sous la mèche basse pour une pin bar haussière, au-dessus de la mèche haute pour une baissière.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Le corps est petit', 'La mèche est longue d\'un côté', 'La pin bar est à un niveau significatif', 'J\'attends une confirmation'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm6-l7', title: 'Configurations à plusieurs bougies et contexte',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Les <strong>configurations à plusieurs bougies</strong> sont des patterns qui nécessitent 2 ou 3 bougies pour être identifiés (engulfing, étoile du matin, deux corbeaux, etc.). Le <strong>contexte</strong> est l\'environnement dans lequel la figure apparaît (tendance, support/résistance, unité de temps).' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Une figure de chandeliers n\'a de valeur que dans son contexte. Un marteau à un support après une baisse est significatif. Le même marteau au milieu d\'un range ne l\'est pas. Le contexte inclut : la tendance (haussière, baissière, range), le niveau (support, résistance, milieu), l\'unité de temps (plus haute = plus fiable), et les bougies précédentes.' },
        { type: 'callout', variant: 'warning', title: 'Règle d\'or', content: 'Le contexte est plus important que la figure. Une figure parfaite dans un mauvais contexte vaut moins qu\'une figure moyenne dans un excellent contexte.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Les débutants ont tendance à chercher des figures sans tenir compte du contexte. Cela mène à des trades perdants. Comprendre que le contexte prime sur la figure est l\'une des leçons les plus importantes en trading de chandeliers.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Un trader voit un engulfing bullish sur EUR/USD H1.', 'Il vérifie le contexte : tendance baissière sur H4, pas de support à proximité.', 'Le contexte est défavorable : il ne trade pas.', 'Il attend un engulfing bullish à un support dans une tendance haussière.', 'Le contexte rend le signal beaucoup plus fiable.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader voit un doji et vend immédiatement, sans vérifier le contexte. Le doji était dans une tendance haussière forte sur D1, à un support. La vente est contre la tendance majeure. Le prix continue à monter.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Trader une figure sans contexte', 'Ignorer la tendance de l\'unité supérieure', 'Chercher des figures au lieu de chercher des niveaux', 'Supposer qu\'une figure garantit un résultat'] },
        { type: 'summary', points: ['Les configurations à plusieurs bougies sont plus fiables', 'Le contexte prime sur la figure', 'Vérifier : tendance, niveau, unité de temps, bougies précédentes', 'Une figure parfaite sans contexte = pas de trade', 'Toujours attendre une confirmation'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce qui est le plus important ?', options: ['La figure', 'Le contexte', 'La couleur', 'L\'heure'], correct: 1, explanation: 'Le contexte est plus important que la figure. Une figure parfaite dans un mauvais contexte a moins de valeur qu\'une figure moyenne dans un bon contexte.' },
          { question: 'Que faut-il vérifier avant de trader une figure ?', options: ['Rien', 'Tendance, niveau, unité de temps, bougies précédentes', 'La météo', 'Le broker'], correct: 1, explanation: 'Avant de trader une figure, il faut vérifier la tendance, le niveau (support/résistance), l\'unité de temps et les bougies précédentes.' },
          { question: 'Un marteau au milieu d\'un range est-il significatif ?', options: ['Oui', 'Non, il faut un contexte favorable (support/résistance)', 'Peut-être', 'Seulement le matin'], correct: 1, explanation: 'Un marteau au milieu d\'un range, sans support à proximité, n\'est pas significatif. Il faut un contexte favorable pour que la figure ait de la valeur.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Trouvez une figure de chandeliers sur H1. <br>1. Quelle est la figure ? <br>2. Quel est le contexte (tendance, niveau) ? <br>3. Le contexte est-il favorable ?', correction: 'Identifiez la figure (marteau, doji, engulfing, pin bar). Vérifiez si elle est à un support/résistance et dans quelle tendance. Le contexte est favorable si la figure est à un niveau significatif et dans le sens de la tendance de l\'unité supérieure.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai identifié la figure correctement', 'J\'ai vérifié le contexte (tendance, niveau)', 'Le contexte est favorable', 'J\'attends une confirmation'] },
        { type: 'note' }
      ]
    }
  ]
}
