import type { Nation } from "@/lib/types";

/**
 * Eight comparative national case studies. None of these are offered as a
 * template England should copy wholesale — see docs/RESEARCH_STANDARDS.md
 * for why the nine dimensions below are kept separate. The point of each
 * case study is narrower than "this country got it right": it is to isolate
 * which specific structural choices are plausibly linked to which specific
 * outcomes, and to be honest about the eras in which the same country
 * struggled or changed course.
 */
export const nations: Nation[] = [
  {
    id: "spain",
    name: "Spain",
    shortLabel: "Spain",
    accent: "#B8562E",
    headline:
      "A shared positional and technical vocabulary, run through youth and senior football alike, converted individual technical quality into sustained control of matches.",
    modelSummary:
      "Spain's 2008-2012 team is the most commonly cited example of a national model translating cleanly from club to country. The underlying claim is narrower than 'Spain plays beautiful football': a critical mass of Spanish internationals had learned closely related positional concepts (how to occupy space between opposition lines, when to rotate, how to retain the ball under pressure) inside their club academies, above all Barcelona's. That shared vocabulary meant the national team spent less time building common understanding from scratch and more time applying it. It is also a model with a long, uneven prehistory: the same country spent decades before 2008 being eliminated early from tournaments with talented individual players who did not obviously share a footballing language.",
    strengths: [
      "A shared set of positional concepts (occupying half-spaces, structured rotations, patient circulation) taught consistently enough across leading academies that many Spanish internationals arrived at the national team already speaking a common tactical language",
      "High technical and spatial fluency: comfort receiving and playing under pressure in tight areas, which underpinned the team's control of possession",
      "Continuity between youth national teams and the senior side, so players progressing through Spanish youth football were not asked to relearn a new footballing language at each level",
      "The model proved resilient to some personnel change: Spain sustained a recognisable style of control across the 2008, 2010 and 2012 tournament wins with a changing cast of players",
      "A federation and leading-club coaching culture that reinforced the same core principles rather than pulling in different directions",
    ],
    caveats: [
      "Spain endured decades of underachievement before 2008 despite consistently producing technically excellent individual players. Shared style alone did not previously guarantee tournament success, which complicates any simple 'model causes results' story",
      "The model is closely associated with one dominant club academy (Barcelona) at its peak; how much of the effect belongs to a broader Spanish coaching culture versus one especially influential institution is genuinely disputed",
      "By the 2023-24 cycle Spain's approach had visibly evolved towards a faster, more direct, more youthful side than the control-possession teams of 2008-2012, which is itself evidence that 'the Spanish model' is not one fixed style but something that has changed across eras",
    ],
    dimensions: {
      leagueStructure:
        "La Liga has historically rewarded technical and positional quality, though it also contains contrasting club styles; the effect described here is concentrated in specific academies rather than uniform across the league.",
      federationPolicy:
        "The RFEF has promoted a coach-education curriculum emphasising shared positional and technical principles across youth national-team age groups.",
      youthDevelopment:
        "Leading Spanish academies, most prominently Barcelona's La Masia, have taught closely related positional and technical concepts to generations of young players.",
      coachEducation:
        "Spanish coaching qualifications have historically emphasised possession-based, positionally structured play as a common reference point, without prescribing one rigid system at senior level.",
      seniorTactics:
        "The 2008-2012 senior team built its approach around patient possession, positional rotation and pressing to regain the ball quickly; the 2023-24 side has shown more direct, transitional elements.",
      playerQuality:
        "Spain's individual player quality across this period was exceptional by any measure, which is precisely why isolating the effect of shared style from the effect of talent is difficult.",
      historicalPeriod:
        "Spans pre-2008 underachievement, the 2008-2012 dominant era (Euro 2008, World Cup 2010, Euro 2012), and post-2012 evolution through to the 2023-24 Euro-winning squad.",
      tournamentOutcomes:
        "Euro 2008, World Cup 2010 and Euro 2012 winners (the first team to win three consecutive major tournaments); Euro 2024 winners with a notably different-looking side.",
      interpretation:
        "Reading Spain's 2008-2012 run as proof that a shared model 'works' understates how long underachievement preceded it and how much the team has changed since; the more defensible claim is that shared concepts reduced the coordination cost of turning excellent individuals into a coherent team, not that the concepts alone caused victory.",
    },
    eras: [
      {
        id: "spain-pre-2008",
        period: "1980s-2007",
        title: "Individual talent, inconsistent tournament results",
        summary:
          "Spain regularly produced technically gifted players and strong domestic football but was eliminated early from major tournaments across this period, feeding a narrative that the team lacked mental toughness or cohesion.",
        interpretation:
          "In hindsight, this era is often read as evidence that talent and technical quality are not sufficient on their own without a shared collective approach, though contemporaries more often blamed temperament than tactical structure.",
        contested: true,
        sourceIds: ["spain-la-masia-context", "tournament-possession-data"],
      },
      {
        id: "spain-2008-2012",
        period: "2008-2012",
        title: "Dominance built on shared positional control",
        summary:
          "Spain won Euro 2008, the 2010 World Cup and Euro 2012, the only team to win three consecutive major men's tournaments, with a core group of players sharing closely related club-level tactical education.",
        interpretation:
          "Widely, though not universally, read as the clearest case of a shared national footballing language converting individual quality into sustained collective control.",
        sourceIds: ["spain-la-masia-context", "rfef-development-method"],
      },
      {
        id: "spain-post-2012",
        period: "2013-2022",
        title: "Decline of the control model, uneven results",
        summary:
          "As the 2008-2012 generation aged and opponents adapted to Spain's possession approach, results became less consistent, including early exits from the 2014 and 2022 World Cups.",
        interpretation:
          "An open question in the literature is whether this reflects the limits of one style being 'solved' by opponents, a genuine talent gap versus the previous generation, or both.",
        contested: true,
        sourceIds: ["rfef-development-method"],
      },
      {
        id: "spain-2023-24",
        period: "2023-2024",
        title: "A faster, more transitional Euro-winning side",
        summary:
          "Spain won Euro 2024 with a younger, more directly attacking team than the 2008-2012 sides, retaining some shared positional principles while playing a visibly different style overall.",
        interpretation:
          "Supports treating 'the Spanish model' as something that evolves across coaching generations rather than a fixed style, which is relevant to this site's argument that England should not import a static template from any one country.",
        sourceIds: ["rfef-development-method", "tournament-possession-data"],
      },
    ],
    sourceIds: [
      "rfef-development-method",
      "spain-la-masia-context",
      "tournament-possession-data",
    ],
  },

  {
    id: "argentina",
    name: "Argentina",
    shortLabel: "Argentina",
    accent: "#4E7AB5",
    headline:
      "Tactical adaptability and competitive cohesion, not one fixed system, repeatedly allowed Argentina to reshape a team around exceptional individual players.",
    modelSummary:
      "Argentina's recent history offers a contrasting model to Spain's: rather than one consistent positional style, Argentine national teams have often been built and rebuilt around a small number of exceptional individuals, with the collective structure adjusted to protect and maximise them. The 2021-2022 Scaloni-era team is the clearest recent example: a side that changed its defensive structure and pressing intensity between matches while maintaining a settled emotional and competitive core. The underlying argument for England is not 'copy Argentina's system' (there isn't a single one to copy) but that tactical flexibility itself can be a trained, deliberate team capability rather than an improvised response to circumstances.",
    strengths: [
      "Demonstrated tactical adaptability: the same squad has shown it can play with different defensive structures and pressing intensities between matches and even within a tournament",
      "Strong emotional and competitive cohesion, frequently cited by players and coaches as a deliberate focus of squad management rather than a by-product of results",
      "A track record of successfully reshaping the team's structure and responsibilities around an exceptional individual player without the rest of the side losing coherence",
      "Demonstrated understanding of tournament game-states: managing leads, game tempo and substitutions across a knockout tournament rather than only in isolated matches",
      "No requirement for a single fixed positional model to succeed, which is evidence against the idea that only one type of national footballing identity can produce results",
    ],
    caveats: [
      "Argentina's coaching and playing culture has itself gone through difficult periods, including tactically incoherent spells between 2014 and 2018 under different coaching regimes, which complicates any narrative of consistent Argentine tactical excellence",
      "The 2022 World Cup win is closely associated with one exceptional generational player; how repeatable the model is without a player of that calibre is genuinely unclear",
      "Emotional cohesion and competitive intensity are harder to measure and institutionalise than a coaching curriculum, which limits how directly this case study can be turned into transferable policy recommendations",
    ],
    dimensions: {
      leagueStructure:
        "Argentina's senior national-team core in this period was drawn overwhelmingly from European leagues, particularly Spain's La Liga and Italy's Serie A, rather than the domestic Argentine league, a significant difference from a country like England whose core plays in one domestic league.",
      federationPolicy:
        "AFA's recent coaching appointments (Scaloni and his staff) reflect continuity of personnel and philosophy across a multi-year cycle rather than the frequent managerial change seen in some earlier periods.",
      youthDevelopment:
        "Argentine domestic academies retain a strong reputation for developing technically proficient attacking players, though the majority of senior internationals move to European clubs relatively young.",
      coachEducation:
        "Argentine coaching culture has a well-documented lineage of tactically literate coaches (including but not limited to Bielsa's influence), though this operates informally through relationships and mentorship as much as formal curriculum.",
      seniorTactics:
        "The 2021-2022 team varied its defensive shape and pressing between a back four and back three depending on opponent, while maintaining consistent roles for its most important attacking players.",
      playerQuality:
        "Argentina's squad quality in this period, including a small number of world-class individuals, was exceptional and makes isolating the contribution of tactical structure from the contribution of talent difficult.",
      historicalPeriod:
        "Spans earlier tournament wins in 1978 and 1986, a turbulent post-2014 period with frequent managerial and tactical change, and the settled 2019-2022 Scaloni era.",
      tournamentOutcomes:
        "World Cup winners 1978 and 1986; Copa América champions 2021; World Cup champions 2022; finalists at the 2014 World Cup.",
      interpretation:
        "The Argentine case is read here as evidence that a settled collective approach can be built around flexibility and cohesion rather than one tactical identity. But this reading leans heavily on one recent, individually-inflected success and should not be treated as a fully separate confirmation from the Spanish case.",
    },
    eras: [
      {
        id: "argentina-1978-1986",
        period: "1978-1986",
        title: "Earlier World Cup wins under different footballing conditions",
        summary:
          "Argentina won the World Cup as hosts in 1978 and again in 1986, the latter built substantially around Diego Maradona, under very different football-economic conditions to the present era.",
        interpretation:
          "These wins are frequently invoked in Argentine football culture as evidence of a national tactical or temperamental tradition; the direct relevance to the modern club-development landscape is limited and should not be overstated.",
        contested: true,
        sourceIds: ["afa-coaching-structures"],
      },
      {
        id: "argentina-post-2014",
        period: "2014-2018",
        title: "Post-2014 instability",
        summary:
          "Following the 2014 World Cup final defeat, Argentina cycled through several coaches and tactical approaches, culminating in an early exit at the 2018 World Cup.",
        interpretation:
          "A useful counterpoint within the same national case study: the same footballing culture and a similarly talented squad produced markedly worse tournament outcomes without a settled tactical approach.",
        sourceIds: ["afa-coaching-structures"],
      },
      {
        id: "argentina-scaloni",
        period: "2019-2022",
        title: "The Scaloni era: adaptability and cohesion",
        summary:
          "Under Lionel Scaloni, Argentina rebuilt a settled squad culture and demonstrated tactical flexibility between matches, winning the 2021 Copa América and the 2022 World Cup.",
        interpretation:
          "The clearest recent example in international football of adaptability itself, rather than one fixed system, being treated as a deliberate team capability.",
        sourceIds: ["argentina-2022-analysis", "afa-coaching-structures"],
      },
    ],
    sourceIds: ["afa-coaching-structures", "argentina-2022-analysis"],
  },

  {
    id: "france",
    name: "France",
    shortLabel: "France",
    accent: "#3B5170",
    headline:
      "A deep and diverse production system generates athletic and technical range broad enough to win with different tactical identities in different eras, without ever settling on one aesthetic.",
    modelSummary:
      "France's case is less about a shared tactical philosophy than about scale and variety of production. The INF Clairefontaine national academy system, alongside a dense network of club academies particularly strong in the Paris region and overseas territories, has produced an unusually large pool of athletically and technically excellent players across multiple generations. That depth has allowed French teams to win with genuinely different approaches: the more collectively fluid 1998 side and the more individually explosive, transition-focused 2018 side are both credible World Cup winners without sharing an obvious tactical identity. The recurring tension in French football culture, sharpened after difficult tournaments such as 2010, is between individual expression and collective discipline, precisely the tension England's own debate circles around.",
    strengths: [
      "An unusually deep and geographically wide production system, combining the national INF Clairefontaine network with strong club academies, generating a large pool of elite-level talent across generations",
      "Athletic and technical range broad enough to field very different types of players in the same positions across different eras",
      "Demonstrated tactical pragmatism: French teams have won major tournaments with contrasting approaches rather than one fixed identity",
      "A track record of winning without needing a single recognisable aesthetic identity, which is direct evidence against the idea that only a distinctive 'style' produces results",
      "A large enough player pool that France can absorb individual underperformance or injury without the whole structure collapsing",
    ],
    caveats: [
      "The causal contribution of Clairefontaine specifically to the 1998 World Cup win is genuinely disputed among football historians; the wider club academy network and broader demographic factors plausibly did as much or more",
      "France's recurring individual-versus-collective tension has also produced high-profile dysfunction, most notably the players' strike at the 2010 World Cup, showing that depth of talent does not guarantee cohesion",
      "Because France's model relies on scale of production more than a shared tactical language, it may be less directly transferable to a federation the size of England's than the mechanisms described in other case studies",
    ],
    dimensions: {
      leagueStructure:
        "Ligue 1 is a significant developmental league for young French talent but many of France's senior internationals move to other major European leagues relatively early in their careers.",
      federationPolicy:
        "The FFF has run the INF Clairefontaine national training centre since 1988 alongside a wider network of regional and club academies.",
      youthDevelopment:
        "A dense network of club academies, particularly strong in the Paris region, combined with federation-run centres, produces a large and diverse talent pool.",
      coachEducation:
        "French coach education has not enforced a single tactical style; French coaches and teams have varied considerably in tactical approach across eras and even simultaneously across different levels.",
      seniorTactics:
        "The 1998 team built its win around collective organisation and a strong midfield; the 2018 team built its win more around individual pace, direct transitions and defensive solidity.",
      playerQuality:
        "Consistently exceptional and unusually deep across multiple generations, which is central to the French case rather than incidental to it.",
      historicalPeriod:
        "Spans the 1972 founding of the national academy concept, the 1988 opening of Clairefontaine, the 1998 World Cup win, the 2010 World Cup strike, and the 2018 World Cup win.",
      tournamentOutcomes:
        "World Cup winners 1998, Euro 2000 winners, World Cup finalists 2006, group-stage elimination amid player unrest 2010, World Cup winners 2018, World Cup finalists 2022.",
      interpretation:
        "The French case supports the idea that different tactical identities can each be a winning identity given sufficient talent depth, but cautions that a wide talent pool does not by itself guarantee collective cohesion: cohesion still had to be separately managed, and was not always managed well.",
    },
    eras: [
      {
        id: "france-clairefontaine-founding",
        period: "1972-1998",
        title: "Building the national academy network",
        summary:
          "France began developing a national approach to elite youth coaching from the early 1970s, with INF Clairefontaine opening in 1988 as the flagship national training centre.",
        interpretation:
          "Often presented as a direct cause of the 1998 World Cup win; historians are more divided, pointing also to broader demographic and club-academy factors over the same period.",
        contested: true,
        sourceIds: ["fff-clairefontaine", "france-academy-system"],
      },
      {
        id: "france-1998-2000",
        period: "1998-2000",
        title: "World Cup and European Championship wins",
        summary:
          "France won the 1998 World Cup as hosts and Euro 2000, with a team built around midfield control and defensive organisation.",
        sourceIds: ["fff-clairefontaine"],
      },
      {
        id: "france-2010-strike",
        period: "2010",
        title: "Collective breakdown at the World Cup",
        summary:
          "The 2010 World Cup squad suffered a well-documented internal breakdown, including a training-ground strike, and was eliminated in the group stage.",
        interpretation:
          "A useful caution against assuming talent depth automatically produces collective cohesion; management and squad culture mattered as much as playing personnel.",
        sourceIds: ["france-academy-system"],
      },
      {
        id: "france-2018-2022",
        period: "2018-2022",
        title: "A different winning identity",
        summary:
          "France won the 2018 World Cup and reached the 2022 final with a team built more around individual pace, direct attacking transitions and defensive solidity than the 1998 side's collective possession game.",
        interpretation:
          "Read here as evidence that a national footballing culture can win with more than one tactical identity, provided the underlying talent base is deep enough.",
        sourceIds: ["france-academy-system", "tournament-possession-data"],
      },
    ],
    sourceIds: ["fff-clairefontaine", "france-academy-system"],
  },

  {
    id: "germany",
    name: "Germany",
    shortLabel: "Germany",
    accent: "#6E6355",
    headline:
      "A federation-led reform triggered by public failure rebuilt youth development and coach education around shared principles, without requiring one tactical system, and the reform itself later needed renewing.",
    modelSummary:
      "Germany's post-2000 reform is probably the most direct precedent for what this site proposes: a federation response to a specific, publicly visible tournament failure (early elimination at Euro 2000) that rebuilt the youth development and coach education pipeline over roughly a decade. Crucially, the DFB's reform did not mandate one tactical system; it invested in talent centres, coach qualifications and closer club-federation coordination, and shared principles fed into a senior team that itself changed considerably in approach between the more controlled 2014 World Cup-winning side and later, less settled squads. The reform's later years also carry an important caution for England: the same structure that produced 2014's success was later criticised as having become outdated, showing that institutional reform is not a one-off fix but something that itself needs periodic renewal.",
    strengths: [
      "A clear, publicly documented example of federation-led institutional reform triggered directly by tournament failure rather than incremental drift",
      "Sustained investment in both youth academy infrastructure (regional talent centres) and coach education, treated as linked rather than separate problems",
      "Shared developmental principles across age groups without enforcing a single senior tactical system: the 2014 team's approach differed from earlier and later German sides",
      "Demonstrated capacity to convert reform into a major tournament win (2014 World Cup) roughly fourteen years after the reform began, evidence that this kind of change plausibly takes a sustained multi-year commitment rather than a single cycle",
      "An instructive later-stage lesson: German commentators and officials themselves later argued the reform structure had become outdated, which is valuable evidence that institutional reform requires ongoing renewal rather than being treated as solved",
    ],
    caveats: [
      "The gap between the 2000 reform trigger and the 2014 tournament win is long enough that other contributing factors (club investment, broader European tactical trends, individual generational talent) cannot be ruled out as co-causes",
      "Germany's post-2014 tournament record, including group-stage exits at the 2018 and 2022 World Cups, is itself evidence that a successful reform does not remain effective indefinitely without renewal",
      "Applying this precedent to England requires care: Germany's reform coincided with, and partly depended on, specific Bundesliga financial and licensing regulations that do not map directly onto Premier League governance",
    ],
    dimensions: {
      leagueStructure:
        "Bundesliga licensing requirements linked to the reform obliged clubs to run federation-standard academies, creating a closer alignment between league structure and federation policy than exists in England.",
      federationPolicy:
        "The DFB directly led a post-2000 reform programme including a national network of regional talent centres and revised coaching qualifications.",
      youthDevelopment:
        "Regional talent centres and club academy requirements introduced after 2000 significantly broadened the base of coached young players compared with the pre-reform era.",
      coachEducation:
        "Coaching qualification standards were raised and formalised as part of the reform, alongside closer coordination between the DFB and club academy staff.",
      seniorTactics:
        "The 2014 World Cup-winning team played possession-based football with a fluid front line; earlier and later German sides have varied considerably in approach.",
      playerQuality:
        "The reform is credited with widening the base of technically competent players available to the national team, though individual generational talents (e.g. the 2014 squad's core) still mattered.",
      historicalPeriod:
        "Spans the pre-2000 era, the 2000-2014 reform-to-success arc, and the post-2014 period in which the same structures faced renewed criticism.",
      tournamentOutcomes:
        "Early exit at Euro 2000; steady improvement through the 2000s (World Cup semi-final 2006 and 2010, Euro final 2008); World Cup winners 2014; group-stage exits at the 2018 and 2022 World Cups.",
      interpretation:
        "Germany's case is read here as the strongest available precedent for deliberate, federation-led institutional reform producing a measurable tournament outcome. But the post-2014 stagnation is equally important evidence that no reform is self-sustaining.",
    },
    eras: [
      {
        id: "germany-pre-2000",
        period: "1990-2000",
        title: "Pre-reform era",
        summary:
          "Germany won the 1990 World Cup and reached the Euro 1996 final but by 2000 was eliminated in the group stage of the European Championship, prompting public criticism of the youth development pipeline.",
        sourceIds: ["dfb-post-2000-reform"],
      },
      {
        id: "germany-reform-arc",
        period: "2000-2014",
        title: "Reform to World Cup win",
        summary:
          "The DFB introduced regional talent centres, tightened Bundesliga academy licensing requirements and revised coach education; the national team's results steadily improved across the 2000s, culminating in the 2014 World Cup win.",
        interpretation:
          "The most commonly cited example of a federation converting a specific tournament failure into a sustained, multi-year institutional reform with a measurable outcome.",
        sourceIds: ["dfb-post-2000-reform", "germany-talent-programme"],
      },
      {
        id: "germany-post-2014",
        period: "2014-present",
        title: "Renewed stagnation questions",
        summary:
          "Following the 2014 win, Germany was eliminated in the group stage of the 2018 and 2022 World Cups, prompting debate about whether the post-2000 reform structure had itself become outdated.",
        interpretation:
          "Read here as a caution rather than a contradiction: it suggests institutional reform needs periodic renewal, not that the original reform's earlier success was illusory.",
        contested: true,
        sourceIds: ["germany-talent-programme"],
      },
    ],
    sourceIds: ["dfb-post-2000-reform", "germany-talent-programme"],
  },

  {
    id: "italy",
    name: "Italy",
    shortLabel: "Italy",
    accent: "#4F7156",
    headline:
      "A strong tactical-education culture, centred on defensive and game-state literacy, has let Italy win major tournaments through markedly different systems across different eras.",
    modelSummary:
      "Italy's case is instructive precisely because its tactical identity has changed so much across winning eras while a common thread of coach education and game-state intelligence has remained. The organised defensive structures associated with catenaccio in the 1960s, the zonal pressing football associated with Arrigo Sacchi's Milan in the late 1980s, and the pragmatic, situationally flexible sides that won the 2006 World Cup and Euro 2020 are tactically distinct from one another. What is argued to persist across these eras is a strong coach-education culture, centred on the national coaching centre at Coverciano, that produces coaches unusually literate in reading match situations and adjusting defensive structure to the game state, a capability closer to this site's proposed 'game states' than to any single formation.",
    strengths: [
      "A well-regarded national coach education system (Coverciano) with a long-standing emphasis on tactical literacy and defensive organisation",
      "Demonstrated ability to win major tournaments using clearly different tactical systems in different eras, evidence that tactical education can outlast any specific system",
      "Strong game-state intelligence: a documented cultural emphasis on managing scorelines, tempo and defensive shape situationally rather than committing to one approach regardless of context",
      "Tournament adaptability: Italy has reached late tournament stages by adjusting approach to the opponent and match situation rather than imposing one style regardless of context",
      "A coaching culture that treats defensive organisation as a sophisticated, actively coached skill rather than the absence of attacking ambition",
    ],
    caveats: [
      "Italy's tactical reputation is easily flattened into a stereotype ('defensive football') that understates real variation across eras, including Sacchi's high-pressing, attacking Milan sides, which were not defensively cautious in the popular sense",
      "Italy failed to qualify for the 2018 and 2022 World Cups, a significant gap in tournament participation that complicates any narrative of continuous institutional strength",
      "The link between Coverciano's coaching philosophy and specific senior-team tactical choices is asserted more often than it is rigorously demonstrated in accessible research; care is needed before treating it as settled",
    ],
    dimensions: {
      leagueStructure:
        "Serie A has historically had a strong tactical and defensive coaching reputation, though the league's relative financial position compared with other major European leagues has shifted over recent decades.",
      federationPolicy:
        "The FIGC has run Coverciano as its national coach education centre since the 1950s, with a strong emphasis on tactical and defensive teaching.",
      youthDevelopment:
        "Italian youth development has historically emphasised defensive organisation and positional discipline alongside technical training, though this varies by club.",
      coachEducation:
        "Coverciano's coaching syllabus is widely regarded as tactically rigorous, with an emphasis on reading match situations and defensive structure.",
      seniorTactics:
        "Varies substantially by era: organised man-marking defensive structures in the 1960s-70s, Sacchi's zonal pressing in the late 1980s, and pragmatic, situationally adaptive approaches in 2006 and 2021.",
      playerQuality:
        "Consistently strong, particularly in defensive positions, though Italy's relative individual attacking talent has fluctuated across eras.",
      historicalPeriod:
        "Spans the catenaccio era of the 1960s, Sacchi's Milan and the Italy sides it influenced in the late 1980s and early 1990s, the pragmatic 2006 World Cup win, the 2018/2022 qualification failures, and the Euro 2020 win.",
      tournamentOutcomes:
        "World Cup winners 1934, 1938, 1982, 2006; World Cup finalists 1970, 1994; European Championship winners 1968, 2020; failed to qualify for the 2018 and 2022 World Cups.",
      interpretation:
        "Read here as evidence that a coach-education culture, rather than a fixed tactical system, can be the more durable national asset. But the qualification failures show that coaching culture alone did not insulate Italy from a genuine period of weaker outcomes.",
    },
    eras: [
      {
        id: "italy-catenaccio",
        period: "1960s-1970s",
        title: "Catenaccio and organised defensive structures",
        summary:
          "Italian club and national teams developed highly organised man-marking defensive systems, associated with the term catenaccio, alongside disciplined counter-attacking play.",
        interpretation:
          "Often reduced in popular discussion to 'defensive football'; tactical historians place more emphasis on the sophistication of the defensive organisation itself.",
        contested: true,
        sourceIds: ["italy-tactical-culture"],
      },
      {
        id: "italy-sacchi",
        period: "1987-1994",
        title: "Sacchi's zonal pressing revolution",
        summary:
          "Arrigo Sacchi's Milan popularised a high-pressing, zonally organised system that influenced Italian and wider European tactical thinking, feeding into Italy's run to the 1994 World Cup final.",
        sourceIds: ["italy-tactical-culture"],
      },
      {
        id: "italy-2006-pragmatism",
        period: "2004-2006",
        title: "Pragmatic tournament-winning structure",
        summary:
          "Italy won the 2006 World Cup with a well-organised, situationally adaptive defensive structure and efficient use of attacking opportunities rather than a single fixed attacking system.",
        sourceIds: ["italy-tactical-culture", "tournament-possession-data"],
      },
      {
        id: "italy-2018-2021",
        period: "2017-2021",
        title: "Qualification failure to Euro 2020 win",
        summary:
          "After failing to qualify for the 2018 World Cup, Italy rebuilt under a new coaching regime and won Euro 2020 with a more possession-oriented, high-pressing approach distinct from its historical defensive reputation.",
        interpretation:
          "A striking illustration that Italian tactical identity is not fixed even within a single decade, and that institutional coaching strength can coexist with a genuine period of weak results.",
        sourceIds: ["italy-tactical-culture"],
      },
    ],
    sourceIds: ["figc-coverciano", "italy-tactical-culture"],
  },

  {
    id: "brazil",
    name: "Brazil",
    shortLabel: "Brazil",
    accent: "#C9A227",
    headline:
      "An exceptional individual-talent production system has succeeded most clearly when expressive attacking tradition and collective structure were reconciled, not when either dominated alone.",
    modelSummary:
      "Brazil is often invoked in English football discourse as shorthand for natural flair, but the more precise historical picture is of a recurring internal tension between an expressive attacking tradition and more structured, collectively organised approaches, with the country's most successful teams typically reconciling rather than choosing between the two. The 1970 World Cup-winning side, frequently cited as the purest expression of Brazilian flair, was also a tactically well-organised team with clear defensive responsibilities. Brazil's development system continues to produce individual attacking talent at a scale few countries can match, but tournament outcomes since 2002, including the widely-discussed 7-1 defeat to Germany in 2014, show that talent production alone has not consistently converted into collective tournament success.",
    strengths: [
      "An exceptional scale of individual technical talent production, sustained across generations and widely regarded as a genuine national developmental strength",
      "A strong attacking and expressive footballing tradition ('jogo bonito') that has shaped global perceptions of attractive attacking play",
      "Evidence, particularly from the 1970 and 1994-2002 eras, that Brazil's most successful teams combined attacking expression with real tactical and defensive organisation rather than relying on flair alone",
      "Cultural weight and footballing identity strong enough to sustain public and institutional investment in player development across decades",
      "A track record of adapting tactical approach across eras, from the more expressive 1958-1970 sides to the more pragmatic 1994 and 2002 World Cup winners",
    ],
    caveats: [
      "The popular 'jogo bonito' framing understates the tactical organisation present in Brazil's most successful sides, including 1970, and risks treating flair and structure as opposites rather than as elements that have to be reconciled",
      "The 7-1 defeat to Germany at the 2014 World Cup, played in Brazil, is widely cited as evidence that individual talent production had, at that point, not been matched by collective tactical organisation at senior level, though the specific causes of that result are still debated",
      "Brazil's domestic league development pathway differs importantly from Europe's in that many of its most talented young players move to European clubs relatively early, meaning senior internationals' footballing education is often completed abroad rather than domestically",
    ],
    dimensions: {
      leagueStructure:
        "Brazilian domestic football (Brasileirão) remains an important early development league, though the majority of Brazil's senior internationals in recent decades have played their peak years in European leagues.",
      federationPolicy:
        "The CBF has invested in youth competition structures domestically, though Brazilian player development is also heavily shaped by informal and street-football traditions outside formal federation programmes.",
      youthDevelopment:
        "Brazilian youth development is often described as combining formal club academy structures with a strong informal ('futsal' and street-football) developmental culture that shapes technical ability from a young age.",
      coachEducation:
        "Brazilian coach education and senior-team tactical approaches have varied considerably by era and by individual coach, without one dominant institutional doctrine comparable to Coverciano or the DFB's post-2000 reform.",
      seniorTactics:
        "Ranges from the organised-but-expressive 1970 team, through the more explicitly pragmatic and defensively solid 1994 and 2002 World Cup winners, to less settled and more individually reliant sides in some later tournaments.",
      playerQuality:
        "Consistently exceptional at the individual level across generations; the open question in this case study is specifically about collective organisation rather than talent.",
      historicalPeriod:
        "Spans the 1958-1970 attacking era, the more pragmatic 1994-2002 World Cup-winning teams, and the post-2006 period including the 2014 semi-final defeat.",
      tournamentOutcomes:
        "World Cup winners 1958, 1962, 1970, 1994, 2002; World Cup semi-finalists on home soil in 2014, losing 7-1 to Germany.",
      interpretation:
        "Read here as evidence that individual talent production, however exceptional, is not by itself equivalent to collective tactical fluency: Brazil's own most successful eras combined talent with real organisation, and its most painful recent result is widely read as a collective, not an individual, failure.",
    },
    eras: [
      {
        id: "brazil-1958-1970",
        period: "1958-1970",
        title: "The expressive attacking era",
        summary:
          "Brazil won three World Cups in this period, culminating in the 1970 team widely regarded as one of the greatest attacking sides in football history.",
        interpretation:
          "Frequently remembered purely for attacking flair; football historians increasingly emphasise that the 1970 side also had clear defensive organisation and tactical discipline.",
        contested: true,
        sourceIds: ["brazil-development-structures", "inverting-the-pyramid"],
      },
      {
        id: "brazil-1994-2002",
        period: "1994-2002",
        title: "Pragmatic World Cup wins",
        summary:
          "Brazil won the World Cup in 1994 and 2002 with teams generally regarded as more tactically pragmatic and defensively organised than the expressive teams of the 1958-1970 era.",
        interpretation:
          "Often read as Brazil successfully reconciling attacking tradition with collective defensive structure, though some critics argued the 1994 team specifically sacrificed too much attacking expression.",
        contested: true,
        sourceIds: ["brazil-development-structures"],
      },
      {
        id: "brazil-post-2006",
        period: "2006-present",
        title: "Talent production without consistent collective success",
        summary:
          "Since the 2006 World Cup, Brazil has continued to produce exceptional individual talent but has not matched its earlier record of collective tournament success, most visibly in the 2014 semi-final defeat to Germany.",
        interpretation:
          "Widely read as evidence that individual talent production and collective tactical organisation are separate variables that both need to be present, a central argument of this site's broader case.",
        sourceIds: ["brazil-development-structures"],
      },
    ],
    sourceIds: ["brazil-development-structures", "inverting-the-pyramid"],
  },

  {
    id: "netherlands",
    name: "Netherlands",
    shortLabel: "Netherlands",
    accent: "#C1642F",
    headline:
      "A coherent, globally influential footballing philosophy shaped how much of the world thinks about tactics. Producing an admired footballing idea has not, on its own, reliably won the Netherlands a major tournament.",
    modelSummary:
      "The Netherlands is arguably the clearest case study in the difference between tactical influence and tournament success. Total Football, developed at Ajax and the national team under Rinus Michels and embodied by Johan Cruyff in the late 1960s and 1970s, is one of the most influential tactical ideas in football history, shaping coaching thought across Europe and directly influencing Spain's later possession-based model via Cruyff's time at Barcelona. Yet the Netherlands lost consecutive World Cup finals in 1974 and 1978 and has never won the tournament. The KNVB's coach education continues to promote a coherent, clearly articulated footballing philosophy, and this coherence is a genuine institutional strength. But the Dutch case is a direct caution against assuming that having a clear, admired football identity is the same thing as being well-equipped to win knockout tournaments.",
    strengths: [
      "Development and articulation of Total Football, one of the most influential tactical ideas in the sport's history, with effects still visible in modern positional play",
      "A federation coach-education system (KNVB) that maintains an unusually coherent and clearly articulated footballing philosophy across age groups",
      "Direct, traceable influence on other successful national models, most notably feeding into Spain's possession-based approach via Johan Cruyff's subsequent role at Barcelona",
      "A recognisable footballing identity that has helped sustain a strong reputation for developing technically and tactically literate players relative to the country's population size",
      "Demonstrated willingness in some eras to depart from the 'total football' identity tactically when circumstances demanded it, including more direct, pragmatic approaches in later tournaments",
    ],
    caveats: [
      "Despite its tactical influence, the Netherlands has never won a World Cup, including defeats in the 1974 and 1978 finals: the clearest evidence on this site that producing an admired footballing idea is not equivalent to winning tournaments",
      "The 'total football' identity is sometimes presented as a fixed, permanent Dutch national character; in practice Dutch teams have varied tactically across eras, including notably pragmatic and physical approaches in some more recent tournament campaigns",
      "Some critics of Dutch football culture have argued that attachment to a specific philosophical identity has, at times, constrained pragmatic in-tournament decision-making, a genuinely contested claim rather than a settled one",
    ],
    dimensions: {
      leagueStructure:
        "The Eredivisie is a significant development league for young Dutch and international talent but has limited financial weight compared with the largest European leagues, and most senior Dutch internationals move abroad relatively early.",
      federationPolicy:
        "The KNVB has long promoted a clearly articulated national footballing philosophy through its coach education system.",
      youthDevelopment:
        "Dutch academies, particularly Ajax's, are historically associated with a strong positional and technical development curriculum linked to the Total Football tradition.",
      coachEducation:
        "Dutch coach education is widely regarded as producing tactically literate, philosophically coherent coaches, several of whom have had significant international influence outside the Netherlands.",
      seniorTactics:
        "The 1974 and 1978 sides played a high-pressing, positionally fluid system; later Dutch sides have varied, including more pragmatic and direct approaches in some tournament campaigns.",
      playerQuality:
        "Consistently strong relative to the country's population size, though not typically comparable in individual star power to Spain, Brazil or Argentina's most talented generations.",
      historicalPeriod:
        "Spans the 1965-1978 development and peak of Total Football, and the post-1978 period in which the Netherlands has reached further finals and semi-finals without winning the World Cup.",
      tournamentOutcomes:
        "World Cup finalists 1974 and 1978; European Championship winners 1988; World Cup finalists 2010; World Cup semi-finalists 2014; has never won the World Cup.",
      interpretation:
        "The central, carefully-labelled interpretive claim in this case study: tactical influence and coherence are valuable but distinct from tournament-winning capability, and the Netherlands is the clearest evidence available that the two do not automatically go together.",
    },
    eras: [
      {
        id: "netherlands-total-football",
        period: "1965-1978",
        title: "Total Football's development and peak",
        summary:
          "Ajax under Rinus Michels, and the Netherlands national team featuring Johan Cruyff, developed a highly influential positional and pressing system, reaching the 1974 and 1978 World Cup finals without winning either.",
        interpretation:
          "Central evidence for this site's argument that a coherent, admired footballing philosophy does not, by itself, guarantee tournament success.",
        sourceIds: ["netherlands-total-football"],
      },
      {
        id: "netherlands-1988",
        period: "1988",
        title: "European Championship win",
        summary:
          "The Netherlands won its only major men's tournament to date, Euro 1988, with a golden generation including Ruud Gullit, Frank Rijkaard and Marco van Basten.",
        sourceIds: ["knvb-philosophy"],
      },
      {
        id: "netherlands-2010-2014",
        period: "2010-2014",
        title: "Pragmatic tournament runs",
        summary:
          "The Netherlands reached the 2010 World Cup final playing a notably more physical, less possession-oriented style than the Total Football tradition, and reached the 2014 semi-finals with a similarly pragmatic approach.",
        interpretation:
          "Often discussed within Dutch football culture as a departure from national footballing identity in the name of results, illustrating the tension between philosophical coherence and tournament pragmatism.",
        contested: true,
        sourceIds: ["knvb-philosophy", "tournament-possession-data"],
      },
    ],
    sourceIds: ["knvb-philosophy", "netherlands-total-football"],
  },

  {
    id: "croatia",
    name: "Croatia",
    shortLabel: "Croatia",
    accent: "#4A6A8A",
    headline:
      "Institutional continuity and an efficient, midfield-centred technical culture have let a small footballing nation repeatedly punch above its playing-population size.",
    modelSummary:
      "Croatia is the clearest case study on this site of what continuity and efficient use of a limited talent pool can achieve without the scale of production available to England, France or Brazil. Since its first tournament appearances as an independent nation in the 1990s, Croatia has consistently produced technically excellent central-midfield players and sustained a recognisable footballing identity across multiple tournament cycles, reaching the 1998 World Cup semi-final, the 2018 World Cup final and the 2022 semi-final with different generations of players. The lesson for England is not about scale (England's playing population and football economy dwarf Croatia's) but about the value of institutional coherence: a relatively small, consistent coaching and development culture appears to have generated more collective tournament performance per unit of individual talent than several much larger footballing nations.",
    strengths: [
      "Institutional continuity in football development since independence in the early 1990s, sustained across multiple coaching generations",
      "Efficient use of a comparatively small playing population, converting a modest talent pool into repeated deep tournament runs",
      "A strong and recognisable technical and passing culture concentrated in central-midfield positions, producing a disproportionate number of internationally elite midfielders relative to population size",
      "Institutional coherence between domestic development and the senior national team, with a settled sense of how Croatian teams are expected to play",
      "Demonstrated resilience across generational transitions: reaching tournament semi-finals or finals in 1998, 2018 and 2022 with substantially different playing personnel each time",
    ],
    caveats: [
      "Croatia's specific tactical and developmental mechanisms are less publicly documented in accessible English-language material than those of the Spanish, German or French federations, and firmer claims require locating and verifying Croatian-language or specialist sources",
      "As a small footballing nation with a correspondingly small pool of world-class players, Croatia's model may not scale in any straightforward way to a country the size of England, and this case study should be read for its lesson about continuity rather than as a template",
      "Croatia's recent tournament success is closely associated with an exceptional individual generation of central midfielders (including at the 2018 and 2022 World Cups); how much is institutional versus a specific generational talent peak is not fully settled",
    ],
    dimensions: {
      leagueStructure:
        "Croatian domestic football (Prva HNL) plays a significant early development role, but the great majority of Croatia's senior internationals move to major European leagues relatively young.",
      federationPolicy:
        "The HNS has maintained relatively stable developmental and coaching structures since Croatian independence, without the kind of large-scale publicised reform seen in Germany post-2000.",
      youthDevelopment:
        "Croatian youth development is associated with a strong emphasis on technical ability and passing range, particularly in central-midfield positions.",
      coachEducation:
        "Croatian coach education has produced a number of internationally respected coaches and a broadly consistent developmental approach, though detailed public documentation is more limited than for larger federations.",
      seniorTactics:
        "Croatian senior teams across the 1998, 2018 and 2022 tournament cycles have shared a recognisable emphasis on midfield control and technical passing, adapted to different opponents and tournament contexts.",
      playerQuality:
        "Individual quality has been concentrated in a small number of exceptional central-midfield players across generations, rather than depth across every position.",
      historicalPeriod:
        "Spans Croatia's first tournament appearances as an independent nation in the mid-1990s through to the 2018 and 2022 World Cup campaigns.",
      tournamentOutcomes:
        "World Cup semi-finalists 1998; World Cup finalists 2018; World Cup semi-finalists (third place) 2022. A strong record relative to the country's playing population.",
      interpretation:
        "Read here primarily as a lesson about institutional continuity and efficient talent use rather than as a scalable template; the relevant transferable idea for England is coherence over time, not any specific Croatian tactical detail.",
    },
    eras: [
      {
        id: "croatia-1998",
        period: "1994-1998",
        title: "First major tournament success as an independent nation",
        summary:
          "Croatia reached the 1998 World Cup semi-final in only its second major tournament appearance as an independent nation, with a golden generation including Davor Šuker.",
        sourceIds: ["hns-croatia-continuity"],
      },
      {
        id: "croatia-2018",
        period: "2014-2018",
        title: "World Cup final run",
        summary:
          "Croatia reached the 2018 World Cup final, its best-ever tournament result, built around a technically outstanding central-midfield generation including Luka Modrić.",
        sourceIds: ["hns-croatia-continuity"],
      },
      {
        id: "croatia-2022",
        period: "2019-2022",
        title: "Sustained success into a new generation",
        summary:
          "Croatia reached the 2022 World Cup semi-final, finishing third, demonstrating that its 2018 tournament run was not a one-off despite an ageing core of players.",
        interpretation:
          "Supports reading Croatia's success as reflecting institutional continuity rather than a single generational peak, though the core midfield group overlapped considerably between 2018 and 2022.",
        contested: true,
        sourceIds: ["hns-croatia-continuity"],
      },
    ],
    sourceIds: ["hns-croatia-continuity"],
  },
];
