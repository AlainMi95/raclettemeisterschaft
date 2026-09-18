const de = {
  site: {
    name: 'Raclette Meisterschaft',
    description: 'Informationen, News und Regeln zur Raclette Meisterschaft.',
  },
  a11y: {
    mainNav: 'Hauptnavigation',
    languageToggle: 'Sprache wählen',
    menu: 'Menü',
  },
  nav: {
    home: 'Start',
    news: 'News',
    about: 'Über uns',
    rules: 'Regeln',
    pastWinners: 'Bisherige Sieger',
  },
  footer: {
    description: 'Informationen, News und Regeln zur Raclette Meisterschaft.',
    pagesHeading: 'Seiten',
    languageHeading: 'Sprache',
    copyright: 'Raclette Meisterschaft',
  },
  home: {
    hero: {
      eyebrow: 'Raclette-Wettbewerb',
      title: 'Raclette Meisterschaft',
      intro:
        'Die Raclette Meisterschaft ist ein Wettbewerb rund um Raclette. Hier finden Sie Informationen zum Anlass, aktuelle News, die Regeln und die bisherigen Sieger.',
      primaryCta: 'Mehr über den Anlass',
      secondaryCta: 'News lesen',
      nextEventLabel: 'Nächster Anlass',
      nextEventValue: 'Datum und Ort werden bekannt gegeben',
    },
    nextEvent: {
      eyebrow: 'Nächster Anlass',
      heading: 'Nächste Meisterschaft',
      dateLabel: 'Datum',
      locationLabel: 'Ort',
      tbd: 'Wird bekannt gegeben',
      note: 'Datum und Ort werden hier und in den News bekannt gegeben.',
      cta: 'Zu den News',
    },
    about: {
      eyebrow: 'Über die Meisterschaft',
      heading: 'Die Raclette Meisterschaft',
      text: 'Erfahren Sie mehr über die Raclette Meisterschaft, den Anlass und die Organisation.',
      cta: 'Mehr erfahren',
    },
    latestNews: {
      eyebrow: 'News',
      heading: 'Aktuelle News',
      dateTbd: 'Datum folgt',
      imagePlaceholder: 'Bild folgt',
      placeholders: [
        {
          category: 'Anlass',
          title: 'Informationen zum nächsten Anlass',
          excerpt: 'Datum und Ort werden bekannt gegeben, sobald sie feststehen.',
        },
        {
          category: 'Wettbewerb',
          title: 'Regeln und Ablauf',
          excerpt: 'Eine Übersicht über die Regeln und den Ablauf des Wettbewerbs.',
        },
        {
          category: 'Allgemein',
          title: 'Fotos und Berichte',
          excerpt: 'Bilder und Berichte zur Meisterschaft werden hier veröffentlicht.',
        },
      ],
      cta: 'Alle News',
    },
    rules: {
      eyebrow: 'Wettbewerb',
      heading: 'Regeln',
      text: 'Alle Regeln der Raclette Meisterschaft auf einen Blick.',
      cta: 'Zu den Regeln',
    },
    pastWinners: {
      eyebrow: 'Archiv',
      heading: 'Bisherige Sieger',
      text: 'Eine Übersicht über die Siegerinnen und Sieger früherer Austragungen.',
      cta: 'Alle Sieger ansehen',
    },
  },
  pages: {
    news: {
      title: 'News',
      intro: 'Hier werden aktuelle Meldungen veröffentlicht.',
    },
    about: {
      title: 'Über uns',
      intro: 'Was die Raclette Meisterschaft ist und wer dahinter steht.',
    },
    rules: {
      title: 'Regeln',
      intro: 'Die offiziellen Regeln des Wettbewerbs.',
    },
    pastWinners: {
      title: 'Bisherige Sieger',
      intro: 'Eine Übersicht über die bisherigen Siegerinnen und Sieger.',
    },
  },
};

export type Dictionary = typeof de;
export default de;
