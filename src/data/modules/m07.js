export default {
  id: 'm7', number: 7, title: 'Les indicateurs',
  description: 'Moyennes mobiles, RSI, MACD, bandes de Bollinger, ATR, volumes et divergences.',
  badge: 'basics',
  intro: 'Les indicateurs sont des outils d\'analyse calculés à partir du prix. Ce module explique les principaux indicateurs, leurs utilisations et leurs limites. Les indicateurs sont des outils d\'aide à la décision, pas des garanties de rentabilité.',
  objectives: ['Comprendre les principaux indicateurs', 'Savoir les utiliser et les combiner', 'Identifier les divergences', 'Connaître les limites des indicateurs'],
  lessons: [
    {
      id: 'm7-l1', title: 'Les moyennes mobiles',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Une <strong>moyenne mobile</strong> (Moving Average) calcule le prix moyen sur une période donnée. Elle lisse le prix et aide à visualiser la tendance. Une <strong>MA simple</strong> (SMA) calcule la moyenne arithmétique. Une <strong>MA exponentielle</strong> (EMA) donne plus de poids aux prix récents.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Les moyennes mobiles les plus utilisées : SMA 200 (tendance long terme), EMA 50 (tendance moyen terme), EMA 20 (tendance court terme). Quand le prix est au-dessus de la MA 200, la tendance est considérée comme haussière. Un <strong>croisement</strong> de la MA 20 au-dessus de la MA 50 peut signaler un retournement haussier.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Les moyennes mobiles sont les indicateurs les plus utilisés. Elles aident à identifier la tendance, à trouver des zones de support/résistance dynamique, et à générer des signaux de croisement. Mais elles sont en retard (lagging) : elles confirment la tendance, ne la prédisent pas.' },
        { type: 'callout', variant: 'info', title: 'Limites', content: 'Les moyennes mobiles sont des indicateurs en retard (lagging). Elles confirment ce qui s\'est déjà passé, elles ne prédisent pas l\'avenir. Ne pas les utiliser comme seul signal d\'entrée.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Le prix de l\'EUR/USD est au-dessus de l\'EMA 50 sur H4.', 'La tendance est haussière à moyen terme.', 'Le prix retraced vers l\'EMA 50 et rebondit.', 'Le trader achète au rebond sur l\'EMA 50 (support dynamique).', 'Stop Loss sous l\'EMA 50. TP à la résistance suivante.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader achète quand la MA 20 croise la MA 50 à la hausse. Mais le croisement s\'est déjà produit il y a plusieurs bougies et le prix a déjà beaucoup monté. Le signal est en retard. Le prix fait un retracement et le trade est perdant.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Utiliser les MA comme seul signal', 'Oublier que les MA sont en retard', 'Utiliser trop de MA en même temps', 'Confondre support dynamique et support fixe'] },
        { type: 'summary', points: ['Les moyennes mobiles lissent le prix', 'SMA = moyenne simple, EMA = moyenne exponentielle', 'MA 200 = long terme, MA 50 = moyen terme, MA 20 = court terme', 'Les croisements peuvent signaler des retournements', 'Les MA sont en retard : elles confirment, ne prédisent pas'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce qu\'une moyenne mobile ?', options: ['Un indicateur de volume', 'Le prix moyen sur une période donnée', 'Un type d\'ordre', 'Une stratégie'], correct: 1, explanation: 'Une moyenne mobile calcule le prix moyen sur une période donnée, lissant les fluctuations pour visualiser la tendance.' },
          { question: 'Que signifie un prix au-dessus de la MA 200 ?', options: ['Tendance baissière', 'Tendance haussière', 'Consolidation', 'Rien'], correct: 1, explanation: 'Quand le prix est au-dessus de la MA 200, la tendance de long terme est considérée comme haussière.' },
          { question: 'Pourquoi les MA sont-elles en retard ?', options: ['Parce qu\'elles sont lentes', 'Parce qu\'elles calculent des données passées', 'Parce que le broker les bloque', 'Elles ne le sont pas'], correct: 1, explanation: 'Les moyennes mobiles calculent des données passées : elles confirment ce qui s\'est déjà produit, elles ne prédisent pas l\'avenir.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Ajoutez une EMA 50 sur l\'EUR/USD en H4. <br>1. Le prix est-il au-dessus ou en dessous ? <br>2. Quelle est la tendance ? <br>3. Le prix a-t-il déjà rebondi sur l\'EMA 50 ?', correction: 'Si le prix est au-dessus de l\'EMA 50 → tendance haussière à moyen terme. Si en dessous → tendance baissière. Les rebonds sur l\'EMA 50 sont des zones d\'entrée potentielles (support dynamique).' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'utilise les MA pour identifier la tendance', 'Je sais que les MA sont en retard', 'Je ne les utilise pas comme seul signal', 'Je cherche des rebonds sur les MA comme support/résistance dynamique'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm7-l2', title: 'Le RSI (Relative Strength Index)',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Le <strong>RSI</strong> est un oscillateur qui mesure la vitesse et l\'ampleur des variations de prix. Il va de 0 à 100. Au-dessus de 70, le marché est considéré <strong>suracheté</strong> (risque de baisse). En dessous de 30, il est <strong>survendu</strong> (risque de hausse).' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Le RSI le plus utilisé est sur 14 périodes. Le RSI peut rester en zone surachat/survente pendant longtemps en tendance forte. Les <strong>divergences</strong> (le prix fait un nouveau sommet mais le RSI non) sont plus significatives que les niveaux 70/30.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Le RSI aide à identifier les conditions extrêmes du marché et les potentielles zones de retournement. Les divergences sont l\'utilisation la plus puissante du RSI : elles signalent une perte de momentum avant que le prix ne se retourne.' },
        { type: 'callout', variant: 'warning', title: 'Attention', content: 'En tendance forte, le RSI peut rester au-dessus de 70 ou en dessous de 30 pendant longtemps. Ne pas vendre simplement parce que le RSI est au-dessus de 70.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['L\'EUR/USD monte et le RSI atteint 75 (surachat).', 'Mais la tendance est haussière forte sur D1.', 'Le trader n\'vend pas : il attend un signal de retournement.', 'Le RSI forme une divergence baissière : le prix fait un HH mais le RSI fait un LH.', 'C\'est un signal de perte de momentum : le trader réduit sa position ou prépare une vente.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader vend parce que le RSI est à 72. Mais la tendance est haussière très forte. Le RSI reste au-dessus de 70 pendant 10 bougies. Le prix continue à monter. Le trader est en perte car il a ignoré la tendance.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Vendre sur RSI > 70 en tendance haussière', 'Acheter sur RSI < 30 en tendance baissière', 'Ignorer les divergences', 'Utiliser le RSI sans contexte'] },
        { type: 'summary', points: ['Le RSI mesure la vitesse et l\'ampleur des variations', 'Au-dessus de 70 = surachat, en dessous de 30 = survente', 'Le RSI peut rester extrême en tendance forte', 'Les divergences sont plus significatives que les niveaux 70/30', 'Toujours utiliser le RSI avec le contexte'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Que signifie un RSI au-dessus de 70 ?', options: ['Survente', 'Surachat', 'Tendance neutre', 'Le marché est fermé'], correct: 1, explanation: 'Un RSI au-dessus de 70 indique que le marché est suracheté : le prix a monté rapidement et une correction est possible.' },
          { question: 'Qu\'est-ce qu\'une divergence baissière ?', options: ['Le prix fait un HH mais le RSI fait un LH', 'Le RSI monte', 'Le prix baisse', 'Rien'], correct: 0, explanation: 'Une divergence baissière se produit quand le prix fait un nouveau sommet (HH) mais le RSI fait un sommet plus bas (LH) : perte de momentum haussier.' },
          { question: 'Pourquoi ne pas vendre sur RSI > 70 en tendance haussière ?', options: ['Parce que c\'est interdit', 'Parce que le RSI peut rester au-dessus de 70 longtemps en tendance forte', 'Parce que le RSI est faux', 'Parce que le broker le bloque'], correct: 1, explanation: 'En tendance haussière forte, le RSI peut rester au-dessus de 70 pendant longtemps. Vendre simplement sur ce niveau est risqué.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Ajoutez le RSI 14 sur l\'EUR/USD en H4. <br>1. Le RSI est-il en surachat, survente ou neutre ? <br>2. Y a-t-il une divergence ?', correction: 'Si RSI > 70 = surachat. Si RSI < 30 = survente. Entre 30 et 70 = neutre. Pour la divergence : comparez les sommets/creux du prix avec ceux du RSI. Si le prix fait un HH mais le RSI fait un LH = divergence baissière.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je vérifie le RSI avec le contexte de tendance', 'Je cherche les divergences', 'Je ne vends pas aveuglément sur RSI > 70', 'J\'utilise le RSI comme confirmation, pas comme signal unique'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm7-l3', title: 'Le MACD',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Le <strong>MACD</strong> (Moving Average Convergence Divergence) est un indicateur de momentum basé sur la différence entre deux moyennes mobiles exponentielles (généralement EMA 12 et EMA 26). Il comporte une ligne MACD, une ligne de signal (EMA 9 du MACD) et un histogramme.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Le MACD se lit de plusieurs façons : <ul><li><strong>Croisement</strong> : la ligne MACD croise la ligne de signal à la hausse = signal d\'achat, à la baisse = signal de vente.</li><li><strong>Histogramme</strong> : les barres grandissent = momentum qui augmente, rétrécissent = momentum qui faiblit.</li><li><strong>Zéro</strong> : au-dessus de zéro = momentum haussier, en dessous = momentum baissier.</li><li><strong>Divergences</strong> : comme le RSI, les divergences entre le prix et le MACD signalent une perte de momentum.</li></ul>' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Le MACD est l\'un des indicateurs les plus complets : il combine tendance et momentum. Les croisements donnent des signaux d\'entrée/sortie. L\'histogramme montre la force du momentum. Les divergences anticipent les retournements.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['La ligne MACD croise la ligne de signal à la hausse sur H4.', 'L\'histogramme passe du négatif au positif.', 'Le momentum tourne à la hausse.', 'Le trader cherche une confirmation (support, pattern) et achète.', 'Stop Loss sous le support. TP à la résistance.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Le MACD donne un signal d\'achat, mais le prix est sous la MA 200 et la tendance est baissière. Le signal est contre la tendance majeure. Le trade échoue. Le MACD doit être utilisé dans le sens de la tendance.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Trader les croisements contre la tendance', 'Ignorer l\'histogramme', 'Ne pas chercher les divergences', 'Utiliser le MACD comme seul signal'] },
        { type: 'summary', points: ['Le MACD combine tendance et momentum', 'Croisement de la ligne MACD et de la ligne de signal = signal', 'L\'histogramme montre la force du momentum', 'Les divergences anticipent les retournements', 'Toujours utiliser dans le sens de la tendance'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Que signifie un croisement haussier du MACD ?', options: ['La ligne MACD croise la ligne de signal à la baisse', 'La ligne MACD croise la ligne de signal à la hausse', 'L\'histogramme est négatif', 'Rien'], correct: 1, explanation: 'Un croisement haussier du MACD se produit quand la ligne MACD croise la ligne de signal à la hausse : signal d\'achat potentiel.' },
          { question: 'Que montre l\'histogramme du MACD ?', options: ['Le volume', 'La force du momentum', 'Le prix', 'Rien'], correct: 1, explanation: 'L\'histogramme du MACD montre la force du momentum : les barres grandissent = momentum qui augmente, rétrécissent = momentum qui faiblit.' },
          { question: 'Dans quel sens utiliser le MACD ?', options: ['Contre la tendance', 'Dans le sens de la tendance', 'N\'importe comment', 'Jamais'], correct: 1, explanation: 'Le MACD doit être utilisé dans le sens de la tendance majeure. Les signaux contre la tendance sont moins fiables.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Ajoutez le MACD sur l\'EUR/USD en H4. <br>1. La ligne MACD est-elle au-dessus ou en dessous de la ligne de signal ? <br>2. L\'histogramme est-il positif ou négatif ? <br>3. Quelle est la tendance ?', correction: 'MACD au-dessus de la ligne de signal + histogramme positif = momentum haussier. MACD en dessous + histogramme négatif = momentum baissier. Vérifiez l\'alignement avec la tendance de prix.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je vérifie le croisement MACD/ligne de signal', 'J\'analyse l\'histogramme', 'Je cherche les divergences', 'J\'utilise le MACD dans le sens de la tendance'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm7-l4', title: 'Les bandes de Bollinger',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Les <strong>bandes de Bollinger</strong> sont constituées d\'une moyenne mobile (généralement SMA 20) entourée de deux bandes situées à ±2 écarts-types. Elles mesurent la volatilité : quand les bandes s\'écartent, la volatilité augmente ; quand elles se resserrent, elle diminue.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Les usages principaux : <ul><li><strong>Toucher la bande supérieure</strong> : le prix est élevé par rapport à sa moyenne (potentiel retour vers la moyenne).</li><li><strong>Toucher la bande inférieure</strong> : le prix est bas (potentiel rebond).</li><li><strong>Resserment (squeeze)</strong> : les bandes se resserrent = faible volatilité, souvent suivi d\'une expansion.</li><li><strong>Cassure de bande</strong> : peut signaler le début d\'un mouvement fort.</li></ul>' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Les bandes de Bollinger aident à mesurer la volatilité et à identifier les niveaux extrêmes. Le resserrement (squeeze) est particulièrement utile car il annonce souvent un mouvement fort — sans en indiquer la direction.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Les bandes de Bollinger se resserrent sur EUR/USD H1 (squeeze).', 'Le trader se prépare à un mouvement fort.', 'Le prix casse la bande supérieure avec une grande bougie verte.', 'Il achète dans le sens de la cassure.', 'Stop Loss sous la bande moyenne. TP à la volatilité attendue.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Le prix touche la bande supérieure. Le trader vend, pensant à un retour vers la moyenne. Mais le prix reste collé à la bande supérieure pendant 10 bougies (tendance forte). Le trade est perdant. Toucher une bande n\'est pas un signal de vente automatique.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Vendre automatiquement sur la bande supérieure', 'Ignorer le contexte de tendance', 'Ne pas utiliser le squeeze', 'Supposer que le prix revient toujours à la moyenne'] },
        { type: 'summary', points: ['Les bandes de Bollinger mesurent la volatilité', 'Bande supérieure = prix élevé, bande inférieure = prix bas', 'Le resserrement (squeeze) annonce un mouvement fort', 'La cassure de bande peut signaler un début de tendance', 'Ne pas vendre automatiquement sur la bande supérieure'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Que mesurent les bandes de Bollinger ?', options: ['Le volume', 'La volatilité', 'Le momentum', 'Le prix'], correct: 1, explanation: 'Les bandes de Bollinger mesurent la volatilité : l\'écart entre les bandes reflète l\'amplitude des variations de prix.' },
          { question: 'Qu\'est-ce qu\'un squeeze ?', options: ['Une cassure de bande', 'Un resserrement des bandes (faible volatilité)', 'Un type d\'ordre', 'Une divergence'], correct: 1, explanation: 'Un squeeze est un resserrement des bandes de Bollinger, indiquant une faible volatilité souvent suivie d\'une expansion (mouvement fort).' },
          { question: 'Que faut-il faire après un squeeze ?', options: ['Rien', 'Se préparer à un mouvement fort et attendre la cassure', 'Vendre immédiatement', 'Acheter immédiatement'], correct: 1, explanation: 'Après un squeeze, il faut se préparer à un mouvement fort et attendre que le prix casse dans une direction pour entrer.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Ajoutez les bandes de Bollinger sur l\'EUR/USD en H1. <br>1. Les bandes sont-elles larges ou resserrées ? <br>2. Le prix touche-t-il une bande ?', correction: 'Bandes larges = volatilité élevée. Bandes resserrées = volatilité faible (squeeze potentiel). Si le prix touche la bande supérieure = prix élevé. Si il touche la bande inférieure = prix bas. Toujours dans le contexte de la tendance.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je vérifie la largeur des bandes (volatilité)', 'Je cherche les squeezes', 'Je n\'entre pas automatiquement sur un toucher de bande', 'J\'utilise les bandes avec le contexte'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm7-l5', title: 'L\'ATR et les volumes',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'L\'<strong>ATR</strong> (Average True Range) mesure la volatilité moyenne d\'un actif sur une période. Les <strong>volumes</strong> mesurent le nombre d\'unités échangées. L\'ATR aide à placer les Stop Loss ; les volumes confirment la force d\'un mouvement.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'L\'ATR calcule la moyenne des amplitudes (High - Low) sur une période (généralement 14). Un ATR de 0,0050 sur EUR/USD signifie que le prix bouge en moyenne de 50 pips par bougie. On peut utiliser l\'ATR pour placer le Stop Loss à 1,5 × ATR de l\'entrée, l\'adaptant à la volatilité.' },
        { type: 'text', content: 'Les volumes indiquent l\'intensité des échanges. Un mouvement avec des volumes élevés est plus significatif qu\'un mouvement avec de faibles volumes. <strong>Attention</strong> : sur le Forex, les volumes sont des volumes « tick » (nombre de variations de prix), pas des volumes réels, car le Forex est décentralisé.' },
        { type: 'callout', variant: 'warning', title: 'Limites des volumes sur Forex', content: 'Sur le Forex décentralisé, il n\'existe pas de volume centralisé. Les « volumes » affichés par les brokers sont des volumes tick (nombre de variations de prix), qui ne représentent pas le volume réel. Utilisez-les avec prudence.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'L\'ATR est essentiel pour adapter le Stop Loss à la volatilité de l\'actif. Un Stop Loss de 20 pips sur un actif avec un ATR de 50 pips est trop serré. Les volumes aident à confirmer la force d\'un mouvement, mais avec des limites sur le Forex.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['L\'ATR de l\'EUR/USD en H1 est de 0,0030 (30 pips).', 'Le trader place son Stop Loss à 1,5 × ATR = 45 pips de l\'entrée.', 'Cela adapte le Stop Loss à la volatilité actuelle.', 'Si l\'ATR augmente à 50 pips, il élargit le Stop à 75 pips.', 'Les volumes confirment un mouvement fort si ils sont élevés.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader place un Stop Loss de 10 pips sur le GBP/JPY. L\'ATR est de 80 pips. Le Stop Loss est 8 fois plus petit que la volatilité moyenne : il sera touché par le bruit normal du marché.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Placer des Stops Loss sans tenir compte de l\'ATR', 'Faire confiance aux volumes tick sur Forex comme volumes réels', 'Ne pas adapter le Stop quand la volatilité change', 'Ignorer les volumes sur les actions/indices (où ils sont réels)'] },
        { type: 'summary', points: ['L\'ATR mesure la volatilité moyenne', 'Utiliser 1,5 × ATR pour le Stop Loss est une approche courante', 'Les volumes confirment la force d\'un mouvement', 'Sur le Forex, les volumes sont des volumes tick (limités)', 'Adapter le Stop Loss à la volatilité est essentiel'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Que mesure l\'ATR ?', options: ['Le volume', 'La volatilité moyenne', 'Le momentum', 'La tendance'], correct: 1, explanation: 'L\'ATR (Average True Range) mesure la volatilité moyenne d\'un actif sur une période donnée.' },
          { question: 'Comment utiliser l\'ATR pour le Stop Loss ?', options: ['Stop = ATR', 'Stop = 1,5 × ATR (ou similaire) de l\'entrée', 'Stop = 0,5 × ATR', 'Stop = 10 × ATR'], correct: 1, explanation: 'Une approche courante est de placer le Stop Loss à 1,5 × ATR de l\'entrée, l\'adaptant à la volatilité de l\'actif.' },
          { question: 'Que sont les volumes tick sur le Forex ?', options: ['Des volumes réels', 'Le nombre de variations de prix (pas le volume réel)', 'Un indicateur de tendance', 'Rien'], correct: 1, explanation: 'Sur le Forex décentralisé, les volumes tick mesurent le nombre de variations de prix, pas le volume réel échangé. Ils sont moins fiables que les volumes réels.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Ajoutez l\'ATR 14 sur l\'EUR/USD en H1. <br>1. Quelle est la valeur de l\'ATR ? <br>2. À quelle distance placeriez-vous le Stop Loss (1,5 × ATR) ?', correction: 'Si l\'ATR est de 0,0025 (25 pips), le Stop Loss serait à 1,5 × 25 = 37,5 pips de l\'entrée. Cela adapte le Stop à la volatilité actuelle de l\'EUR/USD en H1.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je connais l\'ATR de l\'actif que je trade', 'J\'adapte mon Stop Loss à la volatilité', 'Je sais que les volumes Forex sont limités', 'J\'utilise les volumes comme confirmation, pas comme signal unique'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm7-l6', title: 'Divergences, faux signaux et combinaison d\'indicateurs',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Une <strong>divergence</strong> se produit quand le prix et un indicateur ne vont pas dans le même sens. Un <strong>faux signal</strong> est un signal d\'indicateur qui ne se concrétise pas. La <strong>combinaison d\'indicateurs</strong> consiste à utiliser plusieurs indicateurs ensemble pour confirmer un signal.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Types de divergences : <ul><li><strong>Divergence baissière (classique)</strong> : le prix fait un HH mais l\'indicateur fait un LH → perte de momentum haussier.</li><li><strong>Divergence haussière (classique)</strong> : le prix fait un LL mais l\'indicateur fait un HL → perte de momentum baissier.</li><li><strong>Divergence cachée</strong> : le prix fait un HL mais l\'indicateur fait un LH → continuation de tendance.</li></ul>Les faux signaux sont fréquents : un indicateur peut donner un signal qui ne se concrétise pas. C\'est pourquoi on combine les indicateurs et on les utilise avec l\'analyse de prix.' },
        { type: 'callout', variant: 'info', title: 'Règle importante', content: 'Les indicateurs sont des outils d\'analyse, pas des garanties de rentabilité. Aucun indicateur ne prédit l\'avenir avec certitude. Ils doivent être combinés avec l\'analyse de prix et la gestion du risque.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Les divergences sont l\'un des signaux les plus puissants en analyse technique : elles anticipent les retournements. Connaître les faux signaux évite d\'être piégé. Combiner les indicateurs de manière raisonnée augmente la fiabilité.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Le prix fait un HH sur EUR/USD H4.', 'Le RSI fait un LH : divergence baissière.', 'Le MACD confirme : son histogramme faiblit.', 'Le prix est à une résistance : confluence.', 'Le trader prépare une vente avec Stop Loss au-dessus du HH.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Le RSI montre une divergence baissière. Le trader vend. Mais le MACD ne confirme pas et le prix casse la résistance. La divergence n\'était pas suffisante. Un seul indicateur ne suffit pas.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Trader une divergence sans confirmation', 'Utiliser trop d\'indicateurs (paralysie d\'analyse)', 'Faire confiance à un seul indicateur', 'Ignorer le prix au profit des indicateurs'] },
        { type: 'summary', points: ['Une divergence = le prix et l\'indicateur ne vont pas dans le même sens', 'Les divergences anticipent les retournements', 'Les faux signaux sont fréquents : toujours confirmer', 'Combiner 2-3 indicateurs maximum, pas plus', 'Les indicateurs sont des outils, pas des garanties'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce qu\'une divergence baissière ?', options: ['Le prix fait un HH mais l\'indicateur fait un LH', 'Le prix baisse', 'L\'indicateur monte', 'Rien'], correct: 0, explanation: 'Une divergence baissière se produit quand le prix fait un nouveau sommet (HH) mais l\'indicateur fait un sommet plus bas (LH) : perte de momentum haussier.' },
          { question: 'Combien d\'indicateurs utiliser simultanément ?', options: ['Le plus possible', '2-3 maximum', '10', 'Aucun'], correct: 1, explanation: 'Il est recommandé d\'utiliser 2-3 indicateurs maximum pour éviter la paralysie d\'analyse et les signaux contradictoires.' },
          { question: 'Les indicateurs garantissent-ils un profit ?', options: ['Oui', 'Non, ce sont des outils d\'analyse', 'Parfois', 'Seulement le RSI'], correct: 1, explanation: 'Les indicateurs sont des outils d\'analyse, pas des garanties de rentabilité. Aucun indicateur ne prédit l\'avenir avec certitude.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Ajoutez le RSI et le MACD sur l\'EUR/USD en H4. <br>1. Y a-t-il une divergence entre le prix et le RSI ? <br>2. Le MACD confirme-t-il ?', correction: 'Comparez les sommets/creux du prix avec ceux du RSI et du MACD. Si le prix fait un HH mais le RSI et le MACD font un LH = divergence baissière confirmée par deux indicateurs. C\'est un signal plus fiable qu\'avec un seul indicateur.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je cherche les divergences', 'Je confirme avec au moins 2 indicateurs', 'Je n\'utilise pas trop d\'indicateurs', 'Je priorise l\'analyse de prix sur les indicateurs'] },
        { type: 'note' }
      ]
    }
  ]
}
