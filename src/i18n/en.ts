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
    about: 'About',
    rules: 'Rules',
    pastWinners: 'Past Winners',
  },
  footer: {
    description: 'Information, news and rules for the Raclette Meisterschaft.',
    pagesHeading: 'Pages',
    languageHeading: 'Language',
    copyright: 'Raclette Meisterschaft',
  },
  home: {
    hero: {
      eyebrow: 'Raclette competition',
      title: 'Raclette Meisterschaft',
      intro:
        'The Raclette Meisterschaft is a raclette competition. Here you will find information about the event, the latest news, the rules and past winners.',
      primaryCta: 'Learn more about the event',
      secondaryCta: 'Read the news',
      nextEventLabel: 'Next event',
      nextEventValue: 'Date and location will be announced',
    },
    nextEvent: {
      eyebrow: 'Next event',
      heading: 'Next championship',
      dateLabel: 'Date',
      locationLabel: 'Location',
      tbd: 'To be announced',
      note: 'The date and location will be announced here and in the news.',
      cta: 'Go to news',
    },
    about: {
      eyebrow: 'About the championship',
      heading: 'The Raclette Meisterschaft',
      text: 'Learn more about the Raclette Meisterschaft, the event and the organisation.',
      cta: 'Learn more',
    },
    latestNews: {
      eyebrow: 'News',
      heading: 'Latest news',
      dateTbd: 'Date to follow',
      imagePlaceholder: 'Image to follow',
      placeholders: [
        {
          category: 'Event',
          title: 'Information about the next event',
          excerpt: 'The date and location will be announced once confirmed.',
        },
        {
          category: 'Competition',
          title: 'Rules and format',
          excerpt: 'An overview of the rules and format of the competition.',
        },
        {
          category: 'General',
          title: 'Photos and reports',
          excerpt: 'Photos and reports from the championship will be published here.',
        },
      ],
      cta: 'All news',
    },
    rules: {
      eyebrow: 'Competition',
      heading: 'Rules',
      text: 'All rules of the Raclette Meisterschaft at a glance.',
      cta: 'View the rules',
    },
    pastWinners: {
      eyebrow: 'Archive',
      heading: 'Past winners',
      text: 'An overview of the winners of previous editions.',
      cta: 'View all winners',
    },
  },
  pages: {
    news: {
      title: 'News',
      intro: 'Current news will be published here.',
    },
    about: {
      title: 'About',
      intro: 'What the Raclette Meisterschaft is and who is behind it.',
    },
    rules: {
      title: 'Rules',
      intro: 'The official rules of the competition.',
    },
    pastWinners: {
      title: 'Past Winners',
      intro: 'An overview of past winners.',
    },
  },
};

export default en;
