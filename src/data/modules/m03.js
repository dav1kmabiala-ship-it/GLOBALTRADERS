export default {
  id: 'm3', number: 3, title: 'Fonctionnement des plateformes',
  description: 'Maîtrisez l\'interface d\'une plateforme de trading, les ordres, le Stop Loss, le Take Profit et le calcul du risque.',
  badge: 'basics',
  intro: 'Ce module vous guide pas à pas dans l\'utilisation d\'une plateforme de trading, de l\'interface aux ordres, en passant par le calcul du risque avant chaque position.',
  objectives: ['Comprendre l\'interface d\'une plateforme', 'Maîtriser les types d\'ordres', 'Placer Stop Loss et Take Profit', 'Calculer le risque avant d\'ouvrir une position'],
  lessons: [
    {
      id: 'm3-l1', title: 'L\'interface d\'une plateforme de trading',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Une plateforme de trading (MetaTrader, TradingView, cTrader...) est le logiciel qui vous permet de voir les graphiques, passer des ordres, gérer vos positions et analyser les marchés. Chaque plateforme a une interface différente, mais les éléments de base sont similaires.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Les éléments principaux d\'une plateforme : <ul><li><strong>Graphique</strong> : affiche l\'évolution du prix en temps réel (chandeliers, ligne, barres).</li><li><strong>Menu des instruments</strong> : liste des actifs disponibles (Forex, indices, actions...).</li><li><strong>Panneau d\'ordres</strong> : pour passer des ordres Buy/Sell, définir volume, Stop Loss, Take Profit.</li><li><strong>Positions ouvertes</strong> : montre les trades en cours avec P/L (profit/perte).</li><li><strong>Outils d\'analyse</strong> : indicateurs, outils de dessin (lignes, Fibonacci...).</li><li><strong>Historique</strong> : journal des trades passés.</li></ul>' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Maîtriser sa plateforme est essentiel pour exécuter ses trades rapidement et correctement. Une erreur d\'interface (mauvaise taille de position, oubli de Stop Loss) peut coûter cher. Prenez le temps de vous familiariser avec la plateforme en compte démo avant de trader en réel.' },
        { type: 'heading', content: 'Illustration graphique' },
        { type: 'chart', title: 'Maquette d\'une interface de trading (schéma pédagogique)', props: {
          candles: [...(() => { let p = 1.1; const c = []; for (let i = 0; i < 20; i++) { const o = p; const ch = p + (Math.random() - 0.45) * 0.003; c.push({ o: +o.toFixed(4), c: +ch.toFixed(4), h: +(Math.max(o, ch) + Math.random() * 0.001).toFixed(4), l: +(Math.min(o, ch) - Math.random() * 0.001).toFixed(4) }); p = ch; } return c; })()],
          zones: [
            { top: 1.108, bottom: 1.092, color: 'rgba(0,212,255,0.03)', label: 'Zone du graphique' },
          ],
          annotations: [
            { type: 'label', candle: 1, price: 1.107, text: '↑ Menu instruments', color: '#00d4ff' },
            { type: 'label', candle: 1, price: 1.094, text: '↓ Panneau d\'ordres', color: '#ffa726' },
          ]
        }},
        { type: 'text', content: 'Cette maquette montre les zones principales d\'une plateforme : le graphique au centre, le menu des instruments en haut, et le panneau d\'ordres en bas. Familiarisez-vous avec ces zones sur votre plateforme.' },
        { type: 'heading', content: 'Exemple concret étape par étape' },
        { type: 'list', ordered: true, items: ['Ouvrez la plateforme et sélectionnez l\'EUR/USD dans le menu des instruments.', 'Le graphique s\'affiche avec les chandeliers en temps réel.', 'Choisissez l\'unité de temps (M15, H1, H4, D1) en haut du graphique.', 'Cliquez sur « Nouvel ordre » pour ouvrir le panneau d\'ordres.', 'Saisissez le volume (0,1 lot), le Stop Loss et le Take Profit.', 'Cliquez Buy ou Sell pour ouvrir la position.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader veut ouvrir 0,1 lot mais saisit 1,0 lot par erreur. Il ne vérifie pas avant de cliquer Buy. Sa position est 10 fois plus grande que prévu. Le risque est 10 fois plus élevé. Vérifiez toujours le volume avant de valider.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Saisir une mauvaise taille de position', 'Oublier de placer le Stop Loss', 'Confondre Buy et Sell', 'Ne pas vérifier l\'unité de temps', 'Cliquer trop vite sans vérifier les paramètres'] },
        { type: 'summary', points: ['La plateforme affiche le graphique, les ordres et les positions', 'Les éléments de base sont similaires entre plateformes', 'Maîtriser sa plateforme évite les erreurs d\'exécution', 'Vérifiez toujours le volume et le Stop Loss avant de valider', 'Pratiquez en compte démo avant de trader en réel'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Que faut-il vérifier avant de cliquer Buy ou Sell ?', options: ['La couleur du graphique', 'Le volume, le Stop Loss et le Take Profit', 'L\'heure', 'Rien'], correct: 1, explanation: 'Avant de valider un ordre, vérifiez toujours le volume (taille de position), le Stop Loss et le Take Profit.' },
          { question: 'Où peut-on voir les trades en cours ?', options: ['Dans le menu instruments', 'Dans le panneau des positions ouvertes', 'Dans l\'historique', 'Nulle part'], correct: 1, explanation: 'Le panneau des positions ouvertes montre les trades en cours avec leur profit/perte en temps réel.' },
          { question: 'Que faut-il faire avant de trader en réel ?', options: ['Rien', 'Pratiquer en compte démo', 'Mettre tout son capital', 'Utiliser le levier maximum'], correct: 1, explanation: 'Il est essentiel de pratiquer en compte démo pour maîtriser la plateforme avant de trader en réel.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Ouvrez votre plateforme en démo. <br>1. Sélectionnez l\'EUR/USD en H1. <br>2. Ouvrez une position Buy de 0,1 lot avec un SL de 30 pips et un TP de 60 pips. <br>3. Vérifiez que la position apparaît dans le panneau des positions. <br>4. Fermez la position.', correction: 'Vous devriez voir : le graphique EUR/USD H1, la position ouverte avec le SL et TP placés, le P/L en temps réel dans le panneau des positions, et la position se ferme quand vous cliquez « Fermer ».' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai sélectionné le bon instrument', 'J\'ai choisi la bonne unité de temps', 'J\'ai vérifié le volume', 'J\'ai placé le Stop Loss', 'J\'ai placé le Take Profit', 'J\'ai vérifié Buy ou Sell avant de valider'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm3-l2', title: 'Les graphiques et les unités de temps',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Un <strong>graphique</strong> affiche l\'évolution du prix dans le temps. L\'<strong>unité de temps</strong> (timeframe) détermine la période représentée par chaque bougie : M1 (1 minute), M15 (15 minutes), H1 (1 heure), H4 (4 heures), D1 (1 jour), W1 (1 semaine).' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Chaque bougie sur un graphique M15 représente 15 minutes de trading. Sur H1, chaque bougie représente 1 heure. Sur D1, chaque bougie représente un jour. Plus l\'unité de temps est élevée, plus la tendance est fiable mais moins il y a de signaux. Plus l\'unité est basse, plus il y a de signaux mais plus il y a de bruit.' },
        { type: 'table', headers: ['Unité', 'Style recommandé', 'Avantages', 'Inconvénients'], rows: [
          ['M1-M5', 'Scalping', 'Beaucoup de signaux', 'Beaucoup de bruit, stress'],
          ['M15-H1', 'Day trading', 'Bon compromis', 'Nécessite du temps'],
          ['H4-D1', 'Swing trading', 'Tendance fiable, moins de stress', 'Moins de signaux'],
          ['W1-MN', 'Position trading', 'Vision long terme', 'Très peu de signaux']
        ]},
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'L\'unité de temps détermine votre style de trading et le type de signaux que vous obtenez. Une tendance haussière sur D1 peut coexister avec une consolidation sur M15. L\'analyse multi-timeframe (voir la tendance sur H4/D1 et chercher des entrées sur M15/H1) est une approche très utilisée.' },
        { type: 'heading', content: 'Illustration graphique' },
        { type: 'chart', title: 'Même actif vu en H4 (gauche) et M15 (droite)', props: {
          candles: [...(() => { let p = 1.08; const c = []; for (let i = 0; i < 8; i++) { const o = p; const ch = p + 0.003; c.push({ o: +o.toFixed(4), c: +ch.toFixed(4), h: +(ch + 0.001).toFixed(4), l: +(o - 0.001).toFixed(4) }); p = ch; } return c; })(), ...(() => { let p = 1.104; const c = []; for (let i = 0; i < 8; i++) { const o = p; const ch = p + (Math.random() - 0.4) * 0.002; c.push({ o: +o.toFixed(4), c: +ch.toFixed(4), h: +(Math.max(o, ch) + 0.0005).toFixed(4), l: +(Math.min(o, ch) - 0.0005).toFixed(4) }); p = ch; } return c; })()],
          annotations: [
            { type: 'label', candle: 3, price: 1.095, text: 'H4 : tendance claire', color: '#00d4ff' },
            { type: 'label', candle: 11, price: 1.102, text: 'M15 : plus de bruit', color: '#ffa726' },
          ]
        }},
        { type: 'text', content: 'Sur l\'unité H4, la tendance haussière est claire. Sur l\'unité M15, le même mouvement apparaît plus haché avec plus de bruit. C\'est pourquoi on analyse la tendance sur une unité haute et on cherche des entrées sur une unité basse.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Un trader regarde l\'EUR/USD sur D1 : tendance haussière.', 'Il passe sur H4 : la tendance est confirmée.', 'Il passe sur H1 : il cherche un point d\'entrée.', 'Il passe sur M15 : il attend un signal précis (pattern, niveau).', 'Il ouvre sa position sur M15 avec la tendance D1 comme contexte.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader regarde uniquement le M1 et voit une « tendance haussière ». Il achète. Mais sur H4, la tendance est baissière. Le mouvement sur M1 n\'est qu\'un retracement. Le prix reprend la tendance baissière de H4 et le trader perd. Toujours vérifier la tendance sur une unité de temps supérieure.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Trader uniquement sur une unité de temps', 'Ignorer la tendance sur les unités supérieures', 'Utiliser une unité trop basse pour son style', 'Confondre un mouvement de bruit avec une tendance'] },
        { type: 'summary', points: ['L\'unité de temps détermine la période de chaque bougie', 'Plus l\'unité est haute, plus la tendance est fiable', 'Plus l\'unité est basse, plus il y a de bruit', 'L\'analyse multi-timeframe est recommandée', 'Adapter l\'unité de temps à son style de trading'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Que représente une bougie sur un graphique H1 ?', options: ['1 minute', '1 heure', '1 jour', '1 semaine'], correct: 1, explanation: 'Sur un graphique H1, chaque bougie représente 1 heure de trading.' },
          { question: 'Pourquoi analyser plusieurs unités de temps ?', options: ['Pour trader plus', 'Pour voir la tendance sur une unité haute et chercher des entrées sur une unité basse', 'Pour avoir plus de signaux', 'Ce n\'est pas utile'], correct: 1, explanation: 'L\'analyse multi-timeframe permet de voir la tendance générale sur une unité haute (H4, D1) et de chercher des entrées précises sur une unité basse (M15, H1).' },
          { question: 'Quel inconvénient des unités très basses (M1) ?', options: ['Trop de signaux', 'Beaucoup de bruit et de faux signaux', 'Pas assez de signaux', 'Le marché est fermé'], correct: 1, explanation: 'Les unités très basses comme M1 contiennent beaucoup de bruit et de faux signaux, ce qui rend le trading difficile et stressant.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Ouvrez l\'EUR/USD sur D1, H4 et M15. <br>1. Quelle est la tendance sur D1 ? <br>2. Quelle est la tendance sur H4 ? <br>3. Voyez-vous un signal d\'entrée sur M15 ?', correction: 'Si D1 et H4 montrent la même tendance (ex: haussière), cherchez un signal d\'achat sur M15 (rebond sur un support, pattern de retournement). Si D1 est haussier mais H4 baissier, attendez que H4 s\'aligne avec D1.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai vérifié la tendance sur l\'unité supérieure', 'J\'ai cherché un signal sur l\'unité inférieure', 'Mon unité de temps correspond à mon style', 'Je n\'ai pas confondu bruit et tendance'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm3-l3', title: 'Ordres au marché et ordres en attente',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Un <strong>ordre au marché</strong> (Market Order) exécute immédiatement au prix actuel. Un <strong>ordre en attente</strong> (Pending Order) place un ordre qui s\'exécutera automatiquement quand le prix atteindra un niveau prédéfini.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'table', headers: ['Type d\'ordre', 'Description', 'Quand l\'utiliser'], rows: [
          ['Buy Market', 'Achète immédiatement au prix ask actuel', 'Quand on veut entrer tout de suite'],
          ['Sell Market', 'Vend immédiatement au prix bid actuel', 'Quand on veut entrer tout de suite'],
          ['Buy Limit', 'Achète à un prix inférieur au prix actuel', 'Quand on attend un retracement à la baisse'],
          ['Sell Limit', 'Vend à un prix supérieur au prix actuel', 'Quand on attend un retracement à la hausse'],
          ['Buy Stop', 'Achète à un prix supérieur au prix actuel', 'Quand on attend une cassure à la hausse'],
          ['Sell Stop', 'Vend à un prix inférieur au prix actuel', 'Quand on attend une cassure à la baisse']
        ]},
        { type: 'text', content: 'Les ordres en attente permettent d\'entrer en position à un niveau précis sans avoir à surveiller le graphique en permanence. Ils sont très utiles pour les traders qui ne peuvent pas rester devant l\'écran toute la journée.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Choisir le bon type d\'ordre améliore l\'exécution et la discipline. Un ordre Buy Limit permet d\'entrer à un meilleur prix qu\'un ordre au marché. Un ordre Buy Stop permet de capturer une cassure sans avoir à être présent.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['L\'EUR/USD est à 1,0850. Un trader veut acheter à 1,0820 (un support).', 'Il place un Buy Limit à 1,0820.', 'Le prix descend à 1,0820 : l\'ordre s\'exécute automatiquement.', 'Il a obtenu un meilleur prix d\'entrée que s\'il avait acheté à 1,0850.', 'Il place son Stop Loss à 1,0790 et son Take Profit à 1,0880.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader place un Buy Stop à 1,0900 (au-dessus d\'une résistance). Le prix monte à 1,0899 puis redescend. L\'ordre n\'est pas exécuté. Le trader râte le mouvement. Les ordres en attente ne garantissent pas l\'exécution : le prix doit atteindre le niveau exact.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Confondre Buy Limit et Buy Stop', 'Placer des ordres en attente sans Stop Loss', 'Oublier de supprimer les ordres en attente obsolètes', 'Utiliser un ordre au marché sur un actif volatil (slippage)'] },
        { type: 'summary', points: ['L\'ordre au marché exécute immédiatement', 'L\'ordre en attente s\'exécute à un niveau prédéfini', 'Buy Limit : acheter moins cher (retracement)', 'Buy Stop : acheter plus cher (cassure)', 'Les ordres en attente améliorent la discipline'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce qu\'un Buy Limit ?', options: ['Acheter immédiatement', 'Acheter à un prix inférieur au prix actuel', 'Vendre à un prix supérieur', 'Annuler un ordre'], correct: 1, explanation: 'Un Buy Limit est un ordre d\'achat placé à un prix inférieur au prix actuel. Il s\'exécute quand le prix descend à ce niveau.' },
          { question: 'Quand utiliser un Buy Stop ?', options: ['Pour acheter moins cher', 'Pour acheter sur une cassure à la hausse', 'Pour vendre', 'Pour annuler'], correct: 1, explanation: 'Un Buy Stop est placé au-dessus du prix actuel et s\'exécute quand le prix casse à la hausse, capturant un mouvement de cassure.' },
          { question: 'Quel risque avec un ordre au marché sur un actif volatil ?', options: ['Aucun', 'Slippage — exécution à un prix différent', 'Le marché ferme', 'Pas de risque'], correct: 1, explanation: 'Sur un actif volatil, un ordre au marché peut être exécuté à un prix différent de celui affiché (slippage), en raison de la rapidité des mouvements.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'L\'EUR/USD est à 1,0850. Vous voulez : <br>A. Acheter à 1,0820 (support) <br>B. Vendre à 1,0900 (résistance) <br>C. Acheter si le prix casse 1,0900 <br>Quel type d\'ordre utilisez-vous ?', correction: 'A. Buy Limit à 1,0820 (achat à un prix inférieur). <br>B. Sell Limit à 1,0900 (vente à un prix supérieur). <br>C. Buy Stop à 1,0900 (achat sur cassure à la hausse).' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai choisi le bon type d\'ordre', 'J\'ai placé un Stop Loss avec l\'ordre en attente', 'Je supprime les ordres en attente obsolètes', 'Je sais si j\'attends un retracement ou une cassure'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm3-l4', title: 'Ordres Buy et Sell',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Un ordre <strong>Buy</strong> ouvre une position d\'achat : vous gagnez si le prix monte. Un ordre <strong>Sell</strong> ouvre une position de vente : vous gagnez si le prix baisse. Buy = position longue, Sell = position courte (short).' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Quand vous cliquez Buy, vous achetez la devise de base et vendez la contrepartie. Quand vous cliquez Sell, vous vendez la devise de base et achetez la contrepartie. Sur l\'EUR/USD, Buy = acheter EUR / vendre USD. Sell = vendre EUR / acheter USD.' },
        { type: 'text', content: 'Le profit se calcule : <ul><li><strong>Buy</strong> : Profit = (Prix de sortie - Prix d\'entrée) × Taille</li><li><strong>Sell</strong> : Profit = (Prix d\'entrée - Prix de sortie) × Taille</li></ul>' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Comprendre Buy et Sell est la base du trading. Confondre les deux peut mener à ouvrir une position dans le mauvais sens. Sur le Forex, on peut vendre à découvert aussi facilement qu\'acheter, ce qui n\'est pas le cas sur tous les marchés.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['EUR/USD à 1,0850. Le trader anticipe une hausse.', 'Il clique Buy : position d\'achat à 1,0850.', 'Le prix monte à 1,0900. Profit = (1,0900 - 1,0850) × 10 (pour 1 lot) = 50 pips × 10$ = 500$.', 'Si le prix avait baissé à 1,0800, perte = (1,0850 - 1,0800) × 10 = 500$.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader veut vendre (Sell) mais clique Buy par erreur. Au lieu de gagner sur la baisse, il perd car le prix baisse. Toujours vérifier le sens de l\'ordre avant de valider.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Confondre Buy et Sell', 'Ne pas comprendre ce qu\'on achète et vend', 'Oublier que Sell = gagner si le prix baisse', 'Cliquer trop vite sans vérifier'] },
        { type: 'summary', points: ['Buy = position d\'achat, gain si le prix monte', 'Sell = position de vente, gain si le prix baisse', 'Sur EUR/USD, Buy = acheter EUR / vendre USD', 'Vérifier toujours le sens avant de valider', 'Le Forex permet de vendre aussi facilement qu\'acheter'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Quand ouvrez-vous une position Buy ?', options: ['Quand vous pensez que le prix va baisser', 'Quand vous pensez que le prix va monter', 'Quand le marché est fermé', 'Jamais'], correct: 1, explanation: 'Une position Buy (achat) est ouverte quand vous anticipez une hausse du prix.' },
          { question: 'Sur l\'EUR/USD, que faites-vous quand vous cliquez Sell ?', options: ['Acheter EUR, vendre USD', 'Vendre EUR, acheter USD', 'Acheter USD seulement', 'Vendre USD seulement'], correct: 1, explanation: 'Sur l\'EUR/USD, Sell = vendre la devise de base (EUR) et acheter la contrepartie (USD).' },
          { question: 'Comment calcule-t-on le profit d\'un Sell ?', options: ['(Sortie - Entrée) × Taille', '(Entrée - Sortie) × Taille', 'Entrée + Sortie', 'Entrée × Sortie'], correct: 1, explanation: 'Pour un Sell, le profit = (Prix d\'entrée - Prix de sortie) × Taille, car on gagne quand le prix de sortie est inférieur au prix d\'entrée.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Vous vendez (Sell) l\'EUR/USD à 1,0950 avec 0,1 lot. <br>1. Si le prix tombe à 1,0900, quel est votre profit en pips ? <br>2. En dollars (valeur du pip = 1$ pour 0,1 lot) ?', correction: '1. Profit = 1,0950 - 1,0900 = 0,0050 = 50 pips. <br>2. 50 pips × 1$ = 50$ de profit. La position Sell gagne quand le prix baisse.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai vérifié que je clique Buy ou Sell selon mon analyse', 'Je sais dans quel sens je veux trader', 'J\'ai vérifié le sens avant de valider', 'Je sais comment calculer mon profit'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm3-l5', title: 'Stop Loss et Take Profit',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Le <strong>Stop Loss</strong> ferme automatiquement une position quand le prix atteint un niveau de perte prédéfini. Le <strong>Take Profit</strong> ferme automatiquement une position quand le prix atteint un niveau de gain prédéfini. Ils sont essentiels pour la gestion du risque.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Le Stop Loss limite la perte maximale sur un trade. Sans Stop Loss, une position perdante peut entraîner la perte d\'une grande partie du capital. Le Take Profit sécurise les gains quand l\'objectif est atteint. Ces deux ordres doivent être définis <strong>avant</strong> d\'ouvrir la position, dans le cadre du plan de trading.' },
        { type: 'text', content: 'Le placement du Stop Loss dépend de la stratégie : sous un support (pour un Buy), au-dessus d\'une résistance (pour un Sell), ou à une distance technique (ATR, structure). Le Take Profit est placé au niveau de l\'objectif (résistance suivante, niveau de Fibonacci, R:R minimum).' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Ne pas utiliser de Stop Loss est l\'erreur la plus dangereuse en trading. Un seul trade sans Stop Loss peut détruire un compte. Le Take Profit aide à ne pas laisser l\'avidité prendre le dessus et à sécuriser les gains.' },
        { type: 'callout', variant: 'danger', title: 'Règle absolue', content: 'Ne JAMAIS ouvrir une position sans Stop Loss. Le Stop Loss n\'est pas optionnel — il est obligatoire pour chaque trade, sans exception.' },
        { type: 'heading', content: 'Illustration graphique' },
        { type: 'chart', title: 'Position Buy avec Stop Loss et Take Profit', props: {
          candles: [...(() => { let p = 1.08; const c = []; for (let i = 0; i < 16; i++) { const o = p; const ch = p + (Math.random() - 0.3) * 0.003; c.push({ o: +o.toFixed(4), c: +ch.toFixed(4), h: +(Math.max(o, ch) + Math.random() * 0.001).toFixed(4), l: +(Math.min(o, ch) - Math.random() * 0.001).toFixed(4) }); p = ch; } return c; })()],
          lines: [
            { y1: 1.0850, y2: 1.0850, color: '#00d4ff', label: 'Entrée', labelX: 0.95, labelY: 1.0850 },
            { y1: 1.0820, y2: 1.0820, color: '#ef5350', dashed: true, label: 'Stop Loss', labelX: 0.95, labelY: 1.0820 },
            { y1: 1.0910, y2: 1.0910, color: '#26a69a', dashed: true, label: 'Take Profit', labelX: 0.95, labelY: 1.0910 },
          ],
          annotations: [
            { type: 'arrow', candle: 2, price: 1.0850, direction: 'up', color: '#00d4ff', text: 'Buy' },
            { type: 'label', candle: 2, price: 1.0850, offsetY: 18, text: 'Entrée', color: '#00d4ff' },
          ]
        }},
        { type: 'text', content: 'Sur ce graphique : entrée Buy à 1,0850 (bleu), Stop Loss à 1,0820 (rouge, 30 pips de risque), Take Profit à 1,0910 (vert, 60 pips de gain potentiel). Le ratio R:R est de 1:2.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Achat EUR/USD à 1,0850.', 'Stop Loss à 1,0820 (30 pips de risque).', 'Take Profit à 1,0910 (60 pips de gain).', 'R:R = 1:2 (on risque 30 pour gagner 60).', 'Si le prix touque 1,0820 → perte de 30 pips. Si il touche 1,0910 → gain de 60 pips.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader ouvre un Buy sans Stop Loss. Le prix baisse de 100 pips. Il espère une remontée. Le prix baisse encore de 100 pips. Au total, il perd 200 pips. Avec un Stop Loss à 30 pips, il aurait perdu 30 pips et aurait pu prendre un autre trade.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Ne pas placer de Stop Loss', 'Déplacer le Stop Loss quand le prix s\'en approche', 'Placer le Stop Loss trop serré (bruit)', 'Placer le Stop Loss trop large (risque excessif)', 'Ne pas placer de Take Profit (avidité)'] },
        { type: 'summary', points: ['Le Stop Loss limite la perte maximale — obligatoire', 'Le Take Profit sécurise les gains', 'Les deux doivent être définis avant l\'ouverture', 'Le placement dépend de la stratégie et de la structure', 'Ne jamais déplacer le Stop Loss pour éviter d\'être touché'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Que fait le Stop Loss ?', options: ['Maximise le profit', 'Ferme la position à un niveau de perte prédéfini', 'Ouvre une position', 'Change l\'unité de temps'], correct: 1, explanation: 'Le Stop Loss ferme automatiquement la position quand le prix atteint un niveau de perte prédéfini, limitant le risque.' },
          { question: 'Quand définir le Stop Loss et le Take Profit ?', options: ['Après l\'ouverture', 'Avant l\'ouverture, dans le plan de trading', 'Jamais', 'Quand on perd'], correct: 1, explanation: 'Le Stop Loss et le Take Profit doivent être définis avant l\'ouverture de la position, dans le cadre du plan de trading.' },
          { question: 'Que faire si le prix s\'approche du Stop Loss ?', options: ['Le déplacer plus loin', 'Le supprimer', 'Ne rien faire — laisser le plan s\'exécuter', 'Fermer la position manuellement'], correct: 2, explanation: 'Si le Stop Loss est placé correctement, il faut le laisser s\'exécuter. Le déplacer ou le supprimer est un comportement émotionnel qui amplifie les pertes.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Vous achetez l\'EUR/USD à 1,0900. Vous voulez un R:R de 1:2 avec 40 pips de risque. <br>1. Où placez-vous le Stop Loss ? <br>2. Où placez-vous le Take Profit ?', correction: '1. Stop Loss = 1,0900 - 0,0040 = 1,0860 (40 pips sous l\'entrée). <br>2. Take Profit = 1,0900 + 0,0080 = 1,0980 (80 pips au-dessus, soit 2× le risque).' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai placé un Stop Loss avant l\'ouverture', 'J\'ai placé un Take Profit', 'Mon R:R est au moins 1:2', 'Je ne déplacerai pas le Stop Loss si le prix s\'approche', 'Mon Stop Loss est placé à un niveau technique, pas au hasard'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm3-l6', title: 'Taille des lots et calcul de la valeur d\'un pip',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'La <strong>taille de position</strong> (lot) détermine combien d\'argent vous engagez et combien vaut chaque pip de mouvement. 1 lot standard = 100 000 unités, 0,1 lot = 10 000 unités, 0,01 lot = 1 000 unités.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'La valeur d\'un pip dépend de la taille de position et de la paire. Pour l\'EUR/USD : 1 pip = 0,0001. Pour 1 lot (100 000 unités), 1 pip = 100 000 × 0,0001 = 10$. Pour 0,1 lot, 1 pip = 1$. Pour 0,01 lot, 1 pip = 0,10$.' },
        { type: 'text', content: 'La taille de position doit être calculée en fonction du risque accepté et de la distance du Stop Loss, pas choisie au hasard.' },
        { type: 'calculator', name: 'PipValue' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Une taille de position trop grande peut entraîner des pertes importantes même avec un Stop Loss. Une taille trop petite peut rendre les profits insignifiants. Calculer la bonne taille est essentiel pour respecter sa règle de risque (1-2% du capital).' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Capital : 10 000$. Risque accepté : 1% = 100$.', 'Stop Loss : 40 pips sur EUR/USD.', 'Valeur du pip pour 1 lot : 10$.', 'Taille = Risque / (Stop en pips × Valeur du pip) = 100 / (40 × 10) = 0,25 lot.', 'Avec 0,25 lot, 40 pips de perte = 40 × 2,5$ = 100$ = 1% du capital.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader avec 2000€ ouvre 1 lot sur EUR/USD avec un Stop de 50 pips. Risque = 50 × 10$ = 500$ = 25% du capital. C\'est 12,5 fois la règle de 1%. Un seul trade peut détruire le compte.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Choisir la taille de position au hasard', 'Ne pas calculer le risque en dollars', 'Utiliser une taille trop grande pour son capital', 'Ne pas adapter la taille à la distance du Stop Loss'] },
        { type: 'summary', points: ['1 lot = 100 000 unités, 0,1 lot = 10 000, 0,01 lot = 1 000', 'La valeur du pip dépend de la taille et de la paire', 'La taille se calcule : Risque / (Stop en pips × Valeur du pip)', 'Ne jamais choisir la taille au hasard', 'Adapter la taille à son capital et à son Stop Loss'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Combien d\'unités représente 1 lot standard ?', options: ['1 000', '10 000', '100 000', '1 000 000'], correct: 2, explanation: '1 lot standard représente 100 000 unités de la devise de base.' },
          { question: 'Combien vaut 1 pip pour 0,1 lot sur EUR/USD ?', options: ['0,10$', '1$', '10$', '100$'], correct: 1, explanation: '0,1 lot = 10 000 unités. 1 pip (0,0001) × 10 000 = 1$.' },
          { question: 'Comment calculer la taille de position ?', options: ['Au hasard', 'Risque / (Stop en pips × Valeur du pip)', 'Capital total / 2', 'Levier maximum'], correct: 1, explanation: 'Taille = Risque accepté / (Distance du Stop Loss en pips × Valeur du pip par lot).' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Capital : 5000€. Risque : 2%. Stop Loss : 50 pips sur EUR/USD. <br>1. Quel est le montant risqué ? <br>2. Quelle taille de position (valeur du pip = 10$/lot) ?', correction: '1. Risque = 5000 × 2% = 100€. <br>2. Taille = 100 / (50 × 10) = 0,2 lot. Avec 0,2 lot, 50 pips = 50 × 2$ = 100$ ≈ 100€ de perte, soit 2% du capital.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai calculé le montant risqué (% du capital)', 'J\'ai mesuré la distance du Stop Loss en pips', 'J\'ai calculé la taille de position', 'Je ne risque pas plus de 2% par trade'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm3-l7', title: 'Spread et coûts de transaction',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Les <strong>coûts de transaction</strong> en trading comprennent le spread, les commissions et les swaps. Ces coûts réduisent le profit et doivent être pris en compte dans tout calcul de rentabilité.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Le spread est le coût le plus visible : c\'est la différence entre le prix d\'achat et de vente. Sur un compte « Standard », le spread est variable et inclut la commission du broker. Sur un compte « RAW » ou « ECN », le spread est très serré (proche de zéro) mais une commission fixe est facturée.' },
        { type: 'table', headers: ['Type de compte', 'Spread typique EUR/USD', 'Commission', 'Avantage'], rows: [
          ['Standard', '1,0-2,0 pip', 'Incluse dans le spread', 'Simple, pas de frais séparé'],
          ['RAW/ECN', '0,0-0,5 pip', '3-7$ par lot par trade', 'Coût total plus bas pour les actifs'],
          ['Zero Spread', '0 pip', 'Plus élevée', 'Pas de spread variable']
        ]},
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Les coûts de transaction peuvent représenter une part significative du profit, surtout pour les traders qui font beaucoup de trades (scalpers, day traders). Un spread de 2 pips sur EUR/USD avec 10 trades par jour = 20 pips de coûts, soit 200$ pour 1 lot.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Un day trader fait 10 trades par jour sur EUR/USD.', 'Spread moyen : 1,5 pip. Coût par trade : 15$ (pour 1 lot).', 'Coût quotidien : 10 × 15 = 150$.', 'Coût mensuel (20 jours) : 3 000$.', 'Si son profit brut est de 4 000$, son profit net est de 1 000$. Les coûts représentent 75% du profit brut.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader choisit un compte Standard avec un spread de 2 pips sur EUR/USD. Il fait du scalping avec des objectifs de 3 pips. Sur chaque trade, le spread coûte 2 pips et il gagne 3 pips, soit un net de 1 pip. Mais le slippage et les variations de spread réduisent encore ce montant. Le scalping avec un spread élevé est rarement rentable.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Ignorer les coûts dans le calcul de rentabilité', 'Faire du scalping avec un spread élevé', 'Ne pas comparer les types de comptes', 'Oublier les swaps sur les positions overnight'] },
        { type: 'summary', points: ['Les coûts incluent spread, commission et swap', 'Le spread est le coût le plus visible', 'Les comptes RAW/ECN ont un spread serré mais une commission', 'Les coûts peuvent représenter une part importante du profit', 'Adapter son style de trading à ses coûts'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Quels sont les trois principaux coûts de transaction ?', options: ['Spread, commission, swap', 'Taxe, impôt, TVA', 'Achat, vente, attente', 'Bid, ask, volume'], correct: 0, explanation: 'Les trois principaux coûts sont le spread (écart bid/ask), la commission (frais fixe) et le swap (frais overnight).' },
          { question: 'Pourquoi le scalping est-il difficile avec un spread élevé ?', options: ['Parce que le marché est fermé', 'Parce que le spread consomme une grande partie du petit profit visé', 'Parce que c\'est interdit', 'Parce que le broker le bloque'], correct: 1, explanation: 'Le scalping vise de petits profits (quelques pips). Un spread élevé consomme une grande partie de ce profit, rendant le scalping difficile voire non rentable.' },
          { question: 'Quel type de compte a le spread le plus serré ?', options: ['Standard', 'RAW/ECN', 'Démo', 'Aucun'], correct: 1, explanation: 'Les comptes RAW/ECN ont un spread très serré (proche de zéro) mais facturent une commission séparée.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Vous faites 5 trades par jour sur EUR/USD avec 0,5 lot. Spread = 1,2 pip, commission = 3,5$/lot. <br>1. Coût du spread par trade ? <br>2. Commission par trade ? <br>3. Coût total par jour ?', correction: '1. 0,5 lot → valeur du pip = 5$. Spread = 1,2 × 5 = 6$. <br>2. Commission = 0,5 × 3,5 = 1,75$. <br>3. Coût par trade = 6 + 1,75 = 7,75$. Coût quotidien = 5 × 7,75 = 38,75$.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je connais le spread de mon actif', 'Je connais ma commission', 'J\'ai calculé mes coûts par trade', 'Mon style de trading est adapté à mes coûts'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm3-l8', title: 'Calcul du risque avant l\'ouverture d\'une position',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Avant d\'ouvrir une position, vous devez calculer exactement combien vous risquez de perdre. Ce calcul inclut : le montant en dollars, le pourcentage du capital, la taille de position et le ratio risque/rendement.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'La formule complète : <br>1. <strong>Montant risqué</strong> = Capital × Pourcentage de risque (ex: 10 000 × 1% = 100$) <br>2. <strong>Distance du Stop Loss</strong> en pips = |Entrée - Stop| / 0,0001 <br>3. <strong>Taille de position</strong> = Montant risqué / (Distance × Valeur du pip par lot) <br>4. <strong>Ratio R:R</strong> = Distance du TP / Distance du SL' },
        { type: 'calculator', name: 'PositionSize' },
        { type: 'calculator', name: 'RiskReward' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Calculer le risque avant d\'ouvrir une position est la compétence la plus importante en gestion du risque. Sans ce calcul, vous ne savez pas combien vous risquez. Un trader qui ne calcule pas son risque n\'a pas de gestion du risque.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Capital : 5 000$. Risque : 1% = 50$.', 'Entrée EUR/USD : 1,0850. Stop Loss : 1,0820. TP : 1,0910.', 'Distance SL = 30 pips. Distance TP = 60 pips.', 'R:R = 60/30 = 1:2. ✓', 'Taille = 50 / (30 × 10) = 0,17 lot.', 'Risque réel : 30 × 1,7$ = 51$ ≈ 1% du capital. ✓'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader ouvre une position sans calculer le risque. Il choisit 1 lot « parce que c\'est la taille standard ». Son Stop Loss est à 50 pips. Risque = 50 × 10$ = 500$. Son capital est de 2 000$. Il risque 25% sur un seul trade. C\'est 12,5 fois la règle de 2%.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Ne pas calculer le risque avant d\'ouvrir', 'Choisir la taille de position au hasard', 'Ne pas vérifier le R:R', 'Risquer plus de 2% du capital'] },
        { type: 'summary', points: ['Calculer le risque avant chaque position est obligatoire', 'Le risque = Capital × Pourcentage de risque', 'La taille = Risque / (Stop en pips × Valeur du pip)', 'Le R:R doit être au moins 1:2', 'Ne jamais risquer plus de 2% du capital par trade'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Quelle est la première étape du calcul du risque ?', options: ['Choisir la taille', 'Calculer le montant risqué (Capital × %)', 'Placer le TP', 'Ouvrir la position'], correct: 1, explanation: 'La première étape est de calculer le montant que vous êtes prêt à risquer : Capital × Pourcentage de risque (ex: 1-2%).' },
          { question: 'Quel R:R minimum est généralement recommandé ?', options: ['1:1', '1:2', '1:5', '1:10'], correct: 1, explanation: 'Un ratio risque/rendement minimum de 1:2 est généralement recommandé : on risque 1 pour gagner au moins 2.' },
          { question: 'Que faut-il calculer avant d\'ouvrir une position ?', options: ['Rien', 'Montant risqué, taille de position, R:R', 'La couleur du graphique', 'L\'heure'], correct: 1, explanation: 'Avant d\'ouvrir une position, il faut calculer le montant risqué, la taille de position et le ratio risque/rendement.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Capital : 8 000€. Risque : 1,5%. Entrée EUR/USD : 1,1000. SL : 1,0960. TP : 1,1080. <br>1. Montant risqué ? <br>2. Distance SL et TP en pips ? <br>3. R:R ? <br>4. Taille de position ?', correction: '1. Risque = 8 000 × 1,5% = 120€. <br>2. SL = 40 pips. TP = 80 pips. <br>3. R:R = 80/40 = 1:2. ✓ <br>4. Taille = 120 / (40 × 10) = 0,3 lot.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai calculé le montant risqué', 'J\'ai mesuré les distances SL et TP en pips', 'J\'ai vérifié que le R:R est au moins 1:2', 'J\'ai calculé la taille de position', 'Je ne risque pas plus de 2% de mon capital'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm3-l9', title: 'Erreurs d\'exécution courantes',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Les <strong>erreurs d\'exécution</strong> sont des erreurs techniques commises lors de l\'ouverture ou la fermeture d\'une position : mauvaise taille, mauvais sens (Buy au lieu de Sell), oubli de Stop Loss, ordre sur le mauvais instrument.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'list', items: [
          '<strong>Mauvaise taille de position</strong> : saisir 1,0 au lieu de 0,1 lot.',
          '<strong>Mauvais sens</strong> : cliquer Buy au lieu de Sell.',
          '<strong>Oubli de Stop Loss</strong> : ouvrir sans placer le SL.',
          '<strong>Mauvais instrument</strong> : ouvrir sur EUR/GBP au lieu d\'EUR/USD.',
          '<strong>Mauvaise unité de temps</strong> : analyser en H1 mais ouvrir en M1.',
          '<strong>Ordre non annulé</strong> : laisser un ordre en attente qui s\'exécute involontairement.',
          '<strong>Slippage non anticipé</strong> : ordre au marché pendant une annonce → exécution à un prix très différent.'
        ]},
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Les erreurs d\'exécution peuvent coûter cher. Une taille 10 fois trop grande peut détruire un compte. Un mauvais sens peut transformer un trade gagnant en perdant. La discipline d\'exécution est aussi importante que l\'analyse.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Un trader veut ouvrir 0,1 lot mais tape 1,0 lot.', 'Il ne vérifie pas avant de cliquer Buy.', 'Sa position est 10 fois trop grande. Risque = 10% au lieu de 1%.', 'Le Stop Loss est touché. Perte = 500$ au lieu de 50$.', 'Toujours vérifier le volume avant de valider.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader vérifie systématiquement chaque paramètre avant de valider : instrument, sens, volume, Stop Loss, Take Profit. Il ne fait jamais d\'erreur d\'exécution. Sa discipline lui évite des pertes inutiles.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Cliquer trop vite sans vérifier', 'Ne pas vérifier le volume', 'Confondre Buy et Sell', 'Oublier le Stop Loss', 'Laisser des ordres en attente non surveillés'] },
        { type: 'summary', points: ['Les erreurs d\'exécution sont des erreurs techniques évitables', 'Vérifier chaque paramètre avant de valider', 'Ne jamais cliquer trop vite', 'Supprimer les ordres en attente obsolètes', 'La discipline d\'exécution est aussi importante que l\'analyse'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Que faut-il vérifier avant de valider un ordre ?', options: ['Rien', 'Instrument, sens, volume, SL, TP', 'L\'heure', 'La météo'], correct: 1, explanation: 'Avant de valider, vérifiez : l\'instrument, le sens (Buy/Sell), le volume, le Stop Loss et le Take Profit.' },
          { question: 'Que faire des ordres en attente qui ne sont plus pertinents ?', options: ['Les garder', 'Les supprimer', 'Les modifier', 'Rien'], correct: 1, explanation: 'Les ordres en attente qui ne sont plus pertinents doivent être supprimés pour éviter une exécution involontaire.' },
          { question: 'Quel risque avec un ordre au marché pendant une annonce ?', options: ['Aucun', 'Slippage important', 'Le marché ferme', 'Pas de risque'], correct: 1, explanation: 'Pendant une annonce économique, la volatilité peut causer un slippage important : l\'ordre est exécuté à un prix très différent de celui demandé.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Listez les 5 paramètres à vérifier avant de valider un ordre. <br>Puis créez une routine de vérification.', correction: '1. Instrument (EUR/USD, pas EUR/GBP). <br>2. Sens (Buy ou Sell). <br>3. Volume (0,1 lot, pas 1,0). <br>4. Stop Loss (placé au bon niveau). <br>5. Take Profit (placé au bon niveau). Routine : lire chaque paramètre à voix haute avant de cliquer.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai vérifié l\'instrument', 'J\'ai vérifié le sens (Buy/Sell)', 'J\'ai vérifié le volume', 'J\'ai placé le Stop Loss', 'J\'ai placé le Take Profit', 'J\'ai supprimé les ordres en attente obsolètes'] },
        { type: 'note' }
      ]
    }
  ]
}
