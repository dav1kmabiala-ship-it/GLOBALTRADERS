export default {
  id: 'm8', number: 8, title: 'Gestion du risque',
  description: 'Capital, risque par position, taille de position, ratio R:R, drawdown, corrélation et préservation du capital.',
  badge: 'risk',
  intro: 'La gestion du risque est le pilier le plus important du trading. Ce module est particulièrement détaillé car un trader qui gère bien son risque peut survivre à des séries de pertes, tandis qu\'un trader qui l\'ignore peut tout perdre.',
  objectives: ['Calculer le risque par position', 'Maîtriser le ratio risque/rendement', 'Comprendre le drawdown', 'Gérer les risques de corrélation et de levier'],
  lessons: [
    {
      id: 'm8-l1', title: 'Le capital de trading',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Le <strong>capital de trading</strong> est l\'argent que vous consacrez au trading. Il doit être de l\'argent que vous pouvez vous permettre de perdre, sans impact sur votre vie quotidienne. Ne jamais trader avec l\'argent du loyer, des courses ou de l\'épargne nécessaire.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Le capital de trading doit être séparé de vos finances personnelles. Idéalement, ouvrez un compte dédié. Le capital initial n\'a pas besoin d\'être énorme : 500€ à 2000€ suffisent pour débuter avec des micro-lots. L\'important n\'est pas le montant, mais la gestion.' },
        { type: 'callout', variant: 'danger', title: 'Règle absolue', content: 'Ne JAMAIS trader avec de l\'argent dont vous avez besoin pour vivre (loyer, nourriture, factures). Le trading comporte un risque de perte totale. Utilisez uniquement de l\'argent que vous pouvez perdre sans conséquence.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'La taille du capital détermine le montant risqué par trade. Avec 500€ et 1% de risque, vous risquez 5€ par trade. Avec 10 000€ et 1%, vous risquez 100€. Le capital doit être adapté à votre situation financière.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Un trader épargne 2000€ qu\'il peut perdre sans impact.', 'Il ouvre un compte dédié avec ces 2000€.', 'Il risque 1% par trade = 20€ par trade.', 'Même en perdant 10 trades d\'affilée, il perd 200€ (10%).', 'Il lui reste 1800€ pour continuer.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader utilise 500€ de son loyer pour trader. Il perd 50% en une semaine. Il doit maintenant trouver 250€ pour payer son loyer. La pression psychologique le pousse à prendre plus de risque pour « récupérer ». C\'est le début d\'une spirale destructrice.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Trader avec de l\'argent nécessaire pour vivre', 'Ne pas séparer le capital de trading des finances personnelles', 'Commencer avec un capital trop petit pour les coûts', 'Ajouter de l\'argent au compte après des pertes pour « se refaire »'] },
        { type: 'summary', points: ['Le capital de trading doit être de l\'argent qu\'on peut perdre', 'Séparer le capital de trading des finances personnelles', 'Le montant initial n\'a pas besoin d\'être énorme', 'Ne jamais trader avec l\'argent du loyer ou des courses', 'La gestion du capital est plus importante que le montant'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Avec quel argent faut-il trader ?', options: ['L\'argent du loyer', 'L\'argent de l\'épargne nécessaire', 'De l\'argent qu\'on peut perdre sans impact', 'L\'argent emprunté'], correct: 2, explanation: 'On ne doit trader qu\'avec de l\'argent qu\'on peut se permettre de perdre sans impact sur sa vie quotidienne.' },
          { question: 'Pourquoi séparer le capital de trading ?', options: ['Pour des raisons fiscales', 'Pour ne pas mélanger avec les finances personnelles', 'Parce que le broker l\'exige', 'Ce n\'est pas nécessaire'], correct: 1, explanation: 'Séparer le capital de trading des finances personnelles évite de mélanger et permet de gérer le risque plus clairement.' },
          { question: 'Quel montant minimum pour débuter ?', options: ['10 000€', '50 000€', '500-2000€ suffisent avec des micro-lots', '100 000€'], correct: 2, explanation: 'On peut débuter avec 500-2000€ en utilisant des micro-lots (0,01). L\'important est la gestion, pas le montant.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Déterminez votre capital de trading. <br>1. Quel montant pouvez-vous consacrer sans impact ? <br>2. Quel montant risquez-vous par trade (1%) ?', correction: 'Le montant doit être de l\'argent dont vous n\'avez pas besoin. Si c\'est 2000€, le risque par trade à 1% = 20€. À 2% = 40€. Ne dépassez jamais 2% par trade.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Mon capital est de l\'argent que je peux perdre', 'J\'ai séparé ce capital de mes finances personnelles', 'Je connais mon montant risqué par trade', 'Je n\'ajoute pas d\'argent après des pertes pour me refaire'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm8-l2', title: 'Risque par position et pourcentage de risque',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Le <strong>risque par position</strong> est le montant que vous acceptez de perdre sur un trade si le Stop Loss est touché. Le <strong>pourcentage de risque</strong> est ce montant exprimé en pourcentage du capital. La règle d\'or : ne jamais risquer plus de 1 à 2% du capital par trade.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Avec 1% de risque sur 10 000€, vous risquez 100€ par trade. Même en perdant 10 trades d\'affilée (scénario extrême), vous perdez 1000€ (10% du capital). Il vous reste 9000€. Pour revenir à 10 000€, il faut +11,1%. C\'est gérable. Avec 10% de risque, 10 pertes = 100% du capital. Game over.' },
        { type: 'calculator', name: 'PositionSize' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Le pourcentage de risque est le paramètre le plus important de la gestion du risque. Il détermine combien de pertes consécutives vous pouvez supporter avant de perdre un pourcentage significatif de votre capital. Plus le risque est faible, plus vous survivez longtemps.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Capital : 5 000€. Risque : 1% = 50€ par trade.', 'Perte de 5 trades : 250€. Capital restant : 4 750€.', 'Pour revenir à 5 000€ : +5,3%. C\'est gérable.', 'Si le risque était 10% (500€) : 5 pertes = 2 500€. Restant : 2 500€.', 'Pour revenir à 5 000€ : +100%. C\'est extrêmement difficile.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader risque 20% par trade (1000€ sur 5000€). Il perd 3 trades : 3000€ de perte. Il lui reste 2000€. Pour revenir à 5000€, il faut +150%. C\'est presque impossible. Le risque excessif détruit le compte.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Risquer plus de 2% par trade', 'Augmenter le risque après des pertes', 'Ne pas calculer le risque en dollars', 'Risquer le même montant sans tenir compte du Stop Loss'] },
        { type: 'summary', points: ['Le risque par position = montant perdu si le SL est touché', 'La règle d\'or : 1 à 2% du capital maximum', 'Plus le risque est faible, plus on survit longtemps', 'Ne jamais augmenter le risque après des pertes', 'Toujours calculer le risque en dollars avant d\'ouvrir'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Quel est le pourcentage de risque recommandé par trade ?', options: ['10%', '5%', '1 à 2%', '50%'], correct: 2, explanation: 'La règle d\'or est de risquer 1 à 2% du capital par trade pour limiter l\'impact des séries de pertes.' },
          { question: 'Que se passe-t-il avec 10% de risque et 10 pertes d\'affilée ?', options: ['On gagne', 'On perd 100% du capital', 'On perd 10%', 'Rien'], correct: 1, explanation: 'Avec 10% de risque par trade, 10 pertes consécutives = 100% du capital perdu. Le compte est détruit.' },
          { question: 'Avec 1% de risque et 10 pertes, quelle est la perte totale ?', options: ['100%', '10%', '50%', '1%'], correct: 1, explanation: 'Avec 1% de risque par trade, 10 pertes consécutives = environ 10% du capital (légèrement moins car le capital diminue). C\'est gérable.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Capital : 3 000€. <br>1. Quel montant risquez-vous à 1% ? <br>2. Combien de pertes consécutives pouvez-vous supporter avant de perdre 20% du capital ?', correction: '1. 1% de 3 000€ = 30€ par trade. <br>2. 20% de 3 000€ = 600€. À 30€ par trade, il faut 20 pertes pour perdre 600€. C\'est très peu probable avec une stratégie correcte.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je risque au maximum 1 à 2% par trade', 'Je connais le montant en euros de mon risque', 'Je n\'augmente pas le risque après des pertes', 'J\'ai calculé ma taille de position selon le risque'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm8-l3', title: 'Calcul de la taille d\'une position',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'La <strong>taille de position</strong> est le volume que vous tradez (en lots). Elle se calcule à partir du montant risqué et de la distance du Stop Loss. Formule : Taille = Risque / (Stop en pips × Valeur du pip par lot).' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'La taille de position n\'est pas choisie au hasard : elle est calculée pour que la perte si le Stop Loss est touché corresponde exactement au montant risqué (1-2% du capital).' },
        { type: 'calculator', name: 'PositionSize' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Le calcul de la taille de position est la compétence technique la plus importante en gestion du risque. Sans ce calcul, vous ne savez pas combien vous risquez. Un trader qui ne calcule pas sa taille n\'a pas de gestion du risque.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Capital : 10 000€. Risque : 1% = 100€.', 'Entrée EUR/USD : 1,0850. Stop Loss : 1,0820 (30 pips).', 'Valeur du pip pour 1 lot : 10$.', 'Taille = 100 / (30 × 10) = 0,33 lot.', 'Vérification : 30 pips × 3,3$ = 99$ ≈ 100€. ✓'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader avec 2000€ ouvre 1 lot avec un Stop de 50 pips. Risque = 50 × 10$ = 500$ = 25% du capital. C\'est 12,5 fois la règle de 2%. Un seul trade peut détruire le compte.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Choisir la taille au hasard', 'Ne pas adapter la taille au Stop Loss', 'Utiliser la même taille pour tous les trades', 'Oublier de convertir les devises'] },
        { type: 'summary', points: ['La taille se calcule : Risque / (Stop en pips × Valeur du pip)', 'Elle adapte le volume au risque accepté', 'Ne jamais choisir la taille au hasard', 'Adapter la taille à chaque trade selon le Stop Loss', 'C\'est la compétence la plus importante en gestion du risque'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Quelle est la formule de la taille de position ?', options: ['Capital / 2', 'Risque / (Stop en pips × Valeur du pip)', 'Levier × Capital', 'Au hasard'], correct: 1, explanation: 'Taille = Risque accepté / (Distance du Stop Loss en pips × Valeur du pip par lot).' },
          { question: 'Si le Stop Loss est plus large, que faut-il faire ?', options: ['Augmenter la taille', 'Réduire la taille pour garder le même risque', 'Ne rien changer', 'Annuler le trade'], correct: 1, explanation: 'Si le Stop Loss est plus large, il faut réduire la taille de position pour que le risque total reste le même (1-2% du capital).' },
          { question: 'Pourquoi calculer la taille à chaque trade ?', options: ['Ce n\'est pas nécessaire', 'Parce que le Stop Loss varie selon le setup', 'Parce que le broker l\'exige', 'Pour le fun'], correct: 1, explanation: 'La taille doit être calculée à chaque trade car la distance du Stop Loss varie selon le setup. La taille s\'adapte pour garder le même risque.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Capital : 6 000€. Risque : 1,5%. Entrée : 1,1000. SL : 1,0950 (50 pips). Valeur du pip : 10$/lot. <br>1. Montant risqué ? <br>2. Taille de position ?', correction: '1. Risque = 6 000 × 1,5% = 90€. <br>2. Taille = 90 / (50 × 10) = 0,18 lot. Vérification : 50 × 1,8$ = 90$ ≈ 90€. ✓' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai calculé le montant risqué', 'J\'ai mesuré le Stop en pips', 'J\'ai calculé la taille de position', 'Je vérifie que le risque ne dépasse pas 2%'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm8-l4', title: 'Placement du Stop Loss',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Le <strong>placement du Stop Loss</strong> détermine à quel niveau le trade sera fermé en perte. Il doit être placé à un niveau technique (sous un support, au-dessus d\'une résistance) ou à une distance basée sur la volatilité (ATR), pas au hasard.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Méthodes de placement : <ul><li><strong>Sous un support</strong> (pour un Buy) : le trade est invalide si le support est cassé.</li><li><strong>Au-dessus d\'une résistance</strong> (pour un Sell) : le trade est invalide si la résistance est cassée.</li><li><strong>Basé sur l\'ATR</strong> : Stop = 1,5 × ATR, adapté à la volatilité.</li><li><strong>Sous une bougie de retournement</strong> : sous un marteau, un engulfing, etc.</li></ul>Le Stop Loss ne doit pas être trop serré (risque d\'être touché par le bruit) ni trop large (risque excessif).' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Le placement du Stop Loss détermine la distance de risque, qui détermine la taille de position. Un Stop bien placé protège le capital tout en laissant au trade la place de se développer. Un Stop mal placé (trop serré ou trop large) compromet le trade.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Le trader achète à un support à 1,0800.', 'Il place le Stop Loss à 1,0770 (sous le support, 30 pips).', 'Le support est à 1,0790 : le Stop est 20 pips sous le support.', 'Cela laisse une marge pour les fausses cassures (sweep).', 'Take Profit à 1,0860 (60 pips). R:R = 1:2.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader place son Stop Loss à 5 pips de l\'entrée. L\'ATR est de 30 pips. Le Stop est 6 fois plus petit que la volatilité moyenne. Il est touché par le bruit normal du marché avant que le trade ait le temps de se développer.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Placer le Stop trop serré (touché par le bruit)', 'Placer le Stop trop large (risque excessif)', 'Placer le Stop exactement sur le niveau (sans marge)', 'Déplacer le Stop quand le prix s\'en approche'] },
        { type: 'summary', points: ['Le Stop Loss se place à un niveau technique ou basé sur l\'ATR', 'Sous un support (Buy) ou au-dessus d\'une résistance (Sell)', 'Ni trop serré (bruit) ni trop large (risque)', 'Laisser une marge pour les fausses cassures', 'Ne jamais déplacer le Stop quand le prix s\'en approche'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Où placer le Stop Loss pour un Buy ?', options: ['Au-dessus de l\'entrée', 'Sous un support', 'Au hasard', 'Sur l\'entrée'], correct: 1, explanation: 'Pour un Buy, le Stop Loss se place sous un support : le trade est invalide si le support est cassé.' },
          { question: 'Pourquoi ne pas placer un Stop trop serré ?', options: ['C\'est mieux', 'Il sera touché par le bruit normal du marché', 'Le broker le refuse', 'Ce n\'est pas possible'], correct: 1, explanation: 'Un Stop trop serré sera touché par les fluctuations normales du prix (bruit) avant que le trade ait le temps de se développer.' },
          { question: 'Que faire si le prix approche du Stop Loss ?', options: ['Le déplacer plus loin', 'Le supprimer', 'Ne rien faire — laisser le plan s\'exécuter', 'Fermer manuellement'], correct: 2, explanation: 'Si le Stop est bien placé, il faut le laisser s\'exécuter. Le déplacer est un comportement émotionnel qui amplifie les pertes.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Vous achetez l\'EUR/USD à 1,0900. Le support est à 1,0880. L\'ATR est de 25 pips. <br>1. Où placez-vous le Stop Loss ? <br>2. Quelle est la distance en pips ?', correction: 'Sous le support avec une marge : 1,0880 - 0,0010 = 1,0870. Distance = 1,0900 - 1,0870 = 30 pips. Vérifiez que 30 pips est cohérent avec l\'ATR (25 pips) : 30 > 25, c\'est raisonnable (légèrement plus large que l\'ATR).' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Mon Stop est à un niveau technique', 'Il n\'est ni trop serré ni trop large', 'J\'ai laissé une marge pour les fausses cassures', 'Je ne le déplacerai pas si le prix approche'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm8-l5', title: 'Le ratio risque/rendement',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Le <strong>ratio risque/rendement (R:R)</strong> compare le risque (distance au Stop Loss) au rendement potentiel (distance au Take Profit). Un R:R de 1:2 signifie qu\'on risque 1 pour gagner 2. Un R:R minimum de 1:2 est généralement recommandé.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Avec un R:R de 1:2, on peut perdre 50% de ses trades et rester rentable : 10 trades, 5 gagnants (5 × 2 = 10R) et 5 perdants (5 × 1 = 5R) = +5R net. Avec un R:R de 1:1, il faut gagner plus de 50% de ses trades pour être rentable, ce qui est difficile.' },
        { type: 'calculator', name: 'RiskReward' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Le R:R détermine la rentabilité d\'une stratégie. Un bon R:R permet d\'être rentable même avec un taux de réussite modéré. Un mauvais R:R exige un taux de réussite élevé, ce qui est difficile à maintenir.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Risque : 30 pips. Take Profit : 60 pips. R:R = 1:2.', 'Sur 20 trades : 10 gagnants (10 × 60 = 600 pips) et 10 perdants (10 × 30 = 300 pips).', 'Net : +300 pips. Rentable avec 50% de réussite.', 'Avec R:R 1:1 : 10 × 30 = 300 gagnants, 10 × 30 = 300 perdants. Net : 0.', 'Le R:R de 1:2 permet la rentabilité avec 50% de réussite, le 1:1 non.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader a un R:R de 1:0,5 (il risque 40 pips pour gagner 20). Il doit gagner 67% de ses trades pour être rentable. C\'est très difficile à maintenir. Même une stratégie avec 60% de réussite est perdante avec ce R:R.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Accepter un R:R inférieur à 1:1', 'Régler le TP trop proche par peur', 'Ne pas calculer le R:R avant d\'entrer', 'Fermer les trades gagnants trop tôt (R:R non respecté)'] },
        { type: 'summary', points: ['Le R:R compare le risque au rendement potentiel', 'Un R:R minimum de 1:2 est recommandé', 'Avec 1:2, on peut être rentable avec 50% de réussite', 'Avec 1:1, il faut plus de 50% de réussite', 'Toujours calculer le R:R avant d\'entrer'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce qu\'un R:R de 1:2 ?', options: ['On risque 2 pour gagner 1', 'On risque 1 pour gagner 2', 'On risque 1 pour gagner 1', 'On risque 0'], correct: 1, explanation: 'Un R:R de 1:2 signifie qu\'on risque 1 unité pour gagner 2 unités. Le rendement potentiel est le double du risque.' },
          { question: 'Avec un R:R de 1:2, quel taux de réussite minimum pour être rentable ?', options: ['90%', '50%', '34%', '10%'], correct: 2, explanation: 'Avec un R:R de 1:2, il faut gagner au moins 34% de ses trades pour être rentable (1 sur 3). À 50%, on est clairement rentable.' },
          { question: 'Pourquoi fermer les gagnants trop tôt est-il problématique ?', options: ['Ce n\'est pas un problème', 'Le R:R n\'est pas respecté, ce qui réduit la rentabilité', 'Le broker le refuse', 'C\'est mieux'], correct: 1, explanation: 'Fermer les trades gagnants trop tôt réduit le R:R réel. Si on vise 1:2 mais qu\'on ferme à 1:0,5, la stratégie devient perdante même avec un bon taux de réussite.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Entrée : 1,1000. SL : 1,0960. TP : 1,1080. <br>1. Quel est le R:R ? <br>2. Avec 40% de réussite, êtes-vous rentable ?', correction: '1. Risque = 40 pips. Gain = 80 pips. R:R = 1:2. <br>2. Sur 10 trades : 4 gagnants × 80 = 320 pips. 6 perdants × 40 = 240 pips. Net = +80 pips. Rentable avec 40% de réussite.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Mon R:R est au minimum 1:2', 'J\'ai calculé le R:R avant d\'entrer', 'Je ne ferme pas les gagnants trop tôt', 'Je connais le taux de réussite minimum pour être rentable'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm8-l6', title: 'Le drawdown',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Le <strong>drawdown</strong> est la baisse du capital depuis son plus haut niveau. Il mesure la perte maximale subie sur une période. Un drawdown de 20% signifie que le capital a baissé de 20% depuis son sommet.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Le drawdown est crucial car plus il est profond, plus la récupération est difficile. Une perte de 50% nécessite un gain de 100% pour revenir au capital initial. C\'est pour cela qu\'il faut limiter le drawdown : un drawdown de 10% ne nécessite que +11,1% pour récupérer.' },
        { type: 'calculator', name: 'Drawdown' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Le drawdown est la métrique la plus importante pour évaluer la robustesse d\'une stratégie. Une stratégie qui gagne 50% mais avec un drawdown de 40% est risquée. Une stratégie qui gagne 20% avec un drawdown de 5% est plus sûre.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Capital passe de 10 000€ à 8 000€ (drawdown de 20%).', 'Pour revenir à 10 000€, il faut +25%.', 'Si le drawdown avait été de 50% (5 000€), il faudrait +100%.', 'Si le drawdown avait été de 10% (9 000€), il faudrait +11,1%.', 'Limiter le drawdown facilite la récupération.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader subit un drawdown de 60%. Il doit faire +150% pour revenir au capital initial. C\'est extrêmement difficile et peut prendre des mois ou des années. La pression psychologique pousse à prendre plus de risque, ce qui aggrave le drawdown.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Ignorer le drawdown', 'Ne pas limiter le drawdown maximum', 'Prendre plus de risque après un drawdown', 'Ne pas comprendre la difficulté de récupération'] },
        { type: 'summary', points: ['Le drawdown mesure la baisse depuis le plus haut du capital', 'Plus le drawdown est profond, plus la récupération est difficile', 'Une perte de 50% nécessite +100% pour récupérer', 'Limiter le drawdown est essentiel', 'Le drawdown est la métrique clé de robustesse'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce que le drawdown ?', options: ['Le profit total', 'La baisse du capital depuis son plus haut', 'Le nombre de trades', 'Le spread'], correct: 1, explanation: 'Le drawdown est la baisse du capital depuis son plus haut niveau. Il mesure la perte maximale subie.' },
          { question: 'Une perte de 50% nécessite quel gain pour récupérer ?', options: ['50%', '100%', '25%', '10%'], correct: 1, explanation: 'Une perte de 50% nécessite un gain de 100% pour revenir au capital initial. C\'est le doublement du capital restant.' },
          { question: 'Pourquoi limiter le drawdown ?', options: ['Pour des raisons fiscales', 'Plus le drawdown est profond, plus la récupération est difficile', 'Le broker l\'exige', 'Ce n\'est pas important'], correct: 1, explanation: 'Limiter le drawdown facilite la récupération. Un drawdown de 10% nécessite +11% pour récupérer, tandis qu\'un drawdown de 50% nécessite +100%.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Votre capital passe de 8 000€ à 5 600€. <br>1. Quel est le drawdown en % ? <br>2. Quel gain faut-il pour revenir à 8 000€ ?', correction: '1. Drawdown = (8 000 - 5 600) / 8 000 = 2 400 / 8 000 = 30%. <br>2. Pour passer de 5 600 à 8 000, il faut +2 400 / 5 600 = +42,9%. C\'est plus difficile que les 30% de drawdown initial.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je connais mon drawdown actuel', 'J\'ai défini un drawdown maximum acceptable', 'Je comprends la difficulté de récupération', 'Je limite le risque pour contrôler le drawdown'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm8-l7', title: 'Risque de corrélation, levier, gaps et frais',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Le <strong>risque de corrélation</strong> survient quand plusieurs positions évoluent dans le même sens. Le <strong>risque de levier</strong> amplifie les pertes. Les <strong>gaps</strong> sont des sauts de prix. Les <strong>frais</strong> (spread, commission, swap) réduisent le profit.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: '<strong>Corrélation</strong> : si vous achetez l\'EUR/USD et le GBP/USD, vous êtes doublement exposé à la faiblesse de l\'USD. Une baisse de l\'USD fait perdre sur les deux positions. <strong>Levier</strong> : un levier de 100:1 sur 1000€ de marge = position de 100 000€. Un mouvement de 1% contre vous = perte de 1000€ (100% de la marge). <strong>Gaps</strong> : le prix peut sauter d\'un niveau à un autre (surtout entre la clôture et l\'ouverture), dépassant le Stop Loss. <strong>Frais</strong> : le spread, les commissions et les swaps réduisent le profit.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Ces risques « cachés » peuvent détruire un compte même avec une bonne stratégie. La corrélation multiplie le risque réel. Le levier excessif amplifie les pertes. Les gaps peuvent dépasser le Stop Loss. Les frais réduisent la rentabilité.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Un trader achète EUR/USD et GBP/USD en même temps.', 'Les deux paires sont corrélées (toutes deux vendent l\'USD).', 'L\'USD se renforce : les deux positions perdent.', 'Risque réel = 2× le risque d\'une seule position.', 'Le trader croyait diversifier, mais il a doublé le risque.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader utilise un levier de 200:1. Il ouvre une position avec 500€ de marge. Un mouvement de 0,5% contre lui = perte de 1000€ (200% de la marge). Le compte est liquidé et le trader doit encore de l\'argent au broker.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Ouvrir des positions corrélées en pensant diversifier', 'Utiliser un levier excessif', 'Garder des positions pendant des annonces (gaps)', 'Ignorer les frais dans le calcul de rentabilité'] },
        { type: 'summary', points: ['La corrélation multiplie le risque réel', 'Le levier excessif amplifie les pertes', 'Les gaps peuvent dépasser le Stop Loss', 'Les frais réduisent le profit', 'Vérifier la corrélation avant d\'ouvrir plusieurs positions'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Pourquoi acheter EUR/USD et GBP/USD n\'est-il pas une diversification ?', options: ['C\'est une diversification', 'Les deux paires vendent l\'USD — elles sont corrélées', 'Le broker le refuse', 'Ce n\'est pas possible'], correct: 1, explanation: 'EUR/USD et GBP/USD sont corrélées : toutes deux vendent l\'USD. Si l\'USD se renforce, les deux positions perdent. Le risque est doublé, pas diversifié.' },
          { question: 'Qu\'est-ce qu\'un gap ?', options: ['Un type d\'indicateur', 'Un saut de prix sans passer par les niveaux intermédiaires', 'Une commission', 'Un type d\'ordre'], correct: 1, explanation: 'Un gap est un saut de prix où le prix passe d\'un niveau à un autre sans passer par les niveaux intermédiaires, souvent entre la clôture et l\'ouverture.' },
          { question: 'Quel levier est dangereux ?', options: ['1:1', '1:5', 'Un levier excessif (ex: 100:1 ou plus)', 'Aucun'], correct: 2, explanation: 'Un levier excessif (100:1 ou plus) amplifie les pertes au point qu\'un petit mouvement défavorable peut liquidier le compte.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Vous avez des positions sur EUR/USD, GBP/USD et AUD/USD. <br>1. Ces paires sont-elles corrélées ? <br>2. Quel est votre risque réel ?', correction: '1. Oui, ces trois paires vendent l\'USD. Elles sont positivement corrélées. <br>2. Le risque réel est 3× le risque d\'une seule position (si chaque position risque 1%, le risque total est 3% si l\'USD se renforce). Ce n\'est pas une diversification.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je vérifie la corrélation avant d\'ouvrir plusieurs positions', 'Je n\'utilise pas un levier excessif', 'Je suis conscient des risques de gap', 'Je tiens compte des frais dans mes calculs'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm8-l8', title: 'Limites journalières, hebdomadaires et préservation du capital',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Les <strong>limites journalières et hebdomadaires</strong> sont des règles qui interrompent le trading après un certain nombre de pertes ou un pourcentage de perte. La <strong>préservation du capital</strong> est la priorité absolue : survivre prime sur gagner.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Exemples de limites : <ul><li><strong>Limite journalière</strong> : arrêter après 3 pertes consécutives dans la journée.</li><li><strong>Limite de perte journalière</strong> : arrêter si on perd 3% du capital dans la journée.</li><li><strong>Limite hebdomadaire</strong> : arrêter après 5% de perte dans la semaine.</li><li><strong>Période de refroidissement</strong> : ne pas trader pendant 24h après une série de pertes.</li></ul>Ces limites évitent le revenge trading et le surtrading. Elles préservent le capital et la santé mentale.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Sans limites, un trader peut enchaîner les pertes toute la journée en essayant de « se refaire ». Les limites créent une discipline qui protège le capital. La préservation du capital est la règle n°1 : un trader qui survit peut apprendre et progresser. Un trader qui perd tout ne peut plus trader.' },
        { type: 'callout', variant: 'success', title: 'Règle n°1', content: 'La préservation du capital est la priorité absolue. Survre prime sur gagner. Un trader qui préserve son capital peut trader demain. Un trader qui perd tout ne peut plus trader.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Un trader se fixe une limite de 3 pertes par jour.', 'Il perd 3 trades d\'affilée le matin.', 'Il arrête le trading pour la journée.', 'Il analyse ses trades au calme, sans émotion.', 'Le lendemain, il reprend avec un état d\'esprit frais.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader n\'a pas de limite. Il perd 3 trades le matin. Il continue l\'après-midi pour « se refaire ». Il perd 3 trades de plus. La journée se termine avec 6 pertes et un drawdown de 6%. Sans limites, les pertes s\'accumulent.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Ne pas avoir de limites journalières', 'Continuer à trader après des pertes pour se refaire', 'Ne pas faire de pause après une série de pertes', 'Prioriser le gain sur la préservation du capital'] },
        { type: 'summary', points: ['Les limites journalières/hebdomadaires arrêtent le trading après des pertes', 'Exemple : arrêter après 3 pertes ou 3% de perte par jour', 'Ces limites évitent le revenge trading et le surtrading', 'La préservation du capital est la priorité absolue', 'Survivre prime sur gagner'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Quelle est la règle n°1 du trading ?', options: ['Gagner le plus possible', 'Préserver le capital', 'Utiliser un levier élevé', 'Trader tous les jours'], correct: 1, explanation: 'La règle n°1 est la préservation du capital. Un trader qui survit peut apprendre et progresser. Un trader qui perd tout ne peut plus trader.' },
          { question: 'Que faire après 3 pertes consécutives ?', options: ['Continuer à trader', 'Arrêter pour la journée et analyser', 'Augmenter la taille', 'Changer de stratégie'], correct: 1, explanation: 'Après 3 pertes consécutives, il faut arrêter pour la journée, analyser ses trades au calme et reprendre le lendemain avec un état d\'esprit frais.' },
          { question: 'Pourquoi les limites journalières sont-elles importantes ?', options: ['Elles augmentent les profits', 'Elles évitent le revenge trading et le surtrading', 'Le broker les exige', 'Ce n\'est pas important'], correct: 1, explanation: 'Les limites journalières évitent le revenge trading (essayer de se refaire après des pertes) et le surtrading (trader trop souvent par émotion).' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Définissez vos limites : <br>1. Combien de pertes maximum par jour ? <br>2. Quel pourcentage de perte maximum par jour ? <br>3. Que faites-vous après une série de pertes ?', correction: 'Exemple : 3 pertes maximum par jour, 3% de perte maximum par jour. Après une série de pertes : arrêter, analyser les trades au calme, ne pas reprendre avant le lendemain. Ces limites protègent le capital et la santé mentale.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai défini une limite de pertes par jour', 'J\'ai défini un pourcentage de perte maximum par jour', 'J\'arrête de trader après avoir atteint une limite', 'Je priorise la préservation du capital'] },
        { type: 'note' }
      ]
    }
  ]
}
