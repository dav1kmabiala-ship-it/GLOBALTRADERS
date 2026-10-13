export default {
  id: 'm11', number: 11, title: 'Backtesting et compte démo',
  description: 'Backtesting, forward testing, biais, taux de réussite, espérance, profit factor et drawdown maximal.',
  badge: 'practice',
  intro: 'Le backtesting et le compte démo sont les étapes entre l\'apprentissage et le trading réel. Ce module vous apprend à tester une stratégie, à mesurer ses performances et à comprendre la différence entre performance historique et future.',
  objectives: ['Comprendre le backtesting et le forward testing', 'Calculer les métriques de performance', 'Identifier les biais', 'Distinguer performance historique et future'],
  lessons: [
    {
      id: 'm11-l1', title: 'Backtesting, forward testing et démo',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Le <strong>backtesting</strong> teste une stratégie sur des données historiques. Le <strong>forward testing</strong> teste la stratégie en temps réel sur un compte démo. Le <strong>trading en démo</strong> permet de trader avec de l\'argent virtuel pour s\'entraîner.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'table', headers: ['Méthode', 'Description', 'Avantages', 'Limites'], rows: [
          ['Backtesting', 'Test sur données historiques', 'Rapide, beaucoup de données', 'Biais de rétrospection, pas d\'émotion'],
          ['Forward testing', 'Test en temps réel sur démo', 'Conditions réelles, émotions', 'Lent, dépend du marché actuel'],
          ['Trading démo', 'Trading avec argent virtuel', 'Aucun risque financier', 'Pas la même psychologie qu\'en réel']
        ]},
        { type: 'text', content: 'Le backtesting est rapide mais ne reproduit pas les émotions du trading réel. Le forward testing est lent mais plus réaliste. Le trading en démo est l\'étape finale avant le réel, mais la psychologie n\'est pas la même car il n\'y a pas de risque réel.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Passer du réel sans tester revient à jouer au casino. Le backtesting vérifie que la stratégie a fonctionné dans le passé. Le forward testing vérifie qu\'elle fonctionne dans les conditions actuelles. La démo permet de pratiquer l\'exécution.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Un trader backteste sa stratégie sur 200 trades historiques.', 'Résultat : 55% de réussite, R:R 1:2, profit factor 2.4.', 'Il forward teste sur démo pendant 1 mois.', 'Résultat : 50% de réussite (légèrement inférieur au backtest).', 'Il ajuste et passe en réel avec une taille réduite.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader apprend une stratégie et passe directement en réel sans tester. Il découvre que la stratégie ne fonctionne pas dans les conditions actuelles. Il perd de l\'argent qu\'il aurait pu économiser en testant d\'abord.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Passer en réel sans tester', 'Faire confiance au backtest sans forward tester', 'Supposer que la démo = le réel', 'Ne pas tester suffisamment de trades'] },
        { type: 'summary', points: ['Le backtesting teste sur l\'historique (rapide mais biaisé)', 'Le forward testing teste en temps réel sur démo', 'La démo permet de pratiquer sans risque', 'Chaque méthode a ses avantages et limites', 'Toujours tester avant le réel'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce que le backtesting ?', options: ['Trader en réel', 'Tester une stratégie sur des données historiques', 'Un type d\'indicateur', 'Un compte démo'], correct: 1, explanation: 'Le backtesting consiste à tester une stratégie sur des données historiques pour évaluer sa performance passée.' },
          { question: 'Quelle limite principale du backtesting ?', options: ['Il est trop rapide', 'Il ne reproduit pas les émotions et peut être biaisé', 'Il est trop cher', 'Il est interdit'], correct: 1, explanation: 'Le backtesting ne reproduit pas les émotions du trading réel et peut être biaisé par la rétrospection (on connaît l\'historique).' },
          { question: 'Pourquoi la démo n\'est-elle pas identique au réel ?', options: ['Parce que le broker change les prix', 'Parce qu\'il n\'y a pas de risque réel, donc pas la même psychologie', 'Parce que la démo est fermée', 'Parce que c\'est trop lent'], correct: 1, explanation: 'En démo, il n\'y a pas de risque financier réel, donc la psychologie (peur, avidité) n\'est pas la même qu\'en réel avec de l\'argent vrai.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Vous avez une stratégie. <br>1. Combien de trades backtestez-vous ? <br>2. Combien de temps forward testez-vous ? <br>3. Quand passez-vous en réel ?', correction: '1. Au moins 100-200 trades pour avoir une taille d\'échantillon significative. <br>2. Au moins 1-3 mois en forward testing. <br>3. Quand le forward testing confirme le backtest avec des résultats acceptables, et en commençant avec une taille réduite.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai backtesté au moins 100 trades', 'J\'ai forward testé au moins 1 mois', 'Les résultats du forward test confirment le backtest', 'Je commence en réel avec une taille réduite'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm11-l2', title: 'Biais de sélection et de rétrospection',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Le <strong>biais de sélection</strong> consiste à choisir uniquement les exemples qui confirment la stratégie. Le <strong>biais de rétrospection</strong> consiste à adapter la stratégie à l\'historique (suroptimisation), ce qui la rend inefficace sur les données futures.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Le biais de rétrospection (overfitting) est le piège n°1 du backtesting : on ajuste les paramètres (EMA 20, 21, 22, 23...) jusqu\'à trouver la combinaison qui marche le mieux sur l\'historique. Mais cette combinaison « parfaite » sur le passé ne marchera pas sur le futur car elle a été ajustée aux données passées, pas aux conditions futures.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Une stratégie suroptimisée peut paraître parfaite en backtest et échouer en réel. Comprendre ces biais évite de faire confiance à des résultats trompeurs. La règle : plus une stratégie a de paramètres ajustés, plus elle risque d\'être suroptimisée.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Un trader teste EMA 20, 21, 22, 23, 24, 25 sur l\'historique.', 'EMA 23 donne le meilleur résultat. Il l\'utilise.', 'Mais EMA 23 était « la meilleure » par hasard sur ces données.', 'En forward testing, EMA 23 ne fonctionne pas mieux que EMA 20.', 'La suroptimisation a créé une illusion de performance.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader teste sa stratégie avec des paramètres simples (EMA 50, RSI 14) sans les ajuster. Les résultats sont moins spectaculaires en backtest mais plus stables en forward testing. La simplicité évite la suroptimisation.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Ajuster les paramètres jusqu\'au meilleur résultat', 'Choisir uniquement les périodes favorables', 'Ignorer les biais', 'Faire confiance à un backtest suroptimisé'] },
        { type: 'summary', points: ['Le biais de sélection : choisir les exemples favorables', 'Le biais de rétrospection : adapter la stratégie à l\'historique', 'La suroptimisation crée une illusion de performance', 'Plus de paramètres = plus de risque de suroptimisation', 'La simplicité évite la suroptimisation'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce que la suroptimisation ?', options: ['Une bonne pratique', 'Adapter la stratégie à l\'historique jusqu\'à la rendre inefficace sur le futur', 'Un type d\'indicateur', 'Une stratégie'], correct: 1, explanation: 'La suroptimisation (overfitting) consiste à ajuster les paramètres de la stratégie jusqu\'à obtenir le meilleur résultat sur l\'historique, mais ce résultat ne se reproduira pas sur le futur.' },
          { question: 'Comment éviter la suroptimisation ?', options: ['Ajuster plus de paramètres', 'Utiliser des paramètres simples et ne pas les ajuster', 'Tester sur une seule période', 'Ignorer le backtest'], correct: 1, explanation: 'Pour éviter la suroptimisation, on utilise des paramètres simples (standards) sans les ajuster, et on teste sur plusieurs périodes différentes.' },
          { question: 'Pourquoi un backtest suroptimisé est-il trompeur ?', options: ['Il est parfait', 'Il montre une performance qui ne se reproduira pas en réel', 'Il est trop lent', 'Il est interdit'], correct: 1, explanation: 'Un backtest suroptimisé montre une performance excellente sur le passé, mais cette performance ne se reproduira pas sur le futur car les paramètres ont été ajustés aux données passées.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Vous backtestez une stratégie avec EMA 50 et RSI 14. <br>1. Êtes-vous tenté d\'ajuster les paramètres ? <br>2. Que devez-vous faire à la place ?', correction: '1. La tentation de tester EMA 49, 51, etc. est le biais de rétrospection. <br>2. Gardez les paramètres standards (50 et 14). Testez sur plusieurs périodes et plusieurs actifs pour vérifier la robustesse, pas l\'ajustement parfait.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'utilise des paramètres simples et standards', 'Je ne ajuste pas les paramètres pour optimiser', 'Je teste sur plusieurs périodes', 'Je suis conscient des biais de backtesting'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm11-l3', title: 'Métriques de performance : taux de réussite, gain et perte moyens',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Le <strong>taux de réussite</strong> est le pourcentage de trades gagnants. Le <strong>gain moyen</strong> est le profit moyen d\'un trade gagnant. La <strong>perte moyenne</strong> est la perte moyenne d\'un trade perdant. Ces métriques sont la base de l\'évaluation d\'une stratégie.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Le taux de réussite seul ne suffit pas : une stratégie avec 90% de réussite mais un R:R de 1:0,1 peut être perdante. Il faut combiner le taux de réussite avec le gain moyen et la perte moyenne pour calculer l\'espérance mathématique.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Ces métriques permettent de savoir si une stratégie est rentable. Sans les calculer, on ne sait pas si on gagne ou perd de l\'argent à long terme. Elles sont la base du journal de backtesting.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Sur 100 trades : 55 gagnants, 45 perdants. Taux de réussite = 55%.', 'Gain moyen = 60 pips. Perte moyenne = 30 pips.', 'Gain total = 55 × 60 = 3 300 pips. Perte totale = 45 × 30 = 1 350 pips.', 'Net = 3 300 - 1 350 = +1 950 pips. La stratégie est rentable.', 'Même avec 45% de réussite, elle serait rentable (45 × 60 = 2 700 > 55 × 30 = 1 650).'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Une stratégie avec 80% de réussite mais un gain moyen de 10 pips et une perte moyenne de 50 pips. Sur 100 trades : 80 × 10 = 800 pips gagnés, 20 × 50 = 1000 pips perdus. Net = -200 pips. La stratégie est perdante malgré 80% de réussite.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Ne regarder que le taux de réussite', 'Ne pas calculer le gain et la perte moyens', 'Ignorer l\'espérance mathématique', 'Ne pas tenir compte des coûts'] },
        { type: 'summary', points: ['Le taux de réussite = % de trades gagnants', 'Le gain moyen et la perte moyenne sont tout aussi importants', 'Le taux de réussite seul ne suffit pas', 'Une stratégie à 80% de réussite peut être perdante', 'Il faut combiner ces métriques pour évaluer la rentabilité'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Une stratégie avec 80% de réussite est-elle toujours rentable ?', options: ['Oui', 'Non, si la perte moyenne est très supérieure au gain moyen', 'Jamais', 'Toujours'], correct: 1, explanation: 'Une stratégie avec 80% de réussite peut être perdante si la perte moyenne est très supérieure au gain moyen. Il faut combiner le taux de réussite avec le gain et la perte moyens.' },
          { question: 'Que faut-il calculer en plus du taux de réussite ?', options: ['Rien', 'Le gain moyen et la perte moyenne', 'Le spread', 'L\'heure'], correct: 1, explanation: 'Il faut calculer le gain moyen et la perte moyenne en plus du taux de réussite pour évaluer la rentabilité d\'une stratégie.' },
          { question: 'Une stratégie à 40% de réussite peut-elle être rentable ?', options: ['Jamais', 'Oui, si le R:R est suffisant (ex: 1:3)', 'Seulement le matin', 'Non'], correct: 1, explanation: 'Une stratégie à 40% de réussite peut être rentable si le ratio risque/rendement est suffisant. Avec un R:R de 1:3, 40% de réussite suffit largement.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Sur 50 trades : 25 gagnants (gain moyen 40 pips) et 25 perdants (perte moyenne 20 pips). <br>1. Taux de réussite ? <br>2. Gain total et perte totale ? <br>3. Net ?', correction: '1. Taux de réussite = 25/50 = 50%. <br>2. Gain total = 25 × 40 = 1 000 pips. Perte totale = 25 × 20 = 500 pips. <br>3. Net = 1 000 - 500 = +500 pips. La stratégie est rentable.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je calcule le taux de réussite', 'Je calcule le gain moyen', 'Je calcule la perte moyenne', 'Je calcule le net (gain total - perte totale)'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm11-l4', title: 'Espérance mathématique et profit factor',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'L\'<strong>espérance mathématique</strong> est le gain ou perte moyen attendu par trade. Le <strong>profit factor</strong> est le rapport entre le profit total et la perte totale. Ces deux métriques résument la rentabilité d\'une stratégie.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: '<strong>Espérance</strong> = (Taux de réussite × Gain moyen) - (Taux d\'échec × Perte moyenne). <br>Exemple : (0,55 × 60) - (0,45 × 30) = 33 - 13,5 = +19,5 pips par trade. <br><strong>Profit factor</strong> = Profit total / Perte totale. <br>Exemple : 3 300 / 1 350 = 2,44. Un profit factor > 1 = rentable. > 2 = bon.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'L\'espérance et le profit factor sont les deux métriques les plus importantes pour évaluer une stratégie. L\'espérance donne le gain/perte par trade. Le profit factor donne le rapport gain/perte global. Ensemble, elles résument la rentabilité.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Stratégie A : 55% réussite, gain 60, perte 30. Espérance = +19,5 pips/trade. PF = 2,44.', 'Stratégie B : 45% réussite, gain 80, perte 30. Espérance = (0,45 × 80) - (0,55 × 30) = 36 - 16,5 = +19,5 pips/trade. PF = 2,18.', 'Les deux stratégies ont la même espérance mais des profils différents.', 'La stratégie A a un meilleur profit factor. La B a un meilleur R:R.', 'Le choix dépend du style de trading préféré.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Une stratégie avec un profit factor de 0,8 (perte totale > profit total). L\'espérance est négative. Même avec 60% de réussite, la stratégie perd de l\'argent car les pertes sont trop grandes par rapport aux gains.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Ne pas calculer l\'espérance', 'Ne pas calculer le profit factor', 'Ignorer ces métriques au profit du taux de réussite', 'Ne pas tenir compte des coûts dans le calcul'] },
        { type: 'summary', points: ['L\'espérance = gain/perte moyen par trade', 'Le profit factor = profit total / perte totale', 'Un profit factor > 1 = rentable, > 2 = bon', 'Ces deux métriques résument la rentabilité', 'Toujours les calculer dans le journal de backtesting'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce que l\'espérance mathématique ?', options: ['Le profit total', 'Le gain ou perte moyen par trade', 'Le taux de réussite', 'Le drawdown'], correct: 1, explanation: 'L\'espérance mathématique est le gain ou perte moyen attendu par trade, calculé à partir du taux de réussite, du gain moyen et de la perte moyenne.' },
          { question: 'Qu\'est-ce qu\'un profit factor de 2 ?', options: ['La stratégie perd', 'Le profit total est le double de la perte totale', 'Le taux de réussite est 50%', 'Rien'], correct: 1, explanation: 'Un profit factor de 2 signifie que le profit total est le double de la perte totale. C\'est considéré comme un bon profit factor.' },
          { question: 'Quelle formule pour l\'espérance ?', options: ['Gain + Perte', '(Réussite × Gain) - (Échec × Perte)', 'Gain / Perte', 'Réussite × Gain'], correct: 1, explanation: 'L\'espérance = (Taux de réussite × Gain moyen) - (Taux d\'échec × Perte moyenne).' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Stratégie : 50% réussite, gain moyen 50 pips, perte moyenne 25 pips. <br>1. Espérance par trade ? <br>2. Sur 100 trades, quel net ? <br>3. Profit factor ?', correction: '1. Espérance = (0,50 × 50) - (0,50 × 25) = 25 - 12,5 = +12,5 pips/trade. <br>2. Net sur 100 trades = 100 × 12,5 = +1 250 pips. <br>3. Profit factor = (50 × 50) / (50 × 25) = 2 500 / 1 250 = 2,0.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je calcule l\'espérance mathématique', 'Je calcule le profit factor', 'Le profit factor est > 1', 'L\'espérance est positive'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm11-l5', title: 'Drawdown maximal et nombre d\'observations',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Le <strong>drawdown maximal</strong> est la plus grande baisse de capital observée pendant le backtest. Le <strong>nombre d\'observations</strong> est le nombre total de trades testés. Plus le nombre est élevé, plus les résultats sont fiables.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Le drawdown maximal indique le pire scénario observé : si le drawdown max est de 15%, il faut être prêt à supporter une baisse de 15% du capital. Le nombre d\'observations est crucial pour la fiabilité statistique : 10 trades ne prouvent rien, 200 trades commencent à être significatifs.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Le drawdown max prépare psychologiquement : si on sait que la stratégie peut perdre 15%, on est moins surpris quand ça arrive. Le nombre d\'observations détermine la confiance qu\'on peut avoir dans les résultats : trop peu = non significatif.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Backtest sur 200 trades. Drawdown max = 12%.', 'Le trader sait qu\'il peut subir une baisse de 12% du capital.', 'Il est préparé psychologiquement et ne paniquera pas.', '200 trades donnent une confiance raisonnable dans les résultats.', 'Il passe en forward testing pour confirmer.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader backteste sur 15 trades. Tous gagnants. Il conclut que la stratégie est « parfaite ». Mais 15 trades ne sont pas significatifs. En forward testing, la stratégie perd 40% des trades et le drawdown atteint 20%.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Backtester sur trop peu de trades', 'Ignorer le drawdown max', 'Supposer qu\'un drawdown ne se reproduira pas', 'Ne pas se préparer psychologiquement au drawdown'] },
        { type: 'summary', points: ['Le drawdown max = plus grande baisse observée', 'Il prépare psychologiquement au pire scénario', 'Le nombre d\'observations détermine la fiabilité', 'Moins de 100 trades = non significatif', '200+ trades = confiance raisonnable'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Combien de trades minimum pour un backtest significatif ?', options: ['10', '50', '100-200 minimum', '5'], correct: 2, explanation: 'Il faut au moins 100-200 trades pour que les résultats du backtest soient statistiquement significatifs. Moins de 100 trades ne prouvent rien.' },
          { question: 'Que indique le drawdown maximal ?', options: ['Le profit maximum', 'La plus grande baisse de capital observée', 'Le taux de réussite', 'Le spread'], correct: 1, explanation: 'Le drawdown maximal indique la plus grande baisse de capital observée pendant le backtest. Il prépare au pire scénario.' },
          { question: 'Pourquoi connaître le drawdown max avant le réel ?', options: ['Pour le plaisir', 'Pour être préparé psychologiquement et ne pas paniquer', 'Le broker l\'exige', 'Ce n\'est pas utile'], correct: 1, explanation: 'Connaître le drawdown max permet de se préparer psychologiquement. Si on sait qu\'une baisse de 15% est possible, on ne panique pas quand elle arrive.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Votre backtest montre un drawdown max de 18% sur 150 trades. <br>1. Êtes-vous prêt à supporter une baisse de 18% ? <br>2. Le nombre de trades est-il suffisant ? <br>3. Que faites-vous ?', correction: '1. Si 18% est acceptable pour vous, continuez. Sinon, réduisez le risque par trade. <br>2. 150 trades est raisonnable mais plus serait mieux. <br>3. Forward testez pour confirmer, puis passez en réel avec une taille réduite.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai calculé le drawdown maximal', 'J\'ai testé au moins 100 trades', 'Je suis prêt à supporter le drawdown max', 'Je forward teste avant le réel'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm11-l6', title: 'Performance historique vs performance future',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'La <strong>performance historique</strong> est le résultat d\'une stratégie sur les données passées. La <strong>performance future</strong> est ce qui se passera réellement. Les deux ne sont pas identiques : les conditions de marché changent.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Une stratégie qui a gagné 20% par an dans le passé peut perdre 10% l\'année suivante. Les raisons : les conditions de marché changent (volatilité, tendance, corrélation), la stratégie devient moins efficace, ou elle était suroptimisée. La performance historique est un indicateur, pas une garantie.' },
        { type: 'callout', variant: 'danger', title: 'Avertissement', content: 'La performance historique ne garantit jamais la performance future. Une stratégie peut avoir été rentable dans le passé et ne plus l\'être. Ne jamais investir plus que ce qu\'on peut se permettre de perdre.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Faire confiance aveuglément à un backtest positif mène à une prise de risque excessive. Comprendre que le passé ne garantit pas le futur incite à la prudence, à la diversification et à une gestion du risque stricte.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Une stratégie gagne 25% par an sur 3 ans de backtest.', 'Le trader investit avec confiance.', 'L\'année suivante, les conditions de marché changent.', 'La stratégie perd 8%. Le trader est surpris.', 'Il ajuste sa stratégie et réduit son risque.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader voit un backtest avec 50% de gain par an. Il investit tout son capital avec un levier élevé, convaincu que le passé se reproduira. Les conditions changent et il perd 40% de son capital en 2 mois.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Supposer que le passé se reproduira', 'Prendre plus de risque après un bon backtest', 'Ne pas ajuster la stratégie quand les conditions changent', 'Ignorer la différence entre historique et futur'] },
        { type: 'summary', points: ['La performance historique ne garantit pas la performance future', 'Les conditions de marché changent', 'Une stratégie peut devenir moins efficace', 'Le backtest est un indicateur, pas une garantie', 'Toujours maintenir une gestion du risque stricte'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'La performance historique garantit-elle la performance future ?', options: ['Oui', 'Non', 'Parfois', 'Toujours'], correct: 1, explanation: 'La performance historique ne garantit jamais la performance future. Les conditions de marché changent et une stratégie peut devenir moins efficace.' },
          { question: 'Que faire après un bon backtest ?', options: ['Investir tout son capital', 'Maintenir une gestion du risque stricte et forward tester', 'Augmenter le levier', 'Arrêter de trader'], correct: 1, explanation: 'Après un bon backtest, il faut maintenir une gestion du risque stricte, forward tester pour confirmer, et commencer en réel avec une taille réduite.' },
          { question: 'Pourquoi une stratégie peut-elle devenir moins performante ?', options: ['Le broker la bloque', 'Les conditions de marché changent', 'Elle est trop ancienne', 'Le broker la supprime'], correct: 1, explanation: 'Les conditions de marché (volatilité, tendance, corrélation) changent constamment. Une stratégie adaptée à un type de marché peut ne plus fonctionner quand les conditions changent.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Votre backtest montre +30% par an. <br>1. Quelle performance attendez-vous l\'année prochaine ? <br>2. Quel risque prenez-vous ? <br>3. Que faites-vous ?', correction: '1. Ne pas s\'attendre à +30%. La performance future sera probablement différente (peut-être moins). <br>2. Le risque que la stratégie perde de l\'argent. <br>3. Forward tester, commencer en réel avec une taille réduite, maintenir 1% de risque par trade, et ajuster si nécessaire.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je sais que le passé ne garantit pas le futur', 'Je maintiens une gestion du risque stricte', 'Je commence en réel avec une taille réduite', 'J\'ajuste ma stratégie si les conditions changent'] },
        { type: 'note' }
      ]
    }
  ]
}
