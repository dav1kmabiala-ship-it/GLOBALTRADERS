export default {
  id: 'm10', number: 10, title: 'Construire une stratégie',
  description: 'Marché, unités de temps, règles d\'entrée et de sortie, filtres, invalidation et documentation.',
  badge: 'practice',
  intro: 'Une stratégie de trading est un ensemble de règles claires qui définissent quand entrer, quand sortir et comment gérer le risque. Ce module vous apprend à construire une stratégie cohérente et à la documenter.',
  objectives: ['Définir les composants d\'une stratégie', 'Créer des règles d\'entrée et de sortie', 'Établir des conditions d\'invalidation', 'Documenter chaque décision'],
  lessons: [
    {
      id: 'm10-l1', title: 'Les composants d\'une stratégie',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Une <strong>stratégie de trading</strong> est un ensemble de règles qui définissent : le marché et les actifs, les unités de temps, les conditions d\'entrée, les conditions de sortie, le Stop Loss, le Take Profit, la taille de position, et les filtres de confirmation.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'table', headers: ['Composant', 'Question', 'Exemple'], rows: [
          ['Marché/actif', 'Que trader ?', 'EUR/USD, DAX, Or'],
          ['Unité de temps', 'Quelle période ?', 'D1 pour tendance, H1 pour entrée'],
          ['Conditions de marché', 'Quel contexte ?', 'Tendance haussière, volatilité modérée'],
          ['Règles d\'entrée', 'Quand entrer ?', 'Retracement sur EMA 50 + pattern de retournement'],
          ['Règles de sortie', 'Quand sortir ?', 'TP à la résistance, SL sous le support'],
          ['Taille de position', 'Combien risquer ?', '1% du capital par trade'],
          ['Filtres', 'Quelles confirmations ?', 'RSI > 50, pas d\'annonce à fort impact'],
          ['Invalidation', 'Quand abandonner ?', 'Cassure du support, CHoCH baissier']
        ]},
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Sans stratégie définie, on trade au hasard. Une stratégie apporte la structure, la cohérence et la mesurabilité. Elle permet de backtester, d\'améliorer et de reproduire les résultats. Une stratégie non écrite n\'est pas une stratégie.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Stratégie : Swing trading sur EUR/USD.', 'Tendance : D1 haussière (HH, HL).', 'Entrée : H1, retracement sur EMA 50 + marteau.', 'SL : sous l\'EMA 50 (ou sous le marteau).', 'TP : résistance suivante ou 2× le risque.', 'Filtre : RSI > 50, pas d\'annonce dans les 2h.', 'Taille : 1% du capital.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader « achète quand ça monte et vend quand ça descend ». Ce n\'est pas une stratégie : il n\'y a pas de règles définies, pas de Stop Loss, pas de Take Profit, pas de filtres. Le trader ne peut pas backtester ni améliorer.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Ne pas écrire sa stratégie', 'Avoir des règles floues (« j\'achète quand ça a l\'air bien »)', 'Ne pas définir d\'invalidation', 'Changer les règles en cours de trade'] },
        { type: 'summary', points: ['Une stratégie définit toutes les règles de trading', 'Marché, unité de temps, entrée, sortie, SL, TP, taille, filtres', 'Une stratégie doit être écrite', 'Sans stratégie, on trade au hasard', 'Une stratégie permet le backtest et l\'amélioration'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce qu\'une stratégie de trading ?', options: ['Un sentiment', 'Un ensemble de règles écrites', 'Un indicateur', 'Une plateforme'], correct: 1, explanation: 'Une stratégie de trading est un ensemble de règles claires et écrites qui définissent quand entrer, quand sortir et comment gérer le risque.' },
          { question: 'Pourquoi écrire sa stratégie ?', options: ['Pour le plaisir', 'Pour la backtester, l\'améliorer et la suivre', 'Le broker l\'exige', 'Ce n\'est pas nécessaire'], correct: 1, explanation: 'Écrire sa stratégie permet de la backtester (tester sur l\'historique), de l\'améliorer et de la suivre avec discipline.' },
          { question: 'Que sont les filtres de confirmation ?', options: ['Des indicateurs inutiles', 'Des conditions supplémentaires qui confirment le signal d\'entrée', 'Des types d\'ordres', 'Rien'], correct: 1, explanation: 'Les filtres de confirmation sont des conditions supplémentaires (RSI, tendance, absence d\'annonce) qui confirment le signal d\'entrée et augmentent sa fiabilité.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Écrivez les 8 composants de votre stratégie : <br>1. Marché/actif <br>2. Unité de temps <br>3. Conditions de marché <br>4. Règles d\'entrée <br>5. Règles de sortie <br>6. Taille de position <br>7. Filtres <br>8. Invalidation', correction: 'Exemple : 1. EUR/USD. 2. D1/H1. 3. Tendance haussière. 4. Retracement sur EMA 50 + marteau. 5. SL sous l\'EMA 50, TP à la résistance. 6. 1% du capital. 7. RSI > 50, pas d\'annonce. 8. Cassure du support.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai défini le marché et l\'unité de temps', 'J\'ai des règles d\'entrée claires', 'J\'ai des règles de sortie claires', 'J\'ai défini la taille de position', 'J\'ai des filtres de confirmation', 'J\'ai défini l\'invalidation', 'Ma stratégie est écrite'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm10-l2', title: 'Règles d\'entrée et de sortie',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Les <strong>règles d\'entrée</strong> définissent exactement quand et comment ouvrir une position. Les <strong>règles de sortie</strong> définissent quand et comment la fermer — que ce soit en gain (Take Profit) ou en perte (Stop Loss).' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Les règles d\'entrée doivent être précises et objectives : « acheter quand le prix touche l\'EMA 50 en H1 après une confirmation par un marteau, dans une tendance haussière D1 ». Les règles de sortie incluent : le Stop Loss (niveau de perte), le Take Profit (niveau de gain), et les règles de sortie anticipée (si les conditions changent).' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Des règles d\'entrée et de sortie précises permettent la reproductibilité. Si les règles sont claires, on peut les backtester, les mesurer et les améliorer. Des règles floues mènent à des décisions émotionnelles.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Règle d\'entrée : prix touche l\'EMA 50 en H1 + marteau + RSI > 40.', 'Règle de sortie (SL) : sous la mèche basse du marteau.', 'Règle de sortie (TP) : résistance suivante ou 2× le risque.', 'Règle de sortie anticipée : si CHoCH baissier en H1, fermer la position.', 'Toutes les règles sont précises et objectives.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Règle d\'entrée : « j\'achète quand ça a l\'air haussier ». Cette règle est subjective : « avoir l\'air haussier » signifie des choses différentes selon les jours. On ne peut ni backtester ni reproduire.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Avoir des règles floues ou subjectives', 'Ne pas définir de sortie anticipée', 'Changer les règles en cours de trade', 'Ne pas définir le SL avant l\'entrée'] },
        { type: 'summary', points: ['Les règles d\'entrée doivent être précises et objectives', 'Les règles de sortie incluent SL, TP et sortie anticipée', 'Des règles claires permettent la reproductibilité', 'Des règles floues mènent à des décisions émotionnelles', 'Ne jamais changer les règles en cours de trade'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Que doivent être les règles d\'entrée ?', options: ['Subjectives', 'Précises et objectives', 'Changeantes', 'Inutiles'], correct: 1, explanation: 'Les règles d\'entrée doivent être précises et objectives pour permettre la reproductibilité et le backtest.' },
          { question: 'Que comprennent les règles de sortie ?', options: ['Seulement le TP', 'SL, TP et sortie anticipée', 'Seulement le SL', 'Rien'], correct: 1, explanation: 'Les règles de sortie comprennent le Stop Loss (perte), le Take Profit (gain) et les règles de sortie anticipée (si les conditions changent).' },
          { question: 'Pourquoi éviter les règles subjectives ?', options: ['Elles sont meilleures', 'Elles ne permettent ni backtest ni reproductibilité', 'Le broker les refuse', 'Ce n\'est pas un problème'], correct: 1, explanation: 'Les règles subjectives (« quand ça a l\'air bien ») ne peuvent pas être backtestées ni reproduites. Elles mènent à des décisions émotionnelles.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Écrivez vos règles d\'entrée et de sortie de manière précise : <br>1. Quels sont les critères exacts d\'entrée ? <br>2. Où est le SL ? <br>3. Où est le TP ? <br>4. Quand sortez-vous anticipativement ?', correction: 'Les critères doivent être mesurables : niveaux de prix, indicateurs avec valeurs précises, patterns identifiés. Le SL et le TP doivent être à des niveaux techniques. La sortie anticipée doit être déclenchée par un événement précis (cassure de structure, changement de tendance).' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Mes règles d\'entrée sont précises', 'Mon SL est à un niveau technique', 'Mon TP est à un niveau technique', 'J\'ai une règle de sortie anticipée', 'Je ne change pas les règles en cours de trade'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm10-l3', title: 'Conditions d\'invalidation et de non-intervention',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Les <strong>conditions d\'invalidation</strong> définissent quand un trade n\'est plus valide (et doit être fermé). Les <strong>conditions de non-intervention</strong> définissent quand NE PAS trader (annonces, fins de session, faible volatilité).' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'L\'invalidation est aussi importante que l\'entrée : elle définit quand admettre que le trade est mauvais. Exemples : cassure du support (pour un Buy), CHoCH, clôture d\'une bougie au-delà du niveau. Les conditions de non-intervention incluent : annonces à fort impact, fins de session, faible volatilité (spread large), jours de marché anormal.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Savoir quand ne pas trader est aussi important que savoir quand trader. Les conditions de non-intervention évitent les trades à risque élevé. Les conditions d\'invalidation évitent de garder des trades perdants trop longtemps.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Invalidation : si le prix casse et clôture sous le support, le trade est invalidé.', 'Non-intervention : ne pas trader 30 min avant et après une annonce à fort impact.', 'Non-intervention : ne pas trader après 18h (fin de session européenne, liquidité réduite).', 'Non-intervention : ne pas trader si le spread est anormalement large.', 'Ces règles protègent le capital.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader n\'a pas de condition d\'invalidation. Il garde un trade perdant « en attendant que ça revienne ». Sans invalidation définie, il n\'a pas de limite et la perte s\'aggrave.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Ne pas définir d\'invalidation', 'Ne pas définir de conditions de non-intervention', 'Trader pendant les annonces', 'Garder des trades invalidés en espérant'] },
        { type: 'summary', points: ['L\'invalidation définit quand un trade n\'est plus valide', 'La non-intervention définit quand NE PAS trader', 'Invalidation : cassure de support, CHoCH, clôture au-delà du niveau', 'Non-intervention : annonces, fins de session, spread large', 'Savoir ne pas trader est aussi important que savoir trader'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce que l\'invalidation ?', options: ['Quand on gagne', 'Quand un trade n\'est plus valide et doit être fermé', 'Un type d\'ordre', 'Une stratégie'], correct: 1, explanation: 'L\'invalidation définit les conditions sous lesquelles un trade n\'est plus valide et doit être fermé (ex: cassure du support pour un Buy).' },
          { question: 'Quand ne faut-il pas trader ?', options: ['Toujours', 'Pendant les annonces à fort impact, fins de session, spread large', 'Jamais', 'Le matin'], correct: 1, explanation: 'Les conditions de non-intervention incluent : pendant les annonces à fort impact, en fin de session (liquidité réduite), et quand le spread est anormalement large.' },
          { question: 'Pourquoi définir une invalidation ?', options: ['Pour le plaisir', 'Pour savoir quand fermer un trade perdant', 'Le broker l\'exige', 'Ce n\'est pas utile'], correct: 1, explanation: 'L\'invalidation permet de savoir quand fermer un trade perdant sans attendre que « ça revienne », limitant ainsi les pertes.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Définissez : <br>1. Vos conditions d\'invalidation pour un trade d\'achat <br>2. Vos conditions de non-intervention <br>3. Vos horaires autorisés', correction: '1. Invalidation : cassure et clôture sous le support, ou CHoCH baissier. <br>2. Non-intervention : pas de trading 30 min avant/après une annonce à fort impact, pas de trading en fin de session. <br>3. Horaires : 9h-12h et 14h30-16h (heure de Paris), par exemple.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai défini mes conditions d\'invalidation', 'J\'ai défini mes conditions de non-intervention', 'Je ne trade pas pendant les annonces', 'J\'ai des horaires de trading définis'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm10-l4', title: 'Documentation et exemples de stratégies',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'La <strong>documentation</strong> consiste à écrire chaque décision de trading : pourquoi on entre, pourquoi on sort, ce qu\'on a observé. Sans documentation, on ne peut ni apprendre ni améliorer.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Voici deux exemples de stratégies pédagogiques :' },
        { type: 'callout', variant: 'info', title: 'Stratégie 1 : Swing Trading Tendance', content: '<strong>Hypothèse</strong> : Dans une tendance haussière D1, les retracements sur l\'EMA 50 offrent des opportunités d\'achat. <br><strong>Règles</strong> : D1 haussier (HH, HL), H1 prix touche l\'EMA 50, pattern de retournement (marteau, engulfing), RSI > 40. SL sous l\'EMA 50, TP à la résistance ou 2× le risque. <br><strong>Résultats mesurés (hypothétiques)</strong> : Taux de réussite 55%, R:R moyen 1:2, profit factor 2.4. Drawdown max 8%.' },
        { type: 'callout', variant: 'info', title: 'Stratégie 2 : Cassure de Range', content: '<strong>Hypothèse</strong> : Après une consolidation prolongée, la cassure du range offre une opportunité de continuation. <br><strong>Règles</strong> : Range identifié sur H4 (au moins 3 tests de chaque côté), cassure confirmée (clôture au-delà), retest de l\'ancien niveau. SL sous le retest, TP à 2× la hauteur du range. <br><strong>Résultats mesurés (hypothétiques)</strong> : Taux de réussite 45%, R:R moyen 1:2.5, profit factor 2.0. Drawdown max 12%.' },
        { type: 'callout', variant: 'warning', title: 'Important', content: 'Ces exemples sont pédagogiques. Les résultats hypothétiques ne garantissent pas les résultats futurs. Toute stratégie doit être backtestée et testée en démo avant d\'être utilisée en réel.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'La documentation permet de mesurer, comparer et améliorer. Les exemples montrent comment structurer une stratégie avec des hypothèses claires, des règles précises et des résultats mesurés.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Un trader documente sa stratégie de swing trading.', 'Il note chaque trade : date, paire, raison, SL, TP, résultat.', 'Après 50 trades, il calcule : taux de réussite, R:R moyen, profit factor.', 'Il identifie que les trades le matin sont plus rentables que l\'après-midi.', 'Il ajuste ses horaires et améliore ses résultats.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader ne documente rien. Il ne sait pas quel setup fonctionne, quelles heures sont rentables, ni quel est son taux de réussite. Il ne peut pas améliorer car il ne mesure pas.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Ne pas documenter', 'Ne pas séparer hypothèses, règles et résultats', 'Supposer que les résultats passés garantissent les résultats futurs', 'Ne pas ajuster après l\'analyse'] },
        { type: 'summary', points: ['La documentation enregistre chaque décision', 'Séparer hypothèses, règles et résultats mesurés', 'Les résultats passés ne garantissent pas les résultats futurs', 'La documentation permet de mesurer et d\'améliorer', 'Toute stratégie doit être backtestée avant le réel'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Que faut-il documenter ?', options: ['Rien', 'Chaque décision : raison d\'entrée, SL, TP, résultat', 'Seulement les gains', 'Seulement les pertes'], correct: 1, explanation: 'Il faut documenter chaque décision : la raison d\'entrée, le SL, le TP, le résultat et les observations. Cela permet de mesurer et d\'améliorer.' },
          { question: 'Les résultats passés garantissent-ils les résultats futurs ?', options: ['Oui', 'Non', 'Parfois', 'Toujours'], correct: 1, explanation: 'Les résultats passés ne garantissent jamais les résultats futurs. Les conditions de marché changent et une stratégie peut devenir moins performante.' },
          { question: 'Que faut-il faire avant d\'utiliser une stratégie en réel ?', options: ['Rien', 'La backtester et la tester en démo', 'L\'utiliser immédiatement', 'Augmenter le levier'], correct: 1, explanation: 'Avant d\'utiliser une stratégie en réel, il faut la backtester (tester sur l\'historique) et la tester en démo (compte de démonstration).' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Créez une fiche de stratégie avec : <br>1. Hypothèse <br>2. Règles d\'entrée <br>3. Règles de sortie <br>4. Conditions d\'invalidation <br>5. Comment vous allez mesurer les résultats', correction: 'Exemple : 1. Les retracements sur EMA 50 dans une tendance haussière offrent des opportunités. 2. D1 haussier + H1 prix sur EMA 50 + marteau + RSI > 40. 3. SL sous l\'EMA 50, TP à 2× le risque. 4. Cassure sous l\'EMA 50. 5. Journal de 50 trades avec taux de réussite, R:R moyen, profit factor.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai écrit mon hypothèse', 'J\'ai défini mes règles d\'entrée et de sortie', 'J\'ai défini l\'invalidation', 'Je documente chaque trade', 'Je mesure mes résultats régulièrement'] },
        { type: 'note' }
      ]
    }
  ]
}
