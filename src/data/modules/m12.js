export default {
  id: 'm12', number: 12, title: 'Projet final',
  description: 'Évaluation complète : analyser un marché, identifier la structure, repérer les liquidités, définir un scénario et présenter un plan de trading.',
  badge: 'practice',
  intro: 'Le projet final évalue votre compréhension de l\'ensemble de la formation. Vous devez analyser un marché, identifier sa structure, repérer les zones importantes, définir des scénarios et présenter un plan de trading complet. L\'évaluation porte sur la compréhension et la discipline, pas uniquement sur la rentabilité simulée.',
  objectives: ['Appliquer tous les concepts appris', 'Analyser un marché de A à Z', 'Construire un plan de trading', 'Documenter et analyser les résultats'],
  lessons: [
    {
      id: 'm12-l1', title: 'Étape 1 : Analyse du marché et identification de la structure',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'La première étape du projet final consiste à <strong>analyser un marché</strong> (au choix : EUR/USD, GBP/JPY, DAX ou Or) et à <strong>identifier sa structure</strong> : tendance (haussière, baissière, consolidation), sommets et creux, BOS et CHoCH éventuels.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Vous devez : <ol><li>Choisir un actif et une unité de temps principale (D1 ou H4).</li><li>Identifier les sommets (SH) et les creux (SL) récents.</li><li>Déterminer la tendance : HH+HL (haussière), LH+LL (baissière), ou range.</li><li>Identifier les BOS et CHoCH éventuels.</li><li>Tracer les supports et résistances principaux.</li><li>Noter la volatilité (ATR) et la liquidité.</li></ol>' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'L\'analyse de la structure est la base de tout plan de trading. Sans comprendre la structure du marché, on ne peut pas identifier les zones d\'entrée, les liquidités, ni les scénarios. C\'est la compétence la plus importante du trader.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Actif : EUR/USD. Unité : D1.', 'SH récents : 1,0950, 1,0900. SL récents : 1,0800, 1,0850.', 'Structure : HH (1,0950 > 1,0900) et HL (1,0850 > 1,0800) = tendance haussière.', 'BOS : le prix a cassé 1,0900 à la hausse → BOS haussier.', 'Pas de CHoCH : la tendance haussière est intacte.', 'Support principal : 1,0850. Résistance principale : 1,0950.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader saute l\'analyse de structure et ouvre un trade « parce que le prix a l\'air de monter ». Sans analyse de structure, il ne sait pas où placer son Stop Loss, ni où se trouvent les liquidités. Le trade est basé sur une intuition, pas sur une analyse.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Sauter l\'analyse de structure', 'Ne pas identifier les SH et SL', 'Confondre tendance et range', 'Ne pas tracer les supports/résistances'] },
        { type: 'summary', points: ['Analyser la structure est la première étape', 'Identifier les SH, SL, HH, HL, LH, LL', 'Déterminer la tendance (haussière, baissière, range)', 'Identifier les BOS et CHoCH', 'Tracer les supports et résistances'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Quelle est la première étape du projet final ?', options: ['Ouvrir un trade', 'Analyser le marché et identifier la structure', 'Calculer le risque', 'Faire un quiz'], correct: 1, explanation: 'La première étape est d\'analyser le marché et d\'identifier sa structure (tendance, sommets, creux, BOS, CHoCH).' },
          { question: 'Que faut-il identifier en premier ?', options: ['Le Stop Loss', 'Les sommets et les creux', 'Le Take Profit', 'Le levier'], correct: 1, explanation: 'Il faut identifier les sommets (SH) et les creux (SL) pour déterminer la structure du marché et la tendance.' },
          { question: 'Pourquoi l\'analyse de structure est-elle essentielle ?', options: ['Elle ne l\'est pas', 'Elle est la base de tout plan de trading', 'Le broker l\'exige', 'Pour le fun'], correct: 1, explanation: 'L\'analyse de structure est la base de tout plan de trading. Sans comprendre la structure, on ne peut pas identifier les zones d\'entrée, les liquidités, ni les scénarios.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Choisissez un actif (EUR/USD, GBP/JPY, DAX ou Or). <br>1. Identifiez les 3 derniers SH et les 3 derniers SL en D1. <br>2. Déterminez la tendance. <br>3. Identifiez les BOS et CHoCH éventuels. <br>4. Tracez les supports et résistances.', correction: 'Répondez selon votre analyse : HH+HL = haussière, LH+LL = baissière, plats = range. Un BOS = cassure d\'un SH (haussier) ou SL (baissier). Un CHoCH = cassure d\'un SL en tendance haussière ou d\'un SH en tendance baissière. Les supports et résistances sont les niveaux où le prix a réagi plusieurs fois.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai choisi un actif et une unité de temps', 'J\'ai identifié les SH et SL', 'J\'ai déterminé la tendance', 'J\'ai identifié les BOS et CHoCH', 'J\'ai tracé les supports et résistances'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm12-l2', title: 'Étape 2 : Zones techniques, liquidités et scénarios',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'La deuxième étape consiste à <strong>repérer les zones techniques importantes</strong> (supports, résistances, FVG, order blocks), à <strong>identifier les liquidités</strong> (BSL, SSL, PDH, PDL) et à définir un <strong>scénario haussier</strong> et un <strong>scénario baissier</strong>.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Vous devez : <ol><li>Identifier les zones de liquidité externe (BSL au-dessus des sommets, SSL sous les creux).</li><li>Identifier les zones de liquidité interne (petits sommets et creux intermédiaires).</li><li>Repérer les FVG et order blocks éventuels.</li><li>Identifier le PDH et le PDL.</li><li>Définir un scénario haussier : que ferait le prix si la tendance haussière continue ?</li><li>Définir un scénario baissier : que ferait le prix si la tendance se renverse ?</li></ol>' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Définir deux scénarios (haussier et baissier) évite le biais de confirmation. Au lieu de chercher uniquement des signaux d\'achat, on prépare aussi le scénario de vente. Cela permet de réagir quelle que soit la direction du prix.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Scénario haussier : le prix retraced vers 1,0850 (support + HL), rebondit, BOS au-dessus de 1,0950.', 'Liquidité pertinente : BSL au-dessus de 1,0950 (sommets précédents).', 'FVG éventuel entre 1,0860 et 1,0880 (zone de déséquilibre).', 'Scénario baissier : le prix casse sous 1,0850 (CHoCH), SSL sous 1,0800.', 'Le trader prépare un plan pour chaque scénario.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader ne définit qu\'un scénario haussier. Quand le prix casse sous le support, il est surpris et n\'a pas de plan baissier. Il réagit émotionnellement au lieu de suivre un plan préparé.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Ne définir qu\'un seul scénario', 'Ne pas identifier les liquidités', 'Ignorer le scénario contraire', 'Ne pas repérer les FVG et order blocks'] },
        { type: 'summary', points: ['Repérer les zones techniques (supports, résistances, FVG, OB)', 'Identifier les liquidités (BSL, SSL, PDH, PDL)', 'Définir un scénario haussier ET un scénario baissier', 'Deux scénarios évitent le biais de confirmation', 'Préparer un plan pour chaque scénario'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Pourquoi définir deux scénarios ?', options: ['Pour le plaisir', 'Pour éviter le biais de confirmation et réagir dans les deux sens', 'Le broker l\'exige', 'Ce n\'est pas utile'], correct: 1, explanation: 'Définir deux scénarios (haussier et baissier) évite le biais de confirmation et permet de réagir quelle que soit la direction du prix.' },
          { question: 'Que faut-il identifier en termes de liquidités ?', options: ['Rien', 'BSL, SSL, PDH, PDL et liquidités internes', 'Le spread', 'Le levier'], correct: 1, explanation: 'Il faut identifier les liquidités externes (BSL au-dessus des sommets, SSL sous les creux), les PDH/PDL, et les liquidités internes (petits sommets et creux).' },
          { question: 'Que comprend un scénario haussier ?', options: ['Une baisse', 'Ce que ferait le prix si la tendance haussière continue', 'Un type d\'ordre', 'Rien'], correct: 1, explanation: 'Un scénario haussier décrit ce que ferait le prix si la tendance haussière continue : retracement, rebond, BOS, objectif.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Sur votre actif choisi : <br>1. Identifiez les BSL et SSL <br>2. Repérez les FVG et order blocks éventuels <br>3. Définissez un scénario haussier et un scénario baissier', correction: 'BSL = au-dessus des sommets récents. SSL = sous les creux récents. FVG = zones de déséquilibre entre 3 bougies. Order blocks = dernière bougie opposée avant une impulsion. Scénario haussier : retracement + rebond + BOS. Scénario baissier : CHoCH + cassure du support + baisse vers SSL.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai identifié les BSL et SSL', 'J\'ai repéré les FVG et order blocks', 'J\'ai identifié le PDH et PDL', 'J\'ai défini un scénario haussier', 'J\'ai défini un scénario baissier'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm12-l3', title: 'Étape 3 : Plan de trading, risque et invalidation',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'La troisième étape consiste à <strong>justifier une entrée</strong>, à <strong>calculer le risque</strong> (taille de position, Stop Loss, Take Profit, R:R) et à définir l\'<strong>invalidation</strong> du scénario.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Vous devez : <ol><li>Justifier l\'entrée : pourquoi entrer à ce niveau ? Quelles confluences ?</li><li>Calculer le risque : montant risqué (1-2% du capital), taille de position, Stop Loss, Take Profit.</li><li>Vérifier le R:R (minimum 1:2).</li><li>Définir l\'invalidation : à quel niveau le scénario est-il invalidé ?</li><li>Définir les horaires autorisés et les conditions de non-intervention.</li></ol>' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Un plan de trading complet inclut l\'entrée, la sortie, le risque et l\'invalidation. Sans ces éléments, le trade n\'est pas un trade planifié mais un pari. L\'invalidation est aussi importante que l\'entrée : elle définit quand admettre que le scénario est faux.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Entrée : acheter à 1,0850 (support + HL + FVG).', 'Confluences : support, trendline, FVG, RSI > 40.', 'Capital : 5 000€. Risque : 1% = 50€.', 'SL : 1,0820 (sous le support, 30 pips). TP : 1,0910 (60 pips). R:R = 1:2.', 'Taille : 50 / (30 × 10) = 0,17 lot.', 'Invalidation : cassure et clôture sous 1,0820.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader « achète parce que ça a l\'air haussier ». Pas de Stop Loss, pas de Take Profit, pas de calcul de risque, pas d\'invalidation. Ce n\'est pas un plan de trading, c\'est un pari.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Ne pas justifier l\'entrée', 'Ne pas calculer le risque', 'Ne pas définir l\'invalidation', 'Avoir un R:R inférieur à 1:1'] },
        { type: 'summary', points: ['Justifier l\'entrée avec des confluences', 'Calculer le risque (montant, taille, SL, TP)', 'Vérifier le R:R (minimum 1:2)', 'Définir l\'invalidation du scénario', 'Un plan complet = entrée + sortie + risque + invalidation'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Que doit inclure un plan de trading ?', options: ['Seulement l\'entrée', 'Entrée, sortie, risque et invalidation', 'Seulement le SL', 'Rien'], correct: 1, explanation: 'Un plan de trading complet inclut l\'entrée (justifiée), la sortie (SL et TP), le risque (taille calculée) et l\'invalidation (quand le scénario est faux).' },
          { question: 'Qu\'est-ce que l\'invalidation ?', options: ['Quand on gagne', 'Le niveau où le scénario est faux et le trade doit être fermé', 'Un type d\'ordre', 'Une stratégie'], correct: 1, explanation: 'L\'invalidation est le niveau ou la condition où le scénario est considéré comme faux et le trade doit être fermé.' },
          { question: 'Quel R:R minimum pour le projet final ?', options: ['1:0,5', '1:1', '1:2', '1:10'], correct: 2, explanation: 'Un R:R minimum de 1:2 est recommandé pour le projet final, comme pour toute stratégie de trading.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Rédigez votre plan de trading : <br>1. Entrée et justification (confluences) <br>2. Stop Loss et Take Profit <br>3. Taille de position (capital, % de risque) <br>4. R:R <br>5. Invalidation', correction: 'Le plan doit être complet et précis : entrée justifiée par au moins 2 confluences, SL à un niveau technique, TP avec R:R ≥ 1:2, taille calculée selon le risque (1-2%), invalidation définie par un niveau ou une condition claire.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai justifié mon entrée avec des confluences', 'J\'ai calculé mon risque (1-2%)', 'Mon R:R est au minimum 1:2', 'J\'ai défini l\'invalidation', 'Mon plan est complet et écrit'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm12-l4', title: 'Étape 4 : Documentation, analyse des résultats et grille d\'évaluation',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'La dernière étape consiste à <strong>documenter</strong> le trade, à <strong>analyser les résultats</strong> et à s\'auto-évaluer avec une <strong>grille d\'évaluation</strong>. L\'évaluation porte sur la compréhension et la discipline, pas uniquement sur la rentabilité.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'La grille d\'évaluation (barème sur 100 points) :' },
        { type: 'table', headers: ['Critère', 'Points', 'Description'], rows: [
          ['Analyse de structure', '20', 'SH/SL identifiés, tendance correcte, BOS/CHoCH'],
          ['Zones et liquidités', '20', 'BSL/SSL, FVG, OB, PDH/PDL identifiés'],
          ['Scénarios', '15', 'Scénario haussier ET baissier définis'],
          ['Plan de trading', '20', 'Entrée justifiée, SL, TP, taille, R:R'],
          ['Invalidation', '10', 'Niveau d\'invalidation défini et justifié'],
          ['Documentation', '10', 'Journal complet, analyse des résultats'],
          ['Discipline', '5', 'Respect du plan, gestion des émotions']
        ]},
        { type: 'text', content: 'Le projet évalue la <strong>compréhension</strong> (analyse correcte, concepts bien appliqués) et la <strong>discipline</strong> (respect du plan, gestion du risque), pas uniquement la rentabilité simulée. Un trade perdant avec une analyse correcte et une discipline parfaite vaut mieux qu\'un trade gagnant basé sur le hasard.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'La documentation et l\'auto-évaluation sont ce qui transforme une expérience en apprentissage. Sans analyse des résultats, on répète les mêmes erreurs. La grille d\'évaluation donne un cadre objectif pour s\'améliorer.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Le trader exécute 5 trades selon son plan.', 'Il documente chaque trade : raison, SL, TP, résultat, émotions.', 'Il calcule : taux de réussite, R:R moyen, profit factor, drawdown.', 'Il s\'auto-évalue avec la grille : analyse 18/20, zones 17/20, etc.', 'Il identifie ses points faibles et crée un plan d\'amélioration.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader fait 5 trades sans documenter. Il gagne 3 et perd 2. Il se dit « pas mal » mais ne sait pas pourquoi il a gagné ou perdu. Sans documentation, il ne peut pas s\'améliorer.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Ne pas documenter les trades', 'Ne pas s\'auto-évaluer', 'Se juger uniquement sur la rentabilité', 'Ne pas créer de plan d\'amélioration'] },
        { type: 'summary', points: ['Documenter chaque trade est essentiel', 'Analyser les résultats (taux, R:R, profit factor, drawdown)', 'S\'auto-évaluer avec la grille d\'évaluation', 'L\'évaluation porte sur la compréhension et la discipline', 'Un trade perdant bien analysé vaut mieux qu\'un gagnant au hasard'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Sur quoi porte l\'évaluation du projet final ?', options: ['La rentabilité uniquement', 'La compréhension et la discipline', 'Le nombre de trades', 'Le levier'], correct: 1, explanation: 'L\'évaluation porte sur la compréhension (analyse correcte, concepts bien appliqués) et la discipline (respect du plan, gestion du risque), pas uniquement sur la rentabilité.' },
          { question: 'Combien de points pour l\'analyse de structure ?', options: ['5', '10', '20', '50'], correct: 2, explanation: 'L\'analyse de structure représente 20 points sur 100 dans la grille d\'évaluation.' },
          { question: 'Que vaut mieux ?', options: ['Un trade gagnant au hasard', 'Un trade perdant avec une analyse correcte et une discipline parfaite', 'Un trade sans Stop Loss', 'Un trade avec un levier élevé'], correct: 1, explanation: 'Un trade perdant avec une analyse correcte et une discipline parfaite vaut mieux qu\'un trade gagnant basé sur le hasard. La compréhension et la discipline sont plus importantes que le résultat d\'un seul trade.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Après avoir exécuté 5 trades : <br>1. Documentez chaque trade <br>2. Calculez les métriques (taux, R:R, profit factor) <br>3. Auto-évaluez-vous avec la grille <br>4. Créez un plan d\'amélioration', correction: 'Documentation : date, paire, raison, SL, TP, résultat, émotions pour chaque trade. Métriques : taux de réussite, R:R moyen, profit factor, drawdown. Grille : notez chaque critère sur 100. Plan d\'amélioration : identifiez les points faibles et les actions pour les corriger.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai documenté tous mes trades', 'J\'ai calculé les métriques de performance', 'Je me suis auto-évalué avec la grille', 'J\'ai créé un plan d\'amélioration', 'Mon évaluation porte sur la compréhension et la discipline'] },
        { type: 'note' }
      ]
    }
  ]
}
