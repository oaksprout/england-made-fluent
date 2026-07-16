import type { Source } from "@/lib/types";

/**
 * Bibliography for England, Made Fluent.
 *
 * Every source below is seeded as `verificationStatus: "placeholder"`. None
 * of the `supports` claims, quotations or figures on this site should be
 * treated as confirmed until a human researcher has located the underlying
 * material, checked it against the claim it is attached to, and updated the
 * entry (see docs/RESEARCH_STANDARDS.md). `notes` says precisely what needs
 * checking. `url` values are deliberately the organisation's real root
 * domain rather than a guessed deep link — nobody should follow a citation
 * on this site to a URL that was invented rather than found.
 */
const ACCESSED = "2026-07-16";

export const sources: Source[] = [
  // ------------------------------------------------------------------
  // England DNA / FA / St George's Park
  // ------------------------------------------------------------------
  {
    id: "fa-england-dna-launch",
    title: "England DNA — original framework launch materials",
    organisation: "The Football Association",
    url: "https://www.thefa.com",
    accessedDate: ACCESSED,
    sourceType: "official",
    countries: ["England"],
    eras: ["2014"],
    supports: [
      "The FA launched a document called 'England DNA' around December 2014",
      "The framework set out stated principles for how England teams should play and develop players across age groups",
    ],
    notes:
      "Locate the FA's original England DNA launch materials (December 2014) and any official press coverage. Verify the exact launch date, the stated aims in the FA's own words, and the specific terminology used (four corner model, playing style principles, etc.) before quoting anything from it directly.",
    verificationStatus: "placeholder",
  },
  {
    id: "fa-england-dna-updates",
    title: "England DNA — subsequent revisions and technical updates",
    organisation: "The Football Association",
    url: "https://www.thefa.com",
    accessedDate: ACCESSED,
    sourceType: "official",
    countries: ["England"],
    eras: ["2014-2026"],
    supports: [
      "England DNA has been revised or restated by the FA technical team since its original launch",
      "Public visibility of the framework has varied across different FA regimes and technical directors",
    ],
    notes:
      "Search for later FA technical-team statements, coaching-course material or interviews referencing England DNA after 2014, to establish whether and how the framework has been revised, renamed or de-emphasised. Verify who currently owns it inside the FA and whether it is still actively used in coach education.",
    verificationStatus: "placeholder",
  },
  {
    id: "fa-st-georges-park",
    title: "St George's Park — national football centre",
    organisation: "The Football Association",
    url: "https://www.thefa.com",
    accessedDate: ACCESSED,
    sourceType: "official",
    countries: ["England"],
    eras: ["2012-present"],
    supports: [
      "St George's Park opened in 2012 as England's national football centre",
      "It hosts coach education and all England age-group teams under one roof",
    ],
    notes:
      "Confirm the exact opening date (October 2012), the stated purpose in the FA's own materials, and which coaching qualifications and age-group programmes are run there. Verify claims about co-location of age-group teams before repeating them as fact.",
    verificationStatus: "placeholder",
  },
  {
    id: "england-tournament-record",
    title: "England men's national team — major tournament record",
    organisation: "The Football Association",
    url: "https://www.thefa.com",
    accessedDate: ACCESSED,
    sourceType: "official",
    countries: ["England"],
    eras: ["1950-2026"],
    supports: [
      "England's record at World Cups and European Championships, including the 1966 World Cup win and recent semi-final/final tournament exits",
      "Pattern of England reaching the latter stages of recent tournaments (e.g. Euro 2020 final, 2022 World Cup quarter-final, Euro 2024 final) without winning",
    ],
    notes:
      "Verify exact stages reached, scorelines and dates against official FA and FIFA/UEFA tournament records rather than memory. Do not state precise statistics (goals, possession figures) without checking primary tournament data.",
    verificationStatus: "placeholder",
  },

  // ------------------------------------------------------------------
  // Premier League structure / development
  // ------------------------------------------------------------------
  {
    id: "pl-eppp",
    title: "Elite Player Performance Plan (EPPP)",
    organisation: "Premier League",
    url: "https://www.premierleague.com",
    accessedDate: ACCESSED,
    sourceType: "official",
    countries: ["England"],
    eras: ["2011-present"],
    supports: [
      "The EPPP (introduced 2011) restructured English academy football, including category-based academy status and compensation rules",
      "EPPP reshaped how, and by whom, young English-qualified players are coached",
    ],
    notes:
      "Locate the original EPPP documentation and Premier League summaries of its aims and category system. Verify the introduction year, the category-1-to-4 academy structure, and claims about its effect on player production before citing specific outcomes.",
    verificationStatus: "placeholder",
  },
  {
    id: "pl-academy-development",
    title: "Premier League academy development structures",
    organisation: "Premier League",
    url: "https://www.premierleague.com",
    accessedDate: ACCESSED,
    sourceType: "official",
    countries: ["England"],
    eras: ["2011-present"],
    supports: [
      "Premier League academies operate distinct playing philosophies and methodologies from club to club",
      "Category 1 academies are required to meet defined coaching, facility and education standards",
    ],
    notes:
      "Verify current Premier League academy classification rules and any published material describing variation in academy playing styles across clubs. Avoid asserting a specific number of category-1 academies without checking the current list.",
    verificationStatus: "placeholder",
  },
  {
    id: "english-player-minutes-data",
    title: "English-qualified player minutes in the Premier League",
    organisation: "CIES Football Observatory",
    url: "https://www.football-observatory.com",
    accessedDate: ACCESSED,
    sourceType: "data",
    countries: ["England"],
    eras: ["2000-present"],
    supports: [
      "The proportion of Premier League minutes played by domestically-qualified/English-qualified players, and how this has changed over time",
      "England-qualified players are a minority of total Premier League minutes in recent seasons",
    ],
    notes:
      "Locate the most recent CIES Football Observatory (or equivalent) demographic study reporting the share of minutes played by English-qualified players. Cross-check any percentage before publishing it, and note the season the figure applies to.",
    verificationStatus: "placeholder",
  },
  {
    id: "pl-coach-nationalities-data",
    title: "Premier League head coach nationality and background data",
    organisation: "CIES Football Observatory",
    url: "https://www.football-observatory.com",
    accessedDate: ACCESSED,
    sourceType: "data",
    countries: ["England"],
    eras: ["2000-present"],
    supports: [
      "The Premier League has featured head coaches from a wide range of national coaching traditions over an extended period",
      "The mix of coaching nationalities in the league is unusually broad compared with most major domestic leagues",
    ],
    notes:
      "Verify the current and historical spread of Premier League head-coach nationalities against an up-to-date dataset rather than impression. Avoid naming specific individual managers as evidence without checking tenure dates.",
    verificationStatus: "placeholder",
  },

  // ------------------------------------------------------------------
  // Spain
  // ------------------------------------------------------------------
  {
    id: "rfef-development-method",
    title: "Spanish federation (RFEF) player development methodology",
    organisation: "Real Federación Española de Fútbol",
    url: "https://www.rfef.es",
    accessedDate: ACCESSED,
    sourceType: "official",
    countries: ["Spain"],
    eras: ["1980s-present"],
    supports: [
      "The Spanish federation has promoted a coach-education and youth-development approach built around shared positional and technical concepts",
      "Spanish youth national teams have historically fed a broadly consistent tactical vocabulary into the senior team",
    ],
    notes:
      "Locate RFEF coach-education syllabus material or federation statements describing the shared positional/technical curriculum. Verify claims about consistency between youth and senior national teams rather than assuming continuity.",
    verificationStatus: "placeholder",
  },
  {
    id: "spain-la-masia-context",
    title: "La Masia and Spanish club academy methodology",
    organisation: "Academic / journalistic literature on Spanish academies",
    url: "https://scholar.google.com",
    accessedDate: ACCESSED,
    sourceType: "academic",
    countries: ["Spain"],
    eras: ["1979-present"],
    supports: [
      "Barcelona's La Masia academy is widely credited with shaping a generation of technically and positionally similar Spanish internationals",
      "The influence of one dominant club academy's methodology on the national team is itself a contested point in the literature",
    ],
    notes:
      "Locate peer-reviewed or serious journalistic accounts of La Masia's methodology and its documented links to the 2008-2012 Spain squad. Verify individual player development claims before naming players, and flag the contested question of how much credit belongs to one academy versus the wider Spanish system.",
    verificationStatus: "placeholder",
  },

  // ------------------------------------------------------------------
  // Argentina
  // ------------------------------------------------------------------
  {
    id: "afa-coaching-structures",
    title: "Argentine Football Association (AFA) coaching structures",
    organisation: "Asociación del Fútbol Argentino",
    url: "https://www.afa.com.ar",
    accessedDate: ACCESSED,
    sourceType: "official",
    countries: ["Argentina"],
    eras: ["1990s-present"],
    supports: [
      "Argentine coaching culture has a distinct lineage of tactical thought running through several generations of coaches",
      "AFA's structures for developing and appointing national-team coaches differ substantially from the FA's",
    ],
    notes:
      "Locate AFA statements or credible secondary literature on how Argentina develops and selects national-team coaching staff. Verify any claimed coaching lineage (e.g. Bielsa's influence on later coaches) against documented interviews rather than received wisdom.",
    verificationStatus: "placeholder",
  },
  {
    id: "argentina-2022-analysis",
    title: "Technical analysis of Argentina's 2022 World Cup campaign",
    organisation: "FIFA Technical Study Group",
    url: "https://www.fifa.com",
    accessedDate: ACCESSED,
    sourceType: "official",
    countries: ["Argentina"],
    eras: ["2022"],
    supports: [
      "Argentina's 2022 World Cup-winning campaign involved in-tournament tactical adjustments under Lionel Scaloni",
      "Analysts have pointed to the team's ability to restructure around Lionel Messi as a distinguishing feature of the campaign",
    ],
    notes:
      "Locate the FIFA Technical Study Group report for the 2022 World Cup (or equivalent credible tactical analysis) and verify specific claims about Argentina's tactical set-up and in-tournament changes match, match, before repeating them. Do not invent formation details or statistics not present in the source.",
    verificationStatus: "placeholder",
  },

  // ------------------------------------------------------------------
  // France
  // ------------------------------------------------------------------
  {
    id: "fff-clairefontaine",
    title: "INF Clairefontaine and the French national academy system",
    organisation: "Fédération Française de Football",
    url: "https://www.fff.fr",
    accessedDate: ACCESSED,
    sourceType: "official",
    countries: ["France"],
    eras: ["1988-present"],
    supports: [
      "INF Clairefontaine opened in 1988 as part of a national network of federation-run training centres",
      "The Clairefontaine system is widely cited as a contributor to France's 1998 World Cup win, though the extent of its causal role is debated",
    ],
    notes:
      "Verify the founding date and stated purpose of INF Clairefontaine via FFF materials. Explicitly flag the contested nature of claims that Clairefontaine 'caused' 1998 — locate historians or analysts who dispute a simple causal story before asserting one.",
    verificationStatus: "placeholder",
  },
  {
    id: "france-academy-system",
    title: "French club academy and national training-centre network",
    organisation: "Fédération Française de Football",
    url: "https://www.fff.fr",
    accessedDate: ACCESSED,
    sourceType: "official",
    countries: ["France"],
    eras: ["1970s-present"],
    supports: [
      "France operates a dense, geographically distributed network of club and regional academies alongside the national INF system",
      "France's academy system is often cited as an explanation for the country's sustained production of technically and athletically diverse talent",
    ],
    notes:
      "Locate FFF material describing the current academy/training-centre network and its scale. Verify any claim about production volume against actual federation data rather than general reputation.",
    verificationStatus: "placeholder",
  },

  // ------------------------------------------------------------------
  // Germany
  // ------------------------------------------------------------------
  {
    id: "dfb-post-2000-reform",
    title: "DFB post-2000 talent development reform",
    organisation: "Deutscher Fußball-Bund",
    url: "https://www.dfb.de",
    accessedDate: ACCESSED,
    sourceType: "official",
    countries: ["Germany"],
    eras: ["2000-2014"],
    supports: [
      "Germany's early exit from Euro 2000 prompted a federation-led overhaul of youth development and coach education",
      "The reform included investment in regional talent centres and closer federation-club coordination",
    ],
    notes:
      "Locate DFB's own account of the post-2000 reform programme (talent centre network, coaching qualification changes) and verify the sequence of events against the Euro 2000 exit. Avoid stating precise numbers of talent centres or investment figures without checking DFB documentation.",
    verificationStatus: "placeholder",
  },
  {
    id: "germany-talent-programme",
    title: "DFB talent promotion programme (Talentförderprogramm)",
    organisation: "Deutscher Fußball-Bund",
    url: "https://www.dfb.de",
    accessedDate: ACCESSED,
    sourceType: "official",
    countries: ["Germany"],
    eras: ["2002-present"],
    supports: [
      "Germany's talent promotion programme is credited with contributing to the generation that won the 2014 World Cup",
      "Commentators have since questioned whether the same reform structure has kept pace with the game since 2014",
    ],
    notes:
      "Locate DFB or credible secondary material describing the talent promotion programme's structure and its links to the 2014 squad. Verify claims of subsequent stagnation against documented tournament results and federation commentary rather than assumption.",
    verificationStatus: "placeholder",
  },

  // ------------------------------------------------------------------
  // Italy
  // ------------------------------------------------------------------
  {
    id: "figc-coverciano",
    title: "Coverciano coach education centre",
    organisation: "Federazione Italiana Giuoco Calcio",
    url: "https://www.figc.it",
    accessedDate: ACCESSED,
    sourceType: "official",
    countries: ["Italy"],
    eras: ["1958-present"],
    supports: [
      "Coverciano is Italy's national coach education centre and is widely regarded as producing a distinctive, tactically literate coaching culture",
      "Italian coaching education places significant emphasis on defensive organisation and game-state reading",
    ],
    notes:
      "Locate FIGC material on Coverciano's coaching syllabus and its historical role in Italian coach education. Verify claims about its emphasis and reputation against documented curricula rather than stereotype.",
    verificationStatus: "placeholder",
  },
  {
    id: "italy-tactical-culture",
    title:
      "Italian tactical culture across eras (catenaccio to modern pragmatism)",
    organisation: "Academic / journalistic tactical history literature",
    url: "https://scholar.google.com",
    accessedDate: ACCESSED,
    sourceType: "academic",
    countries: ["Italy"],
    eras: ["1960s-present"],
    supports: [
      "Italy has won major tournaments (1982, 2006 World Cups; Euro 2020) playing recognisably different tactical systems in each era",
      "Italian football's defensive reputation coexists with distinct tactical periods including zonal-marking reform in the late 1980s",
    ],
    notes:
      "Locate serious tactical-history literature (e.g. Jonathan Wilson's writing, academic sports-history sources) covering catenaccio, Sacchi-era zonal pressing, and later Italian systems. Verify specific tournament wins and dates before citing them, and avoid reducing 'Italian football' to a single stereotype.",
    verificationStatus: "placeholder",
  },

  // ------------------------------------------------------------------
  // Netherlands
  // ------------------------------------------------------------------
  {
    id: "knvb-philosophy",
    title: "KNVB football philosophy and coach education",
    organisation: "Koninklijke Nederlandse Voetbal Bond",
    url: "https://www.knvb.nl",
    accessedDate: ACCESSED,
    sourceType: "official",
    countries: ["Netherlands"],
    eras: ["1970s-present"],
    supports: [
      "The Dutch federation has historically promoted a coherent, clearly articulated footballing philosophy through its coach education system",
      "This philosophy has influenced coaching thought well beyond the Netherlands",
    ],
    notes:
      "Locate current KNVB coach-education material describing the federation's stated footballing principles. Verify claims of international influence against documented coaching lineages rather than general reputation.",
    verificationStatus: "placeholder",
  },
  {
    id: "netherlands-total-football",
    title: "Total Football and Dutch tactical history, c.1965-1978",
    organisation: "Academic / journalistic tactical history literature",
    url: "https://scholar.google.com",
    accessedDate: ACCESSED,
    sourceType: "academic",
    countries: ["Netherlands"],
    eras: ["1965-1978"],
    supports: [
      "Ajax and the Netherlands national team developed a widely influential positional and pressing approach in the late 1960s and 1970s, associated with Rinus Michels and Johan Cruyff",
      "The Netherlands reached consecutive World Cup finals in 1974 and 1978 without winning either",
    ],
    notes:
      "Locate serious tactical-history sources on Total Football's development at Ajax and the national team. Verify the 1974/1978 final results and dates, and note explicitly that producing an influential footballing idea did not, in this case, convert into a tournament win.",
    verificationStatus: "placeholder",
  },

  // ------------------------------------------------------------------
  // Brazil
  // ------------------------------------------------------------------
  {
    id: "brazil-development-structures",
    title: "Brazilian youth football development structures",
    organisation: "Confederação Brasileira de Futebol",
    url: "https://www.cbf.com.br",
    accessedDate: ACCESSED,
    sourceType: "official",
    countries: ["Brazil"],
    eras: ["1950s-present"],
    supports: [
      "Brazil's development system is often described as producing exceptional individual technical ability at scale",
      "There is a recurring tension in Brazilian football discourse between an expressive playing tradition and more structured, collectively organised approaches",
    ],
    notes:
      "Locate CBF material or credible secondary literature describing Brazilian youth development structures. Verify claims about the 'jogo bonito' tradition versus tactical organisation against serious tactical history rather than cliché — note that Brazil's 1970 team, often cited as the peak of expressive football, was also a tactically organised side.",
    verificationStatus: "placeholder",
  },

  // ------------------------------------------------------------------
  // Croatia
  // ------------------------------------------------------------------
  {
    id: "hns-croatia-continuity",
    title: "Croatian football federation development continuity",
    organisation: "Hrvatski Nogometni Savez",
    url: "https://hns.family",
    accessedDate: ACCESSED,
    sourceType: "official",
    countries: ["Croatia"],
    eras: ["1990s-present"],
    supports: [
      "Croatia has repeatedly produced internationally competitive squads from a comparatively small playing population",
      "Croatian football has a strong recent tradition of technically accomplished central-midfield players",
    ],
    notes:
      "Locate HNS material or credible secondary sources on Croatian youth development and coach education. Verify claims about squad continuity across the 1998, 2018 and 2022 tournament campaigns against actual squad lists rather than general impression.",
    verificationStatus: "placeholder",
  },

  // ------------------------------------------------------------------
  // Academic research underpinning "structured adaptability"
  // ------------------------------------------------------------------
  {
    id: "shared-mental-models-research",
    title: "Shared mental models in team sport performance",
    organisation: "Academic sport-science literature",
    url: "https://scholar.google.com",
    accessedDate: ACCESSED,
    sourceType: "academic",
    countries: [],
    eras: [],
    supports: [
      "Teams with more closely aligned understanding of roles, situations and likely teammate behaviour coordinate more effectively under pressure",
      "Shared mental models are a recognised construct in team-cognition research, not specific to football",
    ],
    notes:
      "Locate peer-reviewed sport-science or team-cognition literature on shared mental models (e.g. work building on Cannon-Bowers & Salas' team-cognition research applied to sport). Verify the specific findings and study populations before citing particular results, and do not overstate effect sizes.",
    verificationStatus: "placeholder",
  },
  {
    id: "team-coordination-research",
    title: "Team coordination and collective tactical behaviour research",
    organisation: "Academic sport-science literature",
    url: "https://scholar.google.com",
    accessedDate: ACCESSED,
    sourceType: "academic",
    countries: [],
    eras: [],
    supports: [
      "Research on collective tactical behaviour in football examines how teams synchronise movement and decisions without direct verbal communication",
      "Coordination breaks down predictably under time pressure, fatigue or unfamiliar partnerships",
    ],
    notes:
      "Locate peer-reviewed literature on collective/team synchrony in football (e.g. dynamical-systems approaches to team sport). Verify specific claims against the actual studies rather than general plausibility.",
    verificationStatus: "placeholder",
  },
  {
    id: "transfer-of-learning-research",
    title: "Transfer of learning between structured environments",
    organisation: "Academic education/skill-acquisition literature",
    url: "https://scholar.google.com",
    accessedDate: ACCESSED,
    sourceType: "academic",
    countries: [],
    eras: [],
    supports: [
      "Skills and concepts learned in one structured environment transfer more readily to a new one when there is shared vocabulary or shared underlying principles",
      "Poorly-transferred learning between environments is a documented phenomenon in skill-acquisition research generally, not unique to football",
    ],
    notes:
      "Locate skill-acquisition or educational-psychology literature on transfer of learning. Verify that any football-specific application is drawn from the source material rather than extrapolated without support.",
    verificationStatus: "placeholder",
  },
  {
    id: "organisational-ambidexterity-research",
    title:
      "Organisational ambidexterity (exploration vs exploitation) research",
    organisation: "Academic management/organisational-behaviour literature",
    url: "https://scholar.google.com",
    accessedDate: ACCESSED,
    sourceType: "academic",
    countries: [],
    eras: [],
    supports: [
      "Organisations that combine a stable core capability with the ability to flexibly adapt to new conditions ('ambidexterity') tend to perform more consistently across changing environments",
      "This literature is drawn from management/organisational-behaviour research and applied here as an analogy, not a football-specific finding",
    ],
    notes:
      "Locate the organisational-ambidexterity literature (e.g. March's exploration/exploitation framing and later management-science work). Clearly label any use of this research on the site as an analogy imported from another field, not direct football evidence.",
    verificationStatus: "placeholder",
  },
  {
    id: "international-preparation-time",
    title: "International football preparation-time constraints",
    organisation:
      "Academic / official literature on international football scheduling",
    url: "https://www.fifa.com",
    accessedDate: ACCESSED,
    sourceType: "data",
    countries: [],
    eras: [],
    supports: [
      "International managers have access to players for a small number of days per year compared with club coaches",
      "Limited contact time constrains how much tactical work can be introduced from scratch between tournaments",
    ],
    notes:
      "Locate FIFA international match calendar documentation or credible analysis quantifying typical national-team contact days per year. Verify any specific day-count before publishing it rather than relying on approximation.",
    verificationStatus: "placeholder",
  },
  {
    id: "tournament-possession-data",
    title: "Major tournament possession and tactical-style data",
    organisation: "UEFA / FIFA technical reports",
    url: "https://www.uefa.com",
    accessedDate: ACCESSED,
    sourceType: "data",
    countries: [],
    eras: ["2016-present"],
    supports: [
      "UEFA and FIFA publish technical reports after major tournaments including possession, pressing and passing data by team",
      "Recent tournament winners have shown varied playing styles rather than a single converging approach",
    ],
    notes:
      "Locate the relevant UEFA EURO or FIFA World Cup technical report for the tournament in question. Verify any possession or passing statistic against the primary report before using it, and do not extrapolate a 'trend' beyond what the reports actually show.",
    verificationStatus: "placeholder",
  },

  // ------------------------------------------------------------------
  // Historical
  // ------------------------------------------------------------------
  {
    id: "hungary-1950s-historical",
    title: "Hungary's national team and the Golden Team, early 1950s",
    organisation: "Football history literature",
    url: "https://scholar.google.com",
    accessedDate: ACCESSED,
    sourceType: "historical",
    countries: ["Hungary", "England"],
    eras: ["1950-1956"],
    supports: [
      "Hungary's national team of the early 1950s, including the 6-3 defeat of England at Wembley in 1953, is widely cited as an early example of collective tactical and positional sophistication overturning received wisdom about a dominant footballing power",
      "The Hungary team's approach influenced tactical thinking in several European football cultures",
    ],
    notes:
      "Verify the 1953 Wembley result, date and scoreline against primary football-history sources before citing it, along with any claims about the team's tactical approach (e.g. deep-lying centre-forward role). Avoid overstating direct lineage from Hungary 1953 to any specific later national model.",
    verificationStatus: "placeholder",
  },

  // ------------------------------------------------------------------
  // Extra sources beyond the canonical 29
  // ------------------------------------------------------------------
  {
    id: "eca-youth-development",
    title: "European Club Association youth development benchmarking",
    organisation: "European Club Association",
    url: "https://www.ecaeurope.com",
    accessedDate: ACCESSED,
    sourceType: "official",
    countries: [],
    eras: ["2010-present"],
    supports: [
      "European clubs invest differently in youth development structures, contributing to varied tactical cultures across leagues and academies",
      "Cross-club benchmarking studies exist comparing youth investment and methodology across major European leagues",
    ],
    notes:
      "Locate ECA benchmarking reports on club youth-development investment. Verify any comparative claim about English versus continental academy investment against the actual report rather than assumption.",
    verificationStatus: "placeholder",
  },
  {
    id: "inverting-the-pyramid",
    title: "Inverting the Pyramid: The History of Football Tactics",
    author: "Jonathan Wilson",
    url: "https://scholar.google.com",
    accessedDate: ACCESSED,
    sourceType: "book",
    countries: [],
    eras: ["1863-present"],
    supports: [
      "A widely-cited general history of football tactics, covering Hungary, Total Football, catenaccio, Sacchi's Milan and later tactical developments referenced across this site",
      "Useful as a secondary source for tactical-history framing, though individual factual claims still need checking against primary sources",
    ],
    notes:
      "Confirm the edition and page references used for any specific claim drawn from this book before citing it directly. Treat it as a serious secondary source, not a primary one, for federation-specific factual claims.",
    verificationStatus: "placeholder",
  },
  {
    id: "coaching-badges-comparison-europe",
    title: "Comparative study of European coaching qualification pathways",
    organisation: "UEFA coach education",
    url: "https://www.uefa.com",
    accessedDate: ACCESSED,
    sourceType: "official",
    countries: [],
    eras: ["2000-present"],
    supports: [
      "UEFA sets minimum common standards for coaching badges (UEFA B, A, Pro) across member federations, but each federation's own curriculum content and emphasis differs",
      "Differences in national coach education curricula are one plausible contributor to differing tactical cultures across countries",
    ],
    notes:
      "Locate UEFA's coach education convention documentation describing minimum standards and how much latitude individual federations have in curriculum content. Verify before making any comparative claim about the relative quality or focus of specific federations' courses.",
    verificationStatus: "placeholder",
  },
];

export function getSource(id: string): Source | undefined {
  return sources.find((source) => source.id === id);
}
