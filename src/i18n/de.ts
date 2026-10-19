/** One numbered section of the rules (Reglement). */
type RuleSection = {
  title: string;
  paragraphs: string[];
  /** Lettered sub-rules a., b., c. … */
  items?: string[];
  /** A quoted statement shown after the section. */
  statement?: { author: string; text: string };
};

/** One news post. */
type NewsItem = {
  /** YYYY-MM-DD */
  date: string;
  title: string;
  text?: string;
  link?: { label: string; url: string };
};

/** One past edition of the championship. */
type PastEvent = {
  year: string;
  title: string;
  facts: { label: string; value: string }[];
  /** Paragraphs of the report; an array of strings is shown as a bullet list. */
  body: (string | string[])[];
};

/** One step of "So funktioniert's" on the registration page. */
type RegistrationStep = {
  term: string;
  text: string;
  /** Optional link to the rules page after the text. */
  rulesLink?: string;
};

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
    livestream: 'Live-Stream',
    registration: 'Anmeldung',
    rules: 'Regeln',
    pastEvents: 'Vergangene Anlässe',
    sponsors: 'Sponsoren',
    about: 'Über uns',
    faq: 'FAQ',
  },
  footer: {
    copyright: 'Raclette Meisterschaft',
  },
  home: {
    flyerAlt:
      'Flyer: 3. Mittelländer Raclette-Meisterschaft. «Wär schuflet am meistä?» So 3. Jan. 27, Start 17 Uhr, Zentralstrasse 34, 8003 Zürich. «Mäld dis Team ah uf: raclettemeisterschaft.ch»',
  },
  about: {
    story: {
      title: 'Entstehungsgeschichte',
      paragraphs: [
        'Die Mittelländer Raclette-Meisterschaft gehört zu den traditionsreichsten Meisterschaften für Raclette-Enthusiasten in der Schweiz. Alles begann mit einem humorvollen Wortgefecht zwischen zwei WGs aus den Kantonen Solothurn und Zürich. Daraus ist inzwischen ein ambitionierter, sportlicher und zunehmend professioneller Wettkampf geworden.',
        'Die Idee war simpel: Ein für alle Mal sollte geklärt werden, welches Team mehr Raclette verzehren kann. Bei der ersten, noch herrlich amateurhaften Austragung im Januar 2025 holte sich das Team aus dem Kanton Solothurn den Sieg. Damit war der Ehrgeiz geweckt – vor allem beim Team Zürich. Die Revanche wurde gefordert, noch bevor das letzte Pfännli abgekühlt war.',
        'Damit aus dem freundschaftlichen Duell ein fairer Wettkampf werden konnte, erarbeiteten die Beteiligten gemeinsam ein verbindliches Reglement. Dieses bildet seither die Grundlage für einen sportlichen, fairen und möglichst professionellen Ablauf der Meisterschaft.',
        'Bei der zweiten Austragung im Januar 2026 startete das Event so richtig durch. Die Meisterschaft wurde professioneller organisiert, die Teams traten erstmals in eigens designten Trikots an und mit unserem ersten Sponsor holten wir einen starken Partner an Bord. Und dann der Höhepunkt: Zum ersten Mal lief die Meisterschaft live auf Twitch, vor einer herzschmelzenden Zahl von Zuschauer:innen. Plötzlich fieberten Raclette-Connaisseurs weltweit mit und aus unserem Käsefest wurde ein Event mit begeisterter Fangemeinde.',
        'Seither ist das Interesse an der Meisterschaft stets weitergewachsen. Deshalb öffnen wir die Türen jetzt für neue Teams aus dem ganzen Mittelland. Was als privates Kräftemessen zwischen zwei WGs begann, soll ein Treffpunkt für alle werden, die zwei Dinge verbindet: die Liebe zu Raclette und die Freude am sportlichen Wettkampf.',
      ],
    },
    team: {
      title: 'Das OK: Freunde des geschmolzenen Käses',
      paragraphs: [
        'Offiziell steht OK für Organisationskomitee. Inoffiziell für «Oberste Käsekommission». Seien wir ehrlich, die zweite Version trifft es bei uns besser.',
        'Wir sind fünf Freunde des geschmolzenen Käses, die aus einer Schnapsidee zweier WGs eine ausgewachsene Meisterschaft gemacht haben. Unsere Qualifikation? Jahrelange Erfahrung am Pfännli, eine ausgeprägte Spürnase für Qualitätskäse und Mägen aus Stahl.',
        'Unsere OK-Sitzungen laufen streng nach Traktandenliste ab. Traktandum 1: Raclette-Ofen einschalten. Traktandum 2: Käse schneiden. Traktandum 3: Käse verzehren. Traktandum 4 bis 7: siehe Traktandum 2 und 3. Irgendwo dazwischen entstehen dann Reglemente, Sponsorendeals und Twitch-Pläne, meist mit leicht fettigen Fingern auf der Laptoptastatur.',
        'Wir haben ein gemeinsames Ziel: geschmolzenem Käse endlich den sportlichen Ruhm zu verschaffen, den er verdient. Dafür planen wir, organisieren wir und testen wir. Natürlich nur aus Qualitätsgründen. Rein wissenschaftlich. Mehrmals pro Woche.',
      ],
      photoPlaceholder: 'Foto folgt',
      membersTitle: 'Wir sind:',
      members: [
        { name: 'Beni', role: 'Präsident' },
        { name: 'Jakob', role: 'amtierender Titelverteidiger und lebende Käselegende' },
        { name: 'Elisa', role: 'Vereinsgründerin und Anstifterin des ersten Duells' },
        { name: 'Jonah', role: 'Verantwortlicher in allen Fragen Design und Essiggurken' },
        { name: 'Ramona', role: 'Vereinsärztin, die es eigentlich besser wissen sollte' },
      ],
    },
  },
  rules: {
    preamble: {
      title: 'Präambel',
      paragraphs: [
        'Die nachfolgenden Bestimmungen dienen der Sicherstellung eines einheitlichen, fairen und sportlich anspruchsvollen Wettkampfs sowie der Wahrung der traditionellen Werte des professionellen Raclette-Sports.',
        'Wo das Reglement keine ausdrückliche Regelung vorsieht, liegt die Auslegung im Ermessen des Organisationskomitees (OK). Dieses ist zudem berechtigt, bei groben oder offensichtlich wettbewerbswidrigen Verstössen geeignete Sanktionen bis hin zur Disqualifikation auszusprechen.',
        'Mit der Teilnahme an der Mittelländer Raclette-Meisterschaft erklären sich sämtliche Teilnehmer:innen mit dem vorliegenden Reglement und dessen Bestimmungen einverstanden.',
        'Das Reglement tritt mit Beschlussfassung im Dezember 2025 in Kraft und wurde zuletzt im Oktober 2026 überarbeitet.',
      ],
    },
    sections: [
      {
        title: 'Raclette-Durchgänge',
        paragraphs: [
          'Pro Durchgang soll eine einzelne Raclettescheibe im Raclette-Pfännchen geschmolzen werden.',
        ],
        items: [
          'Eine sogenannte «Doppelschmelzung» ist streng untersagt.',
          'Die Scheibe darf mit unterschiedlichen Toppings versehen werden. Zulässig sind unter anderem aber nicht ausschliesslich: Knoblauch, Speck, Pilze, Gewürze.',
        ],
      },
      {
        title: 'Kartoffelpflicht',
        paragraphs: ['Pro geschmolzener Raclettescheibe ist zwingend eine kleine Kartoffel zu verzehren.'],
        items: [
          'Als «klein» gilt eine Kartoffelportion, bei welcher das Verhältnis von Raclettekäse zu Kartoffel von 1:0.5 nicht unterschritten wird.',
          'Dazu kann auch eine grosse Kartoffel mittels Messer auf mehrere Portionen aufgeteilt und entsprechend mehreren Käsescheiben zugeordnet werden.',
          'Eine Mindestmenge Kartoffel pro Käse ist nicht zu unterschreiten.',
          'Eine Maximalmenge Kartoffel pro Käse besteht nicht, aber eine Maximierung der Kartoffelmenge ist aus wettkampftechnischen Gründen nicht empfohlen.',
        ],
      },
      {
        title: 'Einheitlichkeit des Käses',
        paragraphs: [
          'Um für faire Wettkampfbedingungen zu sorgen, wird der Raclettekäse bereits im Vorfeld durch das Organisationskomitee bezogen und kontrolliert. Die Abgabe an die Teams erfolgt am Wettkampftag.',
        ],
      },
      {
        title: 'Käsefluss',
        paragraphs: [
          'Sogenannte «Boxenstopps» sind im Rahmen dieses Events nicht erlaubt. Nach dem vollständigen Entleeren des Raclette-Pfännchens ist unverzüglich eine neue Käsescheibe einzulegen und dem Raclette-Ofen zuzuführen. Das Pfännchen darf nicht absichtlich unbenutzt bleiben. Eine Raclette-Pause kann eine Disqualifikation zur Folge haben.',
        ],
        statement: {
          author: 'Stellungnahme des bisherigen Titelverteidigers – J. Fröhlicher',
          text: 'Bezüglich der sogenannten «Boxenstopps», die man aus gewissen Amateurkreisen kennt, rufen wir ganz klar zur Ablehnung auf! Pausenloses Essen ist beim Raclette-Wettkampf essenziell, denn auch in anderen Höchstleistungssportarten ist Stillstand streng verboten. Stellt euch vor, ein Marathonläufer bleibt mitten auf der Strecke stehen, um kurz zu verschnaufen – da würden die Kampfrichter Schnappatmung kriegen! Genauso ist es beim Raclette: Wer pausiert, der riskiert, dass der Käse im Magen eine strategische Teambesprechung einberuft und entscheidet, geschlossen in den Streik zu treten. Damit das nicht passiert, muss der Käsefluss stetig bleiben – ähnlich wie der Puls eines Profiathleten. Nur so kann man in den legendären Zustand des «Fromage-Flow» eintreten – eine Art Käsetranszendenz, in der man nicht mehr isst, sondern vom Raclette gegessen wird.',
        },
      },
      {
        title: 'Gewürze',
        paragraphs: [
          'Beim Thema Gewürze sind von Verbandsseite her keine Richtlinien vorgegeben. Die Teilnehmer:innen dürfen ihre Raclettescheiben nach eigenem Belieben würzen.',
        ],
      },
      {
        title: 'Weitere Beilagen',
        paragraphs: [
          'Bezüglich Beilagen wie Essiggürkli, Silberzwiebeli, Maischölbli, Pilze, Speck und Ähnlichem gibt es ebenfalls keine Mindest- oder Maximalkonsummenge. Es liegt im Ermessen der einzelnen Teilnehmer:innen, inwiefern weitere Beilagen konsumiert werden sollen.',
        ],
      },
      {
        title: 'Alkohol',
        paragraphs: [
          'Alkoholkonsum ist in kontrolliertem Masse erlaubt. Jedoch kann ungesittetes Verhalten durch Alkoholkonsum zu einer Disqualifikation führen.',
        ],
        items: [
          'Die Wahl des alkoholischen Getränks steht den Teilnehmer:innen frei, sofern dieses einen Alkoholgehalt von weniger als 20 % Vol. aufweist.',
          'Ungesittetes oder wettkampfstörendes Verhalten infolge Alkoholkonsums kann eine Disqualifikation zur Folge haben.',
        ],
      },
      {
        title: 'Titelvergabe',
        paragraphs: [
          'Die Auswertung für die Titelvergabe erfolgt anhand der effektiv konsumierten Käsemenge in Gramm.',
          'Vor Beginn des Wettkampfes wird die Gesamtmenge des Käses pro Teilnehmer:in gewogen und protokolliert. Nach Ende des Wettkampfes werden die eventuell noch verbliebenen Scheiben erneut gewogen und vom Anfangsgewicht abgezogen.',
        ],
        items: [
          'Jede:r Teilnehmer:in ist selbst dafür verantwortlich, vor Beginn des Wettkampfs ausreichend Käse auf den eigenen Wettkampfteller zu laden, um das persönliche Wettkampfziel erreichen zu können.',
          'Einzelwertung: Einzelsieger:in wird jene Person, welche die grösste Menge Raclettekäse konsumiert hat.',
          'Teamwertung: Für die Teamwertung werden die konsumierten Käsemengen der jeweils vier Teammitglieder addiert. Teamsieger wird jenes Viererteam, welches gemeinsam die grösste Gesamtmenge Raclettekäse in Gramm konsumiert hat.',
          'Ein:e Teilnehmer:in nimmt sowohl an der Einzelwertung als auch an der Teamwertung teil. Es ist somit möglich, gleichzeitig Einzelsieger:in und Mitglied des Siegerteams zu sein.',
        ],
      },
    ] as RuleSection[],
  },
  registration: {
    headline: 'Meldet euer Team jetzt an!',
    tagline: 'Vier Leute, ein Ofen und über 4 Kilo Käse – wer schaufelt am meisten?',
    facts: [
      { label: 'Wann?', value: '3. Januar 2027' },
      { label: 'Wo?', value: 'Zentralstrasse 34, 8003 Zürich' },
      { label: 'Startgeld', value: 'CHF 100 pro Team' },
    ],
    notice: {
      title: 'Achtung, heiss!',
      /** {email} is replaced with the clickable contact address. */
      text: 'Eure Anmeldung gilt erst, wenn das Startgeld bezahlt ist. Formular ausfüllen, per E-Mail an {email} schicken, mit Twint bezahlen. Teams ohne Zahlung bleiben leider kalt wie ein Käse im Keller.',
    },
    formLink: 'Anmeldeformular herunterladen (PDF)',
    formPending: 'Anmeldeformular folgt',
    steps: {
      title: 'So funktioniert’s',
      intro: 'Kurz und käsig erklärt, damit am Tag X keine Fragen offen bleiben, nur die Münder.',
      items: [
        {
          term: 'Die Runde',
          text: 'Es treten 4er-Teams gegeneinander an und zu holen gibt es gleich doppelt Ruhm: Einzelsiege für die grössten Käse-Talente und den Teamsieg für die stärkste Truppe am Pfännli. Wie viele Teams am Ende um den Titel schmelzen, entscheidet ihr mit eurer Anmeldung!',
        },
        {
          term: 'Der Käse',
          text: 'Im Startgeld von CHF 100 pro Team ist für jede Person 1 kg Käse inklusive. Macht 4 kg pro Team. Reicht nicht? Dann kauft ihr einfach nach, in handlichen 100-g-Stücken.',
        },
        {
          term: 'Das Kommando',
          text: 'Auf Kommando geht’s für alle gleichzeitig los. Das erste Käsli schlüpft in die Pfanne und die Meisterschaft beginnt!',
        },
        {
          term: 'Mittendrin',
          text: 'Das Pfännli muss heiss bleiben, bis der Magen keinen Platz mehr hat. Kein Pfännli leer stehen lassen, das ist hier quasi Ehrensache.',
          rulesLink: 'Siehe Raclette-Regeln',
        },
        {
          term: 'Danach',
          text: 'Gekaufter Käse ist euer Eigentum. Was ihr nicht mehr schafft, nehmt ihr mit nach Hause. Das Znacht für morgen ist damit auch gleich geregelt.',
        },
      ] as RegistrationStep[],
    },
    included: {
      title: 'Das ist im Startgeld inklusive',
      intro: 'CHF 100 pro Team, also CHF 25 pro Person. Günstiger wird geschmolzenes Glück nicht.',
      items: [
        '1 kg Naturkäse pro Person, also 4 kg fürs ganze Team',
        'Ein Startplatz an der 3. Austragung der Mittelländer Raclette-Meisterschaft',
        'Weitere Leistungen, z. B. Kartoffeln, Beilagen, Raclette-Ofen, Fenchel-Tee',
        'Ewiger Ruhm (gilt nur fürs Siegerteam, sorry)',
      ],
    },
    extras: {
      title: 'Und wenn’s mehr sein darf',
      intro: 'Für alle, bei denen 1 kg erst das Aufwärmen war:',
      items: [
        'Zusatzkäse in 100-g-Stücken (Preis folgt)',
        'Gekaufter Käse gehört euch',
        'Nicht geschafft? Ab ins Tupperware und mit nach Hause',
      ],
    },
    closing: 'Pfännli rein. Käse schmelzen. Los!',
  },
  news: {
    /** Newest first. date: YYYY-MM-DD */
    items: [
      {
        date: '2026-10-12',
        title: 'Wir sind neu auch auf Instagram!',
        text: 'Folgt uns für News, Bilder und alles rund um die Mittelländer Raclette-Meisterschaft.',
        link: {
          label: '@raclettemeisterschaft auf Instagram',
          url: 'https://www.instagram.com/raclettemeisterschaft/',
        },
      },
    ] as NewsItem[],
  },
  livestream: {
    text: 'Die Meisterschaft wird live auf Twitch übertragen. Hier könnt ihr den Stream schauen und mitfiebern:',
    link: 'Zum Stream auf Twitch',
  },
  pastEvents: {
    jumpTo: 'Springe zu',
    /** Newest first. */
    events: [
      {
        year: '2026',
        title: 'Die zweite Mittelländer Raclette-Meisterschaft – Beginn von etwas Neuem',
        facts: [
          { label: 'Datum', value: '4. Januar 2026' },
          { label: 'Ort', value: 'Zürich' },
          { label: 'Bestleistung', value: '1,2 kg Käse' },
          { label: 'Teamsieg', value: 'Sporting Raclette Soletta' },
        ],
        body: [
          'Nach einem fulminanten Start in eine noch über mehrere Generationen sagenumwobene Rivalität mussten nach der ersten Austragung der Mittelländer Raclette-Meisterschaft ausführliche und unmissverständliche Wettbewerbsstatuten aufgestellt werden.',
          'Wie in diesen Statuten festgelegt, fand die Mittelländer Raclette-Meisterschaft 2026 am ersten Sonntag im neuen Jahr statt, also am 4. Januar 2026. Heimvorteil konnte dieses Mal das Team aus Zürich geniessen, da als Austragungsort die vier Wände des inoffiziell gewählten, aber offiziell so geborenen Präsis gewählt wurden.',
          'Folgende zwei Teams traten gegeneinander an:',
          ['Sporting Raclette Soletta (SRS)', 'Raclette Club Zürich (RCZ)'],
          'Als Wettkampfmaterial diente ein individuell zusammengestelltes 1-kg-Käsebouquet, bereitgestellt von der «Chäsi Langendorf». An dieser Stelle möchten wir uns noch einmal herzlich für das Sponsoring und die professionelle Zusammenarbeit bedanken.',
          'Die Athlet:innen trafen pünktlich um 16 Uhr am Austragungsort ein. Es lag Wettkampfstimmung in der Luft. Letzte taktische Vorbereitungen und ein kurzer Fototermin für die Medien wurden vollzogen.',
          'Nach dem standesgemässen Käsewiegen wurde um Punkt 17:30 Uhr das Öfeli eingesteckt und somit der Startschuss für die Meisterschaft gegeben. Rasch waren die ersten Scheiben geschmolzen, und sämtliche Teilnehmer:innen waren noch bester Laune und warteten gluschtig auf das nächste Pfännli.',
          'Ab Scheibe 15 wurde es dann ernst. Erste Hosenknöpfe wurden geöffnet, Schweissperlen bildeten sich auf den Stirnen, und des Öfteren blieb ein Pfännli ein wenig zu lange im Öfeli. Nur der amtierende Meister blieb ruhig und führte die Tabelle schweissfrei mit viel Routine an.',
          'Ab Scheibe 20 war es definitiv so weit, jetzt ging es ans Eingemachte. Welche Taktik geht auf? Hat sich das Training ausbezahlt oder kommt doch eine unentdeckte Laktoseintoleranz zum Vorschein? Erste Athlet:innen schieden mit bleichen Gesichtern und schwerem Atmen aus und mussten sich rasch in die Horizontale begeben, um einer möglichen Disqualifikation in Form von Erbrechen entgegenzuwirken.',
          'Auch in der Kommentarspalte des Twitch-Streams wurde der Ton rauer. Ein gewisser anonymer Zuschauer verfehlte kurzzeitig den Ton und wurde gegenüber anderen Zuschauenden ausfällig. Sofort wurde von der Moderation eingegriffen, was die Wogen zum Glück wieder glätten konnte.',
          'Die grosse Überraschung des Abends war aber, dass sich ein Neuling aus dem Team RCZ an die Fersen des amtierenden Grossmeisters heftete und sozusagen im Windschatten mitschmolz.',
          'Es entstand ein Duell zwischen diesen beiden Top-Athleten, und die Spannung hätte nicht grösser sein können. Die historische Schallmauer von 1 kg Käse wurde nach 1 Stunde und 52 Minuten geknackt, und ab jetzt war alles möglich.',
          'Der Grossmeister wusste um seine Klasse, doch auch der Neuling aus Zürich blieb brandgefährlich und unberechenbar. Hatte er vielleicht einen Stopfmagen? Kommt er aus einer Käsereifamilie und hat dies bis dato allen verheimlicht? Die Gerüchteküche brodelte.',
          'Ein angedeutet nervöser Blick des amtierenden Meisters zum unerwarteten Rivalen, doch schon huscht ihm ein Lächeln übers Gesicht, bei Kilo einhundert warf der Underdog sein Pfännli auf die Abkühlstation und schied somit aus.',
          'Der Sieg gehörte dem alten und neuen Grossmeister, der mit einer sagenhaften Leistung von 1,2 kg sowohl stolz als auch erleichtert war, konnte er sich den Titel doch erneut sichern.',
          'Im Gesamtklassement konnte sich das Team aus Solothurn erwartungsgemäss den Sieg holen, insbesondere durch die Spitzenleistung ihres Topschmelzers.',
          'Damit geht eine weitere denkwürdige Ausgabe der Mittelländer Raclette-Meisterschaft zu Ende. Ein grosses Lob an alle Teilnehmer:innen für diesen tollen und fairen Wettkampf sowie die herausragenden Leistungen aller.',
          'Bis zum nächsten Mal, Rigugegl!',
        ],
      },
      {
        year: '2025',
        title: 'Die Sage der ersten Mittelländer Raclette-Meisterschaft 2025',
        facts: [
          { label: 'Datum', value: '5. Januar 2025' },
          { label: 'Ort', value: 'Solothurn' },
          { label: 'Bestleistung', value: '24 Scheiben, 892 g Käse' },
        ],
        body: [
          'Seit jeher schmücken sich viele namhafte Racletteliebhaber:innen mit ihren persönlichen Bestleistungen in diesem noch sehr jungen Sport. Insbesondere eine ambitionierte Schmelzerin aus dem Raum Zürich behauptete lauthals, sie sei die grösste Raclette-Esserin nördlich der Alpen. Dies kam einem routinierten Racletteliebhaber aus dem Mittelland zu Ohren und das konnte er so nicht stehen lassen. Er war sich sicher, dass keine Person in Sachen Raclette ihm das Pfännli reichen konnte. Nach langen Sticheleien, Prahlereien und Wortgefechten war es klar: Es musste ein Wettkampfessen her.',
          'Als Austragungsort diente die beschauliche Wohnung des Racletteliebhabers aus dem Mittelland, gelegen in der wohl schönsten Barockstadt der Schweiz. Jene Stadt, durch welche die Aare fliesst, in der man der Zahl 11 permanent begegnet, die über ein eigenes Bier verfügt, ein jährlich stattfindendes Harley-Treffen hat und in welcher auch Chris von Rohr seine Zelte aufgeschlagen hat: Solothurn.',
          'Als Datum wählte man den ersten Sonntag im neuen Jahr, den 5. Januar 2025.',
          'Die ambitionierte Schmelzerin aus Zürich reiste mit einer bunten Entourage aus hungrigen Mäulern an und wurde vom eigens gekürten Lokalmatador aus dem Mittelland und seinen WG-Gspändlis freundlich, aber distanziert empfangen.',
          'Bei der Wahl des Wettkampfmaterials wurde nicht gespart, und eine abwechslungsreiche und erfrischende Auswahl an verschiedenen Käsesorten aus der «Chäsi Langendorf» lag bereit.',
          'Es konnte losgehen. Das Öfeli wurde ans Stromnetz angeschlossen und die Silberzwiebeli und Essiggürkli auf dem Teller bereitgelegt. Gemessen wurde die Anzahl einverleibter Käsescheiben, eingetragen in eine raffinierte Umfrage in einer WhatsApp-Gruppe. So konnte auch ein Athlet, der krankheitsbedingt mit Abwesenheit glänzte, die Schmelzzwischenstände live mitverfolgen.',
          'Rasch lösten sich die ambitionierte Schmelzerin aus der Limmatstadt und der Racletteliebhaber aus dem Mittelland von der Gruppe ab und bewegten sich in Richtung zweistellige Anzahl Scheiben. Kaum einer konnte ahnen, was diese beiden Talente für Höchstleistungen erbringen würden, und es geschah, was niemand für möglich hielt: Der Käse ging aus!',
          'Die Notkäseration aus dem Gefrierfach wurde freigegeben und konnte die Situation schlussendlich entschärfen. Der Käsescheibencounter stieg kontinuierlich an, bis am Ende nur noch die beiden Spitzenathlet:innen am Schmelzen waren. Die 20. Scheibe lag schon bereit für ins Öfeli, als die ambitionierte Schmelzerin das Handtuch werfen und sich Richtung Sofa zur horizontalen Käsenachverarbeitung bewegen musste. Der Mittelländer Raclettemeister stand somit fest. Mit sage und schreibe 24 Scheiben – mit einem Gesamtgewicht von 892 g Käse – holte sich der Racletteliebhaber den Titel. Herzliche Gratulation!',
          'Nach Ablegen der Raclette-Pfännli wurden die Rivalitäten keineswegs abgekühlter. Es wurden von der Verliererseite rasch Zweifel laut, ob der Wettkampf fair gewesen sei. Schliesslich habe die Scheibendicke variiert und das Endresultat basiere auf einer Milchbüchli-Rechnung. Es war allen klar: Das war nicht die letzte Meisterschaft, und in einem Jahr muss die Revanche her.',
          'Trotz allem war es ein ausgesprochen gelungener Anlass, mit tollen Einzelleistungen. Was an diesem Abend jedoch wirklich geboren wurde, war weit mehr als nur ein Raclette-Essen: Es war die Geburtsstunde der Mittelländer Raclette-Meisterschaft.',
        ],
      },
    ] as PastEvent[],
  },
  faq: {
    subtitle: 'Heisse Fragen, geschmolzene Antworten',
    items: [
      {
        question: 'Können wir zu dritt antreten und einfach mehr essen?',
        answer: 'Nein. Vier Personen, keine Ausnahmen. Das Reglement ist da hart wie alter Bergkäse.',
      },
      {
        question: 'Darf eine fünfte Person mitkommen?',
        answer: 'Sehr gerne, als Coach, Pflege oder als Fan mit Transparent. Mitessen darf sie nicht.',
      },
      {
        question: 'Was, wenn jemand im Team Laktose nicht verträgt?',
        answer: 'Dann bitte nicht antreten. Die Person ist als Zuschauer:in herzlich willkommen.',
      },
      {
        question: 'Sollen wir vorher trainieren?',
        answer:
          'Klar! Pfännli-Handgriff üben, Schab-Technik verfeinern und Kartoffeln mental beiseitelegen. Nur beim Essen gilt: Das Beste kommt am Wettkampftag.',
      },
      {
        question: 'Was gibt es zu gewinnen?',
        answer: 'Ruhm, Ehre und eventuell auch ein kleiner Preis.',
      },
      {
        question: 'Was müssen wir mitbringen?',
        answer:
          'Hunger, gute Laune und euer Lieblings-Tupperware. Optional: Team-Trikots. Alles Weitere gemäss den Regeln auf der Webseite.',
      },
      {
        question: 'Was ist der Rekord?',
        answer: '1.2 kg Käse, aufgestellt von Jakob vom Team Solothurn. (Jakob, dein Thron schmilzt. Vielleicht.)',
      },
      {
        question: 'Welcher Käse kommt ins Pfännli?',
        answer:
          'Erfahrungsgemäss bleiben wir bei Naturkäse. Keine weiteren Experimente mit Trüffel, Chili oder Bärlauch. Die Käserei geben wir noch bekannt.',
      },
      {
        question: 'Was passiert mit Käse, den wir nicht mehr schaffen?',
        answer:
          'Gekaufter Käse gehört euch. Einpacken, mitnehmen, morgen nochmals Raclette (eigenes Tupperware mitbringen).',
      },
      {
        question: 'Brauchen wir Teamtrikots?',
        answer:
          'Notwendig sind sie nicht, aber stark empfohlen. Ein Team ohne Trikots ist wie Raclette ohne Käse: Man kann es machen, aber warum sollte man? Mit Trikots seht ihr auf Twitch nicht nur hungrig aus, sondern auch gefährlich. Tipps für einen Hersteller geben wir gerne weiter, schreibt uns einfach eine E-Mail.',
      },
      {
        question: 'Ich kann nicht dabei sein, will aber mitfiebern. Wo gibt’s den Stream?',
        answer:
          'Keine Sorge, ihr verpasst kein einziges Käsli! Sobald der Twitch-Stream bereit ist, verlinken wir ihn hier auf der Website. Dann heisst es: Sofa vorheizen, Snacks bereitlegen und live mitschmelzen. Eigenes Pfännli daneben ist erlaubt, aber es zählt leider nicht für die Rangliste.',
      },
      {
        question: 'Eure Frage war nicht dabei?',
        answer:
          'Kein Problem, schreibt uns eine E-Mail. Wir beantworten alles rund um Käse, Kartoffeln und heisse Pfännli. Nur beim Rekord von Jakob können wir euch nicht helfen, den müsst ihr schon selbst knacken.',
      },
    ],
  },
  pages: {
    news: {
      title: 'News',
      intro: 'Hier werden aktuelle Meldungen veröffentlicht.',
    },
    livestream: {
      title: 'Live-Stream',
      intro: 'Hier kannst du die Raclette Meisterschaft live mitverfolgen.',
    },
    registration: {
      title: 'Anmeldung',
      intro: 'Melde hier dein Team für die nächste Raclette Meisterschaft an.',
    },
    rules: {
      title: 'Reglement der Mittelländer Raclette-Meisterschaft',
      intro: 'Die offiziellen Regeln des Wettbewerbs.',
    },
    pastEvents: {
      title: 'Vergangene Anlässe',
      intro: 'Ein Rückblick auf die bisherigen Raclette Meisterschaften und ihre Sieger.',
    },
    sponsors: {
      title: 'Sponsoren',
      intro: 'Herzlichen Dank an unsere Sponsoren, die die Raclette Meisterschaft möglich machen.',
    },
    about: {
      title: 'Über uns',
      intro: 'Was die Raclette Meisterschaft ist und wer dahinter steht.',
    },
    faq: {
      title: 'FAQ',
      intro: 'Antworten auf häufig gestellte Fragen.',
    },
  },
};

export type Dictionary = typeof de;
export default de;
