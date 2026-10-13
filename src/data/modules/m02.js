export default {
  id: 'm2', number: 2, title: 'Comprendre les actifs financiers',
  description: 'Paires de devises, indices, actions, matières premières et cryptomonnaies : apprenez à choisir vos actifs.',
  badge: 'basics',
  intro: 'Ce module explore en détail les différents actifs que vous pouvez trader, leurs caractéristiques, leurs coûts et la manière de les choisir selon votre profil.',
  objectives: ['Identifier les types d\'actifs', 'Comprendre les coûts de transaction', 'Calculer la valeur d\'un pip', 'Choisir un actif adapté à son profil'],
  lessons: [
    {
      id: 'm2-l1', title: 'Paires de devises : majeures, mineures et exotiques',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Sur le Forex, les devises sont échangées par <strong>paires</strong> (EUR/USD, GBP/JPY...). La première devise est la <strong>base</strong>, la seconde est la <strong>contrepartie</strong>. Le prix indique combien de contrepartie il faut pour acheter une unité de base.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'table', headers: ['Type', 'Exemples', 'Caractéristiques'], rows: [
          ['Majeures', 'EUR/USD, GBP/USD, USD/JPY, USD/CHF, AUD/USD, USD/CAD, NZD/USD', 'Contiennent l\'USD, très liquides, spread serré'],
          ['Mineures (cross)', 'EUR/GBP, EUR/JPY, GBP/JPY, AUD/JPY', 'Ne contiennent pas l\'USD, bonne liquidité, spread modéré'],
          ['Exotiques', 'USD/ZAR, USD/TRY, EUR/TRY, USD/MXN', 'Faible liquidité, spread large, volatilité variable']
        ]},
        { type: 'text', content: 'Les paires majeures représentent environ 75% du volume du Forex. Elles sont les plus liquides et ont les spreads les plus serrés. Les paires exotiques peuvent avoir des spreads de 20 à 100 pips, ce qui les rend coûteuses à trader.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Le choix de la paire de devises influence directement vos coûts de transaction, votre exposition au risque et la qualité de vos exécutions. Trader une paire exotique avec un spread de 50 pips signifie que vous commencez chaque trade avec 50 pips de perte.' },
        { type: 'heading', content: 'Exemple concret étape par étape' },
        { type: 'list', ordered: true, items: [
          'Un débutant choisit l\'EUR/USD (majeure) : spread de 0,8 pip, très liquide.',
          'Il compare avec l\'USD/ZAR (exotique) : spread de 45 pips.',
          'Sur l\'EUR/USD, il doit gagner 1 pip pour être au break-even. Sur l\'USD/ZAR, il doit gagner 45 pips.',
          'L\'EUR/USD est clairement plus adapté pour un débutant.',
          'Plus tard, avec de l\'expérience, il peut explorer les paires mineures comme l\'EUR/GBP.'
        ]},
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader choisit l\'USD/TRY (dollar turc) car il a vu que la paire était « facile à trader » sur les réseaux sociaux. Le spread est de 80 pips. Il ouvre une position et le prix ne bouge presque pas pendant des heures. Quand il veut fermer, le spread lui a déjà coûté 80 pips. La volatilité politique turque provoque ensuite un gap qui déclenche son Stop Loss.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Trader des paires exotiques sans connaître le spread', 'Ne pas vérifier la liquidité avant de trader', 'Confondre la devise de base et la contrepartie', 'Choisir une paire uniquement parce qu\'elle « bouge beaucoup »'] },
        { type: 'summary', points: ['Les devises sont échangées par paires (base/contrepartie)', 'Les majeures contiennent l\'USD et sont les plus liquides', 'Les mineures (cross) n\'ont pas d\'USD et ont un spread modéré', 'Les exotiques ont un spread large et une faible liquidité', 'Le choix de la paire influence directement les coûts et le risque'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce que la devise de base dans la paire EUR/USD ?', options: ['L\'USD', 'L\'EUR', 'Les deux', 'Aucune'], correct: 1, explanation: 'La devise de base est la première de la paire (EUR). Le prix indique combien d\'USD il faut pour un EUR.' },
          { question: 'Quelle paire est considérée comme majeure ?', options: ['EUR/GBP', 'USD/JPY', 'USD/ZAR', 'EUR/TRY'], correct: 1, explanation: 'Les paires majeures contiennent l\'USD. USD/JPY est une paire majeure.' },
          { question: 'Pourquoi les paires exotiques ont-elles un spread plus large ?', options: ['Parce qu\'elles sont plus rentables', 'Parce qu\'elles ont une faible liquidité', 'Parce que le broker le décide', 'Parce qu\'elles sont interdites'], correct: 1, explanation: 'Les paires exotiques ont une faible liquidité, ce qui élargit l\'écart entre le prix d\'achat et de vente.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Classez ces paires en majeures, mineures ou exotiques : <br>A. GBP/USD <br>B. EUR/JPY <br>C. USD/TRY <br>D. AUD/USD <br>E. EUR/GBP', correction: 'A. Majeure (contient l\'USD) <br>B. Mineure (cross, pas d\'USD) <br>C. Exotique (devise émergente) <br>D. Majeure (contient l\'USD) <br>E. Mineure (cross, pas d\'USD)' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je connais le spread de la paire que je trade', 'Je sais si ma paire est majeure, mineure ou exotique', 'Je vérifie la liquidité avant d\'ouvrir une position', 'Je comprends la relation base/contrepartie'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm2-l2', title: 'Les indices boursiers',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Un <strong>indice boursier</strong> est un panier d\'actions représentatif d\'un marché ou d\'un secteur. Il mesure la performance globale d\'un groupe d\'entreprises. Exemples : DAX (Allemagne), S&P500 (États-Unis), CAC40 (France).' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Les indices sont calculés à partir des prix des actions qui les composent, souvent pondérés par la capitalisation boursière. Quand vous tradez un indice via CFD, vous spéculez sur la direction du marché entier, pas sur une seule action.' },
        { type: 'table', headers: ['Indice', 'Pays', 'Nombre d\'actions', 'Particularité'], rows: [
          ['DAX 40', 'Allemagne', '40', 'Très volatil, ouverture à 8h00 (Paris)'],
          ['S&P 500', 'États-Unis', '500', 'Indice le plus suivi au monde'],
          ['CAC 40', 'France', '40', 'Représente la bourse de Paris'],
          ['NASDAQ 100', 'États-Unis', '100', 'Axé technologie, très volatil'],
          ['FTSE 100', 'Royaume-Uni', '100', 'Bourse de Londres']
        ]},
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Trader un indice permet de prendre position sur un marché entier avec une seule transaction. Les indices ont tendance à être moins volatils que les actions individuelles (effet de diversification), mais plus volatils que les paires de devises majeures.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Un trader anticipe une bonne journée pour la bourse allemande.', 'Il achète le DAX à 15 600 points.', 'Le DAX monte à 15 750 points dans la journée.', 'Gain : 150 points. Selon la taille de position, cela peut représenter un gain significatif.', 'Il ferme sa position avant la clôture (day trading).'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader achète le DAX à l\'ouverture sans vérifier le calendrier économique. À 14h30 (heure de Paris), une annonce US négative provoque une chute brutale du DAX de 200 points en quelques minutes. Son Stop Loss est touché. Les indices réagissent fortement aux annonces économiques.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Trader un indice sans connaître ses horaires d\'ouverture', 'Ignorer les annonces économiques qui affectent les indices', 'Confondre un indice avec une action individuelle', 'Ne pas adapter la taille de position à la volatilité de l\'indice'] },
        { type: 'summary', points: ['Un indice est un panier d\'actions représentatif d\'un marché', 'Trader un indice = prendre position sur un marché entier', 'Les indices sont sensibles aux annonces économiques', 'Le DAX et le NASDAQ sont parmi les plus volatils', 'Les indices sont souvent tradés via CFD'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce qu\'un indice boursier ?', options: ['Une seule action', 'Un panier d\'actions représentatif', 'Une devise', 'Une matière première'], correct: 1, explanation: 'Un indice boursier est un panier d\'actions représentatif d\'un marché ou d\'un secteur.' },
          { question: 'Quel indice représente la bourse allemande ?', options: ['CAC 40', 'DAX 40', 'FTSE 100', 'S&P 500'], correct: 1, explanation: 'Le DAX 40 est l\'indice principal de la bourse de Francfort (Allemagne).' },
          { question: 'Pourquoi les indices sont-ils sensibles aux annonces économiques ?', options: ['Parce qu\'ils représentent un marché entier', 'Parce qu\'ils sont peu liquides', 'Parce qu\'ils sont fermés', 'Parce que le broker le décide'], correct: 0, explanation: 'Les indices représentant un marché entier, les annonces qui affectent l\'économie globale ont un impact direct sur leur prix.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Vous voulez trader le DAX en day trading. <br>1. À quelle heure (Paris) le DAX ouvre-t-il ? <br>2. Quelle période de la journée est la plus volatile ? <br>3. Que devez-vous vérifier avant d\'ouvrir une position ?', correction: '1. Le DAX ouvre à 9h00 (heure de Francfort), soit 9h00 heure de Paris. <br>2. L\'après-midi, surtout à partir de 15h30 (ouverture US) et lors des annonces économiques. <br>3. Le calendrier économique, les niveaux techniques, et la tendance générale du marché.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je connais les horaires d\'ouverture de l\'indice', 'J\'ai vérifié le calendrier économique', 'J\'adapte ma taille de position à la volatilité', 'Je sais quels facteurs influencent l\'indice'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm2-l3', title: 'Les actions',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Une <strong>action</strong> est un titre de propriété d\'une entreprise. En achetant une action, vous devenez propriétaire d\'une fraction de l\'entreprise. Le prix de l\'action varie selon la performance de l\'entreprise et la demande du marché.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Les actions peuvent être tradées au comptant (achat réel) ou via CFD (contrat sur différence, sans posséder l\'action). Le trading d\'actions nécessite une analyse fondamentale (résultats, bénéfices, dettes) et technique (graphiques, tendances). Certaines actions versent des <strong>dividendes</strong> (partie des bénéfices distribuée aux actionnaires).' },
        { type: 'table', headers: ['Aspect', 'Action au comptant', 'CFD sur action'], rows: [
          ['Propriété', 'Vous possédez l\'action', 'Vous ne possédez pas l\'action'],
          ['Vente à découvert', 'Difficile (emprunt)', 'Possible (Sell)'],
          ['Levier', 'Limité', 'Possible (mais risqué)'],
          ['Dividendes', 'Reçus', 'Ajustement de swap'],
          ['Frais', 'Commission + taxe', 'Spread + commission']
        ]},
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Les actions ont des comportements très différents selon l\'entreprise et le secteur. Une action technologique comme Nvidia peut bouger de 10% en un jour, tandis qu\'une action utilitaire bouge de 1%. Connaître le profil de l\'action que vous tradez est essentiel.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Un trader analyse Apple (AAPL) avant la publication des résultats.', 'Il anticipe de bons résultats et achète à 180$.', 'Les résultats sont bons, le prix monte à 190$.', 'Gain de 10$ par action. Avec 100 actions, profit de 1000$.', 'Il peut aussi trader via CFD avec un levier de 5:1 pour amplifier l\'exposition.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader achète une action qu\'il ne connaît pas parce qu\'elle « monte beaucoup ». Il n\'a pas analysé l\'entreprise. Le lendemain, un communiqué annonce une enquête réglementaire et l\'action chute de 30%. Sans analyse fondamentale, il a pris un risque aveugle.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Acheter une action sans connaître l\'entreprise', 'Ignorer le calendrier des résultats (earnings)', 'Ne pas adapter la taille de position à la volatilité', 'Confondre trading au comptant et CFD'] },
        { type: 'summary', points: ['Une action est un titre de propriété d\'une entreprise', 'On peut trader au comptant ou via CFD', 'L\'analyse fondamentale est importante pour les actions', 'Les actions ont des profils de volatilité très différents', 'Certaines actions versent des dividendes'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce qu\'une action ?', options: ['Un emprunt', 'Un titre de propriété d\'une entreprise', 'Une devise', 'Un indice'], correct: 1, explanation: 'Une action est un titre de propriété : en achetant une action, vous devenez propriétaire d\'une fraction de l\'entreprise.' },
          { question: 'Quelle différence entre action au comptant et CFD ?', options: ['Aucune', 'Au comptant vous possédez l\'action, en CFD non', 'Le CFD est gratuit', 'L\'action au comptant est plus volatile'], correct: 1, explanation: 'Au comptant, vous possédez réellement l\'action. En CFD, vous spéculez sur le prix sans posséder l\'action.' },
          { question: 'Qu\'est-ce qu\'un dividende ?', options: ['Une taxe', 'Une partie des bénéfices distribuée aux actionnaires', 'Une commission du broker', 'Un type de graphique'], correct: 1, explanation: 'Le dividende est une partie des bénéfices de l\'entreprise distribuée à ses actionnaires.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Vous voulez trader une action. <br>1. Quelles informations devez-vous vérifier avant d\'acheter ? <br>2. Quels événements peuvent provoquer de la volatilité ?', correction: '1. Résultats financiers (earnings), dettes, croissance, secteur, concurrence, et l\'analyse technique du graphique. <br>2. Publication des résultats, annonces de produits, fusions/acquisitions, changements réglementaires, annonces macroéconomiques.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je connais l\'entreprise dont je trade l\'action', 'J\'ai vérifié le calendrier des résultats', 'J\'ai analysé le graphique', 'J\'ai adapté ma taille de position à la volatilité'] },
        { type: 'note' }
      ]
    },
    {
      'id': 'm2-l4', title: 'Les matières premières',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Les <strong>matières premières</strong> (commodities) sont des biens physiques échangés sur les marchés : or, argent, pétrole, gaz naturel, cuivre, blé, café, coton. Elles sont sensibles à l\'offre et la demande physique, à la météo et à la géopolitique.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'table', headers: ['Catégorie', 'Exemples', 'Facteurs d\'influence'], rows: [
          ['Métaux précieux', 'Or, Argent, Platine', 'Inflation, taux d\'intérêt, valeur de l\'USD, demande de refuge'],
          ['Énergie', 'Pétrole (WTI/Brent), Gaz', 'OPEC, conflits, stocks, croissance économique'],
          ['Métaux industriels', 'Cuivre, Aluminium', 'Croissance industrielle, construction'],
          ['Agricoles', 'Blé, Maïs, Café, Coton', 'Météo, récoltes, demande alimentaire']
        ]},
        { type: 'text', content: 'L\'or est souvent considéré comme une valeur refuge : en période d\'incertitude, son prix a tendance à monter. Le pétrole est très sensible aux décisions de l\'OPEC et aux conflits géopolitiques. Les matières agricoles réagissent à la météo.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Les matières premières ont des facteurs d\'influence très différents du Forex. L\'or peut monter pendant que les actions baissent. Le pétrole peut être affecté par une tempête dans le Golfe du Mexique. Comprendre ces facteurs est essentiel pour trader ces actifs.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Des tensions géopolitiques augmentent au Moyen-Orient.', 'Le trader anticipe que le pétrole va monter (risque sur l\'approvisionnement).', 'Il achète du pétrole WTI à 75$.', 'Le prix monte à 82$ en quelques jours.', 'Profit de 7$ par baril selon la taille de position.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader achète du pétrole pensant qu\'il va montre, mais l\'OPEC annonce une augmentation de la production. L\'offre augmente, le prix chute. Sans suivre l\'actualité de l\'OPEC, le trader a ignoré un facteur fondamental majeur.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Trader des matières premières sans connaître leurs facteurs d\'influence', 'Ignorer l\'actualité géopolitique', 'Ne pas adapter la stratégie au type de matière première', 'Confondre le comportement de l\'or et celui du pétrole'] },
        { type: 'summary', points: ['Les matières premières sont des biens physiques échangés sur les marchés', 'Chaque catégorie a des facteurs d\'influence différents', 'L\'or est une valeur refuge en période d\'incertitude', 'Le pétrole est sensible à l\'OPEC et à la géopolitique', 'Les matières agricoles réagissent à la météo'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Quel facteur influence principalement le prix de l\'or ?', options: ['La météo', 'L\'inflation, les taux et la valeur de l\'USD', 'L\'OPEC', 'Les récoltes'], correct: 1, explanation: 'L\'or est sensible à l\'inflation, aux taux d\'intérêt et à la valeur du dollar (l\'or est libellé en USD).' },
          { question: 'Qu\'est-ce qui peut faire monter le prix du pétrole ?', options: ['Une baisse de l\'OPEC', 'Une augmentation de production de l\'OPEC', 'Une bonne récolte', 'Un taux d\'intérêt bas'], correct: 0, explanation: 'Une baisse de production de l\'OPEC réduit l\'offre, ce qui peut faire monter le prix du pétrole.' },
          { question: 'Pourquoi l\'or est-il appelé « valeur refuge » ?', options: ['Parce qu\'il est jaune', 'Parce qu\'il a tendance à attirer les investisseurs en période d\'incertitude', 'Parce qu\'il ne vaut rien', 'Parce qu\'il est interdit'], correct: 1, explanation: 'En période d\'incertitude économique ou géopolitique, les investisseurs se tournent vers l\'or, ce qui fait monter son prix.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Associez chaque matière première à son facteur d\'influence principal : <br>A. Or <br>B. Pétrole <br>C. Blé <br>D. Cuivre <br>1. Décisions OPEC <br>2. Croissance industrielle <br>3. Inflation et valeur de l\'USD <br>4. Météo et récoltes', correction: 'A-3 : L\'or est sensible à l\'inflation et à la valeur de l\'USD. <br>B-1 : Le pétrole est sensible aux décisions de l\'OPEC. <br>C-4 : Le blé est sensible à la météo et aux récoltes. <br>D-2 : Le cuivre est sensible à la croissance industrielle.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je connais les facteurs d\'influence de la matière première', 'Je suis l\'actualité géopolitique pertinente', 'J\'adapte ma stratégie au type de matière première', 'Je sais qu\'une matière première n\'a pas le même comportement qu\'une devise'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm2-l5', title: 'Les cryptomonnaies',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Les <strong>cryptomonnaies</strong> sont des monnaies numériques basées sur la technologie blockchain. Bitcoin (BTC), Ethereum (ETH) et des milliers d\'« altcoins » sont échangés 24h/24, 7j/7 sur des exchanges centralisés (Binance, Coinbase) ou décentralisés (Uniswap).' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Les cryptomonnaies sont caractérisées par une <strong>volatilité extrême</strong> : des mouvements de 10-20% en quelques heures sont fréquents. Elles sont influencées par la régulation, l\'adoption institutionnelle, les annonces technologiques, et le sentiment du marché. Le marché crypto est moins régulé que le Forex, ce qui présente des risques supplémentaires.' },
        { type: 'callout', variant: 'warning', title: 'Attention', content: 'Le marché des cryptomonnaies est très volatil et moins régulé que les marchés traditionnels. Les risques de perte, de piratage d\'exchange et de régulation soudaine sont réels. Ne tradez que ce que vous pouvez vous permettre de perdre.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Les cryptomonnaies offrent des opportunités de profit importantes mais aussi des risques élevés. Un débutant ne devrait pas commencer par les cryptomonnaies. La volatilité extrême amplifie les erreurs de gestion du risque.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Bitcoin passe de 60 000$ à 65 000$ en une journée.', 'Un trader avec 0,1 BTC fait un profit de 500$.', 'Mais le lendemain, BTC chute à 55 000$ (-15%).', 'Sans Stop Loss, la perte aurait été de 1 000$.', 'La volatilité extrême exige une gestion du risque encore plus stricte.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader utilise un levier de 100x sur Bitcoin. BTC baisse de 1% : il perd 100% de sa marge. La liquidation est instantanée. Le levier élevé combiné à la volatilité crypto est l\'une des combinaisons les plus destructrices en trading.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Utiliser un levier élevé sur des actifs très volatils', 'Ne pas utiliser de Stop Loss', 'Investir dans des « altcoins » inconnus sans recherche', 'Croire que les cryptomonnaies ne peuvent que monter'] },
        { type: 'summary', points: ['Les cryptomonnaies sont des monnaies numériques basées sur la blockchain', 'Elles sont extrêmement volatiles (mouvements de 10-20% fréquents)', 'Le marché est 24/7 et moins régulé', 'Le levier élevé sur crypto est extrêmement dangereux', 'Les débutants devraient éviter les cryptomonnaies au départ'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Quelle caractéristique principale des cryptomonnaies ?', options: ['Faible volatilité', 'Volatilité extrême', 'Pas de trading possible', 'Ouvert uniquement en semaine'], correct: 1, explanation: 'Les cryptomonnaies sont caractérisées par une volatilité extrême, avec des mouvements de 10-20% en quelques heures.' },
          { question: 'Le marché crypto est ouvert ?', options: ['9h-17h en semaine', '24h/24, 7j/7', 'Uniquement le week-end', 'Uniquement la nuit'], correct: 1, explanation: 'Le marché des cryptomonnaies fonctionne 24h/24, 7j/7, sans interruption.' },
          { question: 'Pourquoi le levier élevé est-il particulièrement dangereux sur crypto ?', options: ['Parce que c\'est interdit', 'Parce que la volatilité extrême amplifie les pertes au-delà de la marge', 'Parce qu\'il n\'y a pas de broker', 'Parce que le marché est fermé'], correct: 1, explanation: 'La volatilité extrême des cryptomonnaies signifie qu\'un petit mouvement peut liquidiser entièrement la marge, même avec un levier modéré.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Bitcoin est à 60 000$ et vous tradez 0,1 BTC avec un Stop Loss à 58 000$. <br>1. Quel est votre risque en dollars ? <br>2. Si BTC chute à 55 000$ sans Stop Loss, quelle est votre perte ?', correction: '1. Risque = (60 000 - 58 000) × 0,1 = 200$. <br>2. Sans Stop Loss : (60 000 - 55 000) × 0,1 = 500$. Le Stop Loss limite la perte à 200$ au lieu de 500$.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je n\'utilise pas de levier élevé sur crypto', 'J\'utilise toujours un Stop Loss', 'Je n\'investis que ce que je peux me permettre de perdre', 'Je connais l\'actif que je trade'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm2-l6', title: 'Forex, CFD, actions au comptant et contrats à terme',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Il existe plusieurs instruments pour trader : le <strong>Forex</strong> (échange de devises), les <strong>CFD</strong> (contrats sur différence), les <strong>actions au comptant</strong> (achat réel) et les <strong>contrats à terme</strong> (futures). Chacun a ses avantages et limites.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'table', headers: ['Instrument', 'Description', 'Avantages', 'Limites'], rows: [
          ['Forex', 'Échange de paires de devises', 'Très liquide, 24h/24, levier', 'Pas de propriété, spread variable'],
          ['CFD', 'Contrat sur la différence de prix', 'Vente à découvert, levier, diversité', 'Pas de propriété, frais overnight'],
          ['Actions au comptant', 'Achat réel d\'actions', 'Propriété, dividendes', 'Pas de vente à découvert facile, capital important'],
          ['Futures', 'Contrat à terme standardisé', 'Marché centralisé, levier', 'Complexité, échéance, taille importante']
        ]},
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Le choix de l\'instrument influence vos coûts, votre exposition et vos possibilités. Un CFD permet de vendre à découvert facilement, ce qui n\'est pas le cas avec des actions au comptant. Les futures sont centralisés mais complexes pour les débutants.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Un trader veut profiter d\'une baisse de l\'action Tesla.', 'Avec des actions au comptant : impossible de vendre à découvert facilement.', 'Avec un CFD : il ouvre une position Sell sur Tesla.', 'Tesla baisse de 250$ à 230$. Profit de 20$ par action (CFD).', 'Le CFD lui a permis de profiter de la baisse sans posséder l\'action.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader garde un CFD sur action pendant un mois. Chaque nuit, un swap (frais overnight) est prélevé. Après un mois, les frais overnight ont atteint 50$, réduisant significativement son profit. Les CFD sont conçus pour le court terme, pas pour le long terme.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Garder un CFD longtemps (frais overnight)', 'Confondre CFD et action au comptant', 'Ne pas comprendre les frais de chaque instrument', 'Utiliser un futures sans comprendre l\'échéance'] },
        { type: 'summary', points: ['Le Forex est l\'échange de devises, très liquide', 'Le CFD permet de vendre à découvert et d\'utiliser un levier', 'Les actions au comptant donnent la propriété et les dividendes', 'Les futures sont centralisés mais complexes', 'Chaque instrument a ses coûts et limites spécifiques'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Quel instrument permet de vendre facilement à découvert ?', options: ['Action au comptant', 'CFD', 'Aucun', 'Dividende'], correct: 1, explanation: 'Le CFD permet de vendre à découvert (position Sell) facilement, sans besoin d\'emprunter l\'actif.' },
          { question: 'Pourquoi éviter de garder un CFD longtemps ?', options: ['Pas de raison', 'Frais overnight (swap) qui s\'accumulent', 'Le CFD expire', 'Le broker le bloque'], correct: 1, explanation: 'Les CFD prélèvent des frais overnight (swap) chaque nuit, ce qui les rend coûteux sur le long terme.' },
          { question: 'Quel avantage des actions au comptant ?', options: ['Levier illimité', 'Propriété et dividendes', 'Vente à découvert facile', 'Pas de frais'], correct: 1, explanation: 'Les actions au comptant donnent la propriété de l\'action et le droit aux dividendes.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Vous voulez : <br>A. Profiter d\'une baisse de l\'or sur 2 jours <br>B. Investir dans Apple pour 5 ans <br>C. Trader l\'EUR/USD en intraday <br>Quel instrument choisissez-vous pour chaque cas ?', correction: 'A. CFD sur or (vente à découvert, court terme). <br>B. Action au comptant (propriété, dividendes, long terme). <br>C. Forex (très liquide, 24h/24, adapté à l\'intraday).' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je connais l\'instrument que j\'utilise et ses frais', 'J\'adapte l\'instrument à mon horizon temporel', 'Je sais si je peux vendre à découvert', 'Je tiens compte des frais overnight pour les positions longues'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm2-l7', title: 'Spread, commission, swap, pip, point et taille de position',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Ces termes désignent les coûts et les unités de mesure en trading : le <strong>spread</strong> est l\'écart bid/ask, la <strong>commission</strong> est un frais fixe, le <strong>swap</strong> est un frais overnight, le <strong>pip</strong> est la plus petite variation de prix, et la <strong>taille de position</strong> est le volume tradé.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'table', headers: ['Terme', 'Définition', 'Exemple'], rows: [
          ['Spread', 'Écart entre bid et ask', 'EUR/USD : 1,0850/1,0852 = 2 pips'],
          ['Commission', 'Frais fixe par transaction', '7$ par lot standard (compte RAW)'],
          ['Swap', 'Frais/crédit pour position maintenie overnight', '-5$ par lot sur EUR/USD (varie)'],
          ['Pip', '4e décimale (la plupart des paires)', 'EUR/USD : 1,0850 → 1,0851 = +1 pip'],
          ['Point', 'Unité de prix entière (indices)', 'DAX : 15600 → 15601 = +1 point'],
          ['Lot', '100 000 unités (standard)', '0,1 lot = 10 000 unités']
        ]},
        { type: 'text', content: 'La <strong>taille de position</strong> détermine la valeur de chaque pip. Sur l\'EUR/USD, 1 lot standard = 10$ par pip. 0,1 lot = 1$ par pip. 0,01 lot = 0,10$ par pip.' },
        { type: 'calculator', name: 'PipValue' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Ces coûts et unités sont la base de tout calcul en trading. Ne pas les comprendre conduit à des erreurs de calcul de risque et de profit. Un trader qui ne sait pas qu\'un pip vaut 10$ sur 1 lot d\'EUR/USD ne peut pas calculer sa taille de position correctement.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Un trader ouvre 0,5 lot sur EUR/USD à 1,0850.', 'Spread = 2 pips = coût immédiat de 2 × 5$ = 10$.', 'Commission = 3,5$ (0,5 lot × 7$).', 'S\'il garde la position overnight : swap = -2,5$.', 'Coût total avant tout mouvement de prix : 10 + 3,5 + 2,5 = 16$.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader ouvre 1 lot sur EUR/USD et pense avoir gagné 50 pips. Il calcule son profit à 500$. Mais il oublie le spread (2 pips = 20$), la commission (7$) et le swap (5$). Son profit réel est de 500 - 20 - 7 - 5 = 468$. Les coûts réduisent le profit de 32$.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Ne pas tenir compte du spread dans le calcul du profit', 'Oublier les commissions', 'Ignorer les swaps sur les positions overnight', 'Confondre pip et point', 'Ne pas savoir calculer la valeur du pip selon la taille'] },
        { type: 'summary', points: ['Le spread est l\'écart bid/ask — un coût immédiat', 'La commission est un frais fixe par transaction', 'Le swap est un frais/crédit pour les positions overnight', 'Le pip est la 4e décimale (la plupart des paires)', 'La taille de position détermine la valeur du pip'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Combien vaut 1 pip sur 1 lot standard d\'EUR/USD ?', options: ['1$', '10$', '100$', '0,10$'], correct: 1, explanation: 'Sur 1 lot standard (100 000 unités) d\'EUR/USD, 1 pip (0,0001) vaut 10$.' },
          { question: 'Qu\'est-ce que le swap ?', options: ['Un frais pour annuler un ordre', 'Un frais/crédit pour maintenir une position overnight', 'Une commission', 'Un type d\'ordre'], correct: 1, explanation: 'Le swap est un frais ou crédit appliqué pour le maintien d\'une position d\'une journée à l\'autre.' },
          { question: 'Si vous tradez 0,1 lot sur EUR/USD, combien vaut 1 pip ?', options: ['10$', '1$', '0,10$', '100$'], correct: 1, explanation: '0,1 lot = 10 000 unités. 1 pip (0,0001) × 10 000 = 1$.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Vous ouvrez 0,2 lot sur EUR/USD à 1,0850. Spread = 1,5 pip, commission = 7$/lot. <br>1. Quel est le coût du spread ? <br>2. Quelle est la commission ? <br>3. Coût total immédiat ?', correction: '1. 0,2 lot → valeur du pip = 2$. Spread = 1,5 × 2 = 3$. <br>2. Commission = 0,2 × 7 = 1,40$. <br>3. Coût total = 3 + 1,40 = 4,40$.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je connais le spread de l\'actif que je trade', 'Je sais calculer la valeur du pip selon ma taille', 'Je tiens compte des commissions', 'Je vérifie le swap si je garde des positions overnight'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm2-l8', title: 'Volatilité et liquidité d\'un actif',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'La <strong>volatilité</strong> mesure l\'amplitude des variations de prix d\'un actif. La <strong>liquidité</strong> mesure la facilité d\'acheter et vendre sans impact significatif sur le prix. Un actif très liquide a un spread serré ; un actif très volatil a de grands mouvements.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'La volatilité et la liquidité sont deux concepts distincts mais liés. Un actif peut être très liquide et peu volatil (EUR/USD en session asiatique) ou peu liquide et très volatil (une crypto obscure). La volatilité se mesure souvent avec l\'ATR (Average True Range) ou l\'écart-type des rendements.' },
        { type: 'table', headers: ['Actif', 'Liquidité', 'Volatilité typique', 'Spread typique'], rows: [
          ['EUR/USD', 'Très élevée', 'Modérée (60-80 pips/jour)', '0,5-1 pip'],
          ['GBP/JPY', 'Élevée', 'Élevée (100-150 pips/jour)', '2-4 pips'],
          ['DAX', 'Élevée', 'Élevée (100-200 pts/jour)', '1-2 points'],
          ['Bitcoin', 'Modérée', 'Très élevée (5-20%/jour)', 'Variable'],
          ['USD/ZAR', 'Faible', 'Variable', '30-80 pips']
        ]},
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'La volatilité détermine le potentiel de profit ET de perte. La liquidité détermine la qualité d\'exécution et les coûts. Un actif volatil offre plus d\'opportunités mais aussi plus de risque. Un actif illiquide a des coûts élevés et des exécutions difficiles.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Un trader choisit l\'EUR/USD : volatilité modérée, très liquide.', 'Il peut utiliser des Stops Loss serrés car le spread est faible.', 'Sur GBP/JPY, la volatilité est plus élevée : il doit élargir ses Stops.', 'Sur USD/ZAR, la faible liquidité provoque des slippages importants.', 'Il adapte sa stratégie à chaque actif selon sa volatilité et liquidité.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader place un Stop Loss de 5 pips sur le GBP/JPY, pensant que c\'est suffisant. La volatilité du GBP/JPY est de 100+ pips par jour. Un seul mouvement de prix (bruit) peut atteindre 10-15 pips et toucher le Stop Loss. Le Stop Loss est trop serré pour la volatilité de l\'actif.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Placer des Stops Loss trop serrés sur des actifs volatils', 'Trader des actifs illiquides sans connaître le spread', 'Confondre volatilité et liquidité', 'Ne pas adapter la stratégie au profil de l\'actif'] },
        { type: 'summary', points: ['La volatilité mesure l\'amplitude des variations de prix', 'La liquidité mesure la facilité d\'achat/vente sans impact', 'Un actif liquide a un spread serré', 'Un actif volatil a de grands mouvements (profit et risque)', 'Adapter sa stratégie au profil de l\'actif est essentiel'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce que la volatilité ?', options: ['La facilité d\'achat/vente', 'L\'amplitude des variations de prix', 'Le spread', 'La commission'], correct: 1, explanation: 'La volatilité mesure l\'amplitude des variations de prix d\'un actif sur une période donnée.' },
          { question: 'Un actif très liquide a généralement ?', options: ['Un spread large', 'Un spread serré', 'Pas de spread', 'Une volatilité nulle'], correct: 1, explanation: 'Un actif très liquide a de nombreux acheteurs et vendeurs, ce qui resserre l\'écart entre le bid et l\'ask.' },
          { question: 'Pourquoi ne pas placer un Stop Loss de 5 pips sur GBP/JPY ?', options: ['Parce que c\'est interdit', 'Parce que la volatilité du GBP/JPY peut dépasser 10 pips en un seul mouvement', 'Parce que le broker le refuse', 'Parce que le GBP/JPY ne bouge pas'], correct: 1, explanation: 'Le GBP/JPY est très volatil. Un Stop Loss de 5 pips est trop serré et risque d\'être touché par le bruit normal du marché.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Classez ces actifs du plus liquide au moins liquide : <br>A. EUR/USD <br>B. GBP/JPY <br>C. USD/ZAR <br>D. Bitcoin', correction: 'Ordre approximatif : A (EUR/USD, très liquide) > B (GBP/JPY, liquide) > D (Bitcoin, liquidité modérée) > C (USD/ZAR, faible liquidité). Cet ordre peut varier selon les conditions de marché.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je connais la volatilité de l\'actif que je trade', 'Je connais sa liquidité et son spread', 'J\'adapte mes Stops Loss à la volatilité', 'Je n\'utilise pas des Stops trop serrés sur des actifs volatils'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm2-l9', title: 'Choisir un actif selon son profil',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Le choix de l\'actif à trader dépend de votre profil : tolérance au risque, capital disponible, temps consacré au trading, expérience et préférences personnelles. Il n\'y a pas de « meilleur » actif, seulement un actif adapté à vous.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'table', headers: ['Profil', 'Actifs recommandés', 'Actifs à éviter'], rows: [
          ['Débutant, petit capital', 'EUR/USD, GBP/USD (majeures)', 'Cryptos, exotiques, levier élevé'],
          ['Débutant, temps limité', 'Swing trading sur majeures', 'Scalping, day trading intensif'],
          ['Intermédiaire', 'Mineures, indices, or', 'Exotiques sans recherche'],
          ['Avancé, temps disponible', 'Multi-actifs, cryptos avec gestion du risque', 'Aucun, mais avec préparation'],
          ['Avancé, gros capital', 'Futures, Forex, indices', 'Micro-lots sur exotiques']
        ]},
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Trader un actif inadapté à son profil mène à des pertes. Un débutant qui trade des cryptos avec un levier élevé perd généralement rapidement. Choisir le bon actif est aussi important que d\'avoir une bonne stratégie.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Un débutant avec 2000€ choisit l\'EUR/USD en swing trading.', 'Il risque 1% (20€) par trade, avec des Stops de 30-50 pips.', 'La volatilité modérée de l\'EUR/USD lui permet d\'apprendre sans trop de stress.', 'Après 3 mois, il élargit vers l\'GBP/USD et l\'or.', 'Il évite les cryptos jusqu\'à ce qu\'il maîtrise la gestion du risque.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un débutant avec 500€ se lance sur le Bitcoin avec un levier de 50x. La volatilité provoque une liquidation en 2 jours. Il a perdu 500€ en 48 heures. L\'actif et le levier étaient totalement inadaptés à son profil.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Choisir un actif « tendance » plutôt qu\'adapté', 'Commencer par les cryptos sans expérience', 'Ne pas tenir compte de son capital disponible', 'Utiliser un levier inadapté à son profil'] },
        { type: 'summary', points: ['Le choix de l\'actif dépend de votre profil', 'Les débutants devraient commencer par les majeures', 'Le capital, le temps et l\'expérience déterminent le choix', 'Ne jamais choisir un actif uniquement parce qu\'il est « tendance »', 'Adapter le levier à son niveau d\'expérience'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Quel actif est recommandé pour un débutant ?', options: ['Bitcoin avec levier', 'EUR/USD (paire majeure)', 'USD/ZAR (exotique)', 'Options complexes'], correct: 1, explanation: 'L\'EUR/USD est une paire majeure très liquide avec un spread serré, idéale pour les débutants.' },
          { question: 'Que faut-il considérer pour choisir un actif ?', options: ['Uniquement le profit potentiel', 'Tolérance au risque, capital, temps, expérience', 'La couleur du graphique', 'L\'avis des amis'], correct: 1, explanation: 'Le choix d\'un actif doit tenir compte de votre tolérance au risque, votre capital, votre temps disponible et votre expérience.' },
          { question: 'Pourquoi un débutant devrait-il éviter les cryptos ?', options: ['Parce que c\'est interdit', 'Parce que la volatilité extrême amplifie les erreurs de débutant', 'Parce qu\'il n\'y a pas de broker', 'Parce que ça ne monte jamais'], correct: 1, explanation: 'La volatilité extrême des cryptomonnaies amplifie les erreurs de gestion du risque, ce qui est dangereux pour un débutant.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Vous êtes débutant avec 3000€ et 2h par jour. <br>1. Quel actif choisissez-vous ? <br>2. Quel style de trading ? <br>3. Quel levier ?', correction: '1. EUR/USD ou GBP/USD (paires majeures, liquides, spread serré). <br>2. Day trading ou swing trading (adapté à 2h/jour). <br>3. Levier modéré (max 10:1) avec risque de 1% par trade.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['J\'ai choisi un actif adapté à mon profil', 'Mon capital est suffisant pour l\'actif choisi', 'Mon temps disponible correspond au style de trading', 'Mon levier est adapté à mon niveau d\'expérience'] },
        { type: 'note' }
      ]
    }
  ]
}
