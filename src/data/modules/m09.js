export default {
  id: 'm9', number: 9, title: 'Psychologie du trading',
  description: 'Peur, avidité, FOMO, revenge trading, biais cognitifs, discipline et journal de trading.',
  badge: 'psych',
  intro: 'La psychologie est souvent le facteur qui fait la différence entre un trader gagnant et un trader perdant. Ce module explore les émotions, les biais et les comportements qui affectent vos décisions.',
  objectives: ['Comprendre les émotions en trading', 'Identifier les biais cognitifs', 'Gérer les séries de pertes', 'Construire une routine disciplinée'],
  lessons: [
    {
      id: 'm9-l1', title: 'La peur de perdre',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'La <strong>peur de perdre</strong> est l\'émotion qui pousse à fermer les trades gagnants trop tôt, à ne pas respecter le plan, ou à ne pas prendre de trades par peur. Elle est l\'un des obstacles les plus fréquents en trading.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'La peur de perdre provoque plusieurs comportements : <ul><li>Fermer un trade gagnant trop tôt (pour sécuriser un petit profit au lieu d\'attendre le TP).</li><li>Ne pas respecter le Stop Loss (le déplacer pour éviter la perte).</li><li>Ne pas prendre un trade valide par peur.</li><li>Réduire la taille de position par peur au lieu de la calculer.</li></ul>La peur est naturelle, mais elle doit être gérée par la discipline et la confiance dans le plan.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'La peur de perdre détruit la rentabilité d\'une stratégie. Fermer les gagnants trop tôt réduit le R:R réel. Ne pas prendre les trades valides réduit le nombre d\'opportunités. La peur transforme une bonne stratégie en stratégie perdante.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Un trader ouvre un trade avec un TP à 60 pips.', 'Le prix atteint +20 pips. Par peur, il ferme le trade.', 'Le prix continue jusqu\'au TP de 60 pips. Il a gagné 20 au lieu de 60.', 'Sur 10 trades, il ferme toujours à +20 au lieu de +60.', 'Sa stratégie qui aurait gagné 600 pips n\'en gagne que 200. Avec les pertes, il est négatif.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader a un plan clair : TP à 60 pips, SL à 30 pips. Il respecte le plan sur tous les trades. Même quand le prix revient vers son entrée, il ne ferme pas. Sa discipline lui permet de capturer les gains prévus par sa stratégie.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Fermer les gagnants trop tôt', 'Déplacer le Stop Loss par peur', 'Ne pas prendre de trades valides', 'Réduire la taille par peur au lieu de la calculer'] },
        { type: 'summary', points: ['La peur de perdre fait fermer les gagnants trop tôt', 'Elle fait déplacer le Stop Loss par peur', 'Elle empêche de prendre des trades valides', 'Elle réduit le R:R réel et la rentabilité', 'La discipline et la confiance dans le plan la gèrent'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Que provoque la peur de perdre ?', options: ['Fermer les gagnants trop tôt', 'Prendre plus de risque', 'Gagner plus', 'Rien'], correct: 0, explanation: 'La peur de perdre pousse à fermer les trades gagnants trop tôt pour sécuriser un petit profit, réduisant le R:R réel.' },
          { question: 'Comment gérer la peur de perdre ?', options: ['Trader plus', 'Discipline et confiance dans le plan', 'Augmenter le levier', 'Arrêter le trading'], correct: 1, explanation: 'La peur de perdre se gère par la discipline (respecter le plan) et la confiance dans la stratégie (qui a été testée).' },
          { question: 'Pourquoi fermer un gagnant trop tôt est-il problématique ?', options: ['Ce n\'est pas un problème', 'Le R:R n\'est pas respecté, la stratégie devient perdante', 'Le broker le refuse', 'C\'est mieux'], correct: 1, explanation: 'Fermer un gagnant trop tôt réduit le R:R réel. Si le R:R visé était 1:2 mais qu\'on ferme à 1:0,5, la stratégie devient perdante même avec un bon taux de réussite.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Pensez à vos derniers trades. <br>1. Avez-vous fermé un gagnant trop tôt ? <br>2. Quelle aurait été la suite si vous aviez respecté le plan ? <br>3. Comment pouvez-vous améliorer ?', correction: 'Si vous fermez régulièrement les gagnants trop tôt, identifiez l\'émotion (peur de perdre le gain). La solution : faire confiance au plan, utiliser des ordres Take Profit automatiques, et tenir un journal pour suivre le comportement.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je respecte mon Take Profit', 'Je ne ferme pas les gagnants par peur', 'Je ne déplace pas le Stop Loss par peur', 'J\'ai confiance dans mon plan testé'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm9-l2', title: 'L\'avidité',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'L\'<strong>avidité</strong> est le désir de gagner plus, qui pousse à prendre trop de risque, à garder des positions trop longtemps, ou à augmenter la taille de position après des gains.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'L\'avidité provoque : <ul><li>Augmenter la taille de position après une série de gains (euphorie).</li><li>Ne pas fermer une position gagnante en espérant plus (et tout perdre).</li><li>Ouvrir plus de trades que prévu.</li><li>Utiliser un levier plus élevé pour « gagner plus vite ».</li></ul>L\'avidité est l\'opposé de la peur mais est tout aussi destructrice.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'L\'avidité fait prendre des risques excessifs après des gains, ce qui mène à des pertes importantes qui effacent les gains. Un trader qui gagne 5 trades puis augmente sa taille par avidité peut tout perdre en un seul trade.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Un trader gagne 5 trades d\'affilée. Il est euphorique.', 'Il augmente sa taille de position de 0,1 à 0,5 lot.', 'Le 6ème trade perd. La perte est 5× plus grande que d\'habitude.', 'Cette perte efface les gains des 5 trades précédents.', 'L\'avidité a transformé une bonne série en perte nette.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader gagne 5 trades d\'affilée. Il garde la même taille de position. Le 6ème trade perd. La perte est normale (1% du capital). Les gains des 5 trades précédents sont préservés. La discipline prime sur l\'avidité.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Augmenter la taille après des gains', 'Garder une position trop longtemps par avidité', 'Ouvrir plus de trades que prévu', 'Utiliser un levier plus élevé après des gains'] },
        { type: 'summary', points: ['L\'avidité pousse à prendre trop de risque', 'Elle fait augmenter la taille après des gains', 'Elle fait garder les positions trop longtemps', 'Un trade perdant avec une taille augmentée efface les gains', 'La discipline prime sur l\'avidité'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Que provoque l\'avidité ?', options: ['Prudence', 'Prise de risque excessif après des gains', 'Peur', 'Rien'], correct: 1, explanation: 'L\'avidité pousse à prendre plus de risque après des gains : augmenter la taille, garder les positions trop longtemps, ouvrir plus de trades.' },
          { question: 'Que faire après une série de gains ?', options: ['Augmenter la taille', 'Garder la même taille et la même discipline', 'Arrêter de trader', 'Doubler le levier'], correct: 1, explanation: 'Après une série de gains, il faut garder la même taille de position et la même discipline. Ne pas laisser l\'euphorie faire prendre plus de risque.' },
          { question: 'Pourquoi augmenter la taille après des gains est-il dangereux ?', options: ['Ce n\'est pas dangereux', 'Un seul trade perdant avec la taille augmentée peut effacer tous les gains', 'Le broker le refuse', 'C\'est mieux'], correct: 1, explanation: 'Augmenter la taille après des gains fait qu\'un seul trade perdant peut effacer tous les gains précédents, car la perte est proportionnellement plus grande.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Avez-vous déjà augmenté votre taille de position après des gains ? <br>1. Quel a été le résultat ? <br>2. Que devriez-vous faire à la place ?', correction: 'Si vous avez augmenté la taille et perdu, vous avez constaté les effets de l\'avidité. La solution : toujours calculer la taille selon le risque (1-2%), jamais selon l\'euphorie. La taille ne change pas selon les résultats récents.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je garde la même taille après des gains', 'Je n\'augmente pas le levier par avidité', 'Je respecte mon plan de sortie', 'Je ne laisse pas l\'euphorie contrôler mes décisions'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm9-l3', title: 'Le FOMO',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Le <strong>FOMO</strong> (Fear Of Missing Out) est la peur de rater une opportunité. Elle pousse à entrer dans des trades impulsivement, sans analyse, simplement parce que le prix bouge et qu\'on a peur de rater le mouvement.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Le FOMO se manifeste quand on voit le prix monter vite et qu\'on achète sans analyse, de peur de rater la hausse. Ou quand on voit un autre trader gagner et qu\'on veut faire pareil. Le FOMO mène à des entrées au pire moment (au sommet ou au creux), sans plan ni Stop Loss.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Le FOMO est l\'une des causes principales de pertes chez les débutants. Il fait entrer au pire moment, sans analyse ni plan. Reconnaître le FOMO quand il apparaît est la première étape pour le contrôler.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Le trader voit l\'EUR/USD monter vite (+50 pips en 30 min).', 'Il n\'a pas analysé ce mouvement.', 'Par FOMO, il achète au sommet sans Stop Loss.', 'Le prix se retourne et baisse. Il perd 40 pips.', 'S\'il avait attendu et analysé, il aurait vu que le prix était à une résistance.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader voit le prix monter vite. Il reconnaît le FOMO. Il n\'entre pas. Il attend un retracement, analyse le contexte, et entre à un meilleur prix avec un plan. Sa discipline lui évite une perte.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Entrer parce que le prix bouge vite', 'Suivre les trades des autres sans analyse', 'Entrer sans Stop Loss par peur de rater', 'Faire du surtrading par FOMO'] },
        { type: 'summary', points: ['Le FOMO est la peur de rater une opportunité', 'Il fait entrer impulsivement sans analyse', 'Il mène à des entrées au pire moment', 'Reconnaître le FOMO est la première étape', 'Attendre un retracement et analyser avant d\'entrer'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce que le FOMO ?', options: ['La peur de perdre', 'La peur de rater une opportunité', 'L\'avidité', 'La discipline'], correct: 1, explanation: 'Le FOMO (Fear Of Missing Out) est la peur de rater une opportunité, qui pousse à entrer impulsivement sans analyse.' },
          { question: 'Que faire quand on ressent le FOMO ?', options: ['Entrer immédiatement', 'Ne pas entrer, attendre et analyser', 'Augmenter le levier', 'Vendre'], correct: 1, explanation: 'Quand on ressent le FOMO, il ne faut pas entrer. Attendre un retracement, analyser le contexte, et entrer avec un plan.' },
          { question: 'Pourquoi le FOMO mène-t-il à des pertes ?', options: ['Il fait entrer au pire moment sans analyse', 'Il fait utiliser un levier bas', 'Il fait respecter le plan', 'Rien'], correct: 0, explanation: 'Le FOMO fait entrer au pire moment (sommet ou creux) sans analyse ni plan, ce qui mène à des pertes.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Avez-vous déjà acheté impulsivement parce que le prix montait vite ? <br>1. Quel a été le résultat ? <br>2. Comment reconnaître le FOMO la prochaine fois ?', correction: 'Le FOMO se reconnaît à l\'envie d\'entrer sans avoir analysé, la sensation d\'urgence, et la peur de rater. La solution : ne jamais entrer sans plan, attendre un retracement, et analyser avant toute décision.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je reconnais le FOMO quand il apparaît', 'Je n\'entre pas sans analyse', 'J\'attends un retracement ou un signal', 'Je n\'ai pas de sensation d\'urgence'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm9-l4', title: 'Revenge trading et surtrading',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Le <strong>revenge trading</strong> consiste à ouvrir une position (souvent plus grosse) immédiatement après une perte pour « se refaire ». Le <strong>surtrading</strong> consiste à ouvrir trop de trades, trop souvent, sans analyse suffisante.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Le revenge trading est la réaction émotionnelle la plus destructrice. Après une perte, le trader est en colère et veut récupérer son argent. Il ouvre une position plus grosse, sans analyse, souvent dans le même sens que le trade perdant. Le résultat est presque toujours une perte plus grande. Le surtrading est lié : on trade par ennui, par FOMO, ou par émotion, pas par analyse.' },
        { type: 'callout', variant: 'danger', title: 'Le revenge trading détruit des comptes', content: 'Le revenge trading est le comportement qui détruit le plus de comptes de trading. Après une perte, NE JAMAIS ouvrir une position immédiatement pour « se refaire ». Prendre une pause, analyser, et reprendre le lendemain.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Le revenge trading et le surtrading sont les deux comportements les plus destructeurs en trading. Ils transforment une perte normale (qui fait partie du trading) en catastrophe. Les limites journalières (Module 8) sont la protection contre ces comportements.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Un trader perd 50€ sur un trade. Il est frustré.', 'Il ouvre immédiatement une position 2× plus grosse.', 'Il perd encore : -100€. Total : -150€ en 10 minutes.', 'Il ouvre une 3ème position 3× plus grosse. Perte : -150€.', 'Total : -300€ en 15 minutes. Le revenge trading a transformé une perte de 50€ en 300€.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader perd 50€. Il ressent de la frustration mais se souvient de sa règle : pas plus de 3 pertes par jour. Il arrête, analyse le trade au calme, et reprend le lendemain. La perte reste à 50€.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Ouvrir une position juste après une perte', 'Augmenter la taille après une perte', 'Trader par ennui ou émotion', 'Ne pas respecter les limites journalières'] },
        { type: 'summary', points: ['Le revenge trading = se refaire après une perte (destructeur)', 'Le surtrading = trop de trades sans analyse', 'Le revenge trading détruit le plus de comptes', 'Les limites journalières protègent contre ces comportements', 'Prendre une pause après une perte est essentiel'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce que le revenge trading ?', options: ['Gagner après une perte', 'Ouvrir une position plus grosse après une perte pour se refaire', 'Une stratégie', 'Un type d\'indicateur'], correct: 1, explanation: 'Le revenge trading consiste à ouvrir une position (souvent plus grosse) immédiatement après une perte pour récupérer l\'argent perdu. C\'est extrêmement destructeur.' },
          { question: 'Que faire après une perte ?', options: ['Ouvrir une position plus grosse', 'Prendre une pause et analyser', 'Augmenter le levier', 'Continuer à trader'], correct: 1, explanation: 'Après une perte, il faut prendre une pause, analyser le trade au calme, et ne pas ouvrir de nouvelle position immédiatement.' },
          { question: 'Qu\'est-ce que le surtrading ?', options: ['Une bonne pratique', 'Ouvrir trop de trades trop souvent sans analyse', 'Un type d\'ordre', 'Une stratégie'], correct: 1, explanation: 'Le surtrading consiste à ouvrir trop de trades, trop souvent, sans analyse suffisante. C\'est souvent lié à l\'ennui, au FOMO ou à l\'émotion.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Avez-vous déjà fait du revenge trading ? <br>1. Quel a été le résultat ? <br>2. Quelle règle pouvez-vous mettre en place pour l\'éviter ?', correction: 'Le revenge trading transforme une petite perte en grosse perte. La règle : après une perte, ne pas ouvrir de nouvelle position immédiatement. Prendre une pause de 15 minutes minimum. Respecter la limite de 3 pertes par jour.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je ne fais pas de revenge trading', 'Je prends une pause après une perte', 'Je respecte mes limites journalières', 'Je ne trade pas par ennui ou émotion'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm9-l5', title: 'Biais cognitifs et discipline',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Les <strong>biais cognitifs</strong> sont des distorsions du jugement qui affectent les décisions. En trading, les principaux sont : biais de confirmation, biais de récence, aversion à la perte, effet de disposition. La <strong>discipline</strong> est la capacité à suivre son plan malgré les émotions.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'table', headers: ['Biais', 'Description', 'Impact en trading'], rows: [
          ['Confirmation', 'Chercher les informations qui confirment son opinion', 'Ignorer les signaux contraires à son trade'],
          ['Récence', 'Donner plus de poids aux événements récents', 'Changer de stratégie après quelques pertes'],
          ['Aversion à la perte', 'La perte fait plus mal que le gain fait plaisir', 'Fermer les gagnants tôt, garder les perdants'],
          ['Disposition', 'Vendre les gagnants, garder les perdants', 'Pertes importantes, gains limités'],
          ['Suroptimisme', 'Surestimer ses capacités', 'Prendre trop de risque, ne pas utiliser de SL']
        ]},
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Les biais cognitifs affectent tous les traders, même les plus expérimentés. Les reconnaître est la première étape pour les contrer. La discipline (suivre le plan malgré les émotions) est le remède principal contre les biais.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Un trader a acheté l\'EUR/USD. Il ne cherche que les arguments pour la hausse.', 'Il ignore les signaux de retournement (biais de confirmation).', 'Le prix baisse. Il garde la position en pensant « ça va remonter » (aversion à la perte).', 'La perte s\'aggrave. Sa discipline aurait dû lui faire couper au Stop Loss.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader reconnaît son biais de confirmation. Il cherche volontairement des arguments contre son trade. Il trouve des signaux de retournement. Il ferme sa position au Stop Loss comme prévu. La discipline prime sur le biais.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Ne pas reconnaître ses biais', 'Changer de stratégie après quelques pertes (récence)', 'Garder les perdants (aversion à la perte)', 'Vendre les gagnants trop tôt (disposition)'] },
        { type: 'summary', points: ['Les biais cognitifs affectent tous les traders', 'Biais de confirmation : ignorer les signaux contraires', 'Aversion à la perte : garder les perdants', 'La discipline est le remède principal', 'Reconnaître ses biais est la première étape'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Qu\'est-ce que le biais de confirmation ?', options: ['Vendre trop tôt', 'Chercher les informations qui confirment son opinion', 'Acheter trop', 'Rien'], correct: 1, explanation: 'Le biais de confirmation consiste à chercher et retenir uniquement les informations qui confirment son opinion, en ignorant les signaux contraires.' },
          { question: 'Qu\'est-ce que l\'aversion à la perte ?', options: ['La perte fait plus mal que le gain fait plaisir', 'L\'amour du risque', 'La peur de gagner', 'Rien'], correct: 0, explanation: 'L\'aversion à la perte est le fait que la douleur d\'une perte est ressentie plus fortement que le plaisir d\'un gain équivalent. Cela pousse à garder les perdants et fermer les gagnants trop tôt.' },
          { question: 'Quel est le remède principal contre les biais ?', options: ['Levier élevé', 'La discipline (suivre le plan)', 'Plus d\'indicateurs', 'Arrêter le trading'], correct: 1, explanation: 'La discipline — suivre son plan malgré les émotions et les biais — est le remède principal contre les distorsions du jugement.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Identifiez vos biais : <br>1. Cherchez-vous les arguments contre votre trade ? <br>2. Gardez-vous parfois des perdants en espérant ? <br>3. Changez-vous de stratégie après quelques pertes ?', correction: 'Si vous répondez oui à ces questions, vous êtes sujet aux biais de confirmation, d\'aversion à la perte et de récence. La solution : un plan écrit, un journal de trading, et la discipline de suivre le plan.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je cherche des arguments contre mon trade', 'Je coupe mes pertes au Stop Loss', 'Je ne change pas de stratégie après quelques pertes', 'Je vends les perdants et garde les gagnants selon le plan'] },
        { type: 'note' }
      ]
    },
    {
      id: 'm9-l6', title: 'Journal de trading et routine',
      sections: [
        { type: 'heading', content: 'Définition simple' },
        { type: 'text', content: 'Un <strong>journal de trading</strong> est un document où vous enregistrez chaque trade : raison d\'entrée, niveau de SL/TP, résultat, émotions. Une <strong>routine</strong> est un ensemble d\'habitudes quotidiennes qui structurent votre activité de trading.' },
        { type: 'heading', content: 'Explication approfondie' },
        { type: 'text', content: 'Le journal de trading permet d\'identifier des schémas : quels setups fonctionnent, quelles heures sont les plus rentables, quelles émotions mènent à des erreurs. Sans journal, on répète les mêmes erreurs sans le savoir. La routine structure la journée : analyse du calendrier le matin, trading selon le plan, revue des trades le soir.' },
        { type: 'heading', content: 'Pourquoi ce concept est important' },
        { type: 'text', content: 'Le journal est l\'outil d\'amélioration le plus puissant. Il transforme le trading d\'une activité aléatoire en un processus mesurable. La routine crée la discipline qui sépare les traders gagnants des traders perdants.' },
        { type: 'heading', content: 'Exemple concret' },
        { type: 'list', ordered: true, items: ['Un trader note chaque trade : paire, sens, raison, SL, TP, résultat, émotion.', 'Après 50 trades, il analyse : 70% de ses pertes viennent de trades impulsifs.', 'Il ajuste : il ne trade plus sans analyse complète.', 'Ses résultats s\'améliorent. Le journal a identifié le problème.', 'Sa routine : calendrier à 8h, trading de 9h à 12h, revue à 17h.'] },
        { type: 'heading', content: 'Exemple contraire' },
        { type: 'text', content: 'Un trader ne tient pas de journal. Il perd régulièrement mais ne sait pas pourquoi. Il change de stratégie toutes les semaines. Sans journal, il ne peut pas identifier ce qui fonctionne et ce qui ne fonctionne pas.' },
        { type: 'heading', content: 'Erreurs fréquentes' },
        { type: 'list', items: ['Ne pas tenir de journal', 'Noter les trades sans noter les émotions', 'Ne pas analyser le journal régulièrement', 'N\'avoir aucune routine'] },
        { type: 'summary', points: ['Le journal enregistre chaque trade avec sa raison et son résultat', 'Il permet d\'identifier les schémas et les erreurs', 'La routine structure la journée de trading', 'Le journal est l\'outil d\'amélioration le plus puissant', 'Sans journal, on répète les mêmes erreurs'] },
        { type: 'heading', content: 'Quiz' },
        { type: 'quiz', questions: [
          { question: 'Que faut-il noter dans un journal de trading ?', options: ['Rien', 'Raison d\'entrée, SL, TP, résultat, émotions', 'Seulement le profit', 'Seulement la paire'], correct: 1, explanation: 'Un journal complet note : la paire, le sens, la raison d\'entrée, le SL, le TP, le résultat, et les émotions ressenties pendant le trade.' },
          { question: 'Pourquoi tenir un journal ?', options: ['Pour le plaisir', 'Pour identifier les schémas et les erreurs', 'Le broker l\'exige', 'Ce n\'est pas utile'], correct: 1, explanation: 'Le journal permet d\'identifier des schémas : quels setups fonctionnent, quelles émotions mènent à des erreurs, quelles heures sont rentables.' },
          { question: 'Qu\'est-ce qu\'une routine de trading ?', options: ['Trader sans plan', 'Un ensemble d\'habitudes quotidiennes qui structurent le trading', 'Un type d\'indicateur', 'Une stratégie'], correct: 1, explanation: 'Une routine de trading est un ensemble d\'habitudes quotidiennes (calendrier le matin, trading selon le plan, revue le soir) qui créent la discipline.' }
        ]},
        { type: 'heading', content: 'Exercice pratique' },
        { type: 'exercise', question: 'Créez votre routine de trading : <br>1. Que faites-vous le matin avant de trader ? <br>2. Quelles sont vos heures de trading ? <br>3. Que faites-vous le soir ?', correction: 'Exemple de routine : 8h00 — vérifier le calendrier économique. 8h30 — analyser les graphiques (D1, H4). 9h00-12h00 — trading selon le plan. 17h00 — revue des trades dans le journal. Cette routine crée la discipline.' },
        { type: 'heading', content: 'Checklist' },
        { type: 'checklist', items: ['Je tiens un journal de trading', 'Je note mes émotions dans le journal', 'J\'analyse mon journal régulièrement', 'J\'ai une routine quotidienne', 'Je ne trade pas en dehors de mes heures prévues'] },
        { type: 'note' }
      ]
    }
  ]
}
