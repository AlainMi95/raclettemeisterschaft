import type { Dictionary } from './de';

const en: Dictionary = {
  site: {
    name: 'Raclette Meisterschaft',
    description: 'Information, news and rules for the Raclette Meisterschaft.',
  },
  a11y: {
    mainNav: 'Main navigation',
    languageToggle: 'Choose language',
    menu: 'Menu',
  },
  nav: {
    home: 'Home',
    news: 'News',
    livestream: 'Live Stream',
    registration: 'Registration',
    rules: 'Rules',
    pastEvents: 'Past Events',
    sponsors: 'Sponsors',
    about: 'About',
    faq: 'FAQ',
  },
  footer: {
    copyright: 'Raclette Meisterschaft',
  },
  home: {
    flyerAlt:
      'Flyer: 3rd Mittelländer Raclette-Meisterschaft. «Wär schuflet am meistä?» Sunday 3 January 2027, starts 5 pm, Rämistrasse 24, 8001 Zürich. «Mäld dis Team ah uf: raclettemeisterschaft.ch»',
  },
  about: {
    story: {
      title: 'How it all began',
      paragraphs: [
        'The Mittelländer Raclette-Meisterschaft is one of the most tradition-steeped championships for raclette enthusiasts in Switzerland. It all started with a good-humoured war of words between two shared flats from the cantons of Solothurn and Zurich. Since then, it has grown into an ambitious, sporting and increasingly professional competition.',
        'The idea was simple: to settle once and for all which team can eat more raclette. At the first, still gloriously amateurish edition in January 2025, the team from the canton of Solothurn took the win. That sparked some serious ambition – especially in Team Zurich. A rematch was demanded before the last Pfännli had even cooled down.',
        'To turn the friendly duel into a fair competition, everyone involved drew up a binding set of rules together. Ever since, it has been the foundation for a sporting, fair and as professional as possible championship.',
        'The second edition in January 2026 is where things really took off. The championship was organised more professionally, the teams competed in custom-designed jerseys for the first time, and we brought a strong partner on board with our first sponsor. And then the highlight: for the first time, the championship was streamed live on Twitch, in front of a heart-melting number of viewers. Suddenly raclette connoisseurs around the world were cheering along, and our cheese feast became an event with an enthusiastic fan base.',
        'Interest in the championship has kept growing ever since. That’s why we’re now opening the doors to new teams from all over the Mittelland. What began as a private contest between two shared flats is set to become a meeting place for everyone who shares two things: a love of raclette and the joy of sporting competition.',
      ],
    },
    team: {
      title: 'The OK: Friends of Melted Cheese',
      paragraphs: [
        'Officially, OK stands for Organisationskomitee (organising committee). Unofficially, for «Oberste Käsekommission» (Supreme Cheese Commission). Let’s be honest, the second version suits us better.',
        'We are five friends of melted cheese who turned a crazy idea between two shared flats into a full-blown championship. Our qualifications? Years of experience at the Pfännli, a keen nose for quality cheese and stomachs of steel.',
        'Our committee meetings follow a strict agenda. Item 1: switch on the raclette oven. Item 2: slice the cheese. Item 3: eat the cheese. Items 4 to 7: see items 2 and 3. Somewhere in between, rules, sponsorship deals and Twitch plans come together – usually with slightly greasy fingers on the laptop keyboard.',
        'We share one goal: to finally give melted cheese the sporting glory it deserves. To that end, we plan, we organise and we test. Purely for quality reasons, of course. Strictly scientific. Several times a week.',
      ],
      photoPlaceholder: 'Photo coming soon',
      membersTitle: 'We are:',
      members: [
        { name: 'Beni', role: 'President' },
        { name: 'Jakob', role: 'reigning champion and living cheese legend' },
        { name: 'Elisa', role: 'club founder and instigator of the first duel' },
        { name: 'Jonah', role: 'in charge of all things design and pickles' },
        { name: 'Ramona', role: 'club doctor who really ought to know better' },
      ],
    },
  },
  rules: {
    preamble: {
      title: 'Preamble',
      paragraphs: [
        'The following provisions serve to ensure a uniform, fair and athletically demanding competition and to uphold the traditional values of professional raclette sport.',
        'Where these rules make no explicit provision, interpretation lies at the discretion of the organising committee (OK). The committee is also entitled to impose appropriate sanctions, up to and including disqualification, for serious or clearly unsporting violations.',
        'By taking part in the Mittelländer Raclette-Meisterschaft, all participants agree to these rules and their provisions.',
        'These rules came into force by resolution in December 2025 and were last revised in October 2026.',
      ],
    },
    sections: [
      {
        title: 'Raclette rounds',
        paragraphs: ['In each round, a single slice of raclette cheese is to be melted in the raclette pan.'],
        items: [
          'So-called «double melting» is strictly prohibited.',
          'The slice may be topped with various toppings. Permitted toppings include, but are not limited to: garlic, bacon, mushrooms, spices.',
        ],
      },
      {
        title: 'Potato requirement',
        paragraphs: ['One small potato must be eaten with every melted slice of raclette.'],
        items: [
          'A potato portion counts as «small» as long as the ratio of raclette cheese to potato does not fall below 1:0.5.',
          'A large potato may also be cut into several portions with a knife and assigned to several slices of cheese accordingly.',
          'The minimum amount of potato per cheese must not be undercut.',
          'There is no maximum amount of potato per cheese, but maximising the amount of potato is not recommended for competitive reasons.',
        ],
      },
      {
        title: 'Uniformity of the cheese',
        paragraphs: [
          'To ensure fair competition, the raclette cheese is purchased and checked in advance by the organising committee. It is handed out to the teams on the day of the competition.',
        ],
      },
      {
        title: 'Cheese flow',
        paragraphs: [
          'So-called «pit stops» are not permitted at this event. As soon as the raclette pan has been completely emptied, a new slice of cheese must immediately be placed in it and put into the raclette oven. The pan must not be left unused on purpose. A raclette break may result in disqualification.',
        ],
        statement: {
          author: 'Statement by the reigning champion – J. Fröhlicher',
          text: 'As for the so-called «pit stops» known from certain amateur circles, we clearly call for their rejection! Eating without breaks is essential in competitive raclette, because standing still is strictly forbidden in other top-level sports too. Imagine a marathon runner stopping in the middle of the course to catch their breath – the judges would be gasping for air! It’s exactly the same with raclette: whoever pauses risks the cheese in their stomach calling a strategic team meeting and deciding to go on strike together. To prevent that, the cheese flow has to stay steady – just like the pulse of a professional athlete. Only then can you enter the legendary state of «Fromage Flow» – a kind of cheese transcendence in which you no longer eat the raclette, but the raclette eats you.',
        },
      },
      {
        title: 'Spices',
        paragraphs: [
          'The association sets no guidelines on spices. Participants may season their raclette slices as they please.',
        ],
      },
      {
        title: 'Other side dishes',
        paragraphs: [
          'Likewise, there is no minimum or maximum amount for side dishes such as gherkins, silverskin onions, baby corn, mushrooms, bacon and the like. It is at each participant’s discretion how much of these side dishes to eat.',
        ],
      },
      {
        title: 'Alcohol',
        paragraphs: [
          'Alcohol is permitted in moderation. However, unruly behaviour caused by alcohol may lead to disqualification.',
        ],
        items: [
          'Participants are free to choose their alcoholic drink, provided its alcohol content is below 20 % ABV.',
          'Unruly behaviour or behaviour that disrupts the competition as a result of alcohol consumption may result in disqualification.',
        ],
      },
      {
        title: 'Awarding the titles',
        paragraphs: [
          'Titles are awarded based on the amount of cheese actually eaten, in grams.',
          'Before the competition starts, the total amount of cheese per participant is weighed and recorded. After the competition ends, any remaining slices are weighed again and subtracted from the starting weight.',
        ],
        items: [
          'Each participant is responsible for loading enough cheese onto their own competition plate before the start to be able to reach their personal goal.',
          'Individual ranking: the individual winner is the person who has eaten the largest amount of raclette cheese.',
          'Team ranking: for the team ranking, the amounts of cheese eaten by the four members of each team are added up. The winning team is the team of four that has eaten the largest total amount of raclette cheese in grams.',
          'Every participant takes part in both the individual and the team ranking. It is therefore possible to be the individual winner and a member of the winning team at the same time.',
        ],
      },
    ],
  },
  registration: {
    headline: 'Register your team now!',
    tagline: 'Four people, one oven and over 4 kilos of cheese – who can shovel the most?',
    facts: [
      { label: 'When?', value: '3 January 2027' },
      { label: 'Where?', value: 'Zentralstrasse 34, 8003 Zürich' },
      { label: 'Entry fee', value: 'CHF 100 per team' },
    ],
    notice: {
      title: 'Careful, hot!',
      text: 'Your registration only counts once the entry fee has been paid. Fill in the form, email it to {email} and pay with Twint. Teams that haven’t paid will sadly be left as cold as cheese in the cellar.',
    },
    formLink: 'Download the registration form (PDF, in German)',
    formPending: 'Registration form coming soon',
    steps: {
      title: 'How it works',
      intro: 'A quick and cheesy explanation, so that on the big day no questions are left open – only mouths.',
      items: [
        {
          term: 'The format',
          text: 'Teams of four compete against each other, and there’s double the glory up for grabs: individual wins for the greatest cheese talents and the team win for the strongest squad at the Pfännli. How many teams end up melting for the title is up to you and your registration!',
        },
        {
          term: 'The cheese',
          text: 'The CHF 100 entry fee per team includes 1 kg of cheese for each person. That makes 4 kg per team. Not enough? Then simply buy more, in handy 100 g pieces.',
        },
        {
          term: 'The start',
          text: 'On the signal, everyone starts at the same time. The first slice slides into the pan and the championship begins!',
        },
        {
          term: 'In the thick of it',
          text: 'The Pfännli has to stay hot until there’s no room left in your stomach. Never leave a Pfännli empty – that’s practically a matter of honour here.',
          rulesLink: 'See the raclette rules',
        },
        {
          term: 'Afterwards',
          text: 'Cheese you’ve paid for is yours. Whatever you can’t finish, you take home. That sorts out tomorrow’s dinner too.',
        },
      ],
    },
    included: {
      title: 'Included in the entry fee',
      intro: 'CHF 100 per team, so CHF 25 per person. Melted happiness doesn’t get any cheaper.',
      items: [
        '1 kg of plain raclette cheese per person, so 4 kg for the whole team',
        'A starting place at the 3rd Mittelländer Raclette-Meisterschaft',
        'Other extras, e.g. potatoes, side dishes, raclette oven, fennel tea',
        'Eternal glory (winning team only, sorry)',
      ],
    },
    extras: {
      title: 'And if you want more',
      intro: 'For everyone for whom 1 kg was just the warm-up:',
      items: [
        'Extra cheese in 100 g pieces (price to follow)',
        'Cheese you’ve paid for is yours',
        'Couldn’t finish it? Into the Tupperware and off home with it',
      ],
    },
    closing: 'Pfännli in. Cheese melting. Go!',
  },
  news: {
    items: [
      {
        date: '2026-10-12',
        title: 'We’re now on Instagram too!',
        text: 'Follow us for news, photos and everything about the Mittelländer Raclette-Meisterschaft.',
        link: {
          label: '@raclettemeisterschaft on Instagram',
          url: 'https://www.instagram.com/raclettemeisterschaft/',
        },
      },
    ],
  },
  pastEvents: {
    jumpTo: 'Jump to',
    events: [
      {
        year: '2026',
        title: 'The second Mittelländer Raclette-Meisterschaft – the beginning of something new',
        facts: [
          { label: 'Date', value: '4 January 2026' },
          { label: 'Place', value: 'Zürich' },
          { label: 'Best result', value: '1.2 kg of cheese' },
          { label: 'Team win', value: 'Sporting Raclette Soletta' },
        ],
        body: [
          'After a spectacular start to a rivalry that will be the stuff of legend for generations to come, detailed and unambiguous competition statutes had to be drawn up following the first Mittelländer Raclette-Meisterschaft.',
          'As laid down in these statutes, the 2026 Mittelländer Raclette-Meisterschaft took place on the first Sunday of the new year, 4 January 2026. This time the team from Zurich enjoyed home advantage, as the venue chosen was the home of the unofficially elected but officially born president.',
          'The following two teams competed against each other:',
          ['Sporting Raclette Soletta (SRS)', 'Raclette Club Zürich (RCZ)'],
          'The competition material was an individually assembled 1 kg cheese bouquet provided by «Chäsi Langendorf». We would like to take this opportunity to thank them once again for their sponsorship and professional collaboration.',
          'The athletes arrived at the venue punctually at 4 pm. Competitive spirit was in the air. Final tactical preparations were made, and there was a short photo session for the media.',
          'After the customary cheese weigh-in, the little oven was plugged in at 5:30 pm sharp, marking the start of the championship. The first slices melted quickly, and all participants were still in the best of spirits, eagerly awaiting the next Pfännli.',
          'From slice 15 onwards, things got serious. The first trouser buttons were undone, beads of sweat formed on foreheads, and more than once a Pfännli stayed in the oven a little too long. Only the reigning champion stayed calm, leading the table without breaking a sweat and with plenty of routine.',
          'By slice 20 it was definitely time to get down to business. Which tactic would pay off? Had the training been worth it, or would an undiscovered lactose intolerance come to light? The first athletes dropped out with pale faces and heavy breathing and had to lie down quickly to avoid a possible disqualification in the form of vomiting.',
          'Things also got rougher in the Twitch stream’s comment section. A certain anonymous viewer briefly struck the wrong tone and became abusive towards other viewers. The moderators stepped in immediately, which fortunately calmed things down again.',
          'The big surprise of the evening, however, was a newcomer from Team RCZ who stuck to the heels of the reigning grandmaster and, so to speak, melted along in his slipstream.',
          'A duel developed between these two top athletes, and the tension could not have been higher. The historic sound barrier of 1 kg of cheese was broken after 1 hour and 52 minutes, and from then on anything was possible.',
          'The grandmaster knew his class, but the newcomer from Zurich remained extremely dangerous and unpredictable. Did he perhaps have a bottomless stomach? Did he come from a family of cheesemakers and had kept it secret from everyone until now? The rumour mill was bubbling.',
          'The reigning champion cast a hint of a nervous glance at his unexpected rival – but then a smile flitted across his face: at kilo one hundred, the underdog threw his Pfännli onto the cooling station and was out.',
          'Victory went to the old and new grandmaster, who, with a phenomenal 1.2 kg, was both proud and relieved to have secured the title once again.',
          'As expected, the team from Solothurn won the overall ranking, not least thanks to the outstanding performance of their top melter.',
          'And so another memorable edition of the Mittelländer Raclette-Meisterschaft comes to an end. Great praise to all participants for a wonderful and fair competition and for everyone’s outstanding performances.',
          'Until next time – Rigugegl!',
        ],
      },
      {
        year: '2025',
        title: 'The legend of the first Mittelländer Raclette-Meisterschaft 2025',
        facts: [
          { label: 'Date', value: '5 January 2025' },
          { label: 'Place', value: 'Solothurn' },
          { label: 'Best result', value: '24 slices, 892 g of cheese' },
        ],
        body: [
          'Raclette lovers of note have long boasted of their personal bests in this still very young sport. One ambitious melter from the Zurich area in particular loudly claimed to be the greatest raclette eater north of the Alps. Word of this reached a seasoned raclette lover from the Mittelland, and he could not let it stand. He was certain that nobody could hold a Pfännli to him when it came to raclette. After much teasing, bragging and verbal sparring, it was clear: there had to be a competitive eat-off.',
          'The venue was the tranquil flat of the raclette lover from the Mittelland, located in what is probably the most beautiful baroque town in Switzerland. The town through which the Aare flows, where you constantly come across the number 11, which has its own beer, an annual Harley meet, and where Chris von Rohr has also pitched his tent: Solothurn.',
          'The date chosen was the first Sunday of the new year, 5 January 2025.',
          'The ambitious melter from Zurich arrived with a colourful entourage of hungry mouths and was received in a friendly but reserved manner by the specially crowned local hero from the Mittelland and his flatmates.',
          'No expense was spared on the competition material, and a varied and refreshing selection of different cheeses from «Chäsi Langendorf» was ready and waiting.',
          'Let the games begin. The little oven was plugged in, and the silverskin onions and gherkins were laid out on the plates. The number of slices consumed was counted and entered into an ingenious poll in a WhatsApp group. This way, even an athlete conspicuous by his absence due to illness could follow the melting scores live.',
          'The ambitious melter from the Limmat city and the raclette lover from the Mittelland quickly broke away from the pack and headed towards double-digit slice counts. Hardly anyone could have guessed what top performances these two talents would deliver – and then what nobody thought possible happened: the cheese ran out!',
          'The emergency cheese ration from the freezer was released and eventually defused the situation. The slice counter rose steadily until, in the end, only the two top athletes were still melting. The 20th slice was already waiting to go into the oven when the ambitious melter had to throw in the towel and head for the sofa for some horizontal cheese processing. The Mittelland raclette champion had been decided. With an incredible 24 slices – a total of 892 g of cheese – the raclette lover took the title. Congratulations!',
          'Once the raclette pans had been put down, the rivalry had by no means cooled off. Doubts were soon voiced from the losing side as to whether the competition had been fair. After all, the slice thickness had varied and the final result was based on a back-of-the-envelope calculation. It was clear to everyone: this was not the last championship, and in a year’s time there would have to be a rematch.',
          'Despite everything, it was an extremely successful event with great individual performances. But what was really born that evening was much more than just a raclette dinner: it was the birth of the Mittelländer Raclette-Meisterschaft.',
        ],
      },
    ],
  },
  faq: {
    subtitle: 'Hot questions, melted answers',
    items: [
      {
        question: 'Can we compete as a team of three and just eat more?',
        answer: 'No. Four people, no exceptions. On this point the rules are as hard as an aged mountain cheese.',
      },
      {
        question: 'Can a fifth person come along?',
        answer: 'Absolutely – as a coach, carer or fan with a banner. They’re just not allowed to eat.',
      },
      {
        question: 'What if someone on the team is lactose intolerant?',
        answer: 'Then please don’t compete. They’re very welcome as a spectator.',
      },
      {
        question: 'Should we train beforehand?',
        answer:
          'Of course! Practise handling the Pfännli, refine your scraping technique and mentally set the potatoes aside. Only when it comes to eating: save the best for competition day.',
      },
      {
        question: 'What can we win?',
        answer: 'Fame, glory and possibly a small prize.',
      },
      {
        question: 'What do we need to bring?',
        answer:
          'An appetite, good spirits and your favourite Tupperware. Optional: team jerseys. Everything else is in the rules on this website.',
      },
      {
        question: 'What’s the record?',
        answer: '1.2 kg of cheese, set by Jakob from Team Solothurn. (Jakob, your throne is melting. Maybe.)',
      },
      {
        question: 'Which cheese goes in the Pfännli?',
        answer:
          'Experience tells us to stick with plain cheese. No more experiments with truffle, chilli or wild garlic. We’ll announce the cheese dairy soon.',
      },
      {
        question: 'What happens to cheese we can’t finish?',
        answer:
          'Cheese you’ve paid for is yours. Pack it up, take it home and have raclette again tomorrow (bring your own Tupperware).',
      },
      {
        question: 'Do we need team jerseys?',
        answer:
          'They’re not required, but strongly recommended. A team without jerseys is like raclette without cheese: you can do it, but why would you? With jerseys you won’t just look hungry on Twitch, you’ll look dangerous. We’re happy to recommend a manufacturer – just send us an email.',
      },
      {
        question: 'I can’t be there but want to cheer along. Where’s the stream?',
        answer:
          'Don’t worry, you won’t miss a single bit of cheese! As soon as the Twitch stream is ready, we’ll link it here on the website. Then it’s time to preheat the sofa, get the snacks ready and melt along live. Your own Pfännli on the side is allowed, but sadly it doesn’t count towards the rankings.',
      },
      {
        question: 'Your question wasn’t answered?',
        answer:
          'No problem, just send us an email. We’ll answer anything about cheese, potatoes and hot Pfännli. The only thing we can’t help you with is Jakob’s record – you’ll have to break that yourselves.',
      },
    ],
  },
  pages: {
    news: {
      title: 'News',
      intro: 'Current news will be published here.',
    },
    livestream: {
      title: 'Live Stream',
      intro: 'Follow the Raclette Meisterschaft live here.',
    },
    registration: {
      title: 'Registration',
      intro: 'Register your team for the next Raclette Meisterschaft here.',
    },
    rules: {
      title: 'Rules of the Mittelländer Raclette-Meisterschaft',
      intro: 'The official rules of the competition.',
    },
    pastEvents: {
      title: 'Past Events',
      intro: 'A look back at previous Raclette Meisterschaften and their winners.',
    },
    sponsors: {
      title: 'Sponsors',
      intro: 'Many thanks to our sponsors who make the Raclette Meisterschaft possible.',
    },
    about: {
      title: 'About',
      intro: 'What the Raclette Meisterschaft is and who is behind it.',
    },
    faq: {
      title: 'FAQ',
      intro: 'Answers to frequently asked questions.',
    },
  },
};

export default en;
